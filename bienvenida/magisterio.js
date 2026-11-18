import { instanteISO } from "./oferta.js";

if (location.hostname === "stoa-app-docente.onrender.com") {
  location.replace("https://magisteriostoa.lat/bienvenida/" + location.search + location.hash);
}

const casos = {
  filosofia: {
    area: "FILOSOFÍA · ARGUMENTACIÓN", titulo: "¿Tener una cifra basta?",
    contexto: "En décimo, un estudiante afirma que todo cartel que presenta una cifra ofrece evidencia suficiente para defender su conclusión. La clase examina carteles de una feria escolar y acepta los datos que cada ejemplo registra.",
    pregunta: "¿Cuál de los carteles constituye un contraejemplo a esa afirmación?", correcta: 1,
    opciones: [
      ["Un cartel afirma que el patio está vacío y muestra una fotografía del patio completo en el momento descrito, sin indicar cifras.", "Ilustra que se puede sostener una afirmación sin cifras. La tesis examinada habla de carteles que sí presentan una cifra, por eso este ejemplo queda fuera de su condición."],
      ["Un cartel afirma que aumentó el reciclaje y registra diez bolsas recogidas hoy, sin informar cuánto se recogía antes.", "El cartel cumple la condición de presentar una cifra, pero diez bolsas solo informa cuánto se recogió hoy. Para defender que hubo un aumento hace falta compararlo con un registro previo."],
      ["Un cartel afirma que llegaron veinte estudiantes y muestra el registro de entrada completo con veinte nombres distintos verificados.", "La cifra se apoya en un registro pertinente y completo para esa afirmación. Es un caso compatible con la tesis, así que no la refuta."],
    ],
  },
  artes: {
    area: "ARTES ESCÉNICAS · COMPOSICIÓN", titulo: "¿Desde dónde se entiende la escena?",
    contexto: "En octavo, tres estudiantes muestran cómo una carta cambia de destinatario sin usar palabras. Desde el frente se ve la entrega. Desde un costado, el cuerpo de una intérprete la tapa y el público cree que la carta sigue con la primera persona.",
    pregunta: "¿Qué ajuste permite comprobar si la entrega se entiende desde ambos lugares?", correcta: 2,
    opciones: [
      ["Mantener la posición y prolongar la pausa antes de la entrega para dirigir la atención del público hacia la carta.", "Una pausa puede orientar la atención. Mientras el cuerpo siga bloqueando la vista lateral, ese público seguirá sin ver el instante de la entrega."],
      ["Cambiar a la intérprete que recibe la carta y conservar la posición para comparar la claridad del gesto entre ambas versiones.", "Cambiar a la intérprete permite comparar la ejecución del gesto, pero deja sin probar la relación espacial que causó el problema desde el costado."],
      ["Girar la entrega hacia un espacio libre y pedir a observadores de ambos lados que identifiquen quién recibió la carta.", "El giro cambia la línea de visión sin añadir diálogo. Preguntar por el destinatario desde ambos lugares permite comprobar si se entendió la acción, además de si llegó a verse."],
    ],
  },
  primaria: {
    area: "PRIMARIA · MATEMÁTICAS", titulo: "¿Qué revela el procedimiento?",
    contexto: "Una receta para 4 personas usa 6 tazas de agua. Para 8 personas, una estudiante propone 10 tazas porque sumó 4 al número de tazas.",
    pregunta: "¿Qué intervención ayuda a revisar su razonamiento?", correcta: 0,
    opciones: [
      ["Pedirle que compruebe si al duplicar las personas también se duplica cada ingrediente.", "Comparar los dos cambios muestra que la relación se conserva al duplicar ambas cantidades. Para 8 personas corresponden 12 tazas."],
      ["Pedirle que explique de dónde salió el 4 y dejar la comparación para otra actividad.", "Explicar de dónde salió el 4 hace visible la estrategia. Para comprobar si funciona en esta receta, la estudiante también necesita contrastar las cantidades."],
      ["Mostrarle cómo aplicar una regla de tres y pedirle que copie el procedimiento.", "La regla de tres puede producir 12. Copiarla deja abierta la duda de si la estudiante distingue entre sumar lo mismo y duplicar ambos valores."],
    ],
  },
  fisica: {
    area: "FÍSICA · MOVIMIENTO", titulo: "El significado de una recta.",
    contexto: "Al observar una gráfica de posición frente al tiempo, un estudiante ve un tramo horizontal a 3 metros. Afirma que allí el móvil avanza a velocidad constante porque la línea es recta.",
    pregunta: "¿Qué le pedirías comprobar para interpretar ese tramo?", correcta: 2,
    opciones: [
      ["Señalar el valor de 3 metros y compararlo con la posición inicial del móvil.", "Esa comparación ubica el móvil respecto a su inicio. Para saber si se mueve durante el tramo debe comprobar si cambia de posición entre dos instantes de ese tramo."],
      ["Comparar cuánto dura el tramo horizontal frente al tramo inclinado.", "La duración informa cuánto tiempo pasa en cada tramo. Sin comparar posiciones no permite determinar la velocidad."],
      ["Elegir dos instantes del tramo y calcular cuánto cambió la posición entre ellos.", "La posición es 3 metros en ambos instantes. Con cambio de posición cero y tiempo transcurrido positivo, la velocidad media del tramo es cero."],
    ],
  },
  quimica: {
    area: "QUÍMICA · SOLUCIONES", titulo: "¿Qué cambia al añadir agua?",
    contexto: "En una clase de décimo, un grupo mezcla 100 mL de una solución de sal con 100 mL de agua. Obtiene 200 mL de solución sin derramar líquido. Una estudiante dice que, como la solución queda menos concentrada, ahora contiene menos sal.",
    pregunta: "¿Qué comparación ayuda a revisar la explicación de la estudiante?", correcta: 0,
    opciones: [
      ["Comparar la cantidad total de sal y la cantidad de sal por cada 100 mL antes y después de agregar el agua.", "La cantidad total de sal se conserva porque solo se añade agua. Al duplicarse el volumen, cada 100 mL de la solución final contiene la mitad de la sal que había en los 100 mL iniciales."],
      ["Comparar la cantidad total de sal inicial con la que queda en 100 mL finales y atribuir la diferencia a una pérdida de sal.", "Los 100 mL iniciales eran toda la solución. Los 100 mL finales son la mitad de la mezcla. La otra mitad contiene el resto de la sal, así que la comparación no demuestra una pérdida."],
      ["Comparar el volumen inicial con el final y usar ese aumento para concluir que la cantidad total de sal también se duplica.", "El volumen aumenta por el agua añadida, que no aporta sal. Para interpretar la dilución hay que distinguir cuánto soluto hay en total y cuánto hay por unidad de volumen."],
    ],
  },
  pedagogia: {
    area: "BASE COMÚN · EVALUACIÓN", titulo: "¿Qué evidencia importa?",
    contexto: "En una actividad de Sociales, el objetivo es comparar dos testimonios sobre un mismo hecho. Un estudiante con baja visión no logra leer uno de los documentos escaneados.",
    pregunta: "¿Cómo puede participar y demostrar el mismo aprendizaje?", correcta: 1,
    opciones: [
      ["Entregarle un resumen de las coincidencias y pedirle que lo exponga al grupo.", "El resumen reduce la barrera de lectura, pero ya entrega la comparación que el estudiante necesita construir con evidencias de los testimonios."],
      ["Entregarle ambos testimonios en un formato accesible y usar el mismo criterio de comparación.", "Un formato accesible elimina la barrera de lectura y permite evaluar el objetivo compartido: identificar coincidencias y diferencias con evidencia de ambas fuentes."],
      ["Asignarle una lectura accesible sobre el hecho y pedirle que ordene los eventos.", "La actividad sería accesible, aunque cambia lo que se evalúa. Ordenar hechos no permite valorar cómo compara dos perspectivas."],
    ],
  },
};

