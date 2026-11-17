// Solo guarda el shell público de estudio y los archivos de esta compilación.
// Los datos y las respuestas de usuario siguen a cargo de la app, fuera de esta caché.
// La finalización compartida guarda la huella de cada archivo del paquete definitivo.
const ARCHIVOS = ["./assets/Buscador-DJNWmjBF.js","./assets/Candado-D6R9Gwb7.js","./assets/Concurso-De6n4iUS.js","./assets/Consulta-CErva_bn.js","./assets/Errores-Cx_hQ6zB.js","./assets/HistorialSimulacros-sXdiNEAW.js","./assets/ModuloVista--oyZrX1X.js","./assets/NormasCasos-C4ikA3cD.js","./assets/Practica-C5FPDRgF.js","./assets/Premium-ni1Ua4yX.js","./assets/Progreso-B9nETngI.js","./assets/ReportarError-CAC2K3Wh.js","./assets/Tarjetas-DD1DYEEB.js","./assets/Temario-G1hD3SEn.js","./assets/app-CCvGxLNf.css","./assets/app-DDQSLfYJ.js","./assets/bodoni-moda-latin-opsz-italic-BCRrlh7t.woff2","./assets/bodoni-moda-latin-opsz-normal-X2BzlAjV.woff2","./assets/fuentes-GMSRJm4c.js","./assets/hanken-grotesk-latin-wght-normal-CaVRRdDk.woff2","./assets/jetbrains-mono-latin-wght-normal-B9CIFXIH.woff2","./assets/jsxRuntime-XPT0wEpf.js","./assets/normograma-BLy0n4LY.js","./datos/publico/perfiles-dee3c8cdd0a90cd86a538e918842c4f131073dc1c4a7f9e2819e382007c78ccc.json","./datos/publico/planes-dc9cfeabba00d16a84ca01f4328043488b69c84927d04d964ded1329153cd16f.json","./icons/apple-touch-icon.png","./icons/icon-192.png","./icons/icon-512.png","./inicio.js","./manifest.json"];
const HASHES = {"./assets/Buscador-DJNWmjBF.js":"ec6f107ddb768e769ccb20ea0731b7f707f9c4c3a77bae2fac7da5dd269992ad","./assets/Candado-D6R9Gwb7.js":"8230608450bb27164f5501ddd396b2e62d8567db21ce9f7b3300137e73ab403f","./assets/Concurso-De6n4iUS.js":"5a99c35162258f64722a7ad177b9fd47836ef9ef3cd10926f2f8ab89c70d06cc","./assets/Consulta-CErva_bn.js":"a6d902424a20e5cee25d5227a6623d4280f259834d07638278dae471414306ef","./assets/Errores-Cx_hQ6zB.js":"cfb334ca6383799ceba6aeb37cd18d26f38345ac765cd0522d62d8e058a8d55b","./assets/HistorialSimulacros-sXdiNEAW.js":"1ca5508c3c7ce7add271de8784a763892e9ac88bb41022d7e69a7cc48b1371ee","./assets/ModuloVista--oyZrX1X.js":"f232260df591c326a3ca93b56e701d1969a324271daa82a5110d3b5a02365414","./assets/NormasCasos-C4ikA3cD.js":"f47f1581aa237fa4e0463551485d3b234bd210c9a33985a20ce9d69de0bea8a2","./assets/Practica-C5FPDRgF.js":"e5e71296e6cc3e0d9a779619cf4910960d24dc58748055a9f37084ba2657c1ed","./assets/Premium-ni1Ua4yX.js":"b6de2c7541815fb2acf9a405c75c36d1736126086042f69f27d621f554bda75e","./assets/Progreso-B9nETngI.js":"c050f1912994894575789fe9154258f36c4e80a553ced77cf9e597325eb0adfc","./assets/ReportarError-CAC2K3Wh.js":"03f70260ab525518f26b0488c1870da5db5f264c6726ae6dc2b13c019418ad0d","./assets/Tarjetas-DD1DYEEB.js":"d6fab28b4d6576710577ee3e3f2b32e013f6c27945ad82d5047a50d557cea6c1","./assets/Temario-G1hD3SEn.js":"e63f9e6defd4c765e30bea4c33be0f53e234ab824af9de00c7b0a9c47e00b844","./assets/app-CCvGxLNf.css":"07562584100723a7e2e9933e149723449c89bed1b441d6e3609ca8b8255d5111","./assets/app-DDQSLfYJ.js":"2e7a4cf787a00f1636cb5489f968fc3df7a4fa5f1fa9c00c86abb51504796fa7","./assets/bodoni-moda-latin-opsz-italic-BCRrlh7t.woff2":"b737328c13b92784ee78d99e62e3bcc38eeef0f2dba41d107637b3acea46781f","./assets/bodoni-moda-latin-opsz-normal-X2BzlAjV.woff2":"c032219ef636f7b4932f7d1dc91bdab602c970f090770b546bea4effaab3463c","./assets/fuentes-GMSRJm4c.js":"9b4f70b8839519c6ea6537fb58690c66968f0dd40249fa0902c003b3d4fded6f","./assets/hanken-grotesk-latin-wght-normal-CaVRRdDk.woff2":"e9201eddf1d41d0b62253295d869ce3cf65768f7102b797f02c7f8c876b4a9d5","./assets/jetbrains-mono-latin-wght-normal-B9CIFXIH.woff2":"18be452724bfdc236c074ca94a249a7f41a86752c7d04ab258ce9ed5651f6a7e","./assets/jsxRuntime-XPT0wEpf.js":"317771429ca72f97cd746ea4a3e6f6d8bbd6b36a7210bf29f80750697074f86e","./assets/normograma-BLy0n4LY.js":"2ce1d1e85e85b91c552f8a59f59a719e80fbe47417d9af35e1b312072590fa73","./datos/publico/perfiles-dee3c8cdd0a90cd86a538e918842c4f131073dc1c4a7f9e2819e382007c78ccc.json":"dee3c8cdd0a90cd86a538e918842c4f131073dc1c4a7f9e2819e382007c78ccc","./datos/publico/planes-dc9cfeabba00d16a84ca01f4328043488b69c84927d04d964ded1329153cd16f.json":"dc9cfeabba00d16a84ca01f4328043488b69c84927d04d964ded1329153cd16f","./icons/apple-touch-icon.png":"7c5dfce04388b7883ff806dacb99ff6ff8d8af336fb25c4682b883055ec20929","./icons/icon-192.png":"a4db497d50bc7ff22ccca56d614b320d09323b330fc3c1afdf0b1e16cbcb12c0","./icons/icon-512.png":"c59c7f7db9f2a1c514f15d813239eb4a904df9d8bc6327c9de48fed97ba900b8","./index.html":"dcbe0cb66fc2497bc1d258d0231885d2830f6aa3f8233dcbb8100d19549c0f35","./inicio.js":"6b4d97ea7d690ec0c1831f7b77fa709dd0d1c108a112bde0bc6df45e59aee36d","./manifest.json":"3f425b0568fc5aeb2ffb5bfadd476889f190c1ffed114a1fa3ada73047eebadf"};
const VERSION = "stoa-app-ee5e0a01792769021568";

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
