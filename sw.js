// Solo guarda el shell público de estudio y los archivos de esta compilación.
// Los datos y las respuestas de usuario siguen a cargo de la app, fuera de esta caché.
// La finalización compartida guarda la huella de cada archivo del paquete definitivo.
const ARCHIVOS = ["./assets/Buscador-tIQnavP1.js","./assets/Candado-C8SSAni1.js","./assets/Concurso-CqMcqUfa.js","./assets/Consulta-B2cypjbb.js","./assets/Errores-C_oSjizj.js","./assets/Esqueleto-AVI3v8Jg.js","./assets/HistorialSimulacros-Dwbw_MHY.js","./assets/ModuloVista-Ba3ACAlL.js","./assets/NormasCasos-CVcrEWcz.js","./assets/Practica-Buw9a1Oz.js","./assets/Premium-DXW3h12R.js","./assets/Progreso-JX_mOa-1.js","./assets/ReportarError-DBjYAW4x.js","./assets/Tarjetas-M6PaGYDW.js","./assets/Temario-COFrCW7t.js","./assets/app-BAODirzT.css","./assets/app-CpHFgLTS.js","./assets/bodoni-moda-latin-opsz-italic-BCRrlh7t.woff2","./assets/bodoni-moda-latin-opsz-normal-X2BzlAjV.woff2","./assets/datos-CwkmfnYZ.js","./assets/fuentes-AE7ANJ_Y.js","./assets/hanken-grotesk-latin-wght-normal-CaVRRdDk.woff2","./assets/jetbrains-mono-latin-wght-normal-B9CIFXIH.woff2","./datos/publico/perfiles-70aa513fdc2d45a8aca60ca4fdd89dc75507f2d1b8bee73113ff113f15b07376.json","./datos/publico/planes-f1ccd06ca01906768512c3c37ae82f67926e2fc52ad32fffb6b02f47cd2c8502.json","./icons/apple-touch-icon.png","./icons/icon-192.png","./icons/icon-512.png","./inicio.js","./manifest.json"];
const HASHES = {"./assets/Buscador-tIQnavP1.js":"89a302565569f034fa757b791c26dcda5c40cfa7f59e2dbb27974d57fd8a1219","./assets/Candado-C8SSAni1.js":"ac864af4d084e49e2ca8af150a87f07f95c7586e6be7fe6598d7a0d4ce8b3817","./assets/Concurso-CqMcqUfa.js":"d11e77084bfe84540a7fba6a1d8ca856eb9ecd34a61be9f521a1e44e6f25a7c2","./assets/Consulta-B2cypjbb.js":"12b5053270b4fb699e016510c78436c3cde2f3ecd50cd9da1ba1c0a5c202ed74","./assets/Errores-C_oSjizj.js":"6075162f3d765bd63f1be35ef475eda1982efefea3b31489924550b525206a32","./assets/Esqueleto-AVI3v8Jg.js":"f0a4330ad133bb19d3396495ebd328af9c2d802315e358b60ebf75de476a8050","./assets/HistorialSimulacros-Dwbw_MHY.js":"2c5cb9210321fe0f467e4065558e49e4e8d26563dc8a04d723d3971e6e43318d","./assets/ModuloVista-Ba3ACAlL.js":"b858178d4c585d76ef81a6748ec74e537ee4b4bb1200702777b637d4a1827d32","./assets/NormasCasos-CVcrEWcz.js":"35405927be4727b1f2c4c3d223f9711fdb49326649452933c0c2fd6caf03483b","./assets/Practica-Buw9a1Oz.js":"6566a5ec7234fa96cf71f7d6695ddbb5479c4433e11ee617f38b1494f9516bee","./assets/Premium-DXW3h12R.js":"5e3bca2bce471cce49211a2ba16c8852b84c0207c34a7344491ad44af8dfd7dc","./assets/Progreso-JX_mOa-1.js":"2d56d08d9c2bc2129f971eb54bd7ad2a01a24ee731f0a4fbd5d8a41e8a42c813","./assets/ReportarError-DBjYAW4x.js":"6f489217874c032b056d55ba28e4881c16d95a6a59c2234a607b36230b7c194d","./assets/Tarjetas-M6PaGYDW.js":"716b43d7b21b27ee935a5de1f7d7e6d77cd1f6a611a25353b7b7c34ac060b905","./assets/Temario-COFrCW7t.js":"71e1c7b8b46ff07a19eac587b11f971c2108f1176c4c6d68c553a8215ca518e3","./assets/app-BAODirzT.css":"96f6ee52c65b848b844d66a7778fddb969678a1ce11dd8ef2c950d1e7d1420c7","./assets/app-CpHFgLTS.js":"589835d801b13b925301d005c43e894afd9e83d6a2214fb10b4158c47ac11e4e","./assets/bodoni-moda-latin-opsz-italic-BCRrlh7t.woff2":"b737328c13b92784ee78d99e62e3bcc38eeef0f2dba41d107637b3acea46781f","./assets/bodoni-moda-latin-opsz-normal-X2BzlAjV.woff2":"c032219ef636f7b4932f7d1dc91bdab602c970f090770b546bea4effaab3463c","./assets/datos-CwkmfnYZ.js":"f514f6cd25abca0450169203d649f89e17907b0f639c359098b6d4cbd5a0242a","./assets/fuentes-AE7ANJ_Y.js":"a32db3d96c6a9a242a530c654d262c2d270d209478546996bfd9b4da31a9d0ee","./assets/hanken-grotesk-latin-wght-normal-CaVRRdDk.woff2":"e9201eddf1d41d0b62253295d869ce3cf65768f7102b797f02c7f8c876b4a9d5","./assets/jetbrains-mono-latin-wght-normal-B9CIFXIH.woff2":"18be452724bfdc236c074ca94a249a7f41a86752c7d04ab258ce9ed5651f6a7e","./datos/publico/perfiles-70aa513fdc2d45a8aca60ca4fdd89dc75507f2d1b8bee73113ff113f15b07376.json":"70aa513fdc2d45a8aca60ca4fdd89dc75507f2d1b8bee73113ff113f15b07376","./datos/publico/planes-f1ccd06ca01906768512c3c37ae82f67926e2fc52ad32fffb6b02f47cd2c8502.json":"f1ccd06ca01906768512c3c37ae82f67926e2fc52ad32fffb6b02f47cd2c8502","./icons/apple-touch-icon.png":"7c5dfce04388b7883ff806dacb99ff6ff8d8af336fb25c4682b883055ec20929","./icons/icon-192.png":"a4db497d50bc7ff22ccca56d614b320d09323b330fc3c1afdf0b1e16cbcb12c0","./icons/icon-512.png":"c59c7f7db9f2a1c514f15d813239eb4a904df9d8bc6327c9de48fed97ba900b8","./index.html":"7feaf591edc0b04076014f2bcb3df65403b09622f34a9491951ffdb4ca61fa6b","./inicio.js":"6b4d97ea7d690ec0c1831f7b77fa709dd0d1c108a112bde0bc6df45e59aee36d","./manifest.json":"3f425b0568fc5aeb2ffb5bfadd476889f190c1ffed114a1fa3ada73047eebadf"};
const VERSION = "stoa-app-f53c511a0ac3032dc773";

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