const movimiento = window.matchMedia("(prefers-reduced-motion: reduce)");

function emitirEvento(nombre, detail) {
  document.dispatchEvent(new CustomEvent(nombre, { detail, bubbles: true }));
}

function prepararDemo() {
  const cuaderno = document.getElementById("cuaderno");
  const retro = document.getElementById("retro");
  const explicaciones = document.getElementById("explicaciones") ?? document.getElementById("explicaciones-muestra");
  const primeraOpcion = cuaderno?.querySelector("button[data-respuesta]");
  const opciones = document.getElementById("caso-opciones") ?? primeraOpcion?.closest("fieldset");
  if (!cuaderno || !retro || !explicaciones || !opciones) return;

  const alternativas = [...opciones.querySelectorAll('button[data-respuesta], button[role="radio"]')];
  const botonesCaso = [...document.querySelectorAll("button[data-caso]")];
  const siguiente = document.getElementById("demo-siguiente");
  const folio = document.getElementById("caso-folio");
  const tituloCaso = document.getElementById("caso-titulo");
  const orden = Object.keys(casos);
  let claveActiva = "filosofia";
  let animacionMuestra;

  opciones.setAttribute("role", "radiogroup");
  opciones.setAttribute("aria-labelledby", "caso-pregunta");
  if (tituloCaso) tituloCaso.tabIndex = -1;

  function asentarMuestra(elemento, distancia, duracion) {
    animacionMuestra?.cancel();
    if (movimiento.matches || typeof elemento.animate !== "function") return;
    animacionMuestra = elemento.animate(
      [{ transform: `translateY(${distancia}px)`, opacity: .88 }, { transform: "translateY(0)", opacity: 1 }],
      { duration: duracion, easing: "cubic-bezier(.2,.75,.25,1)" },
    );
  }
  movimiento.addEventListener("change", () => { if (movimiento.matches) animacionMuestra?.cancel(); });

  function moverPuntoDeTabulacion(posicion) {
    alternativas.forEach((boton, indice) => { boton.tabIndex = indice === posicion ? 0 : -1; });
  }

  function mostrarCaso(clave) {
    if (!Object.hasOwn(casos, clave) || clave === claveActiva) return;
    claveActiva = clave;
    const caso = casos[clave];
    if (folio) folio.textContent = `Caso ${orden.indexOf(clave) + 1} de ${orden.length}`;
    for (const campo of ["area", "titulo", "contexto", "pregunta"]) {
      document.getElementById(`caso-${campo}`).textContent = caso[campo];
    }
    botonesCaso.forEach(boton => boton.setAttribute("aria-pressed", String(boton.dataset.caso === clave)));
    alternativas.forEach((boton, posicion) => {
      boton.setAttribute("role", "radio");
      boton.setAttribute("aria-checked", "false");
      boton.removeAttribute("aria-pressed");
      const texto = boton.querySelector("b") ?? boton;
      texto.textContent = caso.opciones[posicion][0];
      delete boton.dataset.correcta;
    });
    moverPuntoDeTabulacion(0);
    retro.textContent = "Elige una alternativa para ver el resultado.";
    delete retro.dataset.resultado;
    explicaciones.hidden = true;
    explicaciones.replaceChildren();
    if (siguiente) siguiente.hidden = true;
    asentarMuestra(cuaderno, 5, 230);
  }

  function responder(posicion) {
    moverPuntoDeTabulacion(posicion);
    const caso = casos[claveActiva];
    if (alternativas[posicion].getAttribute("aria-checked") === "true") return;
    const correcta = caso.correcta === posicion;
    alternativas.forEach((alternativa, indice) => {
      alternativa.setAttribute("aria-checked", String(indice === posicion));
      alternativa.dataset.correcta = String(indice === caso.correcta);
    });
    const titulo = document.createElement("strong");
    const letra = "ABC"[caso.correcta];
    titulo.textContent = correcta ? `Acertaste. La opción ${letra} es correcta.` : `La opción ${letra} es la más adecuada.`;
    retro.dataset.resultado = correcta ? "acierto" : "revision";
    retro.replaceChildren(titulo);
    const tarjetas = caso.opciones.map(([, razon], indice) => {
      const tarjeta = document.createElement("div");
      tarjeta.dataset.correcta = String(indice === caso.correcta);
      const encabezado = document.createElement("p");
      encabezado.className = "explicacion-titulo";
      encabezado.textContent = `Por qué ${"ABC"[indice]} ${indice === caso.correcta ? "es correcta" : "no lo es"}`;
      const detalle = document.createElement("p");
      detalle.textContent = razon;
      tarjeta.append(encabezado, detalle);
      return tarjeta;
    });
    explicaciones.replaceChildren(...tarjetas);
    explicaciones.hidden = false;
    if (siguiente) siguiente.hidden = false;
    asentarMuestra(explicaciones, 6, 260);
    emitirEvento("demo_case_answered", { case_id: claveActiva });
  }

  botonesCaso.forEach(boton => boton.addEventListener("click", () => mostrarCaso(boton.dataset.caso)));
  alternativas.forEach((boton, posicion) => {
    boton.addEventListener("click", () => responder(posicion));
    boton.addEventListener("keydown", evento => {
      const adelante = evento.key === "ArrowRight" || evento.key === "ArrowDown";
      const atras = evento.key === "ArrowLeft" || evento.key === "ArrowUp";
      if (!adelante && !atras) return;
      evento.preventDefault();
      const destino = (posicion + (adelante ? 1 : -1) + alternativas.length) % alternativas.length;
      moverPuntoDeTabulacion(destino);
      alternativas[destino].focus();
    });
  });
  siguiente?.addEventListener("click", () => {
    if (siguiente.hidden) return;
    mostrarCaso(orden[(orden.indexOf(claveActiva) + 1) % orden.length]);
    tituloCaso?.focus();
  });
}

