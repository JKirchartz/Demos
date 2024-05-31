# this is somehow necessary?
# I just want this to function offline.... https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerGlobalScope/fetch_event

async function cacheOnly(request) {
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      console.log("Found response in cache:", cachedResponse);
      return cachedResponse;
    }
    return Response.error();
}

self.addEventListener("fetch", (event) => {
      if (
        event.request.destination === "script" ||
        event.request.destination === "style"
      ) {
        event.respondWith(cacheOnly(event.request));
      }
    });


