"use strict";

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
function mostrarPerfil() {
  const [grupo, ...temas] = temarios[selector.value] ?? temarios.filosofia;
  const [etiqueta, descripcion] = grupos[grupo];
  document.getElementById("ficha-perfil").dataset.grupo = grupo;
  document.getElementById("grupo-perfil").textContent = etiqueta.toLocaleUpperCase("es-CO");
  document.getElementById("nombre-perfil").textContent = selector.selectedOptions[0].textContent;
  document.getElementById("texto-perfil").textContent = descripcion;
  const lista = temas.map(tema => {
    const li = document.createElement("li");
    li.textContent = tema;
    return li;
  });
  document.getElementById("temas-perfil").replaceChildren(...lista);
}
selector.addEventListener("change", mostrarPerfil);
mostrarPerfil();