prepararDemo();

const grupos = {
  humanidades: ["Humanidades y ciudadanía", "Practica cómo interpretar fuentes, justificar una decisión y llevar los conceptos al aula."],
  ciencias: ["Ciencias, matemática y tecnología", "Relaciona modelos, representaciones y evidencia para explicar decisiones de aula."],
  infancia: ["Infancia y primeros aprendizajes", "Estudia cómo observar procesos, planear experiencias y acompañar aprendizajes."],
  artes: ["Artes y expresión", "Conecta la técnica, la interpretación y los criterios con los que valorarías una producción."],
  gestion: ["Orientación y gestión", "Trabaja situaciones de acompañamiento, convivencia y gestión según el alcance de tu cargo."],
};
const temarios = {
  filosofia: ["humanidades", "Argumentación", "Lectura crítica", "Didáctica filosófica"],
  primaria: ["infancia", "Alfabetización inicial y comprensión", "Numeración y operaciones con significado", "Geometría, medida y representación"],
  preescolar: ["infancia", "Desarrollo integral", "Juego, arte, literatura y exploración", "Lenguaje emergente"],
  matematicas: ["ciencias", "Sentido numérico y proporcionalidad", "Álgebra y funciones", "Geometría y demostración"],
  fisica: ["ciencias", "Medición e incertidumbre", "Movimiento y gráficas", "Fuerzas y leyes de Newton"],
  quimica: ["ciencias", "Átomo y periodicidad", "Enlace y propiedades", "Ecuaciones y estequiometría"],
  ciencias: ["ciencias", "Célula y organización de los seres vivos", "Genética y herencia", "Evolución y evidencia"],
  lenguaje: ["humanidades", "Comprensión inferencial y crítica", "Argumentación", "Escritura como proceso"],
  ingles: ["humanidades", "Enfoque comunicativo", "Estrategias de lectura", "Escucha e inteligibilidad"],
  sociales: ["humanidades", "Tiempo histórico y fuentes", "Territorio y cartografía", "Estado y participación"],
  etica: ["humanidades", "Juicio moral y autonomía", "Equidad y participación", "Responsabilidad reparadora"],
  religion: ["humanidades", "Libertad de conciencia", "Símbolos y contextos", "Relatos y tradiciones"],
  economia_politica: ["humanidades", "Escasez y costo de oportunidad", "Oferta y demanda", "Inflación y poder adquisitivo"],
  artistica: ["artes", "Experiencia estética", "Composición visual", "Ritmo y escucha"],
  artistica_plasticas: ["artes", "Composición y contraste", "Color y valor tonal", "Dibujo y representación"],
  artistica_escenicas: ["artes", "Acción dramática", "Cuerpo y espacio", "Voz y escucha"],
  artistica_musica: ["artes", "Pulso y subdivisión", "Contorno y afinación", "Timbre y producción sonora"],
  educacion_fisica: ["ciencias", "Competencia motriz", "Condición física y dosificación", "Juego y aprendizaje táctico"],
  tecnologia: ["ciencias", "Sistemas y necesidades", "Diseño y prototipos", "Pensamiento computacional"],
  orientador: ["gestion", "Rol de orientación", "Convivencia y rutas", "Orientación de trayectorias"],
  coordinador: ["gestion", "Liderazgo pedagógico", "Currículo y evaluación", "Trabajo colegiado"],
  rector: ["gestion", "Gobierno escolar", "Gestión académica e inclusión", "Transparencia de recursos"],
  director_rural: ["gestion", "PEI y pertinencia territorial", "Aula multigrado", "Permanencia y comunidad"],
};

