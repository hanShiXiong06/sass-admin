import{d as R,x as j,n as L,r as w,f as U,h as r,c,e as l,w as n,a as u,t as s,u as t,i as _,q as a,R as I,s as v,A as M,B as b,E as S,K as H,L as O,bO as q,M as A,a7 as K,ad as W,ae as G,W as J,Y as Q}from"./index-99f00cf3.js";/* empty css                   *//* empty css                      *//* empty css                 *//* empty css               *//* empty css                  *//* empty css                  *//* empty css                     *//* empty css                  *//* empty css                 *//* empty css                    */import"./el-tooltip-4ed993c7.js";/* empty css                        *//* empty css                *//* empty css                *//* empty css                       *//* empty css                  */import"./el-form-item-4ed993c7.js";import{_ as X}from"./member_head-d9fd7b2c.js";import{a4 as Z,a5 as ee}from"./vipcard-cf1e419a.js";import{_ as te}from"./add-technician.vue_vue_type_script_setup_true_lang-01bb3040.js";/* empty css                  *//* empty css                   */import"./index-015c0c3e.js";/* empty css                        */import"./index.vue_vue_type_style_index_0_lang-2e54ab99.js";import"./attachment-6fc096d0.js";import"./index.vue_vue_type_script_setup_true_lang-a59c79e6.js";/* empty css                 *//* empty css               *//* empty css               *//* empty css                    *//* empty css                    */import"./el-dropdown-item-4ed993c7.js";import"./index.vue_vue_type_script_setup_true_lang-bde8c802.js";/* empty css                   */import"./index.vue_vue_type_script_setup_true_lang-49ab6f2c.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./sortable.esm-be94e56d.js";const ae={class:"main-container"},le={class:"flex justify-between items-center"},ie={class:"text-page-title"},oe={class:"mt-[10px]"},ne={class:"flex items-center"},se=["src"],re={key:1,class:"max-w-[60px] w-[60px] max-h-[60px]",src:X},me=["title"],pe={key:0},de={key:1},ce={key:0},ue={key:1},_e={class:"mt-[16px] flex justify-end"},at=R({__name:"list",setup(he){const E=j().meta.title,i=L({page:1,limit:10,total:0,loading:!0,data:[],searchParam:{create_time:"",name:""}}),k=w(),h=(m=1)=>{i.loading=!0,i.page=m,Z({page:i.page,limit:i.limit,...i.searchParam}).then(o=>{i.loading=!1,i.data=o.data.data,i.total=o.data.total}).catch(()=>{i.loading=!1})};h();const D=U(),T=m=>{D.push("/vipcard/goods/technician/info?id="+m.id)},g=w(null),P=()=>{g.value.setFormData(),g.value.showDialog=!0},V=m=>{g.value.setFormData(m),g.value.showDialog=!0},x=(m,o)=>{ee({id:m.id,status:o}).then(p=>{h()})};return(m,o)=>{const p=S,$=H,y=O,F=q,z=A,C=K,d=W,B=G,Y=J,N=Q;return r(),c("div",ae,[l(C,{class:"box-card !border-none",shadow:"never"},{default:n(()=>[u("div",le,[u("span",ie,s(t(E)),1),l(p,{type:"primary",class:"w-[100px]",onClick:P},{default:n(()=>[_(s(t(a)("addTechnician")),1)]),_:1})]),l(C,{class:"box-card !border-none my-[10px] table-search-wrap",shadow:"never"},{default:n(()=>[l(z,{inline:!0,model:i.searchParam,ref_key:"searchFormRef",ref:k},{default:n(()=>[l(y,{label:t(a)("name"),prop:"name"},{default:n(()=>[l($,{modelValue:i.searchParam.name,"onUpdate:modelValue":o[0]||(o[0]=e=>i.searchParam.name=e),clearable:"",placeholder:t(a)("namePlaceholder"),class:"input-width"},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),l(y,{label:t(a)("createTime"),prop:"create_time"},{default:n(()=>[l(F,{modelValue:i.searchParam.create_time,"onUpdate:modelValue":o[1]||(o[1]=e=>i.searchParam.create_time=e),type:"datetimerange","value-format":"YYYY-MM-DD HH:mm:ss","start-placeholder":t(a)("startDate"),"end-placeholder":t(a)("endDate")},null,8,["modelValue","start-placeholder","end-placeholder"])]),_:1},8,["label"]),l(y,null,{default:n(()=>[l(p,{type:"primary",onClick:o[2]||(o[2]=e=>h())},{default:n(()=>[_(s(t(a)("search")),1)]),_:1}),l(p,{onClick:o[3]||(o[3]=e=>{var f;return(f=k.value)==null?void 0:f.resetFields()})},{default:n(()=>[_(s(t(a)("reset")),1)]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),u("div",oe,[I((r(),v(B,{data:i.data,size:"large"},{empty:n(()=>[u("span",null,s(i.loading?"":t(a)("emptyData")),1)]),default:n(()=>[l(d,{"show-overflow-tooltip":!0,label:t(a)("technicianInfo"),"min-width":"200",align:"left"},{default:n(({row:e})=>[u("div",ne,[e.image_thumb_small?(r(),c("img",{key:0,class:"max-w-[60px] w-[60px] max-h-[60px]",src:t(M)(e.image_thumb_small)},null,8,se)):(r(),c("img",re)),u("a",{href:"javascript:;",class:"flex-1 multi-hidden ml-2",title:e.name},s(e.name),9,me)])]),_:1},8,["label"]),l(d,{prop:"mobile",label:t(a)("mobile"),"min-width":"150"},null,8,["label"]),l(d,{label:t(a)("seniority"),"min-width":"120"},{default:n(({row:e})=>[e.seniority<=0?(r(),c("span",pe,s(t(a)("notOneYear")),1)):(r(),c("span",de,s(e.seniority)+s(t(a)("year")),1))]),_:1},8,["label"]),l(d,{prop:"number",label:t(a)("number"),"min-width":"150"},null,8,["label"]),l(d,{prop:"position",label:t(a)("position"),"min-width":"150"},null,8,["label"]),l(d,{label:t(a)("status"),"min-width":"200",align:"left"},{default:n(({row:e})=>[e.status==0?(r(),c("span",ce,s(t(a)("disabled")),1)):b("",!0),e.status==1?(r(),c("span",ue,s(t(a)("normal")),1)):b("",!0)]),_:1},8,["label"]),l(d,{prop:"create_time",label:t(a)("createTime"),"min-width":"180"},null,8,["label"]),l(d,{label:t(a)("operation"),fixed:"right",align:"right","min-width":"200"},{default:n(({row:e})=>[e.status==0?(r(),v(p,{key:0,type:"primary",link:"",onClick:f=>x(e,1)},{default:n(()=>[_(s(t(a)("restore")),1)]),_:2},1032,["onClick"])):b("",!0),e.status==1?(r(),v(p,{key:1,type:"primary",link:"",onClick:f=>x(e,0)},{default:n(()=>[_(s(t(a)("disable")),1)]),_:2},1032,["onClick"])):b("",!0),l(p,{type:"primary",link:"",onClick:f=>V(e,1)},{default:n(()=>[_(s(t(a)("edit")),1)]),_:2},1032,["onClick"]),l(p,{type:"primary",link:"",onClick:f=>T(e)},{default:n(()=>[_(s(t(a)("info")),1)]),_:2},1032,["onClick"])]),_:1},8,["label"])]),_:1},8,["data"])),[[N,i.loading]]),u("div",_e,[l(Y,{"current-page":i.page,"onUpdate:current-page":o[4]||(o[4]=e=>i.page=e),"page-size":i.limit,"onUpdate:page-size":o[5]||(o[5]=e=>i.limit=e),layout:"total, sizes, prev, pager, next, jumper",total:i.total,onSizeChange:o[6]||(o[6]=e=>h()),onCurrentChange:h},null,8,["current-page","page-size","total"])])])]),_:1}),l(te,{ref_key:"editTechnicianDialog",ref:g,onComplete:h},null,512)])}}});export{at as default};
