// Solo guarda el shell público de estudio y los archivos de esta compilación.
// Los datos y las respuestas de usuario siguen a cargo de la app, fuera de esta caché.
// La finalización compartida guarda la huella de cada archivo del paquete definitivo.
const ARCHIVOS = ["./assets/Buscador-iWpqwQaN.js","./assets/Candado-DoG7YaSm.js","./assets/Concurso-BqXLFu-M.js","./assets/Consulta-CrmGyGFD.js","./assets/Errores-B-2_9t4D.js","./assets/HistorialSimulacros-BDGdukMI.js","./assets/ModuloVista-C2xCL2QO.js","./assets/NormasCasos-ByTsneyO.js","./assets/Practica-DwLaa2Hr.js","./assets/Premium-BKi-pv55.js","./assets/Progreso-7_7nFVEx.js","./assets/ReportarError-fILV5s3k.js","./assets/Tarjetas-B9u6r-CL.js","./assets/Temario-BYvz1sov.js","./assets/app-BEdKdUvq.css","./assets/app-BvLcdq_S.js","./assets/bodoni-moda-latin-opsz-italic-BCRrlh7t.woff2","./assets/bodoni-moda-latin-opsz-normal-X2BzlAjV.woff2","./assets/fuentes-DyyIT-ef.js","./assets/hanken-grotesk-latin-wght-normal-CaVRRdDk.woff2","./assets/jetbrains-mono-latin-wght-normal-B9CIFXIH.woff2","./assets/jsxRuntime-BF1KQYyH.js","./datos/publico/perfiles-53c102030b0288ddd8314dc36a96bf29e3c1a6eef4250149a63111a36c18c321.json","./datos/publico/planes-e2f0b029eb0dfbbae264657751cd0a527c0cc660208a08ec5d74b58f085a1b2a.json","./icons/apple-touch-icon.png","./icons/icon-192.png","./icons/icon-512.png","./inicio.js","./manifest.json"];
const HASHES = {"./assets/Buscador-iWpqwQaN.js":"f847b3dd0db27891361fccb301c6542252fadbd959fa474267385cceea09edc7","./assets/Candado-DoG7YaSm.js":"bed0c7e81e78181973c86c0e2c4b79e59ea0cb72f54e2023e4b3c6a896f79aa0","./assets/Concurso-BqXLFu-M.js":"25f24266cbca5a6ca4103ffd7130d97f1fc69c159a54899405025135bdf163ed","./assets/Consulta-CrmGyGFD.js":"4312194e4977546e9b3d06e755e7e806bd54640e6c4784594b85926af7b910d3","./assets/Errores-B-2_9t4D.js":"a61cf827f17b81e4a417b9cd8d4ceeb5ee56bb922391296cc24e5fd299ce79a6","./assets/HistorialSimulacros-BDGdukMI.js":"db68b85f3ec9642ca45df44b97b516e4f33a2189efed6957ee0829c3b9bca8f3","./assets/ModuloVista-C2xCL2QO.js":"eb82ac808ddf677840737dc47034cf53d2cecf9e445a2465cea20642d51cf462","./assets/NormasCasos-ByTsneyO.js":"b015cca9acbc9f2043e6ef4527bcfc9d8ff05a16560060c9e3bf97552acf7e88","./assets/Practica-DwLaa2Hr.js":"682a947cc93e4ce2e7d14f78bd11a949a4d9533fbe5e81cbd2c3ef93e06f8b26","./assets/Premium-BKi-pv55.js":"b1bab8ff96f082a384bf6313ffc04372d1c5473812c0ec5aaf1204e5c0ac75a5","./assets/Progreso-7_7nFVEx.js":"ed88199950c68fae5eba39d60004cc5d2bd608857243031841b540a83e8fea4b","./assets/ReportarError-fILV5s3k.js":"3f9130139a49c3257640747dececfed0a1e490bae4877d5af0f8fe1e29c2ee66","./assets/Tarjetas-B9u6r-CL.js":"f5525b2d1caa26d782262114e8bddfdae5a4c9bd344693d45a884419a8e41dac","./assets/Temario-BYvz1sov.js":"74e962e54c9ae267d009bcadd29ffc284d88ea024c2faacd6d17c7de177ad111","./assets/app-BEdKdUvq.css":"d50e469aba977c3eafd3f2f34fef7dc2e282128fff4aa8a0fc391b104fe32387","./assets/app-BvLcdq_S.js":"6aed51b7d01caabbabb43b39a4ec842a881ddb53a500c8e8deb76ee93823e01a","./assets/bodoni-moda-latin-opsz-italic-BCRrlh7t.woff2":"b737328c13b92784ee78d99e62e3bcc38eeef0f2dba41d107637b3acea46781f","./assets/bodoni-moda-latin-opsz-normal-X2BzlAjV.woff2":"c032219ef636f7b4932f7d1dc91bdab602c970f090770b546bea4effaab3463c","./assets/fuentes-DyyIT-ef.js":"69882cbf51ed885253b18b0a0d577877637fe66463bdb2a85dacb2640618ac62","./assets/hanken-grotesk-latin-wght-normal-CaVRRdDk.woff2":"e9201eddf1d41d0b62253295d869ce3cf65768f7102b797f02c7f8c876b4a9d5","./assets/jetbrains-mono-latin-wght-normal-B9CIFXIH.woff2":"18be452724bfdc236c074ca94a249a7f41a86752c7d04ab258ce9ed5651f6a7e","./assets/jsxRuntime-BF1KQYyH.js":"106290119fe94c7c05d84684274525cf035b768c0652fdd0157d2d1283a660ab","./datos/publico/perfiles-53c102030b0288ddd8314dc36a96bf29e3c1a6eef4250149a63111a36c18c321.json":"53c102030b0288ddd8314dc36a96bf29e3c1a6eef4250149a63111a36c18c321","./datos/publico/planes-e2f0b029eb0dfbbae264657751cd0a527c0cc660208a08ec5d74b58f085a1b2a.json":"e2f0b029eb0dfbbae264657751cd0a527c0cc660208a08ec5d74b58f085a1b2a","./icons/apple-touch-icon.png":"7c5dfce04388b7883ff806dacb99ff6ff8d8af336fb25c4682b883055ec20929","./icons/icon-192.png":"a4db497d50bc7ff22ccca56d614b320d09323b330fc3c1afdf0b1e16cbcb12c0","./icons/icon-512.png":"c59c7f7db9f2a1c514f15d813239eb4a904df9d8bc6327c9de48fed97ba900b8","./index.html":"3be402ed7ddb4c8bc638db534cf7ab83576d901a620eb84c8fde58e74c1ef828","./inicio.js":"6b4d97ea7d690ec0c1831f7b77fa709dd0d1c108a112bde0bc6df45e59aee36d","./manifest.json":"3f425b0568fc5aeb2ffb5bfadd476889f190c1ffed114a1fa3ada73047eebadf"};
const VERSION = "stoa-app-74f9eda3485c45926ce0";

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
