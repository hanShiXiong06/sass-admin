import{d as O,x as U,cB as Y,n as H,aK as Q,a$ as W,r as T,a3 as R,f as X,h as C,c as Z,e as l,w as r,a as m,t as g,u as i,i as b,q as a,R as ee,s as D,A as te,j as $,B as N,a5 as oe,E as ae,ay as se,az as ie,ad as ne,J as le,al as re,ae as ce,a7 as de,Y as pe,p as _e,g as me}from"./index-99f00cf3.js";/* empty css                   *//* empty css                *//* empty css                 *//* empty css                    */import"./el-tooltip-4ed993c7.js";/* empty css                  *//* empty css                     *//* empty css               *//* empty css                 *//* empty css                        *//* empty css                        *//* empty css                    *//* empty css                  */import{_ as ue}from"./category_default-03996666.js";import{g as ge,u as fe,r as he,s as ye}from"./goods-c64a9d59.js";import{_ as be}from"./category-edit.vue_vue_type_style_index_0_lang-19885827.js";import{_ as ve}from"./goods-category-spread-popup.vue_vue_type_script_setup_true_lang-f1287189.js";import{S as xe}from"./sortable.esm-be94e56d.js";import{_ as Ce}from"./_plugin-vue_export-helper-c27b6911.js";/* empty css                  *//* empty css                   *//* empty css                *//* empty css                  */import"./index-015c0c3e.js";import"./index.vue_vue_type_style_index_0_lang-2e54ab99.js";import"./attachment-6fc096d0.js";import"./index.vue_vue_type_script_setup_true_lang-a59c79e6.js";import"./el-form-item-4ed993c7.js";/* empty css                 *//* empty css                  *//* empty css                  *//* empty css                      *//* empty css               *//* empty css               *//* empty css                    *//* empty css                    */import"./el-dropdown-item-4ed993c7.js";import"./index.vue_vue_type_script_setup_true_lang-bde8c802.js";/* empty css                   */import"./index.vue_vue_type_script_setup_true_lang-49ab6f2c.js";import"./browser-a1ac24ac.js";const j=v=>(_e("data-v-b14362d6"),v=v(),me(),v),we={class:"main-container"},ke={class:"flex justify-between items-center mb-[5px]"},Ee={class:"text-page-title"},Ie={class:"mt-[10px]"},Te=j(()=>m("i",{class:"order-0 iconfont icontuodong vues-rank mr-[8px]"},null,-1)),Re={class:"order-2"},De={class:"h-[30px]"},Se=j(()=>m("div",{class:"image-slot"},[m("img",{class:"w-[30px] h-[30px]",src:ue})],-1)),Be=O({__name:"category",setup(v){const V=U().meta.title,S=Y(),s=H({loading:!0,data:[]});Q(()=>{W(()=>{F()}),w()});const _=T([]),F=()=>{const e=S.value.$el.querySelector(".el-table__body-wrapper tbody");xe.create(e,{handle:".vues-rank",animation:300,onMove:({dragged:n,related:c})=>{const d=_.value[n.rowIndex],u=_.value[c.rowIndex];if(d.pid!==u.pid)return!1},onStart:()=>{_.value=G(R(s.data))},onEnd:n=>{var x;const c=_.value[n.oldIndex],d=_.value[n.newIndex];if(n.oldIndex===n.newIndex||c.pid!==d.pid||_.value.indexOf(c)<0)return!1;const o=_.value.splice(n.oldIndex,1)[0];_.value.splice(n.newIndex,0,o);const k=d.pid,E=(x=_.value.filter(p=>p.pid===k))==null?void 0:x.map((p,h)=>{if(p.level===1&&p.category_id===o.category_id&&(s.data=s.data.filter(t=>t.category_id!==o.category_id),s.data.splice(h,0,o)),p.level===2&&p.category_id===o.category_id){const t=s.data.findIndex(I=>I.category_id===p.pid),y=R(s.data[t].child_list.filter(I=>I.category_id!==o.category_id));s.data[t].child_list=[],s.data[t].child_list.push(...y),s.data[t].child_list.splice(h,0,o)}return{category_id:p.category_id,sort:9999-h}});L({category_sort_array:E})}})},G=(e,n="child_list")=>{const c=[],d=u=>{u&&u.length>0&&u.filter(o=>o).forEach(o=>{c.push(o),d(o[n]||[])})};return d(e),c},w=()=>{s.loading=!0,ge().then(e=>{s.loading=!1,s.data=e.data}).catch(()=>{s.loading=!1})},L=e=>{fe(e).then(n=>{})},M=e=>{e.is_show=e.is_show===1?2:1;const n=R(e);delete n.child_list,he(n)},f=T(null),P=()=>{f.value.setFormData(),f.value.showDialog=!0},q=e=>{f.value.setFormData(e),f.value.showDialog=!0},z=e=>{oe.confirm(!e.child_list||!e.child_list.length?a("categoryDeleteTips"):a("categoryDeleteTips1"),a("warning"),{confirmButtonText:a("confirm"),cancelButtonText:a("cancel"),type:"warning"}).then(()=>{ye(e.category_id).then(()=>{w()}).catch(()=>{})})},B=T(null),A=e=>{B.value.show(e)},J=X(),K=e=>{J.push({path:e})};return(e,n)=>{const c=ae,d=se,u=ie,o=ne,k=le,E=re,x=ce,p=de,h=pe;return C(),Z("div",we,[l(p,{class:"box-card !border-none",shadow:"never"},{default:r(()=>[m("div",ke,[m("span",Ee,g(i(V)),1),l(c,{type:"primary",onClick:P},{default:r(()=>[b(g(i(a)("addCategory")),1)]),_:1})]),l(u,{class:"demo-tabs","model-value":"/phone_shop/goods/category",onTabChange:K},{default:r(()=>[l(d,{label:i(a)("tabGoodsCategory"),name:"/phone_shop/goods/category"},null,8,["label"]),l(d,{label:i(a)("tabGoodsCategoryConfig"),name:"/phone_shop/goods/category/config"},null,8,["label"])]),_:1}),m("div",Ie,[ee((C(),D(x,{data:s.data,ref_key:"tableRef",ref:S,size:"large","row-key":"category_id","tree-props":{hasChildren:"hasChildren",children:"child_list"}},{empty:r(()=>[m("span",null,g(s.loading?"":i(a)("emptyData")),1)]),default:r(()=>[l(o,{label:i(a)("categoryName"),"min-width":"120"},{default:r(({row:t})=>[Te,m("span",Re,g(t.category_name),1)]),_:1},8,["label"]),l(o,{label:i(a)("分类id"),"min-width":"120",prop:"category_id"},null,8,["label"]),l(o,{label:i(a)("image"),width:"170",align:"left"},{default:r(({row:t})=>[m("div",De,[l(k,{class:"w-[30px] h-[30px]",src:i(te)(t.image),fit:"contain"},{error:r(()=>[Se]),_:2},1032,["src"])])]),_:1},8,["label"]),l(o,{prop:"is_show",label:i(a)("isShow"),width:"400"},{default:r(({row:t})=>[l(E,{class:"cursor-pointer",type:t.is_show!=2?"success":"danger",onClick:y=>M(t)},{default:r(()=>[b(g(t.is_show!=2?"是":"否"),1)]),_:2},1032,["type","onClick"])]),_:1},8,["label"]),l(o,{label:i(a)("operation"),fixed:"right",align:"right",width:"200"},{default:r(({row:t})=>[l(c,{type:"primary",link:"",onClick:y=>A(t)},{default:r(()=>[b(g(i(a)("spreadGoodsCategory")),1)]),_:2},1032,["onClick"]),i($)().siteInfo.site_id==t.site_id?(C(),D(c,{key:0,type:"primary",link:"",onClick:y=>q(t)},{default:r(()=>[b(g(i(a)("edit")),1)]),_:2},1032,["onClick"])):N("",!0),i($)().siteInfo.site_id==t.site_id?(C(),D(c,{key:1,type:"primary",link:"",onClick:y=>z(t)},{default:r(()=>[b(g(i(a)("delete")),1)]),_:2},1032,["onClick"])):N("",!0)]),_:1},8,["label"])]),_:1},8,["data"])),[[h,s.loading]])]),l(be,{ref_key:"editCategoryDialog",ref:f,onComplete:w},null,512)]),_:1}),l(ve,{ref_key:"goodsCategorySpreadPopupRef",ref:B},null,512)])}}});const xt=Ce(Be,[["__scopeId","data-v-b14362d6"]]);export{xt as default};
