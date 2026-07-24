/* eslint-disable */
// @ts-nocheck
const CACHE_NAME = "live-story-shell-v1";
const OFFLINE_URL = "/offline.html";

self.addEventListener("install", (event: any) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.add(OFFLINE_URL))
  );
});

self.addEventListener("fetch", (event: any) => {
  event.respondWith(
    fetch(event.request).catch(() => caches.match(OFFLINE_URL))
  );
});
