import{d as S,c7 as j,y as N,f as P,r as k,cc as T,q as $,m as q,s as n,h as y,c as A,a as s,u as o,t as p,R as I,v as L,w as m,e as i,i as x,K as O,L as U,M as z,a7 as K,E as M,Y}from"./index-0e396751.js";/* empty css                   *//* empty css                  *//* empty css                *//* empty css                */import{_ as G}from"./index.vue_vue_type_script_setup_true_lang-406de1d6.js";import"./el-form-item-4ed993c7.js";/* empty css                 */import{a as H,e as J}from"./agreement-eeb5ef30.js";import"./index.vue_vue_type_style_index_0_lang-d82568af.js";/* empty css                  *//* empty css                   */import"./attachment-c52133c7.js";import"./index.vue_vue_type_script_setup_true_lang-34f8a01a.js";/* empty css                        *//* empty css               *//* empty css                  *//* empty css                  *//* empty css                     *//* empty css                  *//* empty css                      *//* empty css                    */import"./el-tooltip-4ed993c7.js";/* empty css                 *//* empty css               *//* empty css               *//* empty css                  *//* empty css                    *//* empty css                    */import"./el-dropdown-item-4ed993c7.js";import"./index.vue_vue_type_script_setup_true_lang-077a27b1.js";/* empty css                   */import"./index.vue_vue_type_script_setup_true_lang-5014406f.js";import"./_plugin-vue_export-helper-c27b6911.js";const Q={class:"main-container"},W={class:"detail-head"},X=s("span",{class:"iconfont iconxiangzuojiantou !text-xs"},null,-1),Z={class:"ml-[1px]"},ee=s("span",{class:"adorn"},"|",-1),te={class:"right"},oe={class:"fixed-footer-wrap"},ae={class:"fixed-footer"},Le=S({__name:"agreement_edit",setup(se){j();const d=N(),_=P(),f=d.query.key||"",r=k(!1),w=T(),V=d.meta.title,v={agreement_key:"",content:"",title:"",agreement_key_name:""},t=$({...v});r.value=!0,f&&(async(c="")=>{Object.assign(t,v);const e=await(await H(c)).data;Object.keys(t).forEach(a=>{e[a]!=null&&(t[a]=e[a])}),console.log(t),r.value=!1})(f);const g=k(),E=q(()=>({title:[{required:!0,message:n("titlePlaceholder"),trigger:"blur"}]})),C=async c=>{r.value||!c||await c.validate(async e=>{if(e){r.value=!0;const a=t;a.key=t.agreement_key,J(a).then(u=>{r.value=!1,h()}).catch(()=>{r.value=!1})}})},h=()=>{w.removeTab(d.path),_.push({path:"/tk_jhkd/baseconfig/agreement"})};return(c,e)=>{const a=O,u=U,D=G,R=z,B=K,b=M,F=Y;return y(),A("div",Q,[s("div",W,[s("div",{class:"left",onClick:e[0]||(e[0]=l=>o(_).push({path:"/setting/agreement"}))},[X,s("span",Z,p(o(n)("returnToPreviousPage")),1)]),ee,s("span",te,p(o(V)),1)]),I((y(),L(B,{class:"box-card !border-none",shadow:"never"},{default:m(()=>[i(R,{model:t,"label-width":"90px",ref_key:"formRef",ref:g,rules:o(E),class:"page-form"},{default:m(()=>[i(u,{label:o(n)("title"),prop:"title"},{default:m(()=>[i(a,{modelValue:t.title,"onUpdate:modelValue":e[1]||(e[1]=l=>t.title=l),clearable:"",placeholder:o(n)("titlePlaceholder"),class:"input-width",maxlength:"20"},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),i(u,{label:o(n)("content")},{default:m(()=>[i(D,{modelValue:t.content,"onUpdate:modelValue":e[2]||(e[2]=l=>t.content=l)},null,8,["modelValue"])]),_:1},8,["label"])]),_:1},8,["model","rules"])]),_:1})),[[F,r.value]]),s("div",oe,[s("div",ae,[i(b,{type:"primary",onClick:e[3]||(e[3]=l=>C(g.value))},{default:m(()=>[x(p(o(n)("save")),1)]),_:1}),i(b,{onClick:e[4]||(e[4]=l=>h())},{default:m(()=>[x(p(o(n)("cancel")),1)]),_:1})])])])}}});export{Le as default};
