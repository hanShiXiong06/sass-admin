import{d as y,r as m,q as x,H as n,m as b,Q as d,h as E,v as R,w as _,e as u,a,R as j,a0 as B,aS as O,K as S,L as C,M as D}from"./index-0e396751.js";/* empty css                */import"./el-form-item-4ed993c7.js";/* empty css                 *//* empty css                  */const F=a("span",{class:"el-form-item__label"},"完成下单",-1),I={class:"flex mt-[10px]"},M=a("span",{class:"el-form-item__label"},"每完成一单可获得",-1),N={class:"w-[70px]"},U=a("span",{class:"ml-[10px] el-form-item__label"},"成长值",-1),z=y({__name:"growth-rule-buyorder",props:{modelValue:{type:Object,default:()=>({})}},emits:["update:modelValue"],setup(p,{expose:v,emit:c}){const f=p,e=m({is_use:0,growth:""}),i=m(null),h=x({growth:[{validator:(o,t,l)=>{e.value.is_use&&(n.empty(e.value.growth)&&l("请输入发放成长值数量"),n.digits(e.value.growth)||l("成长值数量格式错误"),e.value.growth<=0&&l("成长值数量不能小于等于0")),l()}}]}),s=b({get(){return f.modelValue},set(o){c("update:modelValue",o)}});return d(()=>s.value,(o,t)=>{(!t||!Object.keys(t).length)&&Object.keys(o).length&&(e.value=s.value)},{immediate:!0}),d(()=>e.value,()=>{s.value=e.value},{deep:!0}),v({verify:async()=>{var t;let o=!0;return await((t=i.value)==null?void 0:t.validate(l=>{o=l})),o}}),(o,t)=>{const l=O,w=S,g=C,V=D;return E(),R(V,{ref_key:"formRef",ref:i,model:e.value,rules:h},{default:_(()=>[u(g,{label:"",prop:"growth"},{default:_(()=>[a("div",null,[a("div",null,[F,u(l,{modelValue:e.value.is_use,"onUpdate:modelValue":t[0]||(t[0]=r=>e.value.is_use=r),"active-value":1,"inactive-value":0},null,8,["modelValue"])]),j(a("div",I,[M,a("div",N,[u(w,{modelValue:e.value.growth,"onUpdate:modelValue":t[1]||(t[1]=r=>e.value.growth=r),modelModifiers:{number:!0,trim:!0},clearable:""},null,8,["modelValue"])]),U],512),[[B,e.value.is_use]])])]),_:1})]),_:1},8,["model","rules"])}}});export{z as default};
