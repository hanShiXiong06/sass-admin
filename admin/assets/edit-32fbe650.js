import{d as j,x as $,f as T,r as v,n as G,l as H,q as l,h as c,c as U,e as t,w as i,u as r,R as K,s as R,F as Y,T as z,i as _,t as f,a as k,U as J,aR as Q,a7 as W,K as X,L as Z,ac as ee,aD as te,au as le,av as oe,aF as ae,M as re,E as ie,Y as se}from"./index-99f00cf3.js";/* empty css                   *//* empty css                  *//* empty css                *//* empty css                 *//* empty css                        *//* empty css                       *//* empty css                 */import{_ as ne}from"./index.vue_vue_type_script_setup_true_lang-2f14504d.js";import de from"./index-015c0c3e.js";/* empty css               *//* empty css                  *//* empty css                  *//* empty css                     *//* empty css                  */import"./el-form-item-4ed993c7.js";/* empty css                *//* empty css                   *//* empty css                       */import{f as me,h as ue,i as pe,j as ce}from"./article-13c4c625.js";import{_ as _e}from"./_plugin-vue_export-helper-c27b6911.js";import"./index.vue_vue_type_style_index_0_lang-2e54ab99.js";/* empty css                  *//* empty css                   */import"./attachment-6fc096d0.js";import"./index.vue_vue_type_script_setup_true_lang-a59c79e6.js";/* empty css                        *//* empty css                      *//* empty css                    */import"./el-tooltip-4ed993c7.js";/* empty css                 *//* empty css               *//* empty css               *//* empty css                    *//* empty css                    */import"./el-dropdown-item-4ed993c7.js";import"./index.vue_vue_type_script_setup_true_lang-bde8c802.js";/* empty css                   */import"./index.vue_vue_type_script_setup_true_lang-49ab6f2c.js";import"./sortable.esm-be94e56d.js";const fe={class:"main-container"},ge={class:"fixed-footer-wrap"},be={class:"fixed-footer"},ve=j({__name:"edit",setup(he){const h=$(),g=T(),b=parseInt(h.query.id||"0"),d=v(!1),V=v([]),C=h.meta.title,y={id:"",category_id:"",title:"",intro:"",summary:"",image:"",author:"",content:"",visit:"",visit_virtual:"",is_show:1,sort:0},o=G({...y});b&&(async(m=0)=>{if(d.value=!0,Object.assign(o,y),m){const e=await(await me(m)).data;if(!e||Object.keys(e).length==0)return J.error(l("articleNull")),setTimeout(()=>{g.go(-1)},2e3),!1;Object.keys(o).forEach(n=>{e[n]!=null&&(o[n]=e[n])}),d.value=!1}else d.value=!1})(b),(async()=>{V.value=await(await ue({})).data})();const w=v(),F=H(()=>({title:[{required:!0,message:l("titlePlaceholder"),trigger:"blur"}],category_id:[{required:!0,message:l("categoryIdPlaceholder"),trigger:"blur"}],content:[{required:!0,message:l("contentPlaceholder"),trigger:"blur"},{validator:(m,e,n)=>{!e.replace(/<[^<>]+>/g,"").replace(/&nbsp;/gi,"")&&e.indexOf("img")===-1?n(new Error(l("contentPlaceholder"))):n()},trigger:["blur","change"]}]})),I=async m=>{d.value||!m||await m.validate(async e=>{e&&(d.value=!0,(b?pe:ce)(o).then(u=>{d.value=!1,x()}).catch(()=>{d.value=!1}))})},x=()=>{g.push({path:"/cms/article/list"})};return(m,e)=>{const n=Q,p=W,u=X,s=Z,D=ee,L=te,M=de,N=ne,E=le,A=oe,B=ae,q=re,P=ie,O=se;return c(),U("div",fe,[t(p,{class:"card !border-none mb-[15px]",shadow:"never"},{default:i(()=>[t(n,{content:r(C),icon:m.ArrowLeft,onBack:e[0]||(e[0]=a=>r(g).push({path:"/cms/article/list"}))},null,8,["content","icon"])]),_:1}),t(p,{class:"box-card !border-none",shadow:"never"},{default:i(()=>[K((c(),R(q,{model:o,"label-width":"90px",ref_key:"formRef",ref:w,rules:r(F),class:"page-form"},{default:i(()=>[t(s,{label:r(l)("title"),prop:"title"},{default:i(()=>[t(u,{modelValue:o.title,"onUpdate:modelValue":e[1]||(e[1]=a=>o.title=a),modelModifiers:{trim:!0},clearable:"",placeholder:r(l)("titlePlaceholder"),class:"input-width",maxlength:"20"},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),t(s,{label:r(l)("categoryName"),prop:"category_id"},{default:i(()=>[t(L,{modelValue:o.category_id,"onUpdate:modelValue":e[2]||(e[2]=a=>o.category_id=a),clearable:"",placeholder:r(l)("categoryIdPlaceholder"),class:"input-width"},{default:i(()=>[(c(!0),U(Y,null,z(V.value,(a,S)=>(c(),R(D,{label:a.name,value:a.category_id,key:S},null,8,["label","value"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"]),t(s,{label:r(l)("intro"),prop:"intro"},{default:i(()=>[t(u,{modelValue:o.intro,"onUpdate:modelValue":e[3]||(e[3]=a=>o.intro=a),modelModifiers:{trim:!0},type:"textarea",rows:"4",clearable:"",placeholder:r(l)("introPlaceholder"),class:"input-width",maxlength:"50"},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),t(s,{label:r(l)("summary"),prop:"summary"},{default:i(()=>[t(u,{modelValue:o.summary,"onUpdate:modelValue":e[4]||(e[4]=a=>o.summary=a),modelModifiers:{trim:!0},type:"textarea",rows:"4",clearable:"",placeholder:r(l)("summaryPlaceholder"),class:"input-width",maxlength:"50"},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),t(s,{label:r(l)("image")},{default:i(()=>[t(M,{modelValue:o.image,"onUpdate:modelValue":e[5]||(e[5]=a=>o.image=a)},null,8,["modelValue"])]),_:1},8,["label"]),t(s,{label:r(l)("author"),prop:"author"},{default:i(()=>[t(u,{modelValue:o.author,"onUpdate:modelValue":e[6]||(e[6]=a=>o.author=a),modelModifiers:{trim:!0},clearable:"",placeholder:r(l)("authorPlaceholder"),class:"input-width",maxlength:"20"},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),t(s,{label:r(l)("content"),prop:"content"},{default:i(()=>[t(N,{modelValue:o.content,"onUpdate:modelValue":e[7]||(e[7]=a=>o.content=a)},null,8,["modelValue"])]),_:1},8,["label"]),t(s,{label:r(l)("visitVirtual")},{default:i(()=>[t(u,{modelValue:o.visit_virtual,"onUpdate:modelValue":e[8]||(e[8]=a=>o.visit_virtual=a),modelModifiers:{trim:!0},clearable:"",placeholder:r(l)("visitVirtualPlaceholder"),class:"input-width"},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),t(s,{label:r(l)("isShow")},{default:i(()=>[t(A,{modelValue:o.is_show,"onUpdate:modelValue":e[9]||(e[9]=a=>o.is_show=a),placeholder:r(l)("isShowPlaceholder")},{default:i(()=>[t(E,{label:1},{default:i(()=>[_(f(r(l)("show")),1)]),_:1}),t(E,{label:0},{default:i(()=>[_(f(r(l)("hidden")),1)]),_:1})]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"]),t(s,{label:r(l)("sort"),prop:"sort"},{default:i(()=>[t(B,{modelValue:o.sort,"onUpdate:modelValue":e[10]||(e[10]=a=>o.sort=a),min:0},null,8,["modelValue"])]),_:1},8,["label"])]),_:1},8,["model","rules"])),[[O,d.value]])]),_:1}),k("div",ge,[k("div",be,[t(P,{type:"primary",onClick:e[11]||(e[11]=a=>I(w.value))},{default:i(()=>[_(f(r(l)("save")),1)]),_:1}),t(P,{onClick:e[12]||(e[12]=a=>x())},{default:i(()=>[_(f(r(l)("cancel")),1)]),_:1})])])])}}});const nt=_e(ve,[["__scopeId","data-v-db1c5801"]]);export{nt as default};