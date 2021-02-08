import{S as e,i as a,s as t,e as s,k as i,p as n,q as o,g as r,o as c,t as l,b as p,d as f,f as m,h as d,l as h,r as u,u as v,v as y,w as b,x as g,y as k,z as j}from"./client.c20f7dee.js";import{H as $}from"./HeroShape.5c825ea7.js";function x(e){var a,t;return{c(){a=s("noscript"),t=s("noscript")},l(e){a=s("noscript"),t=s("noscript")},m(s,n){i(s,a,n),a.insertAdjacentHTML("afterend",e.iconHtml),i(s,t,n)},p(e,s){e.iconHtml&&(n(a,t),a.insertAdjacentHTML("afterend",s.iconHtml))},i:o,o:o,d(e){e&&(n(a,t),r(a),r(t))}}}function w(e,a,t){let{name:s="default"}=a,i="";return e.$set=e=>{"name"in e&&t("name",s=e.name)},e.$$.update=(e={name:1})=>{if(e.name)switch(s){case"react":t("iconHtml",i='<span class="iconify" data-icon="ri:reactjs-line" data-inline="false"></span>');break;case"svelte":t("iconHtml",i='<span class="iconify svelte" data-icon="teenyicons:svelte-outline" data-inline="false"></span>');break;case"vue":t("iconHtml",i='<span class="iconify" data-icon="la:vuejs" data-inline="false"></span>');break;case"typescript":t("iconHtml",i='<span class="iconify" data-icon="mdi:language-typescript" data-inline="false"></span>');break;case"php":t("iconHtml",i='<span class="iconify" data-icon="simple-icons:php" data-inline="false"></span>');break;case"symfony":t("iconHtml",i='<span class="iconify" data-icon="la:symfony" data-inline="false"></span>');break;case"macos":t("iconHtml",i='<span class="iconify" data-icon="wpf:mac-os" data-inline="false"></span>');break;case"cli":t("iconHtml",i='<span class="iconify" data-icon="simple-icons:gnubash" data-inline="false"></span>');break;case"sass":t("iconHtml",i='<span class="iconify" data-icon="cib:sass-alt" data-inline="false"></span>');break;case"material-ui":t("iconHtml",i='<span class="iconify" data-icon="mdi:material-ui" data-inline="false"></span>');break;case"webpack":t("iconHtml",i='<span class="iconify" data-icon="file-icons:webpack-old" data-inline="false"></span>');break;case"webpack":t("iconHtml",i='<span class="iconify" data-icon="mdi:material-ui" data-inline="false"></span>');break;case"rollup":t("iconHtml",i='<span class="iconify" data-icon="mdi:rollupjs" data-inline="false"></span>');break;case"default":t("iconHtml",i='<span class="iconify" data-icon="ant-design:code-sandbox-outlined" data-inline="false"></span>')}},{name:s,iconHtml:i}}class H extends e{constructor(e){super(),a(this,e,w,x,t,["name"])}}function N(e,a,t){const s=Object.create(e);return s.tag=a[t],s}function S(e){var a,t=new H({props:{name:e.tag}});return{c(){t.$$.fragment.c()},l(e){t.$$.fragment.l(e)},m(e,s){c(t,e,s),a=!0},p(e,a){var s={};e.tags&&(s.name=a.tag),t.$set(s)},i(e){a||(t.$$.fragment.i(e),a=!0)},o(e){t.$$.fragment.o(e),a=!1},d(e){t.$destroy(e)}}}function A(e){for(var a,t,n,o,c,k,j,$,x,w,H,A,E,I,D,M,T,V,P,O,C,q,B,L,R,_,z=e.tags,F=[],G=0;G<z.length;G+=1)F[G]=S(N(e,z,G));function U(e,a,t){F[e]&&(a&&g(()=>{F[e].d(a),F[e]=null}),F[e].o(t))}return{c(){a=s("div"),t=s("div"),n=s("div"),o=s("a"),c=s("h4"),k=l(e.title),j=p(),$=s("div"),x=s("span"),w=l("Tags:"),H=p();for(var i=0;i<F.length;i+=1)F[i].c();A=p(),E=s("p"),I=l(e.info),D=p(),M=s("div"),T=s("span"),V=p(),P=s("a"),O=s("span"),C=l(e.repository),B=p(),L=s("span"),R=l("MIT"),this.h()},l(s){a=f(s,"DIV",{class:!0},!1);var i=m(a);t=f(i,"DIV",{class:!0},!1);var l=m(t);n=f(l,"DIV",{class:!0},!1);var p=m(n);o=f(p,"A",{href:!0,target:!0,class:!0},!1);var h=m(o);c=f(h,"H4",{class:!0},!1);var u=m(c);k=d(u,e.title),u.forEach(r),h.forEach(r),p.forEach(r),j=d(l,"\r\n    "),$=f(l,"DIV",{class:!0},!1);var v=m($);x=f(v,"SPAN",{class:!0},!1);var y=m(x);w=d(y,"Tags:"),y.forEach(r),H=d(v,"\r\n      ");for(var b=0;b<F.length;b+=1)F[b].l(v);v.forEach(r),A=d(l,"\r\n    "),E=f(l,"P",{class:!0},!1);var g=m(E);I=d(g,e.info),g.forEach(r),l.forEach(r),D=d(i,"\r\n  "),M=f(i,"DIV",{class:!0},!1);var N=m(M);T=f(N,"SPAN",{class:!0,"data-icon":!0,"data-inline":!0},!1),m(T).forEach(r),V=d(N,"\r\n      "),P=f(N,"A",{href:!0,target:!0,class:!0},!1);var S=m(P);O=f(S,"SPAN",{},!1);var q=m(O);C=d(q,e.repository),q.forEach(r),S.forEach(r),B=d(N,"\r\n    "),L=f(N,"SPAN",{class:!0},!1);var _=m(L);R=d(_,"MIT"),_.forEach(r),N.forEach(r),i.forEach(r),this.h()},h(){c.className="svelte-1crrjjx",o.href=e.demo,o.target="_blank",o.className="svelte-1crrjjx",n.className="headline svelte-1crrjjx",x.className="svelte-1crrjjx",$.className="tags py-1 svelte-1crrjjx",E.className="info svelte-1crrjjx",t.className="content svelte-1crrjjx",T.className="iconify",T.dataset.icon="ant-design:github-filled",T.dataset.inline="false",P.href=q="http://github.com/"+e.repository,P.target="_blank",P.className="svelte-1crrjjx",L.className="licence opacity-75 svelte-1crrjjx",M.className="action px-2 svelte-1crrjjx",a.className="card shadow-lg"},m(e,s){i(e,a,s),h(a,t),h(t,n),h(n,o),h(o,c),h(c,k),h(t,j),h(t,$),h($,x),h(x,w),h($,H);for(var r=0;r<F.length;r+=1)F[r].m($,null);h(t,A),h(t,E),h(E,I),h(a,D),h(a,M),h(M,T),h(M,V),h(M,P),h(P,O),h(O,C),h(M,B),h(M,L),h(L,R),_=!0},p(e,a){if(_&&!e.title||u(k,a.title),_&&!e.demo||(o.href=a.demo),e.tags){z=a.tags;for(var t=0;t<z.length;t+=1){const s=N(a,z,t);F[t]?(F[t].p(e,s),F[t].i(1)):(F[t]=S(s),F[t].c(),F[t].i(1),F[t].m($,null))}for(v();t<F.length;t+=1)U(t,1,1);y()}_&&!e.info||u(I,a.info),_&&!e.repository||u(C,a.repository),_&&!e.repository||q===(q="http://github.com/"+a.repository)||(P.href=q)},i(e){if(!_){for(var a=0;a<z.length;a+=1)F[a].i();_=!0}},o(e){F=F.filter(Boolean);for(let e=0;e<F.length;e+=1)U(e,0);_=!1},d(e){e&&r(a),b(F,e)}}}function E(e,a,t){let{title:s,info:i,demo:n,repository:o,icon:r,tags:c=["react","svelte","vue"]}=a;return e.$set=e=>{"title"in e&&t("title",s=e.title),"info"in e&&t("info",i=e.info),"demo"in e&&t("demo",n=e.demo),"repository"in e&&t("repository",o=e.repository),"icon"in e&&t("icon",r=e.icon),"tags"in e&&t("tags",c=e.tags)},{title:s,info:i,demo:n,repository:o,icon:r,tags:c}}class I extends e{constructor(e){super(),a(this,e,E,A,t,["title","info","demo","repository","icon","tags"])}}function D(e,a,t){const s=Object.create(e);return s.projectData=a[t],s}function M(e){var a,t;return{c(){a=s("h2"),t=l("My prime projects"),this.h()},l(e){a=f(e,"H2",{class:!0},!1);var s=m(a);t=d(s,"My prime projects"),s.forEach(r),this.h()},h(){a.className="opacity-50"},m(e,s){i(e,a,s),h(a,t)},d(e){e&&r(a)}}}function T(e){var a,t,n,o=[e.projectData];let l={};for(var u=0;u<o.length;u+=1)l=j(l,o[u]);var v=new I({props:l});return{c(){a=s("div"),v.$$.fragment.c(),t=p(),this.h()},l(e){a=f(e,"DIV",{class:!0},!1);var s=m(a);v.$$.fragment.l(s),t=d(s,"\r\n      "),s.forEach(r),this.h()},h(){a.className="project"},m(e,s){i(e,a,s),c(v,a,null),h(a,t),n=!0},p(e,a){var t=e.projects?k(o,[a.projectData]):{};v.$set(t)},i(e){n||(v.$$.fragment.i(e),n=!0)},o(e){v.$$.fragment.o(e),n=!1},d(e){e&&r(a),v.$destroy()}}}function V(e){for(var a,t,n,o,l,u,k,j=new $({props:{color:"is-secondary text-centered",$$slots:{default:[M]},$$scope:{ctx:e}}}),x=e.projects,w=[],H=0;H<x.length;H+=1)w[H]=T(D(e,x,H));function N(e,a,t){w[e]&&(a&&g(()=>{w[e].d(a),w[e]=null}),w[e].o(t))}return{c(){a=p(),j.$$.fragment.c(),t=p(),n=s("div"),o=s("div"),l=p(),u=s("div");for(var e=0;e<w.length;e+=1)w[e].c();this.h()},l(e){a=d(e,"\r\n\r\n"),j.$$.fragment.l(e),t=d(e,"\r\n\r\n"),n=f(e,"DIV",{class:!0},!1);var s=m(n);o=f(s,"DIV",{class:!0},!1),m(o).forEach(r),l=d(s,"\r\n  "),u=f(s,"DIV",{class:!0},!1);for(var i=m(u),c=0;c<w.length;c+=1)w[c].l(i);i.forEach(r),s.forEach(r),this.h()},h(){document.title="Projects - Vikbert",o.className="centered-xy my-2",u.className="projects svelte-y5qxe",n.className="container svelte-y5qxe"},m(e,s){i(e,a,s),c(j,e,s),i(e,t,s),i(e,n,s),h(n,o),h(n,l),h(n,u);for(var r=0;r<w.length;r+=1)w[r].m(u,null);k=!0},p(e,a){var t={};if(e.$$scope&&(t.$$scope={changed:e,ctx:a}),j.$set(t),e.projects){x=a.projects;for(var s=0;s<x.length;s+=1){const t=D(a,x,s);w[s]?(w[s].p(e,t),w[s].i(1)):(w[s]=T(t),w[s].c(),w[s].i(1),w[s].m(u,null))}for(v();s<w.length;s+=1)N(s,1,1);y()}},i(e){if(!k){j.$$.fragment.i(e);for(var a=0;a<x.length;a+=1)w[a].i();k=!0}},o(e){j.$$.fragment.o(e),w=w.filter(Boolean);for(let e=0;e<w.length;e+=1)N(e,0);k=!1},d(e){e&&r(a),j.$destroy(e),e&&(r(t),r(n)),b(w,e)}}}function P(e){return{projects:[{title:"PiXSS",info:"A lightweight css framework for minimalist. Create a wonderful website with minimal utitily class set. Small but good enough.",demo:"https://vikbert.github.io/pixss/",repository:"vikbert/pixss",icon:'<span class="iconify" data-icon="ion:logo-sass" data-inline="false"></span>'},{title:"SSOmoc",info:"Single-Sign-On Proof of concept in symfony 5 standard project",demo:"https://github.com/vikbert/ssomoc",repository:"vikbert/ssomoc",icon:'<span class="iconify" data-icon="la:symfony" data-inline="false"></span>'},{title:"FirePoll",info:"A realtime Voting App based on firebase, redux and React: responsive design powered by React Material UI",demo:"https://github.com/vikbert/firepoll",repository:"vikbert/firepoll",icon:'<span class="iconify" data-icon="teenyicons:firebase-outline" data-inline="false"></span>'},{title:"NuTab",info:"Another Chrome extension to increase the productivity with the following features: manage Todos, quick search your bookmarks, add add a text note from everywhere.",demo:"https://github.com/vikbert/nutab",repository:"vikbert/nutab",icon:'<span class="iconify" data-icon="ant-design:chrome-outlined" data-inline="false"></span>'},{title:"Appikon",info:"A simple mobile app icon generator to save up the time to create the app icon for both native app or web app",demo:"https://github.com/vikbert/appikon",repository:"vikbert/appikon",icon:'<span class="iconify" data-icon="ri:reactjs-fill" data-inline="false"></span>'},{title:"YiTab",info:"A Chrome extension to sve up to 100% memory and reduce tab clutter. Close or restore these tabs with just one click.",demo:"https://github.com/vikbert/yitab",repository:"vikbert/yitab",icon:'<span class="iconify" data-icon="ant-design:chrome-outlined" data-inline="false"></span>'},{title:"My MacOS Dev setup scripts",info:"A couple of shell scripts for setting up the web dev environment in MacOS",demo:"https://github.com/vikbert/awesome-macbook-setup",repository:"vikbert/awesome-macbook-setup",icon:'<span class="iconify" data-icon="carbon:mac-command" data-inline="false"></span>'},{title:"NineS",info:"My mini technical notes, build with vue.js and markdown.",demo:"https://vikbert.github.io/nines/",repository:"vikbert/nines",icon:'<span class="iconify" data-icon="logos:markdown" data-inline="false"></span>'},{title:"maskr",info:"A realtime mask radar built with Vue.js for Google Map. The test data is found in internet, and is not real.",demo:"https://github.com/vikbert/maskr/",repository:"vikbert/maskr",icon:'<span class="iconify" data-icon="ri:vuejs-line" data-inline="false"></span>'},{title:"BookStore",info:"BookStore: a experimental app built with Svelte 3 and mocked REST API as I started learning svelte.js",demo:"https://github.com/vikbert/svelete-bookstore",repository:"vikbert/svelete-bookstore",icon:'<span class="iconify" data-icon="teenyicons:svelte-outline" data-inline="false"></span>'},{title:"speedor",info:"Test the internet connection speed and ping speedtest.net from the CLI",demo:"https://github.com/vikbert/speedor",repository:"vikbert/speedor",icon:'<span class="iconify" data-icon="mdi:speedometer-medium" data-inline="false"></span>'},{title:"sf-components",info:"A smart full list of Symfony components for simple search and category.",demo:"https://github.com/vikbert/sf-components",repository:"vikbert/sf-components",icon:'<span class="iconify" data-icon="teenyicons:svelte-outline" data-inline="false"></span>'},{title:"Masanfit",info:"A minimal fitness timer made for interval training.",demo:"https://github.com/vikbert/masanfit",repository:"vikbert/masanfit",icon:'<span class="iconify" data-icon="ion:fitness-outline" data-inline="false"></span>'}]}}export default class extends e{constructor(e){super(),a(this,e,P,V,t,[])}}
