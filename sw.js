const CACHE='turbo-burzet-iphone-icon-20261008';
const ASSETS=['./','./index.html','./manifest.json','./icon-192.png','./icons/paliwo.png','./icons/zakupy.png','./icons/ubranie.png','./icons/samochod.png','./icons/zegarki.png','./icons/amunicja.png','./icons/bron.png','./icons/gry.png','./icons/rtv.png','./icons/elektronika.png','./icons/restauracje.png','./icons/jedzenie.png','./icons/rower.png','./icons/uslugi.png','./icons/leki_lekarz.png'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request).then(res=>{const copy=res.clone();caches.open(CACHE).then(c=>c.put(e.request,copy));return res}).catch(()=>caches.match('./index.html')))));
