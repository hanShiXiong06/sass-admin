import{d as he,y as ye,f as be,r as v,q as Q,m as q,s as t,h as i,c,e as s,w as l,u as a,R as X,v as x,a as o,t as r,C as f,F as $,T as L,B as P,i as E,Z as ge,a5 as we,aQ as ke,a7 as Re,L as Ee,aM as Fe,aN as Ve,J as De,ac as Ce,ad as Te,aa as Ne,M as Be,K as Me,E as Se,X as Ae,ab as Ie,aC as Ue,Y as qe,p as $e,g as Le}from"./index-0e396751.js";/* empty css                   *//* empty css                 *//* empty css               *//* empty css                  *//* empty css                  *//* empty css                     *//* empty css                  *//* empty css                  *//* empty css                   *//* empty css                  *//* empty css                *//* empty css                 *//* empty css                 *//* empty css                    */import"./el-tooltip-4ed993c7.js";/* empty css                        *//* empty css                 *//* empty css                        *//* empty css               *//* empty css               */import"./el-form-item-4ed993c7.js";/* empty css                *//* empty css                   *//* empty css                       */import{_ as Pe}from"./goods_default-995568ac.js";import{z as Oe,x as Y,y as Z}from"./order-3f7fd991.js";import{f as je}from"./shop_address-41e12588.js";import{_ as ze}from"./_plugin-vue_export-helper-c27b6911.js";const G=D=>($e("data-v-0d263133"),D=D(),Le(),D),He={class:"main-container"},Je={class:"panel-title"},Ke={class:"input-width"},Qe={class:"input-width"},Xe={class:"input-width"},Ye={class:"input-width"},Ze={key:0},Ge={class:"input-width"},We={class:"input-width"},et={class:"input-width"},tt={key:1},lt={class:"input-width"},at={class:"input-width"},st={class:"input-width"},ot={class:"input-width"},rt={class:"input-width"},nt={class:"input-width line-feed"},dt={class:"panel-title"},it={class:"input-width"},ut={class:"input-width"},_t={class:"input-width"},pt={key:0,class:"input-width"},ct={key:1,class:"input-width"},ft={class:"input-width"},mt={key:0,class:"input-width flex"},vt=G(()=>o("div",{class:"image-slot"},[o("img",{class:"w-[70px] h-[70px]",src:Pe})],-1)),xt={class:"max-w-[100%] break-all"},ht={key:0,class:"panel-title"},yt={class:"input-width"},bt={class:"input-width"},gt={class:"input-width"},wt={class:"panel-title"},kt={class:"mb-[20px]"},Rt={class:"ml-[30px] text-[14px] mr-[20px]"},Et={class:"text-[14px]"},Ft={class:"flex mt-[10px]"},Vt={class:"flex ml-[30px] mt-[15px]"},Dt={class:"text-[14px] text-[#ff7f5b]"},Ct={class:"ml-[10px]"},Tt={class:"text-[14px] text-[#a4a4a4]"},Nt={class:"text-[14px] text-[#a4a4a4]"},Bt={class:"text-[14px] text-[#a4a4a4]"},Mt={class:"panel-title"},St={class:"flex"},At={class:"flex items-center w-[50px] h-[50px] mr-[10px]"},It=["src"],Ut={class:"flex flex-col flex-1"},qt={class:"text-[12px] text-[#999] truncate"},$t={key:2,class:"mt-[50px] mb-[20px]"},Lt={class:"mb-[100px]",style:{"min-height":"100px"}},Pt={class:"mr-[20px] min-w-[71px]"},Ot={class:"leading-[1] w-full text-[14px] w-[100px] flex justify-end"},jt={class:"leading-[1] w-full text-[14px] w-[100px] flex justify-end mt-[15px]"},zt=G(()=>o("div",{class:"w-[16px] h-[16px] flex items-center bg-[#D1EBFF] border-[1px] border-[#0091FF] rounded-[999px]"},[o("div",{class:"w-[8px] h-[8px] mx-auto bg-[#0091FF] rounded-[999px]"})],-1)),Ht={key:0,class:"w-[2px] h-[50px] bg-[#D1EBFF] mx-auto"},Jt={class:"leading-[1] ml-[20px] text-[14px]"},Kt={class:"leading-[1] ml-[20px] text-[14px] mt-[15px]"},Qt={class:"dialog-footer"},Xt={key:0,class:"mt-[10px] text-[#999] text-[12px] leading-[20px]"},Yt={class:"dialog-footer"},Zt={class:"dialog-footer"},Gt=he({__name:"refund_detail",setup(D){const O=ye(),B=be(),W=O.meta.title,y=parseInt(O.query.refund_id),b=v(!0),m=v(!1),e=v(null),F=async(p=0)=>{b.value=!0,e.value=null,await Oe(p).then(({data:n})=>{e.value=n,e.value.order_goods=[n.order_goods]}).catch(()=>{}),b.value=!1};y?F(y):b.value=!1;const g=v(!1),_=Q({...{shop_reason:"",refund_address_id:"",money:"",type:"",apply_money:0,refund_type:1}}),j=v(),z=v(),ee=q(()=>({money:[{required:!0,message:t("moneyPlaceholder"),trigger:"blur"}],refund_address_id:[{required:!0,message:t("refundaddressPlaceholder"),trigger:"blur"}]})),te=q(()=>({shop_reason:[{required:!0,message:t("shopReasonPlaceholder"),trigger:"blur"}]})),V=v(!1),le=()=>{_.type="agree",_.refund_type=e.value.refund_type,_.apply_money=e.value.apply_money,_.money=e.value.apply_money,V.value=!0,e.value.refund_type==2&&ae()},H=v([]),ae=()=>{je().then(p=>{H.value=p.data,p.data.forEach(n=>{n.is_refund_address==1&&(_.refund_address_id=n.id)})})},se=async p=>{m.value||!p||await p.validate(async n=>{n&&(m.value=!0,Y({order_refund_no:e.value.order_refund_no,money:_.money,is_agree:1,refund_address_id:_.refund_address_id}).then(()=>{V.value=!1,m.value=!1,F(y)}).catch(()=>{m.value=!1}))})},oe=()=>{_.type="refuse",_.shop_reason="",g.value=!0},re=async p=>{m.value||!p||await p.validate(async n=>{n&&(m.value=!0,Y({order_refund_no:e.value.order_refund_no,is_agree:0,shop_reason:_.shop_reason}).then(M=>{F(y),m.value=!1,g.value=!1}).catch(()=>{m.value=!1,g.value=!1}))})},ne=()=>{we.confirm(t("orderDeliveryTips"),t("warning"),{confirmButtonText:t("confirm"),cancelButtonText:t("cancel"),type:"warning"}).then(()=>{Z({order_refund_no:e.value.order_refund_no,is_agree:1}).then(()=>{F(y)})})},w=v(!1),C=Q({shop_reason:""}),J=v(),de=q(()=>({shop_reason:[{required:!0,message:t("shopReasonPlaceholder"),trigger:"blur"}]})),ie=async p=>{m.value||!p||await p.validate(async n=>{n&&(m.value=!0,Z({order_refund_no:e.value.order_refund_no,is_agree:0,shop_reason:C.shop_reason}).then(M=>{F(y),m.value=!1,w.value=!1}).catch(()=>{m.value=!1,w.value=!1}))})},ue=()=>{_.type="refuse",_.shop_reason="",w.value=!0},_e=()=>{const p=B.resolve({path:"/member/refund/detail",query:{refund_no:e.value.refund_no}});window.open(p.href,"_blank")},pe=p=>{const n=B.resolve({path:"/shop/order/detail",query:{order_id:p}});window.open(n.href,"_blank")};return(p,n)=>{const M=ke,S=Re,u=Ee,h=Fe,T=Ve,ce=De,A=Ce,fe=Te,me=Ne,N=Be,I=Me,k=Se,U=Ae,ve=Ie,xe=Ue,K=qe;return i(),c("div",He,[s(S,{class:"card !border-none mb-[15px]",shadow:"never"},{default:l(()=>[s(M,{content:a(W),icon:p.ArrowLeft,onBack:n[0]||(n[0]=d=>a(B).push({path:"/shop/order/refund"}))},null,8,["content","icon"])]),_:1}),X((i(),x(N,{model:e.value,"label-width":"100px",class:"page-form","label-position":"left"},{default:l(()=>[e.value?(i(),x(S,{key:0,class:"box-card !border-none relative",shadow:"never"},{default:l(()=>[o("h3",Je,r(a(t)("orderInfo")),1),s(T,{class:"row-bg px-[30px] mb-[20px]",gutter:20},{default:l(()=>[s(h,{span:8},{default:l(()=>[s(u,{label:a(t)("orderNo")},{default:l(()=>[o("div",{class:"input-width text-primary cursor-pointer",onClick:n[1]||(n[1]=d=>pe(e.value.order_id))},r(e.value.order_main.order_no),1)]),_:1},8,["label"]),s(u,{label:a(t)("orderForm")},{default:l(()=>[o("div",Ke,r(e.value.order_main.order_from_name),1)]),_:1},8,["label"]),e.value.order_main.out_trade_no?(i(),x(u,{key:0,label:a(t)("outTradeNo")},{default:l(()=>[o("div",Qe,r(e.value.order_main.out_trade_no),1)]),_:1},8,["label"])):f("",!0),e.value.pay_refund?(i(),x(u,{key:1,label:a(t)("payType")},{default:l(()=>[o("div",Xe,r(e.value.pay_refund.type_name),1)]),_:1},8,["label"])):f("",!0)]),_:1}),s(h,{span:8},{default:l(()=>[s(u,{label:a(t)("deliveryType")},{default:l(()=>[o("div",Ye,r(e.value.order_main.delivery_type_name),1)]),_:1},8,["label"]),e.value.order_main.delivery_type=="express"||e.value.order_main.delivery_type=="local_delivery"?(i(),c("div",Ze,[s(u,{label:a(t)("takerName")},{default:l(()=>[o("div",Ge,r(e.value.order_main.taker_name),1)]),_:1},8,["label"]),s(u,{label:a(t)("takerMobile")},{default:l(()=>[o("div",We,r(e.value.order_main.taker_mobile),1)]),_:1},8,["label"]),s(u,{label:a(t)("takerFullAddress")},{default:l(()=>[o("div",et,r(e.value.order_main.taker_full_address),1)]),_:1},8,["label"])])):f("",!0),e.value.order_main.delivery_type=="store"?(i(),c("div",tt,[s(u,{label:a(t)("storeName")},{default:l(()=>[o("div",lt,r(e.value.store.store_name),1)]),_:1},8,["label"]),s(u,{label:a(t)("storeAddress")},{default:l(()=>[o("div",at,r(e.value.store.full_address),1)]),_:1},8,["label"]),s(u,{label:a(t)("storeMobile")},{default:l(()=>[o("div",st,r(e.value.store.store_mobile),1)]),_:1},8,["label"]),s(u,{label:a(t)("tradeTime")},{default:l(()=>[o("div",ot,r(e.value.store.trade_time),1)]),_:1},8,["label"])])):f("",!0)]),_:1}),s(h,{span:8},{default:l(()=>[s(u,{label:a(t)("memberRemark")},{default:l(()=>[o("div",rt,r(e.value.order_main.member_remark),1)]),_:1},8,["label"]),s(u,{label:a(t)("notes")},{default:l(()=>[o("div",nt,r(e.value.order_main.shop_remark),1)]),_:1},8,["label"])]),_:1})]),_:1}),o("h3",dt,r(a(t)("afterSales")),1),s(T,{class:"row-bg px-[30px] mb-[20px]",gutter:20},{default:l(()=>[s(h,{span:8},{default:l(()=>[s(u,{label:a(t)("orderRefundNo")},{default:l(()=>[o("div",it,r(e.value.order_refund_no),1)]),_:1},8,["label"]),s(u,{label:a(t)("refundType")},{default:l(()=>[o("div",ut,r(e.value.refund_type_name),1)]),_:1},8,["label"]),s(u,{label:a(t)("createTime")},{default:l(()=>[o("div",_t,r(e.value.create_time),1)]),_:1},8,["label"])]),_:1}),s(h,{span:8},{default:l(()=>[s(u,{label:a(t)("refundMoney")},{default:l(()=>[e.value.status==8?(i(),c("div",pt,"￥"+r(e.value.money),1)):(i(),c("div",ct,"￥"+r(e.value.apply_money),1))]),_:1},8,["label"]),s(u,{label:a(t)("refundReason")},{default:l(()=>[o("div",ft,r(e.value.reason),1)]),_:1},8,["label"])]),_:1})]),_:1}),s(T,{class:"row-bg px-[30px] mb-[20px]",gutter:20},{default:l(()=>[s(h,{span:8},{default:l(()=>[s(u,{label:a(t)("refundVoucher")},{default:l(()=>[e.value.voucher?(i(),c("div",mt,[(i(!0),c($,null,L(e.value.voucher,(d,R)=>(i(),c("div",{class:"mr-3",key:R},[d?(i(),x(ce,{key:0,class:"w-[70px] h-[70px]",src:a(P)(d),fit:"contain","preview-src-list":[a(P)(d)]},{error:l(()=>[vt]),_:2},1032,["src","preview-src-list"])):f("",!0)]))),128))])):f("",!0)]),_:1},8,["label"]),s(u,{label:a(t)("refundRemark")},{default:l(()=>[o("div",xt,r(e.value.remark),1)]),_:1},8,["label"])]),_:1})]),_:1}),e.value.status==4?(i(),c("h3",ht,"买家退货信息")):f("",!0),e.value.status==4?(i(),x(T,{key:1,class:"row-bg px-[30px] mb-[20px]",gutter:20},{default:l(()=>[s(h,{span:8},{default:l(()=>[s(u,{label:a(t)("expressCompany")},{default:l(()=>[o("div",yt,r(e.value.delivery.express_company),1)]),_:1},8,["label"])]),_:1}),s(h,{span:8},{default:l(()=>[s(u,{label:a(t)("expressNumber")},{default:l(()=>[o("div",bt,r(e.value.delivery.express_number),1)]),_:1},8,["label"])]),_:1}),s(h,{span:8},{default:l(()=>[s(u,{label:a(t)("expressRemark")},{default:l(()=>[o("div",gt,r(e.value.delivery.remark),1)]),_:1},8,["label"])]),_:1})]),_:1})):f("",!0),o("h3",wt,r(a(t)("refundStatus")),1),o("div",kt,[o("p",null,[o("span",Rt,r(a(t)("refundStatus"))+"：",1),o("span",Et,r(e.value.status_name),1)]),o("div",Ft,[e.value.status==1?(i(),c("span",{key:0,class:"text-[14px] px-[15px] py-[5px] ml-[30px] text-[#5c96fc] bg-[#ebf3ff] cursor-pointer",onClick:le},r(a(t)("agree")),1)):f("",!0),e.value.status==1?(i(),c("span",{key:1,class:"text-[14px] px-[15px] py-[5px] ml-[30px] text-[#5c96fc] bg-[#ebf3ff] cursor-pointer",onClick:oe},r(a(t)("refuse")),1)):f("",!0),e.value.status==4&&e.value.refund_type==2?(i(),c("span",{key:2,class:"text-[14px] px-[15px] py-[5px] ml-[30px] text-[#5c96fc] bg-[#ebf3ff] cursor-pointer",onClick:ne},r(a(t)("confirmDelivery")),1)):f("",!0),e.value.status==4&&e.value.refund_type==2?(i(),c("span",{key:3,class:"text-[14px] px-[15px] py-[5px] ml-[30px] text-[#5c96fc] bg-[#ebf3ff] cursor-pointer",onClick:ue},r(a(t)("refuse")),1)):f("",!0),e.value.status==6?(i(),c("span",{key:4,class:"text-[14px] px-[15px] py-[5px] ml-[30px] text-[#5c96fc] bg-[#ebf3ff] cursor-pointer",onClick:_e},r(a(t)("transferAccounts")),1)):f("",!0)]),o("div",Vt,[o("span",Dt,r(a(t)("remind"))+"：",1),o("div",Ct,[o("p",Tt,r(a(t)("remindTips1")),1),o("p",Nt,r(a(t)("remindTips2")),1),o("p",Bt,r(a(t)("remindTips3")),1)])])]),o("h3",Mt,r(a(t)("goodsDetail")),1),s(fe,{data:e.value.order_goods,size:"large"},{default:l(()=>[s(A,{label:a(t)("goodsName"),align:"left",width:"300"},{default:l(({row:d})=>[o("div",St,[o("div",At,[o("img",{class:"w-[50px] h-[50px]",src:a(P)(d.goods_image)},null,8,It)]),o("div",Ut,[o("span",null,r(d.goods_name),1),o("span",qt,r(d.sku_name),1)])])]),_:1},8,["label"]),s(A,{prop:"price",label:a(t)("price"),"min-width":"50",align:"left"},null,8,["label"]),s(A,{prop:"num",label:a(t)("num"),"min-width":"50",align:"right"},null,8,["label"])]),_:1},8,["data"]),e.value.refund_log.length>0?(i(),c("h3",$t,r(a(t)("operateLog")),1)):f("",!0),o("div",Lt,[e.value.refund_log.length>0?(i(!0),c($,{key:0},L(e.value.refund_log,(d,R)=>(i(),c("div",{class:"flex",key:R},[o("div",Pt,[o("div",Ot,r(d.create_time.split(" ")[0]),1),o("div",jt,r(d.create_time.split(" ")[1]),1)]),o("div",null,[zt,R+1!=e.value.refund_log.length?(i(),c("div",Ht)):f("",!0)]),o("div",null,[o("div",Jt,r(d.main_type_name)+r(d.main_name),1),o("div",Kt,r(d.type_name),1)])]))),128)):f("",!0)])]),_:1})):f("",!0),!b.value&&!e.value?(i(),x(S,{key:1,class:"box-card !border-none relative",shadow:"never"},{default:l(()=>[s(me,{description:a(t)("orderInfoEmpty")},null,8,["description"])]),_:1})):f("",!0)]),_:1},8,["model"])),[[K,b.value]]),s(U,{modelValue:g.value,"onUpdate:modelValue":n[5]||(n[5]=d=>g.value=d),title:a(t)("orderRefundRefuse"),width:"460px",class:"diy-dialog-wrap","destroy-on-close":!0},{footer:l(()=>[o("span",Qt,[s(k,{onClick:n[3]||(n[3]=d=>g.value=!1)},{default:l(()=>[E(r(a(t)("cancel")),1)]),_:1}),s(k,{type:"primary",loading:m.value,onClick:n[4]||(n[4]=d=>re(z.value))},{default:l(()=>[E(r(a(t)("confirm")),1)]),_:1},8,["loading"])])]),default:l(()=>[s(N,{model:_,"label-width":"90px",ref_key:"refuseFormRef",ref:z,rules:a(te),class:"page-form"},{default:l(()=>[s(u,{label:a(t)("refuseReason"),prop:"shop_reason"},{default:l(()=>[s(I,{modelValue:_.shop_reason,"onUpdate:modelValue":n[2]||(n[2]=d=>_.shop_reason=d),modelModifiers:{trim:!0},type:"textarea",rows:"4",clearable:"",class:"input-width",maxlength:"200","show-word-limit":""},null,8,["modelValue"])]),_:1},8,["label"])]),_:1},8,["model","rules"])]),_:1},8,["modelValue","title"]),s(U,{modelValue:V.value,"onUpdate:modelValue":n[10]||(n[10]=d=>V.value=d),title:a(t)("orderRefundAgree"),width:"460px",class:"diy-dialog-wrap","destroy-on-close":!0},{footer:l(()=>[o("span",Yt,[s(k,{onClick:n[8]||(n[8]=d=>V.value=!1)},{default:l(()=>[E(r(a(t)("cancel")),1)]),_:1}),s(k,{type:"primary",loading:m.value,onClick:n[9]||(n[9]=d=>se(j.value))},{default:l(()=>[E(r(a(t)("confirm")),1)]),_:1},8,["loading"])])]),default:l(()=>[X((i(),x(N,{onSubmit:ge(p.onSubmit,["prevent"]),model:_,"label-width":"120px",ref_key:"formRef",ref:j,rules:a(ee),class:"page-form"},{default:l(()=>[s(u,{label:a(t)("applyMoney")},{default:l(()=>[o("span",null,"￥"+r(_.apply_money),1)]),_:1},8,["label"]),s(u,{label:a(t)("agreeMoney"),prop:"money"},{default:l(()=>[o("div",null,[s(I,{modelValue:_.money,"onUpdate:modelValue":n[6]||(n[6]=d=>_.money=d),modelModifiers:{trim:!0},clearable:"",class:"input-width"},null,8,["modelValue"]),e.value.gift_balance&&Number(e.value.gift_balance)>Number(e.value.member.balance)?(i(),c("div",Xt," 当前订单需退还"+r(e.value.gift_balance)+"元赠品余额。若用户余额不足，则默认不进行扣除。请联系客户确认退款金额。 ",1)):f("",!0)])]),_:1},8,["label"]),_.refund_type==2?(i(),x(u,{key:0,label:a(t)("refundDeliveryAddress"),prop:"refund_address_id"},{default:l(()=>[s(xe,{modelValue:_.refund_address_id,"onUpdate:modelValue":n[7]||(n[7]=d=>_.refund_address_id=d),clearable:"",class:"input-item"},{default:l(()=>[(i(!0),c($,null,L(H.value,(d,R)=>(i(),x(ve,{key:R,label:d.full_address,value:d.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1},8,["label"])):f("",!0)]),_:1},8,["onSubmit","model","rules"])),[[K,b.value]])]),_:1},8,["modelValue","title"]),s(U,{modelValue:w.value,"onUpdate:modelValue":n[14]||(n[14]=d=>w.value=d),title:a(t)("orderRefundRefuse"),width:"460px",class:"diy-dialog-wrap","destroy-on-close":!0},{footer:l(()=>[o("span",Zt,[s(k,{onClick:n[12]||(n[12]=d=>w.value=!1)},{default:l(()=>[E(r(a(t)("cancel")),1)]),_:1}),s(k,{type:"primary",loading:m.value,onClick:n[13]||(n[13]=d=>ie(J.value))},{default:l(()=>[E(r(a(t)("confirm")),1)]),_:1},8,["loading"])])]),default:l(()=>[s(N,{model:C,"label-width":"90px",ref_key:"deliveryRefuseFormRef",ref:J,rules:a(de),class:"page-form"},{default:l(()=>[s(u,{label:a(t)("refuseReason"),prop:"shop_reason"},{default:l(()=>[s(I,{modelValue:C.shop_reason,"onUpdate:modelValue":n[11]||(n[11]=d=>C.shop_reason=d),modelModifiers:{trim:!0},type:"textarea",rows:"4",clearable:"",class:"input-width",maxlength:"200","show-word-limit":""},null,8,["modelValue"])]),_:1},8,["label"])]),_:1},8,["model","rules"])]),_:1},8,["modelValue","title"])])}}});const Cl=ze(Gt,[["__scopeId","data-v-0d263133"]]);export{Cl as default};
