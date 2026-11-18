// Solo guarda el shell público de estudio y los archivos de esta compilación.
// Los datos y las respuestas de usuario siguen a cargo de la app, fuera de esta caché.
// La finalización compartida guarda la huella de cada archivo del paquete definitivo.
const ARCHIVOS = ["./assets/Buscador-DJNWmjBF.js","./assets/Candado-D6R9Gwb7.js","./assets/Concurso-Cq0IlpGY.js","./assets/Consulta-46dIPh8I.js","./assets/Errores-CfBeU56V.js","./assets/HistorialSimulacros-sXdiNEAW.js","./assets/ModuloVista-Bi-7P3GP.js","./assets/NormasCasos-BDmzesu_.js","./assets/Practica-DT6Cyi-6.js","./assets/Premium-CLX6uR2a.js","./assets/Progreso-DOhMe1ma.js","./assets/ReportarError-CAC2K3Wh.js","./assets/Tarjetas-B0kYM2Mv.js","./assets/Temario-DNbKcANV.js","./assets/app-Dc6xeUvc.js","./assets/app-DlJE-2I7.css","./assets/bodoni-moda-latin-opsz-italic-BCRrlh7t.woff2","./assets/bodoni-moda-latin-opsz-normal-X2BzlAjV.woff2","./assets/fuentes-GMSRJm4c.js","./assets/hanken-grotesk-latin-wght-normal-CaVRRdDk.woff2","./assets/jetbrains-mono-latin-wght-normal-B9CIFXIH.woff2","./assets/jsxRuntime-XPT0wEpf.js","./assets/normograma-BLy0n4LY.js","./datos/publico/perfiles-e5ba1bf6a4c1723b1da821c3c7c13076391f394be853fdac6399b85297668143.json","./datos/publico/planes-dd6892ceb0a5adf744100050dce2808ee8802917c0f1b1f412f86668507f560e.json","./icons/apple-touch-icon.png","./icons/icon-192.png","./icons/icon-512.png","./inicio.js","./manifest.json"];
const HASHES = {"./assets/Buscador-DJNWmjBF.js":"ec6f107ddb768e769ccb20ea0731b7f707f9c4c3a77bae2fac7da5dd269992ad","./assets/Candado-D6R9Gwb7.js":"8230608450bb27164f5501ddd396b2e62d8567db21ce9f7b3300137e73ab403f","./assets/Concurso-Cq0IlpGY.js":"77480561f5e2be166d6aec7b96706da959d45a2c8aa7b92ed8971fa1a0d413e0","./assets/Consulta-46dIPh8I.js":"64484f9b343a9cefb0eef283c4751e5e3ab0411ccf4dc2e2273b967049210ea3","./assets/Errores-CfBeU56V.js":"c360a9987b0b6cf5f487821cef1f45fdba0942fc65558312e64d7aa1c9d0b461","./assets/HistorialSimulacros-sXdiNEAW.js":"1ca5508c3c7ce7add271de8784a763892e9ac88bb41022d7e69a7cc48b1371ee","./assets/ModuloVista-Bi-7P3GP.js":"7eac4efce337756aed3ff71457a3c941b7fb9903476ded4f24a5607fd1c6874d","./assets/NormasCasos-BDmzesu_.js":"3dbeae71ae7c4b732d8ff336803ea652d7dd3ca18d181a48096c19fbb1d3b416","./assets/Practica-DT6Cyi-6.js":"44ebb7efdbc83c9f8f570134f91d8f4da9248d51e945a6e2717582d99e02b0a9","./assets/Premium-CLX6uR2a.js":"ecb20dc76decb28a5eb75e4c236f073e266595e8bb5db343d67a19bef2dda0b2","./assets/Progreso-DOhMe1ma.js":"b7454944b15e099490b1e8d55e97fdf10c12c4d7e46aa341f14dac37e9e4d6bf","./assets/ReportarError-CAC2K3Wh.js":"03f70260ab525518f26b0488c1870da5db5f264c6726ae6dc2b13c019418ad0d","./assets/Tarjetas-B0kYM2Mv.js":"4570e664cb5bba4e6ee1c6610dc1318eb97bf3917d41e2823e9da6f48d3b78fe","./assets/Temario-DNbKcANV.js":"2bfc510ec00166e3275f73a0ce445a033f566523d089b41c0ebd79e1c2099743","./assets/app-Dc6xeUvc.js":"0837b7e530e549d5f52f1ee72bca49a370f3a6787cf577ec244c836da56c5711","./assets/app-DlJE-2I7.css":"bee487d9609c5cd2fb37c2797a402a2a7bb67b1edeff8b72d6e860135df89140","./assets/bodoni-moda-latin-opsz-italic-BCRrlh7t.woff2":"b737328c13b92784ee78d99e62e3bcc38eeef0f2dba41d107637b3acea46781f","./assets/bodoni-moda-latin-opsz-normal-X2BzlAjV.woff2":"c032219ef636f7b4932f7d1dc91bdab602c970f090770b546bea4effaab3463c","./assets/fuentes-GMSRJm4c.js":"9b4f70b8839519c6ea6537fb58690c66968f0dd40249fa0902c003b3d4fded6f","./assets/hanken-grotesk-latin-wght-normal-CaVRRdDk.woff2":"e9201eddf1d41d0b62253295d869ce3cf65768f7102b797f02c7f8c876b4a9d5","./assets/jetbrains-mono-latin-wght-normal-B9CIFXIH.woff2":"18be452724bfdc236c074ca94a249a7f41a86752c7d04ab258ce9ed5651f6a7e","./assets/jsxRuntime-XPT0wEpf.js":"317771429ca72f97cd746ea4a3e6f6d8bbd6b36a7210bf29f80750697074f86e","./assets/normograma-BLy0n4LY.js":"2ce1d1e85e85b91c552f8a59f59a719e80fbe47417d9af35e1b312072590fa73","./datos/publico/perfiles-e5ba1bf6a4c1723b1da821c3c7c13076391f394be853fdac6399b85297668143.json":"e5ba1bf6a4c1723b1da821c3c7c13076391f394be853fdac6399b85297668143","./datos/publico/planes-dd6892ceb0a5adf744100050dce2808ee8802917c0f1b1f412f86668507f560e.json":"dd6892ceb0a5adf744100050dce2808ee8802917c0f1b1f412f86668507f560e","./icons/apple-touch-icon.png":"7c5dfce04388b7883ff806dacb99ff6ff8d8af336fb25c4682b883055ec20929","./icons/icon-192.png":"a4db497d50bc7ff22ccca56d614b320d09323b330fc3c1afdf0b1e16cbcb12c0","./icons/icon-512.png":"c59c7f7db9f2a1c514f15d813239eb4a904df9d8bc6327c9de48fed97ba900b8","./index.html":"d72acaa7877566979e35834df854c3002d5684c3c940bef2bc6bf91abff38a43","./inicio.js":"6b4d97ea7d690ec0c1831f7b77fa709dd0d1c108a112bde0bc6df45e59aee36d","./manifest.json":"3f425b0568fc5aeb2ffb5bfadd476889f190c1ffed114a1fa3ada73047eebadf"};
const VERSION = "stoa-app-a6b72d4458188989eef1";

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
