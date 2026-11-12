// Solo guarda el shell público de estudio y los archivos de esta compilación.
// Los datos y las respuestas de usuario siguen a cargo de la app, fuera de esta caché.
// La finalización compartida guarda la huella de cada archivo del paquete definitivo.
const ARCHIVOS = ["./assets/Buscador-Cu7fbNGJ.js","./assets/Candado-BMb2hiNd.js","./assets/Concurso-uzyNiyaq.js","./assets/Consulta-H2Ypg5J9.js","./assets/Errores-DAFN0bf2.js","./assets/Esqueleto-DQK0yZT3.js","./assets/ModuloVista-CuuIkYnV.js","./assets/NormasCasos-DBe3BMrm.js","./assets/Practica-DWD9uZHH.js","./assets/Premium-DRdkBwR-.js","./assets/Progreso-wFnsn3nK.js","./assets/ReportarError-1NkRlXFN.js","./assets/Tarjetas-DJVpGXiX.js","./assets/Temario-VE7IsiQ0.js","./assets/app-DHBaJPrp.css","./assets/app-hNcKokep.js","./assets/bodoni-moda-latin-opsz-italic-BCRrlh7t.woff2","./assets/bodoni-moda-latin-opsz-normal-X2BzlAjV.woff2","./assets/datos-B3VVA9M7.js","./assets/fuentes-BeAMEX4o.js","./assets/hanken-grotesk-latin-wght-normal-CaVRRdDk.woff2","./assets/jetbrains-mono-latin-wght-normal-B9CIFXIH.woff2","./datos/publico/perfiles-c7d2075fcead8072409cda76555408616ffa0317e0aae4bd3d3a1c28036c61ae.json","./datos/publico/planes-ca4c5b5f952b5d37b881d0435ac5ee47d7f2e338449886617ae968613be5f25a.json","./icons/apple-touch-icon.png","./icons/icon-192.png","./icons/icon-512.png","./inicio.js","./manifest.json"];
const HASHES = {"./assets/Buscador-Cu7fbNGJ.js":"6335657f0f48cca07ee9c8e11ca4d1fb5f23efffa6a34deba9be6e954a1ebd8e","./assets/Candado-BMb2hiNd.js":"94b91828085f5ca7e1508022aaade7ad7a920c7594e3831263b90065f50f5981","./assets/Concurso-uzyNiyaq.js":"6a3fba9f7f21a9ecb9a27968f2835349b6cd9484d1d67238fcf6f8289cc44f40","./assets/Consulta-H2Ypg5J9.js":"88ea2602a40242e0ed29f731be22c0fbaf9828535fe084cb54a4186194380e74","./assets/Errores-DAFN0bf2.js":"97f123b8d3ca358cda7305cbdd8c288dacb73f3b3201d6ca8a2d69136581dd4d","./assets/Esqueleto-DQK0yZT3.js":"d2c1c58c6d1d962baf9dffc6e9c92107f40309164bfe27d62af6748c91350524","./assets/ModuloVista-CuuIkYnV.js":"75b08873cb622277b1be8528c551c0023669f528cb39da1109e1ff01c6881847","./assets/NormasCasos-DBe3BMrm.js":"3f24f36bf33cbc9bc900ae689ebf364b98a7025f5b02dc8de4b030ab900776bd","./assets/Practica-DWD9uZHH.js":"f19e221aa591205791e479d73a3059f2f46f9ca1a9e3ce97c30d12aca5d75a43","./assets/Premium-DRdkBwR-.js":"7329187e9bc8e3227435187266b8ff01b2e297d94bb1f74f45cdf8f7ed0f4e31","./assets/Progreso-wFnsn3nK.js":"0090955206429a7d0580b5e7835af247971b75d62adc205f187ec4c7dfc4a905","./assets/ReportarError-1NkRlXFN.js":"67c4efc8728f8bce684319d0da11f85a5348987076e8e2a0eec3d0d364ad1413","./assets/Tarjetas-DJVpGXiX.js":"1671071a1222b85d008a072e82e1fafd617ddd6d4c1f64ce41ceca8b5c6c6d07","./assets/Temario-VE7IsiQ0.js":"ac58bffd65b8ca9417371378036fd993ad5888d560cd2f509ab76182c54a9b8b","./assets/app-DHBaJPrp.css":"a53756f756df04ed119db253005ca88ddaee78d75b0f71c08c187416e34b01b3","./assets/app-hNcKokep.js":"d120c4f38d05291ef48e5a714cf5cfd83761c5dc554963d3503774d590eacd61","./assets/bodoni-moda-latin-opsz-italic-BCRrlh7t.woff2":"b737328c13b92784ee78d99e62e3bcc38eeef0f2dba41d107637b3acea46781f","./assets/bodoni-moda-latin-opsz-normal-X2BzlAjV.woff2":"c032219ef636f7b4932f7d1dc91bdab602c970f090770b546bea4effaab3463c","./assets/datos-B3VVA9M7.js":"801ed0a52dc05abc47db956d37ff8f13204063e2b98fa419182f615aa3bf7f11","./assets/fuentes-BeAMEX4o.js":"1c17e0824b09da7ff662530893f91c38e6147c756e0fcd9647b6719f855b3e16","./assets/hanken-grotesk-latin-wght-normal-CaVRRdDk.woff2":"e9201eddf1d41d0b62253295d869ce3cf65768f7102b797f02c7f8c876b4a9d5","./assets/jetbrains-mono-latin-wght-normal-B9CIFXIH.woff2":"18be452724bfdc236c074ca94a249a7f41a86752c7d04ab258ce9ed5651f6a7e","./datos/publico/perfiles-c7d2075fcead8072409cda76555408616ffa0317e0aae4bd3d3a1c28036c61ae.json":"c7d2075fcead8072409cda76555408616ffa0317e0aae4bd3d3a1c28036c61ae","./datos/publico/planes-ca4c5b5f952b5d37b881d0435ac5ee47d7f2e338449886617ae968613be5f25a.json":"ca4c5b5f952b5d37b881d0435ac5ee47d7f2e338449886617ae968613be5f25a","./icons/apple-touch-icon.png":"7c5dfce04388b7883ff806dacb99ff6ff8d8af336fb25c4682b883055ec20929","./icons/icon-192.png":"a4db497d50bc7ff22ccca56d614b320d09323b330fc3c1afdf0b1e16cbcb12c0","./icons/icon-512.png":"c59c7f7db9f2a1c514f15d813239eb4a904df9d8bc6327c9de48fed97ba900b8","./index.html":"c72e58fb0ced19e5ad01625ef045ff7a2c24be015cea1fab850cd597c1b720cf","./inicio.js":"6b4d97ea7d690ec0c1831f7b77fa709dd0d1c108a112bde0bc6df45e59aee36d","./manifest.json":"3f425b0568fc5aeb2ffb5bfadd476889f190c1ffed114a1fa3ada73047eebadf"};
const VERSION = "stoa-app-68e0dada17ae34866847";

