import{S as s,i as t,s as e,a,e as o,t as r,f as l,c as n,b as c,d as p,g as h,h as i,j as f,n as v,k as g}from"./client.c31e9ed9.js";function u(s,t,e){const a=Object.create(s);return a.post=t[e],a.index=e,a}function m(s){var t;return{c(){t=o("hr")},l(s){t=n(s,"HR",{},!1),c(t).forEach(p)},m(s,e){h(s,t,e)},d(s){s&&p(t)}}}function d(s){var t,e,v,g,u,d,E,N,x,b,j,D,B,H,I,V=s.post.title,A=s.post.excerpt,P=s.post.printDate,S=s.index&&m();return{c(){S&&S.c(),t=a(),e=o("div"),v=o("h3"),g=o("a"),u=r(V),E=a(),N=o("p"),x=r(A),b=a(),j=o("div"),D=o("span"),B=r("— "),H=r(P),I=a(),this.h()},l(s){S&&S.l(s),t=l(s,"\n    "),e=n(s,"DIV",{class:!0},!1);var a=c(e);v=n(a,"H3",{class:!0},!1);var o=c(v);g=n(o,"A",{rel:!0,href:!0,class:!0},!1);var r=c(g);u=l(r,V),r.forEach(p),o.forEach(p),E=l(a,"\n      "),N=n(a,"P",{},!1);var h=c(N);x=l(h,A),h.forEach(p),b=l(a,"\n      "),j=n(a,"DIV",{class:!0},!1);var i=c(j);D=n(i,"SPAN",{class:!0},!1);var f=c(D);B=l(f,"— "),H=l(f,P),f.forEach(p),i.forEach(p),I=l(a,"\n    "),a.forEach(p),this.h()},h(){g.rel="prefetch",g.href=d="blog/"+s.post.slug,g.className="svelte-1lif8ga",v.className="svelte-1lif8ga",D.className="post-item-date svelte-1lif8ga",j.className="post-item-footer svelte-1lif8ga",e.className="post-item svelte-1lif8ga"},m(s,a){S&&S.m(s,a),h(s,t,a),h(s,e,a),i(e,v),i(v,g),i(g,u),i(e,E),i(e,N),i(N,x),i(e,b),i(e,j),i(j,D),i(D,B),i(D,H),i(e,I)},p(s,e){e.index?S||((S=m()).c(),S.m(t.parentNode,t)):S&&(S.d(1),S=null),s.posts&&V!==(V=e.post.title)&&f(u,V),s.posts&&d!==(d="blog/"+e.post.slug)&&(g.href=d),s.posts&&A!==(A=e.post.excerpt)&&f(x,A),s.posts&&P!==(P=e.post.printDate)&&f(H,P)},d(s){S&&S.d(s),s&&(p(t),p(e))}}}function E(s){for(var t,e,f,m,E,N=s.posts,x=[],b=0;b<N.length;b+=1)x[b]=d(u(s,N,b));return{c(){t=a(),e=o("div"),f=o("h1"),m=r("Blog"),E=a();for(var s=0;s<x.length;s+=1)x[s].c();this.h()},l(s){t=l(s,"\n\n"),e=n(s,"DIV",{class:!0},!1);var a=c(e);f=n(a,"H1",{class:!0},!1);var o=c(f);m=l(o,"Blog"),o.forEach(p),E=l(a,"\n  ");for(var r=0;r<x.length;r+=1)x[r].l(a);a.forEach(p),this.h()},h(){document.title="Blog",f.className="svelte-1lif8ga",e.className="container svelte-1lif8ga"},m(s,a){h(s,t,a),h(s,e,a),i(e,f),i(f,m),i(e,E);for(var o=0;o<x.length;o+=1)x[o].m(e,null)},p(s,t){if(s.posts){N=t.posts;for(var a=0;a<N.length;a+=1){const o=u(t,N,a);x[a]?x[a].p(s,o):(x[a]=d(o),x[a].c(),x[a].m(e,null))}for(;a<x.length;a+=1)x[a].d(1);x.length=N.length}},i:v,o:v,d(s){s&&(p(t),p(e)),g(x,s)}}}function N({params:s,query:t}){return this.fetch("blog.json").then(s=>s.json()).then(s=>({posts:s}))}function x(s,t,e){let{posts:a}=t;return s.$set=s=>{"posts"in s&&e("posts",a=s.posts)},{posts:a}}export default class extends s{constructor(s){super(),t(this,s,x,E,e,["posts"])}}export{N as preload};