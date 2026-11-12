// Solo guarda el shell público de estudio y los archivos de esta compilación.
// Los datos y las respuestas de usuario siguen a cargo de la app, fuera de esta caché.
// La finalización compartida guarda la huella de cada archivo del paquete definitivo.
const ARCHIVOS = ["./assets/Buscador-2Zd1FqeW.js","./assets/Candado-BnT-RQrk.js","./assets/Concurso-s-cFS0iR.js","./assets/Consulta-Iu6rRaQJ.js","./assets/Errores-BGhe0NFP.js","./assets/Esqueleto-ByfJVQR_.js","./assets/ModuloVista-C2VAg_Xc.js","./assets/NormasCasos-DQQmM94B.js","./assets/Practica-CI8rLLsS.js","./assets/Premium-xFkoe1J6.js","./assets/Progreso-OGw2qAkz.js","./assets/ReportarError-C94UyjGU.js","./assets/Tarjetas-CsFcuGLK.js","./assets/Temario-BdSoXI2g.js","./assets/app-CcKwraY4.js","./assets/app-Pdv4PZGI.css","./assets/bodoni-moda-latin-opsz-italic-BCRrlh7t.woff2","./assets/bodoni-moda-latin-opsz-normal-X2BzlAjV.woff2","./assets/datos-DkMa1eqR.js","./assets/fuentes-CZY9r8Ce.js","./assets/hanken-grotesk-latin-wght-normal-CaVRRdDk.woff2","./assets/jetbrains-mono-latin-wght-normal-B9CIFXIH.woff2","./datos/publico/perfiles-39872792c6333d612ebe018d86b129d4e08f25c3c48ba12c6acd5348d8a1e854.json","./datos/publico/planes-5e6af17d688080904c36eeaa1055c28148d17e39a27cfb0fbdb3ef268409266b.json","./icons/apple-touch-icon.png","./icons/icon-192.png","./icons/icon-512.png","./inicio.js","./manifest.json"];
const HASHES = {"./assets/Buscador-2Zd1FqeW.js":"4a70524c1f45b9041aa801d7cdab535a6cc8c12e96fc722dd3d008a452f05f42","./assets/Candado-BnT-RQrk.js":"35b05985c9e4ef86c32ebc9fe2449b2345016af1335558161968e012dfd2a95f","./assets/Concurso-s-cFS0iR.js":"276117c0ed15f3310fcad6cdc261f9b1f1ef64e8d1db4701da8bee7af0dc8a87","./assets/Consulta-Iu6rRaQJ.js":"d73860be31783f5126759a23bbef7c9d0e3aeacd7db4d1e591d007772d61c29c","./assets/Errores-BGhe0NFP.js":"7437392361f033103284872d4f6ab1ac792e8bc06d8c4e685fb4ec318c9b824c","./assets/Esqueleto-ByfJVQR_.js":"631dcf5569e50affbe40c02f0e287edc3040b17d388ba093f86a666f6fd184ad","./assets/ModuloVista-C2VAg_Xc.js":"d7f3d0f466f50f2e5210126c5a79c4d7f3eca97325949d304a2595324d35bbf1","./assets/NormasCasos-DQQmM94B.js":"f0e70a67ecb23e05448c21d5990afdf822b92f1d92371e3e2e50f99b37cf90a7","./assets/Practica-CI8rLLsS.js":"1adc7110909dee33adf8860a33bce1921e88f1bbf8ca36e79213de67c7264d60","./assets/Premium-xFkoe1J6.js":"54949c9882ce2a33f31e5339940ed4f2039e7770e86033fb7d89448727a7f962","./assets/Progreso-OGw2qAkz.js":"7e2dd4d323d1addb3dd327de2be2e561bd412fee4b6d8d5a4bdef936917c9db8","./assets/ReportarError-C94UyjGU.js":"7da3c79d798f52b63b723e37a521dad4f3f23e15ecb886328e8a562820d86379","./assets/Tarjetas-CsFcuGLK.js":"d75251ca03a682047cbc1412f5fe5dfff9bbd8fb32b63c203184d698641081ba","./assets/Temario-BdSoXI2g.js":"5f14dd4c4940acc5af83d15a8bbb69ccd2b7998031b15699bc15b773f2709469","./assets/app-CcKwraY4.js":"88cda2cf6eb2ff915e023b79dd96fad4b3ca7807a8b662b8e10a384cc89d4cc8","./assets/app-Pdv4PZGI.css":"3b2ee3abcf1dc6f7e6ffb4fee33edc162c69eda11a41491545d4771905cfccc0","./assets/bodoni-moda-latin-opsz-italic-BCRrlh7t.woff2":"b737328c13b92784ee78d99e62e3bcc38eeef0f2dba41d107637b3acea46781f","./assets/bodoni-moda-latin-opsz-normal-X2BzlAjV.woff2":"c032219ef636f7b4932f7d1dc91bdab602c970f090770b546bea4effaab3463c","./assets/datos-DkMa1eqR.js":"30a73de5da6201a34504c7c1be7e711537b4e59e6b1bfeffe020833bf24a437d","./assets/fuentes-CZY9r8Ce.js":"8f3cdf2406607c20a9e03be30baae45db82cab434895ac27075b80c25bba4b87","./assets/hanken-grotesk-latin-wght-normal-CaVRRdDk.woff2":"e9201eddf1d41d0b62253295d869ce3cf65768f7102b797f02c7f8c876b4a9d5","./assets/jetbrains-mono-latin-wght-normal-B9CIFXIH.woff2":"18be452724bfdc236c074ca94a249a7f41a86752c7d04ab258ce9ed5651f6a7e","./datos/publico/perfiles-39872792c6333d612ebe018d86b129d4e08f25c3c48ba12c6acd5348d8a1e854.json":"39872792c6333d612ebe018d86b129d4e08f25c3c48ba12c6acd5348d8a1e854","./datos/publico/planes-5e6af17d688080904c36eeaa1055c28148d17e39a27cfb0fbdb3ef268409266b.json":"5e6af17d688080904c36eeaa1055c28148d17e39a27cfb0fbdb3ef268409266b","./icons/apple-touch-icon.png":"7c5dfce04388b7883ff806dacb99ff6ff8d8af336fb25c4682b883055ec20929","./icons/icon-192.png":"a4db497d50bc7ff22ccca56d614b320d09323b330fc3c1afdf0b1e16cbcb12c0","./icons/icon-512.png":"c59c7f7db9f2a1c514f15d813239eb4a904df9d8bc6327c9de48fed97ba900b8","./index.html":"a572e15e6762cc88a23692f686aa49772513eb20ace198d54e3861c49db7655b","./inicio.js":"6b4d97ea7d690ec0c1831f7b77fa709dd0d1c108a112bde0bc6df45e59aee36d","./manifest.json":"3f425b0568fc5aeb2ffb5bfadd476889f190c1ffed114a1fa3ada73047eebadf"};
const VERSION = "stoa-app-fd650d4a3f0150a4e5fe";

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
