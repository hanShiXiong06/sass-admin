import{d as M,j as k,k as N,m as _,r as R,Q as j,u as e,h as l,c as C,v as m,w as d,C as y,a as h,t as I,x as S,F as b,T as F,f as V,dg as $,dc as q,y as A}from"./index-0e396751.js";import"./el-menu-item-4ed993c7.js";import"./el-sub-menu-4ed993c7.js";import{_ as D}from"./index.vue_vue_type_script_setup_true_lang-5014406f.js";const K=M({__name:"menu-item",props:{routes:{type:Object,required:!0},level:{type:Number,default:1}},setup(u){const s=u,g=V(),c=A(),p=k(),E=k().routers,i=N(),n=_(()=>s.routes.meta);_(()=>{var o,r;const t={};return(o=p.siteInfo)==null||o.apps.forEach(a=>{t[a.key]=a}),(r=p.siteInfo)==null||r.site_addons.forEach(a=>{t[a.key]=a}),t});const z=_(()=>{var t;return(t=p.siteInfo)==null?void 0:t.site_addons.map(o=>o.key)}),f={};E.forEach(t=>{t.original_name=t.name,t.meta.addon&&(f[t.meta.addon]=t)});const v=R(null);return j(c,()=>{s.routes.name=="addon_list"&&(z.value.includes(c.meta.addon)&&f[c.meta.addon]?v.value=f[c.meta.addon]:v.value=null)},{immediate:!0}),(t,o)=>{const r=D,a=$,w=q;return e(n).show?(l(),C(b,{key:0},[e(n).type==0&&u.routes.children?(l(),m(a,{key:0,index:String(u.routes.name)},{title:d(()=>[e(n).icon&&e(i).menuIsCollapse||s.level!=1?(l(),m(r,{key:0,name:e(n).icon,size:e(n).icon&&e(i).menuIsCollapse&&s.level==1?"20px":"16px",class:"absolute"},null,8,["name","size"])):y("",!0),h("span",{class:S(["text-[14px]",{"font-bold":s.level===1," ml-[20px]":e(n).icon&&s.level!=1}])},I(e(n).title),3)]),default:d(()=>[(l(!0),C(b,null,F(u.routes.children,(x,B)=>(l(),m(K,{routes:x,key:B,level:s.level+1},null,8,["routes","level"]))),128))]),_:1},8,["index"])):(l(),m(w,{key:1,index:String(u.routes.name),onClick:o[0]||(o[0]=x=>e(g).push({name:u.routes.name}))},{title:d(()=>[h("span",{class:S(["text-[14px]",{"font-bold":s.level===1," ml-[20px]":e(n).icon&&s.level!=1}])},I(e(n).title),3)]),default:d(()=>[e(n).icon&&e(i).menuIsCollapse||s.level!=1?(l(),m(r,{key:0,name:e(n).icon,size:e(n).icon&&e(i).menuIsCollapse&&s.level==1?"20px":"16px",class:"absolute"},null,8,["name","size"])):y("",!0)]),_:1},8,["index"]))],64)):y("",!0)}}});export{K as _};
