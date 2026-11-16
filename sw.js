// Solo guarda el shell público de estudio y los archivos de esta compilación.
// Los datos y las respuestas de usuario siguen a cargo de la app, fuera de esta caché.
// La finalización compartida guarda la huella de cada archivo del paquete definitivo.
const ARCHIVOS = ["./assets/Buscador-D7ygpl4N.js","./assets/Candado-C9aKSAtY.js","./assets/Concurso-DTM3dVaY.js","./assets/Consulta-CyOxOiV4.js","./assets/Errores-BOC70BXU.js","./assets/HistorialSimulacros-DjRjC8nM.js","./assets/ModuloVista-CSHAGSf6.js","./assets/NormasCasos-Bogw94Q-.js","./assets/Practica-BMff9hUJ.js","./assets/Premium-Di5YuNFM.js","./assets/Progreso-DjqF1NCw.js","./assets/ReportarError-qznaSloU.js","./assets/Tarjetas-mTtq5W2_.js","./assets/Temario-CJZfitnP.js","./assets/app-BBOew3FT.css","./assets/app-CEDw1kVB.js","./assets/bodoni-moda-latin-opsz-italic-BCRrlh7t.woff2","./assets/bodoni-moda-latin-opsz-normal-X2BzlAjV.woff2","./assets/fuentes-DxoXJT8k.js","./assets/hanken-grotesk-latin-wght-normal-CaVRRdDk.woff2","./assets/jetbrains-mono-latin-wght-normal-B9CIFXIH.woff2","./assets/jsxRuntime-DfnQo0KA.js","./datos/publico/perfiles-c3fe9555c20421fdc5cd8122d2c6bee77ba42f088601aa71c8b7281a130ffe6e.json","./datos/publico/planes-df64df903fab0a701b8c6b42b3dc84e50214e6b9eb8bbffb2b40ff82ba1943bc.json","./icons/apple-touch-icon.png","./icons/icon-192.png","./icons/icon-512.png","./inicio.js","./manifest.json"];
const HASHES = {"./assets/Buscador-D7ygpl4N.js":"b770b0f40581b1d93648a31d7e008a55f81d32d8936ccc156ea566ffd45de4f1","./assets/Candado-C9aKSAtY.js":"3535873039692dabf7628ebdef3ddcefa92fac8b130e0637c8338f23e9311007","./assets/Concurso-DTM3dVaY.js":"4583fb763424301c9ba3e11d6310a8e28f9b41c09d1c955d4a515f5d7b9aaed6","./assets/Consulta-CyOxOiV4.js":"da3031c3de500649b4f12b0882e92aa0e79aa65af2321030a93c2204d65cd79b","./assets/Errores-BOC70BXU.js":"d371d2032ada30b9d9b993ad5a8f948efd9475c7f7bff20531674334d4d9f6e2","./assets/HistorialSimulacros-DjRjC8nM.js":"502fe6e9e9add6a9a68076aad7ea636a9f80cf600efe1a3e67257d0a858d864c","./assets/ModuloVista-CSHAGSf6.js":"694bf2c9557b4cbc370764cfe3f854c0f88a993c28d5719a5b417308d85f7f89","./assets/NormasCasos-Bogw94Q-.js":"4b92ea60f8704fd4f549c0c327620600507d484c7215367f26211ded080139c1","./assets/Practica-BMff9hUJ.js":"238a47bfa7e348ac4bfe4e0478aaf7d1be9b2b16960133d3253829a58e584d84","./assets/Premium-Di5YuNFM.js":"4f5d4c1d7ea7cdd95387d543dd301c25b6c5b0d0a1d239799e51c055021d132a","./assets/Progreso-DjqF1NCw.js":"26451895490e8da5aff291b68f4f7331e21e8b4bc4e3cb4a47ab6ab796e5d37a","./assets/ReportarError-qznaSloU.js":"d30bab60326170ec6c32ce61b1ee74183520e9fc4d623a15ca331d90f22de40d","./assets/Tarjetas-mTtq5W2_.js":"75901911f79a0a82cd189bbbb9228b94aa030a172b5e8251b256c9d28c040e32","./assets/Temario-CJZfitnP.js":"364c36b04ecfb5e1d0d052c80c21bf9209f056f201fbc8ee19824776cd6830c1","./assets/app-BBOew3FT.css":"ec65c72348deae985a8589933b0c49771049619895339b52737dc7ba138d5164","./assets/app-CEDw1kVB.js":"dd761b53c72be732f05adea57f4c54d86b5488d0beba1fe0893155b347a233c6","./assets/bodoni-moda-latin-opsz-italic-BCRrlh7t.woff2":"b737328c13b92784ee78d99e62e3bcc38eeef0f2dba41d107637b3acea46781f","./assets/bodoni-moda-latin-opsz-normal-X2BzlAjV.woff2":"c032219ef636f7b4932f7d1dc91bdab602c970f090770b546bea4effaab3463c","./assets/fuentes-DxoXJT8k.js":"7f3f417b72173f27a58fa7286ae5637266f4d6e9a45401c005c0699cf893b80d","./assets/hanken-grotesk-latin-wght-normal-CaVRRdDk.woff2":"e9201eddf1d41d0b62253295d869ce3cf65768f7102b797f02c7f8c876b4a9d5","./assets/jetbrains-mono-latin-wght-normal-B9CIFXIH.woff2":"18be452724bfdc236c074ca94a249a7f41a86752c7d04ab258ce9ed5651f6a7e","./assets/jsxRuntime-DfnQo0KA.js":"3b399735365e9d36e27bcb8424cf74a8a259029fab9030dcd386da7a98e7aebf","./datos/publico/perfiles-c3fe9555c20421fdc5cd8122d2c6bee77ba42f088601aa71c8b7281a130ffe6e.json":"c3fe9555c20421fdc5cd8122d2c6bee77ba42f088601aa71c8b7281a130ffe6e","./datos/publico/planes-df64df903fab0a701b8c6b42b3dc84e50214e6b9eb8bbffb2b40ff82ba1943bc.json":"df64df903fab0a701b8c6b42b3dc84e50214e6b9eb8bbffb2b40ff82ba1943bc","./icons/apple-touch-icon.png":"7c5dfce04388b7883ff806dacb99ff6ff8d8af336fb25c4682b883055ec20929","./icons/icon-192.png":"a4db497d50bc7ff22ccca56d614b320d09323b330fc3c1afdf0b1e16cbcb12c0","./icons/icon-512.png":"c59c7f7db9f2a1c514f15d813239eb4a904df9d8bc6327c9de48fed97ba900b8","./index.html":"81e4301076878e1b5f9c983d00bdaaecabcc305b8f3dfc52a6d19f7ae9ebbdf2","./inicio.js":"6b4d97ea7d690ec0c1831f7b77fa709dd0d1c108a112bde0bc6df45e59aee36d","./manifest.json":"3f425b0568fc5aeb2ffb5bfadd476889f190c1ffed114a1fa3ada73047eebadf"};
const VERSION = "stoa-app-61a77616ae64077c2a62";

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
