import { instanteISO } from "./oferta.js";

if (location.hostname === "stoa-app-docente.onrender.com") {
  location.replace("https://magisteriostoa.lat/bienvenida/" + location.search + location.hash);
}

const casos = {
  primaria: {
    folio: "01 / 03", area: "PRIMARIA · MATEMÁTICAS", titulo: "¿Qué revela el procedimiento?",
    contexto: "Una receta para 4 personas usa 6 tazas de agua. Para 8 personas, una estudiante propone 10 tazas porque sumó 4 al número de tazas.",
    pregunta: "¿Qué intervención ayuda a revisar su razonamiento?", correcta: 0,
    opciones: [
      ["Pedirle que compruebe si al duplicar las personas también se duplica cada ingrediente.", "Comparar los dos cambios muestra que la relación se conserva al duplicar ambas cantidades. Para 8 personas corresponden 12 tazas."],
      ["Pedirle que explique de dónde salió el 4 y dejar la comparación para otra actividad.", "Explicar de dónde salió el 4 hace visible la estrategia. Para comprobar si funciona en esta receta, la estudiante también necesita contrastar las cantidades."],
      ["Mostrarle cómo aplicar una regla de tres y pedirle que copie el procedimiento.", "La regla de tres puede producir 12. Copiarla deja abierta la duda de si la estudiante distingue entre sumar lo mismo y duplicar ambos valores."],
    ],
  },
  pedagogia: {
    folio: "02 / 03", area: "BASE COMÚN · EVALUACIÓN", titulo: "¿Qué evidencia importa?",
    contexto: "En una actividad de Sociales, el objetivo es comparar dos testimonios sobre un mismo hecho. Un estudiante con baja visión no logra leer uno de los documentos escaneados.",
    pregunta: "¿Cómo puede participar y demostrar el mismo aprendizaje?", correcta: 1,
    opciones: [
      ["Entregarle un resumen de las coincidencias y pedirle que lo exponga al grupo.", "El resumen reduce la barrera de lectura, pero ya entrega la comparación que el estudiante necesita construir con evidencias de los testimonios."],
      ["Entregarle ambos testimonios en un formato accesible y usar el mismo criterio de comparación.", "Un formato accesible elimina la barrera de lectura y permite evaluar el objetivo compartido: identificar coincidencias y diferencias con evidencia de ambas fuentes."],
      ["Asignarle una lectura accesible sobre el hecho y pedirle que ordene los eventos.", "La actividad sería accesible, aunque cambia lo que se evalúa. Ordenar hechos no permite valorar cómo compara dos perspectivas."],
    ],
  },
  fisica: {
    folio: "03 / 03", area: "FÍSICA · MOVIMIENTO", titulo: "El significado de una recta.",
    contexto: "Al observar una gráfica de posición frente al tiempo, un estudiante ve un tramo horizontal a 3 metros. Afirma que allí el móvil avanza a velocidad constante porque la línea es recta.",
    pregunta: "¿Qué le pedirías comprobar para interpretar ese tramo?", correcta: 2,
    opciones: [
      ["Señalar el valor de 3 metros y compararlo con la posición inicial del móvil.", "Esa comparación ubica el móvil respecto a su inicio. Para saber si se mueve durante el tramo debe comprobar si cambia de posición entre dos instantes de ese tramo."],
      ["Comparar cuánto dura el tramo horizontal frente al tramo inclinado.", "La duración informa cuánto tiempo pasa en cada tramo. Sin comparar posiciones no permite determinar la velocidad."],
      ["Elegir dos instantes del tramo y calcular cuánto cambió la posición entre ellos.", "La posición es 3 metros en ambos instantes. Con cambio de posición cero y tiempo transcurrido positivo, la velocidad media del tramo es cero."],
    ],
  },
};

const alternativas = [...document.querySelectorAll("[data-respuesta]")];
const botonesCaso = [...document.querySelectorAll("[data-caso]")];
const retro = document.getElementById("retro");
let casoActivo = casos.primaria;

function mostrarCaso(clave) {
  if (!Object.hasOwn(casos, clave)) return;
  casoActivo = casos[clave];
  for (const campo of ["folio", "area", "titulo", "contexto", "pregunta"]) {
    document.getElementById(`caso-${campo}`).textContent = casoActivo[campo];
  }
  botonesCaso.forEach(boton => boton.setAttribute("aria-pressed", String(boton.dataset.caso === clave)));
  alternativas.forEach((boton, posicion) => {
    boton.setAttribute("aria-pressed", "false");
    boton.querySelector("b").textContent = casoActivo.opciones[posicion][0];
    delete boton.dataset.correcta;
  });
  retro.textContent = "Elige una alternativa para ver la retroalimentación.";
}

