!function(){"use strict";const n=1606657637892,e="cache"+n,t=["client/index.0da81673.js","client/about.6550a125.js","client/index.3c81f21a.js","client/[slug].1af8f5fc.js","client/client.2453b05f.js"].concat(["service-worker-index.html",".DS_Store","android-icon-144x144.png","android-icon-192x192.png","android-icon-36x36.png","android-icon-48x48.png","android-icon-72x72.png","android-icon-96x96.png","apple-icon-114x114.png","apple-icon-120x120.png","apple-icon-144x144.png","apple-icon-152x152.png","apple-icon-180x180.png","apple-icon-57x57.png","apple-icon-60x60.png","apple-icon-72x72.png","apple-icon-76x76.png","apple-icon-precomposed.png","apple-icon.png","browserconfig.xml","favicon-16x16.png","favicon-32x32.png","favicon-96x96.png","favicon.ico","global.css","highlight.css","left.svg","light.svg","manifest.json","me.jpg","ms-icon-144x144.png","ms-icon-150x150.png","ms-icon-310x310.png","ms-icon-70x70.png","pixss.min.css","presentation.svg","vikbert.svg"]),c=new Set(t);self.addEventListener("install",n=>{n.waitUntil(caches.open(e).then(n=>n.addAll(t)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",n=>{n.waitUntil(caches.keys().then(async n=>{for(const t of n)t!==e&&await caches.delete(t);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const t=new URL(e.request.url);t.protocol.startsWith("http")&&(t.hostname===self.location.hostname&&t.port!==self.location.port||(t.host===self.location.host&&c.has(t.pathname)?e.respondWith(caches.match(e.request)):"only-if-cached"!==e.request.cache&&e.respondWith(caches.open("offline"+n).then(async n=>{try{const t=await fetch(e.request);return n.put(e.request,t.clone()),t}catch(t){const c=await n.match(e.request);if(c)return c;throw t}}))))})}();
