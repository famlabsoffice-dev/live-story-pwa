const CACHE_NAME = "live-story-shell-v1";
const OFFLINE_URL = "/offline.html";

self.addEventListener("install", (event: any) => {
  const extendableEvent = event as ExtendableEvent;
  extendableEvent.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.add(OFFLINE_URL))
  );
});

self.addEventListener("fetch", (event: any) => {
  const fetchEvent = event as FetchEvent;
  fetchEvent.respondWith(
    fetch(fetchEvent.request).catch(() => caches.match(OFFLINE_URL) as Promise<Response>)
  );
});
