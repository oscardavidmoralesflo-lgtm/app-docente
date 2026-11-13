// Solo guarda el shell público de estudio y los archivos de esta compilación.
// Los datos y las respuestas de usuario siguen a cargo de la app, fuera de esta caché.
// La finalización compartida guarda la huella de cada archivo del paquete definitivo.
const ARCHIVOS = ["./assets/Buscador-fIQ469b6.js","./assets/Candado-Dl-N-kQB.js","./assets/Concurso-DqCczViB.js","./assets/Consulta-DYNLfY_a.js","./assets/Errores-DvUxjhpy.js","./assets/Esqueleto-DKowirKr.js","./assets/HistorialSimulacros-CMLiIjeK.js","./assets/ModuloVista-Dx1togLC.js","./assets/NormasCasos-Dj40rl4k.js","./assets/Practica-Btbsk6lO.js","./assets/Premium-CDWUo-uP.js","./assets/Progreso-Cy7gdewX.js","./assets/ReportarError-CrtVeVQx.js","./assets/Tarjetas-B3IuMufG.js","./assets/Temario-C7Q4LeUb.js","./assets/app-77EKeNLA.css","./assets/app-DzKpL4rf.js","./assets/bodoni-moda-latin-opsz-italic-BCRrlh7t.woff2","./assets/bodoni-moda-latin-opsz-normal-X2BzlAjV.woff2","./assets/datos-lWu28vsX.js","./assets/fuentes-BLYI8J3G.js","./assets/hanken-grotesk-latin-wght-normal-CaVRRdDk.woff2","./assets/jetbrains-mono-latin-wght-normal-B9CIFXIH.woff2","./datos/publico/perfiles-d9d12b88e8f6af81b69bf5c9d2822a0ab4acef9a95e05b9d624533aa1d1a46f1.json","./datos/publico/planes-74b1fae1e60f8b61317ea27aea41ad33ac076f8d62ad16c39f8e4ff01e35712c.json","./icons/apple-touch-icon.png","./icons/icon-192.png","./icons/icon-512.png","./inicio.js","./manifest.json"];
const HASHES = {"./assets/Buscador-fIQ469b6.js":"9d27453d5c5af21e3d2f3fcd42d84e056099278a21033036317823986cef0a3c","./assets/Candado-Dl-N-kQB.js":"0ca92fec992b528c299152ba9fa8989a0937784cd086855484d548095757b2ca","./assets/Concurso-DqCczViB.js":"ce86a1a69ff8cdbe139e3e95e085cae2023cd05bfa83a033e5cb102469df4b59","./assets/Consulta-DYNLfY_a.js":"d3a1c0a2bf4d3318a5cec96b17a051039ad792c8d0bbe74d40e742bdeb6a48ce","./assets/Errores-DvUxjhpy.js":"4f6abed298495fcf7f4f8546b1b8eff3f5975e8f1636a5edf59aa9ed5c013087","./assets/Esqueleto-DKowirKr.js":"6c91c307ca2e6687cf347c74f201b841aad87df88288bd4611eb91612db98cd1","./assets/HistorialSimulacros-CMLiIjeK.js":"1f0c772226b135c173d8f9a5fb22fdee8f3218ed9ff36b2d991b9054873d6d7b","./assets/ModuloVista-Dx1togLC.js":"3f494eed3420b08d06fd334093bbb37ab2aa6d60dae2a67b121be6139885400e","./assets/NormasCasos-Dj40rl4k.js":"15edb8761aad73a35b592b75e935a5bf3c6eb1bb3055c84490a9a36d2f6ae826","./assets/Practica-Btbsk6lO.js":"fa4326b2ee337621251f6a6ae8327a778b82d5e67b3b2e5fa31e65c844d78ff1","./assets/Premium-CDWUo-uP.js":"9f7374dcedc4f2c1eb4116d324b313af17978c106b8f4a1b434c0edc9530b98c","./assets/Progreso-Cy7gdewX.js":"7510b8f082c3c1836b43c1c18d2d2ab53c455c6783b60a9c8a7b2604e56f06ac","./assets/ReportarError-CrtVeVQx.js":"b20bc86f3d42c56c37fbdd21c2c2d13f126fc378e3bb9faf99490397ea6ea7d9","./assets/Tarjetas-B3IuMufG.js":"b87cf89bc79772ea977a6264ed9e0a11f6e96594020cb129c7626803c79fad3c","./assets/Temario-C7Q4LeUb.js":"5b436b4dd08eb0092a86baaa0153920f92a8c22d615d1baae5a1fc8d00ee2fd4","./assets/app-77EKeNLA.css":"5d912c73d4acffe2c69c8e16b8fc3dcd5ea6b4898c9d60744a841c96a3913daf","./assets/app-DzKpL4rf.js":"29ac466af1406acd0c85396fecc1537af1b92adbf3b5e3e18821bd953f9fd7f0","./assets/bodoni-moda-latin-opsz-italic-BCRrlh7t.woff2":"b737328c13b92784ee78d99e62e3bcc38eeef0f2dba41d107637b3acea46781f","./assets/bodoni-moda-latin-opsz-normal-X2BzlAjV.woff2":"c032219ef636f7b4932f7d1dc91bdab602c970f090770b546bea4effaab3463c","./assets/datos-lWu28vsX.js":"d9adef25007378205281449bbfb8f6fabce7a26d4491f1f17316da566c8c3910","./assets/fuentes-BLYI8J3G.js":"7abd4bd2bdc436bdacf51571f62e2e01be459816b4ee6659a55fa7e290846e55","./assets/hanken-grotesk-latin-wght-normal-CaVRRdDk.woff2":"e9201eddf1d41d0b62253295d869ce3cf65768f7102b797f02c7f8c876b4a9d5","./assets/jetbrains-mono-latin-wght-normal-B9CIFXIH.woff2":"18be452724bfdc236c074ca94a249a7f41a86752c7d04ab258ce9ed5651f6a7e","./datos/publico/perfiles-d9d12b88e8f6af81b69bf5c9d2822a0ab4acef9a95e05b9d624533aa1d1a46f1.json":"d9d12b88e8f6af81b69bf5c9d2822a0ab4acef9a95e05b9d624533aa1d1a46f1","./datos/publico/planes-74b1fae1e60f8b61317ea27aea41ad33ac076f8d62ad16c39f8e4ff01e35712c.json":"74b1fae1e60f8b61317ea27aea41ad33ac076f8d62ad16c39f8e4ff01e35712c","./icons/apple-touch-icon.png":"7c5dfce04388b7883ff806dacb99ff6ff8d8af336fb25c4682b883055ec20929","./icons/icon-192.png":"a4db497d50bc7ff22ccca56d614b320d09323b330fc3c1afdf0b1e16cbcb12c0","./icons/icon-512.png":"c59c7f7db9f2a1c514f15d813239eb4a904df9d8bc6327c9de48fed97ba900b8","./index.html":"3aada41c266353a747d7332de0ec54c4f36d538005da8ec2268df259cfb93499","./inicio.js":"6b4d97ea7d690ec0c1831f7b77fa709dd0d1c108a112bde0bc6df45e59aee36d","./manifest.json":"3f425b0568fc5aeb2ffb5bfadd476889f190c1ffed114a1fa3ada73047eebadf"};
const VERSION = "stoa-app-020cca6c67aa71304a13";

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
