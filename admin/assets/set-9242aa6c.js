import{O as I,d as M,x as O,r as m,n as $,h,c as f,e,w as l,a as t,t as g,u as i,i as r,F as j,T as G,q as c,B as C,U as K,E as A,aT as H,L as J,K as P,au as Q,av as W,ac as X,aD as Y,d1 as Z,M as ee,a7 as te,p as ae,g as oe}from"./index-99f00cf3.js";/* empty css                *//* empty css                *//* empty css                   *//* empty css                 *//* empty css               *//* empty css                  *//* empty css                  *//* empty css                     *//* empty css                  *//* empty css                       *//* empty css                 */import"./el-form-item-4ed993c7.js";/* empty css                  *//* empty css                  */import{_ as le}from"./_plugin-vue_export-helper-c27b6911.js";function se(n){return I.post("seafox_pay/fenzhang/getset",n)}function ne(n){return I.post("seafox_pay/fenzhang/saveset",n)}const d=n=>(ae("data-v-25313a9c"),n=n(),oe(),n),de={class:"main-container"},pe={class:"flex justify-between items-center"},ie={class:"text-page-title"},re={style:{"margin-bottom":"30px"}},ce={style:{display:"flex","margin-bottom":"10px"}},_e={style:{margin:"0 0"}},ue={style:{"margin-left":"40px"}},me={style:{display:"flex","margin-bottom":"20px"}},he={style:{display:"flex"}},fe=d(()=>t("div",{style:{"margin-right":"15px"}}," 分账方式 : ",-1)),ye={key:0,style:{display:"flex","margin-bottom":"20px"}},ve=d(()=>t("span",{style:{"margin-right":"10px"}},"分账比例",-1)),xe=d(()=>t("span",{style:{margin:"0 10px"}},"元 + ",-1)),ge=d(()=>t("span",{style:{margin:"0 10px"}}," %",-1)),Ve=d(()=>t("span",{style:{margin:"0 10px"}},null,-1)),be={key:1,style:{display:"flex","margin-bottom":"20px"}},we=d(()=>t("span",{style:{"margin-right":"10px"}},"分账金额:",-1)),Ee=d(()=>t("span",{style:{margin:"0 10px"}},"元 ",-1)),ke=d(()=>t("span",{style:{margin:"0 10px"}},null,-1)),Ue={class:"fixed-footer-wrap"},Ce={class:"fixed-footer"},Ie=M({__name:"set",setup(n){const S=O().meta.title,V=m(!0),_=$({fenlist:[],open:0}),b=m(),u=m([]);m([]);const x=m("");x.value=localStorage.getItem("seafoxpay_sid"),se({merchant_id:x.value}).then(p=>{_.open=p.data.open==1,u.value=p.data.fenlist});const B=async p=>{const s={};s.open=_.open?1:0,s.merchant_id=x.value,s.fenlist=u.value,ne(s).then(()=>{K({message:"提交成功",type:"success"}),V.value=!1}).catch(()=>{V.value=!1})},N=()=>{u.value.push({type:1,mer_id:"",rate:"",price:"",price_key:"1"})},R=p=>{u.value.splice(p,1)};return(p,s)=>{const y=A,D=H,w=J,v=P,E=Q,F=W,k=X,T=Y,q=Z,z=ee,L=te;return h(),f("div",de,[e(L,{class:"box-card !border-none",shadow:"never"},{default:l(()=>[t("div",pe,[t("span",ie,g(i(S)),1),e(y,{type:"primary",onClick:p.handleChange},{default:l(()=>[r(" 分账记录 ")]),_:1},8,["onClick"])]),e(z,{class:"page-form mt-[20px]",model:_,"label-width":"150px",ref_key:"formRef",ref:b},{default:l(()=>[e(w,{label:"分账状态"},{default:l(()=>[e(D,{modelValue:_.open,"onUpdate:modelValue":s[0]||(s[0]=a=>_.open=a)},null,8,["modelValue"])]),_:1}),e(w,{label:"分账设置"},{default:l(()=>[t("div",null,[(h(!0),f(j,null,G(u.value,(a,U)=>(h(),f("div",re,[t("div",ce,[t("span",_e,"【"+g(U+1)+"】 分账商户号 ",1),e(v,{modelValue:a.mch_id,"onUpdate:modelValue":o=>a.mch_id=o,style:{width:"250px","margin-left":"10px"},clearable:"",placeholder:i(c)("填写分账商户号"),class:"input-width"},null,8,["modelValue","onUpdate:modelValue","placeholder"]),e(y,{type:"danger",plain:"",onClick:o=>R(U),style:{margin:"0 10px"}},{default:l(()=>[r("删除")]),_:2},1032,["onClick"])]),t("div",ue,[t("div",me,[t("div",he,[fe,e(F,{modelValue:a.type,"onUpdate:modelValue":o=>a.type=o},{default:l(()=>[e(E,{value:1},{default:l(()=>[r("按比例")]),_:1}),e(E,{value:2},{default:l(()=>[r("按固定金额")]),_:1})]),_:2},1032,["modelValue","onUpdate:modelValue"])])]),a.type==1?(h(),f("div",ye,[ve,e(T,{class:"input-width",style:{width:"100px"},modelValue:a.rate_key,"onUpdate:modelValue":o=>a.rate_key=o,clearable:"",placeholder:i(c)("分账方式")},{default:l(()=>[e(k,{label:"增加",value:"1"}),e(k,{label:"扣除",value:"0"})]),_:2},1032,["modelValue","onUpdate:modelValue","placeholder"]),e(v,{modelValue:a.price,"onUpdate:modelValue":o=>a.price=o,style:{width:"100px"},clearable:"",placeholder:i(c)("金额"),class:"input-width"},null,8,["modelValue","onUpdate:modelValue","placeholder"]),xe,e(v,{modelValue:a.rate,"onUpdate:modelValue":o=>a.rate=o,style:{width:"100px"},clearable:"",placeholder:i(c)("比例"),class:"input-width"},null,8,["modelValue","onUpdate:modelValue","placeholder"]),r(),ge,Ve])):C("",!0),a.type==2?(h(),f("div",be,[we,e(v,{modelValue:a.price,"onUpdate:modelValue":o=>a.price=o,style:{width:"100px"},clearable:"",placeholder:i(c)("金额"),class:"input-width"},null,8,["modelValue","onUpdate:modelValue","placeholder"]),Ee,ke])):C("",!0)]),e(q,{"border-style":"dashed"})]))),256)),e(y,{type:"primary",plain:"",onClick:N},{default:l(()=>[r("追加")]),_:1})])]),_:1})]),_:1},8,["model"])]),_:1}),t("div",Ue,[t("div",Ce,[e(y,{type:"primary",onClick:s[1]||(s[1]=a=>B(b.value))},{default:l(()=>[r(g(i(c)("save")),1)]),_:1})])])])}}});const He=le(Ie,[["__scopeId","data-v-25313a9c"]]);export{He as default};
