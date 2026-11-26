// Solo guarda el shell público de estudio y los archivos de esta compilación.
// Los datos y las respuestas de usuario siguen a cargo de la app, fuera de esta caché.
// La finalización compartida guarda la huella de cada archivo del paquete definitivo.
const ARCHIVOS = ["./assets/Acceso-DZeR5hZW.js","./assets/Buscador-oVJfBIY0.js","./assets/Candado-ChxZWrJJ.js","./assets/Concurso-DpKOh1cK.js","./assets/Consulta-BrNh_vHg.js","./assets/Errores-CwIx-Opm.js","./assets/EstadoCobertura-CKhJAbdd.js","./assets/HistorialSimulacros-BKofiewG.js","./assets/Legal-BntK0Md1.js","./assets/ModuloVista-Nn82J40b.js","./assets/NormasCasos-SfgXRj83.js","./assets/Perfil-BzVCEyYb.js","./assets/Practica-Brq98KMl.js","./assets/Premium-K-uotZan.js","./assets/Progreso-CeHzkdWz.js","./assets/ReportarError-CRF-KOXJ.js","./assets/SoporteStoa-25QmXAPa.css","./assets/SoporteStoa-WRRywQ41.js","./assets/Tarjetas-BI4cGk_Q.js","./assets/Temario-B7FM_jY4.js","./assets/app-BEdPQkT9.css","./assets/app-CprzfIEG.js","./assets/bodoni-moda-latin-opsz-italic-BCRrlh7t.woff2","./assets/bodoni-moda-latin-opsz-normal-X2BzlAjV.woff2","./assets/fuentes-CMYripnf.js","./assets/hanken-grotesk-latin-wght-normal-CaVRRdDk.woff2","./assets/jetbrains-mono-latin-wght-normal-B9CIFXIH.woff2","./assets/jsxRuntime-DZTXdqln.js","./assets/normograma-nP3Y1o-x.js","./datos/publico/perfiles-8e8e30b7f1be909a56f3bc5cf20c96a249727a79cf2df2941b9a593318ce6ed5.json","./datos/publico/planes-6c421f900abe3c27494ac3c0428df06b8ef2ac2b23ea1c5c89f94661074809b5.json","./icons/apple-touch-icon.png","./icons/icon-192.png","./icons/icon-512.png","./inicio.js","./manifest.json"];
const HASHES = {"./assets/Acceso-DZeR5hZW.js":"474c8a4199475d7c2b5ed170eaa6c5fc5bfd8bdc82660de734856cc2133de954","./assets/Buscador-oVJfBIY0.js":"5c7a19c171b701d679286c09bc70a32b985c760fe6a706ad128e5272dcb76584","./assets/Candado-ChxZWrJJ.js":"45297c2da42a818f833b176953a95532122a70cdf7621918da64e4bfa6ad7d94","./assets/Concurso-DpKOh1cK.js":"e813f69c71bba6f5c5c6a3e670f35b62993a3e46f744754f726612088ecd0f16","./assets/Consulta-BrNh_vHg.js":"fd5c13a7016ce863bce78be44daa09e3a4aa1feab4100ee4f55e2ecb7a1d26d9","./assets/Errores-CwIx-Opm.js":"f23027e3eb69f731916ad34a1eaecf742501a6b01514925f3af93d5b343d6931","./assets/EstadoCobertura-CKhJAbdd.js":"67480210bcb724387a97480b457105e72982d10eaa523360313619ad5cf218a7","./assets/HistorialSimulacros-BKofiewG.js":"a989f0c8a30e3617ea67d982de9e399b0b66c1d427dd1e31cc643031e9b3a98e","./assets/Legal-BntK0Md1.js":"7f92979e062aff19a1ebe6451400ec068c01321c89a0fd7036c9a616b0b5b5b1","./assets/ModuloVista-Nn82J40b.js":"97709afc11ec4591fa47b53e1f5564f5970f83e84568096829201a5b804f91ea","./assets/NormasCasos-SfgXRj83.js":"879b451f423b610677f545670b47dfb9e00ebac64e45cd4addee124a84b06ca8","./assets/Perfil-BzVCEyYb.js":"13adf4710575d79e37fd666f1a1ce1dcc5ea7e917f03c7b371bc0039e80f25a0","./assets/Practica-Brq98KMl.js":"ef605dcd790fe06917f1740d32c9bad2b7b11e76dc932ccb44691ada50a97096","./assets/Premium-K-uotZan.js":"fa3a68c9ac2b62ef87a8da84447ed857894be48e8f272acaf133e241f5dcf640","./assets/Progreso-CeHzkdWz.js":"e090ea6d685b4698bf2a0c169114131562a541608e5330523e5f23c39e7e59cf","./assets/ReportarError-CRF-KOXJ.js":"d1237b628ecaf0d63c55cb3be49e36b9b63ebda4d02a99a8a17fb6bd2c01db2f","./assets/SoporteStoa-25QmXAPa.css":"524c4116bd89de58e3bd866bac4e9b61fc948616e4db1c302cb19507857f4ee0","./assets/SoporteStoa-WRRywQ41.js":"711639353f57d4fc5fc36766749a3d243af4763f882352cfff3d83d36114959d","./assets/Tarjetas-BI4cGk_Q.js":"a8515ee0e9f046cb1b848b87f42f998bf8a1572935d58a6b893437fe7403eec5","./assets/Temario-B7FM_jY4.js":"c5834c2aee0e91b30e768879be6b3e4e4eb19ac11bf36c68d2d92deaffc4c4da","./assets/app-BEdPQkT9.css":"33cd93810924ec81ca5dd3f7451ad9631482425c4d5fed95c6b962bd953e593b","./assets/app-CprzfIEG.js":"5ce1e468715ca65801d10334af1da4c4d2b58c7e80e58c113efadaba10cc2f00","./assets/bodoni-moda-latin-opsz-italic-BCRrlh7t.woff2":"b737328c13b92784ee78d99e62e3bcc38eeef0f2dba41d107637b3acea46781f","./assets/bodoni-moda-latin-opsz-normal-X2BzlAjV.woff2":"c032219ef636f7b4932f7d1dc91bdab602c970f090770b546bea4effaab3463c","./assets/fuentes-CMYripnf.js":"862614c62229e0e6868f6f31a957f9f0c6e39e6265ebea07ff6879ac9c732c69","./assets/hanken-grotesk-latin-wght-normal-CaVRRdDk.woff2":"e9201eddf1d41d0b62253295d869ce3cf65768f7102b797f02c7f8c876b4a9d5","./assets/jetbrains-mono-latin-wght-normal-B9CIFXIH.woff2":"18be452724bfdc236c074ca94a249a7f41a86752c7d04ab258ce9ed5651f6a7e","./assets/jsxRuntime-DZTXdqln.js":"322e1828521a725f39e0cd5a156045b55d7d95beeac9d17bfd8cc0809cb53f87","./assets/normograma-nP3Y1o-x.js":"79380138be152376af5b54f9b3de5bb9149ef551df4ec2858aa919c743cdcd85","./datos/publico/perfiles-8e8e30b7f1be909a56f3bc5cf20c96a249727a79cf2df2941b9a593318ce6ed5.json":"8e8e30b7f1be909a56f3bc5cf20c96a249727a79cf2df2941b9a593318ce6ed5","./datos/publico/planes-6c421f900abe3c27494ac3c0428df06b8ef2ac2b23ea1c5c89f94661074809b5.json":"6c421f900abe3c27494ac3c0428df06b8ef2ac2b23ea1c5c89f94661074809b5","./icons/apple-touch-icon.png":"7c5dfce04388b7883ff806dacb99ff6ff8d8af336fb25c4682b883055ec20929","./icons/icon-192.png":"a4db497d50bc7ff22ccca56d614b320d09323b330fc3c1afdf0b1e16cbcb12c0","./icons/icon-512.png":"c59c7f7db9f2a1c514f15d813239eb4a904df9d8bc6327c9de48fed97ba900b8","./index.html":"e13f3bc0f39730df51557af71bb855d139c466bc7fef72052ad521b0ad238c1c","./inicio.js":"6b4d97ea7d690ec0c1831f7b77fa709dd0d1c108a112bde0bc6df45e59aee36d","./manifest.json":"3f425b0568fc5aeb2ffb5bfadd476889f190c1ffed114a1fa3ada73047eebadf"};
const VERSION = "stoa-app-5c8538e21a82138a377f";

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
