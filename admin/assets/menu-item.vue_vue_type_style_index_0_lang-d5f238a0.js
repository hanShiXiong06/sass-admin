import{d as p,j as v,m as b,u as s,h as n,c as u,v as l,w as m,a as d,t as i,F as x,T as E,x as k,C as g,f as B,dg as w,dc as j}from"./index-0e396751.js";import"./el-menu-item-4ed993c7.js";import"./el-sub-menu-4ed993c7.js";const F={class:k(["ml-[10px]"])},M={key:2,class:"!border-0 !border-t-[1px] border-solid mx-[25px] bg-[#f7f7f7] my-[5px]"},N=p({__name:"menu-item",props:{routes:{type:Object,required:!0}},setup(e){const h=e,y=B(),r=v().siteInfo,a=b(()=>h.routes.meta);return b(()=>{const o={};return r==null||r.apps.forEach(t=>{o[t.key]=t}),r==null||r.site_addons.forEach(t=>{o[t.key]=t}),o}),(o,t)=>{const S=w,f=j;return s(a).show?(n(),u(x,{key:0},[e.routes.children?(n(),l(S,{key:0,index:String(e.routes.name)},{title:m(()=>[d("span",F,i(s(a).title),1)]),default:m(()=>[(n(!0),u(x,null,E(e.routes.children,(c,C)=>(n(),l(N,{routes:c,key:C},null,8,["routes"]))),128))]),_:1},8,["index"])):(n(),u(x,{key:1},[s(a).addon&&s(a).parent_route&&s(a).parent_route.addon==""?(n(),l(f,{key:0,index:String(e.routes.name),onClick:t[0]||(t[0]=c=>s(y).push({name:e.routes.name}))},{title:m(()=>[d("span",{class:k([{"text-[15px]":e.routes.meta.class==1},{"text-[14px]":e.routes.meta.class!=1},{"ml-[10px]":e.routes.meta.class==2,"ml-[15px]":e.routes.meta.class==3}])},i(s(a).title),3)]),_:1},8,["index"])):(n(),l(f,{key:1,index:String(e.routes.name),onClick:t[1]||(t[1]=c=>s(y).push({name:e.routes.name}))},{title:m(()=>[d("span",{class:k([{"text-[15px]":e.routes.meta.class==1},{"text-[14px]":e.routes.meta.class!=1},{"ml-[10px]":e.routes.meta.class==2,"ml-[15px]":e.routes.meta.class==3}])},i(s(a).title),3)]),_:1},8,["index"]))],64)),e.routes.is_border?(n(),u("div",M)):g("",!0)],64)):g("",!0)}}});export{N as _};
