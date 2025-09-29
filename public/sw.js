const CACHE_NAME = 'flowafric-v1';
const urlsToCache = [
  '/',
  '/manifest.json',
  '/flowafric-logo.png',
  '/flowafric-logo-tagline.png',
  '/og-image.svg'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});
