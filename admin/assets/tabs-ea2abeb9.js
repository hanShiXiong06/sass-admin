import{d as R,cc as E,k as S,aJ as L,Q as B,R as D,a0 as j,u as o,h as _,c as f,e as r,w as n,F as N,T as V,v as $,i as m,t as d,s as p,a as q,x as F,y as I,bg as M,bh as z,bi as J,ax as P,ay as Q,f as A}from"./index-0e396751.js";/* empty css                    *//* empty css                  *//* empty css                    *//* empty css                  *//* empty css                     */import"./el-dropdown-item-4ed993c7.js";import{_ as G}from"./_plugin-vue_export-helper-c27b6911.js";const H={class:"tab-wrap w-full px-[16px]"},K=R({__name:"tabs",setup(U){const a=E(),h=S(),b=I(),l=A();L(()=>{a.addTab(b)}),B(b,e=>{a.addTab(e)});const k=e=>{const t=a.tabs[e.props.name];l.push({name:t.name,query:t.query})},y=e=>{if(b.name==e){const t=Object.keys(a.tabs);t.indexOf(e)==0?l.push({name:t[1]}):l.push({name:t[t.indexOf(e)-1]})}a.removeTab(e)},v=e=>{const t=Object.keys(a.tabs);for(let s=t.indexOf(e)-1;s>=0;s--)delete a.tabs[t[s]];l.push({name:e})},w=e=>{const t=Object.keys(a.tabs);for(let s=t.indexOf(e)+1;s<t.length;s++)delete a.tabs[t[s]];l.push({name:e})},x=e=>{Object.keys(a.tabs).forEach(s=>{s!=e&&delete a.tabs[s]}),l.push({name:e})};return(e,t)=>{const s=M,g=z,C=J,T=P,O=Q;return D((_(),f("div",H,[r(O,{closable:o(a).tabLength>1,"model-value":o(b).name,onTabClick:k,onTabRemove:y},{default:n(()=>[(_(!0),f(N,null,V(o(a).tabs,(c,W,i)=>(_(),$(T,{name:c.name,key:i},{label:n(()=>[r(C,{trigger:"contextmenu",placement:"bottom-start"},{dropdown:n(()=>[r(g,null,{default:n(()=>[r(s,{icon:"Back",disabled:i==0,onClick:u=>v(c.name)},{default:n(()=>[m(d(o(p)("tabs.closeLeft")),1)]),_:2},1032,["disabled","onClick"]),r(s,{icon:"Right",disabled:i==o(a).tabLength-1,onClick:u=>w(c.name)},{default:n(()=>[m(d(o(p)("tabs.closeRight")),1)]),_:2},1032,["disabled","onClick"]),r(s,{icon:"Close",disabled:o(a).tabLength==1,onClick:u=>x(c.name)},{default:n(()=>[m(d(o(p)("tabs.closeOther")),1)]),_:2},1032,["disabled","onClick"])]),_:2},1024)]),default:n(()=>[q("span",{class:F([{"text-primary":o(b).name==c.name},"tab-name"])},d(c.title),3)]),_:2},1024)]),_:2},1032,["name"]))),128))]),_:1},8,["closable","model-value"])],512)),[[j,o(h).tab]])}}});const ne=G(K,[["__scopeId","data-v-25b07f11"]]);export{ne as default};
