import{d as z,k as G,c7 as J,j as O,m as I,r as x,G as a,h as l,v as C,w as s,a as e,e as n,u as r,B as X,c as m,T as v,i as g,t as p,F as y,R as V,b6 as E,s as d,x as L,J as q,d6 as K,d7 as P,E as Q,X as W,A as Y,p as Z,g as ee,y as te}from"./index-0e396751.js";/* empty css                  *//* empty css                   *//* empty css                  *//* empty css                           */import{_ as oe}from"./index.vue_vue_type_script_setup_true_lang-5014406f.js";/* empty css                 *//* empty css                        */import{_ as ie}from"./logo.default-551e66a4.js";import se from"./user-info-49ff633f.js";import ne from"./layout-setting-7933bfb3.js";import{_ as re}from"./_plugin-vue_export-helper-c27b6911.js";/* empty css                */import"./el-form-item-4ed993c7.js";/* empty css                 *//* empty css                    *//* empty css                  *//* empty css                     */import"./el-dropdown-item-4ed993c7.js";/* empty css                  */import"./member_head-d9fd7b2c.js";import"./personal-cee2189e.js";import"./index.vue_vue_type_script_setup_true_lang-676dc2b1.js";import"./index-11d71036.js";import"./index.vue_vue_type_style_index_0_lang-d82568af.js";import"./attachment-c52133c7.js";/* empty css                   */import"./index.vue_vue_type_script_setup_true_lang-34f8a01a.js";/* empty css               *//* empty css                  *//* empty css                  *//* empty css                      *//* empty css                    */import"./el-tooltip-4ed993c7.js";/* empty css               *//* empty css               *//* empty css                  *//* empty css                    */import"./index.vue_vue_type_script_setup_true_lang-077a27b1.js";/* empty css                   */import"./sortable.esm-be94e56d.js";/* empty css                        *//* empty css                  *//* empty css                        *//* empty css                  */const ae=u=>(Z("data-v-24aec059"),u=u(),ee(),u),le={class:"flex items-center"},pe={class:"w-[120px] flex justify-center items-center flex-shrink-0"},ce={class:"w-[120px] h-[40px] overflow-hidden"},me=ae(()=>e("div",{class:"flex justify-center items-center w-full h-full"},[e("img",{class:"max-w-[120px]",src:ie,alt:"","object-fit":"contain"})],-1)),de={class:"left-panel flex items-center text-[14px] leading-[1]"},ue={class:"flex items-center h-full pl-[10px] hidden-xs-only"},fe={class:"right-panel h-full flex items-center justify-end"},_e={class:"navbar-item flex items-center h-full cursor-pointer"},he={class:"navbar-item flex items-center h-full cursor-pointer"},xe={class:"dialog-footer"},ve={class:"flex flex-wrap"},ge=["onClick"],ye=["onClick"],ke={class:"dialog-footer"},we=z({__name:"index",setup(u){const B=G(),T=te(),k=J(),w=O(),j=I(()=>w.siteInfo.icon?w.siteInfo.icon:B.website.icon),f=x(!1),_=x(""),h=x("");a.get("comparisonTokenStorage")&&(_.value=a.get("comparisonTokenStorage")),a.get("comparisonSiteIdStorage")&&(h.value=a.get("comparisonSiteIdStorage")),document.addEventListener("visibilitychange",o=>{document.visibilityState==="visible"&&(h.value!=a.get("siteId")||_.value!=a.get("token"))&&(f.value=!0)});const D=()=>{f.value=!1,location.reload()},R=()=>{k.routeRefreshTag&&k.refreshRouterView()},U=I(()=>{const o=T.matched.filter(i=>i.meta.title);return o[0]&&o[0].path=="/"&&o.splice(0,1),o});return a.set({key:"currHeadMenuName",data:""}),(o,i)=>{const N=q,F=oe,$=K,A=P,b=Q,S=W,H=Y;return l(),C(H,{class:"h-[64px] w-full layout-admin flex items-center justify-between px-[15px]"},{default:s(()=>[e("div",le,[e("div",pe,[e("div",ce,[n(N,{style:{width:"100%",height:"100%"},src:r(X)(r(j)),fit:"contain"},{error:s(()=>[me]),_:1},8,["src"])])]),e("div",de,[e("div",{class:"navbar-item flex items-center h-full cursor-pointer",onClick:R},[n(F,{name:"element Refresh"})]),e("div",ue,[n(A,{separator:"/"},{default:s(()=>[(l(!0),m(y,null,v(r(U),(t,c)=>(l(),C($,{key:c},{default:s(()=>[g(p(t.meta.title),1)]),_:2},1024))),128))]),_:1})])])]),e("div",null,[e("div",fe,[e("div",_e,[n(ne)]),e("div",he,[n(se)])])]),V(e("input",{type:"hidden","onUpdate:modelValue":i[0]||(i[0]=t=>_.value=t)},null,512),[[E,_.value]]),V(e("input",{type:"hidden","onUpdate:modelValue":i[1]||(i[1]=t=>h.value=t)},null,512),[[E,h.value]]),n(S,{modelValue:f.value,"onUpdate:modelValue":i[2]||(i[2]=t=>f.value=t),title:r(d)("layout.detectionLoginTip"),width:"30%","close-on-click-modal":!1,"close-on-press-escape":!1,"show-close":!1},{footer:s(()=>[e("span",xe,[n(b,{onClick:D},{default:s(()=>[g(p(r(d)("layout.detectionLoginOperation")),1)]),_:1})])]),default:s(()=>[e("span",null,p(r(d)("layout.detectionLoginContent")),1)]),_:1},8,["modelValue","title"]),n(S,{modelValue:o.showDialog,"onUpdate:modelValue":i[3]||(i[3]=t=>o.showDialog=t),title:r(d)("indexTemplate"),width:"550px","destroy-on-close":!0},{footer:s(()=>[e("span",ke,[n(b,{type:"primary",onClick:o.submitIndex},{default:s(()=>[g(p(r(d)("confirm")),1)]),_:1},8,["onClick"])])]),default:s(()=>[e("div",ve,[o.index_path==""?(l(!0),m(y,{key:0},v(o.indexList,(t,c)=>(l(),m("div",{key:c},[e("div",{onClick:M=>o.index_path=t.view_path,class:L(["index-item py-[5px] px-[10px] mr-[10px] rounded-[3px] cursor-pointer",t.is_use==1?"bg-primary text-[#fff]":""])},[e("span",null,p(t.name),1)],10,ge)]))),128)):(l(!0),m(y,{key:1},v(o.indexList,(t,c)=>(l(),m("div",{key:c},[e("div",{onClick:M=>o.index_path=t.view_path,class:L(["index-item py-[5px] px-[10px] mr-[10px] rounded-[3px] cursor-pointer",o.index_path==t.view_path?"bg-primary text-[#fff]":""])},[e("span",null,p(t.name),1)],10,ye)]))),128))])]),_:1},8,["modelValue","title"])]),_:1})}}});const ft=re(we,[["__scopeId","data-v-24aec059"]]);export{ft as default};