const selector = document.getElementById("selector-perfil");
const buscarPerfil = document.getElementById("buscar-perfil");
const estadoBusqueda = document.getElementById("buscar-perfil-estado");
const perfiles = new Map(Array.from(selector?.options ?? [], opcion => [opcion.value, {
  nombre: opcion.label.trim(), contexto: opcion.dataset.contexto || "no_rural", opcion,
}]));
const conteosIds = ["propias-lecciones", "propias-preguntas", "comunes-lecciones", "comunes-preguntas"];
const camposConteo = ["lecciones_propias", "preguntas_propias", "lecciones_comunes", "preguntas_comunes"];
const camposPerfil = ["clave", "nombre", "contexto"];
const formatoNumero = new Intl.NumberFormat("es-CO");
const formatoFecha = new Intl.DateTimeFormat("es-CO", { dateStyle: "medium", timeZone: "America/Bogota" });
const etiquetaCobertura = document.getElementById("cobertura-etiqueta");
const detalleCobertura = document.getElementById("cobertura-detalle");
const conteos = document.getElementById("conteos-perfil");
const ficha = document.getElementById("ficha-perfil");
const grupoPerfil = document.getElementById("grupo-perfil");
const nombrePerfil = document.getElementById("nombre-perfil") ?? document.getElementById("perfil-temas-titulo");
const textoPerfil = document.getElementById("texto-perfil");
const ayudaPerfil = document.getElementById("ayuda-perfil");
const listaTemas = document.getElementById("temas-perfil");
const perfilCta = document.getElementById("perfil-cta");
const claveInicial = Array.from(selector?.options ?? []).find(opcion => opcion.defaultSelected)?.value ?? selector?.options[0]?.value;
const nombreInicial = perfiles.get(claveInicial)?.nombre;
const ctaInicial = perfilCta?.textContent;
const ayudaInicial = ayudaPerfil?.textContent.trim();
const fichaInicial = nombrePerfil?.textContent.trim() ? {
  grupo: grupoPerfil?.textContent,
  descripcion: textoPerfil?.textContent,
  temas: Array.from(listaTemas?.children ?? [], item => item.textContent),
} : null;
const vigenciaCatalogo = 7 * 24 * 60 * 60 * 1000;
let ofertas = new Map();
let capturado = null;

function capturaReciente(fecha, ahora = Date.now()) {
  return fecha !== null && fecha <= ahora && ahora - fecha <= vigenciaCatalogo;
}

function mostrarPerfil() {
  const clave = selector.value;
  const perfil = perfiles.get(clave);
  if (!perfil) return;
  const [grupo, ...temas] = Object.hasOwn(temarios, clave) ? temarios[clave] : ["humanidades"];
  const [etiqueta, descripcion] = temas.length ? grupos[grupo] : ["Tu especialidad", "Consulta las lecciones y practica con casos de tu perfil."];
  const inicial = clave === claveInicial ? fichaInicial : null;
  ficha.dataset.grupo = grupo;
  grupoPerfil.textContent = inicial?.grupo ?? etiqueta.toLocaleUpperCase("es-CO");
  nombrePerfil.textContent = perfil.nombre;
  textoPerfil.textContent = inicial?.descripcion ?? descripcion;
  ayudaPerfil.textContent = perfil.contexto === "rural"
    ? "Contexto de referencia: plaza rural. Confirma tu perfil desde tu cuenta."
    : ayudaInicial;
  listaTemas.replaceChildren(...(inicial?.temas ?? temas).map(tema => {
    const li = document.createElement("li");
    li.textContent = tema;
    return li;
  }));
  if (nombreInicial && ctaInicial?.includes(nombreInicial)) {
    perfilCta.textContent = ctaInicial.replace(nombreInicial, () => perfil.nombre);
  }
  ficha.hidden = false;

  const oferta = ofertas.get(clave);
  const referencia = capturaReciente(capturado) && oferta?.contexto === perfil.contexto;
  etiquetaCobertura.dataset.estado = referencia ? "referencia" : "sin-confirmar";
  etiquetaCobertura.textContent = referencia ? "Cobertura de referencia" : "";
  etiquetaCobertura.hidden = !referencia;
  detalleCobertura.textContent = referencia ? `Datos del ${formatoFecha.format(capturado)}. Consulta la cobertura en tu cuenta.` : "";
  detalleCobertura.hidden = !referencia;
  conteos.hidden = !referencia;
  conteosIds.forEach((id, i) => {
    document.getElementById(id).textContent = referencia ? formatoNumero.format(oferta[camposConteo[i]]) : "";
  });
}

function normalizarBusqueda(texto) {
  return texto.trim().toLocaleLowerCase("es-CO").normalize("NFD").replace(/\p{M}/gu, "");
}

