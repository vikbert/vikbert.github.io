!function(){"use strict";const e=1606595689319,t="cache"+e,s=["client/index.33c9fac1.js","client/index.6a429e01.js","client/about.65cc12ea.js","client/[slug].8638f649.js","client/client.c31e9ed9.js"].concat(["service-worker-index.html",".DS_Store","global.css","highlight.css","left.svg","light.svg","me.jpg"]),c=new Set(s);self.addEventListener("install",e=>{e.waitUntil(caches.open(t).then(e=>e.addAll(s)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const s of e)s!==t&&await caches.delete(s);self.clients.claim()}))}),self.addEventListener("fetch",t=>{if("GET"!==t.request.method||t.request.headers.has("range"))return;const s=new URL(t.request.url);s.protocol.startsWith("http")&&(s.hostname===self.location.hostname&&s.port!==self.location.port||(s.host===self.location.host&&c.has(s.pathname)?t.respondWith(caches.match(t.request)):"only-if-cached"!==t.request.cache&&t.respondWith(caches.open("offline"+e).then(async e=>{try{const s=await fetch(t.request);return e.put(t.request,s.clone()),s}catch(s){const c=await e.match(t.request);if(c)return c;throw s}}))))})}();
