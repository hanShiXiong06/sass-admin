import{d as z,x as V,n as $,r as u,h,c as L,e as o,w as l,a as c,t as m,u as e,i as _,q as n,R as N,s as R,a5 as j,E as I,K as U,L as M,M as S,a7 as q,ad as K,ae as W,W as Y,Y as A}from"./index-904cb7a2.js";/* empty css                   *//* empty css                      *//* empty css                 *//* empty css               *//* empty css                  *//* empty css                  *//* empty css                     *//* empty css                  *//* empty css                 *//* empty css                    */import"./el-tooltip-4ed993c7.js";/* empty css                        *//* empty css                *//* empty css                */import"./el-form-item-4ed993c7.js";/* empty css                  */import{_ as G,g as H,d as J}from"./category-edit.vue_vue_type_style_index_0_lang-08456b31.js";import{_ as O}from"./_plugin-vue_export-helper-c27b6911.js";/* empty css                  *//* empty css                   */const Q={class:"main-container"},X={class:"flex justify-between items-center"},Z={class:"text-lg"},ee={class:"mt-[10px]"},te={class:"mt-[16px] flex justify-end"},ae=z({__name:"category",setup(oe){const C=V().meta.title;let t=$({page:1,limit:10,total:0,loading:!0,data:[],searchParam:{name:""}});const g=u();u([]);const i=(s=1)=>{t.loading=!0,t.page=s,H({page:t.page,limit:t.limit,...t.searchParam}).then(a=>{t.loading=!1,t.data=a.data.data,t.total=a.data.total}).catch(()=>{t.loading=!1})};i();const p=u(null),b=()=>{p.value.setFormData(),p.value.showDialog=!0},x=s=>{p.value.setFormData(s),p.value.showDialog=!0},k=s=>{j.confirm(n("categoryDeleteTips"),n("warning"),{confirmButtonText:n("confirm"),cancelButtonText:n("cancel"),type:"warning"}).then(()=>{J(s).then(()=>{i()}).catch(()=>{})})},w=s=>{s&&(s.resetFields(),i())};return(s,a)=>{const d=I,E=U,f=M,D=S,y=q,v=K,B=W,F=Y,P=A;return h(),L("div",Q,[o(y,{class:"box-card !border-none",shadow:"never"},{default:l(()=>[c("div",X,[c("span",Z,m(e(C)),1),o(d,{type:"primary",onClick:b},{default:l(()=>[_(m(e(n)("addCategory")),1)]),_:1})]),o(y,{class:"box-card !border-none my-[10px] table-search-wrap",shadow:"never"},{default:l(()=>[o(D,{inline:!0,model:e(t).searchParam,ref_key:"searchFormRef",ref:g},{default:l(()=>[o(f,{label:e(n)("name"),prop:"name"},{default:l(()=>[o(E,{modelValue:e(t).searchParam.name,"onUpdate:modelValue":a[0]||(a[0]=r=>e(t).searchParam.name=r),placeholder:e(n)("namePlaceholder")},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),o(f,null,{default:l(()=>[o(d,{type:"primary",onClick:a[1]||(a[1]=r=>i())},{default:l(()=>[_(m(e(n)("search")),1)]),_:1}),o(d,{onClick:a[2]||(a[2]=r=>w(g.value))},{default:l(()=>[_(m(e(n)("reset")),1)]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),c("div",ee,[N((h(),R(B,{data:e(t).data,size:"large"},{empty:l(()=>[c("span",null,m(e(t).loading?"":e(n)("emptyData")),1)]),default:l(()=>[o(v,{prop:"name",label:e(n)("name"),"min-width":"120","show-overflow-tooltip":!0},null,8,["label"]),o(v,{label:e(n)("operation"),fixed:"right","min-width":"120"},{default:l(({row:r})=>[o(d,{type:"primary",link:"",onClick:T=>x(r)},{default:l(()=>[_(m(e(n)("edit")),1)]),_:2},1032,["onClick"]),o(d,{type:"primary",link:"",onClick:T=>k(r.id)},{default:l(()=>[_(m(e(n)("delete")),1)]),_:2},1032,["onClick"])]),_:1},8,["label"])]),_:1},8,["data"])),[[P,e(t).loading]]),c("div",te,[o(F,{"current-page":e(t).page,"onUpdate:current-page":a[3]||(a[3]=r=>e(t).page=r),"page-size":e(t).limit,"onUpdate:page-size":a[4]||(a[4]=r=>e(t).limit=r),layout:"total, sizes, prev, pager, next, jumper",total:e(t).total,onSizeChange:a[5]||(a[5]=r=>i()),onCurrentChange:i},null,8,["current-page","page-size","total"])])]),o(G,{ref_key:"editCategoryDialog",ref:p,onComplete:i},null,512)]),_:1})])}}});const De=O(ae,[["__scopeId","data-v-213b1c45"]]);export{De as default};
