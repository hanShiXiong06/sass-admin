import{d as G,f as K,x as O,r as v,n as W,h as s,c,e as a,w as n,a as u,t as i,u as l,i as _,q as t,F as B,T as Y,s as y,R as A,B as b,a5 as P,E as H,K as J,L as Q,ac as X,aD as Z,M as ee,a7 as te,ad as ae,ae as ne,W as le,Y as oe}from"./index-99f00cf3.js";/* empty css                   *//* empty css                      *//* empty css                 *//* empty css               *//* empty css                  *//* empty css                  *//* empty css                     *//* empty css                  *//* empty css                 *//* empty css                    */import"./el-tooltip-4ed993c7.js";/* empty css                        *//* empty css                *//* empty css                */import"./el-form-item-4ed993c7.js";/* empty css                  */import{k as se,g as ie,l as pe,m as re}from"./marketing-47e9cfd6.js";import{_ as ce}from"./coupon-spread-popup.vue_vue_type_script_setup_true_lang-1e38963a.js";/* empty css                  *//* empty css                   *//* empty css                 *//* empty css                        */import"./browser-a1ac24ac.js";const de={class:"main-container"},ue={class:"flex justify-between items-center"},me={class:"text-page-title"},_e={class:"mt-[10px]"},fe={key:0},he={key:1},ye={key:0},ge={key:1},ke={key:0},ve={key:1},be={key:0},Ce={key:1},xe={key:1},Ee={key:0},Te={key:0,class:"flex flex-col"},Be={key:1},Pe={key:1},Fe={class:"mt-[16px] flex justify-end"},at=G({__name:"list",setup(Ve){const g=K(),F=O().meta.title,C=v(null),o=W({page:1,limit:10,total:0,loading:!0,data:[],searchParam:{title:"",status:""}}),x=v();(()=>{se().then(p=>{C.value=p.data})})();const f=(p=1)=>{o.loading=!0,o.page=p,ie({page:o.page,limit:o.limit,...o.searchParam}).then(r=>{o.loading=!1,o.data=r.data.data,o.total=r.data.total}).catch(()=>{o.loading=!1})};f();const E=v(null),V=p=>{E.value.show(p)},L=()=>{g.push("/shop/marketing/coupon/add")},$=p=>{g.push("/shop/marketing/coupon/edit?id="+p.id)},S=p=>{g.push("/shop/marketing/coupon/collection?id="+p.id)},N=p=>{P.confirm(t("couponDeleteTips"),t("warning"),{confirmButtonText:t("confirm"),cancelButtonText:t("cancel"),type:"warning"}).then(()=>{pe(p.id).then(()=>{f()}).catch(()=>{})})},R=p=>{P.confirm(t("couponColseTips"),t("warning"),{confirmButtonText:t("confirm"),cancelButtonText:t("cancel"),type:"warning"}).then(()=>{re(p.id).then(()=>{f()}).catch(()=>{})})},z=p=>{p&&(p.resetFields(),f())};return(p,r)=>{const m=H,D=J,k=Q,I=X,U=Z,j=ee,T=te,d=ae,w=ne,M=le,q=oe;return s(),c("div",de,[a(T,{class:"box-card !border-none",shadow:"never"},{default:n(()=>[u("div",ue,[u("span",me,i(l(F)),1),a(m,{type:"primary",onClick:L},{default:n(()=>[_(i(l(t)("addCoupon")),1)]),_:1})]),a(T,{class:"box-card !border-none my-[20px] table-search-wrap",shadow:"never"},{default:n(()=>[a(j,{inline:!0,model:o.searchParam,ref_key:"searchFormRef",ref:x},{default:n(()=>[a(k,{label:l(t)("title"),prop:"title"},{default:n(()=>[a(D,{modelValue:o.searchParam.title,"onUpdate:modelValue":r[0]||(r[0]=e=>o.searchParam.title=e),modelModifiers:{trim:!0},placeholder:l(t)("titlePlaceholder")},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),a(k,{label:l(t)("statusName"),prop:"status"},{default:n(()=>[a(U,{modelValue:o.searchParam.status,"onUpdate:modelValue":r[1]||(r[1]=e=>o.searchParam.status=e),clearable:"",class:"input-item"},{default:n(()=>[(s(!0),c(B,null,Y(C.value,(e,h)=>(s(),y(I,{key:h,label:e,value:h},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1},8,["label"]),a(k,null,{default:n(()=>[a(m,{type:"primary",onClick:r[2]||(r[2]=e=>f())},{default:n(()=>[_(i(l(t)("search")),1)]),_:1}),a(m,{onClick:r[3]||(r[3]=e=>z(x.value))},{default:n(()=>[_(i(l(t)("reset")),1)]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),u("div",_e,[A((s(),y(w,{data:o.data,size:"large"},{empty:n(()=>[u("span",null,i(o.loading?"":l(t)("emptyData")),1)]),default:n(()=>[a(d,{prop:"title",label:l(t)("title"),"min-width":"130"},null,8,["label"]),a(d,{prop:"type_name",label:l(t)("type"),"min-width":"98"},null,8,["label"]),a(d,{prop:"price",label:l(t)("price"),"min-width":"100"},{default:n(({row:e})=>[u("span",null,"¥"+i(e.price),1)]),_:1},8,["label"]),a(d,{label:l(t)("receiveType"),"min-width":"130"},{default:n(({row:e})=>[e.receive_type==1?(s(),c("span",fe,"是")):(s(),c("span",he,"否"))]),_:1},8,["label"]),a(d,{label:l(t)("sumCount"),"min-width":"160"},{default:n(({row:e})=>[e.receive_type==1&&e.sum_count!="-1"?(s(),c("span",ye,i(e.remain_count||"")+" / "+i(e.sum_count||""),1)):(s(),c("span",ge,"不限量"))]),_:1},8,["label"]),a(d,{label:l(t)("remainCount"),"min-width":"140"},{default:n(({row:e})=>[u("span",null,i(e.receive_count||0)+" / "+i(e.receive_use_count||0),1)]),_:1},8,["label"]),a(d,{label:l(t)("threshold"),"min-width":"130"},{default:n(({row:e})=>[e.min_condition_money=="0.00"?(s(),c("span",ke,"无门槛")):(s(),c("span",ve,"满"+i(e.min_condition_money)+"元可用",1))]),_:1},8,["label"]),a(d,{label:l(t)("validType"),"min-width":"190"},{default:n(({row:e})=>[e.receive_type==1?(s(),c(B,{key:0},[e.valid_type==1?(s(),c("span",be," 领取之日起"+i(e.length||"")+" 天内有效",1)):(s(),c("span",Ce," 使用截止时间至"+i(e.valid_end_time||""),1))],64)):(s(),c("span",xe,"--"))]),_:1},8,["label"]),a(d,{label:l(t)("receiveTypeTime"),"min-width":"210"},{default:n(({row:e})=>[e.receive_type==1?(s(),c("div",Ee,[parseInt(e.start_time)!=0&&parseInt(e.end_time)!=0?(s(),c("div",Te,[u("span",null,"开始时间："+i(e.start_time),1),u("span",null,"结束时间："+i(e.end_time),1)])):(s(),c("div",Be,"不限时"))])):(s(),c("span",Pe,"--"))]),_:1},8,["label"]),a(d,{prop:"status_name",label:l(t)("statusName"),"min-width":"98"},null,8,["label"]),a(d,{label:l(t)("operation"),fixed:"right",align:"right","min-width":"160"},{default:n(({row:e})=>[a(m,{type:"primary",link:"",onClick:h=>V(e)},{default:n(()=>[_(i(l(t)("spreadGoods")),1)]),_:2},1032,["onClick"]),e.status==0||e.status==1?(s(),y(m,{key:0,type:"primary",link:"",onClick:h=>$(e)},{default:n(()=>[_(i(l(t)("edit")),1)]),_:2},1032,["onClick"])):b("",!0),e.status!=1?(s(),y(m,{key:1,type:"primary",link:"",onClick:h=>N(e)},{default:n(()=>[_(i(l(t)("delete")),1)]),_:2},1032,["onClick"])):b("",!0),e.status==1?(s(),y(m,{key:2,type:"primary",link:"",onClick:h=>R(e)},{default:n(()=>[_(i(l(t)("close")),1)]),_:2},1032,["onClick"])):b("",!0),a(m,{type:"primary",link:"",onClick:h=>S(e)},{default:n(()=>[_(i(l(t)("receive")),1)]),_:2},1032,["onClick"])]),_:1},8,["label"])]),_:1},8,["data"])),[[q,o.loading]]),u("div",Fe,[a(M,{"current-page":o.page,"onUpdate:current-page":r[4]||(r[4]=e=>o.page=e),"page-size":o.limit,"onUpdate:page-size":r[5]||(r[5]=e=>o.limit=e),layout:"total, sizes, prev, pager, next, jumper",total:o.total,onSizeChange:r[6]||(r[6]=e=>f()),onCurrentChange:f},null,8,["current-page","page-size","total"])])])]),_:1}),a(ce,{ref_key:"couponSpreadPopupRef",ref:E},null,512)])}}});export{at as default};