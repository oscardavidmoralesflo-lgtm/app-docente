// Solo guarda el shell público de estudio y los archivos de esta compilación.
// Los datos y las respuestas de usuario siguen a cargo de la app, fuera de esta caché.
// La finalización compartida guarda la huella de cada archivo del paquete definitivo.
const ARCHIVOS = ["./assets/Buscador-CP6YkS68.js","./assets/Candado-yzxUFCsA.js","./assets/Concurso-D1yoCcJu.js","./assets/Consulta-B4w9_IS9.js","./assets/Errores-DDoJ6FUc.js","./assets/Esqueleto-DiZMZ4rW.js","./assets/ModuloVista-lkWC8wA6.js","./assets/NormasCasos-BdH5XB-V.js","./assets/Practica-DcjnIxMG.js","./assets/Premium-DC3zxcDR.js","./assets/Progreso-Bq8tKi0J.js","./assets/ReportarError-CcxgY87D.js","./assets/Tarjetas-g16tS9Fx.js","./assets/Temario-BsCuWvN-.js","./assets/app-DHBaJPrp.css","./assets/app-ZQD0yI1M.js","./assets/bodoni-moda-latin-opsz-italic-BCRrlh7t.woff2","./assets/bodoni-moda-latin-opsz-normal-X2BzlAjV.woff2","./assets/datos-D0lR1Svh.js","./assets/fuentes-DFUrpGBE.js","./assets/hanken-grotesk-latin-wght-normal-CaVRRdDk.woff2","./assets/jetbrains-mono-latin-wght-normal-B9CIFXIH.woff2","./datos/publico/perfiles-d6f0b725a33855ec422fd70eea306710233636f6c147709e88c876624c5d744c.json","./datos/publico/planes-4c5daaa2efde86f54bedd5dba824d26ca32984b49462e84b49ea85fced4da2b2.json","./icons/apple-touch-icon.png","./icons/icon-192.png","./icons/icon-512.png","./inicio.js","./manifest.json"];
const HASHES = {"./assets/Buscador-CP6YkS68.js":"c0a869e6f1ca81480294b5e295606931357941f4d5b02b9ace0bc0217f9b07d1","./assets/Candado-yzxUFCsA.js":"c9ab67af08ff419c9ca082342559640692e0b6eedd2d4f3cb0a4b758d4683fe3","./assets/Concurso-D1yoCcJu.js":"5024532550a3688dbd1b144fea65c73dc1f5bc978e479623cbc02a266183bdac","./assets/Consulta-B4w9_IS9.js":"1d30514aafe6c4d065fb53c3ecd5a5cbc71453ae1630565b2730f5f8e3c1a6a4","./assets/Errores-DDoJ6FUc.js":"a0a210c552c9f86f98e0a41de3d6370ffa4b946f64e70ffe9c7cbb61ab909eda","./assets/Esqueleto-DiZMZ4rW.js":"25dbdec0c8c19b1b9589b53cf0b27ceadd8c115caa5e965069c072977c00d625","./assets/ModuloVista-lkWC8wA6.js":"97f6eb94c0e090c5cb2f0561202b1549954a11ac377329a15b5fdb9f8fec3b43","./assets/NormasCasos-BdH5XB-V.js":"7d396c69e8c380cac6a9e1e2bbca6709109e255e3c73e489418d8c9adc944982","./assets/Practica-DcjnIxMG.js":"816ba2bdd231732f01eeba50a870af37d1b600ea64579a1f723def8efc0ee597","./assets/Premium-DC3zxcDR.js":"e21c18d1e21b322f687db9fb4c3bf5692af9cf09d8966940701e90b12acbf16f","./assets/Progreso-Bq8tKi0J.js":"c7dcb717dbce6c8e42a529a5d0ee9d0a22b0a287edba7b752335ae328311f53e","./assets/ReportarError-CcxgY87D.js":"40693995dc90e88fc0768fd0f90d95778b878a6701b4e4b61e1af32d12edc32d","./assets/Tarjetas-g16tS9Fx.js":"eafe58ca68218fdad9a144f0e96d4e6c8292260a27465eee8bed4a1c5bee4236","./assets/Temario-BsCuWvN-.js":"ca091a0f7ac1d8c872b6b16f4a9c4778ace1399d2e2bee2e046c063f0ff3f28e","./assets/app-DHBaJPrp.css":"a53756f756df04ed119db253005ca88ddaee78d75b0f71c08c187416e34b01b3","./assets/app-ZQD0yI1M.js":"c7df14c15ec53535c6f195847cd5df49c38ece422aac31e735fa601ce3b5c6d5","./assets/bodoni-moda-latin-opsz-italic-BCRrlh7t.woff2":"b737328c13b92784ee78d99e62e3bcc38eeef0f2dba41d107637b3acea46781f","./assets/bodoni-moda-latin-opsz-normal-X2BzlAjV.woff2":"c032219ef636f7b4932f7d1dc91bdab602c970f090770b546bea4effaab3463c","./assets/datos-D0lR1Svh.js":"3a88292150363cf5824c1ab9acce338a5f9f3bb68ca994aef0f5ac1bd525877b","./assets/fuentes-DFUrpGBE.js":"8443c664b5849563fd3b8ef6490d620567c37df45337b40dc8028e0925a31059","./assets/hanken-grotesk-latin-wght-normal-CaVRRdDk.woff2":"e9201eddf1d41d0b62253295d869ce3cf65768f7102b797f02c7f8c876b4a9d5","./assets/jetbrains-mono-latin-wght-normal-B9CIFXIH.woff2":"18be452724bfdc236c074ca94a249a7f41a86752c7d04ab258ce9ed5651f6a7e","./datos/publico/perfiles-d6f0b725a33855ec422fd70eea306710233636f6c147709e88c876624c5d744c.json":"d6f0b725a33855ec422fd70eea306710233636f6c147709e88c876624c5d744c","./datos/publico/planes-4c5daaa2efde86f54bedd5dba824d26ca32984b49462e84b49ea85fced4da2b2.json":"4c5daaa2efde86f54bedd5dba824d26ca32984b49462e84b49ea85fced4da2b2","./icons/apple-touch-icon.png":"7c5dfce04388b7883ff806dacb99ff6ff8d8af336fb25c4682b883055ec20929","./icons/icon-192.png":"a4db497d50bc7ff22ccca56d614b320d09323b330fc3c1afdf0b1e16cbcb12c0","./icons/icon-512.png":"c59c7f7db9f2a1c514f15d813239eb4a904df9d8bc6327c9de48fed97ba900b8","./index.html":"0a720227cb8487a1f2f09634a5954c6d9821e7c9f459e43c55a03749d6759717","./inicio.js":"6b4d97ea7d690ec0c1831f7b77fa709dd0d1c108a112bde0bc6df45e59aee36d","./manifest.json":"3f425b0568fc5aeb2ffb5bfadd476889f190c1ffed114a1fa3ada73047eebadf"};
const VERSION = "stoa-app-3a2f28c33058c0687652";

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
