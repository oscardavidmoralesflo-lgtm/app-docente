// Solo guarda el shell público de estudio y los archivos de esta compilación.
// Los datos y las respuestas de usuario siguen a cargo de la app, fuera de esta caché.
// La finalización compartida guarda la huella de cada archivo del paquete definitivo.
const ARCHIVOS = ["./assets/Acceso-hG2bF9ba.js","./assets/Buscador-oVJfBIY0.js","./assets/Candado-ChxZWrJJ.js","./assets/Concurso-Cdtfty_F.js","./assets/Consulta-CAoUKmT3.js","./assets/Errores-BTquQdnS.js","./assets/EstadoCobertura-CKhJAbdd.js","./assets/HistorialSimulacros-BKofiewG.js","./assets/Legal-B18MFgcq.js","./assets/ModuloVista-BLbhgf9t.js","./assets/NormasCasos-BWk5tJch.js","./assets/Perfil-OoUcXwZ4.js","./assets/Practica-BGMIJkWX.js","./assets/Premium-CVE_7WOU.js","./assets/Progreso-B2r0A4FZ.js","./assets/ReportarError-CRF-KOXJ.js","./assets/SoporteStoa-25QmXAPa.css","./assets/SoporteStoa-WRRywQ41.js","./assets/Tarjetas-DfFZvtRZ.js","./assets/Temario-D8XIalO4.js","./assets/app-BEdPQkT9.css","./assets/app-DGpteqtT.js","./assets/bodoni-moda-latin-opsz-italic-BCRrlh7t.woff2","./assets/bodoni-moda-latin-opsz-normal-X2BzlAjV.woff2","./assets/fuentes-9PMuVM31.js","./assets/hanken-grotesk-latin-wght-normal-CaVRRdDk.woff2","./assets/jetbrains-mono-latin-wght-normal-B9CIFXIH.woff2","./assets/jsxRuntime-DZTXdqln.js","./assets/normograma-nP3Y1o-x.js","./datos/publico/perfiles-2a3748854ab5da29c468791941938e4cdafdaf8fe043b43d839e64a22d3171de.json","./datos/publico/planes-d8315c32917592ca141923849563c8e39ad56027ebd5bae2758a04567fdf8d9d.json","./icons/apple-touch-icon.png","./icons/icon-192.png","./icons/icon-512.png","./inicio.js","./manifest.json"];
const HASHES = {"./assets/Acceso-hG2bF9ba.js":"a8d6d435835ab146c32076ab4d2104fcdbb540548df10c6f94a6e9fc15ca6930","./assets/Buscador-oVJfBIY0.js":"5c7a19c171b701d679286c09bc70a32b985c760fe6a706ad128e5272dcb76584","./assets/Candado-ChxZWrJJ.js":"45297c2da42a818f833b176953a95532122a70cdf7621918da64e4bfa6ad7d94","./assets/Concurso-Cdtfty_F.js":"3238f57e962dc4657678e55e2f005224ecbb6a93969740bb2683fa7e0dd241c6","./assets/Consulta-CAoUKmT3.js":"6bb86f193ba0dab21abd07f1a7423f68ad43cdfe791de2da1ef2faccfa66d223","./assets/Errores-BTquQdnS.js":"5c6c0c3e5cc924d9d6ea295c3b529f73d925c9440e53d469b493fbf52d054b7d","./assets/EstadoCobertura-CKhJAbdd.js":"67480210bcb724387a97480b457105e72982d10eaa523360313619ad5cf218a7","./assets/HistorialSimulacros-BKofiewG.js":"a989f0c8a30e3617ea67d982de9e399b0b66c1d427dd1e31cc643031e9b3a98e","./assets/Legal-B18MFgcq.js":"580f9be2d1face820fa53c089ce3356ef3fee96680dceb3986bb6c287798df85","./assets/ModuloVista-BLbhgf9t.js":"08f668b9e247979b1bcf5cb069dfc5eb32f0bbc1c9850ed95ba97152a0aaa47f","./assets/NormasCasos-BWk5tJch.js":"3c33c53f8a6c1492376c3801f873d421d4a55fb24ea2442f4fb738f3874706ef","./assets/Perfil-OoUcXwZ4.js":"ab6c56779fb6a2815e916ef4d894709d382cb1a789448c3ea2d16fdbc63506f7","./assets/Practica-BGMIJkWX.js":"d0ed381010c08b6a98d80130c907224830a060467e36fcc1830037789d587b80","./assets/Premium-CVE_7WOU.js":"0fd1b83b2826a57eb24bd707d2cc76f31b95a2c788ca84e305b11bb8b7ab73fb","./assets/Progreso-B2r0A4FZ.js":"43c93ac3b4222e38ef820b688eae0e78ae38ecbee40d374b259449968d776e82","./assets/ReportarError-CRF-KOXJ.js":"d1237b628ecaf0d63c55cb3be49e36b9b63ebda4d02a99a8a17fb6bd2c01db2f","./assets/SoporteStoa-25QmXAPa.css":"524c4116bd89de58e3bd866bac4e9b61fc948616e4db1c302cb19507857f4ee0","./assets/SoporteStoa-WRRywQ41.js":"711639353f57d4fc5fc36766749a3d243af4763f882352cfff3d83d36114959d","./assets/Tarjetas-DfFZvtRZ.js":"9ca28723420a259378c34f8596ef91eefd0a1a4c3f26236340137214e6ad14ba","./assets/Temario-D8XIalO4.js":"4494bb5d2c064af4351f11fb8a7eb1edc963e18f2b8cb10602ee5cbafb93600e","./assets/app-BEdPQkT9.css":"33cd93810924ec81ca5dd3f7451ad9631482425c4d5fed95c6b962bd953e593b","./assets/app-DGpteqtT.js":"ad89582ca304dcf8e4d1e48eae6fcc731fe2fc608247da9f9ce0049c1ef53489","./assets/bodoni-moda-latin-opsz-italic-BCRrlh7t.woff2":"b737328c13b92784ee78d99e62e3bcc38eeef0f2dba41d107637b3acea46781f","./assets/bodoni-moda-latin-opsz-normal-X2BzlAjV.woff2":"c032219ef636f7b4932f7d1dc91bdab602c970f090770b546bea4effaab3463c","./assets/fuentes-9PMuVM31.js":"be767de5a08b5cddea43d25f7682d15ff25ced817e580678a37fd3f6a9e64d30","./assets/hanken-grotesk-latin-wght-normal-CaVRRdDk.woff2":"e9201eddf1d41d0b62253295d869ce3cf65768f7102b797f02c7f8c876b4a9d5","./assets/jetbrains-mono-latin-wght-normal-B9CIFXIH.woff2":"18be452724bfdc236c074ca94a249a7f41a86752c7d04ab258ce9ed5651f6a7e","./assets/jsxRuntime-DZTXdqln.js":"322e1828521a725f39e0cd5a156045b55d7d95beeac9d17bfd8cc0809cb53f87","./assets/normograma-nP3Y1o-x.js":"79380138be152376af5b54f9b3de5bb9149ef551df4ec2858aa919c743cdcd85","./datos/publico/perfiles-2a3748854ab5da29c468791941938e4cdafdaf8fe043b43d839e64a22d3171de.json":"2a3748854ab5da29c468791941938e4cdafdaf8fe043b43d839e64a22d3171de","./datos/publico/planes-d8315c32917592ca141923849563c8e39ad56027ebd5bae2758a04567fdf8d9d.json":"d8315c32917592ca141923849563c8e39ad56027ebd5bae2758a04567fdf8d9d","./icons/apple-touch-icon.png":"7c5dfce04388b7883ff806dacb99ff6ff8d8af336fb25c4682b883055ec20929","./icons/icon-192.png":"a4db497d50bc7ff22ccca56d614b320d09323b330fc3c1afdf0b1e16cbcb12c0","./icons/icon-512.png":"c59c7f7db9f2a1c514f15d813239eb4a904df9d8bc6327c9de48fed97ba900b8","./index.html":"6fb2b408a1c9a3724aef8f4d8dba61e7ddb774d4443ef478689a10d7ed16cc7a","./inicio.js":"6b4d97ea7d690ec0c1831f7b77fa709dd0d1c108a112bde0bc6df45e59aee36d","./manifest.json":"3f425b0568fc5aeb2ffb5bfadd476889f190c1ffed114a1fa3ada73047eebadf"};
const VERSION = "stoa-app-72501713c60ca958eb3e";

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