botonesCaso.forEach(boton => boton.addEventListener("click", () => mostrarCaso(boton.dataset.caso)));
alternativas.forEach((boton, posicion) => boton.addEventListener("click", () => {
  const correcta = casoActivo.correcta === posicion;
  alternativas.forEach(alternativa => alternativa.setAttribute("aria-pressed", String(alternativa === boton)));
  boton.dataset.correcta = String(correcta);
  const titulo = document.createElement("strong");
  titulo.textContent = correcta ? "Bien razonado." : "Revisa este detalle.";
  retro.replaceChildren(titulo, " " + casoActivo.opciones[posicion][1]);
}));

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
const perfiles = new Map([...selector.options].map(opcion => [opcion.value, {
  nombre: opcion.textContent, contexto: opcion.dataset.contexto || "no_rural", opcion,
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
  ficha.dataset.grupo = grupo;
  document.getElementById("grupo-perfil").textContent = etiqueta.toLocaleUpperCase("es-CO");
  document.getElementById("nombre-perfil").textContent = perfil.nombre;
  document.getElementById("texto-perfil").textContent = descripcion;
  document.getElementById("ayuda-perfil").textContent = perfil.contexto === "rural"
    ? "Contexto de referencia: plaza rural. Confirma tu perfil desde tu cuenta."
    : "Contexto de referencia: plaza no rural. Confirma tu perfil desde tu cuenta.";
  document.getElementById("temas-perfil").replaceChildren(...temas.map(tema => {
    const li = document.createElement("li");
    li.textContent = tema;
    return li;
  }));
  ficha.hidden = false;

  const oferta = ofertas.get(clave);
  const referencia = capturaReciente(capturado) && oferta?.contexto === perfil.contexto;
  etiquetaCobertura.dataset.estado = referencia ? "referencia" : "sin-confirmar";
  etiquetaCobertura.textContent = referencia ? "Cobertura de referencia" : "Consulta la cobertura en tu cuenta";
  detalleCobertura.textContent = referencia ? `Datos del ${formatoFecha.format(capturado)}. Consulta la cobertura en tu cuenta.` : "";
  detalleCobertura.hidden = !referencia;
  conteos.hidden = !referencia;
  conteosIds.forEach((id, i) => {
    document.getElementById(id).textContent = referencia ? formatoNumero.format(oferta[camposConteo[i]]) : "";
  });
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

function mostrarTotalPerfiles() {
  const pruebas = document.getElementById("hero-pruebas");
  if (!pruebas || !perfiles.size) return;
  pruebas.textContent = `${formatoNumero.format(perfiles.size)} perfiles para explorar`;
  pruebas.hidden = false;
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
  mostrarTotalPerfiles();
  mostrarPerfil();
  setTimeout(mostrarPerfil, Math.max(0, fecha + vigenciaCatalogo - Date.now() + 1));
  window.addEventListener("pageshow", mostrarPerfil);
  document.addEventListener("visibilitychange", mostrarPerfil);
}

selector.addEventListener("change", mostrarPerfil);
mostrarTotalPerfiles();
mostrarPerfil();
void cargarPerfiles();

// El contenido permanece visible si no hay animaciones, JavaScript o esta API.
if ("IntersectionObserver" in window) {
  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const revelar = new IntersectionObserver(entradas => entradas.forEach(entrada => {
      if (entrada.isIntersecting) {
        entrada.target.classList.add("esta-visto");
        revelar.unobserve(entrada.target);
      }
    }), { threshold: 0.12 });
    document.querySelectorAll("[data-reveal]").forEach(elemento => revelar.observe(elemento));
  }
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

// Navegación estrecha y CTA: no se oculta ningún control que conserve el foco.
const menuEstrecho = document.querySelector(".navegacion");
const accesoMovil = document.querySelector(".acceso-movil");
const seccionPremium = document.getElementById("premium");
const cabeceraLanding = document.querySelector(".cabecera");
let actualizacionMovil = null;

function actualizarControlesMoviles() {
  actualizacionMovil = null;
  if (menuEstrecho) {
    const desplazable = window.matchMedia("(max-width: 360px)").matches
      && menuEstrecho.scrollWidth > menuEstrecho.clientWidth;
    if (desplazable) menuEstrecho.setAttribute("tabindex", "0");
    else menuEstrecho.removeAttribute("tabindex");
  }
  if (!accesoMovil) return;
  // visibility:hidden conserva la medida, también cuando cambian fuente o safe-area.
  const alto = Math.ceil(accesoMovil.getBoundingClientRect().height);
  const raiz = document.documentElement;
  if (alto > 0 && raiz.style.getPropertyValue("--alto-acceso-movil") !== `${alto}px`) {
    raiz.style.setProperty("--alto-acceso-movil", `${alto}px`);
  }
  if (!seccionPremium) return;
  const limites = seccionPremium.getBoundingClientRect();
  const bordeCabecera = Math.max(0, cabeceraLanding?.getBoundingClientRect().bottom || 0);
  const premiumVisible = limites.bottom > bordeCabecera && limites.top < window.innerHeight;
  const ocultar = premiumVisible && !accesoMovil.contains(document.activeElement);
  accesoMovil.dataset.oculto = String(ocultar);
  if (ocultar) accesoMovil.setAttribute("aria-hidden", "true");
  else accesoMovil.removeAttribute("aria-hidden");
}

function programarControlesMoviles() {
  if (actualizacionMovil === null) actualizacionMovil = requestAnimationFrame(actualizarControlesMoviles);
}

menuEstrecho?.addEventListener("focusin", evento => {
  if (!window.matchMedia("(max-width: 360px)").matches) return;
  const enlace = evento.target.closest("a");
  if (enlace) enlace.scrollIntoView({ block: "nearest", inline: "nearest", behavior: "instant" });
});
accesoMovil?.addEventListener("focusin", programarControlesMoviles);
accesoMovil?.addEventListener("focusout", programarControlesMoviles);
window.addEventListener("scroll", programarControlesMoviles, { passive: true });
window.addEventListener("resize", programarControlesMoviles, { passive: true });
if ("ResizeObserver" in window) {
  const medidasMoviles = new ResizeObserver(programarControlesMoviles);
  if (accesoMovil) medidasMoviles.observe(accesoMovil);
  if (menuEstrecho) medidasMoviles.observe(menuEstrecho);
  if (cabeceraLanding) medidasMoviles.observe(cabeceraLanding);
}
// Sin ResizeObserver quedan la reserva CSS, resize y la medida al cargar fuentes.
document.fonts?.ready.then(programarControlesMoviles);
actualizarControlesMoviles();
