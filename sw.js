// Service worker de Stoa: guarda la app para usarla sin conexión.
const VERSION = "stoa-56e2b00814";
const SHELL = ["./", "./index.html", "./manifest.json?v=2a4ec897", "./icons/icon-192.png?v=2a4ec897", "./icons/icon-512.png?v=2a4ec897", "./icons/maskable-192.png?v=2a4ec897", "./icons/maskable-512.png?v=2a4ec897", "./icons/apple-touch-icon.png?v=2a4ec897"];
self.addEventListener("install", e => { e.waitUntil(caches.open(VERSION).then(c => c.addAll(SHELL)).then(() => self.skipWaiting())); });
self.addEventListener("activate", e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== VERSION && k !== "stoa-fonts" && k !== "stoa-audio").map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener("fetch", e => {
  const req = e.request; if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (url.origin === location.origin) {
    if (url.pathname.includes("/audio/")) { e.respondWith(audio(req)); return; }
    if (req.mode === "navigate") { e.respondWith(fetch(req).then(r => { const cp = r.clone(); caches.open(VERSION).then(c => c.put("./index.html", cp)); return r; }).catch(() => caches.match("./index.html"))); return; }
    e.respondWith(caches.match(req).then(hit => hit || fetch(req).then(r => { const cp = r.clone(); caches.open(VERSION).then(c => c.put(req, cp)); return r; })));
    return;
  }
  if (url.hostname === "fonts.googleapis.com" || url.hostname === "fonts.gstatic.com") {
    e.respondWith(caches.open("stoa-fonts").then(c => c.match(req).then(hit => { const net = fetch(req).then(r => { c.put(req, r.clone()); return r; }).catch(() => hit); return hit || net; })));
  }
});
// Audio: se guarda completo la primera vez que se escucha y luego se sirve por rangos (Safari los exige).
async function audio(req) {
  const c = await caches.open("stoa-audio");
  let r = await c.match(req.url);
  if (!r) {
    try { const full = await fetch(req.url); if (full.status !== 200) return full; await c.put(req.url, full.clone()); r = full; }
    catch (err) { return fetch(req); }
  }
  const range = req.headers.get("range"); if (!range) return r;
  const buf = await r.arrayBuffer(); const m = /bytes=(\d*)-(\d*)/.exec(range) || [];
  const s = +m[1] || 0, end = Math.min(m[2] ? +m[2] : buf.byteLength - 1, buf.byteLength - 1);
  return new Response(buf.slice(s, end + 1), { status: 206, headers: { "Content-Type": "audio/mpeg", "Content-Range": "bytes " + s + "-" + end + "/" + buf.byteLength, "Content-Length": String(end - s + 1), "Accept-Ranges": "bytes" } });
}
