import{d as B,x as T,n as V,r as G,h as m,c as f,e as a,w as o,a as c,t as n,u as e,i as g,q as t,R as N,s as y,A as $,a5 as F,E as L,ad as R,J as j,ae as q,a7 as z,Y as A}from"./index-904cb7a2.js";/* empty css                   *//* empty css                *//* empty css                 *//* empty css                    */import"./el-tooltip-4ed993c7.js";/* empty css                  *//* empty css                     *//* empty css                 *//* empty css                        *//* empty css                        *//* empty css               *//* empty css                  */import{_ as I}from"./category_default-6c62f083.js";import{V as J,W as M}from"./vipcard-0c5838f8.js";import{_ as S}from"./category-edit.vue_vue_type_script_setup_true_lang-66f8460d.js";/* empty css                  *//* empty css                   *//* empty css                */import"./index-e888fa8d.js";import"./index.vue_vue_type_style_index_0_lang-68b58aeb.js";import"./attachment-731ba4e8.js";import"./index.vue_vue_type_script_setup_true_lang-e98f54f2.js";import"./el-form-item-4ed993c7.js";/* empty css                 *//* empty css                  *//* empty css                  *//* empty css                      *//* empty css               *//* empty css               *//* empty css                    *//* empty css                    */import"./el-dropdown-item-4ed993c7.js";import"./index.vue_vue_type_script_setup_true_lang-a9b96fa2.js";/* empty css                   */import"./index.vue_vue_type_script_setup_true_lang-ee99396e.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./sortable.esm-be94e56d.js";const W={class:"main-container"},Y={class:"flex justify-between items-center"},H={class:"text-page-title"},K={class:"mt-[20px]"},O={key:1,class:"w-[50px] h-[50px]",src:I},Rt=B({__name:"category",setup(P){const h=T().meta.title,i=V({loading:!0,data:[]}),p=(s=1)=>{i.loading=!0,J().then(u=>{i.loading=!1,i.data=u.data}).catch(()=>{i.loading=!1})};p();const r=G(null),v=()=>{r.value.setFormData(),r.value.showDialog=!0},C=s=>{r.value.setFormData(s),r.value.showDialog=!0},b=s=>{F.confirm(t("vipcardGoodsCategoryDeleteTips"),t("warning"),{confirmButtonText:t("confirm"),cancelButtonText:t("cancel"),type:"warning"}).then(()=>{M(s).then(()=>{p()}).catch(()=>{})})};return(s,u)=>{const d=L,_=R,x=j,k=q,w=z,E=A;return m(),f("div",W,[a(w,{class:"box-card !border-none",shadow:"never"},{default:o(()=>[c("div",Y,[c("span",H,n(e(h)),1),a(d,{type:"primary",class:"w-[100px]",onClick:v},{default:o(()=>[g(n(e(t)("addCategory")),1)]),_:1})]),c("div",K,[N((m(),y(k,{data:i.data,"row-key":"category_id",size:"large"},{empty:o(()=>[c("span",null,n(i.loading?"":e(t)("emptyData")),1)]),default:o(()=>[a(_,{prop:"category_name",label:e(t)("categoryName"),"min-width":"120"},null,8,["label"]),a(_,{label:e(t)("image"),"min-width":"100",align:"left"},{default:o(({row:l})=>[l.image_thumb_small?(m(),y(x,{key:0,src:e($)(l.image_thumb_small),class:"h-[50px]"},null,8,["src"])):(m(),f("img",O))]),_:1},8,["label"]),a(_,{label:e(t)("operation"),fixed:"right",align:"right","min-width":"100"},{default:o(({row:l})=>[a(d,{type:"primary",link:"",onClick:D=>C(l)},{default:o(()=>[g(n(e(t)("edit")),1)]),_:2},1032,["onClick"]),a(d,{type:"primary",link:"",onClick:D=>b(l.category_id)},{default:o(()=>[g(n(e(t)("delete")),1)]),_:2},1032,["onClick"])]),_:1},8,["label"])]),_:1},8,["data"])),[[E,i.loading]])]),a(S,{ref_key:"editVipcardGoodsCategoryDialog",ref:r,onComplete:p},null,512)]),_:1})])}}});export{Rt as default};
