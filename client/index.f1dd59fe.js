import{S as s,i as t,s as e,a as r,e as a,t as o,f as n,c as l,b as c,d as p,g as h,h as i,j as f,n as v,k as u}from"./client.5cb2658e.js";function m(s,t,e){const r=Object.create(s);return r.post=t[e],r.index=e,r}function d(s){var t;return{c(){t=a("hr")},l(s){t=l(s,"HR",{},!1),c(t).forEach(p)},m(s,e){h(s,t,e)},d(s){s&&p(t)}}}function g(s){var t,e,v,u,m,g,j,E,x,N,b,D,B,H,I,V=s.post.title,A=s.post.excerpt,P=s.post.printDate,S=s.index&&d();return{c(){S&&S.c(),t=r(),e=a("div"),v=a("h3"),u=a("a"),m=o(V),j=r(),E=a("p"),x=o(A),N=r(),b=a("div"),D=a("span"),B=o("— "),H=o(P),I=r(),this.h()},l(s){S&&S.l(s),t=n(s,"\n    "),e=l(s,"DIV",{class:!0},!1);var r=c(e);v=l(r,"H3",{class:!0},!1);var a=c(v);u=l(a,"A",{rel:!0,href:!0,class:!0},!1);var o=c(u);m=n(o,V),o.forEach(p),a.forEach(p),j=n(r,"\n      "),E=l(r,"P",{},!1);var h=c(E);x=n(h,A),h.forEach(p),N=n(r,"\n      "),b=l(r,"DIV",{class:!0},!1);var i=c(b);D=l(i,"SPAN",{class:!0},!1);var f=c(D);B=n(f,"— "),H=n(f,P),f.forEach(p),i.forEach(p),I=n(r,"\n    "),r.forEach(p),this.h()},h(){u.rel="prefetch",u.href=g="blog/"+s.post.slug,u.className="svelte-rjj90s",v.className="svelte-rjj90s",D.className="post-item-date svelte-rjj90s",b.className="post-item-footer svelte-rjj90s",e.className="post-item svelte-rjj90s"},m(s,r){S&&S.m(s,r),h(s,t,r),h(s,e,r),i(e,v),i(v,u),i(u,m),i(e,j),i(e,E),i(E,x),i(e,N),i(e,b),i(b,D),i(D,B),i(D,H),i(e,I)},p(s,e){e.index?S||((S=d()).c(),S.m(t.parentNode,t)):S&&(S.d(1),S=null),s.posts&&V!==(V=e.post.title)&&f(m,V),s.posts&&g!==(g="blog/"+e.post.slug)&&(u.href=g),s.posts&&A!==(A=e.post.excerpt)&&f(x,A),s.posts&&P!==(P=e.post.printDate)&&f(H,P)},d(s){S&&S.d(s),s&&(p(t),p(e))}}}function j(s){for(var t,e,f,d,j,E=s.posts,x=[],N=0;N<E.length;N+=1)x[N]=g(m(s,E,N));return{c(){t=r(),e=a("div"),f=a("h1"),d=o("Blog"),j=r();for(var s=0;s<x.length;s+=1)x[s].c();this.h()},l(s){t=n(s,"\n\n"),e=l(s,"DIV",{class:!0},!1);var r=c(e);f=l(r,"H1",{},!1);var a=c(f);d=n(a,"Blog"),a.forEach(p),j=n(r,"\n  ");for(var o=0;o<x.length;o+=1)x[o].l(r);r.forEach(p),this.h()},h(){document.title="Blog",e.className="container svelte-rjj90s"},m(s,r){h(s,t,r),h(s,e,r),i(e,f),i(f,d),i(e,j);for(var a=0;a<x.length;a+=1)x[a].m(e,null)},p(s,t){if(s.posts){E=t.posts;for(var r=0;r<E.length;r+=1){const a=m(t,E,r);x[r]?x[r].p(s,a):(x[r]=g(a),x[r].c(),x[r].m(e,null))}for(;r<x.length;r+=1)x[r].d(1);x.length=E.length}},i:v,o:v,d(s){s&&(p(t),p(e)),u(x,s)}}}function E({params:s,query:t}){return this.fetch("blog.json").then(s=>s.json()).then(s=>({posts:s}))}function x(s,t,e){let{posts:r}=t;return s.$set=s=>{"posts"in s&&e("posts",r=s.posts)},{posts:r}}export default class extends s{constructor(s){super(),t(this,s,x,j,e,["posts"])}}export{E as preload};
