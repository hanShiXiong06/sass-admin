import{d as y,r as v,l as k,f as C,h as V,s as B,w as l,a as i,e as d,i as f,t as p,u as o,q as r,br as E,c2 as D,c3 as P,U as b,E as N,X as T}from"./index-904cb7a2.js";/* empty css                  *//* empty css                   *//* empty css                  */const R={class:"dialog-footer"},F=y({__name:"index",props:{show:{type:Boolean,default:!1},type:{type:String,default:""},searchParam:{type:Object,default:()=>({})}},emits:["update:show","close"],setup(m,{emit:n}){const e=m,t=v(!1),c=k({get(){return e.show},set(s){n("update:show",s)}}),h=C(),_=()=>{t.value=!0;const s=h.resolve({path:"/site/setting/export"});D(e.type,{page:1,limit:1,...e.searchParam}).then(a=>{a.data?P(e.type,e.searchParam).then(()=>{t.value=!1,n("close",!1),setTimeout(()=>{window.open(s.href)},100)}):(t.value=!1,b.error(a.msg))}).catch(()=>{t.value=!1})},g=()=>{n("close",!1)};return(s,a)=>{const u=N,x=T;return V(),B(x,{modelValue:o(c),"onUpdate:modelValue":a[0]||(a[0]=w=>E(c)?c.value=w:null),title:o(r)("exportTip"),width:"300px","close-on-click-modal":!0,"close-on-press-escape":!1,"show-close":!1},{footer:l(()=>[i("span",R,[d(u,{onClick:g},{default:l(()=>[f(p(o(r)("cancel")),1)]),_:1}),d(u,{type:"primary",onClick:_,loading:t.value},{default:l(()=>[f(p(o(r)("exportConfirm")),1)]),_:1},8,["loading"])])]),default:l(()=>[i("span",null,p(o(r)("exportPlaceholder")),1)]),_:1},8,["modelValue","title"])}}});export{F as _};