import{d as p,s as l,Q as c,B as u,h as g,c as f,a as v,e as n,w as m,u as s,b as h,L as w,M as C}from"./index-0e396751.js";/* empty css                */import"./el-form-item-4ed993c7.js";import b from"./index-11d71036.js";import{u as V}from"./poster-09375a22.js";const x={class:"content-wrap"},S={class:"edit-attr-item-wrap"},y=p({__name:"edit-image",setup(B,{expose:i}){const e=V();return e.editComponent.verify=a=>{const t={code:!0,message:""};return e.value[a].value==""&&(t.code=!1,t.message=l("imageUrlTip")),t},c(()=>e.editComponent.value,(a,t)=>{const o=new Image;o.src=u(e.editComponent.value),o.onload=async()=>{e.editComponent.imgWidth=o.width,e.editComponent.imgHeight=o.height}}),i({}),(a,t)=>{const o=b,r=w,d=C;return g(),f("div",x,[v("div",S,[n(d,{"label-width":"80px",class:"px-[10px]"},{default:m(()=>[n(r,{label:s(l)("image")},{default:m(()=>[n(o,{modelValue:s(e).editComponent.value,"onUpdate:modelValue":t[0]||(t[0]=_=>s(e).editComponent.value=_),limit:1},null,8,["modelValue"])]),_:1},8,["label"])]),_:1})]),h(a.$slots,"common")])}}}),M=Object.freeze(Object.defineProperty({__proto__:null,default:y},Symbol.toStringTag,{value:"Module"}));export{M as _};
