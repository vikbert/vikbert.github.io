function e(){}function t(e,t){for(const n in t)e[n]=t[n];return e}function n(e){return e()}function r(){return Object.create(null)}function s(e){e.forEach(n)}function o(e){return"function"==typeof e}function a(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function c(e,n,r){return e[1]?t({},t(n.$$scope.ctx,e[1](r?r(n):{}))):n.$$scope.ctx}function l(e,t){e.appendChild(t)}function i(e,t,n){e.insertBefore(t,n||null)}function u(e){e.parentNode.removeChild(e)}function f(e){for(;e.nextSibling;)e.parentNode.removeChild(e.nextSibling)}function p(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function m(e){return document.createElement(e)}function h(e){return document.createTextNode(e)}function d(){return h(" ")}function g(){return h("")}function $(e,t,n){null==n?e.removeAttribute(t):e.setAttribute(t,n)}function v(e){return Array.from(e.childNodes)}function b(e,t,n,r){for(let r=0;r<e.length;r+=1){const s=e[r];if(s.nodeName===t){for(let e=0;e<s.attributes.length;e+=1){const t=s.attributes[e];n[t.name]||s.removeAttribute(t.name)}return e.splice(r,1)[0]}}return r?function(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}(t):m(t)}function y(e,t){for(let n=0;n<e.length;n+=1){const r=e[n];if(3===r.nodeType)return r.data=t,e.splice(n,1)[0]}return h(t)}function E(e,t){t=""+t,e.data!==t&&(e.data=t)}let _;function x(e){_=e}function w(){if(!_)throw new Error("Function called outside component initialization");return _}const S=[],N=Promise.resolve();let R=!1;const A=[],P=[],L=[];function C(e){P.push(e)}function j(){const e=new Set;do{for(;S.length;){const e=S.shift();x(e),k(e.$$)}for(;A.length;)A.shift()();for(;P.length;){const t=P.pop();e.has(t)||(t(),e.add(t))}}while(S.length);for(;L.length;)L.pop()();R=!1}function k(e){e.fragment&&(e.update(e.dirty),s(e.before_render),e.fragment.p(e.dirty,e.ctx),e.dirty=null,e.after_render.forEach(C))}let q;function O(){q={remaining:0,callbacks:[]}}function U(){q.remaining||s(q.callbacks)}function I(e){q.callbacks.push(e)}function D(e,t){const n={},r={},s={$$scope:1};let o=e.length;for(;o--;){const a=e[o],c=t[o];if(c){for(const e in a)e in c||(r[e]=1);for(const e in c)s[e]||(n[e]=c[e],s[e]=1);e[o]=c}else for(const e in a)s[e]=1}for(const e in r)e in n||(n[e]=void 0);return n}function H(e,t,r){const{fragment:a,on_mount:c,on_destroy:l,after_render:i}=e.$$;a.m(t,r),C(()=>{const t=c.map(n).filter(o);l?l.push(...t):s(t),e.$$.on_mount=[]}),i.forEach(C)}function V(e,t){e.$$.dirty||(S.push(e),R||(R=!0,N.then(j)),e.$$.dirty=r()),e.$$.dirty[t]=!0}function T(t,n,o,a,c,l){const i=_;x(t);const u=n.props||{},f=t.$$={fragment:null,ctx:null,props:l,update:e,not_equal:c,bound:r(),on_mount:[],on_destroy:[],before_render:[],after_render:[],context:new Map(i?i.$$.context:[]),callbacks:r(),dirty:null};let p=!1;f.ctx=o?o(t,u,(e,n)=>{f.ctx&&c(f.ctx[e],f.ctx[e]=n)&&(f.bound[e]&&f.bound[e](n),p&&V(t,e))}):u,f.update(),p=!0,s(f.before_render),f.fragment=a(f.ctx),n.target&&(n.hydrate?f.fragment.l(v(n.target)):f.fragment.c(),n.intro&&t.$$.fragment.i&&t.$$.fragment.i(),H(t,n.target,n.anchor),j()),x(i)}class B{$destroy(){var t,n;n=!0,(t=this).$$&&(s(t.$$.on_destroy),t.$$.fragment.d(n),t.$$.on_destroy=t.$$.fragment=null,t.$$.ctx={}),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(){}}function J(t,n=e){let r;const s=[];function o(e){if(a(t,e)){if(t=e,!r)return;s.forEach(e=>e[1]()),s.forEach(e=>e[0](t))}}return{set:o,update:function(e){o(e(t))},subscribe:function(a,c=e){const l=[a,c];return s.push(l),1===s.length&&(r=n(o)||e),a(t),()=>{const e=s.indexOf(l);-1!==e&&s.splice(e,1),0===s.length&&r()}}}}const K={},M=()=>({});function G(t){var n,r,s,o,a,c,f,p,g,$,E,_,x,w,S;return{c(){n=m("ul"),r=m("li"),s=m("a"),o=h("Home"),c=d(),f=m("li"),p=m("a"),g=h("about"),E=d(),_=m("li"),x=m("a"),w=h("blog"),this.h()},l(e){var t=v(n=b(e,"UL",{},!1)),a=v(r=b(t,"LI",{},!1)),l=v(s=b(a,"A",{class:!0,href:!0},!1));o=y(l,"Home"),l.forEach(u),a.forEach(u),c=y(t,"\n  ");var i=v(f=b(t,"LI",{},!1)),m=v(p=b(i,"A",{class:!0,href:!0},!1));g=y(m,"about"),m.forEach(u),i.forEach(u),E=y(t,"\n  ");var h=v(_=b(t,"LI",{},!1)),d=v(x=b(h,"A",{rel:!0,class:!0,href:!0},!1));w=y(d,"blog"),d.forEach(u),h.forEach(u),t.forEach(u),this.h()},h(){s.className=a=(void 0===t.segment?"selected":"")+" svelte-17ig4xs",s.href=".",p.className=$=("about"===t.segment?"selected":"")+" svelte-17ig4xs",p.href="about",x.rel="prefetch",x.className=S=("blog"===t.segment?"selected":"")+" svelte-17ig4xs",x.href="blog"},m(e,t){i(e,n,t),l(n,r),l(r,s),l(s,o),l(n,c),l(n,f),l(f,p),l(p,g),l(n,E),l(n,_),l(_,x),l(x,w)},p(e,t){e.segment&&a!==(a=(void 0===t.segment?"selected":"")+" svelte-17ig4xs")&&(s.className=a),e.segment&&$!==($=("about"===t.segment?"selected":"")+" svelte-17ig4xs")&&(p.className=$),e.segment&&S!==(S=("blog"===t.segment?"selected":"")+" svelte-17ig4xs")&&(x.className=S)},i:e,o:e,d(e){e&&u(n)}}}function Y(e,t,n){let{segment:r}=t;return e.$set=e=>{"segment"in e&&n("segment",r=e.segment)},{segment:r}}class z extends B{constructor(e){super(),T(this,e,Y,G,a,["segment"])}}function F(e){var t,n,r,s,o,a,c,f=new z({props:{segment:e.segment}});return{c(){t=m("header"),n=m("nav"),r=m("div"),s=m("a"),o=m("img"),a=d(),f.$$.fragment.c(),this.h()},l(e){var c=v(t=b(e,"HEADER",{},!1)),l=v(n=b(c,"NAV",{class:!0},!1)),i=v(r=b(l,"DIV",{class:!0},!1)),p=v(s=b(i,"A",{href:!0},!1));v(o=b(p,"IMG",{alt:!0,src:!0,width:!0,class:!0},!1)).forEach(u),p.forEach(u),a=y(i,"\n      "),f.$$.fragment.l(i),i.forEach(u),l.forEach(u),c.forEach(u),this.h()},h(){o.alt="Sapper",o.src="vikbert.svg",o.width="30",o.className="svelte-suswsi",s.href="/",r.className="container space-between",n.className="topbar"},m(e,u){i(e,t,u),l(t,n),l(n,r),l(r,s),l(s,o),l(r,a),H(f,r,null),c=!0},p(e,t){var n={};e.segment&&(n.segment=t.segment),f.$set(n)},i(e){c||(f.$$.fragment.i(e),c=!0)},o(e){f.$$.fragment.o(e),c=!1},d(e){e&&u(t),f.$destroy()}}}function W(e,t,n){let{segment:r}=t;return e.$set=e=>{"segment"in e&&n("segment",r=e.segment)},{segment:r}}class X extends B{constructor(e){super(),T(this,e,W,F,a,["segment"])}}function Q(e){var n,r,s,o,a=new X({props:{segment:e.segment}});const f=e.$$slots.default,p=function(e,t,n){if(e){const r=c(e,t,n);return e[0](r)}}(f,e,null);return{c(){n=m("div"),a.$$.fragment.c(),r=d(),s=m("main"),p&&p.c(),this.h()},l(e){var t=v(n=b(e,"DIV",{class:!0},!1));a.$$.fragment.l(t),r=y(t,"\n  ");var o=v(s=b(t,"MAIN",{class:!0},!1));p&&p.l(o),o.forEach(u),t.forEach(u),this.h()},h(){s.className="main",n.className="layout"},m(e,t){i(e,n,t),H(a,n,null),l(n,r),l(n,s),p&&p.m(s,null),o=!0},p(e,n){var r={};e.segment&&(r.segment=n.segment),a.$set(r),p&&p.p&&e.$$scope&&p.p(function(e,n,r,s){return e[1]?t({},t(n.$$scope.changed||{},e[1](s?s(r):{}))):n.$$scope.changed||{}}(f,n,e,null),c(f,n,null))},i(e){o||(a.$$.fragment.i(e),p&&p.i&&p.i(e),o=!0)},o(e){a.$$.fragment.o(e),p&&p.o&&p.o(e),o=!1},d(e){e&&u(n),a.$destroy(),p&&p.d(e)}}}function Z(e,t,n){let{segment:r}=t,{$$slots:s={},$$scope:o}=t;return e.$set=e=>{"segment"in e&&n("segment",r=e.segment),"$$scope"in e&&n("$$scope",o=e.$$scope)},{segment:r,$$slots:s,$$scope:o}}class ee extends B{constructor(e){super(),T(this,e,Z,Q,a,["segment"])}}function te(e){var t,n,r=e.error.stack;return{c(){t=m("pre"),n=h(r)},l(e){var s=v(t=b(e,"PRE",{},!1));n=y(s,r),s.forEach(u)},m(e,r){i(e,t,r),l(t,n)},p(e,t){e.error&&r!==(r=t.error.stack)&&E(n,r)},d(e){e&&u(t)}}}function ne(t){var n,r,s,o,a,c,f,p,$,_=t.error.message;document.title=n=t.status;var x=t.dev&&t.error.stack&&te(t);return{c(){r=d(),s=m("h1"),o=h(t.status),a=d(),c=m("p"),f=h(_),p=d(),x&&x.c(),$=g(),this.h()},l(e){r=y(e,"\n\n");var n=v(s=b(e,"H1",{class:!0},!1));o=y(n,t.status),n.forEach(u),a=y(e,"\n\n");var l=v(c=b(e,"P",{class:!0},!1));f=y(l,_),l.forEach(u),p=y(e,"\n\n"),x&&x.l(e),$=g(),this.h()},h(){s.className="svelte-8od9u6",c.className="svelte-8od9u6"},m(e,t){i(e,r,t),i(e,s,t),l(s,o),i(e,a,t),i(e,c,t),l(c,f),i(e,p,t),x&&x.m(e,t),i(e,$,t)},p(e,t){e.status&&n!==(n=t.status)&&(document.title=n),e.status&&E(o,t.status),e.error&&_!==(_=t.error.message)&&E(f,_),t.dev&&t.error.stack?x?x.p(e,t):((x=te(t)).c(),x.m($.parentNode,$)):x&&(x.d(1),x=null)},i:e,o:e,d(e){e&&(u(r),u(s),u(a),u(c),u(p)),x&&x.d(e),e&&u($)}}}function re(e,t,n){let{status:r,error:s}=t;return e.$set=e=>{"status"in e&&n("status",r=e.status),"error"in e&&n("error",s=e.error)},{status:r,error:s,dev:false}}class se extends B{constructor(e){super(),T(this,e,re,ne,a,["status","error"])}}function oe(e){var n,r,s=[e.level1.props],o=e.level1.component;function a(e){let n={};for(var r=0;r<s.length;r+=1)n=t(n,s[r]);return{props:n}}if(o)var c=new o(a());return{c(){c&&c.$$.fragment.c(),n=g()},l(e){c&&c.$$.fragment.l(e),n=g()},m(e,t){c&&H(c,e,t),i(e,n,t),r=!0},p(e,t){var r=e.level1?D(s,[t.level1.props]):{};if(o!==(o=t.level1.component)){if(c){O();const e=c;I(()=>{e.$destroy()}),e.$$.fragment.o(1),U()}o?((c=new o(a())).$$.fragment.c(),c.$$.fragment.i(1),H(c,n.parentNode,n)):c=null}else o&&c.$set(r)},i(e){r||(c&&c.$$.fragment.i(e),r=!0)},o(e){c&&c.$$.fragment.o(e),r=!1},d(e){e&&u(n),c&&c.$destroy(e)}}}function ae(e){var t,n=new se({props:{error:e.error,status:e.status}});return{c(){n.$$.fragment.c()},l(e){n.$$.fragment.l(e)},m(e,r){H(n,e,r),t=!0},p(e,t){var r={};e.error&&(r.error=t.error),e.status&&(r.status=t.status),n.$set(r)},i(e){t||(n.$$.fragment.i(e),t=!0)},o(e){n.$$.fragment.o(e),t=!1},d(e){n.$destroy(e)}}}function ce(e){var t,n,r,s,o=[ae,oe],a=[];function c(e){return e.error?0:1}return t=c(e),n=a[t]=o[t](e),{c(){n.c(),r=g()},l(e){n.l(e),r=g()},m(e,n){a[t].m(e,n),i(e,r,n),s=!0},p(e,s){var l=t;(t=c(s))===l?a[t].p(e,s):(O(),I(()=>{a[l].d(1),a[l]=null}),n.o(1),U(),(n=a[t])||(n=a[t]=o[t](s)).c(),n.i(1),n.m(r.parentNode,r))},i(e){s||(n&&n.i(),s=!0)},o(e){n&&n.o(),s=!1},d(e){a[t].d(e),e&&u(r)}}}function le(e){var n,r=[{segment:e.segments[0]},e.level0.props];let s={$$slots:{default:[ce]},$$scope:{ctx:e}};for(var o=0;o<r.length;o+=1)s=t(s,r[o]);var a=new ee({props:s});return{c(){a.$$.fragment.c()},l(e){a.$$.fragment.l(e)},m(e,t){H(a,e,t),n=!0},p(e,t){var n=e.segments||e.level0?D(r,[e.segments&&{segment:t.segments[0]},e.level0&&t.level0.props]):{};(e.$$scope||e.error||e.status||e.level1)&&(n.$$scope={changed:e,ctx:t}),a.$set(n)},i(e){n||(a.$$.fragment.i(e),n=!0)},o(e){a.$$.fragment.o(e),n=!1},d(e){a.$destroy(e)}}}function ie(e,t,n){let{stores:r,error:s,status:o,segments:a,level0:c,level1:l=null,notify:i}=t;var u,f,p;return u=i,w().$$.after_render.push(u),f=K,p=r,w().$$.context.set(f,p),e.$set=e=>{"stores"in e&&n("stores",r=e.stores),"error"in e&&n("error",s=e.error),"status"in e&&n("status",o=e.status),"segments"in e&&n("segments",a=e.segments),"level0"in e&&n("level0",c=e.level0),"level1"in e&&n("level1",l=e.level1),"notify"in e&&n("notify",i=e.notify)},{stores:r,error:s,status:o,segments:a,level0:c,level1:l,notify:i}}class ue extends B{constructor(e){super(),T(this,e,ie,le,a,["stores","error","status","segments","level0","level1","notify"])}}const fe=[/^\/blog\.json$/,/^\/blog\/posts\/markdown-test\/?$/,/^\/blog\/posts\/hello-world\/?$/,/^\/blog\/([^\/]+?)\.json$/],pe=[{js:()=>import("./index.3c81f21a.js"),css:[]},{js:()=>import("./about.6550a125.js"),css:[]},{js:()=>import("./index.0da81673.js"),css:[]},{js:()=>import("./[slug].1af8f5fc.js"),css:[]}],me=(he=decodeURIComponent,[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/about\/?$/,parts:[{i:1}]},{pattern:/^\/blog\/?$/,parts:[{i:2}]},{pattern:/^\/blog\/([^\/]+?)\/?$/,parts:[null,{i:3,params:e=>({slug:he(e[1])})}]}]);var he;const de="undefined"!=typeof __SAPPER__&&__SAPPER__;let ge,$e,ve,be=!1,ye=[],Ee="{}";const _e={page:function(e){const t=J(e);let n=!0;return{notify:function(){n=!0,t.update(e=>e)},set:function(e){n=!1,t.set(e)},subscribe:function(e){let r;return t.subscribe(t=>{(void 0===r||n&&t!==r)&&e(r=t)})}}}({}),preloading:J(null),session:J(de&&de.session)};let xe,we;_e.session.subscribe(async e=>{if(xe=e,!be)return;we=!0;const t=je(new URL(location.href)),n=$e={},{redirect:r,props:s,branch:o}=await Ue(t);n===$e&&await Oe(r,o,s,t.page)});let Se,Ne=null;let Re,Ae=1;const Pe="undefined"!=typeof history?history:{pushState:(e,t,n)=>{},replaceState:(e,t,n)=>{},scrollRestoration:""},Le={};function Ce(e){const t=Object.create(null);return e.length>0&&e.slice(1).split("&").forEach(e=>{let[,n,r=""]=/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(e.replace(/\+/g," ")));"string"==typeof t[n]&&(t[n]=[t[n]]),"object"==typeof t[n]?t[n].push(r):t[n]=r}),t}function je(e){if(e.origin!==location.origin)return null;if(!e.pathname.startsWith(de.baseUrl))return null;let t=e.pathname.slice(de.baseUrl.length);if(""===t&&(t="/"),!fe.some(e=>e.test(t)))for(let n=0;n<me.length;n+=1){const r=me[n],s=r.pattern.exec(t);if(s){const n=Ce(e.search),o=r.parts[r.parts.length-1],a=o.params?o.params(s):{},c={host:location.host,path:t,query:n,params:a};return{href:e.href,route:r,match:s,page:c}}}}function ke(){return{x:pageXOffset,y:pageYOffset}}async function qe(e,t,n,r){if(t)Re=t;else{const e=ke();Le[Re]=e,t=Re=++Ae,Le[Re]=n?e:{x:0,y:0}}Re=t,ge&&_e.preloading.set(!0);const s=Ne&&Ne.href===e.href?Ne.promise:Ue(e);Ne=null;const o=$e={},{redirect:a,props:c,branch:l}=await s;if(o===$e&&(await Oe(a,l,c,e.page),document.activeElement&&document.activeElement.blur(),!n)){let e=Le[t];if(r){const t=document.getElementById(r.slice(1));t&&(e={x:0,y:t.getBoundingClientRect().top+scrollY})}Le[Re]=e,e&&scrollTo(e.x,e.y)}}async function Oe(e,t,n,r){if(e)return function(e,t={replaceState:!1}){const n=je(new URL(e,document.baseURI));return n?(Pe[t.replaceState?"replaceState":"pushState"]({id:Re},"",e),qe(n,null).then(()=>{})):(location.href=e,new Promise(e=>{}))}(e.location,{replaceState:!0});if(_e.page.set(r),_e.preloading.set(!1),ge)ge.$set(n);else{n.stores={page:{subscribe:_e.page.subscribe},preloading:{subscribe:_e.preloading.subscribe},session:_e.session},n.level0={props:await ve},n.notify=_e.page.notify;const e=document.querySelector("#sapper-head-start"),t=document.querySelector("#sapper-head-end");if(e&&t){for(;e.nextSibling!==t;)De(e.nextSibling);De(e),De(t)}ge=new ue({target:Se,props:n,hydrate:!0})}ye=t,Ee=JSON.stringify(r.query),be=!0,we=!1}async function Ue(e){const{route:t,page:n}=e,r=n.path.split("/").filter(Boolean);let s=null;const o={error:null,status:200,segments:[r[0]]},a={fetch:(e,t)=>fetch(e,t),redirect:(e,t)=>{if(s&&(s.statusCode!==e||s.location!==t))throw new Error("Conflicting redirects");s={statusCode:e,location:t}},error:(e,t)=>{o.error="string"==typeof t?new Error(t):t,o.status=e}};let c;ve||(ve=de.preloaded[0]||M.call(a,{host:n.host,path:n.path,query:n.query,params:{}},xe));let l=1;try{const s=JSON.stringify(n.query),i=t.pattern.exec(n.path);let u=!1;c=await Promise.all(t.parts.map(async(t,c)=>{const f=r[c];if(function(e,t,n,r){if(r!==Ee)return!0;const s=ye[e];return!!s&&(t!==s.segment||!(!s.match||JSON.stringify(s.match.slice(1,e+2))===JSON.stringify(n.slice(1,e+2)))||void 0)}(c,f,i,s)&&(u=!0),o.segments[l]=r[c+1],!t)return{segment:f};const p=l++;if(!we&&!u&&ye[c]&&ye[c].part===t.i)return ye[c];u=!1;const{default:m,preload:h}=await function(e){const t="string"==typeof e.css?[]:e.css.map(Ie);return t.unshift(e.js()),Promise.all(t).then(e=>e[0])}(pe[t.i]);let d;return d=be||!de.preloaded[c+1]?h?await h.call(a,{host:n.host,path:n.path,query:n.query,params:t.params?t.params(e.match):{}},xe):{}:de.preloaded[c+1],o["level"+p]={component:m,props:d,segment:f,match:i,part:t.i}}))}catch(e){o.error=e,o.status=500,c=[]}return{redirect:s,props:o,branch:c}}function Ie(e){const t="client/"+e;if(!document.querySelector(`link[href="${t}"]`))return new Promise((e,n)=>{const r=document.createElement("link");r.rel="stylesheet",r.href=t,r.onload=()=>e(),r.onerror=n,document.head.appendChild(r)})}function De(e){e.parentNode.removeChild(e)}function He(e){const t=je(new URL(e,document.baseURI));if(t)return Ne&&e===Ne.href||function(e,t){Ne={href:e,promise:t}}(e,Ue(t)),Ne.promise}let Ve;function Te(e){clearTimeout(Ve),Ve=setTimeout(()=>{Be(e)},20)}function Be(e){const t=Ke(e.target);t&&"prefetch"===t.rel&&He(t.href)}function Je(e){if(1!==function(e){return null===e.which?e.button:e.which}(e))return;if(e.metaKey||e.ctrlKey||e.shiftKey)return;if(e.defaultPrevented)return;const t=Ke(e.target);if(!t)return;if(!t.href)return;const n="object"==typeof t.href&&"SVGAnimatedString"===t.href.constructor.name,r=String(n?t.href.baseVal:t.href);if(r===location.href)return void(location.hash||e.preventDefault());if(t.hasAttribute("download")||"external"===t.getAttribute("rel"))return;if(n?t.target.baseVal:t.target)return;const s=new URL(r);if(s.pathname===location.pathname&&s.search===location.search)return;const o=je(s);if(o){qe(o,null,t.hasAttribute("sapper-noscroll"),s.hash),e.preventDefault(),Pe.pushState({id:Re},"",s.href)}}function Ke(e){for(;e&&"A"!==e.nodeName.toUpperCase();)e=e.parentNode;return e}function Me(e){if(Le[Re]=ke(),e.state){const t=je(new URL(location.href));t?qe(t,e.state.id):location.href=location.href}else Ae=Ae+1,function(e){Re=e}(Ae),Pe.replaceState({id:Re},"",location.href)}var Ge;Ge={target:document.querySelector("#sapper")},"scrollRestoration"in Pe&&(Pe.scrollRestoration="manual"),addEventListener("beforeunload",()=>{Pe.scrollRestoration="auto"}),addEventListener("load",()=>{Pe.scrollRestoration="manual"}),function(e){Se=e}(Ge.target),addEventListener("click",Je),addEventListener("popstate",Me),addEventListener("touchstart",Be),addEventListener("mousemove",Te),Promise.resolve().then(()=>{const{hash:e,href:t}=location;Pe.replaceState({id:Ae},"",t);const n=new URL(location.href);if(de.error)return function(e){const{host:t,pathname:n,search:r}=location,{session:s,preloaded:o,status:a,error:c}=de;ve||(ve=o&&o[0]),Oe(null,[],{error:c,status:a,session:s,level0:{props:ve},level1:{props:{status:a,error:c},component:se},segments:o},{host:t,path:n,query:Ce(r),params:{}})}();const r=je(n);return r?qe(r,Ae,!0,e):void 0});export{B as S,d as a,v as b,b as c,u as d,m as e,y as f,i as g,l as h,T as i,E as j,D as k,U as l,H as m,e as n,p as o,t as p,I as q,O as r,a as s,h as t,$ as u,f as v};
