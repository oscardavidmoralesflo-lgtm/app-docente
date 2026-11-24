// Solo guarda el shell público de estudio y los archivos de esta compilación.
// Los datos y las respuestas de usuario siguen a cargo de la app, fuera de esta caché.
// La finalización compartida guarda la huella de cada archivo del paquete definitivo.
const ARCHIVOS = ["./assets/Buscador-BG0ofUcC.js","./assets/Candado-YuSYykXk.js","./assets/Concurso-Rv9bFQ9L.js","./assets/Consulta-BfIQ673v.js","./assets/Errores-CHWbm5qg.js","./assets/HistorialSimulacros-DlrlXjyz.js","./assets/ModuloVista-DKV5WPlD.js","./assets/NormasCasos-DHPlnaAT.js","./assets/Practica-DeFPOvbe.js","./assets/Premium-Be8FlTMF.js","./assets/Progreso-DHia00Yh.js","./assets/ReportarError-DHh5GGEs.js","./assets/Tarjetas-C5FNbKKy.js","./assets/Temario-Bn947eti.js","./assets/app-CrXMdhPI.js","./assets/app-DkrG6taI.css","./assets/bodoni-moda-latin-opsz-italic-BCRrlh7t.woff2","./assets/bodoni-moda-latin-opsz-normal-X2BzlAjV.woff2","./assets/fuentes-CDA-YWQ1.js","./assets/hanken-grotesk-latin-wght-normal-CaVRRdDk.woff2","./assets/jetbrains-mono-latin-wght-normal-B9CIFXIH.woff2","./assets/jsxRuntime-C-6RLGer.js","./assets/normograma-DlC8-HBq.js","./datos/publico/perfiles-c3dc914ce6cf8961fbe2c156ad5dece4d71f75b79592784abee070de590865c5.json","./datos/publico/planes-99cb9187cf8f9c6ff7294a9d17667c45e3c9e23504a8e4190f4c130617a33514.json","./icons/apple-touch-icon.png","./icons/icon-192.png","./icons/icon-512.png","./inicio.js","./manifest.json"];
const HASHES = {"./assets/Buscador-BG0ofUcC.js":"948c29d1a5d5bfaad6279a2f5709967740384eeafc54f307566ccf6251abbb05","./assets/Candado-YuSYykXk.js":"858e87178fd5e9b5359e828beaff6bc9183eb574d260605cccc3fb0e3618d412","./assets/Concurso-Rv9bFQ9L.js":"22153008f16987ffb1d1bbe6da77283f46ee7bbaf8552621a5ce27b6759d28f5","./assets/Consulta-BfIQ673v.js":"6d5dd72f43a055fffbab657cb6dcbe2cf9cecc4b752cdd0933ce41918d1da61b","./assets/Errores-CHWbm5qg.js":"fa50c61c27542c9d80e34cb4c821c91fd80ffd444fb12f9ce1d09a452d164d01","./assets/HistorialSimulacros-DlrlXjyz.js":"919cc3ac42855f2ed548c08ed1d0926112d9479d6589ed70b4eaf93a677e31cf","./assets/ModuloVista-DKV5WPlD.js":"e05b30142c6fa32565215dae0218c8b848496c3f1df3b058be6e0887c3d53ad2","./assets/NormasCasos-DHPlnaAT.js":"b8c9f72053e25a415af34aa92a298ad8b8343ab9701fdf0b874a0de5c042a819","./assets/Practica-DeFPOvbe.js":"fc3449c60c6de808f617be399585424d8a9236b04402c138ca328efe95c09dcc","./assets/Premium-Be8FlTMF.js":"a6896010b8811f298b04d08feb67e6a95fb398d528503e7d75c148176e16f4ac","./assets/Progreso-DHia00Yh.js":"a30d501557c762416ce58665053f228b0a2f05a7a00c5f4fa79c79989b83f0e1","./assets/ReportarError-DHh5GGEs.js":"cee15f7e7e655304f4e9a096e081433735010a54d57c5ea56e400c4c64cb4f38","./assets/Tarjetas-C5FNbKKy.js":"076abc3d246496bce13d3109e242d8c7178ef5557d3362033de6ab39253387ee","./assets/Temario-Bn947eti.js":"188356e1ea8d6ccf749cc781e220628072aad54732a9cee00013b66457225b0b","./assets/app-CrXMdhPI.js":"a8fcf399be4fccab97c73faf83f5d9a9ef6316cd933a873e5e9db3d255065335","./assets/app-DkrG6taI.css":"19445271bdc65779cc55db3f6c0f0600151b7311e4eacf3c27092ac694f989d1","./assets/bodoni-moda-latin-opsz-italic-BCRrlh7t.woff2":"b737328c13b92784ee78d99e62e3bcc38eeef0f2dba41d107637b3acea46781f","./assets/bodoni-moda-latin-opsz-normal-X2BzlAjV.woff2":"c032219ef636f7b4932f7d1dc91bdab602c970f090770b546bea4effaab3463c","./assets/fuentes-CDA-YWQ1.js":"88976a17e880ac76b263aaaa01fbe2c64b71dddd78710a969a3ecdf9a652a869","./assets/hanken-grotesk-latin-wght-normal-CaVRRdDk.woff2":"e9201eddf1d41d0b62253295d869ce3cf65768f7102b797f02c7f8c876b4a9d5","./assets/jetbrains-mono-latin-wght-normal-B9CIFXIH.woff2":"18be452724bfdc236c074ca94a249a7f41a86752c7d04ab258ce9ed5651f6a7e","./assets/jsxRuntime-C-6RLGer.js":"11de0de278d03840d03468337bd85e03cda5c32a6449447e0fec9896b1080b26","./assets/normograma-DlC8-HBq.js":"d968faf58485287063fa3798f922097cfaffe411ad441e5a6262f2318e579510","./datos/publico/perfiles-c3dc914ce6cf8961fbe2c156ad5dece4d71f75b79592784abee070de590865c5.json":"c3dc914ce6cf8961fbe2c156ad5dece4d71f75b79592784abee070de590865c5","./datos/publico/planes-99cb9187cf8f9c6ff7294a9d17667c45e3c9e23504a8e4190f4c130617a33514.json":"99cb9187cf8f9c6ff7294a9d17667c45e3c9e23504a8e4190f4c130617a33514","./icons/apple-touch-icon.png":"7c5dfce04388b7883ff806dacb99ff6ff8d8af336fb25c4682b883055ec20929","./icons/icon-192.png":"a4db497d50bc7ff22ccca56d614b320d09323b330fc3c1afdf0b1e16cbcb12c0","./icons/icon-512.png":"c59c7f7db9f2a1c514f15d813239eb4a904df9d8bc6327c9de48fed97ba900b8","./index.html":"2643c2393f0b5093bbab1e9f75ec7642c4871cd8d146fbea9bd1a5ae62b82058","./inicio.js":"6b4d97ea7d690ec0c1831f7b77fa709dd0d1c108a112bde0bc6df45e59aee36d","./manifest.json":"3f425b0568fc5aeb2ffb5bfadd476889f190c1ffed114a1fa3ada73047eebadf"};
const VERSION = "stoa-app-c85a33167e60e1913c50";

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
