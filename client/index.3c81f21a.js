import{S as t,i as e,s as a,e as r,a as s,t as i,c as o,b as n,d as l,f as c,g as f,h,j as u,n as p,m as v,k as m,l as g,o as d,p as b,q as j,r as $}from"./client.2453b05f.js";function w(t){var e,a,v,m,g,d,b,j,$,w,E;return{c(){e=r("a"),a=r("div"),v=r("div"),m=r("img"),g=s(),d=r("div"),b=r("h4"),j=i(t.title),$=s(),w=r("span"),E=i(t.info),this.h()},l(r){e=o(r,"A",{href:!0,target:!0,class:!0},!1);var s=n(e);a=o(s,"DIV",{class:!0},!1);var i=n(a);v=o(i,"DIV",{class:!0},!1);var f=n(v);m=o(f,"IMG",{src:!0,alt:!0,width:!0},!1),n(m).forEach(l),f.forEach(l),g=c(i,"\n    "),d=o(i,"DIV",{class:!0},!1);var h=n(d);b=o(h,"H4",{class:!0},!1);var u=n(b);j=c(u,t.title),u.forEach(l),$=c(h,"\n      "),w=o(h,"SPAN",{},!1);var p=n(w);E=c(p,t.info),p.forEach(l),h.forEach(l),i.forEach(l),s.forEach(l),this.h()},h(){m.src="presentation.svg",m.alt="image",m.width="40",v.className="showcase-icon",b.className="svelte-16a3sex",d.className="showcase-content",a.className="showcase",e.href=t.url,e.target="_blank",e.className="svelte-16a3sex"},m(t,r){f(t,e,r),h(e,a),h(a,v),h(v,m),h(a,g),h(a,d),h(d,b),h(b,j),h(d,$),h(d,w),h(w,E)},p(t,a){t.title&&u(j,a.title),t.info&&u(E,a.info),t.url&&(e.href=a.url)},i:p,o:p,d(t){t&&l(e)}}}function E(t,e,a){let{title:r,info:s,url:i}=e;return t.$set=t=>{"title"in t&&a("title",r=t.title),"info"in t&&a("info",s=t.info),"url"in t&&a("url",i=t.url)},{title:r,info:s,url:i}}class k extends t{constructor(t){super(),e(this,t,E,w,a,["title","info","url"])}}function x(t,e,a){const r=Object.create(t);return r.projectData=e[a],r}function D(t){var e,a=[t.projectData];let r={};for(var s=0;s<a.length;s+=1)r=b(r,a[s]);var i=new k({props:r});return{c(){i.$$.fragment.c()},l(t){i.$$.fragment.l(t)},m(t,a){v(i,t,a),e=!0},p(t,e){var r=t.projects?m(a,[e.projectData]):{};i.$set(r)},i(t){e||(i.$$.fragment.i(t),e=!0)},o(t){i.$$.fragment.o(t),e=!1},d(t){i.$destroy(t)}}}function N(t){for(var e,a,u,p,v,m,b,w=t.projects,E=[],k=0;k<w.length;k+=1)E[k]=D(x(t,w,k));function N(t,e,a){E[t]&&(e&&j(()=>{E[t].d(e),E[t]=null}),E[t].o(a))}return{c(){e=s(),a=r("div"),u=r("h1"),p=i("My Projects"),v=s(),m=r("div");for(var t=0;t<E.length;t+=1)E[t].c();this.h()},l(t){e=c(t,"\n\n"),a=o(t,"DIV",{class:!0},!1);var r=n(a);u=o(r,"H1",{},!1);var s=n(u);p=c(s,"My Projects"),s.forEach(l),v=c(r,"\n  "),m=o(r,"DIV",{class:!0},!1);for(var i=n(m),f=0;f<E.length;f+=1)E[f].l(i);i.forEach(l),r.forEach(l),this.h()},h(){document.title="vikbert.github.io",m.className="projects svelte-g9lszf",a.className="container svelte-g9lszf"},m(t,r){f(t,e,r),f(t,a,r),h(a,u),h(u,p),h(a,v),h(a,m);for(var s=0;s<E.length;s+=1)E[s].m(m,null);b=!0},p(t,e){if(t.projects){w=e.projects;for(var a=0;a<w.length;a+=1){const r=x(e,w,a);E[a]?(E[a].p(t,r),E[a].i(1)):(E[a]=D(r),E[a].c(),E[a].i(1),E[a].m(m,null))}for($();a<E.length;a+=1)N(a,1,1);g()}},i(t){if(!b){for(var e=0;e<w.length;e+=1)E[e].i();b=!0}},o(t){E=E.filter(Boolean);for(let t=0;t<E.length;t+=1)N(t,0);b=!1},d(t){t&&(l(e),l(a)),d(E,t)}}}function I(t){return{projects:[{title:"pixss",info:"A lightweight css framework for minimalist",url:"https://github.com/vikbert/pixss"},{title:"appikon",info:"A simple mobile app icon generator, created with ReactJS and SVG",url:"https://github.com/vikbert/appikon"},{title:"YiTab",info:"A Chrome extension created with React+TypeScript",url:"https://github.com/vikbert/yitab"}]}}export default class extends t{constructor(t){super(),e(this,t,I,N,a,[])}}
