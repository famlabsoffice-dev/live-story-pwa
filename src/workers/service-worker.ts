/* eslint-disable @typescript-eslint/no-explicit-any */
const CACHE_NAME = "live-story-shell-v1";
const OFFLINE_URL = "/offline.html";

// @ts-expect-error - Event type not available in global tsconfig
self.addEventListener("install", (event: any) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.add(OFFLINE_URL))
  );
});

// @ts-expect-error - Event type not available in global tsconfig
self.addEventListener("fetch", (event: any) => {
  event.respondWith(
    fetch(event.request).catch(() => caches.match(OFFLINE_URL))
  );
});
