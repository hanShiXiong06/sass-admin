import{d as O,x as A,n as G,r as c,h as s,c as V,e as l,w as o,a as u,t as p,u as e,i as d,q as r,F,T as B,s as _,R as H,B as C,a5 as J,E as Q,K as X,ac as Z,aD as ee,L as te,bR as ae,M as le,a7 as oe,ad as ne,al as re,ae as ie,W as se,Y as de}from"./index-904cb7a2.js";/* empty css                   *//* empty css                      *//* empty css                 *//* empty css               *//* empty css                  *//* empty css                  *//* empty css                     *//* empty css                  *//* empty css                 *//* empty css                    */import"./el-tooltip-4ed993c7.js";/* empty css                        *//* empty css                *//* empty css                *//* empty css                       *//* empty css                  */import"./el-form-item-4ed993c7.js";import{d as me,f as pe,b as ce,g as ue}from"./vip-bf0d5dbc.js";import{d as y}from"./common-2b82fb41.js";import{_ as _e}from"./vip-edit.vue_vue_type_style_index_0_lang-4b66ffcc.js";import{_ as ve}from"./_plugin-vue_export-helper-c27b6911.js";/* empty css                  *//* empty css                   */const fe={class:"main-container"},be={class:"flex justify-between items-center"},ge={class:"text-lg"},he={class:"mt-2 mb-2 ml-4"},ye={class:"mt-[10px]"},we={class:"mt-[16px] flex justify-end"},ke=O({__name:"vip",setup(xe){const M=A().meta.title;let a=G({page:1,limit:10,total:0,loading:!0,data:[],searchParam:{member_id:"",level_id:"",over_time:[]}});const D=c();c([]);const m=(i=1)=>{a.loading=!0,a.page=i,me({page:a.page,limit:a.limit,...a.searchParam}).then(n=>{a.loading=!1,a.data=n.data.data,a.total=n.data.total}).catch(()=>{a.loading=!1})};m();const v=c(null),z=()=>{v.value.setFormData(),v.value.showDialog=!0},U=i=>{v.value.setFormData(i),v.value.showDialog=!0},$=i=>{J.confirm(r("vipDeleteTips"),r("warning"),{confirmButtonText:r("confirm"),cancelButtonText:r("cancel"),type:"warning"}).then(()=>{pe(i).then(()=>{m()}).catch(()=>{})})},N=()=>{I()},w=c(),E=c([]),I=async()=>{E.value=await(await ce({keyword:w.value})).data.data};I();const L=c([]);(async()=>{L.value=await(await ue({})).data})();const R=i=>{i&&(i.resetFields(),m())};return(i,n)=>{const f=Q,Y=X,k=Z,P=ee,g=te,j=ae,S=le,T=oe,h=ne,x=re,W=ie,q=se,K=de;return s(),V("div",fe,[l(T,{class:"box-card !border-none",shadow:"never"},{default:o(()=>[u("div",be,[u("span",ge,p(e(M)),1),l(f,{type:"primary",onClick:z},{default:o(()=>[d(" 新增VIP ")]),_:1})]),l(T,{class:"box-card !border-none my-[10px] table-search-wrap",shadow:"never"},{default:o(()=>[l(S,{inline:!0,model:e(a).searchParam,ref_key:"searchFormRef",ref:D},{default:o(()=>[l(g,{label:e(r)("memberId"),prop:"member_id"},{default:o(()=>[l(P,{class:"input-width",modelValue:e(a).searchParam.member_id,"onUpdate:modelValue":n[1]||(n[1]=t=>e(a).searchParam.member_id=t),clearable:"",placeholder:e(r)("memberIdPlaceholder")},{default:o(()=>[u("div",he,[l(Y,{onChange:N,modelValue:w.value,"onUpdate:modelValue":n[0]||(n[0]=t=>w.value=t),style:{width:"200px"},placeholder:"搜索会员支持昵称/会员名"},{append:o(()=>[d("搜索 ")]),_:1},8,["modelValue"])]),l(k,{label:"请选择",value:""}),(s(!0),V(F,null,B(E.value,(t,b)=>(s(),_(k,{key:b,label:t.nickname,value:t.member_id},null,8,["label","value"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"]),l(g,{label:e(r)("levelId"),prop:"level_id"},{default:o(()=>[l(P,{class:"w-[280px]",modelValue:e(a).searchParam.level_id,"onUpdate:modelValue":n[2]||(n[2]=t=>e(a).searchParam.level_id=t),clearable:"",placeholder:e(r)("levelIdPlaceholder")},{default:o(()=>[(s(!0),V(F,null,B(L.value,(t,b)=>(s(),_(k,{key:b,label:t.level_name,value:t.level_id},null,8,["label","value"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"]),l(g,{label:e(r)("overTime"),prop:"over_time"},{default:o(()=>[l(j,{modelValue:e(a).searchParam.over_time,"onUpdate:modelValue":n[3]||(n[3]=t=>e(a).searchParam.over_time=t),type:"datetimerange",format:"YYYY-MM-DD hh:mm:ss","start-placeholder":e(r)("startDate"),"end-placeholder":e(r)("endDate")},null,8,["modelValue","start-placeholder","end-placeholder"])]),_:1},8,["label"]),l(g,null,{default:o(()=>[l(f,{type:"primary",onClick:n[4]||(n[4]=t=>m())},{default:o(()=>[d(p(e(r)("search")),1)]),_:1}),l(f,{onClick:n[5]||(n[5]=t=>R(D.value))},{default:o(()=>[d(p(e(r)("reset")),1)]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),u("div",ye,[H((s(),_(W,{data:e(a).data,size:"large"},{empty:o(()=>[u("span",null,p(e(a).loading?"":e(r)("emptyData")),1)]),default:o(()=>[l(h,{prop:"member_id_name",label:e(r)("memberId"),"min-width":"120","show-overflow-tooltip":!0},null,8,["label"]),l(h,{prop:"level_id_name",label:e(r)("levelId"),"min-width":"120","show-overflow-tooltip":!0},null,8,["label"]),l(h,{prop:"over_time",label:e(r)("overTime"),"min-width":"120","show-overflow-tooltip":!0},{default:o(({row:t})=>[e(y)(t.over_time)<Date.now()&&e(y)(t.over_time)>0?(s(),_(x,{key:0,type:"danger"},{default:o(()=>[d("已到期")]),_:1})):C("",!0),e(y)(t.over_time)==0?(s(),_(x,{key:1,type:"successr"},{default:o(()=>[d("永久")]),_:1})):C("",!0),e(y)(t.over_time)>Date.now()?(s(),_(x,{key:2,type:"success",class:"font-bold",effect:"plain"},{default:o(()=>[d(p(t.over_time),1)]),_:2},1024)):C("",!0)]),_:1},8,["label"]),l(h,{label:e(r)("operation"),fixed:"right","min-width":"120"},{default:o(({row:t})=>[l(f,{type:"primary",link:"",onClick:b=>U(t)},{default:o(()=>[d(p(e(r)("edit")),1)]),_:2},1032,["onClick"]),l(f,{type:"primary",link:"",onClick:b=>$(t.id)},{default:o(()=>[d(p(e(r)("delete")),1)]),_:2},1032,["onClick"])]),_:1},8,["label"])]),_:1},8,["data"])),[[K,e(a).loading]]),u("div",we,[l(q,{"current-page":e(a).page,"onUpdate:current-page":n[6]||(n[6]=t=>e(a).page=t),"page-size":e(a).limit,"onUpdate:page-size":n[7]||(n[7]=t=>e(a).limit=t),layout:"total, sizes, prev, pager, next, jumper",total:e(a).total,onSizeChange:n[8]||(n[8]=t=>m()),onCurrentChange:m},null,8,["current-page","page-size","total"])])]),l(_e,{ref_key:"editVipDialog",ref:v,onComplete:m},null,512)]),_:1})])}}});const Je=ve(ke,[["__scopeId","data-v-d377e487"]]);export{Je as default};