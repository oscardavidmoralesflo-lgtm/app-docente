// Solo guarda el shell público de estudio y los archivos de esta compilación.
// Los datos y las respuestas de usuario siguen a cargo de la app, fuera de esta caché.
// La finalización compartida guarda la huella de cada archivo del paquete definitivo.
const ARCHIVOS = ["./assets/Acceso-CH64eTrn.js","./assets/Buscador-oVJfBIY0.js","./assets/Candado-ChxZWrJJ.js","./assets/Concurso-CufBytBG.js","./assets/Consulta-sRn4r4wp.js","./assets/Errores-CYY9D01f.js","./assets/EstadoCobertura-CKhJAbdd.js","./assets/HistorialSimulacros-BKofiewG.js","./assets/Legal-B9008oYs.js","./assets/ModuloVista-CTDfiDMT.js","./assets/NormasCasos-BpDhS2UX.js","./assets/Perfil-Bl9-VbQ7.js","./assets/Practica-C6OVv4py.js","./assets/Premium-DZ1MJ75e.js","./assets/Progreso-wVGdzk65.js","./assets/ReportarError-CRF-KOXJ.js","./assets/SoporteStoa-25QmXAPa.css","./assets/SoporteStoa-WRRywQ41.js","./assets/Tarjetas-CuFRuP97.js","./assets/Temario-DgcPBTid.js","./assets/app-BEdPQkT9.css","./assets/app-Oie5DfLV.js","./assets/bodoni-moda-latin-opsz-italic-BCRrlh7t.woff2","./assets/bodoni-moda-latin-opsz-normal-X2BzlAjV.woff2","./assets/fuentes-CMYripnf.js","./assets/hanken-grotesk-latin-wght-normal-CaVRRdDk.woff2","./assets/jetbrains-mono-latin-wght-normal-B9CIFXIH.woff2","./assets/jsxRuntime-DZTXdqln.js","./assets/normograma-nP3Y1o-x.js","./datos/publico/perfiles-120a351bd81f1bf6deff93a3eddb69f2e51a8c48a9e64bdf4eb1941cd27d4459.json","./datos/publico/planes-4eb05b0cce5d99a9c3c593fcad729a7b428f7920e32dc1ad900f4493c73b1718.json","./icons/apple-touch-icon.png","./icons/icon-192.png","./icons/icon-512.png","./inicio.js","./manifest.json"];
const HASHES = {"./assets/Acceso-CH64eTrn.js":"49401facb7a0c8a590080ffaad646dcaad32e931017973bc0b92c3bc8faf63de","./assets/Buscador-oVJfBIY0.js":"5c7a19c171b701d679286c09bc70a32b985c760fe6a706ad128e5272dcb76584","./assets/Candado-ChxZWrJJ.js":"45297c2da42a818f833b176953a95532122a70cdf7621918da64e4bfa6ad7d94","./assets/Concurso-CufBytBG.js":"b3e7976a61d14911ca799e3ea25bbed7a1f11fbd32fa545bf041b9a9787bc062","./assets/Consulta-sRn4r4wp.js":"2220db7dcc740899f83c90dbb58227e5a907a8069057e8d6e188f229661bc6f1","./assets/Errores-CYY9D01f.js":"a3fe8f190dc922ceb468ba2cf1bd2ee43d6032dee4d3f80174f7a796b9b8907d","./assets/EstadoCobertura-CKhJAbdd.js":"67480210bcb724387a97480b457105e72982d10eaa523360313619ad5cf218a7","./assets/HistorialSimulacros-BKofiewG.js":"a989f0c8a30e3617ea67d982de9e399b0b66c1d427dd1e31cc643031e9b3a98e","./assets/Legal-B9008oYs.js":"ef4cf3f3012083c0e361c08811c981f96c7b25b00dbde2b333f98bfac0d25475","./assets/ModuloVista-CTDfiDMT.js":"89dd0db601a5cedf2141f4f123e0059610ac414d46ba20abf300e12713dd50fa","./assets/NormasCasos-BpDhS2UX.js":"84c3534c77485bf5b752b84cfbb5ee69c3ca54e68b0a43d4490d2820545c9641","./assets/Perfil-Bl9-VbQ7.js":"a1c39253ae68cf7f93509aefddcf802f28070b403506aa7f9f658eb673a16e86","./assets/Practica-C6OVv4py.js":"8b9c033414cc101d9f4f28a076d089789f53c193ccf95e649a8f64ba6b933d96","./assets/Premium-DZ1MJ75e.js":"28b9e76b0683c6731ab7febd233490f30aa6a3972731a89965fb67f8e24abf20","./assets/Progreso-wVGdzk65.js":"cc6d4da52c0b78db09203bff920bfc38d1cf5ff633b9fa4ba80fa6d98e6332b8","./assets/ReportarError-CRF-KOXJ.js":"d1237b628ecaf0d63c55cb3be49e36b9b63ebda4d02a99a8a17fb6bd2c01db2f","./assets/SoporteStoa-25QmXAPa.css":"524c4116bd89de58e3bd866bac4e9b61fc948616e4db1c302cb19507857f4ee0","./assets/SoporteStoa-WRRywQ41.js":"711639353f57d4fc5fc36766749a3d243af4763f882352cfff3d83d36114959d","./assets/Tarjetas-CuFRuP97.js":"9866ac12626958f5ac634a7fe732453569b44608826e60e5f2c0bae2219b7b06","./assets/Temario-DgcPBTid.js":"d6981a7da192ce166b0fee28f2fff9eb9a88d8d92082a1555dc5b81b30402c86","./assets/app-BEdPQkT9.css":"33cd93810924ec81ca5dd3f7451ad9631482425c4d5fed95c6b962bd953e593b","./assets/app-Oie5DfLV.js":"d386f26e263dc70fee9e7cfad1b73360a4c0542ca5ca10377c779261aad06d3c","./assets/bodoni-moda-latin-opsz-italic-BCRrlh7t.woff2":"b737328c13b92784ee78d99e62e3bcc38eeef0f2dba41d107637b3acea46781f","./assets/bodoni-moda-latin-opsz-normal-X2BzlAjV.woff2":"c032219ef636f7b4932f7d1dc91bdab602c970f090770b546bea4effaab3463c","./assets/fuentes-CMYripnf.js":"862614c62229e0e6868f6f31a957f9f0c6e39e6265ebea07ff6879ac9c732c69","./assets/hanken-grotesk-latin-wght-normal-CaVRRdDk.woff2":"e9201eddf1d41d0b62253295d869ce3cf65768f7102b797f02c7f8c876b4a9d5","./assets/jetbrains-mono-latin-wght-normal-B9CIFXIH.woff2":"18be452724bfdc236c074ca94a249a7f41a86752c7d04ab258ce9ed5651f6a7e","./assets/jsxRuntime-DZTXdqln.js":"322e1828521a725f39e0cd5a156045b55d7d95beeac9d17bfd8cc0809cb53f87","./assets/normograma-nP3Y1o-x.js":"79380138be152376af5b54f9b3de5bb9149ef551df4ec2858aa919c743cdcd85","./datos/publico/perfiles-120a351bd81f1bf6deff93a3eddb69f2e51a8c48a9e64bdf4eb1941cd27d4459.json":"120a351bd81f1bf6deff93a3eddb69f2e51a8c48a9e64bdf4eb1941cd27d4459","./datos/publico/planes-4eb05b0cce5d99a9c3c593fcad729a7b428f7920e32dc1ad900f4493c73b1718.json":"4eb05b0cce5d99a9c3c593fcad729a7b428f7920e32dc1ad900f4493c73b1718","./icons/apple-touch-icon.png":"7c5dfce04388b7883ff806dacb99ff6ff8d8af336fb25c4682b883055ec20929","./icons/icon-192.png":"a4db497d50bc7ff22ccca56d614b320d09323b330fc3c1afdf0b1e16cbcb12c0","./icons/icon-512.png":"c59c7f7db9f2a1c514f15d813239eb4a904df9d8bc6327c9de48fed97ba900b8","./index.html":"b86b34630b5661665819391ef0eff580e8a7a3f6283bdad0de229d558b46cbd6","./inicio.js":"6b4d97ea7d690ec0c1831f7b77fa709dd0d1c108a112bde0bc6df45e59aee36d","./manifest.json":"3f425b0568fc5aeb2ffb5bfadd476889f190c1ffed114a1fa3ada73047eebadf"};
const VERSION = "stoa-app-6bffec917d3c6442dd23";

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
