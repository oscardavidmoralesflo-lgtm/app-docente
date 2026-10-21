// Service worker de Stoa: la interfaz abre sin conexión (v2: sin audio; borra la caché de audio anterior). Los datos (lecciones, preguntas) los guarda la app en
// IndexedDB según el perfil y el plan; aquí no se guarda ninguna respuesta de la API.
const VERSION = "stoa-app-v2";

self.addEventListener("install", (e) => { e.waitUntil(caches.open(VERSION).then((c) => c.addAll(["./", "./index.html"])).then(() => self.skipWaiting())); });
self.addEventListener("activate", (e) => {
  e.waitUntil(caches.keys().then((ks) => Promise.all(ks.filter((k) => k !== VERSION && k !== "stoa-fonts").map((k) => caches.delete(k)))).then(() => self.clients.claim()));
});

self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (url.origin === location.origin) {
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
