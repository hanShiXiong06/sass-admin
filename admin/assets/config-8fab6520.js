import{O as x,d as F,f as k,r as u,n as y,l as R,q as a,h as f,c as G,R as N,s as b,w as r,u as s,a as n,t as _,e as i,B as q,i as M,a3 as T,L,a7 as O,M as S,E as U,Y as j}from"./index-99f00cf3.js";/* empty css                   *//* empty css                  *//* empty css                *//* empty css                */import{_ as A}from"./index.vue_vue_type_script_setup_true_lang-2f14504d.js";import"./el-form-item-4ed993c7.js";import I from"./index-015c0c3e.js";import"./index.vue_vue_type_style_index_0_lang-2e54ab99.js";/* empty css                  *//* empty css                   */import"./attachment-6fc096d0.js";import"./index.vue_vue_type_script_setup_true_lang-a59c79e6.js";/* empty css                        *//* empty css                 *//* empty css               *//* empty css                  *//* empty css                  *//* empty css                     *//* empty css                  *//* empty css                      *//* empty css                    */import"./el-tooltip-4ed993c7.js";/* empty css                 *//* empty css               *//* empty css               *//* empty css                    *//* empty css                    */import"./el-dropdown-item-4ed993c7.js";import"./index.vue_vue_type_script_setup_true_lang-bde8c802.js";/* empty css                   */import"./index.vue_vue_type_script_setup_true_lang-49ab6f2c.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./sortable.esm-be94e56d.js";function P(){return x.get("shop_giftcard/config")}function Y(g){return x.put("shop_giftcard/config",g,{showErrorMessage:!0,showSuccessMessage:!0})}const $={class:"main-container"},z={class:"text text-[14px] leading-[25px]"},H={class:"text-[var(--el-text-color-secondary)] text-[12px] leading-[25px]"},J={class:"fixed-footer-wrap"},K={class:"fixed-footer"},Ne=F({__name:"config",setup(g){k();const l=u(!1),t=y({...{banner:"",tips:""}}),w=R(()=>({banner:[{required:!0,message:a("bannerPlaceholder"),trigger:"blur"}]})),v=u();(()=>{l.value=!0,P().then(o=>{Object.keys(t).forEach(e=>{o.data[e]!=null&&(t[e]=o.data[e]),t.goods_ids=o.data.goods_ids&&o.data.goods_ids!="0"?o.data.goods_ids.split(","):[]}),l.value=!1})})();const d=u(!1),V=()=>{var e;var o=T(t);(e=v.value)==null||e.validate(p=>{if(p){if(d.value)return;d.value=!0,Y(o).then(m=>{d.value=!1}).catch(()=>{d.value=!1})}})};return(o,e)=>{const p=I,m=L,C=A,h=O,E=S,B=U,D=j;return f(),G("div",$,[N((f(),b(h,{class:"card !border-none",shadow:"never"},{default:r(()=>[l.value?q("",!0):(f(),b(E,{key:0,class:"page-form",model:t,"label-width":"180px",rules:s(w),ref_key:"formRef",ref:v},{default:r(()=>[n("div",z,_(s(a)("titleActivate")),1),i(h,{class:"card !border-none",shadow:"never"},{default:r(()=>[i(m,{label:s(a)("labelBalance"),prop:"banner"},{default:r(()=>[n("div",null,[i(p,{modelValue:t.banner,"onUpdate:modelValue":e[0]||(e[0]=c=>t.banner=c),limit:1},null,8,["modelValue"]),n("p",H,_(s(a)("balanceTips")),1)])]),_:1},8,["label"]),i(m,{label:s(a)("labelTips"),prop:"tips"},{default:r(()=>[i(C,{modelValue:t.tips,"onUpdate:modelValue":e[1]||(e[1]=c=>t.tips=c),height:300,class:"editor-width"},null,8,["modelValue"])]),_:1},8,["label"])]),_:1})]),_:1},8,["model","rules"]))]),_:1})),[[D,l.value]]),n("div",J,[n("div",K,[i(B,{type:"primary",onClick:V},{default:r(()=>[M(_(s(a)("save")),1)]),_:1})])])])}}});export{Ne as default};
