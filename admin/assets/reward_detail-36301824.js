import{d as C,x as M,f as P,r as d,n as h,R as V,h as m,c as f,e as s,w as r,u as t,aQ as I,s as g,a as o,t as l,q as a,A as q,i as w,B as A,a3 as S,aR as z,a7 as H,L as J,J as Q,M as Y,ad as $,ae as j,Y as G}from"./index-904cb7a2.js";/* empty css                   *//* empty css                 *//* empty css                    */import"./el-tooltip-4ed993c7.js";/* empty css                  *//* empty css                     *//* empty css                        *//* empty css               *//* empty css                *//* empty css                 *//* empty css                        */import"./el-form-item-4ed993c7.js";/* empty css                *//* empty css                   *//* empty css                       */import{_ as K}from"./member_head-d9fd7b2c.js";import{h as O}from"./task-ea40231e.js";import{h as U}from"./level-3cd5bcb5.js";const W={class:"main-container"},X={class:"text text-[14px] leading-[25px]"},Z={class:"flex items-center"},ee={key:1,class:"w-[50px] h-[50px] mr-[10px] rounded-full",src:K,alt:""},te={class:"flex flex-col"},ae={class:"text-[14px] leading-[1]"},se={class:"text-[14px] leading-[1] mt-[5px] text-[#666]"},le={class:"flex items-center"},oe=o("span",{class:"mx-[10px]"},"至",-1),ne={key:0},re={key:1},ie={class:"text mt-[20px] text-[14px] leading-[25px]"},Ce=C({__name:"reward_detail",setup(me){const b=M(),v=P(),k=b.meta.title;d(!1);const y=d(),e=h({...{id:"",name:"",time_type:"1",start_time:"",end_time:"",level_type:"1",level:["1"],level_data:[],times:"1",timesNum:"",rules:[{condition:{type:[]},reward:{commission:""}}],remark:"",task_member_reward:""}});e.id=d(b.query.id);const F=h({loading:!0,data:[]}),D=d([]);(()=>{U().then(p=>{D.value=p.data})})();const _=d(!0);(()=>{_.value=!0,O({id:e.id}).then(p=>{let n=S(p.data);n&&(e.member=n.member,e.name=n.task.name,e.status_name=n.task.status_name,e.progress=n.progress,e.end_time=n.task.end_time,e.start_time=n.task.start_time,e.time_type=n.task.time_type,e.total_reward_money=n.total_reward_money,e.task_member_reward=n.task_member_reward),_.value=!1})})();const E=()=>{v.push("/shop_fenxiao/task/list")};return(p,n)=>{const L=z,x=H,i=J,R=Q,N=Y,c=$,B=j,T=G;return V((m(),f("div",W,[s(x,{class:"card !border-none",shadow:"never"},{default:r(()=>[s(L,{content:t(k),icon:t(I),onBack:n[0]||(n[0]=u=>E())},null,8,["content","icon"])]),_:1}),_.value?A("",!0):(m(),g(x,{key:0,class:"card mt-[15px] !border-none",shadow:"never"},{default:r(()=>[o("div",X,l(t(a)("baseInfo")),1),s(N,{class:"page-form",model:e,"label-width":"120px",ref_key:"taskFormRef",ref:y},{default:r(()=>[s(i,{label:t(a)("taskNam"),prop:"name"},{default:r(()=>[o("div",null,l(e.name),1)]),_:1},8,["label"]),s(i,{label:t(a)("recipient"),prop:"name"},{default:r(()=>[o("div",Z,[e.member.headimg?(m(),g(R,{key:0,class:"w-[50px] h-[50px] mr-[10px]",src:t(q)(e.member.headimg),fit:"contain"},null,8,["src"])):(m(),f("img",ee)),o("div",te,[o("span",ae,l(e.member.nickname||e.member.username),1),o("span",se,l(e.mobile||"--"),1)])])]),_:1},8,["label"]),s(i,{label:t(a)("schedule"),prop:"name"},{default:r(()=>[o("div",null,l(e.progress)+"%",1)]),_:1},8,["label"]),s(i,{label:t(a)("status"),prop:"name"},{default:r(()=>[o("div",null,l(e.status_name),1)]),_:1},8,["label"]),s(i,{label:t(a)("totalMoney"),prop:"name"},{default:r(()=>[o("div",null,l(e.total_reward_money),1)]),_:1},8,["label"]),s(i,{label:t(a)("taskTime")},{default:r(()=>[o("div",le,[o("span",null,l(e.start_time),1),oe,e.time_type==2?(m(),f("span",ne,"长期有效")):(m(),f("span",re,l(e.end_time),1))])]),_:1},8,["label"])]),_:1},8,["model"]),o("div",ie,l(t(a)("rewardDetail")),1),s(B,{data:e.task_member_reward,size:"large",ref:"tableRef"},{empty:r(()=>[o("span",null,l(F.loading?"":t(a)("emptyData")),1)]),default:r(()=>[s(c,{prop:"name",label:t(a)("awardExplain"),"min-width":"150"},{default:r(({row:u})=>[w(l(u.step)+l(t(a)("stepAward")),1)]),_:1},8,["label"]),s(c,{prop:"reward_money",label:t(a)("awardMoney"),"min-width":"100"},null,8,["label"]),s(c,{prop:"reward_money",label:t(a)("awardStatus"),"min-width":"100"},{default:r(({row:u})=>[w(l(u.is_send>0?t(a)("issued"):t(a)("unissued")),1)]),_:1},8,["label"]),s(c,{prop:"complete_time",label:t(a)("awardTimeRelease"),"min-width":"100",align:"right"},null,8,["label"])]),_:1},8,["data"])]),_:1}))])),[[T,_.value]])}}});export{Ce as default};
