import{d as ve,r as p,y as he,q as ye,a2 as A,h as s,c as m,a as i,e as a,w as l,i as d,u as t,s as _,F as b,T as V,v,t as u,R as ke,ak as w,C as f,a5 as be,E as ge,K as xe,ab as we,aC as Ve,L as Pe,bR as Ce,M as De,a7 as Ee,ac as Le,a1 as Fe,ad as Ue,W as Oe,X as Ie,Y as Te}from"./index-0e396751.js";/* empty css                   *//* empty css                  *//* empty css                   *//* empty css                      *//* empty css                 *//* empty css               *//* empty css                  *//* empty css                  *//* empty css                     *//* empty css                  *//* empty css                 *//* empty css                    */import"./el-tooltip-4ed993c7.js";/* empty css                        *//* empty css                *//* empty css                *//* empty css                       *//* empty css                  */import"./el-form-item-4ed993c7.js";import{u as U}from"./dict-2a424490.js";import{r as $e,i as Be,s as Re,j as Se,k as je,l as We,m as ze,n as Me,o as Ye,b as Ne}from"./order-0f3a14b2.js";import{_ as qe}from"./order-edit.vue_vue_type_style_index_0_lang-cd8fd41c.js";import{c as Ke}from"./tkjhkd-125130d5.js";import{_ as Xe}from"./_plugin-vue_export-helper-c27b6911.js";/* empty css                 *//* empty css                         *//* empty css                  *//* empty css                   *//* empty css                   */const Ae={class:"main-container"},Ge={class:"mt-2 mb-2 ml-4"},He={class:"mt-[10px]"},Je={class:"flex"},Qe={key:0,class:"flex mt-1"},Ze={class:"p-1"},ea={class:"p-1"},aa={class:"p-1"},ta={class:"font-bold"},la={class:"p-1"},oa={class:"p-1"},ra={key:0,class:""},sa={key:1,class:""},na={key:2,class:"flex items-center"},da={key:0},ia={class:"mt-1"},ua={key:0},ma={key:1},_a={key:0},ca={class:"mt-1"},pa={key:0},fa={class:"text-red"},va={class:"mt-[16px] flex justify-end"},ha={class:"mt-2"},ya=["src"],ka={class:""},ba={class:"mt-[24px]"},ga=ve({__name:"order",setup(xa){const P=p();Ke().then(c=>{P.value=c.data});const C=p(null),S=p(),G=c=>{S.value=c,F.value=c.remark,L.value=!0},L=p(!1),F=p(""),H=async()=>{await $e({id:S.value.id,remark:F.value}),L.value=!1,h()},J=()=>{C.value.contentWindow&&C.value.contentWindow.history.back()},Q=()=>{C.value.contentWindow&&C.value.contentWindow.location.reload()},O=p(!1),Z=()=>{O.value=!0},j=p();(async()=>{j.value=await(await Be()).msg})(),he().meta.title;const ee=p([]),W=p([]),ae=async c=>{await Re(c),h()},te=async c=>{await Se(c),h()},le=async c=>{await je({id:c}),h()};(async()=>{ee.value=await(await We()).data,W.value=await(await ze()).data})();let r=ye({page:1,limit:10,total:0,loading:!0,data:[],searchParam:{member_id:"",order_from:"",order_id:"",out_trade_no:"",is_send:"",order_status:"",refund_status:"",remark:"",create_time:[],keyword:""}});const z=p();p([]);const I=p([]);(async()=>{I.value=await(await U("jhkd_is_send")).data.dictionary})();const oe=p([]);(async()=>{oe.value=await(await U("jhkd_is_pick")).data.dictionary})();const T=p([]);(async()=>{T.value=await(await U("jhkd_order_status")).data.dictionary})();const $=p([]);(async()=>{$.value=await(await U("jhkd_refund_status")).data.dictionary})();const h=(c=1)=>{r.loading=!0,r.page=c,Me({page:r.page,limit:r.limit,...r.searchParam}).then(o=>{r.loading=!1,r.data=o.data.data,r.total=o.data.total}).catch(()=>{r.loading=!1})};h();const B=p(null),re=c=>{B.value.setFormData(c),B.value.showDialog=!0},se=c=>{be.confirm(_("orderDeleteTips"),_("warning"),{confirmButtonText:_("confirm"),cancelButtonText:_("cancel"),type:"warning"}).then(()=>{Ye(c).then(()=>{h()}).catch(()=>{})})},ne=()=>{Y()},R=p(),M=p([]),Y=async()=>{M.value=await(await Ne({keyword:R.value})).data.data};Y();const de=c=>{c&&(c.resetFields(),h())};return(c,o)=>{const g=ge,D=xe,x=we,E=Ve,y=Pe,ie=Ce,ue=De,N=Ee,k=Le,me=A("Bottom"),q=Fe,_e=A("EditPen"),ce=Ue,pe=Oe,K=Ie,fe=Te;return s(),m(b,null,[i("div",Ae,[a(N,{class:"box-card !border-none",shadow:"never"},{default:l(()=>[a(g,{type:"primary",onClick:o[0]||(o[0]=e=>Z())},{default:l(()=>[d("新增订单")]),_:1}),a(N,{class:"box-card !border-none my-[10px] table-search-wrap",shadow:"never"},{default:l(()=>[a(ue,{inline:!0,model:t(r).searchParam,ref_key:"searchFormRef",ref:z},{default:l(()=>[a(y,{label:"会员",prop:"member_id"},{default:l(()=>[a(E,{class:"input-width",modelValue:t(r).searchParam.member_id,"onUpdate:modelValue":o[2]||(o[2]=e=>t(r).searchParam.member_id=e),clearable:"",placeholder:t(_)("memberIdPlaceholder")},{default:l(()=>[i("div",Ge,[a(D,{onChange:ne,modelValue:R.value,"onUpdate:modelValue":o[1]||(o[1]=e=>R.value=e),style:{width:"200px"},placeholder:"搜索会员支持昵称/会员名"},{append:l(()=>[d("搜索 ")]),_:1},8,["modelValue"])]),a(x,{label:"请选择",value:""}),(s(!0),m(b,null,V(M.value,(e,n)=>(s(),v(x,{key:n,label:e.nickname,value:e.member_id},null,8,["label","value"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1}),a(y,{label:t(_)("orderFrom"),prop:"order_from"},{default:l(()=>[a(E,{modelValue:t(r).searchParam.order_from,"onUpdate:modelValue":o[3]||(o[3]=e=>t(r).searchParam.order_from=e),clearable:"",class:"input-item"},{default:l(()=>[(s(!0),m(b,null,V(W.value,(e,n)=>(s(),v(x,{key:n,label:e,value:n},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1},8,["label"]),a(y,{label:"支付单号",prop:"out_trade_no"},{default:l(()=>[a(D,{modelValue:t(r).searchParam.out_trade_no,"onUpdate:modelValue":o[4]||(o[4]=e=>t(r).searchParam.out_trade_no=e),placeholder:"请输入支付单号"},null,8,["modelValue"])]),_:1}),a(y,{label:"发单状态",prop:"is_send"},{default:l(()=>[a(E,{class:"w-[280px]",modelValue:t(r).searchParam.is_send,"onUpdate:modelValue":o[5]||(o[5]=e=>t(r).searchParam.is_send=e),clearable:"",placeholder:t(_)("isSendPlaceholder")},{default:l(()=>[a(x,{label:"全部",value:""}),(s(!0),m(b,null,V(I.value,(e,n)=>(s(),v(x,{key:n,label:e.name,value:e.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1}),a(y,{label:t(_)("orderStatus"),prop:"order_status"},{default:l(()=>[a(E,{class:"w-[280px]",modelValue:t(r).searchParam.order_status,"onUpdate:modelValue":o[6]||(o[6]=e=>t(r).searchParam.order_status=e),clearable:"",placeholder:t(_)("orderStatusPlaceholder")},{default:l(()=>[a(x,{label:"全部",value:""}),(s(!0),m(b,null,V(T.value,(e,n)=>(s(),v(x,{key:n,label:e.name,value:e.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"]),a(y,{label:t(_)("refundStatus"),prop:"refund_status"},{default:l(()=>[a(E,{class:"w-[280px]",modelValue:t(r).searchParam.refund_status,"onUpdate:modelValue":o[7]||(o[7]=e=>t(r).searchParam.refund_status=e),clearable:"",placeholder:t(_)("refundStatusPlaceholder")},{default:l(()=>[a(x,{label:"全部",value:""}),(s(!0),m(b,null,V($.value,(e,n)=>(s(),v(x,{key:n,label:e.name,value:e.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"]),a(y,{label:t(_)("remark"),prop:"remark"},{default:l(()=>[a(D,{modelValue:t(r).searchParam.remark,"onUpdate:modelValue":o[8]||(o[8]=e=>t(r).searchParam.remark=e),placeholder:t(_)("remarkPlaceholder")},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),a(y,{label:"关键字搜索",prop:"remark"},{default:l(()=>[a(D,{style:{width:"280px"},modelValue:t(r).searchParam.keyword,"onUpdate:modelValue":o[9]||(o[9]=e=>t(r).searchParam.keyword=e),placeholder:"订单号/快递号/手机号/姓名",clearable:""},null,8,["modelValue"])]),_:1}),a(y,{label:t(_)("createTime"),prop:"create_time"},{default:l(()=>[a(ie,{modelValue:t(r).searchParam.create_time,"onUpdate:modelValue":o[10]||(o[10]=e=>t(r).searchParam.create_time=e),type:"datetimerange",format:"YYYY-MM-DD hh:mm:ss","start-placeholder":t(_)("startDate"),"end-placeholder":t(_)("endDate")},null,8,["modelValue","start-placeholder","end-placeholder"])]),_:1},8,["label"]),a(y,null,{default:l(()=>[a(g,{type:"primary",onClick:o[11]||(o[11]=e=>h())},{default:l(()=>[d(u(t(_)("search")),1)]),_:1}),a(g,{onClick:o[12]||(o[12]=e=>de(z.value))},{default:l(()=>[d(u(t(_)("reset")),1)]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),i("div",He,[ke((s(),v(ce,{data:t(r).data,size:"large"},{empty:l(()=>[i("span",null,u(t(r).loading?"":t(_)("emptyData")),1)]),default:l(()=>[a(k,{prop:"order_from",label:"渠道","min-width":"80","show-overflow-tooltip":!0},{default:l(({row:e})=>[i("div",Je,[a(t(w),{type:"info"},{default:l(()=>[d(u(e.order_from),1)]),_:2},1024)]),!e.platform_name==""?(s(),m("div",Qe,[a(t(w),null,{default:l(()=>[d(u(e.platform_name),1)]),_:2},1024)])):f("",!0)]),_:1}),a(k,{prop:"order_id",label:"基本信息","min-width":"200","show-overflow-tooltip":!0},{default:l(({row:e})=>[i("div",Ze,"下单人:"+u(e.member_id_name),1),i("div",ea,"订单号:"+u(e.order_id),1),i("div",aa,"支付单号:"+u(e.out_trade_no),1)]),_:1}),a(k,{label:"路线","min-width":"120",align:"center","show-overflow-tooltip":!0},{default:l(({row:e})=>[i("div",null,u(e.start_address.address),1),i("div",null,[a(q,null,{default:l(()=>[a(me)]),_:1})]),i("div",ta,u(e.end_address.address),1)]),_:1}),a(k,{prop:"order_money",label:"常规信息","min-width":"120","show-overflow-tooltip":!0},{default:l(({row:e})=>[e.delivery_name?(s(),v(t(w),{key:0,class:"p-1"},{default:l(()=>[d(u(e.delivery_name),1)]),_:2},1024)):f("",!0),i("div",la,"下单重量:"+u(e.orderInfo.weight)+"kg",1),i("div",oa,"订单金额:"+u(e.order_money),1)]),_:1}),P.value&&P.value.status==!1?(s(),v(k,{key:0,prop:"order_money",label:"订单佣金","min-width":"120","show-overflow-tooltip":!0},{default:l(({row:e})=>[e.fenxiao_order!=[]?(s(),m(b,{key:0},[e.fenxiao_order.first_commission>0?(s(),m("div",ra," 一级佣金: "+u(e.fenxiao_order.first_commission),1)):f("",!0),e.fenxiao_order.two_commission>0?(s(),m("div",sa," 二级佣金: "+u(e.fenxiao_order.two_commission),1)):f("",!0),e.fenxiao_order.status?(s(),m("div",na,[d(" 佣金状态 "),a(t(w),{type:e.fenxiao_order.status.type?e.fenxiao_order.status.type:"info",class:"ml-1"},{default:l(()=>[d(u(e.fenxiao_order.status.name?e.fenxiao_order.status.name:"未知"),1)]),_:2},1032,["type"])])):f("",!0)],64)):f("",!0)]),_:1})):f("",!0),a(k,{label:"订单状态","min-width":"120",align:"center","show-overflow-tooltip":!0},{default:l(({row:e})=>[(s(!0),m(b,null,V(I.value,(n,X)=>(s(),m("div",null,[n.value==e.is_send?(s(),m("div",da,[d(" 发单状态 "),a(t(w),{class:"ml-1"},{default:l(()=>[d(u(n.name),1)]),_:2},1024)])):f("",!0)]))),256)),(s(!0),m(b,null,V(T.value,(n,X)=>(s(),m("div",ia,[i("div",null,[n.value==e.order_status&&e.order_status!=-1?(s(),m("div",ua,[d("订单状态 "),a(t(w),{class:"ml-1"},{default:l(()=>[d(u(n.name),1)]),_:2},1024)])):f("",!0),n.value==e.order_status&&e.order_status==-1?(s(),m("div",ma,[d(" 订单状态 "),a(t(w),{type:"warning",class:"ml-1"},{default:l(()=>[d(u(n.name),1)]),_:2},1024)])):f("",!0)])]))),256)),e.addorderInfo&&e.addorderInfo.order_status==0?(s(),m("div",_a,[d(" 补差状态 "),a(t(w),{class:"mt-1 ml-1",type:"error"},{default:l(()=>[d(" 需补差")]),_:1})])):f("",!0),(s(!0),m(b,null,V($.value,(n,X)=>(s(),m("div",ca,[n.value==e.refund_status?(s(),m("div",pa,[d(" 退款状态 "),a(t(w),{class:"ml-1"},{default:l(()=>[d(u(n.name),1)]),_:2},1024)])):f("",!0)]))),256))]),_:1}),a(k,{label:"关闭原因",prop:"close_reason","min-width":"120",align:"center","show-overflow-tooltip":!0},{default:l(({row:e})=>[i("div",fa,u(e.close_reason),1)]),_:1}),a(k,{prop:"remark",label:t(_)("remark"),"min-width":"120","show-overflow-tooltip":!0},{default:l(({row:e})=>[i("div",null,u(e.remark),1),a(q,{onClick:n=>G(e)},{default:l(()=>[a(_e)]),_:2},1032,["onClick"])]),_:1},8,["label"]),a(k,{prop:"create_time",label:"下单时间","min-width":"120","show-overflow-tooltip":!0}),a(k,{label:t(_)("operation"),fixed:"right","min-width":"120"},{default:l(({row:e})=>[a(g,{type:"primary",link:"",onClick:n=>re(e)},{default:l(()=>[d("详情")]),_:2},1032,["onClick"]),e.order_status==-1||e.order_status==0?(s(),v(g,{key:0,type:"primary",link:"",onClick:n=>se(e.id)},{default:l(()=>[d(u(t(_)("delete")),1)]),_:2},1032,["onClick"])):f("",!0),e.order_status==1&&e.is_send==0?(s(),v(g,{key:1,type:"primary",link:"",onClick:n=>ae(e.order_id)},{default:l(()=>[d("发单")]),_:2},1032,["onClick"])):f("",!0),e.order_status==1?(s(),v(g,{key:2,type:"primary",link:"",onClick:n=>le(e.id)},{default:l(()=>[d("取消")]),_:2},1032,["onClick"])):f("",!0),e.fenxiao_order!=[]&&e.order_status==10&&e.fenxiao_order.status&&e.fenxiao_order.status.status==0&&P.value&&P.value.status==!1?(s(),v(g,{key:3,type:"primary",link:"",onClick:n=>te(e.id)},{default:l(()=>[d("佣金结算")]),_:2},1032,["onClick"])):f("",!0)]),_:1},8,["label"])]),_:1},8,["data"])),[[fe,t(r).loading]]),i("div",va,[a(pe,{"current-page":t(r).page,"onUpdate:current-page":o[13]||(o[13]=e=>t(r).page=e),"page-size":t(r).limit,"onUpdate:page-size":o[14]||(o[14]=e=>t(r).limit=e),layout:"total, sizes, prev, pager, next, jumper",total:t(r).total,onSizeChange:o[15]||(o[15]=e=>h()),onCurrentChange:h},null,8,["current-page","page-size","total"])])]),a(qe,{ref_key:"editOrderDialog",ref:B,onComplete:h},null,512)]),_:1})]),a(K,{modelValue:O.value,"onUpdate:modelValue":o[16]||(o[16]=e=>O.value=e),title:"使用移动端账号登录",width:"420",height:"740","align-center":""},{default:l(()=>[i("div",{class:"mt-[-24px]"},[i("button",{onClick:J,class:"mr-2"},"返回"),i("button",{onClick:Q},"刷新")]),i("div",ha,[i("iframe",{ref_key:"myIframeRef",ref:C,src:j.value,width:"375",height:"667"},null,8,ya)])]),_:1},8,["modelValue"]),a(K,{modelValue:L.value,"onUpdate:modelValue":o[19]||(o[19]=e=>L.value=e),title:"订单备注","align-center":"",width:"300px"},{default:l(()=>[i("div",ka,[a(D,{style:{width:"200px"},modelValue:F.value,"onUpdate:modelValue":o[17]||(o[17]=e=>F.value=e)},null,8,["modelValue"])]),i("div",ba,[a(g,{type:"primary",onClick:o[18]||(o[18]=e=>H()),class:"mr-2"},{default:l(()=>[d("确认")]),_:1})])]),_:1},8,["modelValue"])],64)}}});const st=Xe(ga,[["__scopeId","data-v-77cda0a3"]]);export{st as default};
