import{d as C,x as k,f as E,r as d,h as u,c as R,R as w,s as T,w as e,e as a,a as V,t as r,u as n,q as l,i as f,au as B,av as F,L as y,a7 as D,M as L,Y as N}from"./index-904cb7a2.js";/* empty css                   *//* empty css                *//* empty css                */import"./el-form-item-4ed993c7.js";/* empty css                       *//* empty css                 */import{a as I,s as q}from"./task-ea40231e.js";import{_ as G}from"./_plugin-vue_export-helper-c27b6911.js";const M={class:"main-container"},O={class:"text text-[14px] leading-[25px]"},S=C({__name:"config",setup(U){const m=k();E(),m.meta.title;const s=d({is_open:"0"}),o=d(!0);(()=>{I().then(t=>{o.value=!1,s.value=t.data})})();const p=()=>{if(o.value)return!1;o.value=!0,q({is_open:s.value.is_open}).then(t=>{o.value=!1})};return(t,i)=>{const _=B,g=F,v=y,c=D,h=L,x=N;return u(),R("div",M,[w((u(),T(c,{class:"card !border-none",shadow:"never"},{default:e(()=>[a(h,{class:"page-form",model:t.formData,"label-width":"180px",rules:t.formRules,ref:"formRef"},{default:e(()=>[V("div",O,r(n(l)("baseTitle")),1),a(c,{class:"card !border-none",shadow:"never"},{default:e(()=>[a(v,{label:n(l)("isEnable")},{default:e(()=>[a(g,{modelValue:s.value.is_open,"onUpdate:modelValue":i[0]||(i[0]=b=>s.value.is_open=b),onChange:p},{default:e(()=>[a(_,{label:"1"},{default:e(()=>[f(r(n(l)("are")),1)]),_:1}),a(_,{label:"0"},{default:e(()=>[f(r(n(l)("no")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["label"])]),_:1})]),_:1},8,["model","rules"])]),_:1})),[[x,o.value]])])}}});const X=G(S,[["__scopeId","data-v-c49a240c"]]);export{X as default};