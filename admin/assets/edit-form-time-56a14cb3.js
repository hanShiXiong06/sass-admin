import{d as D,aJ as E,Q as M,h as p,c as k,R as f,a0 as c,u as o,a as _,b as m,e as l,w as d,s,v as C,i as g,t as S,C as y,Z as H,F as T,K as x,L as B,aS as U,at as F,au as N,bT as P,M as W}from"./index-0e396751.js";/* empty css                *//* empty css                       *//* empty css                 *//* empty css                     *//* empty css                  *//* empty css                       *//* empty css                 *//* empty css                  */import"./el-form-item-4ed993c7.js";import{u as R}from"./diy-0604e925.js";const j={class:"content-wrap"},I={class:"style-wrap"},O=D({__name:"edit-form-time",setup(z,{expose:b}){const e=R();e.editComponent.ignore=["componentBgUrl"],e.editComponent.verify=n=>({code:!0,message:""}),E(()=>{if(!e.editComponent.field.default){const n=new Date,t=String(n.getHours()).padStart(2,"0"),i=String(n.getMinutes()).padStart(2,"0");e.editComponent.field.default=`${t}:${i}`}});const h=n=>{if(n){const t=new Date,i=String(t.getHours()).padStart(2,"0"),a=String(t.getMinutes()).padStart(2,"0");e.editComponent.field.default=`${i}:${a}`}};return M(()=>e.editComponent.timeWay,n=>{const t=new Date,i=String(t.getHours()).padStart(2,"0"),a=String(t.getMinutes()).padStart(2,"0");e.editComponent.field.default=`${i}:${a}`}),b({}),(n,t)=>{const i=x,a=B,w=U,u=F,V=N,v=P,$=W;return p(),k(T,null,[f(_("div",j,[m(n.$slots,"field"),l($,{"label-width":"100px",class:"px-[10px]",onSubmit:t[4]||(t[4]=H(()=>{},["prevent"]))},{default:d(()=>[l(a,{label:o(s)("formPlaceholder")},{default:d(()=>[l(i,{modelValue:o(e).editComponent.placeholder,"onUpdate:modelValue":t[0]||(t[0]=r=>o(e).editComponent.placeholder=r),modelModifiers:{trim:!0},placeholder:o(s)("formPlaceholderTips"),clearable:"",maxlength:"15","show-word-limit":""},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),l(a,{label:o(s)("默认值")},{default:d(()=>[l(w,{modelValue:o(e).editComponent.defaultControl,"onUpdate:modelValue":t[1]||(t[1]=r=>o(e).editComponent.defaultControl=r),onChange:h},null,8,["modelValue"])]),_:1},8,["label"]),o(e).editComponent.defaultControl?(p(),C(a,{key:0},{default:d(()=>[l(V,{modelValue:o(e).editComponent.timeWay,"onUpdate:modelValue":t[2]||(t[2]=r=>o(e).editComponent.timeWay=r)},{default:d(()=>[l(u,{label:"current"},{default:d(()=>[g(S(o(s)("当天时间")),1)]),_:1}),l(u,{label:"diy"},{default:d(()=>[g(S(o(s)("指定时间")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1})):y("",!0),o(e).editComponent.defaultControl&&o(e).editComponent.timeWay=="diy"?(p(),C(a,{key:1},{default:d(()=>[l(v,{modelValue:o(e).editComponent.field.default,"onUpdate:modelValue":t[3]||(t[3]=r=>o(e).editComponent.field.default=r),placeholder:"请选择时间",format:"HH:mm","value-format":"HH:mm"},null,8,["modelValue"])]),_:1})):y("",!0)]),_:1}),m(n.$slots,"other")],512),[[c,o(e).editTab=="content"]]),f(_("div",I,[m(n.$slots,"style-field"),m(n.$slots,"style")],512),[[c,o(e).editTab=="style"]])],64)}}}),te=Object.freeze(Object.defineProperty({__proto__:null,default:O},Symbol.toStringTag,{value:"Module"}));export{te as _};
