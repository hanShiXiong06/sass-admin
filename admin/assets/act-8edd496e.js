import{O as ie,d as de,r as v,y as re,q as pe,aO as ce,a2 as j,h as d,c as f,e,w as o,a as n,u as s,E as x,i as p,s as m,F as q,T as M,v as g,t as c,R as K,C as _,B as ue,U as X,aW as me,a7 as _e,K as ve,L as fe,ab as ge,aC as he,M as ye,ac as be,ak as we,cE as ke,ad as Ce,W as xe,a1 as Ee,X as Ve,Y as $e,p as De,g as Ie}from"./index-0e396751.js";/* empty css                   *//* empty css                  *//* empty css                   *//* empty css                      *//* empty css                 *//* empty css               *//* empty css                  *//* empty css                  *//* empty css                     *//* empty css                  *//* empty css                 *//* empty css                    */import"./el-tooltip-4ed993c7.js";/* empty css                  *//* empty css                        *//* empty css                */import"./el-form-item-4ed993c7.js";/* empty css                *//* empty css                 */import{_ as Fe,g as Pe,s as Ae,a as Le,b as Se,c as Ue}from"./act-edit.vue_vue_type_style_index_0_lang-bed9e56b.js";import{_ as Ne}from"./_plugin-vue_export-helper-c27b6911.js";import"./index.vue_vue_type_script_setup_true_lang-406de1d6.js";import"./index.vue_vue_type_style_index_0_lang-d82568af.js";/* empty css                  */import"./attachment-c52133c7.js";import"./index.vue_vue_type_script_setup_true_lang-34f8a01a.js";/* empty css                        *//* empty css                 *//* empty css               *//* empty css               *//* empty css                  *//* empty css                    *//* empty css                    */import"./el-dropdown-item-4ed993c7.js";import"./index.vue_vue_type_script_setup_true_lang-077a27b1.js";/* empty css                   */import"./index.vue_vue_type_script_setup_true_lang-5014406f.js";import"./index-11d71036.js";import"./sortable.esm-be94e56d.js";function Te(){return ie.get("tk_cps/getwapdomain")}const u=V=>(De("data-v-8626658d"),V=V(),Ie(),V),ze={class:"main-container"},Be={class:"flex mt-4 ml-4"},Re={class:"mt-[10px]"},Oe={class:"mt-[16px] flex justify-end"},We={key:0,class:"mb-2"},je={class:"font-bold"},qe={class:"mt-2"},Me=u(()=>n("span",{class:"font-bold"},"支持渠道",-1)),Ke={key:1,class:"flex mt-2"},Xe=u(()=>n("div",{class:"font-bold mr-4"},"页面链接",-1)),Ye={key:2,class:"flex mt-2"},Ge=u(()=>n("div",{class:"font-bold mr-4"},"网页链接",-1)),He={key:3,class:"flex mt-2"},Je=u(()=>n("div",{class:"font-bold mr-2"},"h5链接",-1)),Qe={class:"multi-hidden w-[340px]"},Ze={class:"flex mt-2"},et={key:0,class:"mr-2 p-4 rounded-md statistic-card bg-gradient-to-r from-indigo-50 from-10% via-sky-50 via-10% to-emerald-50 to-10%"},tt=u(()=>n("div",{class:"font-bold"},"微信小程序信息",-1)),at={key:0,class:"mt-2"},lt=u(()=>n("div",{class:"font-bold"},"原始id:",-1)),ot={class:"mt-2"},st=u(()=>n("div",{class:"font-bold"},"appid:",-1)),nt={class:"mt-2"},it=u(()=>n("div",{class:"font-bold"},"页面路径:",-1)),dt={class:"whitespace-normal w-[360px] break-words"},rt={key:1,class:"p-4 rounded-md statistic-card bg-gradient-to-r from-indigo-50 from-10% via-sky-50 via-10% to-emerald-50 to-10%"},pt=u(()=>n("div",{class:"font-bold"},"支付宝小程序",-1)),ct={class:"mt-2"},ut=u(()=>n("div",{class:"font-bold"},"appid:",-1)),mt={class:"mt-2"},_t=u(()=>n("div",{class:"font-bold"},"页面路径:",-1)),vt={class:"whitespace-normal w-[360px] break-words"},ft=u(()=>n("span",null,"正在保存,保存成功会自动关闭本弹窗",-1)),gt=de({__name:"act",setup(V){const D=v();(async()=>{const r=await Pe();D.value=r.data})(),re().meta.title;const I=v(!1),N=v(!1),E=v(!1);let i=pe({page:1,limit:10,total:0,loading:!0,data:[],searchParam:{act_id:"",act_name:"",type:"",desc:"",img:"",icon:"",poster:"",commission_rate:"",introduce:"",attribution_explain:"",settlement_time:"",start_date:"",end_date:"",create_time:""}});const{copy:Y,isSupported:G,copied:bt}=ce(),h=r=>{if(!G.value){X({message:"当前浏览器不支持一键复制，请手动复制",type:"warning"});return}Y(r),X({message:"复制成功",type:"success"})},a=v(),F=v(),P=v(),T=v(),H=async r=>{E.value=!0,(await Ae(r)).code==1&&(E.value=!1)},J=async r=>{i.loading=!0;const t=await Le(r),L=await Te();i.loading=!1,I.value=!0,N.value=!0,a.value=t.data,P.value=L.data+"/addon/tk_cps/pages/index?type="+a.value.type+"&act_id="+a.value.act_id,F.value="/addon/tk_cps/pages/index?type="+a.value.type+"&act_id="+a.value.act_id+"&style=embedded"};v([]);const k=(r=1)=>{i.loading=!0,i.page=r,Se({page:i.page,limit:i.limit,...i.searchParam}).then(t=>{i.loading=!1,i.data=t.data.data,i.total=t.data.total}).catch(()=>{i.loading=!1})};k();const A=v(null),Q=async()=>{i.loading=!0,await Ue(),k(),i.loading=!1},Z=r=>{A.value.setFormData(r),A.value.showDialog=!0},ee=r=>{r&&(r.resetFields(),k())};return(r,t)=>{const L=me,S=_e,te=ve,U=fe,z=ge,B=j("block"),ae=he,le=ye,y=be,$=we,R=ke,oe=Ce,se=xe,b=j("DocumentCopy"),w=Ee,O=Ve,W=$e;return d(),f("div",ze,[e(S,{class:"box-card !border-none",shadow:"never"},{default:o(()=>[e(S,{class:"!border-none",shadow:"never",style:{width:"640px"}},{default:o(()=>[e(L,{type:"warning",title:"使用前请同步活动，部分活动下线了将不能正常生成推广链接；点击立即推广可以生成并获取到最新的推广信息；保存素材可以将素材保存到素材库，方便装修时候直接使用",closable:!1,"show-icon":""}),n("div",Be,[e(s(x),{type:"primary",plain:"",onClick:t[0]||(t[0]=l=>Q())},{default:o(()=>[p("同步活动")]),_:1})])]),_:1}),e(S,{class:"box-card !border-none -translate-y-[-6] table-search-wrap",shadow:"never"},{default:o(()=>[e(le,{inline:!0,model:s(i).searchParam,ref_key:"searchFormRef",ref:T},{default:o(()=>[e(U,{label:s(m)("actName"),prop:"act_name"},{default:o(()=>[e(te,{modelValue:s(i).searchParam.act_name,"onUpdate:modelValue":t[1]||(t[1]=l=>s(i).searchParam.act_name=l),placeholder:s(m)("actNamePlaceholder")},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),e(U,{label:s(m)("type"),prop:"type"},{default:o(()=>[e(ae,{class:"w-[280px]",modelValue:s(i).searchParam.type,"onUpdate:modelValue":t[2]||(t[2]=l=>s(i).searchParam.type=l),clearable:"",placeholder:"请选择"},{default:o(()=>[e(z,{label:"全部",value:""}),(d(!0),f(q,null,M(D.value,(l,C)=>(d(),g(B,{key:C},{default:o(()=>[e(z,{label:l.name,value:l.type},null,8,["label","value"])]),_:2},1024))),128))]),_:1},8,["modelValue"])]),_:1},8,["label"]),e(U,null,{default:o(()=>[e(s(x),{type:"primary",onClick:t[3]||(t[3]=l=>k())},{default:o(()=>[p(c(s(m)("search")),1)]),_:1}),e(s(x),{onClick:t[4]||(t[4]=l=>ee(T.value))},{default:o(()=>[p(c(s(m)("reset")),1)]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),n("div",Re,[K((d(),g(oe,{data:s(i).data,size:"large"},{empty:o(()=>[n("span",null,c(s(i).loading?"":s(m)("emptyData")),1)]),default:o(()=>[e(y,{prop:"act_name",label:s(m)("actName"),"min-width":"120","show-overflow-tooltip":!0},null,8,["label"]),e(y,{prop:"type",label:"渠道","min-width":"120","show-overflow-tooltip":!0},{default:o(({row:l})=>[(d(!0),f(q,null,M(D.value,(C,ne)=>(d(),g(B,{key:ne},{default:o(()=>[l.type==C.type?(d(),g($,{key:0},{default:o(()=>[p(c(C.name),1)]),_:2},1024)):_("",!0)]),_:2},1024))),128))]),_:1}),e(y,{label:s(m)("icon"),width:"100",align:"left"},{default:o(({row:l})=>[l.icon?(d(),g(R,{key:0,src:s(ue)(l.icon)},null,8,["src"])):(d(),g(R,{key:1,icon:"UserFilled"}))]),_:1},8,["label"]),e(y,{prop:"commission_rate",label:s(m)("commissionRate"),"min-width":"120","show-overflow-tooltip":!0},null,8,["label"]),e(y,{prop:"settlement_time",label:s(m)("settlementTime"),"min-width":"120","show-overflow-tooltip":!0},null,8,["label"]),e(y,{prop:"start_date",label:"开始时间","min-width":"120","show-overflow-tooltip":!0}),e(y,{prop:"end_date",label:"结束时间","min-width":"120","show-overflow-tooltip":!0}),e(y,{label:s(m)("operation"),fixed:"right","min-width":"120"},{default:o(({row:l})=>[e(s(x),{type:"primary",link:"",onClick:C=>Z(l)},{default:o(()=>[p("详情")]),_:2},1032,["onClick"]),e(s(x),{type:"primary",link:"",onClick:C=>J(l.id)},{default:o(()=>[p("立即推广")]),_:2},1032,["onClick"]),e(s(x),{type:"primary",link:"",loading:E.value,onClick:C=>H(l.id)},{default:o(()=>[p("保存素材")]),_:2},1032,["loading","onClick"])]),_:1},8,["label"])]),_:1},8,["data"])),[[W,s(i).loading]]),n("div",Oe,[e(se,{"current-page":s(i).page,"onUpdate:current-page":t[5]||(t[5]=l=>s(i).page=l),"page-size":s(i).limit,"onUpdate:page-size":t[6]||(t[6]=l=>s(i).limit=l),layout:"total, sizes, prev, pager, next, jumper",total:s(i).total,onSizeChange:t[7]||(t[7]=l=>k()),onCurrentChange:k},null,8,["current-page","page-size","total"])])]),e(Fe,{ref_key:"editActDialog",ref:A,onComplete:k},null,512)]),_:1}),K((d(),g(O,{"element-loading-text":"Loading...",modelValue:I.value,"onUpdate:modelValue":t[16]||(t[16]=l=>I.value=l),title:"推广详情",width:"60%","before-close":r.handleClose},{default:o(()=>[a.value?(d(),f("div",We,[n("span",je,"活动名称:"+c(a.value.act_name),1)])):_("",!0),n("div",qe,[Me,a.value&&a.value.h5!=""?(d(),g($,{key:0,class:"ml-2"},{default:o(()=>[p("h5")]),_:1})):_("",!0),a.value&&a.value.weapp.appid!=""?(d(),g($,{key:1,class:"ml-2"},{default:o(()=>[p("微信小程序")]),_:1})):_("",!0),a.value&&a.value.aliapp.appid!=""?(d(),g($,{key:2,class:"ml-2"},{default:o(()=>[p("支付宝小程序")]),_:1})):_("",!0)]),a.value&&a.value.h5!=""||a.value.weapp.appid!=""||a.value.aliapp.appid!=""?(d(),f("div",Ke,[Xe,n("div",null,c(F.value),1),e(w,{class:"ml-2",onClick:t[8]||(t[8]=l=>h(F.value))},{default:o(()=>[e(b)]),_:1})])):_("",!0),a.value&&a.value.h5!=""?(d(),f("div",Ye,[Ge,n("div",null,c(P.value),1),e(w,{class:"ml-2",onClick:t[9]||(t[9]=l=>h(P.value))},{default:o(()=>[e(b)]),_:1})])):_("",!0),a.value&&a.value.h5!=""?(d(),f("div",He,[Je,n("div",Qe,c(a.value.h5),1),e(w,{class:"ml-2",onClick:t[10]||(t[10]=l=>h(a.value.h5))},{default:o(()=>[e(b)]),_:1})])):_("",!0),n("div",Ze,[a.value&&a.value.weapp.appid!=""?(d(),f("div",et,[tt,a.value.weapp.original_id?(d(),f("div",at,[lt,n("div",null,[p(c(a.value.weapp.original_id)+" ",1),e(w,{class:"ml-2",onClick:t[11]||(t[11]=l=>h(a.value.weapp.original_id))},{default:o(()=>[e(b)]),_:1})])])):_("",!0),n("div",ot,[st,n("div",null,[p(c(a.value.weapp.appid)+" ",1),e(w,{class:"ml-2",onClick:t[12]||(t[12]=l=>h(a.value.weapp.appid))},{default:o(()=>[e(b)]),_:1})])]),n("div",nt,[it,n("div",dt,[p(c(a.value.weapp.pagepath)+" ",1),e(w,{class:"ml-2",onClick:t[13]||(t[13]=l=>h(a.value.weapp.pagepath))},{default:o(()=>[e(b)]),_:1})])])])):_("",!0),a.value&&a.value.aliapp.appid!=""?(d(),f("div",rt,[pt,n("div",ct,[ut,n("div",null,[p(c(a.value.aliapp.appid)+" ",1),e(w,{class:"ml-2",onClick:t[14]||(t[14]=l=>h(a.value.aliapp.appid))},{default:o(()=>[e(b)]),_:1})])]),n("div",mt,[_t,n("div",vt,[p(c(a.value.aliapp.pagepath)+" ",1),e(w,{class:"ml-2",onClick:t[15]||(t[15]=l=>h(a.value.aliapp.pagepath))},{default:o(()=>[e(b)]),_:1})])])])):_("",!0)])]),_:1},8,["modelValue","before-close"])),[[W,N.value]]),e(O,{modelValue:E.value,"onUpdate:modelValue":t[17]||(t[17]=l=>E.value=l),title:"正在保存",width:"500","show-close":"false","align-center":""},{default:o(()=>[ft]),_:1},8,["modelValue"])])}}});const ia=Ne(gt,[["__scopeId","data-v-8626658d"]]);export{ia as default};
