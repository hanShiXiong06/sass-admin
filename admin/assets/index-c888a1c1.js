import{O as b,d as E,r as _,a2 as T,h as O,c as z,e as t,w as e,a as s,t as i,u as a,q as o,R as A,a$ as N,a1 as B,aa as I,bP as q,aN as D,aO as G,a7 as L,Y as M}from"./index-99f00cf3.js";/* empty css                   *//* empty css                *//* empty css               *//* empty css               *//* empty css                     */import"./el-tooltip-4ed993c7.js";/* empty css                  */import{i as Q}from"./index-d2519496.js";function R(){return b.get("shop_fenxiao/stat_fenxiao_week")}function V(){return b.get("shop_fenxiao/stat_account")}function W(){return b.get("shop_fenxiao/stat_fenxiao_member")}function j(){return b.get("shop_fenxiao/stat_commission")}const P={class:"main-container"},Y={class:"ml-[10px]"},$={class:"flex items-center mb-[10px]"},H={class:"mr-[3px] text-[14px] text-[#909399]"},J={class:"ml-[10px]"},K={class:"flex items-center mb-[10px]"},U={class:"mr-[3px] text-[14px] text-[#909399]"},X={class:"ml-[10px]"},Z={class:"flex items-center mb-[10px]"},tt={class:"mr-[3px] text-[14px] text-[#909399]"},et={class:"ml-[10px]"},st={class:"flex items-center mb-[10px]"},at={class:"mr-[3px] text-[14px] text-[#909399]"},ot={class:"text-lg font-extrabold"},it={class:"ml-[10px]"},nt={class:"flex items-center mb-[10px]"},lt={class:"text-[14px] text-[#909399]"},ct={class:"ml-[10px]"},_t={class:"flex items-center mb-[10px]"},mt={class:"text-[14px] text-[#909399]"},ut={class:"ml-[10px]"},dt={class:"flex items-center mb-[10px]"},pt={class:"text-[14px] text-[#909399]"},xt={class:"text-lg font-extrabold"},rt={class:"text-lg font-extrabold"},vt={class:"ml-[10px]"},ft={class:"flex items-center mb-[10px]"},ht={class:"mr-[3px] text-[14px] text-[#909399]"},gt={class:"ml-[10px]"},bt={class:"flex items-center mb-[10px]"},Ct={class:"mr-[3px] text-[14px] text-[#909399]"},wt={class:"ml-[10px]"},Ft={class:"flex items-center mb-[10px]"},St={class:"mr-[3px] text-[14px] text-[#909399]"},kt={class:"ml-[10px]"},yt={class:"flex items-center mb-[10px]"},Et={class:"mr-[3px] text-[14px] text-[#909399]"},Tt={class:"ml-[10px]"},Ot={class:"flex items-center mb-[10px]"},zt={class:"mr-[3px] text-[14px] text-[#909399]"},At={class:"ml-[10px]"},Nt={class:"flex items-center mb-[10px]"},Bt={class:"mr-[3px] text-[14px] text-[#909399]"},Pt=E({__name:"index",setup(It){const F=_(null),p=_([]),c=_([]),x=_([]),C=_([]),m=_({time:[],num:[]}),S=_(!0);(async()=>{p.value=await(await V()).data,c.value=await(await j()).data,x.value=await(await W()).data,C.value=await(await R()).data,Object.keys(c.value).length&&(F.value=parseFloat(c.value.sum_fenxiao_commission)+parseFloat(c.value.sum_task_commission)+parseFloat(c.value.sum_team_commission)+parseFloat(c.value.sum_agent_commission)+parseFloat(c.value.sum_sale_commission)),C.value.length&&(m.value.time=[],m.value.num=[],C.value.forEach(u=>{m.value.time.push(u.date),m.value.num.push(u.num)})),S.value=!1,N(()=>{k()})})();const w=_(),k=()=>{if(!w.value)return;const u=Q(w.value),r=_({legend:{},xAxis:{data:[]},yAxis:{},tooltip:{trigger:"axis"},series:[{type:"line",data:[]}]});r.value.xAxis.data=m.value.time,r.value.series[0].data=m.value.num,u.setOption(r.value),window.addEventListener("resize",()=>{u.resize()})};return(u,r)=>{const v=T("QuestionFilled"),f=B,h=I,l=q,n=D,d=G,g=L,y=M;return O(),z("div",P,[t(g,{class:"card !border-none",shadow:"never"},{default:e(()=>[t(d,null,{default:e(()=>[t(n,{span:6},{default:e(()=>[s("div",Y,[t(l,{precision:2,value:p.value.sum_commission},{title:e(()=>[s("div",$,[s("span",H,i(a(o)("sumCommission")),1),t(h,{class:"box-item",effect:"light",content:a(o)("sumCommissionTips"),placement:"right"},{default:e(()=>[t(f,{size:"14px"},{default:e(()=>[t(v)]),_:1})]),_:1},8,["content"])])]),_:1},8,["value"])])]),_:1}),t(n,{span:6},{default:e(()=>[s("div",J,[t(l,{precision:2,value:p.value.sum_commission_get},{title:e(()=>[s("div",K,[s("span",U,i(a(o)("sumCommissionGet")),1),t(h,{class:"box-item",effect:"light",content:a(o)("sumCommissionGetTips"),placement:"right"},{default:e(()=>[t(f,{size:"14px"},{default:e(()=>[t(v)]),_:1})]),_:1},8,["content"])])]),_:1},8,["value"])])]),_:1}),t(n,{span:6},{default:e(()=>[s("div",X,[t(l,{precision:2,value:p.value.sum_commission_cash_outing},{title:e(()=>[s("div",Z,[s("span",tt,i(a(o)("sumCommissionCashOuting")),1),t(h,{class:"box-item",effect:"light",content:a(o)("sumCommissionCashOutingTips"),placement:"right"},{default:e(()=>[t(f,{size:"14px"},{default:e(()=>[t(v)]),_:1})]),_:1},8,["content"])])]),_:1},8,["value"])])]),_:1}),t(n,{span:6},{default:e(()=>[s("div",et,[t(l,{precision:2,value:p.value.unsettlement_commission},{title:e(()=>[s("div",st,[s("span",at,i(a(o)("unsettlementCommission")),1),t(h,{class:"box-item",effect:"light",content:a(o)("unsettlementCommissionTips"),placement:"right"},{default:e(()=>[t(f,{size:"14px"},{default:e(()=>[t(v)]),_:1})]),_:1},8,["content"])])]),_:1},8,["value"])])]),_:1})]),_:1})]),_:1}),t(d,{gutter:15,class:"mt-[15px]"},{default:e(()=>[t(n,{span:14},{default:e(()=>[t(g,{class:"card !border-none",shadow:"never"},{header:e(()=>[s("span",ot,i(a(o)("fenxiaoOverview")),1)]),default:e(()=>[t(d,null,{default:e(()=>[t(n,{span:8},{default:e(()=>[s("div",it,[t(l,{value:x.value.apply_count},{title:e(()=>[s("div",nt,[s("span",lt,i(a(o)("applyCount")),1)])]),_:1},8,["value"])])]),_:1}),t(n,{span:8},{default:e(()=>[s("div",ct,[t(l,{value:x.value.fenxiao_count},{title:e(()=>[s("div",_t,[s("span",mt,i(a(o)("fenxiaoCount")),1)])]),_:1},8,["value"])])]),_:1}),t(n,{span:8},{default:e(()=>[s("div",ut,[t(l,{value:x.value.agent_count},{title:e(()=>[s("div",dt,[s("span",pt,i(a(o)("agentCount")),1)])]),_:1},8,["value"])])]),_:1})]),_:1})]),_:1}),t(g,{class:"card mt-[15px] !border-none",shadow:"never"},{header:e(()=>[s("span",xt,i(a(o)("addFenxiaoNum")),1)]),default:e(()=>[A(s("div",{ref_key:"visitStat",ref:w,style:{width:"100%",height:"350px"}},null,512),[[y,S.value]])]),_:1})]),_:1}),t(n,{span:10},{default:e(()=>[t(g,{class:"card h-full !border-none",shadow:"never"},{header:e(()=>[s("span",rt,i(a(o)("fenxiaoCommission")),1)]),default:e(()=>[t(d,{class:"mt-[80px]"},{default:e(()=>[t(n,{span:12},{default:e(()=>[s("div",vt,[t(l,{precision:2,value:F.value||0},{title:e(()=>[s("div",ft,[s("span",ht,i(a(o)("commissionCount")),1)])]),_:1},8,["value"])])]),_:1}),t(n,{span:12},{default:e(()=>[s("div",gt,[t(l,{precision:2,value:c.value.sum_fenxiao_commission},{title:e(()=>[s("div",bt,[s("span",Ct,i(a(o)("sumFenxiaoCommission")),1)])]),_:1},8,["value"])])]),_:1})]),_:1}),t(d,{class:"mt-[80px]"},{default:e(()=>[t(n,{span:12},{default:e(()=>[s("div",wt,[t(l,{precision:2,value:c.value.sum_task_commission},{title:e(()=>[s("div",Ft,[s("span",St,i(a(o)("sumTaskCommission")),1)])]),_:1},8,["value"])])]),_:1}),t(n,{span:12},{default:e(()=>[s("div",kt,[t(l,{precision:2,value:c.value.sum_team_commission},{title:e(()=>[s("div",yt,[s("span",Et,i(a(o)("sumTeamCommission")),1)])]),_:1},8,["value"])])]),_:1})]),_:1}),t(d,{class:"mt-[80px]"},{default:e(()=>[t(n,{span:12},{default:e(()=>[s("div",Tt,[t(l,{precision:2,value:c.value.sum_agent_commission},{title:e(()=>[s("div",Ot,[s("span",zt,i(a(o)("sumAgentCommission")),1)])]),_:1},8,["value"])])]),_:1}),t(n,{span:12},{default:e(()=>[s("div",At,[t(l,{precision:2,value:c.value.sum_sale_commission},{title:e(()=>[s("div",Nt,[s("span",Bt,i(a(o)("sumSaleCommission")),1)])]),_:1},8,["value"])])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})])}}});export{Pt as default};
