import{S as s,i as t,s as e,b as a,e as r,t as o,h as n,d as c,f as l,g as p,k as h,l as i,r as f,o as m,w as v}from"./client.3fc7d0e8.js";import{H as u}from"./HeroShape.15a63e70.js";function d(s,t,e){const a=Object.create(s);return a.post=t[e],a.index=e,a}function g(s){var t,e;return{c(){t=r("h2"),e=o("Blog"),this.h()},l(s){t=c(s,"H2",{class:!0},!1);var a=l(t);e=n(a,"Blog"),a.forEach(p),this.h()},h(){t.className="text-centered opacity-50 svelte-8nazp2"},m(s,a){h(s,t,a),i(t,e)},d(s){s&&p(t)}}}function $(s){var t;return{c(){t=r("hr")},l(s){t=c(s,"HR",{},!1),l(t).forEach(p)},m(s,e){h(s,t,e)},d(s){s&&p(t)}}}function x(s){var t,e,m,v,u,d,g,x,E,N,z,b,j,D,H,y=s.post.title,B=s.post.excerpt,I=s.post.printDate,S=s.index&&$();return{c(){S&&S.c(),t=a(),e=r("div"),m=r("h2"),v=r("a"),u=o(y),g=a(),x=r("p"),E=o(B),N=a(),z=r("div"),b=r("span"),j=o("— "),D=o(I),H=a(),this.h()},l(s){S&&S.l(s),t=n(s,"\r\n    "),e=c(s,"DIV",{class:!0},!1);var a=l(e);m=c(a,"H2",{class:!0},!1);var r=l(m);v=c(r,"A",{rel:!0,href:!0,class:!0},!1);var o=l(v);u=n(o,y),o.forEach(p),r.forEach(p),g=n(a,"\r\n      "),x=c(a,"P",{},!1);var h=l(x);E=n(h,B),h.forEach(p),N=n(a,"\r\n      "),z=c(a,"DIV",{class:!0},!1);var i=l(z);b=c(i,"SPAN",{class:!0},!1);var f=l(b);j=n(f,"— "),D=n(f,I),f.forEach(p),i.forEach(p),H=n(a,"\r\n    "),a.forEach(p),this.h()},h(){v.rel="prefetch",v.href=d="blog/"+s.post.slug,v.className="svelte-8nazp2",m.className="svelte-8nazp2",b.className="post-item-date svelte-8nazp2",z.className="post-item-footer svelte-8nazp2",e.className="post-item svelte-8nazp2"},m(s,a){S&&S.m(s,a),h(s,t,a),h(s,e,a),i(e,m),i(m,v),i(v,u),i(e,g),i(e,x),i(x,E),i(e,N),i(e,z),i(z,b),i(b,j),i(b,D),i(e,H)},p(s,e){e.index?S||((S=$()).c(),S.m(t.parentNode,t)):S&&(S.d(1),S=null),s.posts&&y!==(y=e.post.title)&&f(u,y),s.posts&&d!==(d="blog/"+e.post.slug)&&(v.href=d),s.posts&&B!==(B=e.post.excerpt)&&f(E,B),s.posts&&I!==(I=e.post.printDate)&&f(D,I)},d(s){S&&S.d(s),s&&(p(t),p(e))}}}function E(s){for(var t,e,o,i,f=new u({props:{color:"is-info",$$slots:{default:[g]},$$scope:{ctx:s}}}),$=s.posts,E=[],N=0;N<$.length;N+=1)E[N]=x(d(s,$,N));return{c(){t=a(),f.$$.fragment.c(),e=a(),o=r("div");for(var s=0;s<E.length;s+=1)E[s].c();this.h()},l(s){t=n(s,"\r\n\r\n"),f.$$.fragment.l(s),e=n(s,"\r\n\r\n"),o=c(s,"DIV",{class:!0},!1);for(var a=l(o),r=0;r<E.length;r+=1)E[r].l(a);a.forEach(p),this.h()},h(){document.title="Blog - vikbert",o.className="container svelte-8nazp2"},m(s,a){h(s,t,a),m(f,s,a),h(s,e,a),h(s,o,a);for(var r=0;r<E.length;r+=1)E[r].m(o,null);i=!0},p(s,t){var e={};if(s.$$scope&&(e.$$scope={changed:s,ctx:t}),f.$set(e),s.posts){$=t.posts;for(var a=0;a<$.length;a+=1){const e=d(t,$,a);E[a]?E[a].p(s,e):(E[a]=x(e),E[a].c(),E[a].m(o,null))}for(;a<E.length;a+=1)E[a].d(1);E.length=$.length}},i(s){i||(f.$$.fragment.i(s),i=!0)},o(s){f.$$.fragment.o(s),i=!1},d(s){s&&p(t),f.$destroy(s),s&&(p(e),p(o)),v(E,s)}}}function N({params:s,query:t}){return this.fetch("blog.json").then(s=>s.json()).then(s=>({posts:s}))}function z(s,t,e){let{posts:a}=t;return s.$set=s=>{"posts"in s&&e("posts",a=s.posts)},{posts:a}}export default class extends s{constructor(s){super(),t(this,s,z,E,e,["posts"])}}export{N as preload};
