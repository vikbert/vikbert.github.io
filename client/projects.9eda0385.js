import{S as e,i as a,s as t,e as s,g as i,q as n,n as o,d as r,p as c,t as l,a as p,c as f,b as m,f as d,h,r as v,u,v as g,w as b,x as y,y as k,z as $}from"./client.b8549778.js";import{H as w}from"./HeroShape.284a1f6d.js";function H(e){var a,t;return{c(){a=s("noscript"),t=s("noscript")},l(e){a=s("noscript"),t=s("noscript")},m(s,n){i(s,a,n),a.insertAdjacentHTML("afterend",e.iconHtml),i(s,t,n)},p(e,s){e.iconHtml&&(n(a,t),a.insertAdjacentHTML("afterend",s.iconHtml))},i:o,o:o,d(e){e&&(n(a,t),r(a),r(t))}}}function x(e,a,t){let{name:s="default"}=a,i="";return e.$set=e=>{"name"in e&&t("name",s=e.name)},e.$$.update=(e={name:1})=>{if(e.name)switch(s){case"react":t("iconHtml",i='<span class="iconify" data-icon="ri:reactjs-line" data-inline="false"></span>');break;case"svelte":t("iconHtml",i='<span class="iconify svelte" data-icon="teenyicons:svelte-outline" data-inline="false"></span>');break;case"vue":t("iconHtml",i='<span class="iconify" data-icon="la:vuejs" data-inline="false"></span>');break;case"typescript":t("iconHtml",i='<span class="iconify" data-icon="mdi:language-typescript" data-inline="false"></span>');break;case"php":t("iconHtml",i='<span class="iconify" data-icon="simple-icons:php" data-inline="false"></span>');break;case"node":t("iconHtml",i='<span class="iconify" data-icon="bx:bxl-nodejs" data-inline="false"></span>');break;case"weui":t("iconHtml",i='<span class="iconify" data-icon="mdi:wechat" data-inline="false"></span>');break;case"doc":t("iconHtml",i='<span class="iconify" data-icon="teenyicons:doc-outline" data-inline="false"></span>');break;case"symfony":t("iconHtml",i='<span class="iconify" data-icon="mdi:symfony" data-inline="false"></span>');break;case"firebase":t("iconHtml",i='<span class="iconify" data-icon="bx:bxl-firebase" data-inline="false"></span>');break;case"macos":t("iconHtml",i='<span class="iconify" data-icon="wpf:mac-os" data-inline="false"></span>');break;case"cli":t("iconHtml",i='<span class="iconify" data-icon="simple-icons:gnubash" data-inline="false"></span>');break;case"sass":t("iconHtml",i='<span class="iconify" data-icon="cib:sass-alt" data-inline="false"></span>');break;case"html":t("iconHtml",i='<span class="iconify" data-icon="ant-design:html5-outlined" data-inline="false"></span>');break;case"material-ui":t("iconHtml",i='<span class="iconify" data-icon="mdi:material-ui" data-inline="false"></span>');break;case"webpack":t("iconHtml",i='<span class="iconify" data-icon="file-icons:webpack-old" data-inline="false"></span>');break;case"chrome":t("iconHtml",i='<span class="iconify" data-icon="ant-design:chrome-outlined" data-inline="false"></span>');break;case"markdown":t("iconHtml",i='<span class="iconify" data-icon="la:markdown" data-inline="false"></span>');break;case"ios":t("iconHtml",i='<span class="iconify" data-icon="logos:ios" data-inline="false"></span>');break;case"webpack":t("iconHtml",i='<span class="iconify" data-icon="mdi:material-ui" data-inline="false"></span>');break;case"pixss":t("iconHtml",i='<img class="icon pixss" src="pixss.png" width="23" />');break;case"rollup":t("iconHtml",i='<span class="iconify" data-icon="mdi:rollupjs" data-inline="false"></span>');break;case"default":t("iconHtml",i='<span class="iconify" data-icon="ant-design:code-sandbox-outlined" data-inline="false"></span>')}},{name:s,iconHtml:i}}class j extends e{constructor(e){super(),a(this,e,x,H,t,["name"])}}function A(e,a,t){const s=Object.create(e);return s.tag=a[t],s}function N(e){var a,t=new j({props:{name:e.tag}});return{c(){t.$$.fragment.c()},l(e){t.$$.fragment.l(e)},m(e,s){c(t,e,s),a=!0},p(e,a){var s={};e.tags&&(s.name=a.tag),t.$set(s)},i(e){a||(t.$$.fragment.i(e),a=!0)},o(e){t.$$.fragment.o(e),a=!1},d(e){t.$destroy(e)}}}function S(e){for(var a,t,n,o,c,k,$,w,H,x,j,S,E,T,I,D,z,M,V,P,C,O,L,R,q,B,U=e.tags,_=[],F=0;F<U.length;F+=1)_[F]=N(A(e,U,F));function G(e,a,t){_[e]&&(a&&y(()=>{_[e].d(a),_[e]=null}),_[e].o(t))}return{c(){a=s("div"),t=s("div"),n=s("div"),o=s("a"),c=s("h4"),k=l(e.title),$=p(),w=s("div"),H=s("span"),x=l("Tags:"),j=p();for(var i=0;i<_.length;i+=1)_[i].c();S=p(),E=s("p"),T=l(e.info),I=p(),D=s("div"),z=s("span"),M=p(),V=s("a"),P=s("span"),C=l(e.repository),L=p(),R=s("span"),q=l("MIT"),this.h()},l(s){a=f(s,"DIV",{class:!0},!1);var i=m(a);t=f(i,"DIV",{class:!0},!1);var l=m(t);n=f(l,"DIV",{class:!0},!1);var p=m(n);o=f(p,"A",{href:!0,target:!0,class:!0},!1);var h=m(o);c=f(h,"H4",{class:!0},!1);var v=m(c);k=d(v,e.title),v.forEach(r),h.forEach(r),p.forEach(r),$=d(l,"\n    "),w=f(l,"DIV",{class:!0},!1);var u=m(w);H=f(u,"SPAN",{class:!0},!1);var g=m(H);x=d(g,"Tags:"),g.forEach(r),j=d(u,"\n      ");for(var b=0;b<_.length;b+=1)_[b].l(u);u.forEach(r),S=d(l,"\n    "),E=f(l,"P",{class:!0},!1);var y=m(E);T=d(y,e.info),y.forEach(r),l.forEach(r),I=d(i,"\n  "),D=f(i,"DIV",{class:!0},!1);var A=m(D);z=f(A,"SPAN",{class:!0,"data-icon":!0,"data-inline":!0},!1),m(z).forEach(r),M=d(A,"\n    "),V=f(A,"A",{href:!0,target:!0,class:!0},!1);var N=m(V);P=f(N,"SPAN",{},!1);var O=m(P);C=d(O,e.repository),O.forEach(r),N.forEach(r),L=d(A,"\n    "),R=f(A,"SPAN",{class:!0},!1);var B=m(R);q=d(B,"MIT"),B.forEach(r),A.forEach(r),i.forEach(r),this.h()},h(){c.className="svelte-1f00zff",o.href=e.demo,o.target="_blank",o.className="svelte-1f00zff",n.className="headline svelte-1f00zff",H.className="svelte-1f00zff",w.className="tags py-1 svelte-1f00zff",E.className="info svelte-1f00zff",t.className="content svelte-1f00zff",z.className="iconify",z.dataset.icon="ant-design:github-filled",z.dataset.inline="false",V.href=O="http://github.com/"+e.repository,V.target="_blank",V.className="svelte-1f00zff",R.className="licence opacity-75 svelte-1f00zff",D.className="action px-2 svelte-1f00zff",a.className="card shadow-lg"},m(e,s){i(e,a,s),h(a,t),h(t,n),h(n,o),h(o,c),h(c,k),h(t,$),h(t,w),h(w,H),h(H,x),h(w,j);for(var r=0;r<_.length;r+=1)_[r].m(w,null);h(t,S),h(t,E),h(E,T),h(a,I),h(a,D),h(D,z),h(D,M),h(D,V),h(V,P),h(P,C),h(D,L),h(D,R),h(R,q),B=!0},p(e,a){if(B&&!e.title||v(k,a.title),B&&!e.demo||(o.href=a.demo),e.tags){U=a.tags;for(var t=0;t<U.length;t+=1){const s=A(a,U,t);_[t]?(_[t].p(e,s),_[t].i(1)):(_[t]=N(s),_[t].c(),_[t].i(1),_[t].m(w,null))}for(u();t<_.length;t+=1)G(t,1,1);g()}B&&!e.info||v(T,a.info),B&&!e.repository||v(C,a.repository),B&&!e.repository||O===(O="http://github.com/"+a.repository)||(V.href=O)},i(e){if(!B){for(var a=0;a<U.length;a+=1)_[a].i();B=!0}},o(e){_=_.filter(Boolean);for(let e=0;e<_.length;e+=1)G(e,0);B=!1},d(e){e&&r(a),b(_,e)}}}function E(e,a,t){let{title:s,info:i,demo:n,repository:o,icon:r,tags:c=["react","svelte","vue"]}=a;return e.$set=e=>{"title"in e&&t("title",s=e.title),"info"in e&&t("info",i=e.info),"demo"in e&&t("demo",n=e.demo),"repository"in e&&t("repository",o=e.repository),"icon"in e&&t("icon",r=e.icon),"tags"in e&&t("tags",c=e.tags)},{title:s,info:i,demo:n,repository:o,icon:r,tags:c}}class T extends e{constructor(e){super(),a(this,e,E,S,t,["title","info","demo","repository","icon","tags"])}}function I(e,a,t){const s=Object.create(e);return s.projectData=a[t],s}function D(e){var a,t,n,o=[e.projectData];let l={};for(var v=0;v<o.length;v+=1)l=$(l,o[v]);var u=new T({props:l});return{c(){a=s("div"),u.$$.fragment.c(),t=p(),this.h()},l(e){a=f(e,"DIV",{class:!0},!1);var s=m(a);u.$$.fragment.l(s),t=d(s,"\n      "),s.forEach(r),this.h()},h(){a.className="item"},m(e,s){i(e,a,s),c(u,a,null),h(a,t),n=!0},p(e,a){var t=e.projects?k(o,[a.projectData]):{};u.$set(t)},i(e){n||(u.$$.fragment.i(e),n=!0)},o(e){u.$$.fragment.o(e),n=!1},d(e){e&&r(a),u.$destroy()}}}function z(e){for(var a,t,n,o,c,l=e.projects,v=[],k=0;k<l.length;k+=1)v[k]=D(I(e,l,k));function $(e,a,t){v[e]&&(a&&y(()=>{v[e].d(a),v[e]=null}),v[e].o(t))}return{c(){a=s("div"),t=s("div"),n=p(),o=s("div");for(var e=0;e<v.length;e+=1)v[e].c();this.h()},l(e){a=f(e,"DIV",{class:!0},!1);var s=m(a);t=f(s,"DIV",{class:!0},!1),m(t).forEach(r),n=d(s,"\n  "),o=f(s,"DIV",{class:!0},!1);for(var i=m(o),c=0;c<v.length;c+=1)v[c].l(i);i.forEach(r),s.forEach(r),this.h()},h(){t.className="centered-xy my-2",o.className="items svelte-1qj0i7w",a.className="container svelte-1qj0i7w"},m(e,s){i(e,a,s),h(a,t),h(a,n),h(a,o);for(var r=0;r<v.length;r+=1)v[r].m(o,null);c=!0},p(e,a){if(e.projects){l=a.projects;for(var t=0;t<l.length;t+=1){const s=I(a,l,t);v[t]?(v[t].p(e,s),v[t].i(1)):(v[t]=D(s),v[t].c(),v[t].i(1),v[t].m(o,null))}for(u();t<v.length;t+=1)$(t,1,1);g()}},i(e){if(!c){for(var a=0;a<l.length;a+=1)v[a].i();c=!0}},o(e){v=v.filter(Boolean);for(let e=0;e<v.length;e+=1)$(e,0);c=!1},d(e){e&&r(a),b(v,e)}}}function M(e){return{projects:[{title:"PiXSS",info:"A lightweight css framework for minimalist. Create a wonderful website with minimal utitily class set. Small but good enough.",demo:"https://vikbert.github.io/pixss/",repository:"vikbert/pixss",tags:["sass","html","svelte","vue","pixss"]},{title:"SSOmoc",info:"A Oauth2 based Single-Sign-On Proof of concept in symfony 5 standard project",demo:"https://github.com/vikbert/ssomoc",repository:"vikbert/ssomoc",tags:["symfony","php","pixss"]},{title:"FirePoll",info:"A realtime Voting App based on firebase, redux and React: responsive design powered by React Material UI",demo:"https://firepoll.netlify.app/",repository:"vikbert/firepoll",tags:["react","material-ui","firebase"]},{title:"NuTab",info:"Another Chrome extension to increase the productivity with the following features: manage Todos, quick search your bookmarks, add add a text note from everywhere.",demo:"https://github.com/vikbert/nutab",repository:"vikbert/nutab",tags:["react","chrome"]},{title:"Appikon",info:"A simple mobile app icon generator to save up the time to create the app icon for both native app or web app",demo:"https://appikon.netlify.app/",repository:"vikbert/appikon",tags:["react","ios"]},{title:"YiTab",info:"A Chrome extension to sve up to 100% memory and reduce tab clutter. Close or restore these tabs with just one click.",demo:"https://github.com/vikbert/yitab",repository:"vikbert/yitab",tags:["react","typescript"]},{title:"MacOS setup scripts",info:"A couple of shell scripts for setting up the web dev environment in MacOS",demo:"https://github.com/vikbert/awesome-macbook-setup",repository:"vikbert/macbook-setup",tags:["macos","cli"]},{title:"NineS",info:"My mini technical notes, build with vue.js and markdown.",demo:"https://vikbert.github.io/nines/",repository:"vikbert/nines",tags:["vue","doc","markdown","pixss"]},{title:"maskr",info:"A realtime mask radar built with Vue.js for Google Map. The test data is found in internet, and is not real.",demo:"https://maskr.xzhou.vercel.app/",repository:"vikbert/maskr",tags:["vue","sass"]},{title:"BookStore",info:"BookStore: a svelte.js app built with Svelte 3 and mocked REST API as I started learning svelte.js",demo:"https://svelete-bookstore.vercel.app",repository:"vikbert/svelete-bookstore",tags:["svelte","pixss"]},{title:"speedor",info:"Test the internet connection speed and ping speedtest.net from the CLI",demo:"https://github.com/vikbert/speedor",repository:"vikbert/speedor",tags:["cli","react","node"]},{title:"sf-components",info:"A smart full list of Symfony components for simple search and category.",demo:"https://sf-components.vercel.app/",repository:"vikbert/sf-components",tags:["symfony","typescript","svelte","pixss","doc"]},{title:"Masanfit",info:"A minimal fitness timer made for interval training.",demo:"https://masanfit.netlify.app/",repository:"vikbert/masanfit",tags:["react","weui","sass"]},{title:"LifeCalender-ts-svelte",info:"A life calender inspired by Tim Uraban TED talk: Svelte-Typescript version",demo:"https://lifecalender.vercel.app/",repository:"vikbert/lifecalender-ts",tags:["svelte","typescript","pixss"]},{title:"LifeCalender React",info:"A life calender inspired by Tim Uraban TED talk. React.js version",demo:"https://lifecalendar.netlify.app/",repository:"vikbert/lifecalendar",tags:["react","material-ui"]}]}}class V extends e{constructor(e){super(),a(this,e,M,z,t,[])}}function P(e){var a,t;return{c(){a=s("h2"),t=l("My prime projects"),this.h()},l(e){a=f(e,"H2",{class:!0},!1);var s=m(a);t=d(s,"My prime projects"),s.forEach(r),this.h()},h(){a.className="opacity-50"},m(e,s){i(e,a,s),h(a,t)},d(e){e&&r(a)}}}function C(e){var a,t,s,n,o=new w({props:{color:"is-secondary text-centered",$$slots:{default:[P]},$$scope:{ctx:e}}}),f=new V({});return{c(){a=p(),o.$$.fragment.c(),t=p(),f.$$.fragment.c(),s=l(">"),this.h()},l(e){a=d(e,"\n\n"),o.$$.fragment.l(e),t=d(e,"\n\n"),f.$$.fragment.l(e),s=d(e,">"),this.h()},h(){document.title="Projects - Vikbert"},m(e,r){i(e,a,r),c(o,e,r),i(e,t,r),c(f,e,r),i(e,s,r),n=!0},p(e,a){var t={};e.$$scope&&(t.$$scope={changed:e,ctx:a}),o.$set(t)},i(e){n||(o.$$.fragment.i(e),f.$$.fragment.i(e),n=!0)},o(e){o.$$.fragment.o(e),f.$$.fragment.o(e),n=!1},d(e){e&&r(a),o.$destroy(e),e&&r(t),f.$destroy(e),e&&r(s)}}}export default class extends e{constructor(e){super(),a(this,e,null,C,t,[])}}
