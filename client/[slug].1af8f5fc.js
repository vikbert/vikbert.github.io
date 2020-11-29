import{S as t,i as e,s as a,e as o,a as s,t as n,c as r,b as c,d as p,f as i,u as m,h as l,g as h,j as d,v as u,n as v}from"./client.2453b05f.js";function f(t){var e,a,f,E,g,T,A,w,y,M,D,j,x,b,R,L,N,H,I,S,P,$,_,q,C,G,V,k,z,B,F,J,K,O,Q,U=t.post.printDate,W=t.post.printReadingTime,X=t.post.title,Y=t.post.html;return document.title=e=t.post.title,{c(){a=o("meta"),f=o("meta"),g=o("meta"),A=o("meta"),y=o("meta"),M=o("meta"),j=o("meta"),b=o("meta"),R=o("meta"),N=o("meta"),H=o("meta"),S=s(),P=o("article"),$=o("header"),_=o("div"),q=o("a"),C=o("img"),G=s(),V=o("p"),k=n(U),z=n(" ~ "),B=n(W),F=s(),J=o("h1"),K=n(X),O=s(),Q=o("noscript"),this.h()},l(t){a=r(t,"META",{property:!0,content:!0},!1),c(a).forEach(p),f=r(t,"META",{property:!0,content:!0},!1),c(f).forEach(p),g=r(t,"META",{name:!0,content:!0},!1),c(g).forEach(p),A=r(t,"META",{property:!0,content:!0},!1),c(A).forEach(p),y=r(t,"META",{name:!0,content:!0},!1),c(y).forEach(p),M=r(t,"META",{name:!0,value:!0},!1),c(M).forEach(p),j=r(t,"META",{name:!0,content:!0},!1),c(j).forEach(p),b=r(t,"META",{name:!0,value:!0},!1),c(b).forEach(p),R=r(t,"META",{name:!0,value:!0},!1),c(R).forEach(p),N=r(t,"META",{name:!0,value:!0},!1),c(N).forEach(p),H=r(t,"META",{name:!0,value:!0},!1),c(H).forEach(p),S=i(t,"\n\n"),P=r(t,"ARTICLE",{class:!0},!1);var e=c(P);$=r(e,"HEADER",{class:!0},!1);var s=c($);_=r(s,"DIV",{class:!0},!1);var n=c(_);q=r(n,"A",{href:!0},!1);var m=c(q);C=r(m,"IMG",{src:!0,alt:!0,width:!0},!1),c(C).forEach(p),m.forEach(p),G=i(n,"\n      "),V=r(n,"P",{class:!0},!1);var l=c(V);k=i(l,U),z=i(l," ~ "),B=i(l,W),l.forEach(p),n.forEach(p),F=i(s,"\n    "),J=r(s,"H1",{class:!0},!1);var h=c(J);K=i(h,X),h.forEach(p),s.forEach(p),O=i(e,"\n  "),Q=o("noscript"),e.forEach(p),this.h()},h(){m(a,"property","og:type"),a.content="article",m(f,"property","og:title"),f.content=E=t.post.title,g.name="Description",g.content=T=t.post.excerpt,m(A,"property","og:description"),A.content=w=t.post.excerpt,y.name="twitter:card",y.content="summary_large_image",M.name="twitter:title",m(M,"value",D=t.post.title),j.name="twitter:description",j.content=x=t.post.excerpt,b.name="twitter:label1",m(b,"value","Published on"),R.name="twitter:data1",m(R,"value",L=new Date(t.post.printDate).toLocaleDateString(void 0,{year:"numeric",month:"short",day:"numeric"})),N.name="twitter:label2",m(N,"value","Reading Time"),H.name="twitter:data2",m(H,"value",I=t.post.printReadingTime),C.src="left.svg",C.alt="",C.width="20",q.href="/blog",V.className="svelte-v6c47j",_.className="space-between",J.className="svelte-v6c47j",$.className="svelte-v6c47j",P.className="container svelte-v6c47j"},m(t,e){l(document.head,a),l(document.head,f),l(document.head,g),l(document.head,A),l(document.head,y),l(document.head,M),l(document.head,j),l(document.head,b),l(document.head,R),l(document.head,N),l(document.head,H),h(t,S,e),h(t,P,e),l(P,$),l($,_),l(_,q),l(q,C),l(_,G),l(_,V),l(V,k),l(V,z),l(V,B),l($,F),l($,J),l(J,K),l(P,O),l(P,Q),Q.insertAdjacentHTML("afterend",Y)},p(t,a){t.post&&e!==(e=a.post.title)&&(document.title=e),t.post&&E!==(E=a.post.title)&&(f.content=E),t.post&&T!==(T=a.post.excerpt)&&(g.content=T),t.post&&w!==(w=a.post.excerpt)&&(A.content=w),t.post&&D!==(D=a.post.title)&&m(M,"value",D),t.post&&x!==(x=a.post.excerpt)&&(j.content=x),t.post&&L!==(L=new Date(a.post.printDate).toLocaleDateString(void 0,{year:"numeric",month:"short",day:"numeric"}))&&m(R,"value",L),t.post&&I!==(I=a.post.printReadingTime)&&m(H,"value",I),t.post&&U!==(U=a.post.printDate)&&d(k,U),t.post&&W!==(W=a.post.printReadingTime)&&d(B,W),t.post&&X!==(X=a.post.title)&&d(K,X),t.post&&Y!==(Y=a.post.html)&&(u(Q),Q.insertAdjacentHTML("afterend",Y))},i:v,o:v,d(t){p(a),p(f),p(g),p(A),p(y),p(M),p(j),p(b),p(R),p(N),p(H),t&&(p(S),p(P))}}}async function E({params:t,query:e}){const a=await this.fetch(`blog/${t.slug}.json`),o=await a.json();if(200===a.status)return{post:o};this.error(a.status,o.message)}function g(t,e,a){let{post:o}=e;return t.$set=t=>{"post"in t&&a("post",o=t.post)},{post:o}}export default class extends t{constructor(t){super(),e(this,t,g,f,a,["post"])}}export{E as preload};
