// Solo guarda el shell público de estudio y los archivos de esta compilación.
// Los datos y las respuestas de usuario siguen a cargo de la app, fuera de esta caché.
// La finalización compartida guarda la huella de cada archivo del paquete definitivo.
const ARCHIVOS = ["./assets/Buscador-tIQnavP1.js","./assets/Candado-C8SSAni1.js","./assets/Concurso-Dt085Bty.js","./assets/Consulta-B2cypjbb.js","./assets/Errores-CjWo_FFj.js","./assets/Esqueleto-AVI3v8Jg.js","./assets/HistorialSimulacros-Dwbw_MHY.js","./assets/ModuloVista-DIsXWr2_.js","./assets/NormasCasos-qLthUn43.js","./assets/Practica-CQjJ6FZ7.js","./assets/Premium-Cyo0zblU.js","./assets/Progreso-CU-hOKfp.js","./assets/ReportarError-DBjYAW4x.js","./assets/Tarjetas-TCiOemHl.js","./assets/Temario-2jqqvO_H.js","./assets/app-BAODirzT.css","./assets/app-BqCxjghp.js","./assets/bodoni-moda-latin-opsz-italic-BCRrlh7t.woff2","./assets/bodoni-moda-latin-opsz-normal-X2BzlAjV.woff2","./assets/datos-CwkmfnYZ.js","./assets/fuentes-AE7ANJ_Y.js","./assets/hanken-grotesk-latin-wght-normal-CaVRRdDk.woff2","./assets/jetbrains-mono-latin-wght-normal-B9CIFXIH.woff2","./datos/publico/perfiles-15ed64ca5c089b93787631074bfbd51032654d61f9f8b042bbac9a5d6f3b45c4.json","./datos/publico/planes-db0176159b74e3a14c30c2fe0a5970a777e275d3dbd3e5bf49924a2b35f20c4a.json","./icons/apple-touch-icon.png","./icons/icon-192.png","./icons/icon-512.png","./inicio.js","./manifest.json"];
const HASHES = {"./assets/Buscador-tIQnavP1.js":"89a302565569f034fa757b791c26dcda5c40cfa7f59e2dbb27974d57fd8a1219","./assets/Candado-C8SSAni1.js":"ac864af4d084e49e2ca8af150a87f07f95c7586e6be7fe6598d7a0d4ce8b3817","./assets/Concurso-Dt085Bty.js":"a069c86de17332c14e7885e826928f5a8395806ebd8fd234dfacddf47a76620b","./assets/Consulta-B2cypjbb.js":"12b5053270b4fb699e016510c78436c3cde2f3ecd50cd9da1ba1c0a5c202ed74","./assets/Errores-CjWo_FFj.js":"e90206b8ab8498b68f03397835c6d239f33efbe9eb79d8886816d8c3b75b2003","./assets/Esqueleto-AVI3v8Jg.js":"f0a4330ad133bb19d3396495ebd328af9c2d802315e358b60ebf75de476a8050","./assets/HistorialSimulacros-Dwbw_MHY.js":"2c5cb9210321fe0f467e4065558e49e4e8d26563dc8a04d723d3971e6e43318d","./assets/ModuloVista-DIsXWr2_.js":"595849d01a12f453a6e0d5b008961075d79bdbc386349f841859f8955af83213","./assets/NormasCasos-qLthUn43.js":"3f5d12e25b75cb07bc28ef9614066522bac4b7ba8fb0a7fd69e597ff821b8096","./assets/Practica-CQjJ6FZ7.js":"88e6f373fe2e6a032de582825978c40b4d07946ef11f4b490f6241ebad7008c6","./assets/Premium-Cyo0zblU.js":"1010b78f6856dffe5635f3ea71c8ed8d7bb417db29b53e8e0fe32bd90c83f1ed","./assets/Progreso-CU-hOKfp.js":"f7b2cc82ac77d55c36839c06392295489d4ed15568a6b6bf1a9c66cdb258efa1","./assets/ReportarError-DBjYAW4x.js":"6f489217874c032b056d55ba28e4881c16d95a6a59c2234a607b36230b7c194d","./assets/Tarjetas-TCiOemHl.js":"309dffeb0d77e2f38491cff18a6186ea9fb6a8f2f25aea3a41c001951e42c72a","./assets/Temario-2jqqvO_H.js":"6ad50a36af1cde1df0ab046b9dbba4632177ca3410766cc81893898855f020da","./assets/app-BAODirzT.css":"96f6ee52c65b848b844d66a7778fddb969678a1ce11dd8ef2c950d1e7d1420c7","./assets/app-BqCxjghp.js":"7ec87693786bd6e7088d0c7bf3a7e5cef20aed4523daf5603d05b0a27fead01a","./assets/bodoni-moda-latin-opsz-italic-BCRrlh7t.woff2":"b737328c13b92784ee78d99e62e3bcc38eeef0f2dba41d107637b3acea46781f","./assets/bodoni-moda-latin-opsz-normal-X2BzlAjV.woff2":"c032219ef636f7b4932f7d1dc91bdab602c970f090770b546bea4effaab3463c","./assets/datos-CwkmfnYZ.js":"f514f6cd25abca0450169203d649f89e17907b0f639c359098b6d4cbd5a0242a","./assets/fuentes-AE7ANJ_Y.js":"a32db3d96c6a9a242a530c654d262c2d270d209478546996bfd9b4da31a9d0ee","./assets/hanken-grotesk-latin-wght-normal-CaVRRdDk.woff2":"e9201eddf1d41d0b62253295d869ce3cf65768f7102b797f02c7f8c876b4a9d5","./assets/jetbrains-mono-latin-wght-normal-B9CIFXIH.woff2":"18be452724bfdc236c074ca94a249a7f41a86752c7d04ab258ce9ed5651f6a7e","./datos/publico/perfiles-15ed64ca5c089b93787631074bfbd51032654d61f9f8b042bbac9a5d6f3b45c4.json":"15ed64ca5c089b93787631074bfbd51032654d61f9f8b042bbac9a5d6f3b45c4","./datos/publico/planes-db0176159b74e3a14c30c2fe0a5970a777e275d3dbd3e5bf49924a2b35f20c4a.json":"db0176159b74e3a14c30c2fe0a5970a777e275d3dbd3e5bf49924a2b35f20c4a","./icons/apple-touch-icon.png":"7c5dfce04388b7883ff806dacb99ff6ff8d8af336fb25c4682b883055ec20929","./icons/icon-192.png":"a4db497d50bc7ff22ccca56d614b320d09323b330fc3c1afdf0b1e16cbcb12c0","./icons/icon-512.png":"c59c7f7db9f2a1c514f15d813239eb4a904df9d8bc6327c9de48fed97ba900b8","./index.html":"7203c61dd72ecbfd919f755bc694a1350ac217a876bb92be43dc6c32c4bd52ce","./inicio.js":"6b4d97ea7d690ec0c1831f7b77fa709dd0d1c108a112bde0bc6df45e59aee36d","./manifest.json":"3f425b0568fc5aeb2ffb5bfadd476889f190c1ffed114a1fa3ada73047eebadf"};
const VERSION = "stoa-app-d172bf29617da9f98f18";

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
