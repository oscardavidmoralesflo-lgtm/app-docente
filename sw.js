// Solo guarda el shell público de estudio y los archivos de esta compilación.
// Los datos y las respuestas de usuario siguen a cargo de la app, fuera de esta caché.
// La finalización compartida guarda la huella de cada archivo del paquete definitivo.
const ARCHIVOS = ["./assets/Buscador-D7ygpl4N.js","./assets/Candado-C9aKSAtY.js","./assets/Concurso-BIufiGgU.js","./assets/Consulta-KxEulTn3.js","./assets/Errores-UpnSnck4.js","./assets/HistorialSimulacros-DjRjC8nM.js","./assets/ModuloVista-rsbniN-Y.js","./assets/NormasCasos-BwY4nKpi.js","./assets/Practica-ByLuo0S3.js","./assets/Premium-B8cscBxC.js","./assets/Progreso-CLYneT_X.js","./assets/ReportarError-qznaSloU.js","./assets/Tarjetas-DXi7LO_y.js","./assets/Temario-C-9_mN6s.js","./assets/app-BBOew3FT.css","./assets/app-rQ1wrvPw.js","./assets/bodoni-moda-latin-opsz-italic-BCRrlh7t.woff2","./assets/bodoni-moda-latin-opsz-normal-X2BzlAjV.woff2","./assets/fuentes-DxoXJT8k.js","./assets/hanken-grotesk-latin-wght-normal-CaVRRdDk.woff2","./assets/jetbrains-mono-latin-wght-normal-B9CIFXIH.woff2","./assets/jsxRuntime-DfnQo0KA.js","./datos/publico/perfiles-9c80ab63adce860ce42110dd83d1b221094d2a1b7105dd320282f5286c66ba79.json","./datos/publico/planes-c74074152bade11f1bc2aa998bff4f36d121cef804b1693ab39c6a29ec61dfc2.json","./icons/apple-touch-icon.png","./icons/icon-192.png","./icons/icon-512.png","./inicio.js","./manifest.json"];
const HASHES = {"./assets/Buscador-D7ygpl4N.js":"b770b0f40581b1d93648a31d7e008a55f81d32d8936ccc156ea566ffd45de4f1","./assets/Candado-C9aKSAtY.js":"3535873039692dabf7628ebdef3ddcefa92fac8b130e0637c8338f23e9311007","./assets/Concurso-BIufiGgU.js":"13a5d63c7860008b445e5bb5497253ba69e64432231ca405a1e333f1fa8d2d3c","./assets/Consulta-KxEulTn3.js":"b0729f4672369f6e9090d224e96b1ae45da908952aee63d3589bd87da8cd76ba","./assets/Errores-UpnSnck4.js":"31ad7e50e72fb33d79b9838bc147997d8e135eaab202f7dfe53685838483a50a","./assets/HistorialSimulacros-DjRjC8nM.js":"502fe6e9e9add6a9a68076aad7ea636a9f80cf600efe1a3e67257d0a858d864c","./assets/ModuloVista-rsbniN-Y.js":"41ea41288003a460afa87a1e926e59b3bd050b68c87907769acee687cd217344","./assets/NormasCasos-BwY4nKpi.js":"d8b60123a6dcdeb0919833a416e828c567dc40ec237bd7b421b1b6505f5205b2","./assets/Practica-ByLuo0S3.js":"9e037a5932d178a52e7c8afc5c1698aaecb94b03e528678613d370b209f00e9a","./assets/Premium-B8cscBxC.js":"a34b3ed2c5475c01fef6e8d7f66cef3cc5e873b0d0b9ed3d656555ba401dde33","./assets/Progreso-CLYneT_X.js":"282a599bace21bbdbea19fe46a46ca1385df5349606a10e2a255b0e8f9ab4263","./assets/ReportarError-qznaSloU.js":"d30bab60326170ec6c32ce61b1ee74183520e9fc4d623a15ca331d90f22de40d","./assets/Tarjetas-DXi7LO_y.js":"187c83f299f2535ab604a05f1043c5bd0191ee6eabec5c890304f99f51eb711e","./assets/Temario-C-9_mN6s.js":"66934f7c8a47de1e07b011e7a5f14933213c89262bde67dfa66e8ab2ea4e80de","./assets/app-BBOew3FT.css":"ec65c72348deae985a8589933b0c49771049619895339b52737dc7ba138d5164","./assets/app-rQ1wrvPw.js":"ebc5d2d1e34f2ca9aecc9f7101dd31114348a5dae232973f57ad40d66b08ea33","./assets/bodoni-moda-latin-opsz-italic-BCRrlh7t.woff2":"b737328c13b92784ee78d99e62e3bcc38eeef0f2dba41d107637b3acea46781f","./assets/bodoni-moda-latin-opsz-normal-X2BzlAjV.woff2":"c032219ef636f7b4932f7d1dc91bdab602c970f090770b546bea4effaab3463c","./assets/fuentes-DxoXJT8k.js":"7f3f417b72173f27a58fa7286ae5637266f4d6e9a45401c005c0699cf893b80d","./assets/hanken-grotesk-latin-wght-normal-CaVRRdDk.woff2":"e9201eddf1d41d0b62253295d869ce3cf65768f7102b797f02c7f8c876b4a9d5","./assets/jetbrains-mono-latin-wght-normal-B9CIFXIH.woff2":"18be452724bfdc236c074ca94a249a7f41a86752c7d04ab258ce9ed5651f6a7e","./assets/jsxRuntime-DfnQo0KA.js":"3b399735365e9d36e27bcb8424cf74a8a259029fab9030dcd386da7a98e7aebf","./datos/publico/perfiles-9c80ab63adce860ce42110dd83d1b221094d2a1b7105dd320282f5286c66ba79.json":"9c80ab63adce860ce42110dd83d1b221094d2a1b7105dd320282f5286c66ba79","./datos/publico/planes-c74074152bade11f1bc2aa998bff4f36d121cef804b1693ab39c6a29ec61dfc2.json":"c74074152bade11f1bc2aa998bff4f36d121cef804b1693ab39c6a29ec61dfc2","./icons/apple-touch-icon.png":"7c5dfce04388b7883ff806dacb99ff6ff8d8af336fb25c4682b883055ec20929","./icons/icon-192.png":"a4db497d50bc7ff22ccca56d614b320d09323b330fc3c1afdf0b1e16cbcb12c0","./icons/icon-512.png":"c59c7f7db9f2a1c514f15d813239eb4a904df9d8bc6327c9de48fed97ba900b8","./index.html":"2e850693722cc3a90807e97a8f42a66a32ac74b489e3ccdd978d1c891e9af753","./inicio.js":"6b4d97ea7d690ec0c1831f7b77fa709dd0d1c108a112bde0bc6df45e59aee36d","./manifest.json":"3f425b0568fc5aeb2ffb5bfadd476889f190c1ffed114a1fa3ada73047eebadf"};
const VERSION = "stoa-app-214e3846983c2f331baf";

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
