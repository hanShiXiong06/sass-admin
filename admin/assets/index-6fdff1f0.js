import{d as z,r as x,Q as A,a2 as I,h as n,s as E,w as l,R as N,c as d,e,a as c,t as p,u as _,q as t,F as S,T as L,B as C,a0 as G,b3 as J,ai as D,a5 as K,aN as W,aO as Z,a1 as ee,V as le,b4 as ae,X as te,Y as se}from"./index-99f00cf3.js";/* empty css                   *//* empty css                  *//* empty css                   */import{T as oe,_ as ne}from"./dark-150775f6.js";/* empty css                     *//* empty css               *//* empty css               */import{c as R,g as ue,p as ce,a as ie,b as de}from"./cloud-11b628f2.js";import{_ as re}from"./_plugin-vue_export-helper-c27b6911.js";const _e={key:0,class:"h-[60vh]"},pe={key:0,class:"h-[60vh] flex flex-col"},fe={key:0,class:"bg-[#fff] my-3"},ve={class:"pt-[20px] pl-[20px]"},he={class:"px-[20px] pt-[10px] text-[14px] el-table"},me={key:0},ge={key:1},xe={key:0},be={key:1},ke={class:"h-[60vh]"},Be={key:1},Ce={class:"h-[60vh] flex flex-col"},we={class:"flex-1 h-0"},ye=z({__name:"index",emits:["complete"],setup(Te,{expose:M,emit:Ee}){const u=x(!1),r=x(null),f=x("build"),b=x(null),v=x(!1),h=x(null);let k=[];(()=>{ue().then(({data:a})=>{a&&(r.value=a,u.value||U())}).catch()})();const B=()=>{de().then(a=>{if(!a.data){u.value&&k.length&&(f.value="complete",h.value.execute("clear"),R()),w&&w.close(),r.value=null;return}const s=a.data.data??[];let o="";s[0]&&s[0].length&&u.value&&(k.length==0&&(h.value.execute("clear"),h.value.execute("开始编译")),s[0].forEach(i=>{k.includes(i.action)||(h.value.pushMessage({content:`正在执行：${i.action}`}),k.push(i.action),i.code==0&&(o=i.msg,h.value.pushMessage({content:i.msg,class:"error"})))})),!o&&setTimeout(()=>{B()},2e3)}).catch()};let w=null;const U=()=>{w=J.success({title:t("warning"),dangerouslyUseHTMLString:!0,message:D("div",{},[t("cloudbuild.executingTips"),D("span",{class:"text-primary cursor-pointer",onClick:$},[t("cloudbuild.clickView")])]),duration:0,showClose:!1})},$=()=>{u.value=!0,f.value="build",B()},q=async()=>{if(v.value=!0,f.value="build",r.value){u.value=!0,v.value=!1,B();return}ce().then(async({data:a})=>{a.is_pass?ie().then(({data:s})=>{v.value=!1,r.value=s,u.value=!0,B()}).catch(()=>{u.value=!1,v.value=!1}):(v.value=!1,b.value=a)}).catch(()=>{u.value=!1})};let y=null;const V=new oe,H=(a,s,o,i,T)=>{if(s=="开始编译"){o(V);const g=O(["/","——","\\","|"]);y=setInterval(()=>{V.flush("> "+g.next().value)},150)}},O=a=>{var s=0;return{next(){return s+1==a.length&&(s=0),{value:a[s++]}}}},P=a=>{f.value=="build"&&r.value?K.confirm(t("cloudbuild.showDialogCloseTips"),t("warning"),{confirmButtonText:t("confirm"),cancelButtonText:t("cancel"),type:"warning"}).then(()=>{h.value.execute("clear"),a()}).catch(()=>{}):a()};return A(()=>u.value,()=>{u.value||(r.value=null,f.value="build",k=[],y&&clearInterval(y),R())}),M({open:q,cloudBuildTask:r,loading:v}),(a,s)=>{const o=W,i=Z,T=I("Select"),g=ee,F=I("CloseBold"),Q=le,X=ae,Y=te,j=se;return n(),E(Y,{modelValue:u.value,"onUpdate:modelValue":s[0]||(s[0]=m=>u.value=m),title:_(t)("cloudbuild.title"),width:"850px","close-on-click-modal":!1,"close-on-press-escape":!1,"before-close":P},{default:l(()=>[f.value=="build"?N((n(),d("div",_e,[b.value&&!r.value?(n(),d("div",pe,[e(Q,null,{default:l(()=>[b.value.dir?(n(),d("div",fe,[c("p",ve,p(_(t)("cloudbuild.dirPermission")),1),c("div",he,[e(i,{class:"py-[10px] items table-head-bg pl-[15px] mb-[10px]"},{default:l(()=>[e(o,{span:12},{default:l(()=>[c("span",null,p(_(t)("cloudbuild.path")),1)]),_:1}),e(o,{span:6},{default:l(()=>[c("span",null,p(_(t)("cloudbuild.demand")),1)]),_:1}),e(o,{span:6},{default:l(()=>[c("span",null,p(_(t)("status")),1)]),_:1})]),_:1}),(n(!0),d(S,null,L(b.value.dir.is_readable,m=>(n(),E(i,{class:"pb-[10px] items pl-[15px]"},{default:l(()=>[e(o,{span:12},{default:l(()=>[c("span",null,p(m.dir),1)]),_:2},1024),e(o,{span:6},{default:l(()=>[c("span",null,p(_(t)("cloudbuild.readable")),1)]),_:1}),e(o,{span:6},{default:l(()=>[m.status?(n(),d("span",me,[e(g,{color:"green"},{default:l(()=>[e(T)]),_:1})])):(n(),d("span",ge,[e(g,{color:"red"},{default:l(()=>[e(F)]),_:1})]))]),_:2},1024)]),_:2},1024))),256)),(n(!0),d(S,null,L(b.value.dir.is_write,m=>(n(),E(i,{class:"pb-[10px] items pl-[15px]"},{default:l(()=>[e(o,{span:12},{default:l(()=>[c("span",null,p(m.dir),1)]),_:2},1024),e(o,{span:6},{default:l(()=>[c("span",null,p(_(t)("cloudbuild.write")),1)]),_:1}),e(o,{span:6},{default:l(()=>[m.status?(n(),d("span",xe,[e(g,{color:"green"},{default:l(()=>[e(T)]),_:1})])):(n(),d("span",be,[e(g,{color:"red"},{default:l(()=>[e(F)]),_:1})]))]),_:2},1024)]),_:2},1024))),256))])])):C("",!0)]),_:1})])):C("",!0),N(c("div",ke,[e(_(ne),{ref_key:"terminalRef",ref:h,context:"","init-log":null,"show-header":!1,"show-log-time":!0,onExecCmd:H},null,512)],512),[[G,r.value]])])),[[j,v.value]]):C("",!0),f.value=="complete"?(n(),d("div",Be,[c("div",Ce,[c("div",we,[e(X,{icon:"success",title:_(t)("cloudbuild.cloudbuildSuccess")},null,8,["title"])])])])):C("",!0)]),_:1},8,["modelValue","title"])}}});const qe=re(ye,[["__scopeId","data-v-b7f0176c"]]);export{qe as default};
