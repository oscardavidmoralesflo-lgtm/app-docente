// Solo guarda el shell público de estudio y los archivos de esta compilación.
// Los datos y las respuestas de usuario siguen a cargo de la app, fuera de esta caché.
// La finalización compartida guarda la huella de cada archivo del paquete definitivo.
const ARCHIVOS = ["./assets/Buscador-fIQ469b6.js","./assets/Candado-Dl-N-kQB.js","./assets/Concurso-BlwCeivX.js","./assets/Consulta-DYNLfY_a.js","./assets/Errores-i6rx9oyn.js","./assets/Esqueleto-DKowirKr.js","./assets/HistorialSimulacros-CMLiIjeK.js","./assets/ModuloVista-C68KwXmN.js","./assets/NormasCasos-BEvSVgrh.js","./assets/Practica-CoF_xwOI.js","./assets/Premium-DqDAMfSS.js","./assets/Progreso-BfDB0Z7l.js","./assets/ReportarError-CrtVeVQx.js","./assets/Tarjetas-BHQmcPRw.js","./assets/Temario-C7PID5NN.js","./assets/app-BAODirzT.css","./assets/app-D0LelmQB.js","./assets/bodoni-moda-latin-opsz-italic-BCRrlh7t.woff2","./assets/bodoni-moda-latin-opsz-normal-X2BzlAjV.woff2","./assets/datos-lWu28vsX.js","./assets/fuentes-BLYI8J3G.js","./assets/hanken-grotesk-latin-wght-normal-CaVRRdDk.woff2","./assets/jetbrains-mono-latin-wght-normal-B9CIFXIH.woff2","./datos/publico/perfiles-e5a24e007623280a656376175d6e0c92dcdd74d06d3a85c14aa8f0a1645bf7e7.json","./datos/publico/planes-c443f4b520fc195aaa6065d214eeea9f5ae8ae8f136749cb143d061fd8dbc450.json","./icons/apple-touch-icon.png","./icons/icon-192.png","./icons/icon-512.png","./inicio.js","./manifest.json"];
const HASHES = {"./assets/Buscador-fIQ469b6.js":"9d27453d5c5af21e3d2f3fcd42d84e056099278a21033036317823986cef0a3c","./assets/Candado-Dl-N-kQB.js":"0ca92fec992b528c299152ba9fa8989a0937784cd086855484d548095757b2ca","./assets/Concurso-BlwCeivX.js":"fa0fe6ab84599f4aa3d263fa7168b6933426aacefa629f3c8f325e52dfba3d3c","./assets/Consulta-DYNLfY_a.js":"d3a1c0a2bf4d3318a5cec96b17a051039ad792c8d0bbe74d40e742bdeb6a48ce","./assets/Errores-i6rx9oyn.js":"c947aa025e518b3ef5b96efa55f413185657af72dd541829ce0fb687b4c9ad33","./assets/Esqueleto-DKowirKr.js":"6c91c307ca2e6687cf347c74f201b841aad87df88288bd4611eb91612db98cd1","./assets/HistorialSimulacros-CMLiIjeK.js":"1f0c772226b135c173d8f9a5fb22fdee8f3218ed9ff36b2d991b9054873d6d7b","./assets/ModuloVista-C68KwXmN.js":"b43e715f2eacee4552e5a5a2cdc41032adc50b8bba4ceb9479aac80455c892bc","./assets/NormasCasos-BEvSVgrh.js":"d5c1be69bdf88a12356afeb3be46b7b4f37d8d42e2b1c40a891a5b3d95a69369","./assets/Practica-CoF_xwOI.js":"666f68b61bb63b7519c96f9b16c8f51f2910f3c6ed993e408d44164d6c254929","./assets/Premium-DqDAMfSS.js":"bda7fa6a7ee2b154f5159950af6fce018ab7151dec5c06f909392303241db9fa","./assets/Progreso-BfDB0Z7l.js":"16c152f35356a7a8d0c347b730c4e88b2a27762e94e8e418b0551d95e48e60c7","./assets/ReportarError-CrtVeVQx.js":"b20bc86f3d42c56c37fbdd21c2c2d13f126fc378e3bb9faf99490397ea6ea7d9","./assets/Tarjetas-BHQmcPRw.js":"d0f190f5a80ffdbbf48f980d457fec19bb378eafd9a4771d35519d5cf223ffe9","./assets/Temario-C7PID5NN.js":"1229f652ff8cbb462184ea56d5c9d92d44b3b599efa1675bc44c966b992d5f22","./assets/app-BAODirzT.css":"96f6ee52c65b848b844d66a7778fddb969678a1ce11dd8ef2c950d1e7d1420c7","./assets/app-D0LelmQB.js":"1201c3bb3b8a55ca8ca1db8b9ebd32ee562cebeaf2243f4179fdb48dba8b08fe","./assets/bodoni-moda-latin-opsz-italic-BCRrlh7t.woff2":"b737328c13b92784ee78d99e62e3bcc38eeef0f2dba41d107637b3acea46781f","./assets/bodoni-moda-latin-opsz-normal-X2BzlAjV.woff2":"c032219ef636f7b4932f7d1dc91bdab602c970f090770b546bea4effaab3463c","./assets/datos-lWu28vsX.js":"d9adef25007378205281449bbfb8f6fabce7a26d4491f1f17316da566c8c3910","./assets/fuentes-BLYI8J3G.js":"7abd4bd2bdc436bdacf51571f62e2e01be459816b4ee6659a55fa7e290846e55","./assets/hanken-grotesk-latin-wght-normal-CaVRRdDk.woff2":"e9201eddf1d41d0b62253295d869ce3cf65768f7102b797f02c7f8c876b4a9d5","./assets/jetbrains-mono-latin-wght-normal-B9CIFXIH.woff2":"18be452724bfdc236c074ca94a249a7f41a86752c7d04ab258ce9ed5651f6a7e","./datos/publico/perfiles-e5a24e007623280a656376175d6e0c92dcdd74d06d3a85c14aa8f0a1645bf7e7.json":"e5a24e007623280a656376175d6e0c92dcdd74d06d3a85c14aa8f0a1645bf7e7","./datos/publico/planes-c443f4b520fc195aaa6065d214eeea9f5ae8ae8f136749cb143d061fd8dbc450.json":"c443f4b520fc195aaa6065d214eeea9f5ae8ae8f136749cb143d061fd8dbc450","./icons/apple-touch-icon.png":"7c5dfce04388b7883ff806dacb99ff6ff8d8af336fb25c4682b883055ec20929","./icons/icon-192.png":"a4db497d50bc7ff22ccca56d614b320d09323b330fc3c1afdf0b1e16cbcb12c0","./icons/icon-512.png":"c59c7f7db9f2a1c514f15d813239eb4a904df9d8bc6327c9de48fed97ba900b8","./index.html":"e8d08e258387c325b1b94a38a0f5726df23f622586ed21429644a84b0d511ddf","./inicio.js":"6b4d97ea7d690ec0c1831f7b77fa709dd0d1c108a112bde0bc6df45e59aee36d","./manifest.json":"3f425b0568fc5aeb2ffb5bfadd476889f190c1ffed114a1fa3ada73047eebadf"};
const VERSION = "stoa-app-15db024a58934754a9f6";

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
