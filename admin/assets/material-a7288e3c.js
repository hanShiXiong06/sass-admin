import{d as se,x as re,f as ie,n as T,r as g,Q as ne,ap as M,h as m,c as v,e as o,w as i,a as n,t as u,u as r,i as h,q as s,F as I,T as $,s as x,A as F,R as ce,a0 as me,B as z,U as L,a5 as pe,E as ue,ay as de,az as _e,ac as fe,aD as ge,L as ve,M as he,a7 as xe,J as be,V as ye,aw as ke,W as we}from"./index-99f00cf3.js";/* empty css                      *//* empty css                 *//* empty css               *//* empty css                  *//* empty css                  *//* empty css                     *//* empty css                  *//* empty css                    */import{_ as Ce}from"./index.vue_vue_type_script_setup_true_lang-49ab6f2c.js";/* empty css                 *//* empty css                        *//* empty css                *//* empty css                */import"./el-form-item-4ed993c7.js";/* empty css                    *//* empty css                  */import{_ as Ee}from"./attachment-6fc096d0.js";import{g as Me,i as Fe,j as ze}from"./material-c5754327.js";import{_ as De}from"./material-edit.vue_vue_type_style_index_0_lang-f5ac95dd.js";import{_ as Pe}from"./material-move.vue_vue_type_style_index_0_lang-120a7762.js";/* empty css                   */import"./index.vue_vue_type_script_setup_true_lang-a59c79e6.js";/* empty css                  *//* empty css                   */import"./el-tooltip-4ed993c7.js";/* empty css               *//* empty css               *//* empty css                    *//* empty css                    */import"./el-dropdown-item-4ed993c7.js";import"./index.vue_vue_type_script_setup_true_lang-bde8c802.js";/* empty css                   */import"./_plugin-vue_export-helper-c27b6911.js";import"./index-015c0c3e.js";import"./index.vue_vue_type_style_index_0_lang-2e54ab99.js";import"./sortable.esm-be94e56d.js";const Ve={class:"main-container material"},je={class:"flex flex-col h-full"},Be={class:"flex justify-between items-center"},Se={class:"text-lg"},Te={class:"flex justify-between items-center"},Ie={key:0,class:"flex flex-wrap gap-x-[10px] gap-y-[10px]"},$e=["onClick"],Le={class:"absolute z-[1] flex items-center justify-center w-full h-full inset-0 bg-black bg-opacity-60"},Oe={class:"file-box-active absolute z-[1] bottom-0 right-0 w-full h-full"},Re={class:"absolute bottom-[2px] right-[2px] text-white z-[2] leading-none"},Ne={key:1,class:"flex justify-center items-center mt-[19%]"},Ue={class:"flex flex-col justify-center items-center"},Ge=n("img",{src:Ee,class:"max-w-[130px] max-h-[130px] mb-[15px]"},null,-1),Ae={class:"text-[var(--el-text-color-secondary)] text-[14px]"},qe={class:"flex justify-between items-center mt-[16px]"},Je={key:0,class:"flex items-center"},St=se({__name:"material",setup(Qe){const O=re(),R=ie(),N=O.meta.title,t=T({page:1,limit:30,total:0,loading:!0,data:[],searchParam:{group_id:""}}),D=g(),y=T([]);(()=>{Me({}).then(a=>{const e=a.data;e&&y.splice(0,y.length,...e)})})();const d=(a=1)=>{t.loading=!0,t.page=a,Fe({page:t.page,limit:t.limit,...t.searchParam}).then(e=>{t.loading=!1,t.data=e.data.data,t.data.forEach(p=>{p.image_list=[],p.image_list.push(F(p.url))}),t.total=e.data.total}).catch(()=>{t.loading=!1})};d();const k=g(null),U=()=>{C(),k.value.setFormData(),k.value.showDialog=!0},w=()=>{_.value=!_.value,c.value.length&&E()},C=()=>{_.value=!1,c.value.length&&E()},_=g(!1),f=g({}),c=g([]),G=a=>{let e=c.value.indexOf(a);return e==-1?0:e+1},A=a=>{_.value&&(f.value[a.material_id]?(delete f.value[a.material_id],c.value.splice(c.value.indexOf(a.material_id),1)):(f.value[a.material_id]=M(a),c.value.push(a.material_id)))},b=g(!1);ne(b,()=>{if(b.value){const a=Object.keys(M(f.value));t.data.forEach(e=>{a.includes(e.material_id)||(f.value[e.material_id]=M(e),c.value.push(e.material_id))})}else E()});const E=()=>{f.value={},c.value=[]},P=g(),q=()=>{var a;if(!c.value.length){L({message:s("materialIdPlaceholder"),type:"warning"});return}(a=P.value)==null||a.setFormData(c.value)},J=()=>{w(),d()},Q=()=>{if(!c.value.length){L({message:s("materialIdPlaceholder"),type:"warning"});return}pe.confirm(s("materialDeleteTips"),s("warning"),{confirmButtonText:s("confirm"),cancelButtonText:s("cancel"),type:"warning"}).then(()=>{ze({material_ids:c.value.toString()}).then(()=>{d()})})},W=a=>{R.push({path:a})},H=()=>{C(),d()},K=a=>{a&&(a.resetFields(),C(),d())};return(a,e)=>{const p=ue,V=de,X=_e,Y=fe,Z=ge,j=ve,ee=he,B=xe,S=be,te=Ce,ae=ye,le=ke,oe=we;return m(),v("div",Ve,[o(B,{class:"box-card !border-none full-container",shadow:"never"},{default:i(()=>[n("div",je,[n("div",Be,[n("span",Se,u(r(N)),1),o(p,{type:"primary",onClick:U},{default:i(()=>[h(u(r(s)("addMaterial")),1)]),_:1})]),o(X,{class:"demo-tabs","model-value":"/shop_giftcard/material",onTabChange:W},{default:i(()=>[o(V,{label:r(s)("list"),name:"/shop_giftcard/material"},null,8,["label"]),o(V,{label:r(s)("group"),name:"/shop_giftcard/material/group"},null,8,["label"])]),_:1}),o(B,{class:"box-card !border-none my-[10px] table-search-wrap",shadow:"never"},{default:i(()=>[n("div",Te,[o(ee,{inline:!0,model:t.searchParam,ref_key:"searchFormRef",ref:D},{default:i(()=>[o(j,{label:r(s)("materialId"),prop:"group_id"},{default:i(()=>[o(Z,{modelValue:t.searchParam.group_id,"onUpdate:modelValue":e[0]||(e[0]=l=>t.searchParam.group_id=l),placeholder:r(s)("materialGroupIdPlaceholder"),clearable:""},{default:i(()=>[(m(!0),v(I,null,$(y,l=>(m(),x(Y,{key:l.group_id,label:l.group_name,value:l.group_id},null,8,["label","value"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"]),o(j,null,{default:i(()=>[o(p,{type:"primary",onClick:e[1]||(e[1]=l=>H())},{default:i(()=>[h(u(r(s)("search")),1)]),_:1}),o(p,{onClick:e[2]||(e[2]=l=>K(D.value))},{default:i(()=>[h(u(r(s)("reset")),1)]),_:1})]),_:1})]),_:1},8,["model"]),_.value===!1?(m(),x(p,{key:0,class:"ml-[10px]",type:"primary",onClick:w},{default:i(()=>[h(u(r(s)("edit")),1)]),_:1})):(m(),x(p,{key:1,class:"ml-[10px]",type:"primary",onClick:w},{default:i(()=>[h(u(r(s)("complete")),1)]),_:1}))])]),_:1}),o(ae,{class:"flex-1"},{default:i(()=>[t.data.length?(m(),v("div",Ie,[(m(!0),v(I,null,$(t.data,(l,He)=>(m(),v("div",{class:"w-[257.50px]",key:l.material_id},[n("div",{class:"material-wrap w-full rounded cursor-pointer overflow-hidden relative flex items-center justify-center h-[120px]",onClick:Ke=>A(l)},[_.value?(m(),x(S,{key:0,src:r(F)(l.url),fit:"contain"},null,8,["src"])):(m(),x(S,{key:1,src:r(F)(l.url),fit:"contain","preview-src-list":l.image_list},null,8,["src","preview-src-list"])),ce(n("div",Le,[o(te,{name:"element Select",color:"#fff",size:"40px"}),n("div",Oe,[n("span",Re,u(G(l.material_id)),1)])],512),[[me,f.value[l.material_id]]])],8,$e)]))),128))])):z("",!0),!t.data.length&&!t.loading?(m(),v("div",Ne,[n("div",Ue,[Ge,n("span",Ae,u(r(s)("materialCartEmpty")),1)])])):z("",!0)]),_:1}),n("div",qe,[n("div",null,[_.value?(m(),v("div",Je,[o(le,{modelValue:b.value,"onUpdate:modelValue":e[3]||(e[3]=l=>b.value=l),label:r(s)("selectAll"),size:"large"},null,8,["modelValue","label"]),o(p,{class:"ml-[15px]",onClick:Q},{default:i(()=>[h(u(r(s)("delete")),1)]),_:1}),o(p,{onClick:q},{default:i(()=>[h(u(r(s)("move")),1)]),_:1})])):z("",!0)]),o(oe,{"current-page":t.page,"onUpdate:current-page":e[4]||(e[4]=l=>t.page=l),"page-size":t.limit,"onUpdate:page-size":e[5]||(e[5]=l=>t.limit=l),layout:"total, sizes, prev, pager, next, jumper",total:t.total,onSizeChange:e[6]||(e[6]=l=>d()),onCurrentChange:d},null,8,["current-page","page-size","total"])])]),o(De,{ref_key:"editMaterialDialog",ref:k,onComplete:d},null,512),o(Pe,{ref_key:"MoveMaterialDialog",ref:P,onComplete:J},null,512)]),_:1})])}}});export{St as default};