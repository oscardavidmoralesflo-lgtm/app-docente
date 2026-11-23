// Solo guarda el shell público de estudio y los archivos de esta compilación.
// Los datos y las respuestas de usuario siguen a cargo de la app, fuera de esta caché.
// La finalización compartida guarda la huella de cada archivo del paquete definitivo.
const ARCHIVOS = ["./assets/Buscador-CHQmUueq.js","./assets/Candado-DnbIilKw.js","./assets/Concurso-DIilkyv4.js","./assets/Consulta-DHO1HkR7.js","./assets/Errores-BaJsu9kw.js","./assets/HistorialSimulacros-Dhe_MOpA.js","./assets/ModuloVista-DNXiHzqo.js","./assets/NormasCasos-DXGeDniG.js","./assets/Practica-BNJ9W6ut.js","./assets/Premium-C2xTnvOU.js","./assets/Progreso-N-4c4iSN.js","./assets/ReportarError-eQ6EHYXd.js","./assets/Tarjetas-Droe9F-u.js","./assets/Temario-D5BPp8tk.js","./assets/app-Bm9TYJO0.css","./assets/app-CrCft-pW.js","./assets/bodoni-moda-latin-opsz-italic-BCRrlh7t.woff2","./assets/bodoni-moda-latin-opsz-normal-X2BzlAjV.woff2","./assets/fuentes-Bm0EbJe8.js","./assets/hanken-grotesk-latin-wght-normal-CaVRRdDk.woff2","./assets/jetbrains-mono-latin-wght-normal-B9CIFXIH.woff2","./assets/jsxRuntime-DO12Z4_c.js","./assets/normograma-BGKUlon3.js","./datos/publico/perfiles-d08083103e992e445bca2f778830ce67e88a4de80ca99f5c12d71ca8d6610594.json","./datos/publico/planes-42d755fb8faa6d4a838d6c22584d713469420677898c81a49d03db203ae8962a.json","./icons/apple-touch-icon.png","./icons/icon-192.png","./icons/icon-512.png","./inicio.js","./manifest.json"];
const HASHES = {"./assets/Buscador-CHQmUueq.js":"24ae2e0da397cc14c633dad81b96e96be9fca5df06133fa91edc403452e504ca","./assets/Candado-DnbIilKw.js":"f743b5c87d0365e861e5b7541d35b94397fccfd91dbf0ce02d71954e4857c920","./assets/Concurso-DIilkyv4.js":"70c078ef12bee6a42d9ba5c6f59d622ba6ef96735b2681f81c46a72328c51a3d","./assets/Consulta-DHO1HkR7.js":"b293944766abc022116981376018fb02857275ae178a6d0c2a063e56abe3a8ab","./assets/Errores-BaJsu9kw.js":"723c37744d9bb87368ff3556a83a05d8f9fbd797190450488689e14548383044","./assets/HistorialSimulacros-Dhe_MOpA.js":"3637c1cd105875451f0b647f3818a0853905b450023681dc43d59198429ac0f6","./assets/ModuloVista-DNXiHzqo.js":"87a3a2814e71c86839a36785f92389f18c96140609d0b483566cc989f4731a06","./assets/NormasCasos-DXGeDniG.js":"2de81011869af8837170d3c7a31c557bc0f83abc4ea331e69b5ff1dc9fc1acd1","./assets/Practica-BNJ9W6ut.js":"8e9262b56f32bdf6cd72b5aa04cfef78f5657212064f5b91cd4dd07aedb7fb35","./assets/Premium-C2xTnvOU.js":"3da38d2fa1ee9bde42d17e2997c80771324dc876ec82734c5c54e35fa7a8ea3b","./assets/Progreso-N-4c4iSN.js":"52dbfd91f8cbf897efc196ec3cda33d712b0c7e8a05daa7adc74a7a3ec6a2b6d","./assets/ReportarError-eQ6EHYXd.js":"6dc480ee65e0e998cb92aaf3de928a379491cdc0f66b051cf6a45ac93ff82518","./assets/Tarjetas-Droe9F-u.js":"c02f213061a3bfe93538b693067a2f2c1c48e5c2c7c6dbf37e1c9ffd9505def3","./assets/Temario-D5BPp8tk.js":"becfc4056e7eb9e914056bd72e8cd67ab98cb3de37af4701f4b003cfc5fac19c","./assets/app-Bm9TYJO0.css":"e59b92813bb478b5f833764c4d1cba53473aa4a76e585808dd4275f2e1c03537","./assets/app-CrCft-pW.js":"525dc0501b33a3bc0bb077c1f32a825db4732f50c6e9263bc8490a12566e326b","./assets/bodoni-moda-latin-opsz-italic-BCRrlh7t.woff2":"b737328c13b92784ee78d99e62e3bcc38eeef0f2dba41d107637b3acea46781f","./assets/bodoni-moda-latin-opsz-normal-X2BzlAjV.woff2":"c032219ef636f7b4932f7d1dc91bdab602c970f090770b546bea4effaab3463c","./assets/fuentes-Bm0EbJe8.js":"771f16a2b93435c5fccf4ba4b533863a86d14cb8d238ea907563c5b998ae5481","./assets/hanken-grotesk-latin-wght-normal-CaVRRdDk.woff2":"e9201eddf1d41d0b62253295d869ce3cf65768f7102b797f02c7f8c876b4a9d5","./assets/jetbrains-mono-latin-wght-normal-B9CIFXIH.woff2":"18be452724bfdc236c074ca94a249a7f41a86752c7d04ab258ce9ed5651f6a7e","./assets/jsxRuntime-DO12Z4_c.js":"06a77073d35244ab3ecf6ef0e7c2008a60178a60a69ddaa7565709fd99ce1962","./assets/normograma-BGKUlon3.js":"6f4a5802994f9e48dfaea9a40380bf5bdade3faf18adced4cd50b40495229e64","./datos/publico/perfiles-d08083103e992e445bca2f778830ce67e88a4de80ca99f5c12d71ca8d6610594.json":"d08083103e992e445bca2f778830ce67e88a4de80ca99f5c12d71ca8d6610594","./datos/publico/planes-42d755fb8faa6d4a838d6c22584d713469420677898c81a49d03db203ae8962a.json":"42d755fb8faa6d4a838d6c22584d713469420677898c81a49d03db203ae8962a","./icons/apple-touch-icon.png":"7c5dfce04388b7883ff806dacb99ff6ff8d8af336fb25c4682b883055ec20929","./icons/icon-192.png":"a4db497d50bc7ff22ccca56d614b320d09323b330fc3c1afdf0b1e16cbcb12c0","./icons/icon-512.png":"c59c7f7db9f2a1c514f15d813239eb4a904df9d8bc6327c9de48fed97ba900b8","./index.html":"2326aaaa31128d158bdf026e9ee532760dcdde57027fcba67f3e5f1ab6acdb3c","./inicio.js":"6b4d97ea7d690ec0c1831f7b77fa709dd0d1c108a112bde0bc6df45e59aee36d","./manifest.json":"3f425b0568fc5aeb2ffb5bfadd476889f190c1ffed114a1fa3ada73047eebadf"};
const VERSION = "stoa-app-8c4f8dc190c250060593";

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
