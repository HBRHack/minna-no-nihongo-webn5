/* Service Worker — Minna no Nihongo I (Bab 1–25) PWA */
const CACHE_VERSION = "20261126-v25";
const CACHE_NAME = `mnn-n5-${CACHE_VERSION}`;

const CORE_DATA_JS = [
  "modul-01-05.js",
  "modul-06-10.js",
  "modul-11-16.js",
  "bab-17.js",
  "modul-18-25.js",
  "soal-ekstra-merah-oranye.js",
  "soal-ekstra-hijau.js",
  "soal-ekstra-kuning-a.js",
  "soal-ekstra-kuning-b.js",
  "kana-dasar.js",
  "kotoba-1-25.js",
  "kaiwa-01-05.js",
  "kaiwa-06-10.js",
  "kaiwa-11-15.js",
  "kaiwa-16-20.js",
  "kaiwa-21-25.js",
  "referensi-minna.js",
  "tes-akhir-1-25.js"
];

const BANK_ASSETS = Array.from({ length: 25 }, (_, idx) => {
  const num = String(idx + 1).padStart(2, "0");
  return [
    `./data/bank/bab-${num}.js?v=${CACHE_VERSION}`,
    `./data/bank/bab-${num}.json?v=${CACHE_VERSION}`
  ];
}).flat();

const PRECACHE_URLS = [
  "./",
  "./index.html",
  `./manifest.webmanifest?v=${CACHE_VERSION}`,
  `./styles.css?v=${CACHE_VERSION}`,
  `./app.js?v=${CACHE_VERSION}`,
  `./icons/icon.svg?v=${CACHE_VERSION}`,
  `./icons/apple-touch-icon.png?v=${CACHE_VERSION}`,
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./icons/icon-maskable-512.png",
  ...CORE_DATA_JS.map((f) => `./data/${f}?v=${CACHE_VERSION}`),
  ...BANK_ASSETS
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(PRECACHE_URLS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (!req || req.method !== "GET") return;

  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;

  const isNavigation = req.mode === "navigate" || url.pathname === "/" || url.pathname.endsWith("/index.html");
  if (isNavigation) {
    event.respondWith(
      fetch(req)
        .then((res) => {
          if (res && res.ok) {
            const copy = res.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put("./index.html", copy));
          }
          return res;
        })
        .catch(() => caches.match("./index.html").then((cached) => cached || caches.match("./")))
    );
    return;
  }

  event.respondWith(
    caches.match(req).then((cached) => {
      if (cached) return cached;
      return fetch(req).then((res) => {
        if (res && res.ok) {
          const copy = res.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(req, copy));
        }
        return res;
      });
    })
  );
});
