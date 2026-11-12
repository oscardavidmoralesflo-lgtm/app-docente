// Solo guarda el shell público de estudio y los archivos de esta compilación.
// Los datos y las respuestas de usuario siguen a cargo de la app, fuera de esta caché.
// La finalización compartida guarda la huella de cada archivo del paquete definitivo.
const ARCHIVOS = ["./assets/Buscador-D8aH2roQ.js","./assets/Candado-DE3y_OqQ.js","./assets/Concurso-BnSMkECu.js","./assets/Consulta-CDGUZp5f.js","./assets/Errores-DQkC471M.js","./assets/Esqueleto-DjNH2Q2k.js","./assets/HistorialSimulacros-CsYbqZz8.js","./assets/ModuloVista-95OP8f6_.js","./assets/NormasCasos-B7IWS-VG.js","./assets/Practica-CJvYhXhI.js","./assets/Premium-vcFldEGK.js","./assets/Progreso-CVNE5KA7.js","./assets/ReportarError-CHbYM4GB.js","./assets/Tarjetas-CmIQ2y41.js","./assets/Temario-DQY_HDwl.js","./assets/app-CXT6yh6e.css","./assets/app-OP8YBQcU.js","./assets/bodoni-moda-latin-opsz-italic-BCRrlh7t.woff2","./assets/bodoni-moda-latin-opsz-normal-X2BzlAjV.woff2","./assets/datos-D26LzCKh.js","./assets/fuentes-D-dNeIhv.js","./assets/hanken-grotesk-latin-wght-normal-CaVRRdDk.woff2","./assets/jetbrains-mono-latin-wght-normal-B9CIFXIH.woff2","./datos/publico/perfiles-c6ee03057f8eb103fa24385681dfa049c05b5e8d2c776f2784438216b5c4d42e.json","./datos/publico/planes-c1bf7e7c1b5f0dbe940063f9168beef699baab2afaf6f607d8c39a30d46eb15a.json","./icons/apple-touch-icon.png","./icons/icon-192.png","./icons/icon-512.png","./inicio.js","./manifest.json"];
const HASHES = {"./assets/Buscador-D8aH2roQ.js":"bed340c177f4a6491812bb52b8ba15959cf5f424eb11a0210ca8923ea54ab651","./assets/Candado-DE3y_OqQ.js":"1dad00957229927ea0c0450ec5cd6873a106759579e64fd8c57d061635f2b455","./assets/Concurso-BnSMkECu.js":"02334e0b4f6eba4acbe6580cf09a926c04c43fce085d110c4687d7e52f6f8f49","./assets/Consulta-CDGUZp5f.js":"bb64cbf0f901b4e3196fe916ea435ca9c4e341778b9172c3627f81e69d590727","./assets/Errores-DQkC471M.js":"2b1e2300f05ff433be015e1ce26ab7ae48ce8ec6a50cdb4585826100944fd3c9","./assets/Esqueleto-DjNH2Q2k.js":"3273b4087c84f1e2f7d4275f0d4374844da34c98f951d339f48dec0e6451fdfa","./assets/HistorialSimulacros-CsYbqZz8.js":"5ade5dac2eaf6a825b987f502769263b664b7481322ce3ce0129291fb636099a","./assets/ModuloVista-95OP8f6_.js":"f14340b5a9f68738944c7de8ac44ca02177ff82e768627a683543e472355e5e6","./assets/NormasCasos-B7IWS-VG.js":"e8bae321844d6a17fc8d2a028ea16c3d8902d7a01527929b6f0d7ddf311c7c02","./assets/Practica-CJvYhXhI.js":"487d90a5dffd1e08051ca31c59e44ed70b3a59451ea3011a01ad6bc8ba9bd0f5","./assets/Premium-vcFldEGK.js":"05c716587e18eea44ce0903f819fd5dc3bbe6ee4691ae04289a02b20c964dc7e","./assets/Progreso-CVNE5KA7.js":"10b3197c193b045496e183ecd984e4ddfc82c2f6b7dc5ff15d5e13afa9dda230","./assets/ReportarError-CHbYM4GB.js":"e273e83f76c87dd6ea2fe6b7b1e052d83cd1ed30a005cc1067665b3ba74d43d5","./assets/Tarjetas-CmIQ2y41.js":"e5e7282bfe867f00a68b9ae38b26bce2fa468cd2150a56171887be3aea12ca62","./assets/Temario-DQY_HDwl.js":"53e34c5a0ca9d3c84f1db1b6785f4cade3176cb6db14cee795fe03ed2d6da562","./assets/app-CXT6yh6e.css":"d90e64f90c7dba28fbdfc881007f95ea9dbe25df2c44eacf1daa642d32eb5210","./assets/app-OP8YBQcU.js":"daf7390aeccf27e03c3e4318173a4f6b1f8f2f8c93a53db45251109559ba9084","./assets/bodoni-moda-latin-opsz-italic-BCRrlh7t.woff2":"b737328c13b92784ee78d99e62e3bcc38eeef0f2dba41d107637b3acea46781f","./assets/bodoni-moda-latin-opsz-normal-X2BzlAjV.woff2":"c032219ef636f7b4932f7d1dc91bdab602c970f090770b546bea4effaab3463c","./assets/datos-D26LzCKh.js":"a39bb6611ea4918a74942414ae4fe4c5fd445a81b30cdad7066102a8a8b4057a","./assets/fuentes-D-dNeIhv.js":"79f6b902c95efce800d3890fbf5225d91f99b64f8c6645796ff78c4a7d67b8d4","./assets/hanken-grotesk-latin-wght-normal-CaVRRdDk.woff2":"e9201eddf1d41d0b62253295d869ce3cf65768f7102b797f02c7f8c876b4a9d5","./assets/jetbrains-mono-latin-wght-normal-B9CIFXIH.woff2":"18be452724bfdc236c074ca94a249a7f41a86752c7d04ab258ce9ed5651f6a7e","./datos/publico/perfiles-c6ee03057f8eb103fa24385681dfa049c05b5e8d2c776f2784438216b5c4d42e.json":"c6ee03057f8eb103fa24385681dfa049c05b5e8d2c776f2784438216b5c4d42e","./datos/publico/planes-c1bf7e7c1b5f0dbe940063f9168beef699baab2afaf6f607d8c39a30d46eb15a.json":"c1bf7e7c1b5f0dbe940063f9168beef699baab2afaf6f607d8c39a30d46eb15a","./icons/apple-touch-icon.png":"7c5dfce04388b7883ff806dacb99ff6ff8d8af336fb25c4682b883055ec20929","./icons/icon-192.png":"a4db497d50bc7ff22ccca56d614b320d09323b330fc3c1afdf0b1e16cbcb12c0","./icons/icon-512.png":"c59c7f7db9f2a1c514f15d813239eb4a904df9d8bc6327c9de48fed97ba900b8","./index.html":"3af74d27b6ea1b02b282b8bf2a651678d0ded1a3f93c9af0199da9d2582dc358","./inicio.js":"6b4d97ea7d690ec0c1831f7b77fa709dd0d1c108a112bde0bc6df45e59aee36d","./manifest.json":"3f425b0568fc5aeb2ffb5bfadd476889f190c1ffed114a1fa3ada73047eebadf"};
const VERSION = "stoa-app-effa93e136d24846e999";

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
