// Solo guarda el shell público de estudio y los archivos de esta compilación.
// Los datos y las respuestas de usuario siguen a cargo de la app, fuera de esta caché.
// La finalización compartida guarda la huella de cada archivo del paquete definitivo.
const ARCHIVOS = ["./assets/Buscador-SyYfg27_.js","./assets/Candado-Cz9NH-bC.js","./assets/Concurso-EajZ-c_J.js","./assets/Consulta-BfeGNeU8.js","./assets/Errores-XBE6Ac_G.js","./assets/HistorialSimulacros-DS2EtCaM.js","./assets/ModuloVista-D3C7yxYa.js","./assets/NormasCasos-B-10CpuL.js","./assets/Practica-C2cIhJUs.js","./assets/Premium-Bx60onqu.js","./assets/Progreso-BUzAFgbC.js","./assets/ReportarError-D0nGrZJN.js","./assets/Tarjetas-CosWcVD8.js","./assets/Temario-CUdDpbOX.js","./assets/app-A1BL0-UA.css","./assets/app-phpqBCJZ.js","./assets/bodoni-moda-latin-opsz-italic-BCRrlh7t.woff2","./assets/bodoni-moda-latin-opsz-normal-X2BzlAjV.woff2","./assets/fuentes-Ur-JAeKJ.js","./assets/hanken-grotesk-latin-wght-normal-CaVRRdDk.woff2","./assets/jetbrains-mono-latin-wght-normal-B9CIFXIH.woff2","./assets/jsxRuntime-B_pZMmLn.js","./assets/normograma-evSEurbt.js","./datos/publico/perfiles-e99917265dcd0571277c517d6fdd406c6be4e5455625dfc032e818c03c9173ad.json","./datos/publico/planes-acaaec6dc358865054e92c8fe2ebdb715cb339b737ab1f4d328e96654e8be8f4.json","./icons/apple-touch-icon.png","./icons/icon-192.png","./icons/icon-512.png","./inicio.js","./manifest.json"];
const HASHES = {"./assets/Buscador-SyYfg27_.js":"c42730da15a2c4e662f761505a0c0aea05ce7c3014d35d38ddfa25eba6ad30a9","./assets/Candado-Cz9NH-bC.js":"3dc1ee2353e20ea012207c33d88f061fb02e2df070e3aedb0b7664948e833f8a","./assets/Concurso-EajZ-c_J.js":"36d76feac90622cd430cff7cae0376e7da972e47f918b03b521429f81ca27e74","./assets/Consulta-BfeGNeU8.js":"e3c541218f904c142931c4b4c74e3428da8285f9b24ef92d1ea13e2e9bfe4da7","./assets/Errores-XBE6Ac_G.js":"1c42483805fd28c59d56264d9f23a23e6c29308c8e98446e19d64036d4783377","./assets/HistorialSimulacros-DS2EtCaM.js":"211f91ef2dc226cc3fdc648e1c89fe460c44c43f7b343fc95f15e24384c17136","./assets/ModuloVista-D3C7yxYa.js":"ead859cbd2fec65d2b22057cc9b64d87485e7327a28d25da02e5e8b6ec815555","./assets/NormasCasos-B-10CpuL.js":"7df7c18cbb7fd6c27567ffa18acc9c26702d1ff4aa17ad635fa10dbd80d63268","./assets/Practica-C2cIhJUs.js":"71aadb967bb94345be8689e8d8a8908101094efa6b10facb060627c00d3563f3","./assets/Premium-Bx60onqu.js":"ee4f70a231cb53648d30efac5268519e62d03ed6d1bd039ec4b1ad45184b4d70","./assets/Progreso-BUzAFgbC.js":"6491eb1ed2eef958986831b36f8f6ed601340e7f35ac5b6d9d28f6a48fa0b0b2","./assets/ReportarError-D0nGrZJN.js":"60aabc56195f3f2f1bf1432cb89ce2b04a42e7eab2ee0ede043d20b03cfd60bc","./assets/Tarjetas-CosWcVD8.js":"b9a0ad01b5262fa5d683709518246e5db949fce766d93d6083a5791d5f32824b","./assets/Temario-CUdDpbOX.js":"d9661a11a0f37ae0f1c00dde182c85c4273cae58e52881c63f4fdb9666e3ccce","./assets/app-A1BL0-UA.css":"2cdb3ee394faa6c8c04e8788dcc4225032ef06b6f8926dbccb3cef71545cd368","./assets/app-phpqBCJZ.js":"313aeb8c639bdfe9c5879b0365f28e32174b2807510ac94cc76eaa5f3d1860b0","./assets/bodoni-moda-latin-opsz-italic-BCRrlh7t.woff2":"b737328c13b92784ee78d99e62e3bcc38eeef0f2dba41d107637b3acea46781f","./assets/bodoni-moda-latin-opsz-normal-X2BzlAjV.woff2":"c032219ef636f7b4932f7d1dc91bdab602c970f090770b546bea4effaab3463c","./assets/fuentes-Ur-JAeKJ.js":"f9cf966d26e59085c47c6d443de45197f3811834f7f895cdcfe4d74d01a10444","./assets/hanken-grotesk-latin-wght-normal-CaVRRdDk.woff2":"e9201eddf1d41d0b62253295d869ce3cf65768f7102b797f02c7f8c876b4a9d5","./assets/jetbrains-mono-latin-wght-normal-B9CIFXIH.woff2":"18be452724bfdc236c074ca94a249a7f41a86752c7d04ab258ce9ed5651f6a7e","./assets/jsxRuntime-B_pZMmLn.js":"eb07048c97884290a6b254e23d2b8cb6d1862b3f3e75d54d14ba9d0c48e93cc5","./assets/normograma-evSEurbt.js":"62b65b1d88bd457fb96529eebfdfacc46ab8fe5de55327959b9e72e7feff90ae","./datos/publico/perfiles-e99917265dcd0571277c517d6fdd406c6be4e5455625dfc032e818c03c9173ad.json":"e99917265dcd0571277c517d6fdd406c6be4e5455625dfc032e818c03c9173ad","./datos/publico/planes-acaaec6dc358865054e92c8fe2ebdb715cb339b737ab1f4d328e96654e8be8f4.json":"acaaec6dc358865054e92c8fe2ebdb715cb339b737ab1f4d328e96654e8be8f4","./icons/apple-touch-icon.png":"7c5dfce04388b7883ff806dacb99ff6ff8d8af336fb25c4682b883055ec20929","./icons/icon-192.png":"a4db497d50bc7ff22ccca56d614b320d09323b330fc3c1afdf0b1e16cbcb12c0","./icons/icon-512.png":"c59c7f7db9f2a1c514f15d813239eb4a904df9d8bc6327c9de48fed97ba900b8","./index.html":"6207990587d2b2a73c30a3066e794c258b66fb217395d8b401e3b73a02f6b85d","./inicio.js":"6b4d97ea7d690ec0c1831f7b77fa709dd0d1c108a112bde0bc6df45e59aee36d","./manifest.json":"3f425b0568fc5aeb2ffb5bfadd476889f190c1ffed114a1fa3ada73047eebadf"};
const VERSION = "stoa-app-18e7f2feabde1efd91f4";

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
