import{S as e,i as t,s as a,e as s,g as i,q as n,n as o,d as r,p as c,t as l,a as p,c as d,b as f,f as m,h,r as v,u,v as g,w as b,x as y,y as k,z as $}from"./client.841196db.js";import{H as w}from"./HeroShape.c2156774.js";function x(e){var t,a;return{c(){t=s("noscript"),a=s("noscript")},l(e){t=s("noscript"),a=s("noscript")},m(s,n){i(s,t,n),t.insertAdjacentHTML("afterend",e.iconHtml),i(s,a,n)},p(e,s){e.iconHtml&&(n(t,a),t.insertAdjacentHTML("afterend",s.iconHtml))},i:o,o:o,d(e){e&&(n(t,a),r(t),r(a))}}}function H(e,t,a){let{name:s="default"}=t,i="";return e.$set=e=>{"name"in e&&a("name",s=e.name)},e.$$.update=(e={name:1})=>{if(e.name)switch(s){case"react":a("iconHtml",i='<span class="iconify" data-icon="ri:reactjs-line" data-inline="false"></span>');break;case"redux":a("iconHtml",i='<span class="iconify" data-icon="cib:redux" data-inline="false"></span>');break;case"svelte":a("iconHtml",i='<span class="iconify svelte" data-icon="teenyicons:svelte-outline" data-inline="false"></span>');break;case"vue":a("iconHtml",i='<span class="iconify" data-icon="la:vuejs" data-inline="false"></span>');break;case"typescript":a("iconHtml",i='<span class="iconify" data-icon="mdi:language-typescript" data-inline="false"></span>');break;case"php":a("iconHtml",i='<span class="iconify" data-icon="simple-icons:php" data-inline="false"></span>');break;case"node":a("iconHtml",i='<span class="iconify" data-icon="bx:bxl-nodejs" data-inline="false"></span>');break;case"weui":a("iconHtml",i='<span class="iconify" data-icon="mdi:wechat" data-inline="false"></span>');break;case"doc":a("iconHtml",i='<span class="iconify" data-icon="teenyicons:doc-outline" data-inline="false"></span>');break;case"symfony":a("iconHtml",i='<span class="iconify" data-icon="mdi:symfony" data-inline="false"></span>');break;case"firebase":a("iconHtml",i='<span class="iconify" data-icon="bx:bxl-firebase" data-inline="false"></span>');break;case"macos":a("iconHtml",i='<span class="iconify" data-icon="wpf:mac-os" data-inline="false"></span>');break;case"cli":a("iconHtml",i='<span class="iconify" data-icon="simple-icons:gnubash" data-inline="false"></span>');break;case"sass":a("iconHtml",i='<span class="iconify" data-icon="cib:sass-alt" data-inline="false"></span>');break;case"html":a("iconHtml",i='<span class="iconify" data-icon="ant-design:html5-outlined" data-inline="false"></span>');break;case"material-ui":a("iconHtml",i='<span class="iconify" data-icon="mdi:material-ui" data-inline="false"></span>');break;case"webpack":a("iconHtml",i='<span class="iconify" data-icon="file-icons:webpack-old" data-inline="false"></span>');break;case"chrome":a("iconHtml",i='<span class="iconify" data-icon="ant-design:chrome-outlined" data-inline="false"></span>');break;case"markdown":a("iconHtml",i='<span class="iconify" data-icon="la:markdown" data-inline="false"></span>');break;case"ios":a("iconHtml",i='<span class="iconify" data-icon="logos:ios" data-inline="false"></span>');break;case"webpack":a("iconHtml",i='<span class="iconify" data-icon="mdi:material-ui" data-inline="false"></span>');break;case"pixss":a("iconHtml",i='<img class="icon pixss" src="pixss.png" width="23" />');break;case"rollup":a("iconHtml",i='<span class="iconify" data-icon="mdi:rollupjs" data-inline="false"></span>');break;case"default":a("iconHtml",i='<span class="iconify" data-icon="ant-design:code-sandbox-outlined" data-inline="false"></span>')}},{name:s,iconHtml:i}}class j extends e{constructor(e){super(),t(this,e,H,x,a,["name"])}}function A(e,t,a){const s=Object.create(e);return s.tag=t[a],s}function S(e){var t,a=new j({props:{name:e.tag}});return{c(){a.$$.fragment.c()},l(e){a.$$.fragment.l(e)},m(e,s){c(a,e,s),t=!0},p(e,t){var s={};e.tags&&(s.name=t.tag),a.$set(s)},i(e){t||(a.$$.fragment.i(e),t=!0)},o(e){a.$$.fragment.o(e),t=!1},d(e){a.$destroy(e)}}}function N(e){for(var t,a,n,o,c,k,$,w,x,H,j,N,T,E,I,D,M,V,O,R,C,P,L,B,U,q,z=e.tags,_=[],F=0;F<z.length;F+=1)_[F]=S(A(e,z,F));function G(e,t,a){_[e]&&(t&&y(()=>{_[e].d(t),_[e]=null}),_[e].o(a))}return{c(){t=s("div"),a=s("div"),n=s("div"),o=s("a"),c=s("h4"),k=l(e.title),$=p(),w=s("div"),x=s("span"),H=l("Tags:"),j=p();for(var i=0;i<_.length;i+=1)_[i].c();N=p(),T=s("p"),E=l(e.info),I=p(),D=s("div"),M=s("span"),V=p(),O=s("a"),R=s("span"),C=l(e.repository),L=p(),B=s("span"),U=l("MIT"),this.h()},l(s){t=d(s,"DIV",{class:!0},!1);var i=f(t);a=d(i,"DIV",{class:!0},!1);var l=f(a);n=d(l,"DIV",{class:!0},!1);var p=f(n);o=d(p,"A",{href:!0,target:!0,class:!0},!1);var h=f(o);c=d(h,"H4",{class:!0},!1);var v=f(c);k=m(v,e.title),v.forEach(r),h.forEach(r),p.forEach(r),$=m(l,"\r\n    "),w=d(l,"DIV",{class:!0},!1);var u=f(w);x=d(u,"SPAN",{class:!0},!1);var g=f(x);H=m(g,"Tags:"),g.forEach(r),j=m(u,"\r\n      ");for(var b=0;b<_.length;b+=1)_[b].l(u);u.forEach(r),N=m(l,"\r\n    "),T=d(l,"P",{class:!0},!1);var y=f(T);E=m(y,e.info),y.forEach(r),l.forEach(r),I=m(i,"\r\n  "),D=d(i,"DIV",{class:!0},!1);var A=f(D);M=d(A,"SPAN",{class:!0,"data-icon":!0,"data-inline":!0},!1),f(M).forEach(r),V=m(A,"\r\n    "),O=d(A,"A",{href:!0,target:!0,class:!0},!1);var S=f(O);R=d(S,"SPAN",{},!1);var P=f(R);C=m(P,e.repository),P.forEach(r),S.forEach(r),L=m(A,"\r\n    "),B=d(A,"SPAN",{class:!0},!1);var q=f(B);U=m(q,"MIT"),q.forEach(r),A.forEach(r),i.forEach(r),this.h()},h(){c.className="svelte-tr9pkd",o.href=e.demo,o.target="_blank",o.className="svelte-tr9pkd",n.className="headline svelte-tr9pkd",x.className="svelte-tr9pkd",w.className="tags py-1 svelte-tr9pkd",T.className="info svelte-tr9pkd",a.className="content svelte-tr9pkd",M.className="iconify",M.dataset.icon="ant-design:github-filled",M.dataset.inline="false",O.href=P="http://github.com/"+e.repository,O.target="_blank",O.className="svelte-tr9pkd",B.className="licence opacity-75 svelte-tr9pkd",D.className="action px-2 svelte-tr9pkd",t.className="card shadow-lg"},m(e,s){i(e,t,s),h(t,a),h(a,n),h(n,o),h(o,c),h(c,k),h(a,$),h(a,w),h(w,x),h(x,H),h(w,j);for(var r=0;r<_.length;r+=1)_[r].m(w,null);h(a,N),h(a,T),h(T,E),h(t,I),h(t,D),h(D,M),h(D,V),h(D,O),h(O,R),h(R,C),h(D,L),h(D,B),h(B,U),q=!0},p(e,t){if(q&&!e.title||v(k,t.title),q&&!e.demo||(o.href=t.demo),e.tags){z=t.tags;for(var a=0;a<z.length;a+=1){const s=A(t,z,a);_[a]?(_[a].p(e,s),_[a].i(1)):(_[a]=S(s),_[a].c(),_[a].i(1),_[a].m(w,null))}for(u();a<_.length;a+=1)G(a,1,1);g()}q&&!e.info||v(E,t.info),q&&!e.repository||v(C,t.repository),q&&!e.repository||P===(P="http://github.com/"+t.repository)||(O.href=P)},i(e){if(!q){for(var t=0;t<z.length;t+=1)_[t].i();q=!0}},o(e){_=_.filter(Boolean);for(let e=0;e<_.length;e+=1)G(e,0);q=!1},d(e){e&&r(t),b(_,e)}}}function T(e,t,a){let{title:s,info:i,demo:n,repository:o,icon:r,tags:c=["react","svelte","vue"]}=t;return e.$set=e=>{"title"in e&&a("title",s=e.title),"info"in e&&a("info",i=e.info),"demo"in e&&a("demo",n=e.demo),"repository"in e&&a("repository",o=e.repository),"icon"in e&&a("icon",r=e.icon),"tags"in e&&a("tags",c=e.tags)},{title:s,info:i,demo:n,repository:o,icon:r,tags:c}}class E extends e{constructor(e){super(),t(this,e,T,N,a,["title","info","demo","repository","icon","tags"])}}function I(e,t,a){const s=Object.create(e);return s.projectData=t[a],s}function D(e){var t,a,n,o=[e.projectData];let l={};for(var v=0;v<o.length;v+=1)l=$(l,o[v]);var u=new E({props:l});return{c(){t=s("div"),u.$$.fragment.c(),a=p(),this.h()},l(e){t=d(e,"DIV",{class:!0},!1);var s=f(t);u.$$.fragment.l(s),a=m(s,"\r\n      "),s.forEach(r),this.h()},h(){t.className="item"},m(e,s){i(e,t,s),c(u,t,null),h(t,a),n=!0},p(e,t){var a=e.projects?k(o,[t.projectData]):{};u.$set(a)},i(e){n||(u.$$.fragment.i(e),n=!0)},o(e){u.$$.fragment.o(e),n=!1},d(e){e&&r(t),u.$destroy()}}}function M(e){for(var t,a,n,o,c,l=e.projects,v=[],k=0;k<l.length;k+=1)v[k]=D(I(e,l,k));function $(e,t,a){v[e]&&(t&&y(()=>{v[e].d(t),v[e]=null}),v[e].o(a))}return{c(){t=s("div"),a=s("div"),n=p(),o=s("div");for(var e=0;e<v.length;e+=1)v[e].c();this.h()},l(e){t=d(e,"DIV",{class:!0},!1);var s=f(t);a=d(s,"DIV",{class:!0},!1),f(a).forEach(r),n=m(s,"\r\n  "),o=d(s,"DIV",{class:!0},!1);for(var i=f(o),c=0;c<v.length;c+=1)v[c].l(i);i.forEach(r),s.forEach(r),this.h()},h(){a.className="centered-xy my-2",o.className="items svelte-7rkjnt",t.className="container svelte-7rkjnt"},m(e,s){i(e,t,s),h(t,a),h(t,n),h(t,o);for(var r=0;r<v.length;r+=1)v[r].m(o,null);c=!0},p(e,t){if(e.projects){l=t.projects;for(var a=0;a<l.length;a+=1){const s=I(t,l,a);v[a]?(v[a].p(e,s),v[a].i(1)):(v[a]=D(s),v[a].c(),v[a].i(1),v[a].m(o,null))}for(u();a<v.length;a+=1)$(a,1,1);g()}},i(e){if(!c){for(var t=0;t<l.length;t+=1)v[t].i();c=!0}},o(e){v=v.filter(Boolean);for(let e=0;e<v.length;e+=1)$(e,0);c=!1},d(e){e&&r(t),b(v,e)}}}function V(e){return{projects:[{title:"PiXSS",info:"A lightweight css framework for minimalist. Create a wonderful website with minimal utitily class set. Small but good enough.",demo:"https://vikbert.github.io/pixss/",repository:"vikbert/pixss",tags:["sass","html","svelte","vue","pixss"]},{title:"SSOmoc",info:"An Oauth2 based Single-Sign-On Proof Of Concept in symfony 5 standard project",demo:"https://github.com/vikbert/ssomoc",repository:"vikbert/ssomoc",tags:["symfony","php","pixss"]},{title:"FirePoll",info:"A realtime Voting App based on firebase, redux and React: responsive design powered by React Material UI",demo:"https://firepoll.netlify.app/",repository:"vikbert/firepoll",tags:["react","material-ui","firebase"]},{title:"NuTab",info:"Another Chrome extension to increase the productivity with the following features: manage Todos, quick search your bookmarks, add add a text note from everywhere.",demo:"https://github.com/vikbert/nutab",repository:"vikbert/nutab",tags:["react","chrome"]},{title:"Appikon",info:"A simple mobile app icon generator to save up the time to create the app icon for both native app or web app",demo:"https://appikon.netlify.app/",repository:"vikbert/appikon",tags:["react","ios"]},{title:"YiTab",info:"A Chrome extension to sve up to 100% memory and reduce tab clutter. Close or restore these tabs with just one click.",demo:"https://github.com/vikbert/yitab",repository:"vikbert/yitab",tags:["react","typescript"]},{title:"MacOS setup scripts",info:"A couple of shell scripts for setting up the web dev environment in MacOS",demo:"https://github.com/vikbert/awesome-macbook-setup",repository:"vikbert/macbook-setup",tags:["macos","cli"]},{title:"NineS",info:"My mini technical notes, build with vue.js and markdown.",demo:"https://vikbert.github.io/nines/",repository:"vikbert/nines",tags:["vue","doc","markdown","pixss"]},{title:"maskr",info:"A realtime mask radar built with Vue.js for Google Map. The test data is found in internet, and is not real.",demo:"https://maskr.xzhou.vercel.app/",repository:"vikbert/maskr",tags:["vue","sass"]},{title:"BookStore",info:"BookStore: a svelte.js app built with Svelte 3 and mocked REST API as I started learning svelte.js",demo:"https://svelete-bookstore.vercel.app",repository:"vikbert/svelete-bookstore",tags:["svelte","pixss"]},{title:"speedor",info:"Test the internet connection speed and ping speedtest.net from the CLI",demo:"https://github.com/vikbert/speedor",repository:"vikbert/speedor",tags:["cli","react","node"]},{title:"sf-components",info:"A smart full list of Symfony components for simple search and category.",demo:"https://sf-components.vercel.app/",repository:"vikbert/sf-components",tags:["symfony","typescript","svelte","pixss","doc"]},{title:"Masanfit",info:"A minimal fitness timer made for interval training.",demo:"https://masanfit.netlify.app/",repository:"vikbert/masanfit",tags:["react","weui","sass"]},{title:"LifeCalender-ts-svelte",info:"A life calender inspired by Tim Uraban TED talk: Svelte-Typescript version",demo:"https://lifecalender.vercel.app/",repository:"vikbert/lifecalender-ts",tags:["svelte","typescript","pixss"]},{title:"LifeCalender React",info:"A life calender inspired by Tim Uraban TED talk. React.js version",demo:"https://lifecalendar.netlify.app/",repository:"vikbert/lifecalendar",tags:["react","material-ui"]},{title:"Aino React Slide",info:'A react slide animation. It was inspired by the iOS native "notes" app and I tried to simulate with a react demo.',demo:"https://aino.netlify.app/",repository:"vikbert/aino",tags:["react"]},{title:"React Menu Animation",info:"A react mobile menu experiment with elegant animation. Inspired by CSS tutorial on https://www.freecodecamp.org/",demo:"https://haku.netlify.app/",repository:"vikbert",tags:["react","sass"]},{title:"iOS note App react Clone",info:"A react clone for iOS note app by using weui and react.js. It can be used for memory training.",demo:"https://retinder.netlify.app/",repository:"vikbert/retinder",tags:["react","sass"]},{title:"React Todo",info:"A react coding kata to create the todomvc App. This coding kata is based on the todomvc project.",demo:"https://mit-todo-react.netlify.app/",repository:"vikbert/react-MIT-todo",tags:["react"]},{title:"React Todo with redux",info:'Rewrite the todomvc App with "Redux" framework. This coding kata is based on the todomvc project.',demo:"https://mit-todo-react.netlify.app/",repository:"vikbert/redux-mit-todo",tags:["react","redux"]}]}}class O extends e{constructor(e){super(),t(this,e,V,M,a,[])}}function R(e){var t,a;return{c(){t=s("h2"),a=l("My prime projects"),this.h()},l(e){t=d(e,"H2",{class:!0},!1);var s=f(t);a=m(s,"My prime projects"),s.forEach(r),this.h()},h(){t.className="opacity-50"},m(e,s){i(e,t,s),h(t,a)},d(e){e&&r(t)}}}function C(e){var t,a,s,n,o=new w({props:{color:"is-secondary text-centered",$$slots:{default:[R]},$$scope:{ctx:e}}}),d=new O({});return{c(){t=p(),o.$$.fragment.c(),a=p(),d.$$.fragment.c(),s=l(">"),this.h()},l(e){t=m(e,"\r\n\r\n"),o.$$.fragment.l(e),a=m(e,"\r\n\r\n"),d.$$.fragment.l(e),s=m(e,">"),this.h()},h(){document.title="Projects - Vikbert"},m(e,r){i(e,t,r),c(o,e,r),i(e,a,r),c(d,e,r),i(e,s,r),n=!0},p(e,t){var a={};e.$$scope&&(a.$$scope={changed:e,ctx:t}),o.$set(a)},i(e){n||(o.$$.fragment.i(e),d.$$.fragment.i(e),n=!0)},o(e){o.$$.fragment.o(e),d.$$.fragment.o(e),n=!1},d(e){e&&r(t),o.$destroy(e),e&&r(a),d.$destroy(e),e&&r(s)}}}export default class extends e{constructor(e){super(),t(this,e,null,C,a,[])}}