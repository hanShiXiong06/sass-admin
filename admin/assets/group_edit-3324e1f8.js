import{d as M,r as m,x as T,f as J,aJ as H,l as K,q as d,a2 as O,R as Q,h as r,c as i,e as l,w as t,u as n,aQ as Y,t as u,s as f,F as A,T as B,a,i as q,aj as z,aR as W,a7 as X,K as Z,L as ee,J as oe,a1 as le,aw as te,c4 as ae,M as se,E as re,Y as ne}from"./index-904cb7a2.js";/* empty css                   *//* empty css                  *//* empty css                *//* empty css                          *//* empty css                    *//* empty css                 *//* empty css                        */import"./el-form-item-4ed993c7.js";/* empty css                 *//* empty css                *//* empty css                   *//* empty css                       */import{s as de,t as ce,v as ue}from"./site-df2c329a.js";import{g as ie}from"./addon-59d18bab.js";import{_ as pe}from"./_plugin-vue_export-helper-c27b6911.js";const _e={class:"main-container"},me={key:0,class:"text-gray-400"},fe={class:"w-full"},ve={class:"flex"},he={class:"w-[60px] h-[60px] mr-[10px] rounded-md overflow-hidden"},ge={class:"image-error"},xe={class:"flex-1 w-0 flex flex-col justify-center"},be={class:"font-bold truncate"},we=["title"],ye={key:0,class:"text-gray-400"},ke={class:"w-full"},Ve={class:"flex"},Ee={class:"w-[60px] h-[60px] mr-[10px] rounded-md overflow-hidden"},Le={class:"image-error"},Ce={class:"flex-1 w-0 flex flex-col justify-center"},Ie={class:"font-bold truncate"},Re=["title"],Fe={class:"fixed-footer-wrap"},Ne={class:"fixed-footer"},Ae=M({__name:"group_edit",setup(Be){const x=m(!0),b=m([]),w=m([]),y=T(),D=J(),P=y.meta.title,k=m(!1),s=m({group_id:0,group_name:"",group_desc:"",app:[],addon:[]});(async()=>{await ie().then(({data:c})=>{const o=[],p=[];Object.keys(c).forEach(v=>{const _=c[v];_.type=="addon"?p.push(_):o.push(_)}),b.value=o,w.value=p}).catch()})(),y.query.id?de(y.query.id).then(c=>{let o=H(c.data);s.value=o,x.value=!1}).catch():x.value=!1;const E=()=>{D.push("/admin/site/group")},L=m(),j=K(()=>({group_name:[{required:!0,message:d("groupNamePlaceholder"),trigger:"blur"}],app:[{required:!0,message:d("mainAppPlaceholder"),trigger:"blur"}]})),G=async c=>{if(k.value||!c)return;const o=s.value.group_id?ce:ue;await c.validate(async p=>{p&&(k.value=!0,o(s.value).then(v=>{S(),setTimeout(()=>{E()},1e3)}).catch(()=>{k.value=!1}))})},S=()=>{z().then(c=>{}).catch(()=>{})};return(c,o)=>{const p=W,v=X,_=Z,h=ee,g=oe,C=O("icon-picture"),I=le,R=te,F=ae,U=se,N=re,$=ne;return Q((r(),i("div",_e,[l(v,{class:"card !border-none",shadow:"never"},{default:t(()=>[l(p,{content:n(P),icon:n(Y),onBack:o[0]||(o[0]=e=>c.$router.back())},null,8,["content","icon"])]),_:1}),l(v,{class:"box-card mt-[15px] !border-none",shadow:"never"},{default:t(()=>[l(U,{model:s.value,"label-width":"110px",ref_key:"formRef",ref:L,rules:n(j),class:"page-form"},{default:t(()=>[l(h,{label:n(d)("groupName"),prop:"group_name"},{default:t(()=>[l(_,{modelValue:s.value.group_name,"onUpdate:modelValue":o[1]||(o[1]=e=>s.value.group_name=e),modelModifiers:{trim:!0},placeholder:n(d)("groupNamePlaceholder"),clearable:"",disabled:s.value.uid,class:"input-width",maxlength:"20","show-word-limit":!0},null,8,["modelValue","placeholder","disabled"])]),_:1},8,["label"]),l(h,{label:n(d)("groupDesc"),prop:"group_desc"},{default:t(()=>[l(_,{modelValue:s.value.group_desc,"onUpdate:modelValue":o[2]||(o[2]=e=>s.value.group_desc=e),modelModifiers:{trim:!0},type:"textarea",rows:"4",clearable:"",placeholder:n(d)("groupDescPlaceholder"),class:"input-width",maxlength:"100"},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),l(h,{label:n(d)("mainApp"),prop:"app"},{default:t(()=>[b.value.length?(r(),f(F,{key:1,modelValue:s.value.app,"onUpdate:modelValue":o[3]||(o[3]=e=>s.value.app=e),class:"flex flex-wrap w-full"},{default:t(()=>[(r(!0),i(A,null,B(b.value,(e,V)=>(r(),i("div",{class:"flex w-[300px]",key:V},[l(R,{label:e.key,name:"",class:"w-full !h-auto border border-[var(--el-color-info-light-7)] border-solid p-[10px] !mr-[10px] !mb-[10px] rounded-md"},{default:t(()=>[a("div",fe,[a("div",ve,[a("div",he,[e.icon?(r(),f(g,{key:0,src:e.icon,class:"w-full h-full"},null,8,["src"])):(r(),f(g,{key:1,class:"w-full h-full"},{error:t(()=>[a("div",ge,[l(I,null,{default:t(()=>[l(C)]),_:1})])]),_:1}))]),a("div",xe,[a("div",be,u(e.title),1),a("div",{class:"text-gray-400 mt-[10px] truncate",title:e.desc},u(e.desc),9,we)])])])]),_:2},1032,["label"])]))),128))]),_:1},8,["modelValue"])):(r(),i("div",me,u(n(d)("appListEmpty")),1))]),_:1},8,["label"]),l(h,{label:n(d)("containAddon")},{default:t(()=>[w.value.length?(r(),f(F,{key:1,modelValue:s.value.addon,"onUpdate:modelValue":o[4]||(o[4]=e=>s.value.addon=e),class:"flex flex-wrap w-full"},{default:t(()=>[(r(!0),i(A,null,B(w.value,(e,V)=>(r(),i("div",{class:"flex w-[300px]",key:V},[l(R,{label:e.key,name:"",class:"w-full !h-auto border border-[var(--el-color-info-light-7)] border-solid p-[10px] !mr-[10px] !mb-[10px] rounded-md"},{default:t(()=>[a("div",ke,[a("div",Ve,[a("div",Ee,[e.icon?(r(),f(g,{key:0,src:e.icon,class:"w-full h-full"},null,8,["src"])):(r(),f(g,{key:1,class:"w-full h-full"},{error:t(()=>[a("div",Le,[l(I,null,{default:t(()=>[l(C)]),_:1})])]),_:1}))]),a("div",Ce,[a("div",Ie,u(e.title),1),a("div",{class:"text-gray-400 mt-[10px] truncate",title:e.desc},u(e.desc),9,Re)])])])]),_:2},1032,["label"])]))),128))]),_:1},8,["modelValue"])):(r(),i("div",ye,u(n(d)("addonListEmpty")),1))]),_:1},8,["label"])]),_:1},8,["model","rules"]),a("div",Fe,[a("div",Ne,[l(N,{type:"primary",onClick:o[5]||(o[5]=e=>G(L.value))},{default:t(()=>[q(u(n(d)("save")),1)]),_:1}),l(N,{onClick:o[6]||(o[6]=e=>E())},{default:t(()=>[q(u(n(d)("cancel")),1)]),_:1})])])]),_:1})])),[[$,x.value]])}}});const We=pe(Ae,[["__scopeId","data-v-ac643388"]]);export{We as default};