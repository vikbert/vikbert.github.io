!function(){"use strict";const e=1611690947918,t="cache"+e,s=["client/index.313acac8.js","client/projects.890c7560.js","client/[slug].72f8bdcf.js","client/index.19617688.js","client/client.9aa99a96.js"].concat(["service-worker-index.html",".DS_Store","apple-icon-precomposed.png","apple-icon.png","browserconfig.xml","favicon-16x16.png","favicon.ico","global.css","highlight.css","manifest.json","me.jpg","my-github.png","nutab.png","pixss.min.css","pixss.png","vikbert.svg"]),n=new Set(s);self.addEventListener("install",e=>{e.waitUntil(caches.open(t).then(e=>e.addAll(s)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const s of e)s!==t&&await caches.delete(s);self.clients.claim()}))}),self.addEventListener("fetch",t=>{if("GET"!==t.request.method||t.request.headers.has("range"))return;const s=new URL(t.request.url);s.protocol.startsWith("http")&&(s.hostname===self.location.hostname&&s.port!==self.location.port||(s.host===self.location.host&&n.has(s.pathname)?t.respondWith(caches.match(t.request)):"only-if-cached"!==t.request.cache&&t.respondWith(caches.open("offline"+e).then(async e=>{try{const s=await fetch(t.request);return e.put(t.request,s.clone()),s}catch(s){const n=await e.match(t.request);if(n)return n;throw s}}))))})}();
