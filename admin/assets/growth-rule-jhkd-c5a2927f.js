import{d as y,r as n,n as x,H as m,l as b,Q as d,h as j,s as E,w as _,e as r,a,R,a0 as B,aT as O,K as k,L as C,M as D}from"./index-904cb7a2.js";/* empty css                */import"./el-form-item-4ed993c7.js";/* empty css                 *//* empty css                  */const F=a("span",{class:"el-form-item__label"},"聚合快递订单",-1),I={class:"flex mt-[10px]"},M=a("span",{class:"el-form-item__label"},"每完成一单聚合快递订单获得",-1),N={class:"w-[70px]"},S=a("span",{class:"ml-[10px] el-form-item__label"},"成长值",-1),q=y({__name:"growth-rule-jhkd",props:{modelValue:{type:Object,default:()=>({})}},emits:["update:modelValue"],setup(p,{expose:v,emit:c}){const f=p,e=n({is_use:0,growth:""}),i=n(null),h=x({growth:[{validator:(o,t,l)=>{e.value.is_use&&(m.empty(e.value.growth)&&l("请输入发放成长值数量"),m.digits(e.value.growth)||l("成长值数量格式错误"),e.value.growth<=0&&l("成长值数量不能小于等于0")),l()}}]}),s=b({get(){return f.modelValue},set(o){c("update:modelValue",o)}});return d(()=>s.value,(o,t)=>{(!t||!Object.keys(t).length)&&Object.keys(o).length&&(e.value=s.value)},{immediate:!0}),d(()=>e.value,()=>{s.value=e.value},{deep:!0}),v({verify:async()=>{var t;let o=!0;return await((t=i.value)==null?void 0:t.validate(l=>{o=l})),o}}),(o,t)=>{const l=O,w=k,g=C,V=D;return j(),E(V,{ref_key:"formRef",ref:i,model:e.value,rules:h},{default:_(()=>[r(g,{label:"",prop:"growth"},{default:_(()=>[a("div",null,[a("div",null,[F,r(l,{modelValue:e.value.is_use,"onUpdate:modelValue":t[0]||(t[0]=u=>e.value.is_use=u),"active-value":1,"inactive-value":0},null,8,["modelValue"])]),R(a("div",I,[M,a("div",N,[r(w,{modelValue:e.value.growth,"onUpdate:modelValue":t[1]||(t[1]=u=>e.value.growth=u),modelModifiers:{number:!0,trim:!0},clearable:""},null,8,["modelValue"])]),S],512),[[B,e.value.is_use]])])]),_:1})]),_:1},8,["model","rules"])}}});export{q as default};