let rutas;
function rutasPublicas() {
  if (!rutas) {
    const index = new URL("./index.html", self.registration.scope).href;
    const raiz = new URL("./", self.registration.scope).href;
    rutas = { index, raiz, archivos: new Set([index, ...ARCHIVOS.map((f) => new URL(f, self.registration.scope).href)]),
      hashes: new Map(Object.entries(HASHES).map(([f, hash]) => [new URL(f, self.registration.scope).href, hash])) };
  }
  return rutas;
}

function respuestaPublica(r, url) {
  const tipo = r.headers.get("Content-Type")?.split(";")[0].trim().toLowerCase() ?? "";
  const ruta = new URL(url).pathname;
  const tipoValido = ruta.endsWith("/index.html") ? tipo === "text/html"
    : ruta.endsWith(".js") ? /^(?:text|application)\/(?:javascript|ecmascript)$/.test(tipo)
    : ruta.endsWith(".css") ? tipo === "text/css"
    : ruta.endsWith(".json") ? /^(?:application\/json|application\/manifest\+json)$/.test(tipo)
    : !!tipo && tipo !== "text/html";
  return r.status === 200 && r.type === "basic" && !r.redirected && r.url === url && tipoValido
    && !/(?:^|,)\s*(?:private|no-store)\b/i.test(r.headers.get("Cache-Control") ?? "")
    && !/(?:^|,)\s*(?:cookie|authorization|\*)\s*(?:,|$)/i.test(r.headers.get("Vary") ?? "");
}

