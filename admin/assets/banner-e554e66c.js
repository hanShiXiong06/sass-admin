import{d as S,r as u,aJ as V,h,c as I,e as a,w as o,a as l,i as d,R as T,v as L,t as g,u as N,B as M,a5 as R,U as v,E as U,J as $,ac as F,aE as J,ad as j,a7 as A,Y,p as q,g as z}from"./index-0e396751.js";/* empty css                   *//* empty css                *//* empty css                 *//* empty css                    */import"./el-tooltip-4ed993c7.js";/* empty css                  *//* empty css                     *//* empty css                 *//* empty css                        *//* empty css                        *//* empty css               *//* empty css                 *//* empty css                        *//* empty css                  */import{f as G,h as H,i as K}from"./recycle_category-c8e0ff19.js";import{_ as O}from"./banner-edit.vue_vue_type_style_index_0_lang-b62ad8a8.js";import{_ as P}from"./_plugin-vue_export-helper-c27b6911.js";/* empty css                  *//* empty css                   *//* empty css                */import"./el-form-item-4ed993c7.js";import"./index-11d71036.js";import"./index.vue_vue_type_style_index_0_lang-d82568af.js";import"./attachment-c52133c7.js";import"./index.vue_vue_type_script_setup_true_lang-34f8a01a.js";/* empty css                  *//* empty css                  *//* empty css                      *//* empty css               *//* empty css               *//* empty css                  *//* empty css                    *//* empty css                    */import"./el-dropdown-item-4ed993c7.js";import"./index.vue_vue_type_script_setup_true_lang-077a27b1.js";/* empty css                   */import"./index.vue_vue_type_script_setup_true_lang-5014406f.js";import"./sortable.esm-be94e56d.js";const Q=c=>(q("data-v-49f56957"),c=c(),z(),c),W={class:"banner-manage"},X={class:"flex justify-between items-center mb-[5px]"},Z=Q(()=>l("span",{class:"text-page-title"},"轮播图管理",-1)),ee={class:"flex items-center"},te={class:"mt-[10px]"},ae=S({__name:"banner",setup(c){const p=u(!1),f=u([]),r=u(!1),m=async()=>{p.value=!0;try{const e=await G();f.value=e.data}catch(e){console.error(e)}p.value=!1},b=()=>{var e;(e=r.value)==null||e.setFormData(),r.value.showDialog=!0},y=e=>{var n;(n=r.value)==null||n.setFormData(e),r.value.showDialog=!0},x=e=>{R.confirm("确定要删除该轮播图吗？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(async()=>{try{await H(e.id),v.success("删除成功"),m()}catch(n){console.error(n)}})},w=async(e,n)=>{try{await K(e,n),v.success("排序修改成功"),m()}catch(s){console.error(s)}};return V(()=>{m()}),(e,n)=>{const s=U,E=$,_=F,C=J,B=j,k=A,D=Y;return h(),I("div",W,[a(k,{shadow:"never"},{default:o(()=>[l("div",X,[Z,l("div",ee,[a(s,{type:"primary",onClick:b},{default:o(()=>[d(" 添加轮播图 ")]),_:1})])]),l("div",te,[T((h(),L(B,{data:f.value},{empty:o(()=>[l("span",null,g(p.value?"":"暂无数据"),1)]),default:o(()=>[a(_,{label:"轮播图","min-width":"200"},{default:o(({row:t})=>[a(E,{style:{width:"200px",height:"100px"},src:N(M)(t.image[0]),fit:"cover","preview-src-list":t.image},null,8,["src","preview-src-list"])]),_:1}),a(_,{prop:"sort",label:"排序",width:"150"},{default:o(({row:t})=>[a(C,{modelValue:t.sort,"onUpdate:modelValue":i=>t.sort=i,min:0,onChange:i=>w(t.id,i)},null,8,["modelValue","onUpdate:modelValue","onChange"])]),_:1}),a(_,{prop:"create_at",label:"创建时间","min-width":"160"},{default:o(({row:t})=>[d(g(new Date(t.create_at*1e3).toLocaleString()),1)]),_:1}),a(_,{label:"操作",fixed:"right",align:"right",width:"150"},{default:o(({row:t})=>[a(s,{type:"primary",link:"",onClick:i=>y(t)},{default:o(()=>[d("编辑")]),_:2},1032,["onClick"]),a(s,{type:"danger",link:"",onClick:i=>x(t)},{default:o(()=>[d("删除")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])),[[D,p.value]])])]),_:1}),a(O,{ref_key:"bannerEditRef",ref:r,onComplete:m},null,512)])}}});const Ye=P(ae,[["__scopeId","data-v-49f56957"]]);export{Ye as default};
