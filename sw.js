// Solo guarda el shell público de estudio y los archivos de esta compilación.
// Los datos y las respuestas de usuario siguen a cargo de la app, fuera de esta caché.
// La finalización compartida guarda la huella de cada archivo del paquete definitivo.
const ARCHIVOS = ["./assets/Acceso-CxUKzH53.js","./assets/Buscador-oVJfBIY0.js","./assets/Candado-ChxZWrJJ.js","./assets/Concurso-DI1MheDK.js","./assets/Consulta-D4sIM97U.js","./assets/Errores-DVjnmLqA.js","./assets/EstadoCobertura-CKhJAbdd.js","./assets/HistorialSimulacros-BKofiewG.js","./assets/Legal-BMrbDZGW.js","./assets/ModuloVista-Bz-JJnol.js","./assets/NormasCasos--UF-d178.js","./assets/Perfil-D27nqxSb.js","./assets/Practica-CYhNE8yx.js","./assets/Premium-BINRBdlu.js","./assets/Progreso-CUYuN8Xh.js","./assets/ReportarError-CRF-KOXJ.js","./assets/SoporteStoa-25QmXAPa.css","./assets/SoporteStoa-WRRywQ41.js","./assets/Tarjetas-DRtAOOuT.js","./assets/Temario-CBwUHPnH.js","./assets/app-2lWn6CZe.js","./assets/app-BEdPQkT9.css","./assets/bodoni-moda-latin-opsz-italic-BCRrlh7t.woff2","./assets/bodoni-moda-latin-opsz-normal-X2BzlAjV.woff2","./assets/fuentes-CMYripnf.js","./assets/hanken-grotesk-latin-wght-normal-CaVRRdDk.woff2","./assets/jetbrains-mono-latin-wght-normal-B9CIFXIH.woff2","./assets/jsxRuntime-DZTXdqln.js","./assets/normograma-nP3Y1o-x.js","./datos/publico/perfiles-55bd61293b1be97cd8bf6857bdb2a5cf8080e022c24d96bbbe42670b215f550a.json","./datos/publico/planes-ee14d4fd0e2b34e2eefac312f33b7cb782128b474b7f470a8b15263d10783b2c.json","./icons/apple-touch-icon.png","./icons/icon-192.png","./icons/icon-512.png","./inicio.js","./manifest.json"];
const HASHES = {"./assets/Acceso-CxUKzH53.js":"14722b04411f6b9c640e52165e7cb5d14034ca18b943e4e46d03bcf834a70e90","./assets/Buscador-oVJfBIY0.js":"5c7a19c171b701d679286c09bc70a32b985c760fe6a706ad128e5272dcb76584","./assets/Candado-ChxZWrJJ.js":"45297c2da42a818f833b176953a95532122a70cdf7621918da64e4bfa6ad7d94","./assets/Concurso-DI1MheDK.js":"e4659b10499cfafbc53e5b1137cebc15d82a82d51aadfb9044367965692d7d3b","./assets/Consulta-D4sIM97U.js":"740b76d975d7d3a52403395ec4a25152bacb19bb58ae72e96b22a920bfa91ca5","./assets/Errores-DVjnmLqA.js":"4cd4882a0ecade6084ade0cd0344ac2c7e9de7459980d5875b27d197f1225c55","./assets/EstadoCobertura-CKhJAbdd.js":"67480210bcb724387a97480b457105e72982d10eaa523360313619ad5cf218a7","./assets/HistorialSimulacros-BKofiewG.js":"a989f0c8a30e3617ea67d982de9e399b0b66c1d427dd1e31cc643031e9b3a98e","./assets/Legal-BMrbDZGW.js":"8f381bc9e535e0feeab1b11f3460c05b3732e5c76a0e47ec6e1a14581ded1035","./assets/ModuloVista-Bz-JJnol.js":"7a03054647bc9b8a04ea66ccefa5724760fdf759ec362d3ec0aa31befcaff012","./assets/NormasCasos--UF-d178.js":"cfce02a2747e6940bb46edf655b31ed115f0b0474616eb48f77006a0185bf3bf","./assets/Perfil-D27nqxSb.js":"bb859191dcab1f6ee101bd31bf46061e46564946ac9eff98745fc5b0b332c5b2","./assets/Practica-CYhNE8yx.js":"f0e84a12055bed65657b057225033726a57a39fbac269b1c0ac166b02bef4fe8","./assets/Premium-BINRBdlu.js":"683147705c8bbf231ae853e535b7b7c3be31845071e614245acf718075abc45f","./assets/Progreso-CUYuN8Xh.js":"25c6d1121d77e2255903e7177c9e0afa83f381d47b6094b0d1da2ea3b9e00a2f","./assets/ReportarError-CRF-KOXJ.js":"d1237b628ecaf0d63c55cb3be49e36b9b63ebda4d02a99a8a17fb6bd2c01db2f","./assets/SoporteStoa-25QmXAPa.css":"524c4116bd89de58e3bd866bac4e9b61fc948616e4db1c302cb19507857f4ee0","./assets/SoporteStoa-WRRywQ41.js":"711639353f57d4fc5fc36766749a3d243af4763f882352cfff3d83d36114959d","./assets/Tarjetas-DRtAOOuT.js":"d959f6547e614e0c4a36555be019c0ee3fa7ea9514b39595231d7702e139a939","./assets/Temario-CBwUHPnH.js":"f683ee1bfce6e3944cfc8609c1cad2f0abf835912fe763495203174c9a070d91","./assets/app-2lWn6CZe.js":"6165eb592bb5657efad4763fa903addc1204b361d09d7e5a11363c5795185fb2","./assets/app-BEdPQkT9.css":"33cd93810924ec81ca5dd3f7451ad9631482425c4d5fed95c6b962bd953e593b","./assets/bodoni-moda-latin-opsz-italic-BCRrlh7t.woff2":"b737328c13b92784ee78d99e62e3bcc38eeef0f2dba41d107637b3acea46781f","./assets/bodoni-moda-latin-opsz-normal-X2BzlAjV.woff2":"c032219ef636f7b4932f7d1dc91bdab602c970f090770b546bea4effaab3463c","./assets/fuentes-CMYripnf.js":"862614c62229e0e6868f6f31a957f9f0c6e39e6265ebea07ff6879ac9c732c69","./assets/hanken-grotesk-latin-wght-normal-CaVRRdDk.woff2":"e9201eddf1d41d0b62253295d869ce3cf65768f7102b797f02c7f8c876b4a9d5","./assets/jetbrains-mono-latin-wght-normal-B9CIFXIH.woff2":"18be452724bfdc236c074ca94a249a7f41a86752c7d04ab258ce9ed5651f6a7e","./assets/jsxRuntime-DZTXdqln.js":"322e1828521a725f39e0cd5a156045b55d7d95beeac9d17bfd8cc0809cb53f87","./assets/normograma-nP3Y1o-x.js":"79380138be152376af5b54f9b3de5bb9149ef551df4ec2858aa919c743cdcd85","./datos/publico/perfiles-55bd61293b1be97cd8bf6857bdb2a5cf8080e022c24d96bbbe42670b215f550a.json":"55bd61293b1be97cd8bf6857bdb2a5cf8080e022c24d96bbbe42670b215f550a","./datos/publico/planes-ee14d4fd0e2b34e2eefac312f33b7cb782128b474b7f470a8b15263d10783b2c.json":"ee14d4fd0e2b34e2eefac312f33b7cb782128b474b7f470a8b15263d10783b2c","./icons/apple-touch-icon.png":"7c5dfce04388b7883ff806dacb99ff6ff8d8af336fb25c4682b883055ec20929","./icons/icon-192.png":"a4db497d50bc7ff22ccca56d614b320d09323b330fc3c1afdf0b1e16cbcb12c0","./icons/icon-512.png":"c59c7f7db9f2a1c514f15d813239eb4a904df9d8bc6327c9de48fed97ba900b8","./index.html":"dd7c02e996364d04f35b3a5835bb90b37e70b54f85f7612fac06383c2144bce5","./inicio.js":"6b4d97ea7d690ec0c1831f7b77fa709dd0d1c108a112bde0bc6df45e59aee36d","./manifest.json":"3f425b0568fc5aeb2ffb5bfadd476889f190c1ffed114a1fa3ada73047eebadf"};
const VERSION = "stoa-app-bf2e84365688436cd1c4";

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
