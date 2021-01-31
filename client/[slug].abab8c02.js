import{S as t,i as e,s as a,e as o,a as n,t as s,b as c,d as r,f as i,c as p,u as m,h as l,g as d,j as h,v as u,n as f}from"./client.bdb84b83.js";function v(t){var e,a,v,E,T,g,A,y,M,w,D,b,j,x,N,R,L,H,S,P,I,$,_,q,C,V,k,z,B,F,G,J,K,O,Q,U=t.post.printDate,W=t.post.printReadingTime,X=t.post.title,Y=t.post.html;return document.title=e=t.post.title,{c(){a=o("meta"),v=o("meta"),T=o("meta"),A=o("meta"),M=o("meta"),w=o("meta"),b=o("meta"),x=o("meta"),N=o("meta"),L=o("meta"),H=o("meta"),P=n(),I=o("article"),$=o("header"),_=o("div"),q=o("a"),C=o("span"),V=n(),k=o("p"),z=s(U),B=s(" ~ "),F=s(W),G=n(),J=o("h1"),K=s(X),O=n(),Q=o("noscript"),this.h()},l(t){a=c(t,"META",{property:!0,content:!0},!1),r(a).forEach(i),v=c(t,"META",{property:!0,content:!0},!1),r(v).forEach(i),T=c(t,"META",{name:!0,content:!0},!1),r(T).forEach(i),A=c(t,"META",{property:!0,content:!0},!1),r(A).forEach(i),M=c(t,"META",{name:!0,content:!0},!1),r(M).forEach(i),w=c(t,"META",{name:!0,value:!0},!1),r(w).forEach(i),b=c(t,"META",{name:!0,content:!0},!1),r(b).forEach(i),x=c(t,"META",{name:!0,value:!0},!1),r(x).forEach(i),N=c(t,"META",{name:!0,value:!0},!1),r(N).forEach(i),L=c(t,"META",{name:!0,value:!0},!1),r(L).forEach(i),H=c(t,"META",{name:!0,value:!0},!1),r(H).forEach(i),P=p(t,"\n\n"),I=c(t,"ARTICLE",{class:!0},!1);var e=r(I);$=c(e,"HEADER",{class:!0},!1);var n=r($);_=c(n,"DIV",{class:!0},!1);var s=r(_);q=c(s,"A",{href:!0},!1);var m=r(q);C=c(m,"SPAN",{class:!0,"data-icon":!0,"data-inline":!0},!1),r(C).forEach(i),m.forEach(i),V=p(s,"\n      "),k=c(s,"P",{class:!0},!1);var l=r(k);z=p(l,U),B=p(l," ~ "),F=p(l,W),l.forEach(i),s.forEach(i),G=p(n,"\n    "),J=c(n,"H1",{class:!0},!1);var d=r(J);K=p(d,X),d.forEach(i),n.forEach(i),O=p(e,"\n  "),Q=o("noscript"),e.forEach(i),this.h()},h(){m(a,"property","og:type"),a.content="article",m(v,"property","og:title"),v.content=E=t.post.title,T.name="Description",T.content=g=t.post.excerpt,m(A,"property","og:description"),A.content=y=t.post.excerpt,M.name="twitter:card",M.content="summary_large_image",w.name="twitter:title",m(w,"value",D=t.post.title),b.name="twitter:description",b.content=j=t.post.excerpt,x.name="twitter:label1",m(x,"value","Published on"),N.name="twitter:data1",m(N,"value",R=new Date(t.post.printDate).toLocaleDateString(void 0,{year:"numeric",month:"short",day:"numeric"})),L.name="twitter:label2",m(L,"value","Reading Time"),H.name="twitter:data2",m(H,"value",S=t.post.printReadingTime),C.className="iconify",C.dataset.icon="codicon:chevron-left",C.dataset.inline="false",q.href="/blog",k.className="svelte-v6c47j",_.className="space-between",J.className="svelte-v6c47j",$.className="svelte-v6c47j",I.className="container svelte-v6c47j"},m(t,e){l(document.head,a),l(document.head,v),l(document.head,T),l(document.head,A),l(document.head,M),l(document.head,w),l(document.head,b),l(document.head,x),l(document.head,N),l(document.head,L),l(document.head,H),d(t,P,e),d(t,I,e),l(I,$),l($,_),l(_,q),l(q,C),l(_,V),l(_,k),l(k,z),l(k,B),l(k,F),l($,G),l($,J),l(J,K),l(I,O),l(I,Q),Q.insertAdjacentHTML("afterend",Y)},p(t,a){t.post&&e!==(e=a.post.title)&&(document.title=e),t.post&&E!==(E=a.post.title)&&(v.content=E),t.post&&g!==(g=a.post.excerpt)&&(T.content=g),t.post&&y!==(y=a.post.excerpt)&&(A.content=y),t.post&&D!==(D=a.post.title)&&m(w,"value",D),t.post&&j!==(j=a.post.excerpt)&&(b.content=j),t.post&&R!==(R=new Date(a.post.printDate).toLocaleDateString(void 0,{year:"numeric",month:"short",day:"numeric"}))&&m(N,"value",R),t.post&&S!==(S=a.post.printReadingTime)&&m(H,"value",S),t.post&&U!==(U=a.post.printDate)&&h(z,U),t.post&&W!==(W=a.post.printReadingTime)&&h(F,W),t.post&&X!==(X=a.post.title)&&h(K,X),t.post&&Y!==(Y=a.post.html)&&(u(Q),Q.insertAdjacentHTML("afterend",Y))},i:f,o:f,d(t){i(a),i(v),i(T),i(A),i(M),i(w),i(b),i(x),i(N),i(L),i(H),t&&(i(P),i(I))}}}async function E({params:t,query:e}){const a=await this.fetch(`blog/${t.slug}.json`),o=await a.json();if(200===a.status)return{post:o};this.error(a.status,o.message)}function T(t,e,a){let{post:o}=e;return t.$set=t=>{"post"in t&&a("post",o=t.post)},{post:o}}export default class extends t{constructor(t){super(),e(this,t,T,v,a,["post"])}}export{E as preload};
