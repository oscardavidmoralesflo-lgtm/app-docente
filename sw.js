// Solo guarda el shell público de estudio y los archivos de esta compilación.
// Los datos y las respuestas de usuario siguen a cargo de la app, fuera de esta caché.
// La finalización compartida guarda la huella de cada archivo del paquete definitivo.
const ARCHIVOS = ["./assets/Acceso-BFi7eXyv.js","./assets/Buscador-t4mbq6ut.js","./assets/Candado-C78A6Rab.js","./assets/Concurso-CxVrWWYI.js","./assets/Consulta-CUrbxhov.js","./assets/Errores-DNbbLS6n.js","./assets/EstadoCobertura-CS4eQmH6.js","./assets/HistorialSimulacros-DqT4-rGF.js","./assets/Legal-BL4xLmQj.js","./assets/ModuloVista-Cn8ADjB7.js","./assets/NormasCasos-B2LzvGGZ.js","./assets/Perfil-CiA6TNk0.js","./assets/Practica-DL0dG_88.js","./assets/Premium-Em3zIBsI.js","./assets/Progreso-D3UwhROH.js","./assets/ReportarError-BqYAXa42.js","./assets/SoporteStoa-25QmXAPa.css","./assets/SoporteStoa-DTrRQiv3.js","./assets/Tarjetas-qjniw84f.js","./assets/Temario-DfmzEfDf.js","./assets/app-BEdPQkT9.css","./assets/app-BUvwXB3S.js","./assets/bodoni-moda-latin-opsz-italic-BCRrlh7t.woff2","./assets/bodoni-moda-latin-opsz-normal-X2BzlAjV.woff2","./assets/fuentes-DFFplO7I.js","./assets/hanken-grotesk-latin-wght-normal-CaVRRdDk.woff2","./assets/jetbrains-mono-latin-wght-normal-B9CIFXIH.woff2","./assets/jsxRuntime-F2inT6xP.js","./assets/normograma-lP1hQeaf.js","./datos/publico/perfiles-18cb7f5683193c520bb1428057b605c21b87ece8eadb1f13c1aba02f3db82288.json","./datos/publico/planes-457056cf3cdcfc48ac4ec90eb9d2d2f6c24233293b8998ff9b8aaa6c3cbc5b47.json","./icons/apple-touch-icon.png","./icons/icon-192.png","./icons/icon-512.png","./inicio.js","./manifest.json"];
const HASHES = {"./assets/Acceso-BFi7eXyv.js":"9d57d4d442529cfa56e656571a05fae15f27bd963e5c55fdb09ab7a332e56da8","./assets/Buscador-t4mbq6ut.js":"05d9fb172f1a1ee9e507b6eddf370ec2f3c6f385eb02a6c4be05fae07eb54b68","./assets/Candado-C78A6Rab.js":"e0ec572fa8f693418cd526d0e13e080d2500391d8579f7be5ad0d864d35b3e9a","./assets/Concurso-CxVrWWYI.js":"797abb9a0e21a1e874d1021423663e1dc268735b5bda0743e0ed611f431c6fdc","./assets/Consulta-CUrbxhov.js":"0aefaee3e318b40e553da87b4e27414014c2b4dfb3d66618eac30469749d7bf2","./assets/Errores-DNbbLS6n.js":"22fac7c96b5d2bbd42061f266dc8f1d1be25b45fe5588189ade80f71754c35b7","./assets/EstadoCobertura-CS4eQmH6.js":"029612297f03f9ba50baa47525a6755a0490292e6a81ee352940950aca4a8fdf","./assets/HistorialSimulacros-DqT4-rGF.js":"7e4857911ef529f19a4be09aae844e4cc9af7a8b93bf7668ac898d4a9371cb2d","./assets/Legal-BL4xLmQj.js":"27be74d2f62c87b7609a5fa1abca63eeb7a73190035586641b98fe1dd6ce183b","./assets/ModuloVista-Cn8ADjB7.js":"0a67680b19dca8b53836caad07fc21f1aa9fd93d926fe095773132fbba8b8fce","./assets/NormasCasos-B2LzvGGZ.js":"ddc27a0373033a2d45b6719812349b86c2edbb60b847450d2565745eac8d8d88","./assets/Perfil-CiA6TNk0.js":"c092099b058206be959f0a9e9d214c700c4f7fa724991e0bd9846479b12e870d","./assets/Practica-DL0dG_88.js":"403b3b5d0d472e4b081ee721766bb71e3448e77a58e4549ca639136b6f9bfcac","./assets/Premium-Em3zIBsI.js":"727d20d7a20d45b6f709d68158eaeb256fff52c9eb78f539181da052c3c07ade","./assets/Progreso-D3UwhROH.js":"b9a6d439b9a01e2381d905300945226f69278eab50e5a3cfd2a120290e827bdc","./assets/ReportarError-BqYAXa42.js":"717291a9149fcfd78061808b9be8c4ad0134fe8526460cd3efe61d1a0bbaa1ef","./assets/SoporteStoa-25QmXAPa.css":"524c4116bd89de58e3bd866bac4e9b61fc948616e4db1c302cb19507857f4ee0","./assets/SoporteStoa-DTrRQiv3.js":"99f3266e4aa7e2366e0da1e37fbef18ef7087224d314e2814d97eaae632b64e5","./assets/Tarjetas-qjniw84f.js":"f92970bbd6c87f0e43c29d12e3be33380e2c2fdb5805d418898af5955a74ad01","./assets/Temario-DfmzEfDf.js":"768f502556e9efe2df94354ed83fed4fe3e9a65f44f6ceef02646d46b6eeb372","./assets/app-BEdPQkT9.css":"33cd93810924ec81ca5dd3f7451ad9631482425c4d5fed95c6b962bd953e593b","./assets/app-BUvwXB3S.js":"69a9d777c0b8a7870d84931492cb00599b6aae577242220a467c0ba700dd251d","./assets/bodoni-moda-latin-opsz-italic-BCRrlh7t.woff2":"b737328c13b92784ee78d99e62e3bcc38eeef0f2dba41d107637b3acea46781f","./assets/bodoni-moda-latin-opsz-normal-X2BzlAjV.woff2":"c032219ef636f7b4932f7d1dc91bdab602c970f090770b546bea4effaab3463c","./assets/fuentes-DFFplO7I.js":"1b1282614c3de799396289048d2afd498350be01924cf9a642b262a798d69540","./assets/hanken-grotesk-latin-wght-normal-CaVRRdDk.woff2":"e9201eddf1d41d0b62253295d869ce3cf65768f7102b797f02c7f8c876b4a9d5","./assets/jetbrains-mono-latin-wght-normal-B9CIFXIH.woff2":"18be452724bfdc236c074ca94a249a7f41a86752c7d04ab258ce9ed5651f6a7e","./assets/jsxRuntime-F2inT6xP.js":"227a92a72f8db968c050a41a7e08c0f0eff96a623170fe74749025fe4b9432ea","./assets/normograma-lP1hQeaf.js":"6e9733ce24dbdbe995c861fbf361ed61c97788f178a4bac718c79c4a8a95896c","./datos/publico/perfiles-18cb7f5683193c520bb1428057b605c21b87ece8eadb1f13c1aba02f3db82288.json":"18cb7f5683193c520bb1428057b605c21b87ece8eadb1f13c1aba02f3db82288","./datos/publico/planes-457056cf3cdcfc48ac4ec90eb9d2d2f6c24233293b8998ff9b8aaa6c3cbc5b47.json":"457056cf3cdcfc48ac4ec90eb9d2d2f6c24233293b8998ff9b8aaa6c3cbc5b47","./icons/apple-touch-icon.png":"7c5dfce04388b7883ff806dacb99ff6ff8d8af336fb25c4682b883055ec20929","./icons/icon-192.png":"a4db497d50bc7ff22ccca56d614b320d09323b330fc3c1afdf0b1e16cbcb12c0","./icons/icon-512.png":"c59c7f7db9f2a1c514f15d813239eb4a904df9d8bc6327c9de48fed97ba900b8","./index.html":"5199e216564781dba9a1f8c495b54c3c0ba8debfae47b3868561933055197f2c","./inicio.js":"6b4d97ea7d690ec0c1831f7b77fa709dd0d1c108a112bde0bc6df45e59aee36d","./manifest.json":"3f425b0568fc5aeb2ffb5bfadd476889f190c1ffed114a1fa3ada73047eebadf"};
const VERSION = "stoa-app-0e55af36f295d0a937c4";

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
