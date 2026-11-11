// Service worker de Stoa: la app de estudio abre sin conexión (v3: la consola de admin, admin.html, va siempre a la red y no se guarda). Los datos (lecciones, preguntas) los guarda la app en
// IndexedDB según el perfil y el plan; aquí no se guarda ninguna respuesta de la API.
// Al compilar, vite.config.ts reemplaza estas dos líneas con la lista de archivos de la app y una versión
// calculada a partir de ellos: así la app entera queda guardada desde la primera visita y cada publicación
// renueva la caché sola. En desarrollo quedan los valores por defecto.
const ARCHIVOS = ["./assets/app-BjrNVDxO.js","./assets/Buscador-BG8qGyva.js","./assets/Candado-BkUQV-Lc.js","./assets/Concurso-D6huwg_O.js","./assets/Consulta-B5Cd2z-T.js","./assets/Errores-BcuJy8e5.js","./assets/Esqueleto-DxlQzk9X.js","./assets/ModuloVista-DLmVslGL.js","./assets/NormasCasos-ChIrQyDF.js","./assets/Practica-ClWjskB8.js","./assets/Premium-BG-xaZ1y.js","./assets/Progreso-BxvwMhfU.js","./assets/ReportarError-BzofZ8Ds.js","./assets/Tarjetas-DwK_KHQm.js","./assets/Temario-B11ZVpwr.js","./assets/datos-DCS3ewWy.js","./assets/fuentes-BOYjh1bA.js","./assets/app-DrKVj-0U.css","./assets/bodoni-moda-latin-opsz-italic-BCRrlh7t.woff2","./assets/bodoni-moda-latin-opsz-normal-X2BzlAjV.woff2","./assets/hanken-grotesk-latin-wght-normal-CaVRRdDk.woff2","./assets/jetbrains-mono-latin-wght-normal-B9CIFXIH.woff2","./inicio.js","./manifest.json","./icons/icon-192.png","./icons/icon-512.png","./icons/apple-touch-icon.png"];
const VERSION = "stoa-68cd1e2a5f";

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(VERSION).then((c) => c.addAll(["./", "./index.html", ...ARCHIVOS])).then(() => self.skipWaiting()));
});
self.addEventListener("activate", (e) => {
  e.waitUntil(caches.keys().then((ks) => Promise.all(ks.filter((k) => k !== VERSION && k !== "stoa-fonts").map((k) => caches.delete(k)))).then(() => self.clients.claim()));
});

self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (url.origin === location.origin) {
    if (url.pathname.startsWith("/bienvenida/")) return; // la presentación pública no reemplaza el HTML de estudio guardado
    if (url.pathname.endsWith("/admin.html") || /^\/admin\/?$/.test(url.pathname)) return; // la red decide el 404 o redirige al origen administrativo
    if (req.mode === "navigate") {
      e.respondWith(fetch(req).then((r) => { const cp = r.clone(); caches.open(VERSION).then((c) => c.put("./index.html", cp)); return r; }).catch(() => caches.match("./index.html")));
      return;
    }
    // Archivos con huella (assets/*-hash.js|css): primero caché
    e.respondWith(caches.match(req).then((hit) => hit || fetch(req).then((r) => { if (r.ok) { const cp = r.clone(); caches.open(VERSION).then((c) => c.put(req, cp)); } return r; })));
    return;
  }
  if (url.hostname === "fonts.googleapis.com" || url.hostname === "fonts.gstatic.com") {
    e.respondWith(caches.open("stoa-fonts").then((c) => c.match(req).then((hit) => { const red = fetch(req).then((r) => { c.put(req, r.clone()); return r; }).catch(() => hit); return hit || red; })));
  }
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
