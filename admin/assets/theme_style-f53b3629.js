import{d as E,y as B,r as d,h as p,c as h,e as a,w as o,a as t,t as c,u as m,R as D,v as N,s as v,B as j,$ as x,C as R,i as T,a3 as V,J as $,ac as L,E as z,ad as S,a7 as I,Y as J}from"./index-0e396751.js";/* empty css                   *//* empty css                *//* empty css                 *//* empty css                    */import"./el-tooltip-4ed993c7.js";/* empty css                  *//* empty css                     *//* empty css                  *//* empty css                        *//* empty css               *//* empty css                 *//* empty css                        */import{_ as O}from"./icon-addon-339e16d0.js";import{y as Y}from"./diy-e7cda029.js";import{_ as q}from"./theme-list.vue_vue_type_script_setup_true_lang-3f275a09.js";/* empty css                  *//* empty css                   *//* empty css                */import"./el-form-item-4ed993c7.js";import"./edit-theme.vue_vue_type_script_setup_true_lang-375e19d7.js";/* empty css                        *//* empty css                 */import"./add-theme.vue_vue_type_script_setup_true_lang-55a88ae6.js";import"./diy-0604e925.js";const A={class:"main-container"},F={class:"flex justify-between items-center"},G={class:"text-page-title"},H={class:"flex items-center"},K=t("div",{class:"flex items-center w-full h-full"},[t("img",{class:"w-full h-full",src:O,alt:""})],-1),M={class:"flex-1 ml-2 truncate"},P={key:0,class:"rounded-[3px] inline-flex items-center justify-center border-[1px] border-solid border-[#f2f2f2] overflow-hidden"},Q=t("span",{class:"w-[18px] h-[18px]",style:{backgroundColor:"#fff"}},null,-1),Ce=E({__name:"theme_style",setup(U){const b=B().meta.title,s=d(!0),_=d(null),u=d([]),f=()=>{s.value=!0,Y().then(n=>{let l=V(n.data);for(let i in l)l[i].key=i;u.value=Object.values(l),s.value=!1})};f();const y=n=>{_.value.open(n)};return(n,l)=>{const i=$,r=L,g=z,w=S,k=I,C=J;return p(),h("div",A,[a(k,{class:"box-card !border-none",shadow:"never"},{default:o(()=>[t("div",F,[t("span",G,c(m(b)),1)]),D((p(),N(w,{data:u.value,size:"large",class:"mt-[20px]"},{empty:o(()=>[t("span",null,c(s.value?"":m(v)("emptyData")),1)]),default:o(()=>[a(r,{label:"应用","min-width":"120"},{default:o(({row:e})=>[t("div",H,[a(i,{class:"w-[40px] h-[40px] rounded-md overflow-hidden",src:m(j)(e.icon),fit:"contain"},{error:o(()=>[K]),_:2},1032,["src"]),t("div",M,c(e.addon_title),1)])]),_:1}),a(r,{label:"配色名称","min-width":"120"},{default:o(({row:e})=>[t("div",null,c(e.color_name),1)]),_:1}),a(r,{label:"配色方案","min-width":"120"},{default:o(({row:e})=>[e.value?(p(),h("div",P,[t("span",{class:"w-[18px] h-[18px]",style:x({backgroundColor:e.value["--primary-color"]})},null,4),t("span",{class:"w-[18px] h-[18px]",style:x({backgroundColor:e.value["--primary-help-color"]})},null,4),Q])):R("",!0)]),_:1}),a(r,{label:m(v)("operation"),align:"right",fixed:"right",width:"100"},{default:o(({row:e})=>[a(g,{type:"primary",link:"",onClick:X=>y(e)},{default:o(()=>[T("编辑")]),_:2},1032,["onClick"])]),_:1},8,["label"])]),_:1},8,["data"])),[[C,s.value]])]),_:1}),a(q,{ref_key:"themeListRef",ref:_,onConfirm:l[0]||(l[0]=e=>f())},null,512)])}}});export{Ce as default};
