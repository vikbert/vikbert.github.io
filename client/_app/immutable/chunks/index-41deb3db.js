function v(){}function Q(t,n){for(const e in n)t[e]=n[e];return t}function B(t){return t()}function M(){return Object.create(null)}function p(t){t.forEach(B)}function W(t){return typeof t=="function"}function _t(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}let g;function dt(t,n){return g||(g=document.createElement("a")),g.href=n,t===g.href}function U(t){return Object.keys(t).length===0}function V(t,...n){if(t==null)return v;const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function ht(t,n,e){t.$$.on_destroy.push(V(n,e))}function mt(t,n,e,i){if(t){const r=O(t,n,e,i);return t[0](r)}}function O(t,n,e,i){return t[1]&&i?Q(e.ctx.slice(),t[1](i(n))):e.ctx}function pt(t,n,e,i){if(t[2]&&i){const r=t[2](i(e));if(n.dirty===void 0)return r;if(typeof r=="object"){const u=[],l=Math.max(n.dirty.length,r.length);for(let s=0;s<l;s+=1)u[s]=n.dirty[s]|r[s];return u}return n.dirty|r}return n.dirty}function yt(t,n,e,i,r,u){if(r){const l=O(n,e,i,u);t.p(l,r)}}function gt(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let i=0;i<e;i++)n[i]=-1;return n}return-1}function xt(t){return t==null?"":t}let N=!1;function X(){N=!0}function Y(){N=!1}function Z(t,n,e,i){for(;t<n;){const r=t+(n-t>>1);e(r)<=i?t=r+1:n=r}return t}function tt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let o=0;o<n.length;o++){const a=n[o];a.claim_order!==void 0&&c.push(a)}n=c}const e=new Int32Array(n.length+1),i=new Int32Array(n.length);e[0]=-1;let r=0;for(let c=0;c<n.length;c++){const o=n[c].claim_order,a=(r>0&&n[e[r]].claim_order<=o?r+1:Z(1,r,y=>n[e[y]].claim_order,o))-1;i[c]=e[a]+1;const f=a+1;e[f]=c,r=Math.max(f,r)}const u=[],l=[];let s=n.length-1;for(let c=e[r]+1;c!=0;c=i[c-1]){for(u.push(n[c-1]);s>=c;s--)l.push(n[s]);s--}for(;s>=0;s--)l.push(n[s]);u.reverse(),l.sort((c,o)=>c.claim_order-o.claim_order);for(let c=0,o=0;c<l.length;c++){for(;o<u.length&&l[c].claim_order>=u[o].claim_order;)o++;const a=o<u.length?u[o]:null;t.insertBefore(l[c],a)}}function nt(t,n){if(N){for(tt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function et(t,n,e){t.insertBefore(n,e||null)}function it(t,n,e){N&&!e?nt(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function $(t){t.parentNode.removeChild(t)}function bt(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function P(t){return document.createElement(t)}function D(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function S(t){return document.createTextNode(t)}function wt(){return S(" ")}function $t(){return S("")}function Nt(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function rt(t){return Array.from(t.childNodes)}function G(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function z(t,n,e,i,r=!1){G(t);const u=(()=>{for(let l=t.claim_info.last_index;l<t.length;l++){const s=t[l];if(n(s)){const c=e(s);return c===void 0?t.splice(l,1):t[l]=c,r||(t.claim_info.last_index=l),s}}for(let l=t.claim_info.last_index-1;l>=0;l--){const s=t[l];if(n(s)){const c=e(s);return c===void 0?t.splice(l,1):t[l]=c,r?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=l,s}}return i()})();return u.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,u}function F(t,n,e,i){return z(t,r=>r.nodeName===n,r=>{const u=[];for(let l=0;l<r.attributes.length;l++){const s=r.attributes[l];e[s.name]||u.push(s.name)}u.forEach(l=>r.removeAttribute(l))},()=>i(n))}function At(t,n,e){return F(t,n,e,P)}function Tt(t,n,e){return F(t,n,e,D)}function ct(t,n){return z(t,e=>e.nodeType===3,e=>{const i=""+n;if(e.data.startsWith(i)){if(e.data.length!==i.length)return e.splitText(i.length)}else e.data=i},()=>S(n),!0)}function Et(t){return ct(t," ")}function H(t,n,e){for(let i=e;i<t.length;i+=1){const r=t[i];if(r.nodeType===8&&r.textContent.trim()===n)return i}return t.length}function vt(t,n){const e=H(t,"HTML_TAG_START",0),i=H(t,"HTML_TAG_END",e);if(e===i)return new C(void 0,n);G(t);const r=t.splice(e,i-e+1);$(r[0]),$(r[r.length-1]);const u=r.slice(1,r.length-1);for(const l of u)l.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new C(u,n)}function St(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function jt(t,n,e,i){e===null?t.style.removeProperty(n):t.style.setProperty(n,e,i?"important":"")}function kt(t,n,e){t.classList[e?"add":"remove"](n)}function Mt(t,n=document.body){return Array.from(n.querySelectorAll(t))}class lt{constructor(n=!1){this.is_svg=!1,this.is_svg=n,this.e=this.n=null}c(n){this.h(n)}m(n,e,i=null){this.e||(this.is_svg?this.e=D(e.nodeName):this.e=P(e.nodeName),this.t=e,this.c(n)),this.i(i)}h(n){this.e.innerHTML=n,this.n=Array.from(this.e.childNodes)}i(n){for(let e=0;e<this.n.length;e+=1)et(this.t,this.n[e],n)}p(n){this.d(),this.h(n),this.i(this.a)}d(){this.n.forEach($)}}class C extends lt{constructor(n,e=!1){super(e),this.e=this.n=null,this.l=n}c(n){this.l?this.n=this.l:super.c(n)}i(n){for(let e=0;e<this.n.length;e+=1)it(this.t,this.n[e],n)}}let m;function h(t){m=t}function I(){if(!m)throw new Error("Function called outside component initialization");return m}function Ht(t){I().$$.on_mount.push(t)}function Ct(t){I().$$.after_update.push(t)}const d=[],q=[],b=[],L=[],R=Promise.resolve();let T=!1;function J(){T||(T=!0,R.then(K))}function qt(){return J(),R}function E(t){b.push(t)}const A=new Set;let x=0;function K(){const t=m;do{for(;x<d.length;){const n=d[x];x++,h(n),st(n.$$)}for(h(null),d.length=0,x=0;q.length;)q.pop()();for(let n=0;n<b.length;n+=1){const e=b[n];A.has(e)||(A.add(e),e())}b.length=0}while(d.length);for(;L.length;)L.pop()();T=!1,A.clear(),h(t)}function st(t){if(t.fragment!==null){t.update(),p(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(E)}}const w=new Set;let _;function Lt(){_={r:0,c:[],p:_}}function Bt(){_.r||p(_.c),_=_.p}function ot(t,n){t&&t.i&&(w.delete(t),t.i(n))}function Ot(t,n,e,i){if(t&&t.o){if(w.has(t))return;w.add(t),_.c.push(()=>{w.delete(t),i&&(e&&t.d(1),i())}),t.o(n)}else i&&i()}function Pt(t,n){const e={},i={},r={$$scope:1};let u=t.length;for(;u--;){const l=t[u],s=n[u];if(s){for(const c in l)c in s||(i[c]=1);for(const c in s)r[c]||(e[c]=s[c],r[c]=1);t[u]=s}else for(const c in l)r[c]=1}for(const l in i)l in e||(e[l]=void 0);return e}function Dt(t){return typeof t=="object"&&t!==null?t:{}}function Gt(t){t&&t.c()}function zt(t,n){t&&t.l(n)}function ut(t,n,e,i){const{fragment:r,on_mount:u,on_destroy:l,after_update:s}=t.$$;r&&r.m(n,e),i||E(()=>{const c=u.map(B).filter(W);l?l.push(...c):p(c),t.$$.on_mount=[]}),s.forEach(E)}function ft(t,n){const e=t.$$;e.fragment!==null&&(p(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function at(t,n){t.$$.dirty[0]===-1&&(d.push(t),J(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function Ft(t,n,e,i,r,u,l,s=[-1]){const c=m;h(t);const o=t.$$={fragment:null,ctx:null,props:u,update:v,not_equal:r,bound:M(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(c?c.$$.context:[])),callbacks:M(),dirty:s,skip_bound:!1,root:n.target||c.$$.root};l&&l(o.root);let a=!1;if(o.ctx=e?e(t,n.props||{},(f,y,...j)=>{const k=j.length?j[0]:y;return o.ctx&&r(o.ctx[f],o.ctx[f]=k)&&(!o.skip_bound&&o.bound[f]&&o.bound[f](k),a&&at(t,f)),y}):[],o.update(),a=!0,p(o.before_update),o.fragment=i?i(o.ctx):!1,n.target){if(n.hydrate){X();const f=rt(n.target);o.fragment&&o.fragment.l(f),f.forEach($)}else o.fragment&&o.fragment.c();n.intro&&ot(t.$$.fragment),ut(t,n.target,n.anchor,n.customElement),Y(),K()}h(c)}class It{$destroy(){ft(this,1),this.$destroy=v}$on(n,e){const i=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return i.push(e),()=>{const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}$set(n){this.$$set&&!U(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}export{v as A,kt as B,nt as C,ht as D,dt as E,mt as F,D as G,Tt as H,yt as I,gt as J,pt as K,Mt as L,xt as M,C as N,vt as O,bt as P,Q,Pt as R,It as S,Dt as T,wt as a,it as b,Et as c,Bt as d,$t as e,ot as f,Lt as g,$ as h,Ft as i,Ct as j,P as k,At as l,rt as m,Nt as n,Ht as o,jt as p,S as q,ct as r,_t as s,Ot as t,St as u,Gt as v,zt as w,ut as x,ft as y,qt as z};
