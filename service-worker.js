!function(){"use strict";const e=1613593187132,t="cache"+e,s=["client/HeroShape.6b2d3689.js","client/index.19769fca.js","client/[slug].f4e5acdc.js","client/projects.f1badd9d.js","client/index.598ae0c6.js","client/client.07564cf5.js"].concat(["service-worker-index.html",".DS_Store","apple-icon-precomposed.png","apple-icon.png","browserconfig.xml","favicon-16x16.png","favicon.ico","global.css","highlight.css","manifest.json","me.jpg","nutab.png","pixss.min.css","pixss.png","svelte.png","vikbert.svg"]),n=new Set(s);self.addEventListener("install",e=>{e.waitUntil(caches.open(t).then(e=>e.addAll(s)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const s of e)s!==t&&await caches.delete(s);self.clients.claim()}))}),self.addEventListener("fetch",t=>{if("GET"!==t.request.method||t.request.headers.has("range"))return;const s=new URL(t.request.url);s.protocol.startsWith("http")&&(s.hostname===self.location.hostname&&s.port!==self.location.port||(s.host===self.location.host&&n.has(s.pathname)?t.respondWith(caches.match(t.request)):"only-if-cached"!==t.request.cache&&t.respondWith(caches.open("offline"+e).then(async e=>{try{const s=await fetch(t.request);return e.put(t.request,s.clone()),s}catch(s){const n=await e.match(t.request);if(n)return n;throw s}}))))})}();
