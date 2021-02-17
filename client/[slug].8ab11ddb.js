import{S as t,i as e,s as a,e as o,a as n,t as s,c as r,b as c,d as i,f as p,l as m,h as l,g as d,r as h,A as u,n as f}from"./client.5b0b510b.js";function v(t){var e,a,v,E,T,A,g,y,M,w,D,b,j,x,N,R,L,H,S,P,I,$,_,q,C,V,k,z,B,F,G,J,K,O,Q,U=t.post.printDate,W=t.post.printReadingTime,X=t.post.title,Y=t.post.html;return document.title=e=t.post.title,{c(){a=o("meta"),v=o("meta"),T=o("meta"),g=o("meta"),M=o("meta"),w=o("meta"),b=o("meta"),x=o("meta"),N=o("meta"),L=o("meta"),H=o("meta"),P=n(),I=o("article"),$=o("header"),_=o("div"),q=o("a"),C=o("span"),V=n(),k=o("p"),z=s(U),B=s(" ~ "),F=s(W),G=n(),J=o("h1"),K=s(X),O=n(),Q=o("noscript"),this.h()},l(t){a=r(t,"META",{property:!0,content:!0},!1),c(a).forEach(i),v=r(t,"META",{property:!0,content:!0},!1),c(v).forEach(i),T=r(t,"META",{name:!0,content:!0},!1),c(T).forEach(i),g=r(t,"META",{property:!0,content:!0},!1),c(g).forEach(i),M=r(t,"META",{name:!0,content:!0},!1),c(M).forEach(i),w=r(t,"META",{name:!0,value:!0},!1),c(w).forEach(i),b=r(t,"META",{name:!0,content:!0},!1),c(b).forEach(i),x=r(t,"META",{name:!0,value:!0},!1),c(x).forEach(i),N=r(t,"META",{name:!0,value:!0},!1),c(N).forEach(i),L=r(t,"META",{name:!0,value:!0},!1),c(L).forEach(i),H=r(t,"META",{name:!0,value:!0},!1),c(H).forEach(i),P=p(t,"\n\n"),I=r(t,"ARTICLE",{class:!0},!1);var e=c(I);$=r(e,"HEADER",{class:!0},!1);var n=c($);_=r(n,"DIV",{class:!0},!1);var s=c(_);q=r(s,"A",{href:!0},!1);var m=c(q);C=r(m,"SPAN",{class:!0,"data-icon":!0,"data-inline":!0},!1),c(C).forEach(i),m.forEach(i),V=p(s,"\n      "),k=r(s,"P",{class:!0},!1);var l=c(k);z=p(l,U),B=p(l," ~ "),F=p(l,W),l.forEach(i),s.forEach(i),G=p(n,"\n    "),J=r(n,"H1",{class:!0},!1);var d=c(J);K=p(d,X),d.forEach(i),n.forEach(i),O=p(e,"\n  "),Q=o("noscript"),e.forEach(i),this.h()},h(){m(a,"property","og:type"),a.content="article",m(v,"property","og:title"),v.content=E=t.post.title,T.name="Description",T.content=A=t.post.excerpt,m(g,"property","og:description"),g.content=y=t.post.excerpt,M.name="twitter:card",M.content="summary_large_image",w.name="twitter:title",m(w,"value",D=t.post.title),b.name="twitter:description",b.content=j=t.post.excerpt,x.name="twitter:label1",m(x,"value","Published on"),N.name="twitter:data1",m(N,"value",R=new Date(t.post.printDate).toLocaleDateString(void 0,{year:"numeric",month:"short",day:"numeric"})),L.name="twitter:label2",m(L,"value","Reading Time"),H.name="twitter:data2",m(H,"value",S=t.post.printReadingTime),C.className="iconify",C.dataset.icon="codicon:chevron-left",C.dataset.inline="false",q.href="/blog",k.className="svelte-v6c47j",_.className="space-between",J.className="svelte-v6c47j",$.className="svelte-v6c47j",I.className="container svelte-v6c47j"},m(t,e){l(document.head,a),l(document.head,v),l(document.head,T),l(document.head,g),l(document.head,M),l(document.head,w),l(document.head,b),l(document.head,x),l(document.head,N),l(document.head,L),l(document.head,H),d(t,P,e),d(t,I,e),l(I,$),l($,_),l(_,q),l(q,C),l(_,V),l(_,k),l(k,z),l(k,B),l(k,F),l($,G),l($,J),l(J,K),l(I,O),l(I,Q),Q.insertAdjacentHTML("afterend",Y)},p(t,a){t.post&&e!==(e=a.post.title)&&(document.title=e),t.post&&E!==(E=a.post.title)&&(v.content=E),t.post&&A!==(A=a.post.excerpt)&&(T.content=A),t.post&&y!==(y=a.post.excerpt)&&(g.content=y),t.post&&D!==(D=a.post.title)&&m(w,"value",D),t.post&&j!==(j=a.post.excerpt)&&(b.content=j),t.post&&R!==(R=new Date(a.post.printDate).toLocaleDateString(void 0,{year:"numeric",month:"short",day:"numeric"}))&&m(N,"value",R),t.post&&S!==(S=a.post.printReadingTime)&&m(H,"value",S),t.post&&U!==(U=a.post.printDate)&&h(z,U),t.post&&W!==(W=a.post.printReadingTime)&&h(F,W),t.post&&X!==(X=a.post.title)&&h(K,X),t.post&&Y!==(Y=a.post.html)&&(u(Q),Q.insertAdjacentHTML("afterend",Y))},i:f,o:f,d(t){i(a),i(v),i(T),i(g),i(M),i(w),i(b),i(x),i(N),i(L),i(H),t&&(i(P),i(I))}}}async function E({params:t,query:e}){const a=await this.fetch(`blog/${t.slug}.json`),o=await a.json();if(200===a.status)return{post:o};this.error(a.status,o.message)}function T(t,e,a){let{post:o}=e;return t.$set=t=>{"post"in t&&a("post",o=t.post)},{post:o}}export default class extends t{constructor(t){super(),e(this,t,T,v,a,["post"])}}export{E as preload};
