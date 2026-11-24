// Solo guarda el shell público de estudio y los archivos de esta compilación.
// Los datos y las respuestas de usuario siguen a cargo de la app, fuera de esta caché.
// La finalización compartida guarda la huella de cada archivo del paquete definitivo.
const ARCHIVOS = ["./assets/Buscador-Dgqr2zSH.js","./assets/Candado-BhnnUSxe.js","./assets/Concurso-D2nWacnh.js","./assets/Consulta-ChKODT_S.js","./assets/Errores-BLiKYHYT.js","./assets/HistorialSimulacros-Dcxi73Gf.js","./assets/ModuloVista-DSwfdyrB.js","./assets/NormasCasos-G4t4aC6p.js","./assets/Practica-B-OWOqw8.js","./assets/Premium-5lm3jktF.js","./assets/Progreso-C-6u1fTA.js","./assets/ReportarError-p7poiBy3.js","./assets/Tarjetas-CxJYoKaM.js","./assets/Temario-a3rUiQgg.js","./assets/app-Bm9TYJO0.css","./assets/app-DSc4_9kw.js","./assets/bodoni-moda-latin-opsz-italic-BCRrlh7t.woff2","./assets/bodoni-moda-latin-opsz-normal-X2BzlAjV.woff2","./assets/fuentes-Duqe0HzT.js","./assets/hanken-grotesk-latin-wght-normal-CaVRRdDk.woff2","./assets/jetbrains-mono-latin-wght-normal-B9CIFXIH.woff2","./assets/jsxRuntime-C9BIPzGU.js","./assets/normograma-BQrzfJqt.js","./datos/publico/perfiles-b3826a96b35c9fcf511e741d4af05a9ed05c6e50e96b642f55d737ea554a37bc.json","./datos/publico/planes-94653fe9d2d748e980304b398658aa722e28afacbd9b5349ced17769d27b5517.json","./icons/apple-touch-icon.png","./icons/icon-192.png","./icons/icon-512.png","./inicio.js","./manifest.json"];
const HASHES = {"./assets/Buscador-Dgqr2zSH.js":"50ab6cb1eda084242f61f9463fe4ef1eadd6c1a2ad4c10d90ed91530f5a0d478","./assets/Candado-BhnnUSxe.js":"7f6e536756b0fa830ac3f011a0a79bcbb4f05f974c03b86d0151d4cde988567e","./assets/Concurso-D2nWacnh.js":"df6793af62e652e2d75ef99e89328e04dbd7c2165b7a8aeafac807a4e74ad990","./assets/Consulta-ChKODT_S.js":"45d11fa562d8acda89ee5bf19d94ec5a3e17c864f99f1e4eed3616c238f49939","./assets/Errores-BLiKYHYT.js":"c736d9f8049673b1cb70c025b40d0ea94e817673060b55e8166b957e5ed97bac","./assets/HistorialSimulacros-Dcxi73Gf.js":"5cd387649cdf0ea5f21d0a56eef83709cc6fe63e86e6c807b78c57441b83aa16","./assets/ModuloVista-DSwfdyrB.js":"ef51658aea60f0e78b29e1320f714e3a11ebfb0aa9c06c75b7872c0d4a9cfc3b","./assets/NormasCasos-G4t4aC6p.js":"8bb88642f68d3854dc8290d5662a5f0a4bf9ca040ef62e09379e4d67833385b5","./assets/Practica-B-OWOqw8.js":"99df96e0f71f75877f499a94f99a76fed6f8cf8a33d453f6b7b98462b5358962","./assets/Premium-5lm3jktF.js":"08595e396992e81624635aeac98555736aaac36ebc789e2482405b068de11949","./assets/Progreso-C-6u1fTA.js":"99f92973d8a3cbd1bb80ae86c27ef5389ea1e45ae5b0a32768c6add841d09f25","./assets/ReportarError-p7poiBy3.js":"0a133eb4c1d1e5eee02c90af503d49460fef9205cc67035675e480805d8c9aae","./assets/Tarjetas-CxJYoKaM.js":"e8f0d23ef0749a213d013887163712ca3ef4d8818867015a406dc08778e611c1","./assets/Temario-a3rUiQgg.js":"928d53b522f7874aeb4a119f0f45b71018c3e880b90a2f011ddba475a8d92b15","./assets/app-Bm9TYJO0.css":"e59b92813bb478b5f833764c4d1cba53473aa4a76e585808dd4275f2e1c03537","./assets/app-DSc4_9kw.js":"e4124110262625916eb182cc463799255d753beaf8194046fcc01fd8466cfd07","./assets/bodoni-moda-latin-opsz-italic-BCRrlh7t.woff2":"b737328c13b92784ee78d99e62e3bcc38eeef0f2dba41d107637b3acea46781f","./assets/bodoni-moda-latin-opsz-normal-X2BzlAjV.woff2":"c032219ef636f7b4932f7d1dc91bdab602c970f090770b546bea4effaab3463c","./assets/fuentes-Duqe0HzT.js":"05513432954af87b0cb96db5d40fa3369ae8d80ce99d5dba90b1ddb53351888f","./assets/hanken-grotesk-latin-wght-normal-CaVRRdDk.woff2":"e9201eddf1d41d0b62253295d869ce3cf65768f7102b797f02c7f8c876b4a9d5","./assets/jetbrains-mono-latin-wght-normal-B9CIFXIH.woff2":"18be452724bfdc236c074ca94a249a7f41a86752c7d04ab258ce9ed5651f6a7e","./assets/jsxRuntime-C9BIPzGU.js":"99474441a68d51869b302374696c9fe10dbb71ebf5bf58eb92781556fce83066","./assets/normograma-BQrzfJqt.js":"6714458179eaf2922a848cc8f791175597efc07fbf7c20a5d25f9b50609031ee","./datos/publico/perfiles-b3826a96b35c9fcf511e741d4af05a9ed05c6e50e96b642f55d737ea554a37bc.json":"b3826a96b35c9fcf511e741d4af05a9ed05c6e50e96b642f55d737ea554a37bc","./datos/publico/planes-94653fe9d2d748e980304b398658aa722e28afacbd9b5349ced17769d27b5517.json":"94653fe9d2d748e980304b398658aa722e28afacbd9b5349ced17769d27b5517","./icons/apple-touch-icon.png":"7c5dfce04388b7883ff806dacb99ff6ff8d8af336fb25c4682b883055ec20929","./icons/icon-192.png":"a4db497d50bc7ff22ccca56d614b320d09323b330fc3c1afdf0b1e16cbcb12c0","./icons/icon-512.png":"c59c7f7db9f2a1c514f15d813239eb4a904df9d8bc6327c9de48fed97ba900b8","./index.html":"f5c3232a8ed4571aaa9b8cccdbf21604df53d8c83d96395e9ee5789bec4cf273","./inicio.js":"6b4d97ea7d690ec0c1831f7b77fa709dd0d1c108a112bde0bc6df45e59aee36d","./manifest.json":"3f425b0568fc5aeb2ffb5bfadd476889f190c1ffed114a1fa3ada73047eebadf"};
const VERSION = "stoa-app-ab08120ea58279e91e66";

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