function filtrarPerfiles() {
  if (!buscarPerfil) return;
  const consulta = normalizarBusqueda(buscarPerfil.value);
  const seleccion = selector.value;
  const opciones = [];
  let coincidencias = 0;
  for (const [clave, { nombre, opcion }] of perfiles) {
    const coincide = normalizarBusqueda(nombre).includes(consulta);
    if (coincide) coincidencias++;
    if (coincide || clave === seleccion) opciones.push(opcion);
  }
  if (opciones.length !== selector.options.length || opciones.some((opcion, indice) => opcion !== selector.options[indice])) {
    selector.replaceChildren(...opciones);
    selector.value = seleccion;
  }
  if (estadoBusqueda) {
    let mensaje = "";
    if (consulta) {
      if (coincidencias === 0) mensaje = "Ningún perfil coincide con la búsqueda.";
      else mensaje = coincidencias === 1 ? "1 perfil coincide con la búsqueda." : `${coincidencias} perfiles coinciden con la búsqueda.`;
    }
    if (estadoBusqueda.textContent !== mensaje) estadoBusqueda.textContent = mensaje;
  }
}

function validarFilas(filas, sonOfertas) {
  if (!Array.isArray(filas) || filas.length > 100) return null;
  const campos = sonOfertas ? [...camposPerfil, ...camposConteo] : camposPerfil;
  const validadas = new Map();
  for (const fila of filas) {
    if (!fila || typeof fila !== "object" || Object.keys(fila).length !== campos.length
      || !campos.every(campo => Object.hasOwn(fila, campo))
      || typeof fila.clave !== "string" || !/^[a-z0-9_-]{1,64}$/.test(fila.clave) || validadas.has(fila.clave)
      || typeof fila.nombre !== "string" || !fila.nombre.trim() || fila.nombre.length > 120
      || !["rural", "no_rural"].includes(fila.contexto)) return null;
    if (sonOfertas && (!camposConteo.every(campo => Number.isSafeInteger(fila[campo]) && fila[campo] >= 0 && fila[campo] <= 100000)
      || fila.preguntas_propias < 60 || fila.lecciones_propias < 10)) return null;
    validadas.set(fila.clave, fila);
  }
  return validadas;
}

function incorporarPerfiles(filas) {
  for (const [clave, fila] of filas) {
    const anterior = perfiles.get(clave);
    const opcion = anterior?.opcion || document.createElement("option");
    const nombre = fila.nombre.trim();
    opcion.value = clave;
    opcion.textContent = nombre;
    perfiles.set(clave, { nombre, contexto: fila.contexto, opcion });
    if (!anterior) selector.add(opcion);
  }
}

async function leerCatalogo(ruta) {
  const controlador = new AbortController();
  const limite = setTimeout(() => controlador.abort(), 2000);
  try {
    const respuesta = await fetch(new URL(ruta, location.origin), {
      priority: "low",
      mode: "same-origin",
      credentials: "omit",
      redirect: "error",
      referrerPolicy: "no-referrer",
      signal: controlador.signal,
    });
    if (respuesta.status !== 200 || !/^application\/json(?:\s*;|$)/i.test(respuesta.headers.get("content-type") ?? "") || !respuesta.body) return null;
    const lector = respuesta.body.getReader();
    const decodificador = new TextDecoder("utf-8", { fatal: true });
    let bytes = 0;
    let texto = "";
    try {
      for (;;) {
        const { value, done } = await lector.read();
        if (done) break;
        bytes += value.byteLength;
        if (bytes > 40000) {
          await lector.cancel();
          return null;
        }
        texto += decodificador.decode(value, { stream: true });
      }
      return JSON.parse(texto + decodificador.decode());
    } finally {
      lector.releaseLock();
    }
  } catch {
    return null;
  } finally {
    clearTimeout(limite);
  }
}

async function cargarPerfiles() {
  const ruta = document.documentElement.dataset.catalogo;
  if (!ruta || !ruta.endsWith(".json") || !/^\/datos\/publico\/catalogo-[a-f0-9]{64}\.json$/.test(ruta)) return;
  const copia = await leerCatalogo(ruta);
  if (copia?.version !== 1) return;
  const fecha = instanteISO(copia.capturado);
  if (!capturaReciente(fecha)) return;
  const directorio = validarFilas(copia.perfiles, false);
  const referencias = validarFilas(copia.ofertas, true);
  if (!directorio?.size || !referencias || [...referencias.values()].some(fila => directorio.get(fila.clave)?.contexto !== fila.contexto)) return;

  incorporarPerfiles(directorio);
  ofertas = referencias;
  capturado = fecha;
  filtrarPerfiles();
  mostrarPerfil();
  setTimeout(mostrarPerfil, Math.max(0, fecha + vigenciaCatalogo - Date.now() + 1));
  window.addEventListener("pageshow", mostrarPerfil);
  document.addEventListener("visibilitychange", mostrarPerfil);
}

if (selector) {
  selector.addEventListener("change", () => {
    filtrarPerfiles();
    mostrarPerfil();
    if (perfiles.has(selector.value)) emitirEvento("profile_selected", { profile_id: selector.value });
  });
  if (buscarPerfil) {
    buscarPerfil.addEventListener("input", filtrarPerfiles);
    buscarPerfil.hidden = false;
    const etiquetaBusqueda = document.getElementById("buscar-perfil-etiqueta");
    if (etiquetaBusqueda) etiquetaBusqueda.hidden = false;
    if (buscarPerfil.value) filtrarPerfiles();
  }
  if (selector.value !== claveInicial) mostrarPerfil();
  void cargarPerfiles();
}

document.addEventListener("click", evento => {
  const enlace = evento.target.closest?.("a[href]");
  if (enlace?.pathname !== "/" || enlace.hash !== "#crear"
    || (enlace.origin !== location.origin && enlace.origin !== "https://magisteriostoa.lat")) return;
  const bloque = enlace.closest("#acceso-movil, .acceso-movil, header, main section, footer");
  const source = enlace.dataset.ctaLocation || bloque?.id || bloque?.classList[0] || "landing";
  emitirEvento("signup_cta_click", { source });
});

