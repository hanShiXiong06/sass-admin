import{d as J,x as K,f as W,r as v,n as G,h as d,c as C,e as s,w as n,a as p,t as r,u as l,i as c,q as t,F as Q,T as X,s as g,R as Z,A as ee,B as b,a3 as te,a5 as F,E as ae,K as le,L as se,ac as ne,aD as ie,bR as oe,M as re,a7 as me,ad as ce,J as de,ae as pe,W as ue,Y as _e}from"./index-904cb7a2.js";/* empty css                   *//* empty css                      *//* empty css                 *//* empty css               *//* empty css                  *//* empty css                  *//* empty css                     *//* empty css                  *//* empty css                 *//* empty css                    */import"./el-tooltip-4ed993c7.js";/* empty css                 *//* empty css                        *//* empty css                        *//* empty css                *//* empty css                *//* empty css                       *//* empty css                  */import"./el-form-item-4ed993c7.js";import{_ as V}from"./goods_default-247a7f2b.js";import{c as fe,d as he,f as ge,t as ke}from"./task-ea40231e.js";import{_ as ve}from"./task-detail.vue_vue_type_style_index_0_lang-c570464d.js";/* empty css                  *//* empty css                   */import"./level-3cd5bcb5.js";const be={class:"main-container"},ye={class:"flex justify-between items-center"},xe={class:"text-page-title"},Ce={class:"flex items-center cursor-pointer"},Ee={class:"min-w-[50px] h-[50px] flex items-center justify-center"},De=p("div",{class:"image-slot"},[p("img",{class:"w-[50px] h-[50px]",src:V,fit:"contain"})],-1),Te={key:1,class:"w-[50px] h-[50px]",src:V,fit:"contain"},Pe={class:"ml-2"},Fe={class:"mt-[16px] flex justify-end"},lt=J({__name:"list",setup(Ve){const w=K(),y=W(),B=w.meta.title,E=v(),u=v(!1),$=o=>{o&&(a.searchParam.name="",a.searchParam.status="",a.searchParam.create_time=[],o.resetFields(),_())},a=G({page:1,limit:10,total:0,loading:!1,data:[],searchParam:{name:"",status:"",create_time:[]}}),_=(o=1)=>{a.loading=!0,a.page=o;const i=te(a.searchParam);fe({page:a.page,limit:a.limit,...i}).then(m=>{a.data=m.data.data,a.total=m.data.total,a.loading=!1})};_();const D=v({});(()=>{he().then(o=>{D.value=o.data})})();const N=()=>{y.push("/shop_fenxiao/task/task_edit")},x=v(null),S=o=>{let i={id:o.id};x.value.setFormData(i),x.value.showDialog=!0},R=o=>{y.push("/shop_fenxiao/task/task_edit?id="+o.id)},j=o=>{y.push("/shop_fenxiao/task/reward?id="+o.id)},z=o=>{F.confirm(t("taskDeleteTips"),t("warning"),{confirmButtonText:t("confirm"),cancelButtonText:t("cancel"),type:"warning"}).then(()=>{u.value||(u.value=!0,ge({id:o.id}).then(()=>{_(),u.value=!1}).catch(()=>{u.value=!1}))})},L=o=>{F.confirm(t("taskFinishTips"),t("warning"),{confirmButtonText:t("confirm"),cancelButtonText:t("cancel"),type:"warning"}).then(()=>{u.value||(u.value=!0,ke({id:o.id}).then(()=>{_(),u.value=!1}).catch(()=>{u.value=!1}))})};return(o,i)=>{const m=ae,M=le,k=se,T=ne,U=ie,Y=oe,I=re,P=me,f=ce,A=de,H=pe,O=ue,q=_e;return d(),C("div",be,[s(P,{class:"card !border-none",shadow:"never"},{default:n(()=>[p("div",ye,[p("span",xe,r(l(B)),1),s(m,{type:"primary",onClick:N},{default:n(()=>[c(r(l(t)("addTask")),1)]),_:1})]),s(P,{class:"card !border-none my-[10px] table-search-wrap",shadow:"never"},{default:n(()=>[s(I,{inline:!0,model:a.searchParam,ref_key:"searchFormRef",ref:E},{default:n(()=>[s(k,{label:l(t)("taskName")},{default:n(()=>[s(M,{modelValue:a.searchParam.name,"onUpdate:modelValue":i[0]||(i[0]=e=>a.searchParam.name=e),modelModifiers:{trim:!0},placeholder:l(t)("taskNamePlaceholder"),maxlength:"60"},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),s(k,{label:l(t)("status")},{default:n(()=>[s(U,{modelValue:a.searchParam.status,"onUpdate:modelValue":i[1]||(i[1]=e=>a.searchParam.status=e),placeholder:l(t)("statusPlaceholder")},{default:n(()=>[s(T,{label:l(t)("all"),value:""},null,8,["label"]),(d(!0),C(Q,null,X(D.value,(e,h)=>(d(),g(T,{key:h,label:e,value:h},null,8,["label","value"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"]),s(k,{label:l(t)("createTime")},{default:n(()=>[s(Y,{modelValue:a.searchParam.create_time,"onUpdate:modelValue":i[2]||(i[2]=e=>a.searchParam.create_time=e),type:"datetimerange","value-format":"YYYY-MM-DD HH:mm:ss","start-placeholder":l(t)("startDate"),"end-placeholder":l(t)("endDate")},null,8,["modelValue","start-placeholder","end-placeholder"])]),_:1},8,["label"]),s(k,null,{default:n(()=>[s(m,{type:"primary",onClick:i[3]||(i[3]=e=>_())},{default:n(()=>[c(r(l(t)("search")),1)]),_:1}),s(m,{onClick:i[4]||(i[4]=e=>$(E.value))},{default:n(()=>[c(r(l(t)("reset")),1)]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),Z((d(),g(H,{data:a.data,size:"large",ref:"tableRef"},{empty:n(()=>[p("span",null,r(a.loading?"":l(t)("emptyData")),1)]),default:n(()=>[s(f,{type:"selection",width:"55"}),s(f,{label:l(t)("taskName"),"min-width":"150"},{default:n(({row:e})=>[p("div",Ce,[p("div",Ee,[e.cover_thumb_mid?(d(),g(A,{key:0,class:"w-[50px] h-[50px]",src:l(ee)(e.cover_thumb_mid),fit:"contain"},{error:n(()=>[De]),_:2},1032,["src"])):(d(),C("img",Te))]),p("div",Pe,[p("span",null,r(e.name),1)])])]),_:1},8,["label"]),s(f,{label:l(t)("level"),"min-width":"100"},{default:n(({row:e})=>[c(r(e.level_type==1&&"全部等级"||e.level_type==2&&Object.values(e.level_data).toString()),1)]),_:1},8,["label"]),s(f,{prop:"status_name",label:l(t)("state"),"min-width":"100"},null,8,["label"]),s(f,{prop:"create_time",label:l(t)("createTime"),"min-width":"200"},{default:n(({row:e})=>[c(r(e.create_time||"--"),1)]),_:1},8,["label"]),s(f,{label:l(t)("taskTime"),"min-width":"200"},{default:n(({row:e})=>[c(r(e.start_time||"--")+" 至 "+r(e.time_type==1?e.end_time:"长期有效"),1)]),_:1},8,["label"]),s(f,{label:l(t)("operation"),fixed:"right",align:"right","min-width":"120"},{default:n(({row:e})=>[e.status==1?(d(),g(m,{key:0,type:"primary",link:"",onClick:h=>R(e)},{default:n(()=>[c(r(l(t)("edit")),1)]),_:2},1032,["onClick"])):b("",!0),e.status!=1?(d(),g(m,{key:1,type:"primary",link:"",onClick:h=>j(e)},{default:n(()=>[c(r(l(t)("awardDetail")),1)]),_:2},1032,["onClick"])):b("",!0),s(m,{type:"primary",link:"",onClick:h=>S(e)},{default:n(()=>[c(r(l(t)("detail")),1)]),_:2},1032,["onClick"]),e.status!=3?(d(),g(m,{key:2,type:"primary",link:"",onClick:h=>L(e)},{default:n(()=>[c(r(l(t)("finish")),1)]),_:2},1032,["onClick"])):b("",!0),e.status==3?(d(),g(m,{key:3,type:"primary",link:"",onClick:h=>z(e)},{default:n(()=>[c(r(l(t)("delete")),1)]),_:2},1032,["onClick"])):b("",!0)]),_:1},8,["label"])]),_:1},8,["data"])),[[q,a.loading]]),p("div",Fe,[s(O,{"current-page":a.page,"onUpdate:current-page":i[5]||(i[5]=e=>a.page=e),"page-size":a.limit,"onUpdate:page-size":i[6]||(i[6]=e=>a.limit=e),layout:"total, sizes, prev, pager, next, jumper",total:a.total,onSizeChange:i[7]||(i[7]=e=>_()),onCurrentChange:_},null,8,["current-page","page-size","total"])])]),_:1}),s(ve,{ref_key:"taskDetailDialog",ref:x},null,512)])}}});export{lt as default};
