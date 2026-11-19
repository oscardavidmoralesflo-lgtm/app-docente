// Solo guarda el shell público de estudio y los archivos de esta compilación.
// Los datos y las respuestas de usuario siguen a cargo de la app, fuera de esta caché.
// La finalización compartida guarda la huella de cada archivo del paquete definitivo.
const ARCHIVOS = ["./assets/Buscador-DJNWmjBF.js","./assets/Candado-D6R9Gwb7.js","./assets/Concurso-CB1fh_AL.js","./assets/Consulta-BfXmF9dP.js","./assets/Errores-Crt3PMkI.js","./assets/HistorialSimulacros-sXdiNEAW.js","./assets/ModuloVista-C32fPzRc.js","./assets/NormasCasos-DbXErPK_.js","./assets/Practica-Bf8gtink.js","./assets/Premium-mQ8ofqCf.js","./assets/Progreso-C1Ji9E_v.js","./assets/ReportarError-CAC2K3Wh.js","./assets/Tarjetas-DOUEYiPO.js","./assets/Temario-CWiOpPot.js","./assets/app-DNrB6oei.css","./assets/app-R6qb3bH6.js","./assets/bodoni-moda-latin-opsz-italic-BCRrlh7t.woff2","./assets/bodoni-moda-latin-opsz-normal-X2BzlAjV.woff2","./assets/fuentes-GMSRJm4c.js","./assets/hanken-grotesk-latin-wght-normal-CaVRRdDk.woff2","./assets/jetbrains-mono-latin-wght-normal-B9CIFXIH.woff2","./assets/jsxRuntime-XPT0wEpf.js","./assets/normograma-BLy0n4LY.js","./datos/publico/perfiles-e68f01af9d94d55c4336a41476066fa9b4786861581ae71b7a5ae1a02f8f126b.json","./datos/publico/planes-1cc5248d1a088811340d153f6a8d36352b6ee86d5b7ff6fe9c31ea29c4150330.json","./icons/apple-touch-icon.png","./icons/icon-192.png","./icons/icon-512.png","./inicio.js","./manifest.json"];
const HASHES = {"./assets/Buscador-DJNWmjBF.js":"ec6f107ddb768e769ccb20ea0731b7f707f9c4c3a77bae2fac7da5dd269992ad","./assets/Candado-D6R9Gwb7.js":"8230608450bb27164f5501ddd396b2e62d8567db21ce9f7b3300137e73ab403f","./assets/Concurso-CB1fh_AL.js":"43c33990c49c0763457acc806fce73efddaec0ce83411d2529035c7da3325ece","./assets/Consulta-BfXmF9dP.js":"e4d8f531d7bfe3a26ef00a09099029b52d4b8de6c07c74f3c00144da9c645f99","./assets/Errores-Crt3PMkI.js":"80a780bcbd75d32049e4399e772762779a749cfcd0f3e104c2cb2154a9c8fc2b","./assets/HistorialSimulacros-sXdiNEAW.js":"1ca5508c3c7ce7add271de8784a763892e9ac88bb41022d7e69a7cc48b1371ee","./assets/ModuloVista-C32fPzRc.js":"eb0245019a441ed093f25c86b297116e5d33f0ed97cb83c78e17935424da5adb","./assets/NormasCasos-DbXErPK_.js":"31da7da05bfdfce28a5bd48f7b255aa6227cb72deacb5ef44940be7fb4884eb9","./assets/Practica-Bf8gtink.js":"45fba279921c8068391c3735ea4f069e8f490368e5b9cf6c5c1eaafd891f9480","./assets/Premium-mQ8ofqCf.js":"399f56f5fda90111e77c51c77d0b529932472a0ff652bc0642f227603b669262","./assets/Progreso-C1Ji9E_v.js":"243675dc99be2f038834339d104313d19a4816a5c6f3c425024a19376b79bf6c","./assets/ReportarError-CAC2K3Wh.js":"03f70260ab525518f26b0488c1870da5db5f264c6726ae6dc2b13c019418ad0d","./assets/Tarjetas-DOUEYiPO.js":"1af3eff03fe2a1d3b93c3bbbaa0b6571c189d9cdcacea41009106a8d6eafadee","./assets/Temario-CWiOpPot.js":"6c038dfbe8414475340cfd7cf288d5557a2a211ce37aab756fa58448335037db","./assets/app-DNrB6oei.css":"748c11f1aff21d3289cbe13b7e0f3432a6bfa84d7fe7b12242d4fffc7c281db0","./assets/app-R6qb3bH6.js":"5722ea267ce8ab58ace711db07b32ca5380314cb66e044a994acf6089ae145b0","./assets/bodoni-moda-latin-opsz-italic-BCRrlh7t.woff2":"b737328c13b92784ee78d99e62e3bcc38eeef0f2dba41d107637b3acea46781f","./assets/bodoni-moda-latin-opsz-normal-X2BzlAjV.woff2":"c032219ef636f7b4932f7d1dc91bdab602c970f090770b546bea4effaab3463c","./assets/fuentes-GMSRJm4c.js":"9b4f70b8839519c6ea6537fb58690c66968f0dd40249fa0902c003b3d4fded6f","./assets/hanken-grotesk-latin-wght-normal-CaVRRdDk.woff2":"e9201eddf1d41d0b62253295d869ce3cf65768f7102b797f02c7f8c876b4a9d5","./assets/jetbrains-mono-latin-wght-normal-B9CIFXIH.woff2":"18be452724bfdc236c074ca94a249a7f41a86752c7d04ab258ce9ed5651f6a7e","./assets/jsxRuntime-XPT0wEpf.js":"317771429ca72f97cd746ea4a3e6f6d8bbd6b36a7210bf29f80750697074f86e","./assets/normograma-BLy0n4LY.js":"2ce1d1e85e85b91c552f8a59f59a719e80fbe47417d9af35e1b312072590fa73","./datos/publico/perfiles-e68f01af9d94d55c4336a41476066fa9b4786861581ae71b7a5ae1a02f8f126b.json":"e68f01af9d94d55c4336a41476066fa9b4786861581ae71b7a5ae1a02f8f126b","./datos/publico/planes-1cc5248d1a088811340d153f6a8d36352b6ee86d5b7ff6fe9c31ea29c4150330.json":"1cc5248d1a088811340d153f6a8d36352b6ee86d5b7ff6fe9c31ea29c4150330","./icons/apple-touch-icon.png":"7c5dfce04388b7883ff806dacb99ff6ff8d8af336fb25c4682b883055ec20929","./icons/icon-192.png":"a4db497d50bc7ff22ccca56d614b320d09323b330fc3c1afdf0b1e16cbcb12c0","./icons/icon-512.png":"c59c7f7db9f2a1c514f15d813239eb4a904df9d8bc6327c9de48fed97ba900b8","./index.html":"3ab4b968969ee4fdbe028b2643eb333ffd75a8613cd521a1d1f0d55f6b63ef6d","./inicio.js":"6b4d97ea7d690ec0c1831f7b77fa709dd0d1c108a112bde0bc6df45e59aee36d","./manifest.json":"3f425b0568fc5aeb2ffb5bfadd476889f190c1ffed114a1fa3ada73047eebadf"};
const VERSION = "stoa-app-62f99d1abd5cebf1c1fb";

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
