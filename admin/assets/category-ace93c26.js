import{d as T,x as G,n as N,r as f,h as m,c as y,e as o,w as a,a as c,t as l,u as e,i as g,q as t,R as O,s as h,A as V,a5 as $,E as A,ad as F,cB as L,ae as R,a7 as j,Y as q}from"./index-904cb7a2.js";/* empty css                   *//* empty css                *//* empty css                 *//* empty css                    */import"./el-tooltip-4ed993c7.js";/* empty css                  *//* empty css                     *//* empty css                  *//* empty css                        *//* empty css               *//* empty css                  */import{_ as z}from"./category_default-6c62f083.js";import{g as M,d as S}from"./category-fcb685df.js";import{_ as Y}from"./category-edit.vue_vue_type_script_setup_true_lang-58e99a91.js";/* empty css                  *//* empty css                   *//* empty css                */import"./index-e888fa8d.js";/* empty css                        */import"./index.vue_vue_type_style_index_0_lang-68b58aeb.js";import"./attachment-731ba4e8.js";import"./index.vue_vue_type_script_setup_true_lang-e98f54f2.js";import"./el-form-item-4ed993c7.js";/* empty css                 *//* empty css                  *//* empty css                  *//* empty css                      *//* empty css                 *//* empty css               *//* empty css               *//* empty css                    *//* empty css                    */import"./el-dropdown-item-4ed993c7.js";import"./index.vue_vue_type_script_setup_true_lang-a9b96fa2.js";/* empty css                   */import"./index.vue_vue_type_script_setup_true_lang-ee99396e.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./sortable.esm-be94e56d.js";const H={class:"main-container"},I={class:"flex justify-between items-center"},J={class:"text-page-title"},K={class:"mt-[20px]"},P={key:1,class:"w-[50px] h-[50px]",src:z},Lt=T({__name:"category",setup(Q){const v=G().meta.title,i=N({loading:!0,data:[]});f();const p=(n=1)=>{i.loading=!0,M().then(u=>{i.loading=!1,i.data=u.data}).catch(()=>{i.loading=!1})};p();const r=f(null),C=()=>{r.value.setFormData(),r.value.showDialog=!0},x=n=>{r.value.setFormData(n),r.value.showDialog=!0},b=n=>{$.confirm(t("o2oGoodsCategoryDeleteTips"),t("warning"),{confirmButtonText:t("confirm"),cancelButtonText:t("cancel"),type:"warning"}).then(()=>{S(n).then(()=>{p()}).catch(()=>{})})};return(n,u)=>{const d=A,_=F,k=L,w=R,E=j,D=q;return m(),y("div",H,[o(E,{class:"box-card !border-none",shadow:"never"},{default:a(()=>[c("div",I,[c("span",J,l(e(v)),1),o(d,{type:"primary",class:"w-[100px]",onClick:C},{default:a(()=>[g(l(e(t)("addCategory")),1)]),_:1})]),c("div",K,[O((m(),h(w,{data:i.data,"row-key":"category_id",size:"large"},{empty:a(()=>[c("span",null,l(i.loading?"":e(t)("emptyData")),1)]),default:a(()=>[o(_,{prop:"category_name",label:e(t)("categoryName"),"min-width":"120"},null,8,["label"]),o(_,{label:e(t)("image"),"min-width":"100",align:"left"},{default:a(({row:s})=>[s.image?(m(),h(k,{key:0,src:e(V)(s.image)},null,8,["src"])):(m(),y("img",P))]),_:1},8,["label"]),o(_,{label:e(t)("operation"),fixed:"right",align:"right","min-width":"100"},{default:a(({row:s})=>[o(d,{type:"primary",link:"",onClick:B=>x(s)},{default:a(()=>[g(l(e(t)("edit")),1)]),_:2},1032,["onClick"]),o(d,{type:"primary",link:"",onClick:B=>b(s.category_id)},{default:a(()=>[g(l(e(t)("delete")),1)]),_:2},1032,["onClick"])]),_:1},8,["label"])]),_:1},8,["data"])),[[D,i.loading]])]),o(Y,{ref_key:"editO2oGoodsCategoryDialog",ref:r,onComplete:p},null,512)]),_:1})])}}});export{Lt as default};
