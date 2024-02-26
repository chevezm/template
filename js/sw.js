self.addEventListener('fetch', (event) => {
    if (event.request.mode === 'navigate') {
        event.respondWith(caches.open(sw).then(async (cache) => {
            try {
                const fetchedResponse = await fetch(event.request.url);
                cache.put(event.request, fetchedResponse.clone());
                return fetchedResponse;
            } catch {
                return await cache.match(event.request.url);
            }
        }));
    }
    return;
});
