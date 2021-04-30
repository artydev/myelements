var z=typeof Promise=="function"?Promise:function(e){let t=[],a=0,n;return e(s=>{n=s,a=1,t.splice(0).forEach(o)}),{then:o};function o(s){return a?setTimeout(s,0,n):t.push(s),this}},{document:B,MutationObserver:j,Set:C,WeakMap:W}=self,A=e=>"querySelectorAll"in e,{filter:E}=[],I=e=>{let t=new W,a=l=>{let{query:c}=e;if(c.length)for(let h=0,{length:v}=l;h<v;h++)s(E.call(l[h].addedNodes,A),!0,c),s(E.call(l[h].removedNodes,A),!1,c)},n=l=>{for(let c=0,{length:h}=l;c<h;c++)t.delete(l[c])},o=()=>{a(f.takeRecords())},s=(l,c,h,v=new C)=>{for(let g,d,w=0,{length:L}=l;w<L;w++)if(!v.has(d=l[w])){if(v.add(d),c)for(let m,N=r(d),x=0,{length:$}=h;x<$;x++)N.call(d,m=h[x])&&(t.has(d)||t.set(d,new C),g=t.get(d),g.has(m)||(g.add(m),e.handle(d,c,m)));else t.has(d)&&(g=t.get(d),t.delete(d),g.forEach(m=>{e.handle(d,c,m)}));s(p(d),c,h,v)}},r=l=>l.matches||l.webkitMatchesSelector||l.msMatchesSelector,i=(l,c=!0)=>{s(l,c,e.query)},p=l=>b.length?l.querySelectorAll(b):b,f=new j(a),u=e.root||B,{query:b}=e;return f.observe(u,{childList:!0,subtree:!0}),i(p(u)),{drop:n,flush:o,observer:f,parse:i}},{create:q,keys:P}=Object,M=new WeakMap,T=new Set,k=[],O={},y={},V=(e,t)=>{for(let a=M.get(t),n=0,{length:o}=e;n<o;n++){let{target:s,attributeName:r,oldValue:i}=e[n],p=s.getAttribute(r);a.attributeChanged(r,i,p)}},_=(e,t,a,n)=>{let o=q(n,{element:{enumerable:!0,value:e}});for(let r=0,{length:i}=a;r<i;r++)e.addEventListener(a[r].t,o,a[r].o);t.set(e,o),o.init&&o.init();let{observedAttributes:s}=n;if(s){let r=new MutationObserver(V);r.observe(e,{attributes:!0,attributeOldValue:!0,attributeFilter:s.map(i=>(e.hasAttribute(i)&&o.attributeChanged(i,null,e.getAttribute(i)),i))}),M.set(r,o)}return o},{drop:U,flush:D,parse:F}=I({query:k,handle(e,t,a){let{m:n,l:o,o:s}=O[a],r=n.get(e)||_(e,n,o,s),i=t?"connected":"disconnected";i in r&&r[i]()}}),S=(e,t)=>{if(-1<k.indexOf(e))throw new Error("duplicated: "+e);D();let a=[],n=q(null);for(let o=P(t),s=0,{length:r}=o;s<r;s++){let i=o[s];if(/^on/.test(i)&&!/Options$/.test(i)){let p=t[i+"Options"]||!1,f=i.toLowerCase(),u=f.slice(2);a.push({t:u,o:p}),n[u]=i,f!==i&&(u=i.slice(2,3).toLowerCase()+i.slice(3),n[u]=i,a.push({t:u,o:p}))}}a.length&&(t.handleEvent=function(o){this[n[o.type]](o)}),k.push(e),O[e]={m:new WeakMap,l:a,o:t},F(document.querySelectorAll(e)),H(e),T.has(e)||y[e]._()},H=e=>{if(!(e in y)){let t,a=new z(n=>{t=n});y[e]={_:t,$:a}}return y[e].$};var Q=function(e){"use strict";return e.default=function(t){for(var a=typeof t=="string"?[t]:[t[0]],n=1,o=arguments.length;n<o;n++)a.push(arguments[n],t[n]);var s=document.createElement("style");return s.type="text/css",s.appendChild(document.createTextNode(a.join(""))),document.head.appendChild(s)},e}({}).default,R=Q,Y=R`
.sidenav {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0px;
  background-color: #111;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;
}

.sidenav a {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 25px;
  color: #818181;
  display: block;
  transition: 0.53s;
}

.sidenav a:hover {
  color: #f1f1f1;
}

.sidenav .closebtn {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
}

#main {
  transition: margin-left .5s;
  padding: 16px;
}

@media screen and (max-height: 450px) {
  .sidenav {padding-top: 15px;}
  .sidenav a {font-size: 18px;}
}
`,G=e=>`
<div id="mySidenav" class="sidenav">
  <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
  <a href="#">About</a>
  <a href="#">Services</a>
  <a href="#">Clients</a>
  <a href="#">Contact</a>
  <a href="#">Contact</a>
</div>

<div id="main">
  <h2>Sidenav Push Example</h2>
  <p>Click on the element below to open the side navigation menu, and push this content to the right.</p>
  <span style="font-size:30px;cursor:pointer" name="openNav">&#9776; open</span>
</div>
`;window.openNav=()=>{document.getElementById("mySidenav").style.width="250px"};window.closeNav=()=>{document.getElementById("mySidenav").style.width="0"};var J={init(){this.urls=this.element;var e=this.element.querySelectorAll("my-link");console.log(e)},connected(){this.element.innerHTML=`<div class='test'>${G(this)}</div>`,document.querySelector("[name='openNav']").addEventListener("click",this.openNavBar)},openNavBar(){document.getElementById("mySidenav").style.width="250px"}};S("my-sidebar",J);S("my-link",{connected(){}});
//# sourceMappingURL=sidebar.js.map
