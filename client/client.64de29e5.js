function e(){}function t(e,t){for(const n in t)e[n]=t[n];return e}function n(e){return e()}function r(){return Object.create(null)}function s(e){e.forEach(n)}function o(e){return"function"==typeof e}function a(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function c(e,n,r){return e[1]?t({},t(n.$$scope.ctx,e[1](r?r(n):{}))):n.$$scope.ctx}function i(e,t){e.appendChild(t)}function l(e,t,n){e.insertBefore(t,n||null)}function u(e){e.parentNode.removeChild(e)}function f(e){for(;e.nextSibling;)e.parentNode.removeChild(e.nextSibling)}function p(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function m(e){return document.createElement(e)}function h(e){return document.createTextNode(e)}function d(){return h(" ")}function g(){return h("")}function $(e,t,n){null==n?e.removeAttribute(t):e.setAttribute(t,n)}function v(e){return Array.from(e.childNodes)}function y(e,t,n,r){for(let r=0;r<e.length;r+=1){const s=e[r];if(s.nodeName===t){for(let e=0;e<s.attributes.length;e+=1){const t=s.attributes[e];n[t.name]||s.removeAttribute(t.name)}return e.splice(r,1)[0]}}return r?function(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}(t):m(t)}function b(e,t){for(let n=0;n<e.length;n+=1){const r=e[n];if(3===r.nodeType)return r.data=t,e.splice(n,1)[0]}return h(t)}function w(e,t){t=""+t,e.data!==t&&(e.data=t)}function E(e,t,n){e.classList[n?"add":"remove"](t)}let _;function x(e){_=e}function S(){if(!_)throw new Error("Function called outside component initialization");return _}const N=[],A=Promise.resolve();let j=!1;const P=[],R=[],L=[];function C(e){R.push(e)}function q(){const e=new Set;do{for(;N.length;){const e=N.shift();x(e),k(e.$$)}for(;P.length;)P.shift()();for(;R.length;){const t=R.pop();e.has(t)||(t(),e.add(t))}}while(N.length);for(;L.length;)L.pop()();j=!1}function k(e){e.fragment&&(e.update(e.dirty),s(e.before_render),e.fragment.p(e.dirty,e.ctx),e.dirty=null,e.after_render.forEach(C))}let O;function U(){O={remaining:0,callbacks:[]}}function I(){O.remaining||s(O.callbacks)}function D(e){O.callbacks.push(e)}function B(e,t){const n={},r={},s={$$scope:1};let o=e.length;for(;o--;){const a=e[o],c=t[o];if(c){for(const e in a)e in c||(r[e]=1);for(const e in c)s[e]||(n[e]=c[e],s[e]=1);e[o]=c}else for(const e in a)s[e]=1}for(const e in r)e in n||(n[e]=void 0);return n}function H(e,t,r){const{fragment:a,on_mount:c,on_destroy:i,after_render:l}=e.$$;a.m(t,r),C(()=>{const t=c.map(n).filter(o);i?i.push(...t):s(t),e.$$.on_mount=[]}),l.forEach(C)}function V(e,t){e.$$.dirty||(N.push(e),j||(j=!0,A.then(q)),e.$$.dirty=r()),e.$$.dirty[t]=!0}function T(t,n,o,a,c,i){const l=_;x(t);const u=n.props||{},f=t.$$={fragment:null,ctx:null,props:i,update:e,not_equal:c,bound:r(),on_mount:[],on_destroy:[],before_render:[],after_render:[],context:new Map(l?l.$$.context:[]),callbacks:r(),dirty:null};let p=!1;f.ctx=o?o(t,u,(e,n)=>{f.ctx&&c(f.ctx[e],f.ctx[e]=n)&&(f.bound[e]&&f.bound[e](n),p&&V(t,e))}):u,f.update(),p=!0,s(f.before_render),f.fragment=a(f.ctx),n.target&&(n.hydrate?f.fragment.l(v(n.target)):f.fragment.c(),n.intro&&t.$$.fragment.i&&t.$$.fragment.i(),H(t,n.target,n.anchor),q()),x(l)}class J{$destroy(){var t,n;n=!0,(t=this).$$&&(s(t.$$.on_destroy),t.$$.fragment.d(n),t.$$.on_destroy=t.$$.fragment=null,t.$$.ctx={}),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(){}}function K(t,n=e){let r;const s=[];function o(e){if(a(t,e)){if(t=e,!r)return;s.forEach(e=>e[1]()),s.forEach(e=>e[0](t))}}return{set:o,update:function(e){o(e(t))},subscribe:function(a,c=e){const i=[a,c];return s.push(i),1===s.length&&(r=n(o)||e),a(t),()=>{const e=s.indexOf(i);-1!==e&&s.splice(e,1),0===s.length&&r()}}}}const M={},G=()=>({});var Y,z;(function(e){
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
!function(){var t={}.hasOwnProperty;function n(){for(var e=[],r=0;r<arguments.length;r++){var s=arguments[r];if(s){var o=typeof s;if("string"===o||"number"===o)e.push(s);else if(Array.isArray(s)&&s.length){var a=n.apply(null,s);a&&e.push(a)}else if("object"===o)for(var c in s)t.call(s,c)&&s[c]&&e.push(c)}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):window.classNames=n}()})(z={path:Y,exports:{},require:function(e,t){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==t&&z.path)}},z.exports),z.exports;function F(t){var n,r,s,o,a,c,f,p,g,$,w,_,x,S;return{c(){n=m("ul"),r=m("li"),s=m("a"),o=h("About"),c=d(),f=m("li"),p=m("a"),g=h("Projects"),w=d(),_=m("li"),x=m("a"),S=h("Blog"),this.h()},l(e){var t=v(n=y(e,"UL",{},!1)),a=v(r=y(t,"LI",{},!1)),i=v(s=y(a,"A",{class:!0,href:!0},!1));o=b(i,"About"),i.forEach(u),a.forEach(u),c=b(t,"\r\n  ");var l=v(f=y(t,"LI",{},!1)),m=v(p=y(l,"A",{class:!0,href:!0},!1));g=b(m,"Projects"),m.forEach(u),l.forEach(u),w=b(t,"\r\n  ");var h=v(_=y(t,"LI",{},!1)),d=v(x=y(h,"A",{rel:!0,href:!0,class:!0},!1));S=b(d,"Blog"),d.forEach(u),h.forEach(u),t.forEach(u),this.h()},h(){s.className=a=(void 0===t.segment?"selected":"")+" svelte-11ii0ww",s.href=".",p.className=$=("projects"===t.segment?"selected":"")+" svelte-11ii0ww",p.href="projects",x.rel="prefetch",x.href="blog",x.className="svelte-11ii0ww",E(x,"selected","blog"===t.segment)},m(e,t){l(e,n,t),i(n,r),i(r,s),i(s,o),i(n,c),i(n,f),i(f,p),i(p,g),i(n,w),i(n,_),i(_,x),i(x,S)},p(e,t){e.segment&&a!==(a=(void 0===t.segment?"selected":"")+" svelte-11ii0ww")&&(s.className=a),e.segment&&$!==($=("projects"===t.segment?"selected":"")+" svelte-11ii0ww")&&(p.className=$),e.segment&&E(x,"selected","blog"===t.segment)},i:e,o:e,d(e){e&&u(n)}}}function W(e,t,n){let{segment:r}=t;return e.$set=e=>{"segment"in e&&n("segment",r=e.segment)},{segment:r}}class X extends J{constructor(e){super(),T(this,e,W,F,a,["segment"])}}function Q(e){var t,n,r,s,o,a,c,f=new X({props:{segment:e.segment}});return{c(){t=m("header"),n=m("nav"),r=m("div"),s=m("a"),o=m("img"),a=d(),f.$$.fragment.c(),this.h()},l(e){var c=v(t=y(e,"HEADER",{},!1)),i=v(n=y(c,"NAV",{class:!0},!1)),l=v(r=y(i,"DIV",{class:!0},!1)),p=v(s=y(l,"A",{href:!0},!1));v(o=y(p,"IMG",{alt:!0,src:!0,width:!0,class:!0},!1)).forEach(u),p.forEach(u),a=b(l,"\n      "),f.$$.fragment.l(l),l.forEach(u),i.forEach(u),c.forEach(u),this.h()},h(){o.alt="Sapper",o.src="vikbert.svg",o.width="30",o.className="svelte-xwy4nq",s.href="/",r.className="container space-between",n.className="topbar"},m(e,u){l(e,t,u),i(t,n),i(n,r),i(r,s),i(s,o),i(r,a),H(f,r,null),c=!0},p(e,t){var n={};e.segment&&(n.segment=t.segment),f.$set(n)},i(e){c||(f.$$.fragment.i(e),c=!0)},o(e){f.$$.fragment.o(e),c=!1},d(e){e&&u(t),f.$destroy()}}}function Z(e,t,n){let{segment:r}=t;return e.$set=e=>{"segment"in e&&n("segment",r=e.segment)},{segment:r}}class ee extends J{constructor(e){super(),T(this,e,Z,Q,a,["segment"])}}function te(e){var n,r,s,o,a=new ee({props:{segment:e.segment}});const f=e.$$slots.default,p=function(e,t,n){if(e){const r=c(e,t,n);return e[0](r)}}(f,e,null);return{c(){n=m("div"),a.$$.fragment.c(),r=d(),s=m("main"),p&&p.c(),this.h()},l(e){var t=v(n=y(e,"DIV",{class:!0},!1));a.$$.fragment.l(t),r=b(t,"\n  ");var o=v(s=y(t,"MAIN",{class:!0},!1));p&&p.l(o),o.forEach(u),t.forEach(u),this.h()},h(){s.className="main",n.className="layout"},m(e,t){l(e,n,t),H(a,n,null),i(n,r),i(n,s),p&&p.m(s,null),o=!0},p(e,n){var r={};e.segment&&(r.segment=n.segment),a.$set(r),p&&p.p&&e.$$scope&&p.p(function(e,n,r,s){return e[1]?t({},t(n.$$scope.changed||{},e[1](s?s(r):{}))):n.$$scope.changed||{}}(f,n,e,null),c(f,n,null))},i(e){o||(a.$$.fragment.i(e),p&&p.i&&p.i(e),o=!0)},o(e){a.$$.fragment.o(e),p&&p.o&&p.o(e),o=!1},d(e){e&&u(n),a.$destroy(),p&&p.d(e)}}}function ne(e,t,n){let{segment:r}=t,{$$slots:s={},$$scope:o}=t;return e.$set=e=>{"segment"in e&&n("segment",r=e.segment),"$$scope"in e&&n("$$scope",o=e.$$scope)},{segment:r,$$slots:s,$$scope:o}}class re extends J{constructor(e){super(),T(this,e,ne,te,a,["segment"])}}function se(e){var t,n,r=e.error.stack;return{c(){t=m("pre"),n=h(r)},l(e){var s=v(t=y(e,"PRE",{},!1));n=b(s,r),s.forEach(u)},m(e,r){l(e,t,r),i(t,n)},p(e,t){e.error&&r!==(r=t.error.stack)&&w(n,r)},d(e){e&&u(t)}}}function oe(t){var n,r,s,o,a,c,f,p,$,E=t.error.message;document.title=n=t.status;var _=t.dev&&t.error.stack&&se(t);return{c(){r=d(),s=m("h1"),o=h(t.status),a=d(),c=m("p"),f=h(E),p=d(),_&&_.c(),$=g(),this.h()},l(e){r=b(e,"\n\n");var n=v(s=y(e,"H1",{class:!0},!1));o=b(n,t.status),n.forEach(u),a=b(e,"\n\n");var i=v(c=y(e,"P",{class:!0},!1));f=b(i,E),i.forEach(u),p=b(e,"\n\n"),_&&_.l(e),$=g(),this.h()},h(){s.className="svelte-17w3omn",c.className="svelte-17w3omn"},m(e,t){l(e,r,t),l(e,s,t),i(s,o),l(e,a,t),l(e,c,t),i(c,f),l(e,p,t),_&&_.m(e,t),l(e,$,t)},p(e,t){e.status&&n!==(n=t.status)&&(document.title=n),e.status&&w(o,t.status),e.error&&E!==(E=t.error.message)&&w(f,E),t.dev&&t.error.stack?_?_.p(e,t):((_=se(t)).c(),_.m($.parentNode,$)):_&&(_.d(1),_=null)},i:e,o:e,d(e){e&&(u(r),u(s),u(a),u(c),u(p)),_&&_.d(e),e&&u($)}}}function ae(e,t,n){let{status:r,error:s}=t;return e.$set=e=>{"status"in e&&n("status",r=e.status),"error"in e&&n("error",s=e.error)},{status:r,error:s,dev:false}}class ce extends J{constructor(e){super(),T(this,e,ae,oe,a,["status","error"])}}function ie(e){var n,r,s=[e.level1.props],o=e.level1.component;function a(e){let n={};for(var r=0;r<s.length;r+=1)n=t(n,s[r]);return{props:n}}if(o)var c=new o(a());return{c(){c&&c.$$.fragment.c(),n=g()},l(e){c&&c.$$.fragment.l(e),n=g()},m(e,t){c&&H(c,e,t),l(e,n,t),r=!0},p(e,t){var r=e.level1?B(s,[t.level1.props]):{};if(o!==(o=t.level1.component)){if(c){U();const e=c;D(()=>{e.$destroy()}),e.$$.fragment.o(1),I()}o?((c=new o(a())).$$.fragment.c(),c.$$.fragment.i(1),H(c,n.parentNode,n)):c=null}else o&&c.$set(r)},i(e){r||(c&&c.$$.fragment.i(e),r=!0)},o(e){c&&c.$$.fragment.o(e),r=!1},d(e){e&&u(n),c&&c.$destroy(e)}}}function le(e){var t,n=new ce({props:{error:e.error,status:e.status}});return{c(){n.$$.fragment.c()},l(e){n.$$.fragment.l(e)},m(e,r){H(n,e,r),t=!0},p(e,t){var r={};e.error&&(r.error=t.error),e.status&&(r.status=t.status),n.$set(r)},i(e){t||(n.$$.fragment.i(e),t=!0)},o(e){n.$$.fragment.o(e),t=!1},d(e){n.$destroy(e)}}}function ue(e){var t,n,r,s,o=[le,ie],a=[];function c(e){return e.error?0:1}return t=c(e),n=a[t]=o[t](e),{c(){n.c(),r=g()},l(e){n.l(e),r=g()},m(e,n){a[t].m(e,n),l(e,r,n),s=!0},p(e,s){var i=t;(t=c(s))===i?a[t].p(e,s):(U(),D(()=>{a[i].d(1),a[i]=null}),n.o(1),I(),(n=a[t])||(n=a[t]=o[t](s)).c(),n.i(1),n.m(r.parentNode,r))},i(e){s||(n&&n.i(),s=!0)},o(e){n&&n.o(),s=!1},d(e){a[t].d(e),e&&u(r)}}}function fe(e){var n,r=[{segment:e.segments[0]},e.level0.props];let s={$$slots:{default:[ue]},$$scope:{ctx:e}};for(var o=0;o<r.length;o+=1)s=t(s,r[o]);var a=new re({props:s});return{c(){a.$$.fragment.c()},l(e){a.$$.fragment.l(e)},m(e,t){H(a,e,t),n=!0},p(e,t){var n=e.segments||e.level0?B(r,[e.segments&&{segment:t.segments[0]},e.level0&&t.level0.props]):{};(e.$$scope||e.error||e.status||e.level1)&&(n.$$scope={changed:e,ctx:t}),a.$set(n)},i(e){n||(a.$$.fragment.i(e),n=!0)},o(e){a.$$.fragment.o(e),n=!1},d(e){a.$destroy(e)}}}function pe(e,t,n){let{stores:r,error:s,status:o,segments:a,level0:c,level1:i=null,notify:l}=t;var u,f;return function(e){S().$$.after_render.push(e)}(l),u=M,f=r,S().$$.context.set(u,f),e.$set=e=>{"stores"in e&&n("stores",r=e.stores),"error"in e&&n("error",s=e.error),"status"in e&&n("status",o=e.status),"segments"in e&&n("segments",a=e.segments),"level0"in e&&n("level0",c=e.level0),"level1"in e&&n("level1",i=e.level1),"notify"in e&&n("notify",l=e.notify)},{stores:r,error:s,status:o,segments:a,level0:c,level1:i,notify:l}}class me extends J{constructor(e){super(),T(this,e,pe,fe,a,["stores","error","status","segments","level0","level1","notify"])}}const he=[/^\/blog\.json$/,/^\/blog\/posts\/semicolon-always\/?$/,/^\/blog\/posts\/symfony-sso\/?$/,/^\/blog\/([^\/]+?)\.json$/],de=[{js:()=>import("./index.754bd075.js"),css:[]},{js:()=>import("./projects.f884a651.js"),css:[]},{js:()=>import("./index.3a81a0cf.js"),css:[]},{js:()=>import("./[slug].eff06461.js"),css:[]}],ge=($e=decodeURIComponent,[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/projects\/?$/,parts:[{i:1}]},{pattern:/^\/blog\/?$/,parts:[{i:2}]},{pattern:/^\/blog\/([^\/]+?)\/?$/,parts:[null,{i:3,params:e=>({slug:$e(e[1])})}]}]);var $e;const ve="undefined"!=typeof __SAPPER__&&__SAPPER__;let ye,be,we,Ee=!1,_e=[],xe="{}";const Se={page:function(e){const t=K(e);let n=!0;return{notify:function(){n=!0,t.update(e=>e)},set:function(e){n=!1,t.set(e)},subscribe:function(e){let r;return t.subscribe(t=>{(void 0===r||n&&t!==r)&&e(r=t)})}}}({}),preloading:K(null),session:K(ve&&ve.session)};let Ne,Ae;Se.session.subscribe(async e=>{if(Ne=e,!Ee)return;Ae=!0;const t=Oe(new URL(location.href)),n=be={},{redirect:r,props:s,branch:o}=await Be(t);n===be&&await De(r,o,s,t.page)});let je,Pe=null;let Re,Le=1;const Ce="undefined"!=typeof history?history:{pushState:(e,t,n)=>{},replaceState:(e,t,n)=>{},scrollRestoration:""},qe={};function ke(e){const t=Object.create(null);return e.length>0&&e.slice(1).split("&").forEach(e=>{let[,n,r=""]=/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(e.replace(/\+/g," ")));"string"==typeof t[n]&&(t[n]=[t[n]]),"object"==typeof t[n]?t[n].push(r):t[n]=r}),t}function Oe(e){if(e.origin!==location.origin)return null;if(!e.pathname.startsWith(ve.baseUrl))return null;let t=e.pathname.slice(ve.baseUrl.length);if(""===t&&(t="/"),!he.some(e=>e.test(t)))for(let n=0;n<ge.length;n+=1){const r=ge[n],s=r.pattern.exec(t);if(s){const n=ke(e.search),o=r.parts[r.parts.length-1],a=o.params?o.params(s):{},c={host:location.host,path:t,query:n,params:a};return{href:e.href,route:r,match:s,page:c}}}}function Ue(){return{x:pageXOffset,y:pageYOffset}}async function Ie(e,t,n,r){if(t)Re=t;else{const e=Ue();qe[Re]=e,t=Re=++Le,qe[Re]=n?e:{x:0,y:0}}Re=t,ye&&Se.preloading.set(!0);const s=Pe&&Pe.href===e.href?Pe.promise:Be(e);Pe=null;const o=be={},{redirect:a,props:c,branch:i}=await s;if(o===be&&(await De(a,i,c,e.page),document.activeElement&&document.activeElement.blur(),!n)){let e=qe[t];if(r){const t=document.getElementById(r.slice(1));t&&(e={x:0,y:t.getBoundingClientRect().top+scrollY})}qe[Re]=e,e&&scrollTo(e.x,e.y)}}async function De(e,t,n,r){if(e)return function(e,t={replaceState:!1}){const n=Oe(new URL(e,document.baseURI));return n?(Ce[t.replaceState?"replaceState":"pushState"]({id:Re},"",e),Ie(n,null).then(()=>{})):(location.href=e,new Promise(e=>{}))}(e.location,{replaceState:!0});if(Se.page.set(r),Se.preloading.set(!1),ye)ye.$set(n);else{n.stores={page:{subscribe:Se.page.subscribe},preloading:{subscribe:Se.preloading.subscribe},session:Se.session},n.level0={props:await we},n.notify=Se.page.notify;const e=document.querySelector("#sapper-head-start"),t=document.querySelector("#sapper-head-end");if(e&&t){for(;e.nextSibling!==t;)Ve(e.nextSibling);Ve(e),Ve(t)}ye=new me({target:je,props:n,hydrate:!0})}_e=t,xe=JSON.stringify(r.query),Ee=!0,Ae=!1}async function Be(e){const{route:t,page:n}=e,r=n.path.split("/").filter(Boolean);let s=null;const o={error:null,status:200,segments:[r[0]]},a={fetch:(e,t)=>fetch(e,t),redirect:(e,t)=>{if(s&&(s.statusCode!==e||s.location!==t))throw new Error("Conflicting redirects");s={statusCode:e,location:t}},error:(e,t)=>{o.error="string"==typeof t?new Error(t):t,o.status=e}};let c;we||(we=ve.preloaded[0]||G.call(a,{host:n.host,path:n.path,query:n.query,params:{}},Ne));let i=1;try{const s=JSON.stringify(n.query),l=t.pattern.exec(n.path);let u=!1;c=await Promise.all(t.parts.map(async(t,c)=>{const f=r[c];if(function(e,t,n,r){if(r!==xe)return!0;const s=_e[e];return!!s&&(t!==s.segment||!(!s.match||JSON.stringify(s.match.slice(1,e+2))===JSON.stringify(n.slice(1,e+2)))||void 0)}(c,f,l,s)&&(u=!0),o.segments[i]=r[c+1],!t)return{segment:f};const p=i++;if(!Ae&&!u&&_e[c]&&_e[c].part===t.i)return _e[c];u=!1;const{default:m,preload:h}=await function(e){const t="string"==typeof e.css?[]:e.css.map(He);return t.unshift(e.js()),Promise.all(t).then(e=>e[0])}(de[t.i]);let d;return d=Ee||!ve.preloaded[c+1]?h?await h.call(a,{host:n.host,path:n.path,query:n.query,params:t.params?t.params(e.match):{}},Ne):{}:ve.preloaded[c+1],o["level"+p]={component:m,props:d,segment:f,match:l,part:t.i}}))}catch(e){o.error=e,o.status=500,c=[]}return{redirect:s,props:o,branch:c}}function He(e){const t="client/"+e;if(!document.querySelector(`link[href="${t}"]`))return new Promise((e,n)=>{const r=document.createElement("link");r.rel="stylesheet",r.href=t,r.onload=()=>e(),r.onerror=n,document.head.appendChild(r)})}function Ve(e){e.parentNode.removeChild(e)}function Te(e){const t=Oe(new URL(e,document.baseURI));if(t)return Pe&&e===Pe.href||function(e,t){Pe={href:e,promise:t}}(e,Be(t)),Pe.promise}let Je;function Ke(e){clearTimeout(Je),Je=setTimeout(()=>{Me(e)},20)}function Me(e){const t=Ye(e.target);t&&"prefetch"===t.rel&&Te(t.href)}function Ge(e){if(1!==function(e){return null===e.which?e.button:e.which}(e))return;if(e.metaKey||e.ctrlKey||e.shiftKey)return;if(e.defaultPrevented)return;const t=Ye(e.target);if(!t)return;if(!t.href)return;const n="object"==typeof t.href&&"SVGAnimatedString"===t.href.constructor.name,r=String(n?t.href.baseVal:t.href);if(r===location.href)return void(location.hash||e.preventDefault());if(t.hasAttribute("download")||"external"===t.getAttribute("rel"))return;if(n?t.target.baseVal:t.target)return;const s=new URL(r);if(s.pathname===location.pathname&&s.search===location.search)return;const o=Oe(s);if(o){Ie(o,null,t.hasAttribute("sapper-noscroll"),s.hash),e.preventDefault(),Ce.pushState({id:Re},"",s.href)}}function Ye(e){for(;e&&"A"!==e.nodeName.toUpperCase();)e=e.parentNode;return e}function ze(e){if(qe[Re]=Ue(),e.state){const t=Oe(new URL(location.href));t?Ie(t,e.state.id):location.href=location.href}else Le=Le+1,function(e){Re=e}(Le),Ce.replaceState({id:Re},"",location.href)}var Fe;Fe={target:document.querySelector("#sapper")},"scrollRestoration"in Ce&&(Ce.scrollRestoration="manual"),addEventListener("beforeunload",()=>{Ce.scrollRestoration="auto"}),addEventListener("load",()=>{Ce.scrollRestoration="manual"}),function(e){je=e}(Fe.target),addEventListener("click",Ge),addEventListener("popstate",ze),addEventListener("touchstart",Me),addEventListener("mousemove",Ke),Promise.resolve().then(()=>{const{hash:e,href:t}=location;Ce.replaceState({id:Le},"",t);const n=new URL(location.href);if(ve.error)return function(e){const{host:t,pathname:n,search:r}=location,{session:s,preloaded:o,status:a,error:c}=ve;we||(we=o&&o[0]),De(null,[],{error:c,status:a,session:s,level0:{props:we},level1:{props:{status:a,error:c},component:ce},segments:o},{host:t,path:n,query:ke(r),params:{}})}();const r=Oe(n);return r?Ie(r,Le,!0,e):void 0});export{J as S,d as a,y as b,b as c,v as d,m as e,u as f,l as g,i as h,T as i,w as j,B as k,I as l,H as m,e as n,p as o,t as p,D as q,U as r,a as s,h as t,$ as u,f as v};
