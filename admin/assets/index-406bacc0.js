import{d as O,G as l,dm as P,k as X,c7 as K,r as f,j as Q,m as h,aJ as Y,h as p,v as w,w as o,e as n,a as e,c as x,T as Z,i as y,t as c,u as t,F as ee,x as k,s as d,C as te,R as S,b6 as E,d6 as oe,d7 as ne,aM as se,bg as ie,bh as re,bi as ae,aN as le,E as ce,X as pe,A as de,y as me,f as ue}from"./index-0e396751.js";/* empty css                  *//* empty css                   *//* empty css                  *//* empty css               *//* empty css                    *//* empty css                  *//* empty css                     */import"./el-dropdown-item-4ed993c7.js";/* empty css               *//* empty css                           */import{_ as _e}from"./index.vue_vue_type_script_setup_true_lang-5014406f.js";import fe from"./layout-setting-cb5b7c0c.js";import xe from"./user-info-f8c90930.js";import{_ as he}from"./_plugin-vue_export-helper-c27b6911.js";/* empty css                  *//* empty css                        *//* empty css                 *//* empty css                  *//* empty css                */import"./el-form-item-4ed993c7.js";/* empty css                  */import"./personal-cee2189e.js";import"./index.vue_vue_type_script_setup_true_lang-676dc2b1.js";import"./index-11d71036.js";/* empty css                        */import"./index.vue_vue_type_style_index_0_lang-d82568af.js";import"./attachment-c52133c7.js";/* empty css                   */import"./index.vue_vue_type_script_setup_true_lang-34f8a01a.js";/* empty css               *//* empty css                  *//* empty css                  *//* empty css                      *//* empty css                    */import"./el-tooltip-4ed993c7.js";/* empty css                 *//* empty css                  *//* empty css                    */import"./index.vue_vue_type_script_setup_true_lang-077a27b1.js";/* empty css                   */import"./sortable.esm-be94e56d.js";/* empty css                        */const ve={class:"left-panel h-full flex items-center"},ge={class:"flex items-center h-full pl-[10px] hidden-xs-only"},be={class:"right-panel h-full flex items-center justify-end"},we={class:"flex items-center flex-shrink-0 hidden-xs-only"},ye={class:"mx-[8px] bg-[#f6f6f6] border-[1px] border-solid border-[#eee] rounded-[4px] px-[9px] py-[6px] flex items-center"},ke={class:"mr-[6px] text-[12px] !text-[#333]"},Se={class:"text-[14px]"},Ee={key:0,class:"text-[14px]"},Ce={key:1,class:"text-[14px]"},Ie=["title"],Ve=["title"],Te={class:"navbar-item flex items-center h-full cursor-pointer"},Re={class:"navbar-item flex items-center h-full cursor-pointer"},We={class:"dialog-footer"},Be=O({__name:"index",setup(De){const C=l.get("app_type");P();const I=X(),v=K(),V=me(),T=ue(),R=f(window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth),W=Q(),r=h(()=>W.siteInfo),B=h(()=>I.dark),m=f(!1),u=f(""),_=f("");l.get("comparisonTokenStorage")&&(u.value=l.get("comparisonTokenStorage")),l.get("comparisonSiteIdStorage")&&(_.value=l.get("comparisonSiteIdStorage")),document.addEventListener("visibilitychange",s=>{document.visibilityState==="visible"&&(_.value!=l.get("siteId")||u.value!=l.get("token"))&&(m.value=!0)});const D=()=>{m.value=!1,location.href=`${location.origin}/site/`};Y(()=>{window.onresize=()=>(()=>{R.value=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth})()});const L=()=>{v.routeRefreshTag&&v.refreshRouterView()},N=h(()=>{const s=V.matched.filter(i=>i.meta.title);return s[0]&&s[0].path=="/"&&s.splice(0,1),s}),F=()=>{const s=T.resolve({path:"/preview/wap",query:{page:"/"}});window.open(s.href)};return(s,i)=>{const M=_e,U=oe,j=ne,g=se,b=ie,z=re,A=ae,$=le,q=ce,G=pe,H=de;return p(),w(H,{class:k(["h-full px-[10px]",{"layout-header border-b border-color":!t(B)}])},{default:o(()=>[n($,{class:"w-100 h-full w-full"},{default:o(()=>[n(g,{span:10},{default:o(()=>[e("div",ve,[e("div",{class:"navbar-item flex items-center h-full cursor-pointer",onClick:L},[n(M,{name:"element Refresh"})]),e("div",ge,[n(j,{separator:"/"},{default:o(()=>[(p(!0),x(ee,null,Z(t(N),(a,J)=>(p(),w(U,{key:J},{default:o(()=>[y(c(a.meta.title),1)]),_:2},1024))),128))]),_:1})])])]),_:1}),n(g,{span:14},{default:o(()=>[e("div",be,[e("div",we,[n(A,{trigger:"hover","hide-on-click":!1,"popper-class":"site-info-wrap",class:"mr-[8px]"},{dropdown:o(()=>[n(z,null,{default:o(()=>[n(b,null,{default:o(()=>[e("div",Se,"站点编号："+c(t(r).site_id),1)]),_:1}),n(b,null,{default:o(()=>[t(r).expire_time==0?(p(),x("div",Ee,"到期时间：永久")):(p(),x("div",Ce,"到期时间："+c(t(r).expire_time),1))]),_:1})]),_:1})]),default:o(()=>[e("div",ye,[e("span",ke,c(t(r).site_name),1),e("span",{class:k(["!text-[10px] text-[#f56c6c]",{"!text-[#67c23a]":t(r).status==1,"!text-[#f56c6c]":t(r).status==3}])},c(t(r).status_name),3)])]),_:1})]),e("i",{class:"iconfont iconicon_huojian1 cursor-pointer px-[8px]",title:t(d)("visitWap"),onClick:F},null,8,Ie),t(C)=="site"?(p(),x("i",{key:0,class:"iconfont iconlingdang-xianxing cursor-pointer px-[8px]",title:t(d)("newInfo")},null,8,Ve)):te("",!0),e("div",Te,[n(fe)]),e("div",Re,[n(xe)])])]),_:1})]),_:1}),S(e("input",{type:"hidden","onUpdate:modelValue":i[0]||(i[0]=a=>u.value=a)},null,512),[[E,u.value]]),S(e("input",{type:"hidden","onUpdate:modelValue":i[1]||(i[1]=a=>_.value=a)},null,512),[[E,_.value]]),n(G,{modelValue:m.value,"onUpdate:modelValue":i[2]||(i[2]=a=>m.value=a),title:t(d)("layout.detectionLoginTip"),width:"30%","close-on-click-modal":!1,"close-on-press-escape":!1,"show-close":!1},{footer:o(()=>[e("span",We,[n(q,{onClick:D},{default:o(()=>[y(c(t(d)("layout.detectionLoginOperation")),1)]),_:1})])]),default:o(()=>[e("span",null,c(t(d)("layout.detectionLoginContent")),1)]),_:1},8,["modelValue","title"])]),_:1},8,["class"])}}});const kt=he(Be,[["__scopeId","data-v-4efb8681"]]);export{kt as default};