self.addEventListener("install", (e) => {
  e.waitUntil((async () => {
    const { archivos, hashes } = rutasPublicas();
    const entradas = await Promise.all([...archivos].map(async (url) => {
      // Nunca enviar cookies ni seguir redirecciones al preparar una copia pública.
      const r = await fetch(new Request(url, { credentials: "omit", cache: "reload", redirect: "error" }));
      if (!respuestaPublica(r, url)) throw new Error("No se pudo preparar la app sin conexión");
      const esperado = hashes.get(url);
      if (!/^[a-f0-9]{64}$/.test(esperado ?? "")) throw new Error("Falta la huella del archivo público");
      const bytes = await r.clone().arrayBuffer();
      const huella = await crypto.subtle.digest("SHA-256", bytes);
      const recibido = [...new Uint8Array(huella)].map((b) => b.toString(16).padStart(2, "0")).join("");
      if (recibido !== esperado) throw new Error("Los archivos pertenecen a otra compilación");
      return [url, r];
    }));
    const cache = await caches.open(VERSION);
    await Promise.all(entradas.map(([url, r]) => cache.put(url, r)));
    // Sin skipWaiting: la versión anterior conserva sus chunks hasta cerrar todas sus ventanas.
  })());
});
self.addEventListener("activate", (e) => {
  e.waitUntil(caches.keys().then((ks) => Promise.all(ks
    .filter((k) => k !== VERSION && /^(?:stoa-[a-f0-9]{10}|stoa-app-[a-f0-9]{20})$/.test(k))
    .map((k) => caches.delete(k)))).then(() => self.clients.claim()));
});

self.addEventListener("fetch", (e) => {
  const req = e.request;
  const url = new URL(req.url);
  url.hash = ""; // las vistas de estudio usan fragmentos; no forman parte del archivo público
  // Incluye Auth, API, Cloudflare, landing, admin y rutas desconocidas: siempre a la red.
  if (url.origin !== location.origin || url.search || /\/(?:admin(?:\.html)?|bienvenida)(?:\/|$)/.test(url.pathname)) return;
  if (req.method !== "GET" || req.headers.has("Authorization") || req.cache === "no-store") return;
  const { index, raiz, archivos } = rutasPublicas();
  const esShell = req.mode === "navigate" && (url.href === raiz || url.href === index);
  if (!esShell && (req.mode === "navigate" || !archivos.has(url.href))) return;
  // HTML y chunks proceden siempre de la misma generación; las navegaciones nunca la sobrescriben.
  e.respondWith(caches.open(VERSION).then((cache) => cache.match(esShell ? index : req))
    .then((hit) => hit || fetch(req)));
});

// Recordatorio diario: al tocar la notificación se abre (o enfoca) la app en Práctica.
self.addEventListener("notificationclick", (e) => {
  e.notification.close();
  const url = new URL(e.notification.data?.url ?? "./#practica", self.registration.scope).href;
  e.waitUntil(self.clients.matchAll({ type: "window", includeUncontrolled: true }).then((cs) => {
    const c = cs.find((x) => x.url.startsWith(self.registration.scope));
    if (c) { c.navigate(url); return c.focus(); }
    return self.clients.openWindow(url);
  }));
});
