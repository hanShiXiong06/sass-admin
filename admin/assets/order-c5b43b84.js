import{d as ce,r as _,x as _e,n as pe,a2 as ve,h as s,c as m,a as u,e as a,w as l,i as d,u as t,q as i,F as k,T as V,s as y,t as c,R as fe,al as P,B as b,a5 as he,E as ke,K as ye,ac as be,aD as ge,L as we,bR as Ve,M as Pe,a7 as xe,ad as De,a1 as Ce,ae as Ee,W as Le,X as Ue,Y as Fe}from"./index-904cb7a2.js";/* empty css                   *//* empty css                  *//* empty css                   *//* empty css                      *//* empty css                 *//* empty css               *//* empty css                  *//* empty css                  *//* empty css                     *//* empty css                  *//* empty css                 *//* empty css                    */import"./el-tooltip-4ed993c7.js";/* empty css                        *//* empty css                *//* empty css                *//* empty css                       *//* empty css                  */import"./el-form-item-4ed993c7.js";import{u as U}from"./dict-17d553e9.js";import{r as Oe,i as Ie,s as Te,j as $e,k as Be,l as Re,m as Se,n as je,b as We}from"./order-c037699a.js";import{_ as ze}from"./order-edit.vue_vue_type_style_index_0_lang-62ad025a.js";import{_ as Me}from"./_plugin-vue_export-helper-c27b6911.js";/* empty css                 *//* empty css                         *//* empty css                  *//* empty css                   *//* empty css                   */const Ye={class:"main-container"},Ne={class:"mt-2 mb-2 ml-4"},qe={class:"mt-[10px]"},Ke={class:"flex"},Xe={key:0,class:"flex mt-1"},Ae={class:"p-1"},Ge={class:"p-1"},He={class:"p-1"},Je={class:"p-1"},Qe={class:"p-1"},Ze={key:0},ea={class:"mt-1"},aa={key:0},ta={key:1},la={key:0},oa={key:0},ra={class:"text-red"},sa={class:"mt-[16px] flex justify-end"},na={class:"mt-2"},da=["src"],ia={class:""},ua={class:"mt-[24px]"},ma=ce({__name:"order",setup(ca){const x=_(null),R=_(),K=p=>{R.value=p,L.value=p.remark,E.value=!0},E=_(!1),L=_(""),X=async()=>{await Oe({id:R.value.id,remark:L.value}),E.value=!1,v()},A=()=>{x.value.contentWindow&&x.value.contentWindow.history.back()},G=()=>{x.value.contentWindow&&x.value.contentWindow.location.reload()},F=_(!1),H=()=>{F.value=!0},S=_();(async()=>{S.value=await(await Ie()).msg})(),_e().meta.title;const J=_([]),j=_([]),Q=async p=>{await Te(p),v()},Z=async p=>{await $e({id:p}),v()};(async()=>{J.value=await(await Be()).data,j.value=await(await Re()).data})();let r=pe({page:1,limit:10,total:0,loading:!0,data:[],searchParam:{member_id:"",order_from:"",order_id:"",out_trade_no:"",is_send:"",order_status:"",refund_status:"",remark:"",create_time:[]}});const W=_();_([]);const O=_([]);(async()=>{O.value=await(await U("jhkd_is_send")).data.dictionary})();const ee=_([]);(async()=>{ee.value=await(await U("jhkd_is_pick")).data.dictionary})();const I=_([]);(async()=>{I.value=await(await U("jhkd_order_status")).data.dictionary})();const T=_([]);(async()=>{T.value=await(await U("jhkd_refund_status")).data.dictionary})();const v=(p=1)=>{r.loading=!0,r.page=p,Se({page:r.page,limit:r.limit,...r.searchParam}).then(o=>{r.loading=!1,r.data=o.data.data,r.total=o.data.total}).catch(()=>{r.loading=!1})};v();const $=_(null),ae=p=>{$.value.setFormData(p),$.value.showDialog=!0},te=p=>{he.confirm(i("orderDeleteTips"),i("warning"),{confirmButtonText:i("confirm"),cancelButtonText:i("cancel"),type:"warning"}).then(()=>{je(p).then(()=>{v()}).catch(()=>{})})},le=()=>{M()},B=_(),z=_([]),M=async()=>{z.value=await(await We({keyword:B.value})).data.data};M();const oe=p=>{p&&(p.resetFields(),v())};return(p,o)=>{const g=ke,D=ye,h=be,C=ge,f=we,re=Ve,se=Pe,Y=xe,w=De,ne=ve("EditPen"),de=Ce,ie=Ee,ue=Le,N=Ue,me=Fe;return s(),m(k,null,[u("div",Ye,[a(Y,{class:"box-card !border-none",shadow:"never"},{default:l(()=>[a(g,{type:"primary",onClick:o[0]||(o[0]=e=>H())},{default:l(()=>[d("新增订单")]),_:1}),a(Y,{class:"box-card !border-none my-[10px] table-search-wrap",shadow:"never"},{default:l(()=>[a(se,{inline:!0,model:t(r).searchParam,ref_key:"searchFormRef",ref:W},{default:l(()=>[a(f,{label:"会员",prop:"member_id"},{default:l(()=>[a(C,{class:"input-width",modelValue:t(r).searchParam.member_id,"onUpdate:modelValue":o[2]||(o[2]=e=>t(r).searchParam.member_id=e),clearable:"",placeholder:t(i)("memberIdPlaceholder")},{default:l(()=>[u("div",Ne,[a(D,{onChange:le,modelValue:B.value,"onUpdate:modelValue":o[1]||(o[1]=e=>B.value=e),style:{width:"200px"},placeholder:"搜索会员支持昵称/会员名"},{append:l(()=>[d("搜索 ")]),_:1},8,["modelValue"])]),a(h,{label:"请选择",value:""}),(s(!0),m(k,null,V(z.value,(e,n)=>(s(),y(h,{key:n,label:e.nickname,value:e.member_id},null,8,["label","value"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1}),a(f,{label:t(i)("orderFrom"),prop:"order_from"},{default:l(()=>[a(C,{modelValue:t(r).searchParam.order_from,"onUpdate:modelValue":o[3]||(o[3]=e=>t(r).searchParam.order_from=e),clearable:"",class:"input-item"},{default:l(()=>[(s(!0),m(k,null,V(j.value,(e,n)=>(s(),y(h,{key:n,label:e,value:n},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1},8,["label"]),a(f,{label:"订单号",prop:"order_id"},{default:l(()=>[a(D,{modelValue:t(r).searchParam.order_id,"onUpdate:modelValue":o[4]||(o[4]=e=>t(r).searchParam.order_id=e),placeholder:"请输入订单号"},null,8,["modelValue"])]),_:1}),a(f,{label:"支付单号",prop:"out_trade_no"},{default:l(()=>[a(D,{modelValue:t(r).searchParam.out_trade_no,"onUpdate:modelValue":o[5]||(o[5]=e=>t(r).searchParam.out_trade_no=e),placeholder:"请输入支付单号"},null,8,["modelValue"])]),_:1}),a(f,{label:"发单状态",prop:"is_send"},{default:l(()=>[a(C,{class:"w-[280px]",modelValue:t(r).searchParam.is_send,"onUpdate:modelValue":o[6]||(o[6]=e=>t(r).searchParam.is_send=e),clearable:"",placeholder:t(i)("isSendPlaceholder")},{default:l(()=>[a(h,{label:"全部",value:""}),(s(!0),m(k,null,V(O.value,(e,n)=>(s(),y(h,{key:n,label:e.name,value:e.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1}),a(f,{label:t(i)("orderStatus"),prop:"order_status"},{default:l(()=>[a(C,{class:"w-[280px]",modelValue:t(r).searchParam.order_status,"onUpdate:modelValue":o[7]||(o[7]=e=>t(r).searchParam.order_status=e),clearable:"",placeholder:t(i)("orderStatusPlaceholder")},{default:l(()=>[a(h,{label:"全部",value:""}),(s(!0),m(k,null,V(I.value,(e,n)=>(s(),y(h,{key:n,label:e.name,value:e.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"]),a(f,{label:t(i)("refundStatus"),prop:"refund_status"},{default:l(()=>[a(C,{class:"w-[280px]",modelValue:t(r).searchParam.refund_status,"onUpdate:modelValue":o[8]||(o[8]=e=>t(r).searchParam.refund_status=e),clearable:"",placeholder:t(i)("refundStatusPlaceholder")},{default:l(()=>[a(h,{label:"全部",value:""}),(s(!0),m(k,null,V(T.value,(e,n)=>(s(),y(h,{key:n,label:e.name,value:e.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"]),a(f,{label:t(i)("remark"),prop:"remark"},{default:l(()=>[a(D,{modelValue:t(r).searchParam.remark,"onUpdate:modelValue":o[9]||(o[9]=e=>t(r).searchParam.remark=e),placeholder:t(i)("remarkPlaceholder")},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),a(f,{label:t(i)("createTime"),prop:"create_time"},{default:l(()=>[a(re,{modelValue:t(r).searchParam.create_time,"onUpdate:modelValue":o[10]||(o[10]=e=>t(r).searchParam.create_time=e),type:"datetimerange",format:"YYYY-MM-DD hh:mm:ss","start-placeholder":t(i)("startDate"),"end-placeholder":t(i)("endDate")},null,8,["modelValue","start-placeholder","end-placeholder"])]),_:1},8,["label"]),a(f,null,{default:l(()=>[a(g,{type:"primary",onClick:o[11]||(o[11]=e=>v())},{default:l(()=>[d(c(t(i)("search")),1)]),_:1}),a(g,{onClick:o[12]||(o[12]=e=>oe(W.value))},{default:l(()=>[d(c(t(i)("reset")),1)]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),u("div",qe,[fe((s(),y(ie,{data:t(r).data,size:"large"},{empty:l(()=>[u("span",null,c(t(r).loading?"":t(i)("emptyData")),1)]),default:l(()=>[a(w,{prop:"order_from",label:"渠道","min-width":"80","show-overflow-tooltip":!0},{default:l(({row:e})=>[u("div",Ke,[a(t(P),{type:"info"},{default:l(()=>[d(c(e.order_from),1)]),_:2},1024)]),!e.platform_name==""?(s(),m("div",Xe,[a(t(P),null,{default:l(()=>[d(c(e.platform_name),1)]),_:2},1024)])):b("",!0)]),_:1}),a(w,{prop:"order_id",label:"基本信息","min-width":"200","show-overflow-tooltip":!0},{default:l(({row:e})=>[u("div",Ae,"订单号:"+c(e.member_id_name),1),u("div",Ge,"订单号:"+c(e.order_id),1),u("div",He,"支付单号:"+c(e.out_trade_no),1)]),_:1}),a(w,{prop:"order_money",label:"常规信息","min-width":"120","show-overflow-tooltip":!0},{default:l(({row:e})=>[a(t(P),{class:"p-1"},{default:l(()=>[d(c(e.delivery_name),1)]),_:2},1024),u("div",Je,"下单重量:"+c(e.orderInfo.weight)+"kg",1),u("div",Qe,"订单金额:"+c(e.order_money),1)]),_:1}),a(w,{label:"订单状态","min-width":"120",align:"center","show-overflow-tooltip":!0},{default:l(({row:e})=>[(s(!0),m(k,null,V(O.value,(n,q)=>(s(),m("div",null,[n.value==e.is_send?(s(),m("div",Ze,[d(" 发单状态 "),a(t(P),{class:"ml-1"},{default:l(()=>[d(c(n.name),1)]),_:2},1024)])):b("",!0)]))),256)),(s(!0),m(k,null,V(I.value,(n,q)=>(s(),m("div",ea,[u("div",null,[n.value==e.order_status&&e.order_status!=-1?(s(),m("div",aa,[d("订单状态 "),a(t(P),{class:"ml-1"},{default:l(()=>[d(c(n.name),1)]),_:2},1024)])):b("",!0),n.value==e.order_status&&e.order_status==-1?(s(),m("div",ta,[d(" 订单状态 "),a(t(P),{type:"warning",class:"ml-1"},{default:l(()=>[d(c(n.name),1)]),_:2},1024)])):b("",!0)])]))),256)),e.addorderInfo&&e.addorderInfo.order_status==0?(s(),m("div",la,[d(" 补差状态 "),a(t(P),{class:"mt-1",type:"error"},{default:l(()=>[d(" 需补差价")]),_:1})])):b("",!0),(s(!0),m(k,null,V(T.value,(n,q)=>(s(),m("div",null,[n.value==e.refund_status?(s(),m("div",oa,[d(" 退款状态 "),a(t(P),{class:"ml-1"},{default:l(()=>[d(c(n.name),1)]),_:2},1024)])):b("",!0)]))),256))]),_:1}),a(w,{label:"关闭原因",prop:"close_reason","min-width":"120",align:"center","show-overflow-tooltip":!0},{default:l(({row:e})=>[u("div",ra,c(e.close_reason),1)]),_:1}),a(w,{prop:"remark",label:t(i)("remark"),"min-width":"120","show-overflow-tooltip":!0},{default:l(({row:e})=>[u("div",null,c(e.remark),1),a(de,{onClick:n=>K(e)},{default:l(()=>[a(ne)]),_:2},1032,["onClick"])]),_:1},8,["label"]),a(w,{prop:"create_time",label:"下单时间","min-width":"120","show-overflow-tooltip":!0}),a(w,{label:t(i)("operation"),fixed:"right","min-width":"220"},{default:l(({row:e})=>[a(g,{type:"primary",link:"",onClick:n=>ae(e)},{default:l(()=>[d("详情")]),_:2},1032,["onClick"]),e.order_status==-1||e.order_status==0?(s(),y(g,{key:0,type:"primary",link:"",onClick:n=>te(e.id)},{default:l(()=>[d(c(t(i)("delete")),1)]),_:2},1032,["onClick"])):b("",!0),e.order_status==1&&e.is_send==0?(s(),y(g,{key:1,type:"primary",link:"",onClick:n=>Q(e.order_id)},{default:l(()=>[d("发单")]),_:2},1032,["onClick"])):b("",!0),e.order_status==1?(s(),y(g,{key:2,type:"primary",link:"",onClick:n=>Z(e.id)},{default:l(()=>[d("取消")]),_:2},1032,["onClick"])):b("",!0)]),_:1},8,["label"])]),_:1},8,["data"])),[[me,t(r).loading]]),u("div",sa,[a(ue,{"current-page":t(r).page,"onUpdate:current-page":o[13]||(o[13]=e=>t(r).page=e),"page-size":t(r).limit,"onUpdate:page-size":o[14]||(o[14]=e=>t(r).limit=e),layout:"total, sizes, prev, pager, next, jumper",total:t(r).total,onSizeChange:o[15]||(o[15]=e=>v()),onCurrentChange:v},null,8,["current-page","page-size","total"])])]),a(ze,{ref_key:"editOrderDialog",ref:$,onComplete:v},null,512)]),_:1})]),a(N,{modelValue:F.value,"onUpdate:modelValue":o[16]||(o[16]=e=>F.value=e),title:"使用移动端账号登录",width:"420",height:"740","align-center":""},{default:l(()=>[u("div",{class:"mt-[-24px]"},[u("button",{onClick:A,class:"mr-2"},"返回"),u("button",{onClick:G},"刷新")]),u("div",na,[u("iframe",{ref_key:"myIframeRef",ref:x,src:S.value,width:"375",height:"667"},null,8,da)])]),_:1},8,["modelValue"]),a(N,{modelValue:E.value,"onUpdate:modelValue":o[19]||(o[19]=e=>E.value=e),title:"订单备注","align-center":"",width:"300px"},{default:l(()=>[u("div",ia,[a(D,{style:{width:"200px"},modelValue:L.value,"onUpdate:modelValue":o[17]||(o[17]=e=>L.value=e)},null,8,["modelValue"])]),u("div",ua,[a(g,{type:"primary",onClick:o[18]||(o[18]=e=>X()),class:"mr-2"},{default:l(()=>[d("确认")]),_:1})])]),_:1},8,["modelValue"])],64)}}});const Ga=Me(ma,[["__scopeId","data-v-85caee05"]]);export{Ga as default};