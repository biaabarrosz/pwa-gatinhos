const CACHE_NAME = 'gatinhos-cache-v1';
const CACHE_URLS = [
    '/index.html',
    '/style.css',
    '/app.js',
    '/manifest.json',
    '/iconGatinhoPWA192x192.png'
];

self.addEventListener('install', (e) => {
    e.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(CACHE_URLS);
        })
    );
});

self.addEventListener('fetch', (e) => {
    e.respondWith(
        caches.match(e.request).then((response) => {
            return response || fetch(e.request);
        })
    );
});