import{S as e,i as t,s as a,e as i,a as o,t as s,b as n,d as r,f as c,c as l,g as f,h,j as p,n as u,m,k as d,l as v,o as b,p as g,q as y,r as k}from"./client.e3db79a7.js";function w(e){var t,a,m,d,v,b,g,y,k,w;return{c(){t=i("a"),a=i("div"),m=i("div"),d=o(),v=i("div"),b=i("h4"),g=s(e.title),y=o(),k=i("span"),w=s(e.info),this.h()},l(i){t=n(i,"A",{href:!0,target:!0,rel:!0,class:!0},!1);var o=r(t);a=n(o,"DIV",{class:!0},!1);var s=r(a);m=n(s,"DIV",{class:!0},!1),r(m).forEach(c),d=l(s,"\n    "),v=n(s,"DIV",{class:!0},!1);var f=r(v);b=n(f,"H4",{class:!0},!1);var h=r(b);g=l(h,e.title),h.forEach(c),y=l(f,"\n      "),k=n(f,"SPAN",{},!1);var p=r(k);w=l(p,e.info),p.forEach(c),f.forEach(c),s.forEach(c),o.forEach(c),this.h()},h(){m.className="showcase-icon",b.className="svelte-13yq0i7",v.className="showcase-content",a.className="showcase",t.href=e.url,t.target="_blank",t.rel="noreferrer",t.className="svelte-13yq0i7"},m(i,o){f(i,t,o),h(t,a),h(a,m),m.innerHTML=e.icon,h(a,d),h(a,v),h(v,b),h(b,g),h(v,y),h(v,k),h(k,w)},p(e,a){e.icon&&(m.innerHTML=a.icon),e.title&&p(g,a.title),e.info&&p(w,a.info),e.url&&(t.href=a.url)},i:u,o:u,d(e){e&&c(t)}}}function j(e,t,a){let{title:i,info:o,url:s,icon:n}=t;return e.$set=e=>{"title"in e&&a("title",i=e.title),"info"in e&&a("info",o=e.info),"url"in e&&a("url",s=e.url),"icon"in e&&a("icon",n=e.icon)},{title:i,info:o,url:s,icon:n}}class N extends e{constructor(e){super(),t(this,e,j,w,a,["title","info","url","icon"])}}function $(e,t,a){const i=Object.create(e);return i.projectData=t[a],i}function A(e){var t,a=[e.projectData];let i={};for(var o=0;o<a.length;o+=1)i=g(i,a[o]);var s=new N({props:i});return{c(){s.$$.fragment.c()},l(e){s.$$.fragment.l(e)},m(e,a){m(s,e,a),t=!0},p(e,t){var i=e.projects?d(a,[t.projectData]):{};s.$set(i)},i(e){t||(s.$$.fragment.i(e),t=!0)},o(e){s.$$.fragment.o(e),t=!1},d(e){s.$destroy(e)}}}function D(e){for(var t,a,p,u,m,d,g,w,j=e.projects,N=[],D=0;D<j.length;D+=1)N[D]=A($(e,j,D));function E(e,t,a){N[e]&&(t&&y(()=>{N[e].d(t),N[e]=null}),N[e].o(a))}return{c(){t=o(),a=i("div"),p=i("div"),u=i("h1"),m=s("Projects"),d=o(),g=i("div");for(var e=0;e<N.length;e+=1)N[e].c();this.h()},l(e){t=l(e,"\r\n\r\n"),a=n(e,"DIV",{class:!0},!1);var i=r(a);p=n(i,"DIV",{class:!0},!1);var o=r(p);u=n(o,"H1",{class:!0},!1);var s=r(u);m=l(s,"Projects"),s.forEach(c),o.forEach(c),d=l(i,"\r\n  "),g=n(i,"DIV",{class:!0},!1);for(var f=r(g),h=0;h<N.length;h+=1)N[h].l(f);f.forEach(c),i.forEach(c),this.h()},h(){document.title="Projects - Vikbert",u.className="svelte-14oof59",p.className="centered-xy my-2",g.className="projects svelte-14oof59",a.className="container svelte-14oof59"},m(e,i){f(e,t,i),f(e,a,i),h(a,p),h(p,u),h(u,m),h(a,d),h(a,g);for(var o=0;o<N.length;o+=1)N[o].m(g,null);w=!0},p(e,t){if(e.projects){j=t.projects;for(var a=0;a<j.length;a+=1){const i=$(t,j,a);N[a]?(N[a].p(e,i),N[a].i(1)):(N[a]=A(i),N[a].c(),N[a].i(1),N[a].m(g,null))}for(k();a<N.length;a+=1)E(a,1,1);v()}},i(e){if(!w){for(var t=0;t<j.length;t+=1)N[t].i();w=!0}},o(e){N=N.filter(Boolean);for(let e=0;e<N.length;e+=1)E(e,0);w=!1},d(e){e&&(c(t),c(a)),b(N,e)}}}function E(e){return{projects:[{title:"PiXSS",info:"A lightweight css framework for minimalist. Create a wonderful website with minimal utitily class set. Small but good enough.",url:"https://vikbert.github.io/pixss/",icon:'<span class="iconify" data-icon="ion:logo-sass" data-inline="false"></span>'},{title:"FirePoll",info:"A realtime Voting App based on firebase, redux and React: responsive design powered by React Material UI",url:"https://github.com/vikbert/firepoll",icon:'<span class="iconify" data-icon="teenyicons:firebase-outline" data-inline="false"></span>'},{title:"NuTab",info:"Another Chrome extension to increase the productivity with the following features: manage Todos, quick search your bookmarks, add add a text note from everywhere.",url:"https://github.com/vikbert/nutab",icon:'<span class="iconify" data-icon="ant-design:chrome-outlined" data-inline="false"></span>'},{title:"Appikon",info:"A simple mobile app icon generator to save up the time to create the app icon for both native app or web app",url:"https://github.com/vikbert/appikon",icon:'<span class="iconify" data-icon="file-icons:test-react" data-inline="false"></span>'},{title:"YiTab",info:"A Chrome extension to sve up to 100% memory and reduce tab clutter. Close or restore these tabs with just one click.",url:"https://github.com/vikbert/yitab",icon:'<span class="iconify" data-icon="ant-design:chrome-outlined" data-inline="false"></span>'},{title:"My MacOS Dev setup scripts",info:"A couple of shell scripts for setting up the web dev environment in MacOS",url:"https://github.com/vikbert/awesome-macbook-setup",icon:'<span class="iconify" data-icon="carbon:mac-command" data-inline="false"></span>'}]}}export default class extends e{constructor(e){super(),t(this,e,E,D,a,[])}}
