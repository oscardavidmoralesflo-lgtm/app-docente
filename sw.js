// Solo guarda el shell público de estudio y los archivos de esta compilación.
// Los datos y las respuestas de usuario siguen a cargo de la app, fuera de esta caché.
// La finalización compartida guarda la huella de cada archivo del paquete definitivo.
const ARCHIVOS = ["./assets/Buscador-CG0xTwmH.js","./assets/Candado-DWgFWneE.js","./assets/Concurso-DnPHeTpt.js","./assets/Consulta-C1xxYObn.js","./assets/Errores-uC8Ob1aP.js","./assets/Esqueleto-DaDCdTBO.js","./assets/ModuloVista-BeBXIEDz.js","./assets/NormasCasos-B0hQj9EY.js","./assets/Practica-DnNst21n.js","./assets/Premium-BJkZjkvN.js","./assets/Progreso-CjAtObG-.js","./assets/ReportarError-SYGVnuqP.js","./assets/Tarjetas-C089M7MB.js","./assets/Temario-BzsjHBCG.js","./assets/app-B2OyfjQu.css","./assets/app-giBnYDhb.js","./assets/bodoni-moda-latin-opsz-italic-BCRrlh7t.woff2","./assets/bodoni-moda-latin-opsz-normal-X2BzlAjV.woff2","./assets/datos-Csk811kf.js","./assets/fuentes-CMwfvrxz.js","./assets/hanken-grotesk-latin-wght-normal-CaVRRdDk.woff2","./assets/jetbrains-mono-latin-wght-normal-B9CIFXIH.woff2","./datos/publico/perfiles-b9343e029b7f9905a4996f90a8235d3367187600f5176695131d41614ba81692.json","./datos/publico/planes-ebbb4dc563d80db387db4e6fcc06645e292d52666ce627db0915144c1d501012.json","./icons/apple-touch-icon.png","./icons/icon-192.png","./icons/icon-512.png","./inicio.js","./manifest.json"];
const HASHES = {"./assets/Buscador-CG0xTwmH.js":"2a45faf2a8c7000411a63ba31e45bcb8430d83b23eca4d22ced5c384c1c635f7","./assets/Candado-DWgFWneE.js":"a07046fc9eca37c664c9749e72391dd87a813697a30ee09d720db7ffdb5458b4","./assets/Concurso-DnPHeTpt.js":"c228207488bcb03e15dec663a595fa351659cd85de4b88a16c61ce83b2a7b6dd","./assets/Consulta-C1xxYObn.js":"7fdbd9c176378b3eebdcf2b814c1a2018ff767069505ed5f494d4e4d8f272f2e","./assets/Errores-uC8Ob1aP.js":"4ee946752fc293de03c952fe6b868bad94b21c7889d46c771e2256ccfc6994f1","./assets/Esqueleto-DaDCdTBO.js":"83890df3a9e0a73d9cc45dc5b01499c9c7533e1cb32fffcc672181ba553b6ab3","./assets/ModuloVista-BeBXIEDz.js":"1a91ce9831a7d9737c3e3304f81eefddf1127a7caecc04d2a8c5f30aed89b50a","./assets/NormasCasos-B0hQj9EY.js":"235bb007c5f9fc994528076ed08fed17501b9f3002e4d2f8992cce73c9c86835","./assets/Practica-DnNst21n.js":"9ebda88bd5e9f8c0a724e6aa0264a3d1ef3d035960618c083f51c7a08d32e856","./assets/Premium-BJkZjkvN.js":"7c10fbfa2820914aa4cb50d59ed6e335f489f421cc793bef99e135da934363e8","./assets/Progreso-CjAtObG-.js":"a5cb82ed13704dd60756977188a452ff9a9161c0a94d5e5cf0d69a76730490ea","./assets/ReportarError-SYGVnuqP.js":"dd9ed7becc5a34532fbcb05d3450742be57b596d13fff3bd35f572f9b6979f04","./assets/Tarjetas-C089M7MB.js":"f01ddce233911e8a984f6fbfdeb6ca6134da78a59936581f7a58f562716192db","./assets/Temario-BzsjHBCG.js":"df5dc1b08c6cfa92d85a34b6f68b4ff3509e360ed2b868d9830586d128114cad","./assets/app-B2OyfjQu.css":"5b834cedad2aeaaa26ec1fd7e57cdeb5628d62e6c1963a5eb10dafaaa06d377e","./assets/app-giBnYDhb.js":"340cf1f1198d55c82033708c442d7be4b496ab0ac1fb62f1aa569f708d0445ed","./assets/bodoni-moda-latin-opsz-italic-BCRrlh7t.woff2":"b737328c13b92784ee78d99e62e3bcc38eeef0f2dba41d107637b3acea46781f","./assets/bodoni-moda-latin-opsz-normal-X2BzlAjV.woff2":"c032219ef636f7b4932f7d1dc91bdab602c970f090770b546bea4effaab3463c","./assets/datos-Csk811kf.js":"c97cd1632c69d505ba8e54b28eff6e0c9571b1476affe10285ca4375eadda82a","./assets/fuentes-CMwfvrxz.js":"d826233542ba2826f5811f4dbee7350006b3e36839716c82163ee50da85bc2d6","./assets/hanken-grotesk-latin-wght-normal-CaVRRdDk.woff2":"e9201eddf1d41d0b62253295d869ce3cf65768f7102b797f02c7f8c876b4a9d5","./assets/jetbrains-mono-latin-wght-normal-B9CIFXIH.woff2":"18be452724bfdc236c074ca94a249a7f41a86752c7d04ab258ce9ed5651f6a7e","./datos/publico/perfiles-b9343e029b7f9905a4996f90a8235d3367187600f5176695131d41614ba81692.json":"b9343e029b7f9905a4996f90a8235d3367187600f5176695131d41614ba81692","./datos/publico/planes-ebbb4dc563d80db387db4e6fcc06645e292d52666ce627db0915144c1d501012.json":"ebbb4dc563d80db387db4e6fcc06645e292d52666ce627db0915144c1d501012","./icons/apple-touch-icon.png":"7c5dfce04388b7883ff806dacb99ff6ff8d8af336fb25c4682b883055ec20929","./icons/icon-192.png":"a4db497d50bc7ff22ccca56d614b320d09323b330fc3c1afdf0b1e16cbcb12c0","./icons/icon-512.png":"c59c7f7db9f2a1c514f15d813239eb4a904df9d8bc6327c9de48fed97ba900b8","./index.html":"5b7b2b80746e4298bfaf2229f838652b137c57ad39214878d4cee8e6a3c74cd2","./inicio.js":"6b4d97ea7d690ec0c1831f7b77fa709dd0d1c108a112bde0bc6df45e59aee36d","./manifest.json":"3f425b0568fc5aeb2ffb5bfadd476889f190c1ffed114a1fa3ada73047eebadf"};
const VERSION = "stoa-app-95ee7587f28bd44079f4";

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