function prepararInstalacion() {
  const enlace = document.getElementById("instalacion-abrir");
  const dialogo = document.getElementById("instalacion-dialog");
  if (!enlace || typeof dialogo?.showModal !== "function") return;

  const plataformas = [...dialogo.querySelectorAll('button[data-instalar-plataforma]')];
  const paneles = [...dialogo.querySelectorAll("[data-instalar-panel]")];
  function elegirPlataforma(plataforma) {
    plataformas.forEach(boton => boton.setAttribute("aria-pressed", String(boton.dataset.instalarPlataforma === plataforma)));
    paneles.forEach(panel => { panel.hidden = panel.dataset.instalarPanel !== plataforma; });
  }
  const inicial = plataformas.find(boton => boton.getAttribute("aria-pressed") === "true") ?? plataformas[0];
  const agente = navigator.userAgent;
  const esIOS = /iPhone|iPad|iPod/i.test(agente) || (/Macintosh/i.test(agente) && navigator.maxTouchPoints > 1);
  const plataformaInicial = esIOS ? "ios" : /Android/i.test(agente) ? "android" : inicial?.dataset.instalarPlataforma;
  if (plataformaInicial) elegirPlataforma(plataformaInicial);
  plataformas.forEach(boton => boton.addEventListener("click", () => elegirPlataforma(boton.dataset.instalarPlataforma)));

  let solicitudInstalacion;
  let instalando = false;
  const textoGuia = enlace.textContent;
  enlace.setAttribute("aria-haspopup", "dialog");
  function restablecerGuia() {
    solicitudInstalacion = undefined;
    enlace.textContent = textoGuia;
    enlace.setAttribute("aria-haspopup", "dialog");
  }
  window.addEventListener("beforeinstallprompt", evento => {
    if (typeof evento.prompt !== "function") return;
    evento.preventDefault();
    solicitudInstalacion = evento;
    enlace.textContent = "Instalar app";
    enlace.removeAttribute("aria-haspopup");
  });
  window.addEventListener("appinstalled", restablecerGuia);
  enlace.addEventListener("click", async evento => {
    if (evento.defaultPrevented || evento.button !== 0 || evento.ctrlKey || evento.metaKey || evento.shiftKey || evento.altKey) return;
    evento.preventDefault();
    if (instalando) return;
    if (solicitudInstalacion) {
      const solicitud = solicitudInstalacion;
      restablecerGuia();
      instalando = true;
      try { await solicitud.prompt(); return; }
      catch { /* Si el navegador ya no puede instalar, queda disponible la guía. */ }
      finally { instalando = false; }
    }
    if (!dialogo.open) dialogo.showModal();
  });
  dialogo.addEventListener("close", () => { if (!dialogo.open) enlace.focus({ preventScroll: true }); });
}

prepararInstalacion();

function prepararSelectorDeRutas() {
  const selectorRutas = document.querySelector(".selector-rutas");
  const ficha = document.getElementById("ruta-ocho-ficha");
  if (!selectorRutas || !ficha) return;

  const botones = [...selectorRutas.querySelectorAll("button[data-ruta-materia]")];
  const titulo = document.getElementById("ruta-ocho-materia");
  const alcance = document.getElementById("ruta-ocho-alcance");
  const anuncio = document.getElementById("ruta-ocho-estado");
  const etapas = [...ficha.querySelectorAll(".ruta-ocho-etapas > li")].map(fila => ({
    titulo: fila.querySelector("h4"),
    actividad: fila.querySelector("p"),
  }));
  const guiada = alcance.textContent;
  const orientativa = "Ejemplo orientativo. Tu cuenta muestra el plan y el contenido disponibles para este perfil.";
  const rutas = new Map([
    ["filosofia", { alcance: guiada, etapas: etapas.map(({titulo, actividad}) => [titulo.textContent, actividad.textContent]) }],
    ["artistica_escenicas", { alcance: guiada, etapas: [
      ["Escena, voz y espacio", "Lee los indicios de una escena y prueba cómo cambia su sentido con la voz, el movimiento y el espacio."],
      ["Composición y recepción", "Compón una acción breve. Observa cómo la interpreta el público y usa esa evidencia para revisar la escena."],
      ["Improvisación y territorio", "Improvisa un giro con una consigna accesible y explora un recurso escénico de tu comunidad."],
      ["Relectura y simulacro", "Retoma una escena, explica qué cambió al revisarla y revisa tus errores del simulacro."],
    ] }],
    ["primaria", { alcance: orientativa, etapas: [
      ["Lectura inicial", "Distingue si la dificultad está en reconocer las palabras o en comprender lo que sucede en la historia."],
      ["Números y operaciones", "Compara dos maneras de resolver un problema y explica qué representa cada cantidad."],
      ["Medida y datos", "Elige una unidad para comparar longitudes y registra los resultados en una tabla."],
      ["Indagación y retroalimentación", "Formula una pregunta que el grupo pueda poner a prueba. Usa sus observaciones para decidir qué enseñar después."],
    ] }],
    ["fisica", { alcance: orientativa, etapas: [
      ["Medición e incertidumbre", "Compara varias mediciones y explica qué diferencias puede distinguir tu instrumento."],
      ["Movimiento y fuerzas", "Interpreta una gráfica de posición y dibuja las fuerzas que actúan sobre el objeto."],
      ["Trabajo y energía", "Explica qué cambia y qué se conserva cuando un objeto se frena."],
      ["Circuitos eléctricos", "Predice cómo cambia la corriente si varía la resistencia y contrasta tu predicción con los datos."],
    ] }],
    ["quimica", { alcance: orientativa, etapas: [
      ["Átomos y periodicidad", "Compara dos elementos y explica qué tendencia ayuda a entender la diferencia."],
      ["Enlace y propiedades", "Relaciona la estructura de dos sustancias con una propiedad que se pueda observar."],
      ["Soluciones y dilución", "Calcula cómo cambia la concentración al añadir agua y explica qué cantidad permanece constante."],
      ["Estequiometría", "Ajusta una ecuación y usa sus proporciones para determinar qué reactivo se agota primero."],
    ] }],
  ]);

  let transicion;
  for (const boton of botones) {
    boton.addEventListener("click", () => {
      const ruta = rutas.get(boton.dataset.rutaMateria);
      if (!ruta || boton.getAttribute("aria-pressed") === "true") return;
      for (const opcion of botones) opcion.setAttribute("aria-pressed", String(opcion === boton));
      titulo.textContent = boton.textContent.trim();
      alcance.textContent = ruta.alcance;
      etapas.forEach(({titulo, actividad}, indice) => {
        [titulo.textContent, actividad.textContent] = ruta.etapas[indice];
      });
      anuncio.textContent = `Ruta de ${titulo.textContent}. ${ruta.alcance}`;
      transicion?.cancel();
      if (!movimiento.matches && ficha.animate) {
        transicion = ficha.animate([{ opacity: .82, transform: "translateY(4px)" }, { opacity: 1, transform: "none" }], {
          duration: 230,
          easing: "cubic-bezier(.2,.75,.25,1)",
        });
      }
    });
  }
  movimiento.addEventListener("change", () => { if (movimiento.matches) transicion?.cancel(); });
  selectorRutas.hidden = false;
}

