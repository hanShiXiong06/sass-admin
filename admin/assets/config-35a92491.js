import{d as W,x as X,f as ee,r as g,l as le,q as o,h as _,c as w,R as oe,s as F,w as u,e as i,u as t,a as n,t as s,i as h,F as P,T as k,c1 as M,cb as K,B as D,a3 as U,U as b,au as ae,av as te,L as re,K as ne,bR as se,aw as de,c4 as ie,E as ue,a7 as pe,M as ce,Y as me,p as ve,g as _e}from"./index-904cb7a2.js";/* empty css                   *//* empty css                *//* empty css                *//* empty css                  *//* empty css                          *//* empty css                    *//* empty css                       *//* empty css                 *//* empty css                     *//* empty css                  */import"./el-form-item-4ed993c7.js";/* empty css                       *//* empty css                 */import{g as fe,a as xe,b as we,s as ye}from"./sale-68765042.js";import{_ as ge}from"./_plugin-vue_export-helper-c27b6911.js";const L=V=>(ve("data-v-4b9db85c"),V=V(),_e(),V),he={class:"main-container"},be={class:"text text-[14px] leading-[25px]"},Ve={key:0,class:"flex flex-col"},Ce=L(()=>n("span",{class:"text-[#666] ml-[5px]"},"日",-1)),Te={class:"text-[#999] text-[12px]"},Ee={key:1,class:"flex flex-col"},Se={class:"text-[#999] text-[12px]"},Fe={key:2,class:"flex flex-col items-center"},Pe={class:"flex flex-col mb-[5px]"},ke=L(()=>n("span",{class:"text-[#666] ml-[5px]"},"日",-1)),Me={class:"text-[#999] text-[12px]"},De={class:"text-[#999] text-[12px]"},Ue={class:"flex items-center"},$e={key:0,class:"flex items-center ml-[10px] text-[#666]"},Ne={class:"ml-[10px]"},Ie={class:"flex flex-col"},Re={key:0,class:"flex flex-col w-[500px] mb-[10px]"},je={class:"border-0 mb-[10px] border-solid border-b-[1px] border-[var(--el-border-color-lighter)] flex justify-between"},Be=["onClick"],Ke={class:"flex items-center pl-[30px]"},Le={class:"flex items-center"},Oe={class:"flex items-center mt-[10px] pl-[30px]"},qe={class:"flex items-center"},Qe={class:"fixed-footer-wrap"},Ae={class:"fixed-footer"},Ge=W({__name:"config",setup(V){const O=X();ee(),O.meta.title;const e=g({is_open:"1",period_type:"month",period:"",send_type:"active",condition:[],reward:[{end:1,reward:{commission:1}}]}),m=g({type:[],content:{order_money:0}}),y=g({index:0}),$=g(!0),E=g();(()=>{fe().then(a=>{e.value.is_open=a.data.is_open,e.value.period=a.data.period,e.value.period_type=a.data.period_type,e.value.send_type=a.data.send_type,e.value.reward=a.data.reward,y.value.index=e.value.reward.length,e.value.condition=a.data.condition||{},m.value.type=Object.keys(e.value.condition),m.value.content=U(e.value.condition),$.value=!1})})();const N=g({});(()=>{xe().then(a=>{N.value=a.data})})();const I=g({});(()=>{we().then(a=>{I.value=a.data})})();const q=a=>{e.value.period="",setTimeout(()=>{a&&a.clearValidate("period")})},Q=a=>{let l={end:1,reward:{commission:1}};Object.keys(e.value.reward).length&&(l.end=parseFloat(e.value.reward[a-1].end)+1),e.value.reward.push(l),y.value.index=++y.value.index},A=a=>{e.value.reward.splice(a,1),y.value.index=--y.value.index},G=(a,l)=>{let d=a<0||a>=0&&l<=0?0:e.value.reward[a-1].end,p=a+1>=e.value.reward.length?"--":e.value.reward[a+1].end;if(!/^[1-9]\d*$/.test(l))return b.error(`${o("rewardTips5")}`),e.value.reward[a].end=1,!1;if(parseFloat(d)>=parseFloat(l))return b.error(`${o("rewardTips3")}${d}`),e.value.reward[a].end=parseFloat(d)+1,!1;if(p!="--"&&parseFloat(p)<=parseFloat(l))return b.error(`${o("rewardTips4")}${p}`),e.value.reward[a].end=parseFloat(p)-1,!1},Y=(a,l)=>{if(isNaN(l)||l=="")return b.error(`${o("correctNumber")}`),e.value.reward[a].reward.commission=1,!1;if(parseFloat(l)<0)return b.error(`${o("moreThanZero")}`),e.value.reward[a].reward.commission=1,!1},Z=le(()=>({period:[{validator:(a,l,d)=>{e.value.period_type=="year"&&!e.value.period&&d(new Error(o("fillDatePlaceholder")));let p=/^(?:30|31|[1-2]?[0-9])$/;(e.value.period_type=="month"||e.value.period_type=="quarter")&&(l<=0||!p.test(l))&&d(new Error(o("correctNumber1"))),d()},trigger:["blur","change"]}],condition:[{validator:(a,l,d)=>{m.value.type.length||d(new Error(o("selectConditionPlaceholder"))),m.value.type.forEach((p,c)=>{m.value.content[p]||d(new Error(o("fillConditionPlaceholder"))),p=="order_money"&&m.value.content[p]<=0&&d(new Error(o("orderMoneyPlaceholder")))}),d()},trigger:["blur","change"]}],reward:[{validator:(a,l,d)=>{const p=c=>{let x=parseFloat(c);if(typeof x!="number"||isNaN(x))return!1;const C=x.toString(),T=C.indexOf(".");return T===-1?!0:C.length-T-1<=2};e.value.reward.length&&Number(e.value.is_open)&&e.value.reward.forEach((c,x)=>{(c.reward.commission<=0||!p(c.reward.commission))&&d(new Error(o("rewardCommissionPlaceholder")))}),d()},trigger:["blur"]}]}));let S=g(!1);const z=async a=>{S.value||!a||await a.validate(async l=>{if(l){let d={};m.value.type.forEach((c,x)=>{m.value.content[c]!=null&&(d[c]=m.value.content[c])}),e.value.condition=U(d);let p=U(e.value);ye(p).then(c=>{S.value=!1}).catch(()=>{S.value=!1})}})};return(a,l)=>{const d=ae,p=te,c=re,x=ne,C=se,T=de,R=ie,j=ue,B=pe,H=ce,J=me;return _(),w("div",he,[oe((_(),F(B,{class:"card !border-none",shadow:"never"},{default:u(()=>[i(H,{class:"page-form",model:e.value,"label-width":"180px",rules:t(Z),ref_key:"formRef",ref:E},{default:u(()=>[n("div",be,s(t(o)("baseTitle")),1),i(B,{class:"card !border-none",shadow:"never"},{default:u(()=>[i(c,{label:t(o)("isEnable")},{default:u(()=>[i(p,{modelValue:e.value.is_open,"onUpdate:modelValue":l[0]||(l[0]=r=>e.value.is_open=r)},{default:u(()=>[i(d,{label:"1"},{default:u(()=>[h(s(t(o)("are")),1)]),_:1}),i(d,{label:"0"},{default:u(()=>[h(s(t(o)("no")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["label"]),i(c,{label:t(o)("salePeriodType")},{default:u(()=>[i(p,{modelValue:e.value.period_type,"onUpdate:modelValue":l[1]||(l[1]=r=>e.value.period_type=r),onChange:l[2]||(l[2]=r=>q(E.value))},{default:u(()=>[(_(!0),w(P,null,k(N.value,(r,v)=>(_(),F(d,{key:v,label:v},{default:u(()=>[h(s(r),1)]),_:2},1032,["label"]))),128))]),_:1},8,["modelValue"])]),_:1},8,["label"]),i(c,{label:t(o)("salePeriod"),prop:"period"},{default:u(()=>[e.value.period_type=="month"?(_(),w("div",Ve,[n("div",null,[i(x,{class:"!w-[214px]",modelValue:e.value.period,"onUpdate:modelValue":l[3]||(l[3]=r=>e.value.period=r),modelModifiers:{trim:!0},placeholder:t(o)("monthDatePlaceholder"),onKeyup:l[4]||(l[4]=r=>t(M)(r)),maxlength:"2"},null,8,["modelValue","placeholder"]),Ce]),n("span",Te,s(t(o)("monthQuarterPlaceholder")),1)])):e.value.period_type=="year"?(_(),w("div",Ee,[i(C,{modelValue:e.value.period,"onUpdate:modelValue":l[5]||(l[5]=r=>e.value.period=r),type:"date",placeholder:t(o)("selectDatePlaceholder"),class:"!w-[214px]",format:"MM-DD","value-format":"MM-DD"},null,8,["modelValue","placeholder"]),n("span",Se,s(t(o)("yearQuarterPlaceholder")),1)])):(_(),w("div",Fe,[n("div",Pe,[n("div",null,[i(x,{class:"!w-[214px]",modelValue:e.value.period,"onUpdate:modelValue":l[6]||(l[6]=r=>e.value.period=r),modelModifiers:{trim:!0},placeholder:t(o)("monthDatePlaceholder"),onKeyup:l[7]||(l[7]=r=>t(M)(r)),maxlength:"2"},null,8,["modelValue","placeholder"]),ke]),n("span",Me,s(t(o)("quarterPlaceholder")),1),n("span",De,s(t(o)("monthQuarterPlaceholder")),1)])]))]),_:1},8,["label"]),i(c,{label:t(o)("saleSendType")},{default:u(()=>[i(p,{modelValue:e.value.send_type,"onUpdate:modelValue":l[8]||(l[8]=r=>e.value.send_type=r)},{default:u(()=>[(_(!0),w(P,null,k(I.value,(r,v)=>(_(),F(d,{key:v,label:v},{default:u(()=>[h(s(r),1)]),_:2},1032,["label"]))),128))]),_:1},8,["modelValue"])]),_:1},8,["label"]),i(c,{label:t(o)("condition"),prop:"condition"},{default:u(()=>[i(R,{modelValue:m.value.type,"onUpdate:modelValue":l[11]||(l[11]=r=>m.value.type=r)},{default:u(()=>[i(T,{label:"order_money",class:"!h-[auto] !flex !items-center"},{default:u(()=>[n("div",Ue,[n("span",null,s(t(o)("orderMoney")),1),m.value.type.indexOf("order_money")>-1?(_(),w("div",$e,[i(x,{modelValue:m.value.content.order_money,"onUpdate:modelValue":l[9]||(l[9]=r=>m.value.content.order_money=r),modelModifiers:{trim:!0},clearable:"",class:"!w-[100px]",maxlength:"60",onKeyup:l[10]||(l[10]=r=>t(K)(r))},null,8,["modelValue"]),n("span",Ne,s(t(o)("orderMoneyTips1")),1)])):D("",!0)])]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["label"]),i(c,{label:t(o)("reward"),prop:"reward"},{default:u(()=>[n("div",Ie,[(_(!0),w(P,null,k(y.value.index,(r,v)=>(_(),w("div",{key:r},[e.value.reward[v]?(_(),w("div",Re,[n("div",je,[n("span",null,s(r)+s(t(o)("rewardTips1")),1),y.value.index>1?(_(),w("span",{key:0,onClick:f=>A(v),class:"text-[var(--el-color-primary)] cursor-pointer"},s(t(o)("delete")),9,Be)):D("",!0)]),n("div",Ke,[n("span",null,s(t(o)("rewardIndex")),1),n("div",Le,[n("span",null,s(t(o)("rewardIndexTips1")),1),i(x,{modelValue:e.value.reward[v].end,"onUpdate:modelValue":f=>e.value.reward[v].end=f,modelModifiers:{trim:!0},clearable:"",class:"!w-[100px] mx-[8px]",onKeyup:l[12]||(l[12]=f=>t(M)(f)),onChange:f=>G(v,f)},null,8,["modelValue","onUpdate:modelValue","onChange"]),n("span",null,s(t(o)("rewardIndexTips2")),1)])]),n("div",Oe,[n("span",null,s(t(o)("rewardContent")),1),n("div",qe,[n("span",null,s(t(o)("rewardContentTips1")),1),i(x,{modelValue:e.value.reward[v].reward.commission,"onUpdate:modelValue":f=>e.value.reward[v].reward.commission=f,modelModifiers:{trim:!0},clearable:"",onChange:f=>Y(v,f),class:"!w-[100px] mx-[8px]",onKeyup:l[13]||(l[13]=f=>t(K)(f))},null,8,["modelValue","onUpdate:modelValue","onChange"]),n("span",null,s(t(o)("rewardContentTips2")),1)])])])):D("",!0)]))),128)),i(j,{class:"mt-[15px] w-[120px] ml-[30px]",type:"primary",onClick:l[14]||(l[14]=r=>Q(y.value.index))},{default:u(()=>[h(s(t(o)("rewardTips2"))+s(y.value.index+1)+s(t(o)("rewardTips1")),1)]),_:1})])]),_:1},8,["label"])]),_:1})]),_:1},8,["model","rules"])]),_:1})),[[J,$.value]]),n("div",Qe,[n("div",Ae,[i(j,{type:"primary",onClick:l[15]||(l[15]=r=>z(E.value))},{default:u(()=>[h(s(t(o)("save")),1)]),_:1})])])])}}});const cl=ge(Ge,[["__scopeId","data-v-4b9db85c"]]);export{cl as default};
