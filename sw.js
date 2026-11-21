const CACHE_NAME = "lost-pwa-v2";
const ASSETS = [
  "./",
  "./index.html",
  "./app.js",
  "./styles.css",
  "./manifest.json",
  "./icon-512.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)).catch(() => {})
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});

self.addEventListener("sync", (event) => {
  if (event.tag === "lost-sync") {
    event.waitUntil(Promise.resolve());
  }
});

self.addEventListener("periodicsync", (event) => {
  if (event.tag === "lost-periodic-sync") {
    event.waitUntil(Promise.resolve());
  }
});

self.addEventListener("push", (event) => {
  const data = event.data ? event.data.text() : "Tienes una novedad en LOST.";
  event.waitUntil(
    self.registration.showNotification("LOST", {
      body: data,
      icon: "./icon-512.png",
      badge: "./icon-512.png"
    })
  );
});