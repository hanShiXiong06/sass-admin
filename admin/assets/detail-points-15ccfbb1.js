import{d as y,r as n,n as b,q as r,l as g,Q as u,h,s as x,w as i,e as V,u as w,a as B,t as N,L as j,M as E}from"./index-904cb7a2.js";/* empty css                */import"./el-form-item-4ed993c7.js";import{_ as O}from"./_plugin-vue_export-helper-c27b6911.js";const R=y({__name:"detail-points",props:{modelValue:{type:Object,default:()=>({})}},emits:["update:modelValue"],setup(d,{expose:m,emit:p}){const f=d,l=n({value:""}),o=n(null),_={required:/[\S]+/,number:/^\d{0,10}$/,digit:/^\d{0,10}(.?\d{0,2})$/,special:/^\d{0,10}(.?\d{0,3})$/},c=b({value:[{trigger:"blur",validator:(t,e,a)=>{e===null||e===""?a():isNaN(e)||!_.number.test(e)?a(r("limitTips")):e<0?a(r("valueMustBeGreaterThanZero")):a()}}]}),s=g({get(){return f.modelValue},set(t){p("update:modelValue",t)}});return u(()=>s.value,(t,e)=>{(!e||!Object.keys(e).length)&&Object.keys(t).length&&(l.value=s.value)},{immediate:!0}),u(()=>l.value,()=>{s.value=l.value},{deep:!0}),m({verify:async()=>{var e;let t=!0;return await((e=o.value)==null?void 0:e.validate(a=>{t=a})),t}}),(t,e)=>{const a=j,v=E;return h(),x(v,{ref_key:"formRef",ref:o,"label-width":"120px",model:l.value,rules:c,"label-position":"left"},{default:i(()=>[V(a,{label:w(r)("point"),prop:"value"},{default:i(()=>[B("span",null,N(l.value.value),1)]),_:1},8,["label"])]),_:1},8,["model","rules"])}}});const F=O(R,[["__scopeId","data-v-89fbeee1"]]);export{F as default};
