import{d as U,y as z,q as L,r as x,h as y,c as M,e as a,w as l,a as d,t as m,u as i,i as u,s as n,R,v as I,B as S,a5 as j,ap as q,U as J,E as K,K as W,L as Y,M as A,a7 as G,ac as H,J as O,ad as Q,W as X,Y as Z}from"./index-0e396751.js";/* empty css                   *//* empty css                      *//* empty css                 *//* empty css               *//* empty css                  *//* empty css                  *//* empty css                     *//* empty css                  *//* empty css                 *//* empty css                    */import"./el-tooltip-4ed993c7.js";/* empty css                 *//* empty css                        *//* empty css                        *//* empty css                *//* empty css                */import"./el-form-item-4ed993c7.js";/* empty css                  */import{l as ee,n as te,o as ae}from"./goods-995cb067.js";import{_ as oe}from"./brand-edit.vue_vue_type_style_index_0_lang-6a56230e.js";/* empty css                  *//* empty css                   */import"./index-11d71036.js";import"./index.vue_vue_type_style_index_0_lang-d82568af.js";import"./attachment-c52133c7.js";import"./index.vue_vue_type_script_setup_true_lang-34f8a01a.js";/* empty css               *//* empty css               *//* empty css                  *//* empty css                    *//* empty css                    */import"./el-dropdown-item-4ed993c7.js";import"./index.vue_vue_type_script_setup_true_lang-077a27b1.js";/* empty css                   */import"./index.vue_vue_type_script_setup_true_lang-5014406f.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./sortable.esm-be94e56d.js";const re=""+new URL("brand_default-ac73116e.png",import.meta.url).href,ne={class:"main-container"},le={class:"flex justify-between items-center"},ie={class:"text-page-title"},se={class:"mt-[10px]"},de={class:"h-[30px]"},me=d("div",{class:"image-slot"},[d("img",{class:"w-[30px] h-[30px]",src:re})],-1),pe={class:"mt-[16px] flex justify-end"},Xe=U({__name:"brand_list",setup(ce){const B=z().meta.title,t=L({page:1,limit:10,total:0,loading:!0,data:[],searchParam:{brand_name:"",order:"",sort:""}}),f=x(),C=o=>{let e="";o.order=="ascending"?e="asc":o.order=="descending"&&(e="desc"),e&&(t.searchParam.order=o.prop,t.searchParam.sort=e),s()},s=(o=1)=>{t.loading=!0,t.page=o,ee({page:t.page,limit:t.limit,...t.searchParam}).then(e=>{t.loading=!1,t.data=e.data.data,t.total=e.data.total}).catch(()=>{t.loading=!1})};s();const c=x(null),w=()=>{c.value.setFormData(),c.value.showDialog=!0},E=o=>{c.value.setFormData(o),c.value.showDialog=!0},k=o=>{j.confirm(n("brandDeleteTips"),n("warning"),{confirmButtonText:n("confirm"),cancelButtonText:n("cancel"),type:"warning"}).then(()=>{te(o).then(()=>{s()}).catch(()=>{})})},D=q((o,e)=>{if(isNaN(o)||!/^\d{0,8}$/.test(o)){J({type:"warning",message:`${n("sortTips")}`});return}o>99999999&&(e.sort=99999999),ae({brand_id:e.brand_id,sort:o}).then(p=>{})}),P=o=>{o&&(o.resetFields(),s())};return(o,e)=>{const p=K,b=W,h=Y,V=A,v=G,_=H,N=O,$=Q,F=X,T=Z;return y(),M("div",ne,[a(v,{class:"box-card !border-none",shadow:"never"},{default:l(()=>[d("div",le,[d("span",ie,m(i(B)),1),a(p,{type:"primary",onClick:w},{default:l(()=>[u(m(i(n)("addBrand")),1)]),_:1})]),a(v,{class:"box-card !border-none my-[10px] table-search-wrap",shadow:"never"},{default:l(()=>[a(V,{inline:!0,model:t.searchParam,ref_key:"searchFormRef",ref:f},{default:l(()=>[a(h,{label:i(n)("brandName"),prop:"brand_name"},{default:l(()=>[a(b,{modelValue:t.searchParam.brand_name,"onUpdate:modelValue":e[0]||(e[0]=r=>t.searchParam.brand_name=r),modelModifiers:{trim:!0},placeholder:i(n)("brandNamePlaceholder")},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),a(h,null,{default:l(()=>[a(p,{type:"primary",onClick:e[1]||(e[1]=r=>s())},{default:l(()=>[u(m(i(n)("search")),1)]),_:1}),a(p,{onClick:e[2]||(e[2]=r=>P(f.value))},{default:l(()=>[u(m(i(n)("reset")),1)]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),d("div",se,[R((y(),I($,{data:t.data,size:"large",onSortChange:C},{empty:l(()=>[d("span",null,m(t.loading?"":i(n)("emptyData")),1)]),default:l(()=>[a(_,{prop:"brand_name",label:i(n)("brandName"),"min-width":"120"},null,8,["label"]),a(_,{label:i(n)("logo"),"min-width":"120"},{default:l(({row:r})=>[d("div",de,[a(N,{class:"w-[30px] h-[30px]",src:i(S)(r.logo),fit:"contain"},{error:l(()=>[me]),_:2},1032,["src"])])]),_:1},8,["label"]),a(_,{prop:"sort",label:i(n)("sort"),"min-width":"120",sortable:"custom"},{default:l(({row:r})=>[a(b,{modelValue:r.sort,"onUpdate:modelValue":g=>r.sort=g,modelModifiers:{trim:!0},class:"!w-[100px]",maxlength:"8",onBlur:g=>i(D)(r.sort,r)},null,8,["modelValue","onUpdate:modelValue","onBlur"])]),_:1},8,["label"]),a(_,{label:i(n)("operation"),fixed:"right",align:"right","min-width":"120"},{default:l(({row:r})=>[a(p,{type:"primary",link:"",onClick:g=>E(r)},{default:l(()=>[u(m(i(n)("edit")),1)]),_:2},1032,["onClick"]),a(p,{type:"primary",link:"",onClick:g=>k(r.brand_id)},{default:l(()=>[u(m(i(n)("delete")),1)]),_:2},1032,["onClick"])]),_:1},8,["label"])]),_:1},8,["data"])),[[T,t.loading]]),d("div",pe,[a(F,{"current-page":t.page,"onUpdate:current-page":e[3]||(e[3]=r=>t.page=r),"page-size":t.limit,"onUpdate:page-size":e[4]||(e[4]=r=>t.limit=r),layout:"total, sizes, prev, pager, next, jumper",total:t.total,onSizeChange:e[5]||(e[5]=r=>s()),onCurrentChange:s},null,8,["current-page","page-size","total"])])]),a(oe,{ref_key:"editBrandDialog",ref:c,onComplete:s},null,512)]),_:1})])}}});export{Xe as default};
