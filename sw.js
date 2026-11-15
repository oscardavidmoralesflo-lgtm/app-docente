// Solo guarda el shell público de estudio y los archivos de esta compilación.
// Los datos y las respuestas de usuario siguen a cargo de la app, fuera de esta caché.
// La finalización compartida guarda la huella de cada archivo del paquete definitivo.
const ARCHIVOS = ["./assets/Buscador-D7ygpl4N.js","./assets/Candado-C9aKSAtY.js","./assets/Concurso-U1BTsFK9.js","./assets/Consulta-11z-WGjS.js","./assets/Errores--0sSaXhC.js","./assets/HistorialSimulacros-DjRjC8nM.js","./assets/ModuloVista-DB0_79Ns.js","./assets/NormasCasos-D24CT5Ss.js","./assets/Practica-B3s7GIt6.js","./assets/Premium-v16fyU1B.js","./assets/Progreso-BIcnAbfH.js","./assets/ReportarError-qznaSloU.js","./assets/Tarjetas-C_0gLsfz.js","./assets/Temario-BPTlzS6t.js","./assets/app-BEdKdUvq.css","./assets/app-CcUcCsLf.js","./assets/bodoni-moda-latin-opsz-italic-BCRrlh7t.woff2","./assets/bodoni-moda-latin-opsz-normal-X2BzlAjV.woff2","./assets/fuentes-DxoXJT8k.js","./assets/hanken-grotesk-latin-wght-normal-CaVRRdDk.woff2","./assets/jetbrains-mono-latin-wght-normal-B9CIFXIH.woff2","./assets/jsxRuntime-DfnQo0KA.js","./datos/publico/perfiles-a64fbd4c88070e608a68cad2cc1668a5c05893117f9180bd1b4ff00817237b96.json","./datos/publico/planes-47d8ad6e400b8c3e15c307ed2cfec234e870abfc8ce4e3c3853dcfd088dfea88.json","./icons/apple-touch-icon.png","./icons/icon-192.png","./icons/icon-512.png","./inicio.js","./manifest.json"];
const HASHES = {"./assets/Buscador-D7ygpl4N.js":"b770b0f40581b1d93648a31d7e008a55f81d32d8936ccc156ea566ffd45de4f1","./assets/Candado-C9aKSAtY.js":"3535873039692dabf7628ebdef3ddcefa92fac8b130e0637c8338f23e9311007","./assets/Concurso-U1BTsFK9.js":"5e89503907dd82b5e5eabf38648df045937a84d15a840375599efb85c5bf0b2c","./assets/Consulta-11z-WGjS.js":"4aad5735f9154da04df1d513e59dbd718c3b6095754bdaf5fb452c12d5da9ba9","./assets/Errores--0sSaXhC.js":"272c5216eacda4d6fb8aff0c75193f0d7c23344478cc9f50b1eb9e325db20f8b","./assets/HistorialSimulacros-DjRjC8nM.js":"502fe6e9e9add6a9a68076aad7ea636a9f80cf600efe1a3e67257d0a858d864c","./assets/ModuloVista-DB0_79Ns.js":"49e7ecfbb8fca4b4a1346a44d806eb868bfb29aa68e09da3e3eb83ed2ac920ae","./assets/NormasCasos-D24CT5Ss.js":"ec63af87da4d14a0a973462f123414fec0653376979016180de6e0f5c756e45d","./assets/Practica-B3s7GIt6.js":"9f233b95d42a15b5f9d75ed2a22e357d130a78903d568005cc61524aa2b1901e","./assets/Premium-v16fyU1B.js":"8181d0cdf722220fd31e107b1d14093e4ecbe6057ff228d02d7f83c279395ab8","./assets/Progreso-BIcnAbfH.js":"4fc227acec286f200f38da45e6b1105ba5f800919410a4e82bd3efa1a62afa5c","./assets/ReportarError-qznaSloU.js":"d30bab60326170ec6c32ce61b1ee74183520e9fc4d623a15ca331d90f22de40d","./assets/Tarjetas-C_0gLsfz.js":"92e18ab153fea0eb4ef92141f0358c9ed943b8eb28e2747f6f906ac5b4bc22fe","./assets/Temario-BPTlzS6t.js":"9476b63ff826db1ed2a3dc4ce1de717a2330c736a67bac72218346aecb21e9ab","./assets/app-BEdKdUvq.css":"d50e469aba977c3eafd3f2f34fef7dc2e282128fff4aa8a0fc391b104fe32387","./assets/app-CcUcCsLf.js":"5b5cb218a57a50e3174417516973e36a1e615d8e46505572e37b686cac4a44ec","./assets/bodoni-moda-latin-opsz-italic-BCRrlh7t.woff2":"b737328c13b92784ee78d99e62e3bcc38eeef0f2dba41d107637b3acea46781f","./assets/bodoni-moda-latin-opsz-normal-X2BzlAjV.woff2":"c032219ef636f7b4932f7d1dc91bdab602c970f090770b546bea4effaab3463c","./assets/fuentes-DxoXJT8k.js":"7f3f417b72173f27a58fa7286ae5637266f4d6e9a45401c005c0699cf893b80d","./assets/hanken-grotesk-latin-wght-normal-CaVRRdDk.woff2":"e9201eddf1d41d0b62253295d869ce3cf65768f7102b797f02c7f8c876b4a9d5","./assets/jetbrains-mono-latin-wght-normal-B9CIFXIH.woff2":"18be452724bfdc236c074ca94a249a7f41a86752c7d04ab258ce9ed5651f6a7e","./assets/jsxRuntime-DfnQo0KA.js":"3b399735365e9d36e27bcb8424cf74a8a259029fab9030dcd386da7a98e7aebf","./datos/publico/perfiles-a64fbd4c88070e608a68cad2cc1668a5c05893117f9180bd1b4ff00817237b96.json":"a64fbd4c88070e608a68cad2cc1668a5c05893117f9180bd1b4ff00817237b96","./datos/publico/planes-47d8ad6e400b8c3e15c307ed2cfec234e870abfc8ce4e3c3853dcfd088dfea88.json":"47d8ad6e400b8c3e15c307ed2cfec234e870abfc8ce4e3c3853dcfd088dfea88","./icons/apple-touch-icon.png":"7c5dfce04388b7883ff806dacb99ff6ff8d8af336fb25c4682b883055ec20929","./icons/icon-192.png":"a4db497d50bc7ff22ccca56d614b320d09323b330fc3c1afdf0b1e16cbcb12c0","./icons/icon-512.png":"c59c7f7db9f2a1c514f15d813239eb4a904df9d8bc6327c9de48fed97ba900b8","./index.html":"a8e6db517e95a906404fc2af2c0383df083b5a6f082de99a802abe2dbb009413","./inicio.js":"6b4d97ea7d690ec0c1831f7b77fa709dd0d1c108a112bde0bc6df45e59aee36d","./manifest.json":"3f425b0568fc5aeb2ffb5bfadd476889f190c1ffed114a1fa3ada73047eebadf"};
const VERSION = "stoa-app-6cf56436ada319df18f8";

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
