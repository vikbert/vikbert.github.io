import{S as s,i as t,s as e,a as r,e as a,t as o,c as n,b as l,d as c,f as h,g as p,h as i,j as f,n as v,o as u}from"./client.64de29e5.js";function m(s,t,e){const r=Object.create(s);return r.post=t[e],r.index=e,r}function d(s){var t;return{c(){t=a("hr")},l(s){t=l(s,"HR",{},!1),c(t).forEach(h)},m(s,e){p(s,t,e)},d(s){s&&h(t)}}}function g(s){var t,e,v,u,m,g,E,x,N,y,b,z,j,D,B,H=s.post.title,I=s.post.excerpt,V=s.post.printDate,A=s.index&&d();return{c(){A&&A.c(),t=r(),e=a("div"),v=a("h2"),u=a("a"),m=o(H),E=r(),x=a("p"),N=o(I),y=r(),b=a("div"),z=a("span"),j=o("— "),D=o(V),B=r(),this.h()},l(s){A&&A.l(s),t=n(s,"\n    "),e=l(s,"DIV",{class:!0},!1);var r=c(e);v=l(r,"H2",{class:!0},!1);var a=c(v);u=l(a,"A",{rel:!0,href:!0,class:!0},!1);var o=c(u);m=n(o,H),o.forEach(h),a.forEach(h),E=n(r,"\n      "),x=l(r,"P",{},!1);var p=c(x);N=n(p,I),p.forEach(h),y=n(r,"\n      "),b=l(r,"DIV",{class:!0},!1);var i=c(b);z=l(i,"SPAN",{class:!0},!1);var f=c(z);j=n(f,"— "),D=n(f,V),f.forEach(h),i.forEach(h),B=n(r,"\n    "),r.forEach(h),this.h()},h(){u.rel="prefetch",u.href=g="blog/"+s.post.slug,u.className="svelte-riy7zh",v.className="svelte-riy7zh",z.className="post-item-date svelte-riy7zh",b.className="post-item-footer svelte-riy7zh",e.className="post-item svelte-riy7zh"},m(s,r){A&&A.m(s,r),p(s,t,r),p(s,e,r),i(e,v),i(v,u),i(u,m),i(e,E),i(e,x),i(x,N),i(e,y),i(e,b),i(b,z),i(z,j),i(z,D),i(e,B)},p(s,e){e.index?A||((A=d()).c(),A.m(t.parentNode,t)):A&&(A.d(1),A=null),s.posts&&H!==(H=e.post.title)&&f(m,H),s.posts&&g!==(g="blog/"+e.post.slug)&&(u.href=g),s.posts&&I!==(I=e.post.excerpt)&&f(N,I),s.posts&&V!==(V=e.post.printDate)&&f(D,V)},d(s){A&&A.d(s),s&&(h(t),h(e))}}}function E(s){for(var t,e,f,d,E,x=s.posts,N=[],y=0;y<x.length;y+=1)N[y]=g(m(s,x,y));return{c(){t=r(),e=a("div"),f=a("h1"),d=o("Blog"),E=r();for(var s=0;s<N.length;s+=1)N[s].c();this.h()},l(s){t=n(s,"\n\n"),e=l(s,"DIV",{class:!0},!1);var r=c(e);f=l(r,"H1",{},!1);var a=c(f);d=n(a,"Blog"),a.forEach(h),E=n(r,"\n  ");for(var o=0;o<N.length;o+=1)N[o].l(r);r.forEach(h),this.h()},h(){document.title="Blog - vikbert",e.className="container svelte-riy7zh"},m(s,r){p(s,t,r),p(s,e,r),i(e,f),i(f,d),i(e,E);for(var a=0;a<N.length;a+=1)N[a].m(e,null)},p(s,t){if(s.posts){x=t.posts;for(var r=0;r<x.length;r+=1){const a=m(t,x,r);N[r]?N[r].p(s,a):(N[r]=g(a),N[r].c(),N[r].m(e,null))}for(;r<N.length;r+=1)N[r].d(1);N.length=x.length}},i:v,o:v,d(s){s&&(h(t),h(e)),u(N,s)}}}function x({params:s,query:t}){return this.fetch("blog.json").then(s=>s.json()).then(s=>({posts:s}))}function N(s,t,e){let{posts:r}=t;return s.$set=s=>{"posts"in s&&e("posts",r=s.posts)},{posts:r}}export default class extends s{constructor(s){super(),t(this,s,N,E,e,["posts"])}}export{x as preload};
