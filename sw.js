// Solo guarda el shell público de estudio y los archivos de esta compilación.
// Los datos y las respuestas de usuario siguen a cargo de la app, fuera de esta caché.
// La finalización compartida guarda la huella de cada archivo del paquete definitivo.
const ARCHIVOS = ["./assets/Buscador-fIQ469b6.js","./assets/Candado-Dl-N-kQB.js","./assets/Concurso-BqRuuYGG.js","./assets/Consulta-BaKXr8Py.js","./assets/Errores-DAN1RTzL.js","./assets/Esqueleto-DKowirKr.js","./assets/HistorialSimulacros-CMLiIjeK.js","./assets/ModuloVista-CFcTz4jM.js","./assets/NormasCasos-UZ8mFGVw.js","./assets/Practica-CWGVEvI8.js","./assets/Premium-C5RfqhCc.js","./assets/Progreso-B4KsaL2t.js","./assets/ReportarError-CrtVeVQx.js","./assets/Tarjetas-BtRO38Vt.js","./assets/Temario-D_kTPzrb.js","./assets/app-77EKeNLA.css","./assets/app-CpvqyNLc.js","./assets/bodoni-moda-latin-opsz-italic-BCRrlh7t.woff2","./assets/bodoni-moda-latin-opsz-normal-X2BzlAjV.woff2","./assets/datos-lWu28vsX.js","./assets/fuentes-Cp_JFNrU.js","./assets/hanken-grotesk-latin-wght-normal-CaVRRdDk.woff2","./assets/jetbrains-mono-latin-wght-normal-B9CIFXIH.woff2","./datos/publico/perfiles-42adaaa2b665e1ca023eb5c3567ffefd7813740bdf939f1c9d4ac50799971c62.json","./datos/publico/planes-cf49a7ae8e71aed7472a04b0c14f7fcc2f646afa3613bc3947031e63967a024d.json","./icons/apple-touch-icon.png","./icons/icon-192.png","./icons/icon-512.png","./inicio.js","./manifest.json"];
const HASHES = {"./assets/Buscador-fIQ469b6.js":"9d27453d5c5af21e3d2f3fcd42d84e056099278a21033036317823986cef0a3c","./assets/Candado-Dl-N-kQB.js":"0ca92fec992b528c299152ba9fa8989a0937784cd086855484d548095757b2ca","./assets/Concurso-BqRuuYGG.js":"79b2300512886a7a3a5b9225fa828e9e8ee48e7df87fa3be506e836674715b75","./assets/Consulta-BaKXr8Py.js":"34b91fd6c3b3221efa9c3e32a1dc7566a5b4de47b8c0a4d95694537160f6e7f4","./assets/Errores-DAN1RTzL.js":"2080a721c01dcc641354b687f0dcf17a34c82652386e1d8f790c63c052b4924b","./assets/Esqueleto-DKowirKr.js":"6c91c307ca2e6687cf347c74f201b841aad87df88288bd4611eb91612db98cd1","./assets/HistorialSimulacros-CMLiIjeK.js":"1f0c772226b135c173d8f9a5fb22fdee8f3218ed9ff36b2d991b9054873d6d7b","./assets/ModuloVista-CFcTz4jM.js":"d9389161cb069b2ca3f8785f02c71c2c4569db36b057b3139344152fe47d2d79","./assets/NormasCasos-UZ8mFGVw.js":"f96f5eece1460e3f20cbb065ea82b143b26bd04e05ea86461fb708d887edb6c8","./assets/Practica-CWGVEvI8.js":"74fbe7fcd42948a7e0cf56a45fd6e9ed6d55366ffbd0bf9126d4e57a054b00be","./assets/Premium-C5RfqhCc.js":"baf942298e2e4fda235f84cf0de22ef40d264914dbd312d0632f25c91cac6c32","./assets/Progreso-B4KsaL2t.js":"e045e0f41454eeb83b3d5db3390f878f1ed08ff2cbed9138e23072766d74f695","./assets/ReportarError-CrtVeVQx.js":"b20bc86f3d42c56c37fbdd21c2c2d13f126fc378e3bb9faf99490397ea6ea7d9","./assets/Tarjetas-BtRO38Vt.js":"e416f12de105f265c904ee16c1b92b589bc35ba5df8bb5802c00634f9ac16015","./assets/Temario-D_kTPzrb.js":"b970a05085f02a5e49a547cf8b969eea18fc5d16b189acb40be7504c8264ee26","./assets/app-77EKeNLA.css":"5d912c73d4acffe2c69c8e16b8fc3dcd5ea6b4898c9d60744a841c96a3913daf","./assets/app-CpvqyNLc.js":"51007a03d6d728533eba79af0482ed2930f82c1694750a2f684cc17929ceb361","./assets/bodoni-moda-latin-opsz-italic-BCRrlh7t.woff2":"b737328c13b92784ee78d99e62e3bcc38eeef0f2dba41d107637b3acea46781f","./assets/bodoni-moda-latin-opsz-normal-X2BzlAjV.woff2":"c032219ef636f7b4932f7d1dc91bdab602c970f090770b546bea4effaab3463c","./assets/datos-lWu28vsX.js":"d9adef25007378205281449bbfb8f6fabce7a26d4491f1f17316da566c8c3910","./assets/fuentes-Cp_JFNrU.js":"4e05a5209428fcee43eb37c6b0077a2f554bcd32d35565dd963b34beb06c39be","./assets/hanken-grotesk-latin-wght-normal-CaVRRdDk.woff2":"e9201eddf1d41d0b62253295d869ce3cf65768f7102b797f02c7f8c876b4a9d5","./assets/jetbrains-mono-latin-wght-normal-B9CIFXIH.woff2":"18be452724bfdc236c074ca94a249a7f41a86752c7d04ab258ce9ed5651f6a7e","./datos/publico/perfiles-42adaaa2b665e1ca023eb5c3567ffefd7813740bdf939f1c9d4ac50799971c62.json":"42adaaa2b665e1ca023eb5c3567ffefd7813740bdf939f1c9d4ac50799971c62","./datos/publico/planes-cf49a7ae8e71aed7472a04b0c14f7fcc2f646afa3613bc3947031e63967a024d.json":"cf49a7ae8e71aed7472a04b0c14f7fcc2f646afa3613bc3947031e63967a024d","./icons/apple-touch-icon.png":"7c5dfce04388b7883ff806dacb99ff6ff8d8af336fb25c4682b883055ec20929","./icons/icon-192.png":"a4db497d50bc7ff22ccca56d614b320d09323b330fc3c1afdf0b1e16cbcb12c0","./icons/icon-512.png":"c59c7f7db9f2a1c514f15d813239eb4a904df9d8bc6327c9de48fed97ba900b8","./index.html":"8c7cac62bf548b776591d15f50bb8e7450b7561c5a86a34339c62247e9b61258","./inicio.js":"6b4d97ea7d690ec0c1831f7b77fa709dd0d1c108a112bde0bc6df45e59aee36d","./manifest.json":"3f425b0568fc5aeb2ffb5bfadd476889f190c1ffed114a1fa3ada73047eebadf"};
const VERSION = "stoa-app-219fdabaacb7b398b081";

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
