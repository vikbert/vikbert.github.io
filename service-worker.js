!function(){"use strict";const e=1606722223307,t="cache"+e,s=["client/index.a0bc35e2.js","client/projects.fb134c23.js","client/[slug].e19e737c.js","client/index.ca19f963.js","client/client.6060d6f1.js"].concat(["service-worker-index.html",".DS_Store","apple-icon-precomposed.png","apple-icon.png","browserconfig.xml","favicon-16x16.png","favicon.ico","global.css","highlight.css","manifest.json","me.jpg","pixss.min.css","vikbert.svg"]),n=new Set(s);self.addEventListener("install",e=>{e.waitUntil(caches.open(t).then(e=>e.addAll(s)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const s of e)s!==t&&await caches.delete(s);self.clients.claim()}))}),self.addEventListener("fetch",t=>{if("GET"!==t.request.method||t.request.headers.has("range"))return;const s=new URL(t.request.url);s.protocol.startsWith("http")&&(s.hostname===self.location.hostname&&s.port!==self.location.port||(s.host===self.location.host&&n.has(s.pathname)?t.respondWith(caches.match(t.request)):"only-if-cached"!==t.request.cache&&t.respondWith(caches.open("offline"+e).then(async e=>{try{const s=await fetch(t.request);return e.put(t.request,s.clone()),s}catch(s){const n=await e.match(t.request);if(n)return n;throw s}}))))})}();
