import{d as U,k as q,j as H,r as y,m as J,c4 as E,Q as L,h as n,v as f,w as o,e as d,a as c,u,c as _,B as Q,T as C,F as g,t as j,C as k,y as T,f as z,J as G,bE as K,dc as O,dd as P,V as W,N as X,A as Y}from"./index-0e396751.js";/* empty css                     *//* empty css                */import"./el-tooltip-4ed993c7.js";/* empty css                  */import"./el-menu-item-4ed993c7.js";import{_ as Z}from"./index.vue_vue_type_script_setup_true_lang-5014406f.js";/* empty css                 *//* empty css                        */import{_ as I}from"./icon-addon-339e16d0.js";import{_ as ee}from"./menu-item.vue_vue_type_style_index_0_lang-166e36af.js";const ae={class:"w-[64px] bg-[#282c34] h-screen one-menu"},te={key:0,class:"logo flex items-center m-auto h-[64px]"},se=c("div",{class:"flex justify-center items-center w-full h-[40px]"},[c("img",{class:"max-w-[40px]",src:I,alt:"","object-fit":"contain"})],-1),ne={key:1,class:"logo flex items-center justify-center h-[64px]"},oe=c("i",{class:"text-3xl iconfont iconyunkongjian"},null,-1),le=[oe],ce={key:0,class:"w-[16px] h-[16px] relative flex justify-center"},re={class:"relative"},de={class:"ml-[10px] text-[15px]"},ue=c("div",{class:"h-[48px]"},null,-1),ie={class:"w-[190px] h-[64px] flex items-center justify-center text-[16px] border-0 border-b-[1px] border-solid border-[#eee]"},_e=c("div",{class:"h-[48px]"},null,-1),je=U({__name:"side",setup(me){const v=q(),m=H(),t=T(),M=z(),a=m.siteInfo,S=m.routers,R=m.addonIndexRoute,h=y([]),r=y([]),p={},B=J(()=>m.siteInfo.icon?m.siteInfo.icon:v.website.icon);if(S.forEach(e=>{e.original_name=e.name,e.meta.addon==""?e.meta.attr==""&&(e.children&&e.children.length&&(e.name=E(e.children)),h.value.push(e)):e.meta.addon!=""&&(a==null?void 0:a.apps.length)<=1&&(a==null?void 0:a.apps[0].key)==e.meta.addon?e.children?(e.children.forEach(s=>{s.original_name=s.name,s.children&&s.children.length&&(s.name=E(s.children))}),h.value.unshift(...e.children)):h.value.unshift(e):p[e.meta.addon]=e}),(a==null?void 0:a.apps.length)>1){const e=[];a==null||a.apps.forEach(s=>{p[s.key]&&(p[s.key].name=R[s.key],e.push(p[s.key]))}),h.value.unshift(...e)}const i=y(t.matched[1].name);return L(t,()=>{if(t.meta.attr!="")i.value=t.matched[2].name,r.value=t.matched[1].children??[];else if((a==null?void 0:a.apps.length)>1)r.value=t.matched[1].children,i.value=t.matched[1].name;else{const e=t.matched[1];e.meta.addon==""?(i.value=t.matched[1].name,r.value=t.matched[1].children??[]):e.meta.addon==(a==null?void 0:a.apps[0].key)?(i.value=t.matched[2].name,r.value=t.matched[2].children??[]):(i.value=t.matched[1].name,r.value=t.matched[1].children??[])}},{immediate:!0}),(e,s)=>{const V=G,N=K,D=Z,F=O,w=P,b=W,$=X,A=Y;return n(),f(A,{class:"w-100 h-screen"},{default:o(()=>[d($,{class:"p-0 flex"},{default:o(()=>[c("div",ae,[d(N,{class:"logo-wrap"},{default:o(()=>[u(v).menuIsCollapse?(n(),_("div",ne,le)):(n(),_("div",te,[d(V,{style:{width:"40px",height:"40px"},src:u(Q)(u(B)),fit:"contain"},{error:o(()=>[se]),_:1},8,["src"])]))]),_:1}),d(b,{class:"h-[calc( 100vh - 64px )]"},{default:o(()=>[d(w,{"default-active":i.value,router:!0,class:"aside-menu","unique-opened":!0},{default:o(()=>[(n(!0),_(g,null,C(h.value,(l,x)=>(n(),_(g,{key:x},[l.meta.show?(n(),f(F,{key:0,index:l.original_name,onClick:he=>u(M).push({name:l.name})},{title:o(()=>[c("div",re,[c("span",de,j(l.meta.short_title||l.meta.title),1)])]),default:o(()=>[l.meta.icon?(n(),_("div",ce,[d(D,{name:l.meta.icon,class:"absolute top-[50%] -translate-y-[50%]"},null,8,["name"])])):k("",!0)]),_:2},1032,["index","onClick"])):k("",!0)],64))),128))]),_:1},8,["default-active"]),ue]),_:1})]),r.value.length?(n(),f(b,{key:0,class:"two-menu w-[190px]"},{default:o(()=>[c("div",ie,j(u(t).matched[1].meta.title),1),d(w,{"default-active":u(t).name,router:!0,class:"aside-menu",collapse:u(v).menuIsCollapse},{default:o(()=>[(n(!0),_(g,null,C(r.value,(l,x)=>(n(),f(ee,{routes:l,key:x},null,8,["routes"]))),128))]),_:1},8,["default-active","collapse"]),_e]),_:1})):k("",!0)]),_:1})]),_:1})}}});export{je as _};