prepararSelectorDeRutas();

// El contenido permanece visible si no hay animaciones, JavaScript o esta API.
if ("IntersectionObserver" in window) {
  const elementos = [...document.querySelectorAll("[data-reveal], .herramientas > div")];
  const pendientes = new Set(elementos);
  const inicializados = new WeakSet();

  function asentarEntrada(elemento) {
    pendientes.delete(elemento);
    revelar.unobserve(elemento);
    elemento.classList.remove("esta-revelando");
    elemento.classList.add("esta-visto");
    elemento.style.removeProperty("--demora-entrada");
  }

  const revelar = new IntersectionObserver(entradas => {
    const grupos = new Map();
    entradas.sort((a, b) => elementos.indexOf(a.target) - elementos.indexOf(b.target));
    for (const entrada of entradas) {
      const elemento = entrada.target;
      const inicial = !inicializados.has(elemento);
      inicializados.add(elemento);
      if (!pendientes.has(elemento)) continue;
      // El contenido visible al cargar y los bloques ya recorridos quedan en reposo.
      if (entrada.boundingClientRect.bottom <= 0) {
        asentarEntrada(elemento);
        continue;
      }
      if (!entrada.isIntersecting || entrada.intersectionRatio < .12) continue;
      if (inicial || movimiento.matches || elemento.contains(document.activeElement)) {
        asentarEntrada(elemento);
        continue;
      }
      const grupo = elemento.closest(".secuencia, .herramientas, .ruta-ocho-etapas");
      const orden = grupo ? grupos.get(grupo) || 0 : 0;
      if (grupo) grupos.set(grupo, orden + 1);
      // Escalona los hermanos que entran juntos y conserva el ritmo de lectura en móvil.
      elemento.style.setProperty("--demora-entrada", `${Math.min(orden, 3) * 35}ms`);
      pendientes.delete(elemento);
      revelar.unobserve(elemento);
      elemento.classList.add("esta-visto", "esta-revelando");
    }
  }, { threshold: .12 });

  function asentarDestino(hash) {
    const destino = document.getElementById(hash.slice(1));
    if (destino) elementos.filter(elemento => destino.contains(elemento)).forEach(asentarEntrada);
  }
  asentarDestino(location.hash);
  pendientes.forEach(elemento => revelar.observe(elemento));
  document.addEventListener("click", evento => {
    const enlace = evento.target.closest?.('a[href^="#"]');
    if (enlace && !evento.defaultPrevented && !evento.ctrlKey && !evento.metaKey && !evento.shiftKey && !evento.altKey) {
      asentarDestino(enlace.hash);
    }
  });
  window.addEventListener("hashchange", () => asentarDestino(location.hash));

  function terminarEntrada(evento) {
    if (evento.animationName === "entrada-portada" && elementos.includes(evento.target)) asentarEntrada(evento.target);
  }
  document.addEventListener("animationend", terminarEntrada, { passive: true });
  document.addEventListener("animationcancel", terminarEntrada, { passive: true });
  document.addEventListener("focusin", evento => {
    elementos.forEach(elemento => { if (elemento.contains(evento.target)) asentarEntrada(elemento); });
  }, { capture: true, passive: true });
  movimiento.addEventListener("change", () => {
    if (movimiento.matches) elementos.filter(elemento => elemento.classList.contains("esta-revelando")).forEach(asentarEntrada);
  }, { passive: true });

  const secciones = [...document.querySelectorAll("[data-nav-section]")];
  const enlaces = [...document.querySelectorAll("[data-nav]")];
  const visibles = new Set();
  const navegacion = new IntersectionObserver(entradas => {
    entradas.forEach(entrada => entrada.isIntersecting ? visibles.add(entrada.target.id) : visibles.delete(entrada.target.id));
    const actual = secciones.find(seccion => visibles.has(seccion.id));
    enlaces.forEach(enlace => {
      if (actual?.id === enlace.dataset.nav) enlace.setAttribute("aria-current", "location");
      else enlace.removeAttribute("aria-current");
    });
  }, { rootMargin: "-120px 0px -45% 0px", threshold: 0 });
  secciones.forEach(seccion => navegacion.observe(seccion));
}

