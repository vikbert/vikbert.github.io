import{S as e,i as t,s as a,e as i,a as n,t as o,b as s,d as r,f as c,c as l,g as f,h,j as p,n as u,m,k as d,l as v,o as g,p as b,q as y,r as k}from"./client.1b499c1f.js";function w(e){var t,a,m,d,v,g,b,y,k,w;return{c(){t=i("a"),a=i("div"),m=i("div"),d=n(),v=i("div"),g=i("h4"),b=o(e.title),y=n(),k=i("span"),w=o(e.info),this.h()},l(i){t=s(i,"A",{href:!0,target:!0,rel:!0,class:!0},!1);var n=r(t);a=s(n,"DIV",{class:!0},!1);var o=r(a);m=s(o,"DIV",{class:!0},!1),r(m).forEach(c),d=l(o,"\n    "),v=s(o,"DIV",{class:!0},!1);var f=r(v);g=s(f,"H4",{class:!0},!1);var h=r(g);b=l(h,e.title),h.forEach(c),y=l(f,"\n      "),k=s(f,"SPAN",{},!1);var p=r(k);w=l(p,e.info),p.forEach(c),f.forEach(c),o.forEach(c),n.forEach(c),this.h()},h(){m.className="showcase-icon",g.className="svelte-13yq0i7",v.className="showcase-content",a.className="showcase",t.href=e.url,t.target="_blank",t.rel="noreferrer",t.className="svelte-13yq0i7"},m(i,n){f(i,t,n),h(t,a),h(a,m),m.innerHTML=e.icon,h(a,d),h(a,v),h(v,g),h(g,b),h(v,y),h(v,k),h(k,w)},p(e,a){e.icon&&(m.innerHTML=a.icon),e.title&&p(b,a.title),e.info&&p(w,a.info),e.url&&(t.href=a.url)},i:u,o:u,d(e){e&&c(t)}}}function j(e,t,a){let{title:i,info:n,url:o,icon:s}=t;return e.$set=e=>{"title"in e&&a("title",i=e.title),"info"in e&&a("info",n=e.info),"url"in e&&a("url",o=e.url),"icon"in e&&a("icon",s=e.icon)},{title:i,info:n,url:o,icon:s}}class N extends e{constructor(e){super(),t(this,e,j,w,a,["title","info","url","icon"])}}function S(e,t,a){const i=Object.create(e);return i.projectData=t[a],i}function $(e){var t,a=[e.projectData];let i={};for(var n=0;n<a.length;n+=1)i=b(i,a[n]);var o=new N({props:i});return{c(){o.$$.fragment.c()},l(e){o.$$.fragment.l(e)},m(e,a){m(o,e,a),t=!0},p(e,t){var i=e.projects?d(a,[t.projectData]):{};o.$set(i)},i(e){t||(o.$$.fragment.i(e),t=!0)},o(e){o.$$.fragment.o(e),t=!1},d(e){o.$destroy(e)}}}function A(e){for(var t,a,p,u,m,d,b,w,j=e.projects,N=[],A=0;A<j.length;A+=1)N[A]=$(S(e,j,A));function D(e,t,a){N[e]&&(t&&y(()=>{N[e].d(t),N[e]=null}),N[e].o(a))}return{c(){t=n(),a=i("div"),p=i("div"),u=i("h1"),m=o("Projects"),d=n(),b=i("div");for(var e=0;e<N.length;e+=1)N[e].c();this.h()},l(e){t=l(e,"\r\n\r\n"),a=s(e,"DIV",{class:!0},!1);var i=r(a);p=s(i,"DIV",{class:!0},!1);var n=r(p);u=s(n,"H1",{class:!0},!1);var o=r(u);m=l(o,"Projects"),o.forEach(c),n.forEach(c),d=l(i,"\r\n  "),b=s(i,"DIV",{class:!0},!1);for(var f=r(b),h=0;h<N.length;h+=1)N[h].l(f);f.forEach(c),i.forEach(c),this.h()},h(){document.title="Projects - Vikbert",u.className="svelte-14oof59",p.className="centered-xy my-2",b.className="projects svelte-14oof59",a.className="container svelte-14oof59"},m(e,i){f(e,t,i),f(e,a,i),h(a,p),h(p,u),h(u,m),h(a,d),h(a,b);for(var n=0;n<N.length;n+=1)N[n].m(b,null);w=!0},p(e,t){if(e.projects){j=t.projects;for(var a=0;a<j.length;a+=1){const i=S(t,j,a);N[a]?(N[a].p(e,i),N[a].i(1)):(N[a]=$(i),N[a].c(),N[a].i(1),N[a].m(b,null))}for(k();a<N.length;a+=1)D(a,1,1);v()}},i(e){if(!w){for(var t=0;t<j.length;t+=1)N[t].i();w=!0}},o(e){N=N.filter(Boolean);for(let e=0;e<N.length;e+=1)D(e,0);w=!1},d(e){e&&(c(t),c(a)),g(N,e)}}}function D(e){return{projects:[{title:"PiXSS",info:"A lightweight css framework for minimalist. Create a wonderful website with minimal utitily class set. Small but good enough.",url:"https://vikbert.github.io/pixss/",icon:'<span class="iconify" data-icon="ion:logo-sass" data-inline="false"></span>'},{title:"SSOmoc",info:"Single-Sign-On Proof of concept in symfony 5 standard project",url:"https://github.com/vikbert/ssomoc",icon:'<span class="iconify" data-icon="logos:symfony" data-inline="false"></span>'},{title:"FirePoll",info:"A realtime Voting App based on firebase, redux and React: responsive design powered by React Material UI",url:"https://github.com/vikbert/firepoll",icon:'<span class="iconify" data-icon="teenyicons:firebase-outline" data-inline="false"></span>'},{title:"NuTab",info:"Another Chrome extension to increase the productivity with the following features: manage Todos, quick search your bookmarks, add add a text note from everywhere.",url:"https://github.com/vikbert/nutab",icon:'<span class="iconify" data-icon="ant-design:chrome-outlined" data-inline="false"></span>'},{title:"Appikon",info:"A simple mobile app icon generator to save up the time to create the app icon for both native app or web app",url:"https://github.com/vikbert/appikon",icon:'<span class="iconify" data-icon="file-icons:test-react" data-inline="false"></span>'},{title:"YiTab",info:"A Chrome extension to sve up to 100% memory and reduce tab clutter. Close or restore these tabs with just one click.",url:"https://github.com/vikbert/yitab",icon:'<span class="iconify" data-icon="ant-design:chrome-outlined" data-inline="false"></span>'},{title:"My MacOS Dev setup scripts",info:"A couple of shell scripts for setting up the web dev environment in MacOS",url:"https://github.com/vikbert/awesome-macbook-setup",icon:'<span class="iconify" data-icon="carbon:mac-command" data-inline="false"></span>'},{title:"NineS",info:"My personal technical notes",url:"https://vikbert.github.io/nines/",icon:'<span class="iconify" data-icon="logos:markdown" data-inline="false"></span>'}]}}export default class extends e{constructor(e){super(),t(this,e,D,A,a,[])}}
