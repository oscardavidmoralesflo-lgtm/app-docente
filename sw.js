// Solo guarda el shell público de estudio y los archivos de esta compilación.
// Los datos y las respuestas de usuario siguen a cargo de la app, fuera de esta caché.
// La finalización compartida guarda la huella de cada archivo del paquete definitivo.
const ARCHIVOS = ["./assets/Buscador-DJNWmjBF.js","./assets/Candado-D6R9Gwb7.js","./assets/Concurso-CzG68Ah6.js","./assets/Consulta-Cc_NS5AU.js","./assets/Errores-CDO7u-id.js","./assets/HistorialSimulacros-sXdiNEAW.js","./assets/ModuloVista-BhLzKLXZ.js","./assets/NormasCasos-DQMObBhB.js","./assets/Practica-Ck0H2dTs.js","./assets/Premium-BYZMqGK6.js","./assets/Progreso-DjXL3C-B.js","./assets/ReportarError-CAC2K3Wh.js","./assets/Tarjetas-D1nWJ41w.js","./assets/Temario-BZlcD13y.js","./assets/app-DJlSLvwo.js","./assets/app-DlJE-2I7.css","./assets/bodoni-moda-latin-opsz-italic-BCRrlh7t.woff2","./assets/bodoni-moda-latin-opsz-normal-X2BzlAjV.woff2","./assets/fuentes-GMSRJm4c.js","./assets/hanken-grotesk-latin-wght-normal-CaVRRdDk.woff2","./assets/jetbrains-mono-latin-wght-normal-B9CIFXIH.woff2","./assets/jsxRuntime-XPT0wEpf.js","./assets/normograma-BLy0n4LY.js","./datos/publico/perfiles-ab92a3f3a4ef38f87014cc748d40e3a85c8c5849412a8a9139fd409074ef505b.json","./datos/publico/planes-87d77bcaa1fa419e8a3e73beb5f2b2d36f4d578b162c3ff561b1e10da73ddcec.json","./icons/apple-touch-icon.png","./icons/icon-192.png","./icons/icon-512.png","./inicio.js","./manifest.json"];
const HASHES = {"./assets/Buscador-DJNWmjBF.js":"ec6f107ddb768e769ccb20ea0731b7f707f9c4c3a77bae2fac7da5dd269992ad","./assets/Candado-D6R9Gwb7.js":"8230608450bb27164f5501ddd396b2e62d8567db21ce9f7b3300137e73ab403f","./assets/Concurso-CzG68Ah6.js":"10eb972abe4b939561dfac64aad7b5dc0bb217d71ed009f849ff673dcb50f67b","./assets/Consulta-Cc_NS5AU.js":"115f07f39ba00e42d239b5e2f8ebbbb38c18d0f38d228607b43f6a984ac04adb","./assets/Errores-CDO7u-id.js":"46cfa6a5d53c656bf4786303326f1cc620064063d11161e9d6a8a46bac6c2880","./assets/HistorialSimulacros-sXdiNEAW.js":"1ca5508c3c7ce7add271de8784a763892e9ac88bb41022d7e69a7cc48b1371ee","./assets/ModuloVista-BhLzKLXZ.js":"a1ceea218c91b8d9cb92b1f6cb26fd089131c5a7bf618f10b942d21157f81ba3","./assets/NormasCasos-DQMObBhB.js":"c0a27b0b80618b9894292cfd80dcd821e4e21dcf0db9cc284b4859fd083393a9","./assets/Practica-Ck0H2dTs.js":"fc142b3c011d8483a0a823bd7e40d7407b5aea01b943e90af907ef23fa92cff1","./assets/Premium-BYZMqGK6.js":"1a288e81b2163e322a30ea2fc8943a5809b87c440027092046ebe3d34e1656c9","./assets/Progreso-DjXL3C-B.js":"7f7af7e9b1b38240a0dbb3b2dfa8e19e6c0344300f4b8a989218019db09215f6","./assets/ReportarError-CAC2K3Wh.js":"03f70260ab525518f26b0488c1870da5db5f264c6726ae6dc2b13c019418ad0d","./assets/Tarjetas-D1nWJ41w.js":"fe6cade77c6d61f854ebda5af4c9a22a6323f2194b5b713fb79c0ad98b57f3c3","./assets/Temario-BZlcD13y.js":"634d80df28137652849d4a27100de37d1e0e9f73f2f28a0c7d06f3f9424c57c0","./assets/app-DJlSLvwo.js":"7a5448e54cb9106ed1170de0f55ea3b38513a29e35b209bd3fe96f99081078da","./assets/app-DlJE-2I7.css":"bee487d9609c5cd2fb37c2797a402a2a7bb67b1edeff8b72d6e860135df89140","./assets/bodoni-moda-latin-opsz-italic-BCRrlh7t.woff2":"b737328c13b92784ee78d99e62e3bcc38eeef0f2dba41d107637b3acea46781f","./assets/bodoni-moda-latin-opsz-normal-X2BzlAjV.woff2":"c032219ef636f7b4932f7d1dc91bdab602c970f090770b546bea4effaab3463c","./assets/fuentes-GMSRJm4c.js":"9b4f70b8839519c6ea6537fb58690c66968f0dd40249fa0902c003b3d4fded6f","./assets/hanken-grotesk-latin-wght-normal-CaVRRdDk.woff2":"e9201eddf1d41d0b62253295d869ce3cf65768f7102b797f02c7f8c876b4a9d5","./assets/jetbrains-mono-latin-wght-normal-B9CIFXIH.woff2":"18be452724bfdc236c074ca94a249a7f41a86752c7d04ab258ce9ed5651f6a7e","./assets/jsxRuntime-XPT0wEpf.js":"317771429ca72f97cd746ea4a3e6f6d8bbd6b36a7210bf29f80750697074f86e","./assets/normograma-BLy0n4LY.js":"2ce1d1e85e85b91c552f8a59f59a719e80fbe47417d9af35e1b312072590fa73","./datos/publico/perfiles-ab92a3f3a4ef38f87014cc748d40e3a85c8c5849412a8a9139fd409074ef505b.json":"ab92a3f3a4ef38f87014cc748d40e3a85c8c5849412a8a9139fd409074ef505b","./datos/publico/planes-87d77bcaa1fa419e8a3e73beb5f2b2d36f4d578b162c3ff561b1e10da73ddcec.json":"87d77bcaa1fa419e8a3e73beb5f2b2d36f4d578b162c3ff561b1e10da73ddcec","./icons/apple-touch-icon.png":"7c5dfce04388b7883ff806dacb99ff6ff8d8af336fb25c4682b883055ec20929","./icons/icon-192.png":"a4db497d50bc7ff22ccca56d614b320d09323b330fc3c1afdf0b1e16cbcb12c0","./icons/icon-512.png":"c59c7f7db9f2a1c514f15d813239eb4a904df9d8bc6327c9de48fed97ba900b8","./index.html":"87937c42bb31560d27175823d103f7ae55b223a262062f166bab6af9da6d3cee","./inicio.js":"6b4d97ea7d690ec0c1831f7b77fa709dd0d1c108a112bde0bc6df45e59aee36d","./manifest.json":"3f425b0568fc5aeb2ffb5bfadd476889f190c1ffed114a1fa3ada73047eebadf"};
const VERSION = "stoa-app-aa55338aed33d0700c33";

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
