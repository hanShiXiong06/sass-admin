import{d as le,y as ne,cG as ie,r as y,q as M,aJ as F,a$ as re,a3 as R,f as ce,a2 as de,h as x,c as pe,e as o,w as i,a as c,t as v,u as l,i as T,s as n,R as _e,v as D,B as P,j as q,C as U,a5 as me,U as ue,aS as ge,E as he,ax as fe,ay as ye,ac as ve,J as be,ad as we,a7 as xe,bk as Ce,Y as ke,p as Ie,g as Ve}from"./index-0e396751.js";/* empty css                   *//* empty css                        *//* empty css                *//* empty css                 *//* empty css                    */import"./el-tooltip-4ed993c7.js";/* empty css                  *//* empty css                     *//* empty css                 *//* empty css                        *//* empty css               *//* empty css                    *//* empty css                  *//* empty css                  */import{_ as G}from"./category_default-35af358b.js";import{c as Ee,u as Re,e as z,d as Te,m as De,s as Se}from"./recycle_category-c8e0ff19.js";import{_ as Be}from"./recycle-category-edit.vue_vue_type_style_index_0_lang-7de4e518.js";import{S as $e}from"./sortable.esm-be94e56d.js";/* empty css                   */import{_ as Ue}from"./_plugin-vue_export-helper-c27b6911.js";/* empty css                  *//* empty css                   *//* empty css                */import"./index-11d71036.js";import"./index.vue_vue_type_style_index_0_lang-d82568af.js";import"./attachment-c52133c7.js";import"./index.vue_vue_type_script_setup_true_lang-34f8a01a.js";import"./el-form-item-4ed993c7.js";/* empty css                 *//* empty css                  *//* empty css                  *//* empty css                      *//* empty css               *//* empty css               *//* empty css                  *//* empty css                    *//* empty css                    */import"./el-dropdown-item-4ed993c7.js";import"./index.vue_vue_type_script_setup_true_lang-077a27b1.js";/* empty css                   */import"./index.vue_vue_type_script_setup_true_lang-5014406f.js";const N=C=>(Ie("data-v-0b34738e"),C=C(),Ve(),C),Ne={class:"recycle-category"},je={class:"flex justify-between items-center mb-[5px]"},Le={class:"text-page-title"},Me={class:"flex items-center"},Fe={class:"mt-[10px]"},Pe=N(()=>c("i",{class:"order-0 iconfont icontuodong vues-rank mr-[8px]"},null,-1)),qe={class:"order-2"},ze={class:"h-[30px]"},Ge=N(()=>c("div",{class:"image-slot"},[c("img",{class:"w-[30px] h-[30px]",src:G})],-1)),Je={class:"h-[30px]"},We=N(()=>c("div",{class:"image-slot"},[c("img",{class:"w-[30px] h-[30px]",src:G})],-1)),Oe=le({__name:"recycle_category",setup(C){const J=ne().meta.title,j=ie();y("");const s=M({loading:!0,data:[]});F(()=>{re(()=>{W()}),k()});const m=y([]),W=()=>{const e=j.value.$el.querySelector(".el-table__body-wrapper tbody");$e.create(e,{handle:".vues-rank",animation:300,onMove:({dragged:a,related:d})=>{const p=m.value[a.rowIndex],u=m.value[d.rowIndex];if(p.pid!==u.pid)return!1},onStart:()=>{m.value=O(R(s.data))},onEnd:a=>{var E;const d=m.value[a.oldIndex],p=m.value[a.newIndex];if(a.oldIndex===a.newIndex||d.pid!==p.pid||m.value.indexOf(d)<0)return!1;const r=m.value.splice(a.oldIndex,1)[0];m.value.splice(a.newIndex,0,r);const g=p.pid,V=(E=m.value.filter(_=>_.pid===g))==null?void 0:E.map((_,w)=>{if(_.level===1&&_.category_id===r.category_id&&(s.data=s.data.filter(h=>h.category_id!==r.category_id),s.data.splice(w,0,r)),_.level===2&&_.category_id===r.category_id){const h=s.data.findIndex(t=>t.category_id===_.pid),$=R(s.data[h].child_list.filter(t=>t.category_id!==r.category_id));s.data[h].child_list=[],s.data[h].child_list.push(...$),s.data[h].child_list.splice(w,0,r)}return{category_id:_.category_id,sort:9999-w}});Y({category_sort_array:V})}})},O=(e,a="child_list")=>{const d=[],p=u=>{u&&u.length>0&&u.filter(r=>r).forEach(r=>{d.push(r),p(r[a]||[])})};return p(e),d},k=()=>{s.loading=!0,Ee().then(e=>{s.loading=!1,s.data=e.data}).catch(()=>{s.loading=!1})},Y=e=>{Re(e).then(a=>{})},I=M({show:!1,index:0}),L=y([]),A=e=>{I.show=!0,L.value=[H(e.images)]},H=e=>e.startsWith("http://")||e.startsWith("https://")?e:""+e,K=e=>{const a=R(e);delete a.child_list,z(a)},Q=e=>{const a=R(e);delete a.child_list,z(a)},b=y(null),X=()=>{b.value.setFormData(),b.value.showDialog=!0},Z=e=>{b.value.setFormData(e),b.value.showDialog=!0},ee=e=>{me.confirm(!e.child_list||!e.child_list.length?n("categoryDeleteTips"):n("categoryDeleteTips1"),n("warning"),{confirmButtonText:n("confirm"),cancelButtonText:n("cancel"),type:"warning"}).then(()=>{Te(e.category_id).then(()=>{k()}).catch(()=>{})})},te=ce(),ae=e=>{te.push({path:e})},S=y({is_enable:!1}),B=y(!1),oe=async()=>{try{const e=await De();e.data&&(e.data.is_enable=e.data.is_enable==1,S.value=e.data)}catch(e){console.error(e)}},se=async()=>{B.value=!0;try{await Se(),ue.success("设置成功"),k()}catch(e){console.error(e)}B.value=!1};return F(()=>{oe()}),(e,a)=>{const d=ge,p=he,u=fe,r=ye,g=ve,V=be,E=we,_=xe,w=de("goods-category-spread-popup"),h=Ce,$=ke;return x(),pe("div",Ne,[o(_,{shadow:"never"},{default:i(()=>[c("div",je,[c("span",Le,v(l(J)),1),c("div",Me,[T(" 是否使用平台的报价 "),o(d,{modelValue:S.value.is_enable,"onUpdate:modelValue":a[0]||(a[0]=t=>S.value.is_enable=t),loading:B.value,onChange:se},null,8,["modelValue","loading"]),o(p,{class:"ml-2 mr-2",type:"primary",onClick:X},{default:i(()=>[T(v(l(n)("addCategory")),1)]),_:1})])]),o(r,{class:"demo-tabs","model-value":"/phone_shop_price/goods/category",onTabChange:ae},{default:i(()=>[o(u,{label:l(n)("tabGoodsCategory"),name:"/phone_shop_price/goods/category"},null,8,["label"])]),_:1}),c("div",Fe,[_e((x(),D(E,{data:s.data,ref_key:"tableRef",ref:j,size:"large","row-key":"category_id","tree-props":{hasChildren:"hasChildren",children:"child_list"}},{empty:i(()=>[c("span",null,v(s.loading?"":l(n)("emptyData")),1)]),default:i(()=>[o(g,{label:l(n)("categoryName"),"min-width":"120"},{default:i(({row:t})=>[Pe,c("span",qe,v(t.category_name),1)]),_:1},8,["label"]),o(g,{label:l(n)("image"),width:"170",align:"left"},{default:i(({row:t})=>[c("div",ze,[o(V,{class:"w-[30px] h-[30px]",src:l(P)(t.image),fit:"contain"},{error:i(()=>[Ge]),_:2},1032,["src"])])]),_:1},8,["label"]),o(g,{prop:"is_show",label:l(n)("是否显示")},{default:i(({row:t})=>[o(d,{modelValue:t.is_show,"onUpdate:modelValue":f=>t.is_show=f,"active-value":1,"inactive-value":0,onChange:f=>K(t)},null,8,["modelValue","onUpdate:modelValue","onChange"])]),_:1},8,["label"]),o(g,{prop:"need_vip",label:l(n)("是否需要VIP")},{default:i(({row:t})=>[o(d,{modelValue:t.need_vip,"onUpdate:modelValue":f=>t.need_vip=f,"active-value":1,"inactive-value":0,onChange:f=>Q(t)},null,8,["modelValue","onUpdate:modelValue","onChange"])]),_:1},8,["label"]),o(g,{label:l(n)("报价"),width:"170",align:"left"},{default:i(({row:t})=>[c("div",Je,[o(V,{class:"w-[30px] h-[30px]",onClick:f=>A(t),src:l(P)(t.images),fit:"contain"},{error:i(()=>[We]),_:2},1032,["onClick","src"])])]),_:1},8,["label"]),o(g,{label:l(n)("operation"),fixed:"right",align:"right",width:"200"},{default:i(({row:t})=>[l(q)().siteInfo.site_id==t.site_id?(x(),D(p,{key:0,type:"primary",link:"",onClick:f=>Z(t)},{default:i(()=>[T(v(l(n)("edit")),1)]),_:2},1032,["onClick"])):U("",!0),l(q)().siteInfo.site_id==t.site_id?(x(),D(p,{key:1,type:"primary",link:"",onClick:f=>ee(t)},{default:i(()=>[T(v(l(n)("delete")),1)]),_:2},1032,["onClick"])):U("",!0)]),_:1},8,["label"])]),_:1},8,["data"])),[[$,s.loading]])]),o(Be,{ref_key:"editCategoryDialog",ref:b,onComplete:k},null,512)]),_:1}),o(w,{ref:"goodsCategorySpreadPopupRef"},null,512),I.show?(x(),D(h,{key:0,"url-list":L.value,onClose:a[1]||(a[1]=t=>I.show=!1),"initial-index":I.index,"zoom-rate":1},null,8,["url-list","initial-index"])):U("",!0)])}}});const jt=Ue(Oe,[["__scopeId","data-v-0b34738e"]]);export{jt as default};
