// Solo guarda el shell público de estudio y los archivos de esta compilación.
// Los datos y las respuestas de usuario siguen a cargo de la app, fuera de esta caché.
// La finalización compartida guarda la huella de cada archivo del paquete definitivo.
const ARCHIVOS = ["./assets/Acceso-LVTppov2.js","./assets/Buscador-DQNZBZFc.js","./assets/Candado-DHS7O47d.js","./assets/Concurso-CIsGGzj0.js","./assets/Consulta-CwEPAxui.js","./assets/Errores-C3qiv0tm.js","./assets/EstadoCobertura-BfU7Tovt.js","./assets/HistorialSimulacros-BGlqAvi2.js","./assets/Legal-B7vPURvh.js","./assets/ModuloVista-BeEHsOl7.js","./assets/NormasCasos-BuL7M8w2.js","./assets/Perfil-DlK3v8fa.js","./assets/Practica-D7KUipob.js","./assets/Premium-D9HumjBw.js","./assets/Progreso-CUtVXTlV.js","./assets/ReportarError-vxxnVLFk.js","./assets/SoporteStoa-25QmXAPa.css","./assets/SoporteStoa-BQz86CbG.js","./assets/Tarjetas-bTvjUUwR.js","./assets/Temario-Cn8UneeU.js","./assets/app-BEdPQkT9.css","./assets/app-o4JlyGRk.js","./assets/bodoni-moda-latin-opsz-italic-BCRrlh7t.woff2","./assets/bodoni-moda-latin-opsz-normal-X2BzlAjV.woff2","./assets/fuentes-BtzkvSBl.js","./assets/hanken-grotesk-latin-wght-normal-CaVRRdDk.woff2","./assets/jetbrains-mono-latin-wght-normal-B9CIFXIH.woff2","./assets/jsxRuntime-BmLkVcFa.js","./assets/normograma-DtaVCLCv.js","./datos/publico/perfiles-80bf2b37b67ed387f62e59afb12752f7f88810d24e1ea5d6153921fd60feefa1.json","./datos/publico/planes-9ce317fd966d41bc0da4671db72565408f44b60a6a3c197fe077982e2f7b84a0.json","./icons/apple-touch-icon.png","./icons/icon-192.png","./icons/icon-512.png","./inicio.js","./manifest.json"];
const HASHES = {"./assets/Acceso-LVTppov2.js":"dfdf78de2c77535fe92872c3026cb178c2ffbb1053c8414b42dd3ff1d5e9eb4d","./assets/Buscador-DQNZBZFc.js":"a9a43f1526e43c1abbd89fea34e948857a95feb7934f1e6faacfd2def98b2156","./assets/Candado-DHS7O47d.js":"475d061eaa9e897574d475ed036477b9355e11b1aea623bbfa20f54cbd6f66bb","./assets/Concurso-CIsGGzj0.js":"f7610221e1a0c5f8d2ae53e2aad8f1dcf4e50bce699c2f162d4aed72e784c817","./assets/Consulta-CwEPAxui.js":"5c726ec13c0bd301a5f26124f6adeee92d43bc5e23cfb2a0ba56eeb8d6cae15a","./assets/Errores-C3qiv0tm.js":"dd35767416c10c83a08c49cf566933156d3d1006dc4a382ecea6c3c7653aa1eb","./assets/EstadoCobertura-BfU7Tovt.js":"67a2df446a719a82d9467d8ef2fe6a806d3b702b3af3378c6deb9053c1aec3eb","./assets/HistorialSimulacros-BGlqAvi2.js":"e0ddcc110b1dd66dd9aa5c10d84d9fda20ea29e3a7248d5a6d02ad43a54ee1f8","./assets/Legal-B7vPURvh.js":"393531eed068a95176138d42c631e963f125ecf5863d142067c942eecede8bb5","./assets/ModuloVista-BeEHsOl7.js":"8d4094c7ae75fea646afaf34d68f977e0f42e130f2654b488f0e3438af3c7843","./assets/NormasCasos-BuL7M8w2.js":"2ed4c547393d6e3a1364d6377bc711b7577618e32e25d703f552387d2094154a","./assets/Perfil-DlK3v8fa.js":"a293a0c2781dcd43cf2c8bd744d8053bb1a95bd14843d58cf480982640df66a4","./assets/Practica-D7KUipob.js":"601fc11253e79f230076c53160eec990735598d62512372f8857535905b67417","./assets/Premium-D9HumjBw.js":"d22902cfcbb69f67673600b21410408d702c3894063735c72a29d78a3f00fe18","./assets/Progreso-CUtVXTlV.js":"2b9fb5b186392058d43421b98492130eaa870c6802887cc9a767a2332835d3b4","./assets/ReportarError-vxxnVLFk.js":"c6975f84f7b10ebd84277f60227de3df115dc8ac1b928118c63e034531021f9b","./assets/SoporteStoa-25QmXAPa.css":"524c4116bd89de58e3bd866bac4e9b61fc948616e4db1c302cb19507857f4ee0","./assets/SoporteStoa-BQz86CbG.js":"c9a00dfcdcb43154e479b9d053398f8ab986e72473acfcb30c5085aa02ad4305","./assets/Tarjetas-bTvjUUwR.js":"0a4facdd2941da787bbaa2259306b9f403cce40f6742d5907faba639cca6e8d7","./assets/Temario-Cn8UneeU.js":"56c88ed8e4a04d4a6c31d4a023d75a7d3f5f0c5a97be11ee25bd242a2dddf9e8","./assets/app-BEdPQkT9.css":"33cd93810924ec81ca5dd3f7451ad9631482425c4d5fed95c6b962bd953e593b","./assets/app-o4JlyGRk.js":"f176695deaf9948f9fb2f5c9f1054f6c6fa01f0df980a006a19695b0a37875d9","./assets/bodoni-moda-latin-opsz-italic-BCRrlh7t.woff2":"b737328c13b92784ee78d99e62e3bcc38eeef0f2dba41d107637b3acea46781f","./assets/bodoni-moda-latin-opsz-normal-X2BzlAjV.woff2":"c032219ef636f7b4932f7d1dc91bdab602c970f090770b546bea4effaab3463c","./assets/fuentes-BtzkvSBl.js":"7bbd02da03f0fc5346058fb35414b5eb30a33af6e097f75bfdbc4484da6bc2cc","./assets/hanken-grotesk-latin-wght-normal-CaVRRdDk.woff2":"e9201eddf1d41d0b62253295d869ce3cf65768f7102b797f02c7f8c876b4a9d5","./assets/jetbrains-mono-latin-wght-normal-B9CIFXIH.woff2":"18be452724bfdc236c074ca94a249a7f41a86752c7d04ab258ce9ed5651f6a7e","./assets/jsxRuntime-BmLkVcFa.js":"7969ae4a6cfa639e9146f55b22e6b41092a1f973ae8371ac6fe2ef70ed1c6a00","./assets/normograma-DtaVCLCv.js":"a9065bf9e610de4cc011364ed27944808ed3d44730d8982ebd955a6cf4807345","./datos/publico/perfiles-80bf2b37b67ed387f62e59afb12752f7f88810d24e1ea5d6153921fd60feefa1.json":"80bf2b37b67ed387f62e59afb12752f7f88810d24e1ea5d6153921fd60feefa1","./datos/publico/planes-9ce317fd966d41bc0da4671db72565408f44b60a6a3c197fe077982e2f7b84a0.json":"9ce317fd966d41bc0da4671db72565408f44b60a6a3c197fe077982e2f7b84a0","./icons/apple-touch-icon.png":"7c5dfce04388b7883ff806dacb99ff6ff8d8af336fb25c4682b883055ec20929","./icons/icon-192.png":"a4db497d50bc7ff22ccca56d614b320d09323b330fc3c1afdf0b1e16cbcb12c0","./icons/icon-512.png":"c59c7f7db9f2a1c514f15d813239eb4a904df9d8bc6327c9de48fed97ba900b8","./index.html":"ab689c12f741bbedbeb4ff38f64ec4cc06ff8cb7fd306a54b4d79fe00b6bfa50","./inicio.js":"6b4d97ea7d690ec0c1831f7b77fa709dd0d1c108a112bde0bc6df45e59aee36d","./manifest.json":"3f425b0568fc5aeb2ffb5bfadd476889f190c1ffed114a1fa3ada73047eebadf"};
const VERSION = "stoa-app-5e58b717b23b63a753e9";

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
