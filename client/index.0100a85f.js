import{S as s,i as t,s as e,b as r,e as a,t as o,h as n,d as c,f as l,g as p,k as h,l as i,r as f,o as m,w as v}from"./client.1368504f.js";import{H as u}from"./HeroShape.97b90cd4.js";function d(s,t,e){const r=Object.create(s);return r.post=t[e],r.index=e,r}function g(s){var t,e;return{c(){t=a("h2"),e=o("Blog"),this.h()},l(s){t=c(s,"H2",{class:!0},!1);var r=l(t);e=n(r,"Blog"),r.forEach(p),this.h()},h(){t.className="text-centered opacity-50 svelte-8nazp2"},m(s,r){h(s,t,r),i(t,e)},d(s){s&&p(t)}}}function $(s){var t;return{c(){t=a("hr")},l(s){t=c(s,"HR",{},!1),l(t).forEach(p)},m(s,e){h(s,t,e)},d(s){s&&p(t)}}}function x(s){var t,e,m,v,u,d,g,x,E,N,b,z,j,D,H,y=s.post.title,B=s.post.excerpt,I=s.post.printDate,S=s.index&&$();return{c(){S&&S.c(),t=r(),e=a("div"),m=a("h2"),v=a("a"),u=o(y),g=r(),x=a("p"),E=o(B),N=r(),b=a("div"),z=a("span"),j=o("— "),D=o(I),H=r(),this.h()},l(s){S&&S.l(s),t=n(s,"\r\n    "),e=c(s,"DIV",{class:!0},!1);var r=l(e);m=c(r,"H2",{class:!0},!1);var a=l(m);v=c(a,"A",{rel:!0,href:!0,class:!0},!1);var o=l(v);u=n(o,y),o.forEach(p),a.forEach(p),g=n(r,"\r\n      "),x=c(r,"P",{},!1);var h=l(x);E=n(h,B),h.forEach(p),N=n(r,"\r\n      "),b=c(r,"DIV",{class:!0},!1);var i=l(b);z=c(i,"SPAN",{class:!0},!1);var f=l(z);j=n(f,"— "),D=n(f,I),f.forEach(p),i.forEach(p),H=n(r,"\r\n    "),r.forEach(p),this.h()},h(){v.rel="prefetch",v.href=d="blog/"+s.post.slug,v.className="svelte-8nazp2",m.className="svelte-8nazp2",z.className="post-item-date svelte-8nazp2",b.className="post-item-footer svelte-8nazp2",e.className="post-item svelte-8nazp2"},m(s,r){S&&S.m(s,r),h(s,t,r),h(s,e,r),i(e,m),i(m,v),i(v,u),i(e,g),i(e,x),i(x,E),i(e,N),i(e,b),i(b,z),i(z,j),i(z,D),i(e,H)},p(s,e){e.index?S||((S=$()).c(),S.m(t.parentNode,t)):S&&(S.d(1),S=null),s.posts&&y!==(y=e.post.title)&&f(u,y),s.posts&&d!==(d="blog/"+e.post.slug)&&(v.href=d),s.posts&&B!==(B=e.post.excerpt)&&f(E,B),s.posts&&I!==(I=e.post.printDate)&&f(D,I)},d(s){S&&S.d(s),s&&(p(t),p(e))}}}function E(s){for(var t,e,o,i,f=new u({props:{color:"is-info",$$slots:{default:[g]},$$scope:{ctx:s}}}),$=s.posts,E=[],N=0;N<$.length;N+=1)E[N]=x(d(s,$,N));return{c(){t=r(),f.$$.fragment.c(),e=r(),o=a("div");for(var s=0;s<E.length;s+=1)E[s].c();this.h()},l(s){t=n(s,"\r\n\r\n"),f.$$.fragment.l(s),e=n(s,"\r\n\r\n"),o=c(s,"DIV",{class:!0},!1);for(var r=l(o),a=0;a<E.length;a+=1)E[a].l(r);r.forEach(p),this.h()},h(){document.title="Blog - vikbert",o.className="container svelte-8nazp2"},m(s,r){h(s,t,r),m(f,s,r),h(s,e,r),h(s,o,r);for(var a=0;a<E.length;a+=1)E[a].m(o,null);i=!0},p(s,t){var e={};if(s.$$scope&&(e.$$scope={changed:s,ctx:t}),f.$set(e),s.posts){$=t.posts;for(var r=0;r<$.length;r+=1){const e=d(t,$,r);E[r]?E[r].p(s,e):(E[r]=x(e),E[r].c(),E[r].m(o,null))}for(;r<E.length;r+=1)E[r].d(1);E.length=$.length}},i(s){i||(f.$$.fragment.i(s),i=!0)},o(s){f.$$.fragment.o(s),i=!1},d(s){s&&p(t),f.$destroy(s),s&&(p(e),p(o)),v(E,s)}}}function N({params:s,query:t}){return this.fetch("blog.json").then(s=>s.json()).then(s=>({posts:s}))}function b(s,t,e){let{posts:r}=t;return s.$set=s=>{"posts"in s&&e("posts",r=s.posts)},{posts:r}}export default class extends s{constructor(s){super(),t(this,s,b,E,e,["posts"])}}export{N as preload};
