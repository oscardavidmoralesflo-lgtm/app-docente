"use strict";

const explicaciones = {
  a: ["Bien razonado.", "La relación se conserva al duplicar ambas cantidades. Comparar los dos cambios permite explicar por qué corresponden 12 tazas."],
  b: ["Falta contrastar la relación.", "Explicar de dónde salió el 4 hace visible la estrategia, pero dejar la comparación para otra actividad no le permite comprobar si su modelo sirve en esta receta."],
  c: ["El cálculo necesita una justificación.", "La regla de tres puede dar 12, pero copiarla no muestra si la estudiante distingue entre sumar lo mismo y escalar ambos valores."],
};

const botones = [...document.querySelectorAll("[data-respuesta]")];
const retro = document.getElementById("retro");
for (const boton of botones) {
  boton.setAttribute("aria-pressed", "false");
  boton.dataset.correcta = String(boton.dataset.respuesta === "a");
  boton.addEventListener("click", () => {
    const [titulo, cuerpo] = explicaciones[boton.dataset.respuesta];
    for (const alternativa of botones) alternativa.setAttribute("aria-pressed", String(alternativa === boton));
    const negrita = document.createElement("strong");
    negrita.textContent = titulo;
    retro.replaceChildren(negrita, " " + cuerpo);
  });
}

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
