// Solo guarda el shell público de estudio y los archivos de esta compilación.
// Los datos y las respuestas de usuario siguen a cargo de la app, fuera de esta caché.
// La finalización compartida guarda la huella de cada archivo del paquete definitivo.
const ARCHIVOS = ["./assets/Buscador-B_XCD8nH.js","./assets/Candado-CMzKE3tp.js","./assets/Concurso-SwQ_dZ1V.js","./assets/Consulta-OcIZzIQF.js","./assets/Errores-BaV7Iu4_.js","./assets/HistorialSimulacros-bZfR1P5D.js","./assets/ModuloVista-C9G1nhr-.js","./assets/NormasCasos-BwxrS9Ty.js","./assets/Practica-BMu-j9aA.js","./assets/Premium-CdIs2Cct.js","./assets/Progreso-CjUB8RT3.js","./assets/ReportarError-De87Py3-.js","./assets/Tarjetas-D1JPqTmd.js","./assets/Temario-DMotf9Ml.js","./assets/app-CFlzH7_x.js","./assets/app-DkrG6taI.css","./assets/bodoni-moda-latin-opsz-italic-BCRrlh7t.woff2","./assets/bodoni-moda-latin-opsz-normal-X2BzlAjV.woff2","./assets/fuentes-CIJ1T4ZU.js","./assets/hanken-grotesk-latin-wght-normal-CaVRRdDk.woff2","./assets/jetbrains-mono-latin-wght-normal-B9CIFXIH.woff2","./assets/jsxRuntime-2RHA637k.js","./assets/normograma-IQildXtV.js","./datos/publico/perfiles-e4c71c9b8478e3946cc7f9a696892e44b93c441856f8cd7dedeb43c4d304b146.json","./datos/publico/planes-3bcdacbc261dde9e357ea984eb39a120493a848683ed653d499776bd128d73e2.json","./icons/apple-touch-icon.png","./icons/icon-192.png","./icons/icon-512.png","./inicio.js","./manifest.json"];
const HASHES = {"./assets/Buscador-B_XCD8nH.js":"ed60080f321a0035384328fda579721cd6f978f899437dcfb1d48ed34d76434b","./assets/Candado-CMzKE3tp.js":"3a9a8927c4fd82a4e8d0cfee3307dc6c77f7a4615ea6a4f02cf7bb5ce1e8f37a","./assets/Concurso-SwQ_dZ1V.js":"48bb3097c12d07371847f7135f677862a310d028eb19ffa3c2cdca38b1268e8d","./assets/Consulta-OcIZzIQF.js":"38cdf3fc78c1140e7016da99e79d6ebfaf69718e2f795e89b050836137d7a390","./assets/Errores-BaV7Iu4_.js":"44dd8c81384ed0663ca64c2950272160015ae5fc3207099832598ad2cf124d4d","./assets/HistorialSimulacros-bZfR1P5D.js":"9f4bc3ac8ca708c58e93920022c6e53410ebf300e2d4f73349a816cc6294e264","./assets/ModuloVista-C9G1nhr-.js":"352dd8e00e2d315aa784565bd2f4dfc7493fd0dc515061bf92a8235e99f03530","./assets/NormasCasos-BwxrS9Ty.js":"f493a78cf4b33766682399b98868e524457acadcecdcbcd12befcdffbfbb5cd2","./assets/Practica-BMu-j9aA.js":"0e0af931a170a2383808bbf3970f40e25eae4e3114d455e75233c0d4498cea9f","./assets/Premium-CdIs2Cct.js":"58f23a44c9eb9fa6bfe8f2a72e6eaa7973edd5451d659ac63f23fed85689bcb5","./assets/Progreso-CjUB8RT3.js":"6b234fa78c9805b52b3521972bc28c5e052099efbc50b3b774576a4e6cd34bc0","./assets/ReportarError-De87Py3-.js":"7922d0d1cb5f9a5b252353748aa79fec92498c87d60b05e352042ea9e368ee4c","./assets/Tarjetas-D1JPqTmd.js":"a7684801d8d327cb5d12aa796db9d0f76c0b6e309883c9a1f7218be61f88d40d","./assets/Temario-DMotf9Ml.js":"a3c10a7e1521e260045349fa345d064167bb925471ebdd7d71b3452de1e61e9a","./assets/app-CFlzH7_x.js":"5a1bcf91598bc29228d63cb1647d1ad8e15ca316dfa757f34f3f5071ba1fdfc7","./assets/app-DkrG6taI.css":"19445271bdc65779cc55db3f6c0f0600151b7311e4eacf3c27092ac694f989d1","./assets/bodoni-moda-latin-opsz-italic-BCRrlh7t.woff2":"b737328c13b92784ee78d99e62e3bcc38eeef0f2dba41d107637b3acea46781f","./assets/bodoni-moda-latin-opsz-normal-X2BzlAjV.woff2":"c032219ef636f7b4932f7d1dc91bdab602c970f090770b546bea4effaab3463c","./assets/fuentes-CIJ1T4ZU.js":"d8a0bd9b2fbdba43487f74945e92b87edb6b0cab419f4f06ab69488346c3d959","./assets/hanken-grotesk-latin-wght-normal-CaVRRdDk.woff2":"e9201eddf1d41d0b62253295d869ce3cf65768f7102b797f02c7f8c876b4a9d5","./assets/jetbrains-mono-latin-wght-normal-B9CIFXIH.woff2":"18be452724bfdc236c074ca94a249a7f41a86752c7d04ab258ce9ed5651f6a7e","./assets/jsxRuntime-2RHA637k.js":"d51574362a831ebe026e80dd01d6b77939cbd89b43c2e2412ad7e0724715489b","./assets/normograma-IQildXtV.js":"51b4bdb15e0644e69277f9de585cd4ae596a3ad07a5fa3f7ff1a1ae8cf90ff09","./datos/publico/perfiles-e4c71c9b8478e3946cc7f9a696892e44b93c441856f8cd7dedeb43c4d304b146.json":"e4c71c9b8478e3946cc7f9a696892e44b93c441856f8cd7dedeb43c4d304b146","./datos/publico/planes-3bcdacbc261dde9e357ea984eb39a120493a848683ed653d499776bd128d73e2.json":"3bcdacbc261dde9e357ea984eb39a120493a848683ed653d499776bd128d73e2","./icons/apple-touch-icon.png":"7c5dfce04388b7883ff806dacb99ff6ff8d8af336fb25c4682b883055ec20929","./icons/icon-192.png":"a4db497d50bc7ff22ccca56d614b320d09323b330fc3c1afdf0b1e16cbcb12c0","./icons/icon-512.png":"c59c7f7db9f2a1c514f15d813239eb4a904df9d8bc6327c9de48fed97ba900b8","./index.html":"9a0195539509327bb302a03cae8d03a312919f7131948a08d8caf187ae2c9992","./inicio.js":"6b4d97ea7d690ec0c1831f7b77fa709dd0d1c108a112bde0bc6df45e59aee36d","./manifest.json":"3f425b0568fc5aeb2ffb5bfadd476889f190c1ffed114a1fa3ada73047eebadf"};
const VERSION = "stoa-app-3e4a666f982cb4afa1b4";

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
