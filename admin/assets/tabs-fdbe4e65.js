import{d as O,c6 as E,x as R,f as L,aK as B,Q as j,h as _,c as h,e as c,w as n,F as D,T as q,u as o,s as N,i,t as d,q as u,a as S,v as V,bg as $,bh as z,bi as F,ay as I,az as M}from"./index-99f00cf3.js";/* empty css                    *//* empty css                  *//* empty css                    *//* empty css                  *//* empty css                     */import"./el-dropdown-item-4ed993c7.js";import{_ as K}from"./_plugin-vue_export-helper-c27b6911.js";const P={class:"tab-wrap w-full px-[16px]"},Q=O({__name:"tabs",setup(A){const t=E(),r=R(),b=L();B(()=>{t.addTab(r)}),j(r,e=>{t.addTab(e)});const f=e=>{const a=t.tabs[e.props.name];b.push({path:a.path,query:a.query})},k=e=>{if(r.path==e){const a=Object.keys(t.tabs);b.push({path:a[a.indexOf(e)-1]})}t.removeTab(e)},g=e=>{const a=Object.keys(t.tabs);for(let s=a.indexOf(e)-1;s>=0;s--)delete t.tabs[a[s]];b.push({path:e})},v=e=>{const a=Object.keys(t.tabs);for(let s=a.indexOf(e)+1;s<a.length;s++)delete t.tabs[a[s]];b.push({path:e})},w=e=>{Object.keys(t.tabs).forEach(s=>{s!=e&&delete t.tabs[s]}),b.push({path:e})};return(e,a)=>{const s=$,x=z,y=F,C=I,T=M;return _(),h("div",P,[c(T,{closable:o(t).tabLength>1,"model-value":o(r).path,onTabClick:f,onTabRemove:k},{default:n(()=>[(_(!0),h(D,null,q(o(t).tabs,(l,G,p)=>(_(),N(C,{name:l.path,key:p},{label:n(()=>[c(y,{trigger:"contextmenu",placement:"bottom-start"},{dropdown:n(()=>[c(x,null,{default:n(()=>[c(s,{icon:"Back",disabled:p==0,onClick:m=>g(l.path)},{default:n(()=>[i(d(o(u)("tabs.closeLeft")),1)]),_:2},1032,["disabled","onClick"]),c(s,{icon:"Right",disabled:p==o(t).tabLength-1,onClick:m=>v(l.path)},{default:n(()=>[i(d(o(u)("tabs.closeRight")),1)]),_:2},1032,["disabled","onClick"]),c(s,{icon:"Close",disabled:o(t).tabLength==1,onClick:m=>w(l.path)},{default:n(()=>[i(d(o(u)("tabs.closeOther")),1)]),_:2},1032,["disabled","onClick"])]),_:2},1024)]),default:n(()=>[S("span",{class:V([{"text-primary":o(r).path==l.path},"tab-name"])},d(l.title),3)]),_:2},1024)]),_:2},1032,["name"]))),128))]),_:1},8,["closable","model-value"])])}}});const te=K(Q,[["__scopeId","data-v-623fa770"]]);export{te as default};