// La barra móvil complementa los CTA que ya están al alcance.
const pantallaMovil = window.matchMedia("(max-width: 767px)");
const accesoMovil = document.getElementById("acceso-movil") ?? document.querySelector(".acceso-movil");
const cabeceraLanding = document.querySelector(".cabecera");
const portada = document.querySelector(".portada");
const zonasSinBarra = [document.getElementById("premium"), document.querySelector("footer")].filter(Boolean);
const soporteWhatsApp = document.getElementById("soporte-whatsapp");
const zonasSinSoporte = [...document.querySelectorAll(
  "main a, main button, main input, main select, footer a, [role='alert'], [role='status'], .banner, .vigencia, .medios-wompi, .acceso-movil"
)];
let actualizacionMovil = null;
let altoAccesoMovil = 0;
let desplazamientoSoporte = 0;

function situarSoporte(bordeCabecera, enfocado) {
  if (!soporteWhatsApp) return;
  const caja = soporteWhatsApp.getBoundingClientRect();
  const arribaInicial = caja.top + desplazamientoSoporte;
  const margen = 8;
  const zonas = [...zonasSinSoporte, enfocado].filter(elemento => elemento && elemento !== soporteWhatsApp)
    .map(elemento => elemento.getBoundingClientRect())
    .filter(r => r.width && r.height && r.bottom > bordeCabecera && r.top < innerHeight
      && r.left < caja.right + margen && r.right > caja.left - margen)
    .sort((a, b) => b.bottom - a.bottom);
  let arriba = arribaInicial;
  for (const zona of zonas) {
    if (arriba < zona.bottom + margen && arriba + caja.height + margen > zona.top) {
      arriba = zona.top - caja.height - margen;
    }
  }
  const desplazamiento = Math.max(0, arribaInicial - Math.max(bordeCabecera + margen, arriba));
  if (desplazamiento !== desplazamientoSoporte) {
    soporteWhatsApp.style.setProperty("--desplazamiento-soporte", `${desplazamiento}px`);
    desplazamientoSoporte = desplazamiento;
  }
}

function actualizarControlesMoviles() {
  actualizacionMovil = null;
  const raiz = document.documentElement;
  const bordeCabecera = Math.ceil(cabeceraLanding?.getBoundingClientRect().height || 0);
  const altoMedido = Math.ceil(accesoMovil?.getBoundingClientRect().height || 0);
  if (altoMedido) altoAccesoMovil = altoMedido;
  const zonaPermitida = pantallaMovil.matches && portada?.getBoundingClientRect().bottom <= 0 && !zonasSinBarra.some(zona => {
    const limites = zona.getBoundingClientRect();
    return limites.top < window.innerHeight && limites.bottom > 0;
  });
  const enfocado = document.activeElement;
  const limitesFoco = zonaPermitida && enfocado?.closest("main") ? enfocado.getBoundingClientRect() : null;
  const tapaFoco = limitesFoco && limitesFoco.top < window.innerHeight
    && limitesFoco.bottom > window.innerHeight - altoAccesoMovil;
  const ocultar = !zonaPermitida || tapaFoco;
  const reserva = ocultar ? 0 : altoAccesoMovil;
  // Leer toda la geometría antes de cambiar estilos evita recalcular el layout en el mismo cuadro.
  if (raiz.style.getPropertyValue("--alto-cabecera-landing") !== `${bordeCabecera}px`) {
    raiz.style.setProperty("--alto-cabecera-landing", `${bordeCabecera}px`);
  }
  if (!accesoMovil) return;
  if (raiz.style.getPropertyValue("--alto-acceso-movil") !== `${reserva}px`) {
    raiz.style.setProperty("--alto-acceso-movil", `${reserva}px`);
  }
  if (accesoMovil.hidden !== ocultar) {
    accesoMovil.hidden = ocultar;
    if (!ocultar) programarControlesMoviles();
  }
  if (accesoMovil.dataset.oculto !== String(ocultar)) {
    accesoMovil.dataset.oculto = String(ocultar);
    if (ocultar) accesoMovil.setAttribute("aria-hidden", "true");
    else accesoMovil.removeAttribute("aria-hidden");
  }
  situarSoporte(bordeCabecera, enfocado === document.body ? null : enfocado);
}

function programarControlesMoviles() {
  if (actualizacionMovil === null) actualizacionMovil = requestAnimationFrame(actualizarControlesMoviles);
}

document.addEventListener("focusin", programarControlesMoviles);
document.addEventListener("focusout", programarControlesMoviles);
document.addEventListener("toggle", programarControlesMoviles, true);
window.addEventListener("scroll", programarControlesMoviles, { passive: true });
window.addEventListener("resize", programarControlesMoviles, { passive: true });
if ("ResizeObserver" in window) {
  const medidasMoviles = new ResizeObserver(programarControlesMoviles);
  [accesoMovil, cabeceraLanding, portada, ...zonasSinBarra].filter(Boolean)
    .forEach(elemento => medidasMoviles.observe(elemento));
}
if ("IntersectionObserver" in window) {
  const intersecciones = new IntersectionObserver(programarControlesMoviles);
  [portada, ...zonasSinBarra].filter(Boolean).forEach(zona => intersecciones.observe(zona));
}
document.fonts?.ready.then(programarControlesMoviles);
programarControlesMoviles();
