import{d as E,j as B,l as p,u as t,h as n,c as l,s as m,w as r,a as i,t as c,F as x,T as N,e as V,i as w,v as k,B as h,f as T,dd as j,aa as F,de as M}from"./index-904cb7a2.js";import"./el-sub-menu-4ed993c7.js";import"./el-tooltip-4ed993c7.js";/* empty css                  */const $={class:k(["ml-[10px]"])},q={key:2,class:"!border-0 !border-t-[1px] border-solid mx-[25px] bg-[#f7f7f7] my-[5px]"},z=E({__name:"menu-item",props:{routes:{type:Object,required:!0}},setup(e){const g=e,y=T(),o=B().siteInfo,a=p(()=>g.routes.meta),b=p(()=>{const u={};return o==null||o.apps.forEach(s=>{u[s.key]=s}),o==null||o.site_addons.forEach(s=>{u[s.key]=s}),u});return(u,s)=>{const S=j,v=F,f=M;return t(a).show?(n(),l(x,{key:0},[e.routes.children?(n(),m(S,{key:0,index:String(e.routes.name)},{title:r(()=>[i("span",$,c(t(a).title),1)]),default:r(()=>[(n(!0),l(x,null,N(e.routes.children,(d,C)=>(n(),m(z,{routes:d,key:C},null,8,["routes"]))),128))]),_:1},8,["index"])):(n(),l(x,{key:1},[t(a).addon&&t(a).parent_route&&t(a).parent_route.addon==""?(n(),m(f,{key:0,index:String(e.routes.name),onClick:s[0]||(s[0]=d=>t(y).push({name:e.routes.name}))},{title:r(()=>[V(v,{placement:"right",effect:"light"},{content:r(()=>[w(" 该功能仅限"+c(t(b)[t(a).addon].title)+"使用 ",1)]),default:r(()=>[i("span",{class:k([{"text-[15px]":e.routes.meta.class==1},{"text-[14px]":e.routes.meta.class!=1},{"ml-[10px]":e.routes.meta.class==2,"ml-[15px]":e.routes.meta.class==3}])},c(t(a).title),3)]),_:1})]),_:1},8,["index"])):(n(),m(f,{key:1,index:String(e.routes.name),onClick:s[1]||(s[1]=d=>t(y).push({name:e.routes.name}))},{title:r(()=>[i("span",{class:k([{"text-[15px]":e.routes.meta.class==1},{"text-[14px]":e.routes.meta.class!=1},{"ml-[10px]":e.routes.meta.class==2,"ml-[15px]":e.routes.meta.class==3}])},c(t(a).title),3)]),_:1},8,["index"]))],64)),e.routes.is_border?(n(),l("div",q)):h("",!0)],64)):h("",!0)}}});export{z as _};
