// Solo guarda el shell público de estudio y los archivos de esta compilación.
// Los datos y las respuestas de usuario siguen a cargo de la app, fuera de esta caché.
// La finalización compartida guarda la huella de cada archivo del paquete definitivo.
const ARCHIVOS = ["./assets/Acceso-BgI1vLvL.js","./assets/Buscador-DQNZBZFc.js","./assets/Candado-DHS7O47d.js","./assets/Concurso-By5jRcLx.js","./assets/Consulta-DE8T7517.js","./assets/Errores-H2RCWFdE.js","./assets/EstadoCobertura-BfU7Tovt.js","./assets/HistorialSimulacros-BGlqAvi2.js","./assets/Legal-CPVAgNJH.js","./assets/ModuloVista-BMg7ubX9.js","./assets/NormasCasos-Dq4GLCAM.js","./assets/Perfil-Czm5o867.js","./assets/Practica-BAbZE-ew.js","./assets/Premium-CMMSKmdJ.js","./assets/Progreso-BtLsgBon.js","./assets/ReportarError-vxxnVLFk.js","./assets/SoporteStoa-25QmXAPa.css","./assets/SoporteStoa-BQz86CbG.js","./assets/Tarjetas-Cr-lUR37.js","./assets/Temario-CHmPe4F0.js","./assets/app-BEdPQkT9.css","./assets/app-jga2-cnw.js","./assets/bodoni-moda-latin-opsz-italic-BCRrlh7t.woff2","./assets/bodoni-moda-latin-opsz-normal-X2BzlAjV.woff2","./assets/fuentes-BtzkvSBl.js","./assets/hanken-grotesk-latin-wght-normal-CaVRRdDk.woff2","./assets/jetbrains-mono-latin-wght-normal-B9CIFXIH.woff2","./assets/jsxRuntime-BmLkVcFa.js","./assets/normograma-DtaVCLCv.js","./datos/publico/perfiles-324d4b852a0fb168a7fe8972a5be99a7ddcc69b347cedfe13d773842c385fc58.json","./datos/publico/planes-b5efbd80a1f497ec0498b1a6940bb7772441a577e4e7103ac311626421b28c01.json","./icons/apple-touch-icon.png","./icons/icon-192.png","./icons/icon-512.png","./inicio.js","./manifest.json"];
const HASHES = {"./assets/Acceso-BgI1vLvL.js":"5aa77adfdf6c2d4b54d54336983779344bfb7e8217e7ea1b4c5b8b8b656da12d","./assets/Buscador-DQNZBZFc.js":"a9a43f1526e43c1abbd89fea34e948857a95feb7934f1e6faacfd2def98b2156","./assets/Candado-DHS7O47d.js":"475d061eaa9e897574d475ed036477b9355e11b1aea623bbfa20f54cbd6f66bb","./assets/Concurso-By5jRcLx.js":"e727e3ee3717b6be0cb5f18229111c776d206d899dcf7cc847bc5502324727b8","./assets/Consulta-DE8T7517.js":"e808e9d45bdcdfa89efe10fed8c6a7e583f82908f858ed25531bbcfd71683599","./assets/Errores-H2RCWFdE.js":"97a13d2b1966c40c2b88e0559edab2e3f5796865857e7e50b2778c9554c7654d","./assets/EstadoCobertura-BfU7Tovt.js":"67a2df446a719a82d9467d8ef2fe6a806d3b702b3af3378c6deb9053c1aec3eb","./assets/HistorialSimulacros-BGlqAvi2.js":"e0ddcc110b1dd66dd9aa5c10d84d9fda20ea29e3a7248d5a6d02ad43a54ee1f8","./assets/Legal-CPVAgNJH.js":"e8bb8923293ef2c9cd4712fda2220dc112b695f144151572ff74d32cbab6de6b","./assets/ModuloVista-BMg7ubX9.js":"d64852a1c6a68b0ed1d62b3298e53d1d21030a31c9d264e9bfb2cd776c7e89ff","./assets/NormasCasos-Dq4GLCAM.js":"e01dd3e11524ef208bd91baa702ea3350f2f4b30f4fdfdf04ae6d90816c4948c","./assets/Perfil-Czm5o867.js":"bfaa6c0b3ae617b5d436096d92f14dd3328e795f829388bc7f427dee63554e64","./assets/Practica-BAbZE-ew.js":"c2dab076f5956007e9d9c2fdbfc5ff8b6c1420395c577b6c7ce467e098299c13","./assets/Premium-CMMSKmdJ.js":"a5e62b381912a8b5123f96dd15efcbe44bc86576c6ed4520b682533734b4f12c","./assets/Progreso-BtLsgBon.js":"0295d822c990623123e64fd0f954b350cb15530bf22b7b3ba62aa2226b49eb6c","./assets/ReportarError-vxxnVLFk.js":"c6975f84f7b10ebd84277f60227de3df115dc8ac1b928118c63e034531021f9b","./assets/SoporteStoa-25QmXAPa.css":"524c4116bd89de58e3bd866bac4e9b61fc948616e4db1c302cb19507857f4ee0","./assets/SoporteStoa-BQz86CbG.js":"c9a00dfcdcb43154e479b9d053398f8ab986e72473acfcb30c5085aa02ad4305","./assets/Tarjetas-Cr-lUR37.js":"0f792862d984805c4a97d6e657c5c3e27ffc74c10f5100c74d45d326fc3d1b3e","./assets/Temario-CHmPe4F0.js":"69d42b90158ac5fbbeca3e57e0c990e9a64904a89b8459d11047e671f22d6d45","./assets/app-BEdPQkT9.css":"33cd93810924ec81ca5dd3f7451ad9631482425c4d5fed95c6b962bd953e593b","./assets/app-jga2-cnw.js":"583ab401a8096af6b7a83653dd7d26d2092c030552c2514149fb47198eb3f497","./assets/bodoni-moda-latin-opsz-italic-BCRrlh7t.woff2":"b737328c13b92784ee78d99e62e3bcc38eeef0f2dba41d107637b3acea46781f","./assets/bodoni-moda-latin-opsz-normal-X2BzlAjV.woff2":"c032219ef636f7b4932f7d1dc91bdab602c970f090770b546bea4effaab3463c","./assets/fuentes-BtzkvSBl.js":"7bbd02da03f0fc5346058fb35414b5eb30a33af6e097f75bfdbc4484da6bc2cc","./assets/hanken-grotesk-latin-wght-normal-CaVRRdDk.woff2":"e9201eddf1d41d0b62253295d869ce3cf65768f7102b797f02c7f8c876b4a9d5","./assets/jetbrains-mono-latin-wght-normal-B9CIFXIH.woff2":"18be452724bfdc236c074ca94a249a7f41a86752c7d04ab258ce9ed5651f6a7e","./assets/jsxRuntime-BmLkVcFa.js":"7969ae4a6cfa639e9146f55b22e6b41092a1f973ae8371ac6fe2ef70ed1c6a00","./assets/normograma-DtaVCLCv.js":"a9065bf9e610de4cc011364ed27944808ed3d44730d8982ebd955a6cf4807345","./datos/publico/perfiles-324d4b852a0fb168a7fe8972a5be99a7ddcc69b347cedfe13d773842c385fc58.json":"324d4b852a0fb168a7fe8972a5be99a7ddcc69b347cedfe13d773842c385fc58","./datos/publico/planes-b5efbd80a1f497ec0498b1a6940bb7772441a577e4e7103ac311626421b28c01.json":"b5efbd80a1f497ec0498b1a6940bb7772441a577e4e7103ac311626421b28c01","./icons/apple-touch-icon.png":"7c5dfce04388b7883ff806dacb99ff6ff8d8af336fb25c4682b883055ec20929","./icons/icon-192.png":"a4db497d50bc7ff22ccca56d614b320d09323b330fc3c1afdf0b1e16cbcb12c0","./icons/icon-512.png":"c59c7f7db9f2a1c514f15d813239eb4a904df9d8bc6327c9de48fed97ba900b8","./index.html":"7609a6b78d19f84e9ea5db34157086d1086584fe1f301f0bc1b6948a82242e9f","./inicio.js":"6b4d97ea7d690ec0c1831f7b77fa709dd0d1c108a112bde0bc6df45e59aee36d","./manifest.json":"3f425b0568fc5aeb2ffb5bfadd476889f190c1ffed114a1fa3ada73047eebadf"};
const VERSION = "stoa-app-2fe84e718e38bd005bc7";

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
