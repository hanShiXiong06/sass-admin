import{d as S,x as T,r as P,n as Y,a2 as L,h as s,c as b,e as a,w as r,i as d,a as i,R as M,s as g,t as c,F as R,T as N,B as y,bR as O,L as U,K as j,E as H,M as K,a7 as W,ad as q,al as A,ae as G,W as J,Y as Q,p as X,g as Z}from"./index-904cb7a2.js";/* empty css                   *//* empty css                      *//* empty css                 *//* empty css               *//* empty css                  *//* empty css                  *//* empty css                     *//* empty css                  *//* empty css                 *//* empty css                    */import"./el-tooltip-4ed993c7.js";/* empty css                        *//* empty css                *//* empty css                *//* empty css                  */import"./el-form-item-4ed993c7.js";/* empty css                       */import{f as ee,h as te}from"./myxq-f5383437.js";import{_ as oe}from"./_plugin-vue_export-helper-c27b6911.js";const ae=u=>(X("data-v-b0238df5"),u=u(),Z(),u),re={class:"main-container"},le=ae(()=>i("div",{class:"flex justify-between items-center"},[i("span",{class:"text-lg"},"推广订单")],-1)),ne={class:"mt-[10px]"},se={key:0},ie={class:"mt-[16px] flex justify-end"},de=S({__name:"other_order",setup(u){T();const x=P(),t=Y({page:1,limit:30,total:0,loading:!0,data:[],searchParam:{time:[],orderid:""}}),E=l=>{const e=new Date(l*1e3),h=e.getFullYear(),m=e.getMonth()+1,v=e.getDate(),_=e.getHours(),w=e.getMinutes(),f=e.getSeconds();return`${h}-${m}-${v} ${_}:${w}:${f}`},k=P();(async()=>{const l=await ee();k.value=l.data})();const p=(l=1)=>{t.loading=!0,t.page=l,te({page:t.page,limit:t.limit,...t.searchParam}).then(e=>{t.loading=!1,t.data=e.data.data,t.total=e.data.total}).catch(()=>{t.loading=!1})};p();const D=l=>{l&&(l.resetFields(),p())};return(l,e)=>{const h=O,m=U,v=j,_=H,w=K,f=W,V=L("block"),n=q,C=A,F=G,I=J,$=Q;return s(),b("div",re,[a(f,{class:"box-card !border-none",shadow:"never"},{default:r(()=>[le,a(f,{class:"box-card !border-none my-[10px] table-search-wrap",shadow:"never"},{default:r(()=>[a(w,{inline:!0,model:t.searchParam,ref_key:"searchFormRef",ref:x},{default:r(()=>[a(m,{label:"开始时间",prop:"time"},{default:r(()=>[a(h,{modelValue:t.searchParam.time,"onUpdate:modelValue":e[0]||(e[0]=o=>t.searchParam.time=o),type:"datetimerange",format:"YYYY-MM-DD hh:mm:ss","range-separator":"-","start-placeholder":"开始时间","end-placeholder":"结束时间"},null,8,["modelValue"])]),_:1}),a(m,{label:"订单ID",prop:"orderid"},{default:r(()=>[a(v,{modelValue:t.searchParam.orderid,"onUpdate:modelValue":e[1]||(e[1]=o=>t.searchParam.orderid=o),placeholder:"请输入订单ID"},null,8,["modelValue"])]),_:1}),a(m,null,{default:r(()=>[a(_,{type:"primary",onClick:e[2]||(e[2]=o=>p())},{default:r(()=>[d("搜索")]),_:1}),a(_,{onClick:e[3]||(e[3]=o=>D(x.value))},{default:r(()=>[d("重置")]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),i("div",ne,[M((s(),g(F,{data:t.data,size:"large"},{empty:r(()=>[i("span",null,c(t.loading?"":"还没有订单哟"),1)]),default:r(()=>[a(n,{prop:"pf_type",label:"平台","min-width":"120","show-overflow-tooltip":!0},{default:r(({row:o})=>[(s(!0),b(R,null,N(k.value,(z,B)=>(s(),g(V,{key:"index"},{default:r(()=>[B==o.pf_type?(s(),b("div",se,c(z),1)):y("",!0)]),_:2},1024))),128))]),_:1}),a(n,{prop:"orderid",label:"订单ID","min-width":"160","show-overflow-tooltip":!0}),a(n,{prop:"goods_id",label:"商品","min-width":"120","show-overflow-tooltip":!0}),a(n,{prop:"goods_num",label:"数量","min-width":"80","show-overflow-tooltip":!0}),a(n,{label:"付款/佣金","min-width":"120","show-overflow-tooltip":!0},{default:r(({row:o})=>[i("div",null,c(o.cosprice/100)+"/"+c(o.commission/100),1)]),_:1}),a(n,{prop:"valistatus",label:"状态描述","min-width":"120","show-overflow-tooltip":!0}),a(n,{prop:"isbalance",label:"结算","min-width":"120","show-overflow-tooltip":!0},{default:r(({row:o})=>[o.isbalance==0?(s(),g(C,{key:0},{default:r(()=>[d("未结算")]),_:1})):y("",!0),o.isbalance==1?(s(),g(C,{key:1},{default:r(()=>[d("已结算")]),_:1})):y("",!0)]),_:1}),d("/> "),a(n,{prop:"ordertime",label:"创建时间","min-width":"120","show-overflow-tooltip":!0},{default:r(({row:o})=>[i("div",null,c(E(o.ordertime)),1)]),_:1}),d("/> ")]),_:1},8,["data"])),[[$,t.loading]]),i("div",ie,[a(I,{"current-page":t.page,"onUpdate:current-page":e[4]||(e[4]=o=>t.page=o),"page-size":t.limit,"onUpdate:page-size":e[5]||(e[5]=o=>t.limit=o),layout:"total, sizes, prev, pager, next, jumper",total:t.total,onSizeChange:e[6]||(e[6]=o=>p()),onCurrentChange:p},null,8,["current-page","page-size","total"])])])]),_:1})])}}});const $e=oe(de,[["__scopeId","data-v-b0238df5"]]);export{$e as default};
