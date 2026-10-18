// Service worker de Stoa: la interfaz abre sin conexión. Los datos (lecciones, preguntas) los guarda la app en
// IndexedDB según el perfil y el plan; aquí no se guarda ninguna respuesta de la API.
const VERSION = "stoa-app-v1";

self.addEventListener("install", (e) => { e.waitUntil(caches.open(VERSION).then((c) => c.addAll(["./", "./index.html"])).then(() => self.skipWaiting())); });
self.addEventListener("activate", (e) => {
  e.waitUntil(caches.keys().then((ks) => Promise.all(ks.filter((k) => k !== VERSION && k !== "stoa-audio" && k !== "stoa-fonts").map((k) => caches.delete(k)))).then(() => self.clients.claim()));
});

self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (url.origin === location.origin) {
    if (url.pathname.includes("/audio/")) { e.respondWith(audio(req)); return; }
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

// Audio: se guarda completo la primera vez y luego se sirve por rangos (Safari los exige).
async function audio(req) {
  const c = await caches.open("stoa-audio");
  let r = await c.match(req.url);
  if (!r) {
    try { const full = await fetch(req.url); if (full.status !== 200) return full; await c.put(req.url, full.clone()); r = full; }
    catch { return fetch(req); }
  }
  const rango = req.headers.get("range");
  if (!rango) return r;
  const buf = await r.arrayBuffer();
  const m = /bytes=(\d*)-(\d*)/.exec(rango) || [];
  const ini = +m[1] || 0, fin = Math.min(m[2] ? +m[2] : buf.byteLength - 1, buf.byteLength - 1);
  return new Response(buf.slice(ini, fin + 1), { status: 206, headers: { "Content-Type": "audio/mpeg", "Content-Range": `bytes ${ini}-${fin}/${buf.byteLength}`, "Content-Length": String(fin - ini + 1), "Accept-Ranges": "bytes" } });
}
