// D-6. Una captura estática confirmada basta para calcular la referencia cada día.
const ZONA = 'America/Bogota';
const DIA = 86400000;
const PRECIO = 199900;
const calendario = new Intl.DateTimeFormat('en-CA', {timeZone: ZONA, year: 'numeric', month: '2-digit', day: '2-digit'});
const fechaLarga = new Intl.DateTimeFormat('es-CO', {timeZone: ZONA, year: 'numeric', month: 'long', day: 'numeric'});
const pesos = new Intl.NumberFormat('es-CO', {maximumFractionDigits: 0});

// ISO completo, con zona explícita y calendario real. Date.parse solo aceptaría algunos días imposibles.
export function instanteISO(valor) {
  if (typeof valor !== 'string') return null;
  const partes = /^(\d{4}-\d{2}-\d{2})T(\d{2}:\d{2}:\d{2})(?:\.(\d{1,3}))?(Z|([+-])(\d{2}):(\d{2}))$/.exec(valor);
  if (!partes || Number(partes[1].slice(0, 4)) < 2000) return null;
  const horas = Number(partes[6] ?? 0), minutos = Number(partes[7] ?? 0);
  if (horas > 14 || minutos > 59 || (horas === 14 && minutos !== 0)) return null;
  const desplazamiento = (partes[5] === '-' ? -1 : 1) * (horas * 60 + minutos) * 60000;
  const instante = Date.parse(valor);
  if (!Number.isFinite(instante)) return null;
  const local = new Date(instante + desplazamiento).toISOString();
  return local.slice(0, 19) === `${partes[1]}T${partes[2]}` ? instante : null;
}

export function normalizarPlan(fila) {
  if (!fila || Array.isArray(fila) || fila.id !== 'premium' || fila.precio_cop !== PRECIO
    || fila.activo !== true || instanteISO(fila.vence_fijo) === null) return null;
  return {id: 'premium', precio_cop: PRECIO, vence_fijo: fila.vence_fijo, activo: true};
}

function diaBogota(instante) {
  const p = Object.fromEntries(calendario.formatToParts(instante).map(x => [x.type, x.value]));
  return Date.UTC(Number(p.year), Number(p.month) - 1, Number(p.day)) / DIA;
}

function milisegundos(ahora) {
  const instante = ahora instanceof Date ? ahora.getTime() : typeof ahora === 'number' ? ahora : NaN;
  return new Date(instante).getTime();
}

export function vigenciaConfirmada(oferta, ahora) {
  const instante = milisegundos(ahora);
  const capturado = instanteISO(oferta?.capturado);
  const plan = normalizarPlan(oferta?.plan);
  if (oferta?.version !== 1 || !Number.isFinite(instante) || capturado === null || capturado > instante || !plan) return null;
  const fin = instanteISO(plan.vence_fijo);
  if (fin <= instante || capturado >= fin) return null;
  // La suscripción deja de estar vigente en fin; un vencimiento a las 00:00
  // no concede acceso durante el día que acaba de empezar.
  const ultimo = fin - 1;
  return {plan, fin, ultimo, fecha_iso: calendario.format(ultimo), larga: fechaLarga.format(ultimo),
    corta: new Intl.DateTimeFormat('es-CO', {timeZone: ZONA, year: 'numeric', month: 'short', day: 'numeric'}).format(ultimo)};
}

export function calcularEquivalencia(oferta, ahora) {
  const vigente = vigenciaConfirmada(oferta, ahora);
  if (!vigente) return null;
  const dias = diaBogota(vigente.ultimo) - diaBogota(milisegundos(ahora)) + 1;
  if (dias < 7) return null;
  return {precio_cop: vigente.plan.precio_cop, dias, semanal_cop: Math.ceil(vigente.plan.precio_cop * 7 / dias),
    fecha_referencia: fechaLarga.format(milisegundos(ahora)), fecha_fin: vigente.larga};
}

export function textoEquivalencia(resultado) {
  if (!resultado) return '';
  return `Como referencia, el pago único de $${pesos.format(resultado.precio_cop)} COP equivale a unos $${pesos.format(resultado.semanal_cop)} COP por semana de preparación hasta el ${resultado.fecha_fin}. `
    + `Incluye una especialidad y su base común. Equivalencia orientativa calculada al ${resultado.fecha_referencia}.`;
}

// La integración pasa oferta.json una vez. Despertar y cambiar de día solo vuelven a calcular.
export function iniciarOferta(oferta, {documento = globalThis.document, reloj = () => new Date(),
  programar = globalThis.setTimeout, cancelar = globalThis.clearTimeout} = {}) {
  const elemento = documento?.getElementById('equivalencia-semanal');
  if (!elemento) return () => {};
  const ventana = documento.defaultView;
  let temporizador;
  let cerrado = false;
  const actualizar = () => {
    if (cerrado) return;
    cancelar(temporizador);
    const ahora = reloj();
    const vigencia = vigenciaConfirmada(oferta, ahora);
    if (vigencia) for (const fecha of documento.querySelectorAll?.('[data-vigencia-premium]') ?? []) {
      fecha.textContent = fecha.dataset.formato === 'corto' ? vigencia.corta : vigencia.larga;
      fecha.setAttribute('datetime', vigencia.fecha_iso);
    }
    const resultado = calcularEquivalencia(oferta, ahora);
    elemento.textContent = textoEquivalencia(resultado);
    elemento.hidden = resultado === null;
    const instante = milisegundos(ahora);
    if (!Number.isFinite(instante)) return;
    // Medianoche de Bogotá equivale a las 05:00 UTC. Su calendario carece de cambio estacional.
    const medianoche = (diaBogota(instante) + 1) * DIA + 5 * 3600000;
    const fin = instanteISO(normalizarPlan(oferta?.plan)?.vence_fijo);
    const siguiente = fin !== null && fin > instante ? Math.min(medianoche, fin) : medianoche;
    temporizador = programar(actualizar, Math.max(1, siguiente - instante + 1));
  };
  const despertar = () => { if (!documento.hidden) actualizar(); };
  documento.addEventListener('visibilitychange', despertar);
  ventana?.addEventListener('focus', actualizar);
  ventana?.addEventListener('pageshow', actualizar);
  actualizar();
  return () => {
    cerrado = true;
    cancelar(temporizador);
    documento.removeEventListener('visibilitychange', despertar);
    ventana?.removeEventListener('focus', actualizar);
    ventana?.removeEventListener('pageshow', actualizar);
  };
}
