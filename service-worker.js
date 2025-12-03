self.addEventListener('install',e=>{
 self.skipWaiting();
 e.waitUntil(caches.open('pwa').then(c=>c.add('/')));
});
self.addEventListener('fetch',e=>{
 e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)));
});
