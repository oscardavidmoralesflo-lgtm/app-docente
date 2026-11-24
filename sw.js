// Solo guarda el shell público de estudio y los archivos de esta compilación.
// Los datos y las respuestas de usuario siguen a cargo de la app, fuera de esta caché.
// La finalización compartida guarda la huella de cada archivo del paquete definitivo.
const ARCHIVOS = ["./assets/Buscador-lv0Cm9ZU.js","./assets/Candado-uInI2AI1.js","./assets/Concurso-B4q68_3U.js","./assets/Consulta-BNZ9aYWs.js","./assets/Errores-BBMFB84O.js","./assets/HistorialSimulacros-CCee5Dq7.js","./assets/ModuloVista-CxfXYwqW.js","./assets/NormasCasos-Bmrj2Fad.js","./assets/Practica-UcqoerOC.js","./assets/Premium-B2NPHO4Q.js","./assets/Progreso-Bib4udOC.js","./assets/ReportarError-BEHAYU9C.js","./assets/Tarjetas-sHUM8XI7.js","./assets/Temario-Dk_F9HvY.js","./assets/app-Bm9TYJO0.css","./assets/app-Cnc5MRrY.js","./assets/bodoni-moda-latin-opsz-italic-BCRrlh7t.woff2","./assets/bodoni-moda-latin-opsz-normal-X2BzlAjV.woff2","./assets/fuentes-CYfJjTEQ.js","./assets/hanken-grotesk-latin-wght-normal-CaVRRdDk.woff2","./assets/jetbrains-mono-latin-wght-normal-B9CIFXIH.woff2","./assets/jsxRuntime-plSZLn39.js","./assets/normograma-DBx6HdoQ.js","./datos/publico/perfiles-1d6339fcb014582163d927299c70b70366fd5dbe2a5b1b8e9f3ca5381d21accd.json","./datos/publico/planes-b7e875e505e8154688bcaede58a590bd52ddc8bc631273dd92c3e29edc5e50bf.json","./icons/apple-touch-icon.png","./icons/icon-192.png","./icons/icon-512.png","./inicio.js","./manifest.json"];
const HASHES = {"./assets/Buscador-lv0Cm9ZU.js":"b971943b9c32d5f5be6e79850283b6c73fffb4eab95ca3e70cabc7be408a001d","./assets/Candado-uInI2AI1.js":"3a094cd44e4c134d14ac94e127143f1fd31e01e35f4ae1704195a0a39e31d0ba","./assets/Concurso-B4q68_3U.js":"39c88cc78f0425f68acb538f7e66a7fe15b4587e758985c27b55d14897bf1a17","./assets/Consulta-BNZ9aYWs.js":"6fc61207efca2da8fdbef9726d1240b0b5bad3751d03edd653ffd1b423c29bb4","./assets/Errores-BBMFB84O.js":"e6ec8d03e740833845a5e36bce4056e60f40dd2b3b76382c2a3bc3d8f4e0e818","./assets/HistorialSimulacros-CCee5Dq7.js":"4973a6da60a2f41e35fb1dbfa1726dc57642dc943f0c215df334edd749173056","./assets/ModuloVista-CxfXYwqW.js":"eeb4edbc5354c2f09bb5811c656be9c53aaba03374946bb1f3e375b85218b8e7","./assets/NormasCasos-Bmrj2Fad.js":"e81e7288e79015f081b6709d924267b0cd86e0d6e22ea5da33b36e510b578b35","./assets/Practica-UcqoerOC.js":"cf1fb261bd0a7790841d5584712ed2c83b1158ae7f04fb9308a3196cf0ab19e5","./assets/Premium-B2NPHO4Q.js":"176d0c76494b2c5d1670a9f56dfcc0844067c1fdc974f70d74199df155a972f4","./assets/Progreso-Bib4udOC.js":"82d4fe2885bb608b987df9d0984f9534345333a54fdab6aa65e075c464660536","./assets/ReportarError-BEHAYU9C.js":"5d443d64873b65c2e293347c30d1c50c27f2ecaf5a1ff9a9bfc258f546a60180","./assets/Tarjetas-sHUM8XI7.js":"9b4d55f167499b825b74a01d3aab1c0b4376f4a902929d6010f4cdd94dc59bc9","./assets/Temario-Dk_F9HvY.js":"c105abea532239b2aec7720f99d1949f8a25371a2e535821216c199b1ec248d8","./assets/app-Bm9TYJO0.css":"e59b92813bb478b5f833764c4d1cba53473aa4a76e585808dd4275f2e1c03537","./assets/app-Cnc5MRrY.js":"f39a0a99beffeebd97ea875a03825bd19e3a6327eee4f111c2960e196453eb17","./assets/bodoni-moda-latin-opsz-italic-BCRrlh7t.woff2":"b737328c13b92784ee78d99e62e3bcc38eeef0f2dba41d107637b3acea46781f","./assets/bodoni-moda-latin-opsz-normal-X2BzlAjV.woff2":"c032219ef636f7b4932f7d1dc91bdab602c970f090770b546bea4effaab3463c","./assets/fuentes-CYfJjTEQ.js":"c7c261c3986c60f6d5e20aeae6eb27679dbaaae998e6cae968f2987b659f8b84","./assets/hanken-grotesk-latin-wght-normal-CaVRRdDk.woff2":"e9201eddf1d41d0b62253295d869ce3cf65768f7102b797f02c7f8c876b4a9d5","./assets/jetbrains-mono-latin-wght-normal-B9CIFXIH.woff2":"18be452724bfdc236c074ca94a249a7f41a86752c7d04ab258ce9ed5651f6a7e","./assets/jsxRuntime-plSZLn39.js":"695173f4c49295b71a9bff31e10f64e5f9438819f8e74b858570f6b282aa2c63","./assets/normograma-DBx6HdoQ.js":"31b3d204b4248eea354eea2df3d544e1ed4d83765f8aa76f186a6d94b987a21a","./datos/publico/perfiles-1d6339fcb014582163d927299c70b70366fd5dbe2a5b1b8e9f3ca5381d21accd.json":"1d6339fcb014582163d927299c70b70366fd5dbe2a5b1b8e9f3ca5381d21accd","./datos/publico/planes-b7e875e505e8154688bcaede58a590bd52ddc8bc631273dd92c3e29edc5e50bf.json":"b7e875e505e8154688bcaede58a590bd52ddc8bc631273dd92c3e29edc5e50bf","./icons/apple-touch-icon.png":"7c5dfce04388b7883ff806dacb99ff6ff8d8af336fb25c4682b883055ec20929","./icons/icon-192.png":"a4db497d50bc7ff22ccca56d614b320d09323b330fc3c1afdf0b1e16cbcb12c0","./icons/icon-512.png":"c59c7f7db9f2a1c514f15d813239eb4a904df9d8bc6327c9de48fed97ba900b8","./index.html":"b4ed664674f2e4cfc4f71e9727919d26f31be5195390f0fa1d3ccd44ae3f65cb","./inicio.js":"6b4d97ea7d690ec0c1831f7b77fa709dd0d1c108a112bde0bc6df45e59aee36d","./manifest.json":"3f425b0568fc5aeb2ffb5bfadd476889f190c1ffed114a1fa3ada73047eebadf"};
const VERSION = "stoa-app-2c5e0d8de3a4841cd6e0";

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
