// Solo las campañas conocidas van a la landing. Códigos de Auth, pagos y
// parámetros desconocidos conservan su recorrido en la app de estudio.
const parametrosEntrada = new URLSearchParams(location.search);
const esCampana = [...parametrosEntrada.keys()].every(clave =>
  /^utm_(?:source|medium|campaign|term|content|id)$/.test(clave)
  || ["gclid", "fbclid", "msclkid", "ttclid", "wbraid", "gbraid"].includes(clave));
if (location.pathname === "/" && !location.hash && esCampana) {
  if (location.hostname === "stoa-app-docente.onrender.com") {
    location.replace("https://magisteriostoa.lat/bienvenida/" + location.search);
  } else if (["magisteriostoa.lat", "www.magisteriostoa.lat"].includes(location.hostname)) {
    location.replace("/bienvenida/" + location.search);
  }
}
