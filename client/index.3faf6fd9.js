import{S as s,i as a,s as t,e as r,a as e,t as l,c as i,b as c,d as o,f as n,g as h,h as f,j as m,n as u,m as v}from"./client.5cb2658e.js";function d(s){var a,t,v,d,p,g,E,w,N,$,I;return{c(){a=r("a"),t=r("div"),v=r("div"),d=r("img"),p=e(),g=r("div"),E=r("h4"),w=l(s.title),N=e(),$=r("span"),I=l(s.info),this.h()},l(r){a=i(r,"A",{href:!0,target:!0,class:!0},!1);var e=c(a);t=i(e,"DIV",{class:!0},!1);var l=c(t);v=i(l,"DIV",{class:!0},!1);var h=c(v);d=i(h,"IMG",{src:!0,alt:!0,width:!0},!1),c(d).forEach(o),h.forEach(o),p=n(l,"\n    "),g=i(l,"DIV",{class:!0},!1);var f=c(g);E=i(f,"H4",{class:!0},!1);var m=c(E);w=n(m,s.title),m.forEach(o),N=n(f,"\n      "),$=i(f,"SPAN",{},!1);var u=c($);I=n(u,s.info),u.forEach(o),f.forEach(o),l.forEach(o),e.forEach(o),this.h()},h(){d.src="presentation.svg",d.alt="image",d.width="40",v.className="showcase-icon",E.className="svelte-2le14w",g.className="showcase-content",t.className="showcase card",a.href=s.url,a.target="_blank",a.className="svelte-2le14w"},m(s,r){h(s,a,r),f(a,t),f(t,v),f(v,d),f(t,p),f(t,g),f(g,E),f(E,w),f(g,N),f(g,$),f($,I)},p(s,t){s.title&&m(w,t.title),s.info&&m(I,t.info),s.url&&(a.href=t.url)},i:u,o:u,d(s){s&&o(a)}}}function p(s,a,t){let{title:r,info:e,url:l}=a;return s.$set=s=>{"title"in s&&t("title",r=s.title),"info"in s&&t("info",e=s.info),"url"in s&&t("url",l=s.url)},{title:r,info:e,url:l}}class g extends s{constructor(s){super(),a(this,s,p,d,t,["title","info","url"])}}function E(s){var a,t,m,d,p,E,w,N,$,I,D,V=new g({props:{title:"pixss",info:"A lightweight css framework for minimalist",url:"https://github.com/vikbert/pixss"}});return{c(){a=e(),t=r("div"),m=r("div"),d=r("h1"),p=l("My Projects"),E=e(),w=r("div"),N=r("div"),V.$$.fragment.c(),$=e(),I=r("div"),this.h()},l(s){a=n(s,"\n\n"),t=i(s,"DIV",{class:!0},!1);var r=c(t);m=i(r,"DIV",{},!1);var e=c(m);d=i(e,"H1",{},!1);var l=c(d);p=n(l,"My Projects"),l.forEach(o),E=n(e,"\n  "),w=i(e,"DIV",{class:!0},!1);var h=c(w);N=i(h,"DIV",{class:!0},!1);var f=c(N);V.$$.fragment.l(f),f.forEach(o),$=n(h,"\n    "),I=i(h,"DIV",{class:!0},!1),c(I).forEach(o),h.forEach(o),e.forEach(o),r.forEach(o),this.h()},h(){document.title="Sapper Blog Template",N.className="column",I.className="column",w.className="row",t.className="container svelte-mcls3i"},m(s,r){h(s,a,r),h(s,t,r),f(t,m),f(m,d),f(d,p),f(m,E),f(m,w),f(w,N),v(V,N,null),f(w,$),f(w,I),D=!0},p:u,i(s){D||(V.$$.fragment.i(s),D=!0)},o(s){V.$$.fragment.o(s),D=!1},d(s){s&&(o(a),o(t)),V.$destroy()}}}export default class extends s{constructor(s){super(),a(this,s,null,E,t,[])}}
