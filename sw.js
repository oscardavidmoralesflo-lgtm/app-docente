// Solo guarda el shell público de estudio y los archivos de esta compilación.
// Los datos y las respuestas de usuario siguen a cargo de la app, fuera de esta caché.
// La finalización compartida guarda la huella de cada archivo del paquete definitivo.
const ARCHIVOS = ["./assets/Buscador-DJxxZNvq.js","./assets/Candado-C9aKSAtY.js","./assets/Concurso-DbyRT--a.js","./assets/Consulta-C-Zkjx8x.js","./assets/Errores-BV0OUy2o.js","./assets/HistorialSimulacros-DjRjC8nM.js","./assets/ModuloVista-C34FFgdL.js","./assets/NormasCasos-ClWnHFr3.js","./assets/Practica-CQ9Rm20q.js","./assets/Premium-DLCVkAHB.js","./assets/Progreso-C30I7Z1W.js","./assets/ReportarError-qznaSloU.js","./assets/Tarjetas-CwD2DFuX.js","./assets/Temario-BjhtO49b.js","./assets/app-BFM7JkzK.js","./assets/app-CCvGxLNf.css","./assets/bodoni-moda-latin-opsz-italic-BCRrlh7t.woff2","./assets/bodoni-moda-latin-opsz-normal-X2BzlAjV.woff2","./assets/fuentes-Cwq74wWR.js","./assets/hanken-grotesk-latin-wght-normal-CaVRRdDk.woff2","./assets/jetbrains-mono-latin-wght-normal-B9CIFXIH.woff2","./assets/jsxRuntime-DfnQo0KA.js","./assets/normograma-DNP45sLq.js","./datos/publico/perfiles-2794ab6755288b1171341ac06efb8c5f1ded9a04263781f43e853849e55eb915.json","./datos/publico/planes-dab73d497f8053e39b5219f06b04ef8c80c34f86ba7980b3817b6d52cba0f4d0.json","./icons/apple-touch-icon.png","./icons/icon-192.png","./icons/icon-512.png","./inicio.js","./manifest.json"];
const HASHES = {"./assets/Buscador-DJxxZNvq.js":"821a53c3a56cf359a01b23c0914f77d690dee90b4c6b3f9b5ac42dd8870a8a20","./assets/Candado-C9aKSAtY.js":"3535873039692dabf7628ebdef3ddcefa92fac8b130e0637c8338f23e9311007","./assets/Concurso-DbyRT--a.js":"bf296fb9542c91d230ca7a4f8bf9d3d2219dce63c312417cf2bd4a83531a7868","./assets/Consulta-C-Zkjx8x.js":"d61048ff877a3ba59d3ace8109d406a9687791a7271ff094529dc6eedc3baed1","./assets/Errores-BV0OUy2o.js":"9cc9e09cd0b7739ed6381e6bd4db45391e62f577000bd4ca70bdb8d97e98deae","./assets/HistorialSimulacros-DjRjC8nM.js":"502fe6e9e9add6a9a68076aad7ea636a9f80cf600efe1a3e67257d0a858d864c","./assets/ModuloVista-C34FFgdL.js":"9e1ed3d5375ee247bf3516e9c0f40db4d5c08e877b8eccc0e42eb0b8643de509","./assets/NormasCasos-ClWnHFr3.js":"741d01a7be7148519afde6ece54f4c282f890c03b46af3333fd7e4ed7c2cdc03","./assets/Practica-CQ9Rm20q.js":"d5077e92258cb29e0fe78d44583d11e7d099e96ab885e2f524abb69985c2efe0","./assets/Premium-DLCVkAHB.js":"7117da46c8667d0d198cc6ae844e6435859e7637623fc39f97e837853d1bdf27","./assets/Progreso-C30I7Z1W.js":"71eb8872382977ae996883b2b80d4637e850e4796e6d2be150d894579ee082b5","./assets/ReportarError-qznaSloU.js":"d30bab60326170ec6c32ce61b1ee74183520e9fc4d623a15ca331d90f22de40d","./assets/Tarjetas-CwD2DFuX.js":"62a362ebb39f169d0389e79a75bbca99cf2567e50071a63698494bbd0d94ffef","./assets/Temario-BjhtO49b.js":"c1e4a1ebd0aea646399c8278543a99ae66c7eff04b7a4a431e571bd840800724","./assets/app-BFM7JkzK.js":"41767c24a004975facb9fbff77827bb7392f787eb1e1bdb7f65e7e0abeaf172d","./assets/app-CCvGxLNf.css":"07562584100723a7e2e9933e149723449c89bed1b441d6e3609ca8b8255d5111","./assets/bodoni-moda-latin-opsz-italic-BCRrlh7t.woff2":"b737328c13b92784ee78d99e62e3bcc38eeef0f2dba41d107637b3acea46781f","./assets/bodoni-moda-latin-opsz-normal-X2BzlAjV.woff2":"c032219ef636f7b4932f7d1dc91bdab602c970f090770b546bea4effaab3463c","./assets/fuentes-Cwq74wWR.js":"140754234bd04dd4eb10cfe5598e0fd0ca21adf8e3fa30b60ddf1d366fe90af4","./assets/hanken-grotesk-latin-wght-normal-CaVRRdDk.woff2":"e9201eddf1d41d0b62253295d869ce3cf65768f7102b797f02c7f8c876b4a9d5","./assets/jetbrains-mono-latin-wght-normal-B9CIFXIH.woff2":"18be452724bfdc236c074ca94a249a7f41a86752c7d04ab258ce9ed5651f6a7e","./assets/jsxRuntime-DfnQo0KA.js":"3b399735365e9d36e27bcb8424cf74a8a259029fab9030dcd386da7a98e7aebf","./assets/normograma-DNP45sLq.js":"99f2250a0d9263c51eae12896898fce605f24aee93ee19deb4750530c6eeccf3","./datos/publico/perfiles-2794ab6755288b1171341ac06efb8c5f1ded9a04263781f43e853849e55eb915.json":"2794ab6755288b1171341ac06efb8c5f1ded9a04263781f43e853849e55eb915","./datos/publico/planes-dab73d497f8053e39b5219f06b04ef8c80c34f86ba7980b3817b6d52cba0f4d0.json":"dab73d497f8053e39b5219f06b04ef8c80c34f86ba7980b3817b6d52cba0f4d0","./icons/apple-touch-icon.png":"7c5dfce04388b7883ff806dacb99ff6ff8d8af336fb25c4682b883055ec20929","./icons/icon-192.png":"a4db497d50bc7ff22ccca56d614b320d09323b330fc3c1afdf0b1e16cbcb12c0","./icons/icon-512.png":"c59c7f7db9f2a1c514f15d813239eb4a904df9d8bc6327c9de48fed97ba900b8","./index.html":"7b4527a13742e42d60e73ec640eabf4c4c64352041db442280ce721ea4ee768c","./inicio.js":"6b4d97ea7d690ec0c1831f7b77fa709dd0d1c108a112bde0bc6df45e59aee36d","./manifest.json":"3f425b0568fc5aeb2ffb5bfadd476889f190c1ffed114a1fa3ada73047eebadf"};
const VERSION = "stoa-app-847410ac135c251a90fb";

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
