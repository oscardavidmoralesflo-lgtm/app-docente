// Solo guarda el shell público de estudio y los archivos de esta compilación.
// Los datos y las respuestas de usuario siguen a cargo de la app, fuera de esta caché.
// La finalización compartida guarda la huella de cada archivo del paquete definitivo.
const ARCHIVOS = ["./assets/Acceso-CS1UKvg5.js","./assets/Buscador-oVJfBIY0.js","./assets/Candado-ChxZWrJJ.js","./assets/Concurso-BWFsSd8j.js","./assets/Consulta-Czbtbac5.js","./assets/Errores-B3lG1H-l.js","./assets/EstadoCobertura-CKhJAbdd.js","./assets/HistorialSimulacros-BKofiewG.js","./assets/Legal-DxVStlxW.js","./assets/ModuloVista-BPylq5Rt.js","./assets/NormasCasos-C99K_s2P.js","./assets/Perfil-DjhOB6Kr.js","./assets/Practica-ZfHtbw3P.js","./assets/Premium-exOUX_8e.js","./assets/Progreso-B7o_lInW.js","./assets/ReportarError-CRF-KOXJ.js","./assets/SoporteStoa-25QmXAPa.css","./assets/SoporteStoa-WRRywQ41.js","./assets/Tarjetas-Dy9625y2.js","./assets/Temario-vuLWkAIi.js","./assets/app-BEdPQkT9.css","./assets/app-DHUP0jX2.js","./assets/bodoni-moda-latin-opsz-italic-BCRrlh7t.woff2","./assets/bodoni-moda-latin-opsz-normal-X2BzlAjV.woff2","./assets/fuentes-CMYripnf.js","./assets/hanken-grotesk-latin-wght-normal-CaVRRdDk.woff2","./assets/jetbrains-mono-latin-wght-normal-B9CIFXIH.woff2","./assets/jsxRuntime-DZTXdqln.js","./assets/normograma-nP3Y1o-x.js","./datos/publico/perfiles-b8a5b640fa19e6224b05eabfa7dea989fb876da2425901c29a9a7a629e0517e4.json","./datos/publico/planes-83fac5732531b1dfc00e6c276bd17695fc9926f8e70fce9c1c77d6afc16ef30e.json","./icons/apple-touch-icon.png","./icons/icon-192.png","./icons/icon-512.png","./inicio.js","./manifest.json"];
const HASHES = {"./assets/Acceso-CS1UKvg5.js":"cc3531b16d7e288435107fbb6ff4e3334585a840e4ac75888de643eaae0cef98","./assets/Buscador-oVJfBIY0.js":"5c7a19c171b701d679286c09bc70a32b985c760fe6a706ad128e5272dcb76584","./assets/Candado-ChxZWrJJ.js":"45297c2da42a818f833b176953a95532122a70cdf7621918da64e4bfa6ad7d94","./assets/Concurso-BWFsSd8j.js":"695847b843c2c2cce4df76d7e83b14516a097065d18ca4e134c8c6e7a3348d7c","./assets/Consulta-Czbtbac5.js":"7d70c8982204ac53eb1e627d61253321320510fbdbe3ceba396187c581ad4644","./assets/Errores-B3lG1H-l.js":"344e4827432c6786f5c03b093172faa7008ab13d4f7e6497f6ef961e3844465a","./assets/EstadoCobertura-CKhJAbdd.js":"67480210bcb724387a97480b457105e72982d10eaa523360313619ad5cf218a7","./assets/HistorialSimulacros-BKofiewG.js":"a989f0c8a30e3617ea67d982de9e399b0b66c1d427dd1e31cc643031e9b3a98e","./assets/Legal-DxVStlxW.js":"6913f40fd622577207e1f1a39d4ccbeabcbf07c02607768cdf72ee982aaa19b7","./assets/ModuloVista-BPylq5Rt.js":"9d7812b2c807604400523c89c1956a426edd7d37b784f5a1bd9c46f0dea928c8","./assets/NormasCasos-C99K_s2P.js":"54aa6f3606658b5b72990589d0fb8e715caf68aed9739a9bab93b9ba30b1e8c2","./assets/Perfil-DjhOB6Kr.js":"6313a4a4ba423808d126a0cd2b12547934c5760825e94e9f2b9898142f0464a6","./assets/Practica-ZfHtbw3P.js":"f089298ca4e037a72074e412a6734b6793bb8ab98667eda6bcb473eb0e63a60a","./assets/Premium-exOUX_8e.js":"a035136c2c6d762c4965d871b16c2a32f4b21d51fadd5fb21168633b51ef291c","./assets/Progreso-B7o_lInW.js":"43029bf03bd0bedaf75cacb51ca8688ef179677d3136fed3bf0223328478f7c5","./assets/ReportarError-CRF-KOXJ.js":"d1237b628ecaf0d63c55cb3be49e36b9b63ebda4d02a99a8a17fb6bd2c01db2f","./assets/SoporteStoa-25QmXAPa.css":"524c4116bd89de58e3bd866bac4e9b61fc948616e4db1c302cb19507857f4ee0","./assets/SoporteStoa-WRRywQ41.js":"711639353f57d4fc5fc36766749a3d243af4763f882352cfff3d83d36114959d","./assets/Tarjetas-Dy9625y2.js":"074742824945e4cd59190eb10e4b9958e0963b0b5a0c5b9b51c8c91d8b856351","./assets/Temario-vuLWkAIi.js":"95e32101c7668e336e9e50837ae97b8242f41c618014c83d8f304b905c05a799","./assets/app-BEdPQkT9.css":"33cd93810924ec81ca5dd3f7451ad9631482425c4d5fed95c6b962bd953e593b","./assets/app-DHUP0jX2.js":"ae8212b3ee1fd1ba8fcc7813d9df0bb958e70e1380d66c3bc46cda16f790ba2b","./assets/bodoni-moda-latin-opsz-italic-BCRrlh7t.woff2":"b737328c13b92784ee78d99e62e3bcc38eeef0f2dba41d107637b3acea46781f","./assets/bodoni-moda-latin-opsz-normal-X2BzlAjV.woff2":"c032219ef636f7b4932f7d1dc91bdab602c970f090770b546bea4effaab3463c","./assets/fuentes-CMYripnf.js":"862614c62229e0e6868f6f31a957f9f0c6e39e6265ebea07ff6879ac9c732c69","./assets/hanken-grotesk-latin-wght-normal-CaVRRdDk.woff2":"e9201eddf1d41d0b62253295d869ce3cf65768f7102b797f02c7f8c876b4a9d5","./assets/jetbrains-mono-latin-wght-normal-B9CIFXIH.woff2":"18be452724bfdc236c074ca94a249a7f41a86752c7d04ab258ce9ed5651f6a7e","./assets/jsxRuntime-DZTXdqln.js":"322e1828521a725f39e0cd5a156045b55d7d95beeac9d17bfd8cc0809cb53f87","./assets/normograma-nP3Y1o-x.js":"79380138be152376af5b54f9b3de5bb9149ef551df4ec2858aa919c743cdcd85","./datos/publico/perfiles-b8a5b640fa19e6224b05eabfa7dea989fb876da2425901c29a9a7a629e0517e4.json":"b8a5b640fa19e6224b05eabfa7dea989fb876da2425901c29a9a7a629e0517e4","./datos/publico/planes-83fac5732531b1dfc00e6c276bd17695fc9926f8e70fce9c1c77d6afc16ef30e.json":"83fac5732531b1dfc00e6c276bd17695fc9926f8e70fce9c1c77d6afc16ef30e","./icons/apple-touch-icon.png":"7c5dfce04388b7883ff806dacb99ff6ff8d8af336fb25c4682b883055ec20929","./icons/icon-192.png":"a4db497d50bc7ff22ccca56d614b320d09323b330fc3c1afdf0b1e16cbcb12c0","./icons/icon-512.png":"c59c7f7db9f2a1c514f15d813239eb4a904df9d8bc6327c9de48fed97ba900b8","./index.html":"8db133bf0bff2fc73428dc11567d71449bfc050fa446441ee6f1a06b172ac543","./inicio.js":"6b4d97ea7d690ec0c1831f7b77fa709dd0d1c108a112bde0bc6df45e59aee36d","./manifest.json":"3f425b0568fc5aeb2ffb5bfadd476889f190c1ffed114a1fa3ada73047eebadf"};
const VERSION = "stoa-app-2f23c89441f19c551db8";

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
