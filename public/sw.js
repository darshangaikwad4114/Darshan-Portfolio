const CACHE_NAME = "darshan-portfolio-v1";
const urlsToCache = [
  "/",
  "/index.html",
  "/favicon.svg",
  "/manifest.webmanifest",
  "/icons/icon-192x192.png",
  "/icons/icon-512x512.png",
  "/icons/apple-touch-icon.png",
  "/assets/Darshan_Gaikwad_Resume.pdf",
  "/images/profile.jpg",
];

// Install a service worker
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    }),
  );
});

// Cache and return requests
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      // Cache hit - return response
      if (response) {
        return response;
      }
      return fetch(event.request).then((response) => {
        // Don't cache if not a valid response or not a GET request
        if (
          !response ||
          response.status !== 200 ||
          response.type !== "basic" ||
          event.request.method !== "GET"
        ) {
          return response;
        }

        // Clone the response as it's a stream and can only be consumed once
        const responseToCache = response.clone();

        caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, responseToCache);
        });

        return response;
      });
    }),
  );
});

// Update a service worker
self.addEventListener("activate", (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        }),
      );
    }),
  );
});
