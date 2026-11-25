// Solo guarda el shell público de estudio y los archivos de esta compilación.
// Los datos y las respuestas de usuario siguen a cargo de la app, fuera de esta caché.
// La finalización compartida guarda la huella de cada archivo del paquete definitivo.
const ARCHIVOS = ["./assets/Buscador-BjhocC9S.js","./assets/Candado-BSwPZA6w.js","./assets/Concurso-DcN3xLip.js","./assets/Consulta-BGRahoeq.js","./assets/Errores-Du5Do5At.js","./assets/HistorialSimulacros-wtaV00s9.js","./assets/ModuloVista-1UzgXgnZ.js","./assets/NormasCasos-B9x8cLS-.js","./assets/Practica-XjMFDyGw.js","./assets/Premium-Cnv_njDn.js","./assets/Progreso-Lfs4WsAA.js","./assets/ReportarError-DAF-DTJ6.js","./assets/Tarjetas-L6pI7k64.js","./assets/Temario-BlHOztt4.js","./assets/app-CPhN7CJn.js","./assets/app-DkrG6taI.css","./assets/bodoni-moda-latin-opsz-italic-BCRrlh7t.woff2","./assets/bodoni-moda-latin-opsz-normal-X2BzlAjV.woff2","./assets/fuentes-_JFfsEm4.js","./assets/hanken-grotesk-latin-wght-normal-CaVRRdDk.woff2","./assets/jetbrains-mono-latin-wght-normal-B9CIFXIH.woff2","./assets/jsxRuntime-DlKy7fw5.js","./assets/normograma-B0LfNtoY.js","./datos/publico/perfiles-4316cd131e94d279361ef309fa4b06537b738437065757f00e40e08fa77bce5b.json","./datos/publico/planes-b7e0a74b6fcf3c42726cb480610b489e3be947b6af86be2bdd0b8bc22198b887.json","./icons/apple-touch-icon.png","./icons/icon-192.png","./icons/icon-512.png","./inicio.js","./manifest.json"];
const HASHES = {"./assets/Buscador-BjhocC9S.js":"38f4e45ece903621ebd4d0c5f688824b46fb6f21f745dae8f02e68a89748e222","./assets/Candado-BSwPZA6w.js":"5d29930e60be4bc169489ce9bd6205d8a7350f24f967c10a6a086a01580e9259","./assets/Concurso-DcN3xLip.js":"03a126e22ee3b0cd8f8d65988c88e1ee4882fd35b0c880da301d4346254d95b5","./assets/Consulta-BGRahoeq.js":"ecec759b6f6db389941322f34115cf7adeb16a49d40959cfecd50aa6f889a9f3","./assets/Errores-Du5Do5At.js":"de6ca2dce725afba2e2b0f91d8ca87b82ad7a2a65b315054df5e6a847605bffc","./assets/HistorialSimulacros-wtaV00s9.js":"819325238bdc1ba816cffdb07b6bdf1758c10d2b8322cbb3c6e882a250ad3cf9","./assets/ModuloVista-1UzgXgnZ.js":"8655dde151bd32f088ee5276903d3f106f42fe2731e6483d888bf550504ff6c4","./assets/NormasCasos-B9x8cLS-.js":"a804c30ddcf71d51f44dc4e947df3b94e8000d4197b25d85e004189d994e5738","./assets/Practica-XjMFDyGw.js":"29a282ef64d9e2cb6e2138f812ff41ee5dfe8018cbb3f398f3de581abe37152c","./assets/Premium-Cnv_njDn.js":"e51025d6c5713b195e9daf221f5dff7a5e3e4c5b415d00534f5e1373f8a13bb4","./assets/Progreso-Lfs4WsAA.js":"4ae3b4b06fe0de341425a55ea9f89fab7500f383e354a03bc3aa95ba40d6a92d","./assets/ReportarError-DAF-DTJ6.js":"c831734417789f7128cb4662001f53cb7fe4773155e1a74ce190f599f4147f02","./assets/Tarjetas-L6pI7k64.js":"f72347c2796c52f71f5de08138d5a44476c01709241582445a5fc7cb84a74e23","./assets/Temario-BlHOztt4.js":"4cb1c146fab86c1a3392b5e0c14a4204c439f1064edf62b8a72c86b8c3382a3d","./assets/app-CPhN7CJn.js":"2541c652b323ee1ac34c7216934b662b03c5c05c934533154a1e53a1cc0a556e","./assets/app-DkrG6taI.css":"19445271bdc65779cc55db3f6c0f0600151b7311e4eacf3c27092ac694f989d1","./assets/bodoni-moda-latin-opsz-italic-BCRrlh7t.woff2":"b737328c13b92784ee78d99e62e3bcc38eeef0f2dba41d107637b3acea46781f","./assets/bodoni-moda-latin-opsz-normal-X2BzlAjV.woff2":"c032219ef636f7b4932f7d1dc91bdab602c970f090770b546bea4effaab3463c","./assets/fuentes-_JFfsEm4.js":"f514097b84a0ba352e970f342c7bb2da45b968c8587112adbddbd197dd3e8108","./assets/hanken-grotesk-latin-wght-normal-CaVRRdDk.woff2":"e9201eddf1d41d0b62253295d869ce3cf65768f7102b797f02c7f8c876b4a9d5","./assets/jetbrains-mono-latin-wght-normal-B9CIFXIH.woff2":"18be452724bfdc236c074ca94a249a7f41a86752c7d04ab258ce9ed5651f6a7e","./assets/jsxRuntime-DlKy7fw5.js":"cd54dc700e962cadf285b2dd7261d5d2fd1afa2786e2f8de0e4959fa78ab56f6","./assets/normograma-B0LfNtoY.js":"f2d02573bb722569ca86e320c40e264604606ca6fff5076f5bbb5c57eacdb016","./datos/publico/perfiles-4316cd131e94d279361ef309fa4b06537b738437065757f00e40e08fa77bce5b.json":"4316cd131e94d279361ef309fa4b06537b738437065757f00e40e08fa77bce5b","./datos/publico/planes-b7e0a74b6fcf3c42726cb480610b489e3be947b6af86be2bdd0b8bc22198b887.json":"b7e0a74b6fcf3c42726cb480610b489e3be947b6af86be2bdd0b8bc22198b887","./icons/apple-touch-icon.png":"7c5dfce04388b7883ff806dacb99ff6ff8d8af336fb25c4682b883055ec20929","./icons/icon-192.png":"a4db497d50bc7ff22ccca56d614b320d09323b330fc3c1afdf0b1e16cbcb12c0","./icons/icon-512.png":"c59c7f7db9f2a1c514f15d813239eb4a904df9d8bc6327c9de48fed97ba900b8","./index.html":"775c5eb919342032e2e8a9c66bae9406e1104617f4c0a9f0d8563f86afc06e1d","./inicio.js":"6b4d97ea7d690ec0c1831f7b77fa709dd0d1c108a112bde0bc6df45e59aee36d","./manifest.json":"3f425b0568fc5aeb2ffb5bfadd476889f190c1ffed114a1fa3ada73047eebadf"};
const VERSION = "stoa-app-cc5c75fe95b678294b23";

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

// El recordatorio retoma la vista abierta. Si hace falta abrir la app, lleva a Práctica.
self.addEventListener("notificationclick", (e) => {
  e.notification.close();
  e.waitUntil(self.clients.matchAll({ type: "window", includeUncontrolled: true }).then((cs) => {
    const { index, raiz } = rutasPublicas();
    const estudio = cs.find((c) => {
      const url = new URL(c.url);
      url.hash = "";
      url.search = "";
      return url.href === raiz || url.href === index;
    });
    if (estudio) return estudio.focus();
    const destino = new URL(e.notification.data?.url ?? "./#practica", self.registration.scope);
    return self.clients.openWindow(destino.href);
  }));
});
