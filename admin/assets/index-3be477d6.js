import{d as A,G as a,dm as q,k as G,c7 as H,r as f,m as w,aJ as J,h as l,v as _,w as o,e as n,a as e,u as i,c as b,T as O,i as k,t as v,F as P,s as p,C as X,R as C,b6 as S,x as K,d6 as Q,d7 as Y,aM as Z,aN as ee,E as te,X as oe,A as ne,y as ie,f as se}from"./index-0e396751.js";/* empty css                  *//* empty css                   *//* empty css                  *//* empty css               *//* empty css               *//* empty css                           */import{_ as re}from"./index.vue_vue_type_script_setup_true_lang-5014406f.js";import ae from"./layout-setting-c70138a0.js";import le from"./user-info-7a9c176e.js";import{_ as ce}from"./_plugin-vue_export-helper-c27b6911.js";/* empty css                  *//* empty css                     *//* empty css                        *//* empty css                 *//* empty css                  *//* empty css                */import"./el-form-item-4ed993c7.js";/* empty css                    *//* empty css                  */import"./el-dropdown-item-4ed993c7.js";/* empty css                  */import"./member_head-d9fd7b2c.js";import"./personal-cee2189e.js";import"./index.vue_vue_type_script_setup_true_lang-676dc2b1.js";import"./index-11d71036.js";/* empty css                        */import"./index.vue_vue_type_style_index_0_lang-d82568af.js";import"./attachment-c52133c7.js";/* empty css                   */import"./index.vue_vue_type_script_setup_true_lang-34f8a01a.js";/* empty css               *//* empty css                  *//* empty css                  *//* empty css                      *//* empty css                    */import"./el-tooltip-4ed993c7.js";/* empty css                 *//* empty css                  *//* empty css                    */import"./index.vue_vue_type_script_setup_true_lang-077a27b1.js";/* empty css                   */import"./sortable.esm-be94e56d.js";/* empty css                        */const pe={class:"left-panel h-full flex items-center"},me={class:"flex items-center h-full pl-[10px]"},ue={class:"right-panel h-full flex items-center justify-end"},de=["title"],fe=["title"],_e={class:"navbar-item flex items-center h-full cursor-pointer"},he={class:"navbar-item flex items-center h-full cursor-pointer"},ve={class:"dialog-footer"},ge=A({__name:"index",setup(xe){const E=a.get("app_type");q();const c=G(),g=H(),I=ie(),V=se(),x=f(window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth),T=w(()=>c.dark),m=f(!1),u=f(""),d=f("");a.get("comparisonTokenStorage")&&(u.value=a.get("comparisonTokenStorage")),a.get("comparisonSiteIdStorage")&&(d.value=a.get("comparisonSiteIdStorage")),document.addEventListener("visibilitychange",t=>{document.visibilityState==="visible"&&(d.value!=a.get("siteId")||u.value!=a.get("token"))&&(m.value=!0)});const R=()=>{m.value=!1,location.href=`${location.origin}/site/`};J(()=>{window.onresize=()=>(()=>{x.value=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth})()});const W=()=>{c.$patch(t=>{x.value<768?(t.menuDrawer=!0,t.menuIsCollapse=!1):c.toggleMenuCollapse(!c.menuIsCollapse)})},B=()=>{g.routeRefreshTag&&g.refreshRouterView()},L=w(()=>{const t=I.matched.filter(s=>s.meta.title);return t[0]&&t[0].path=="/"&&t.splice(0,1),t}),D=()=>{const t=V.resolve({path:"/preview/wap",query:{page:"/"}});window.open(t.href)};return(t,s)=>{const h=re,F=Q,M=Y,y=Z,N=ee,U=te,$=oe,j=ne;return l(),_(j,{class:K(["h-full px-[10px]",{"layout-header border-b border-color":!i(T)}])},{default:o(()=>[n(N,{class:"w-100 h-full w-full"},{default:o(()=>[n(y,{span:12},{default:o(()=>[e("div",pe,[e("div",{class:"hidden-sm-and-up navbar-item flex items-center h-full cursor-pointer",onClick:W},[i(c).menuIsCollapse?(l(),_(h,{key:0,name:"element Expand"})):(l(),_(h,{key:1,name:"element Fold"}))]),e("div",{class:"navbar-item flex items-center h-full cursor-pointer",onClick:B},[n(h,{name:"element Refresh"})]),e("div",me,[n(M,{separator:"/"},{default:o(()=>[(l(!0),b(P,null,O(i(L),(r,z)=>(l(),_(F,{key:z},{default:o(()=>[k(v(r.meta.title),1)]),_:2},1024))),128))]),_:1})])])]),_:1}),n(y,{span:12},{default:o(()=>[e("div",ue,[e("i",{class:"iconfont iconicon_huojian1 cursor-pointer px-[8px]",title:i(p)("visitWap"),onClick:D},null,8,de),i(E)=="site"?(l(),b("i",{key:0,class:"iconfont iconlingdang-xianxing cursor-pointer px-[8px]",title:i(p)("newInfo")},null,8,fe)):X("",!0),e("div",_e,[n(ae)]),e("div",he,[n(le)])])]),_:1})]),_:1}),C(e("input",{type:"hidden","onUpdate:modelValue":s[0]||(s[0]=r=>u.value=r)},null,512),[[S,u.value]]),C(e("input",{type:"hidden","onUpdate:modelValue":s[1]||(s[1]=r=>d.value=r)},null,512),[[S,d.value]]),n($,{modelValue:m.value,"onUpdate:modelValue":s[2]||(s[2]=r=>m.value=r),title:i(p)("layout.detectionLoginTip"),width:"30%","close-on-click-modal":!1,"close-on-press-escape":!1,"show-close":!1},{footer:o(()=>[e("span",ve,[n(U,{onClick:R},{default:o(()=>[k(v(i(p)("layout.detectionLoginOperation")),1)]),_:1})])]),default:o(()=>[e("span",null,v(i(p)("layout.detectionLoginContent")),1)]),_:1},8,["modelValue","title"])]),_:1},8,["class"])}}});const pt=ce(ge,[["__scopeId","data-v-7fff09e7"]]);export{pt as default};
