import{d as m,l as u,r as x,h as p,c as h,R as s,a0 as i,u as o,a as t,t as d,v as _,p as v,g as y}from"./index-904cb7a2.js";import{u as b}from"./poster-3d5a26a9.js";import{b as g}from"./browser-a1ac24ac.js";import{_ as k}from"./_plugin-vue_export-helper-c27b6911.js";const r=n=>(v("data-v-546f9845"),n=n(),y(),n),z={class:"print-preview"},w={class:"bottom-border"},S={class:"bottom-border"},O={class:"text-[16px] my-[10px]"},W={class:"text-[16px] my-[10px]"},I={class:"text-[16px] my-[10px]"},j={class:"text-[16px] my-[10px]"},B={class:"text-[16px] my-[10px]"},C={class:"text-[16px] my-[10px]"},D={class:"text-[16px] my-[10px]"},L={class:"text-[16px] my-[10px]"},q={class:"text-[16px] my-[10px]"},G={class:"text-[16px] my-[10px]"},P={class:"bottom-border"},R={class:"flex my-[10px]"},E=r(()=>t("div",{class:"text-[16px]",style:{flex:"2 1 0"}},"商品名称",-1)),M=r(()=>t("div",{class:"text-[16px] flex-1 text-right"},"数量",-1)),N={class:"text-[16px] flex-1 text-right"},T={class:"flex my-[10px]"},U=r(()=>t("div",{class:"text-[16px] flex-1 text-right"},"x2",-1)),V={class:"flex my-[10px]"},A=r(()=>t("div",{class:"text-[16px] flex-1 text-right"},"x1",-1)),F=r(()=>t("div",{class:"bottom-border"},null,-1)),H={class:"my-[10px]"},J=r(()=>t("div",null,"会员昵称：张三",-1)),K=[J],Q={class:"my-[10px]"},X={class:"my-[10px]"},Y={class:"bottom-border"},Z={class:"bottom-border"},$={class:"my-[10px]"},ee=["src"],oe={class:"my-[10px] text-center text-[16px]"},te=m({__name:"preview-goods-order",props:{value:{type:Object,default:{}}},setup(n,{expose:l}){const c=n;b();const e=u(()=>c.value),a=x("");return g.toDataURL("小票预览二维码",{errorCorrectionLevel:"L",margin:0,width:200}).then(f=>{a.value=f}),l({}),(f,ie)=>(p(),h("div",z,[s(t("div",{class:_(["my-[10px] text-center",[o(e).head_info.ticket_name.fontSize+"-size",o(e).head_info.ticket_name.fontWeight+"-weight"]])},d(o(e).head_info.ticket_name.value),3),[[i,o(e).head_info.ticket_name.status]]),s(t("div",w,null,512),[[i,o(e).head_info.ticket_name.status]]),s(t("div",{class:_(["my-[10px] text-center",[o(e).head_info.shop_name.fontSize+"-size",o(e).head_info.shop_name.fontWeight+"-weight"]])},"商城名称",2),[[i,o(e).head_info.shop_name.status]]),s(t("div",S,null,512),[[i,o(e).head_info.shop_name.status]]),s(t("div",null,[s(t("div",O,"订单编号：20240713456280064905216",512),[[i,o(e).order_info.order_item.value.indexOf("order_no")!=-1]]),s(t("div",W,"订单来源：微信小程序",512),[[i,o(e).order_info.order_item.value.indexOf("order_from")!=-1]]),s(t("div",I,"订单状态：已完成",512),[[i,o(e).order_info.order_item.value.indexOf("order_status")!=-1]]),s(t("div",j,"支付方式：微信支付",512),[[i,o(e).order_info.order_item.value.indexOf("pay_type")!=-1]]),s(t("div",B,"配送方式：同城配送",512),[[i,o(e).order_info.order_item.value.indexOf("delivery_type")!=-1]]),s(t("div",C,"下单时间：2023-12-12 14:20:20",512),[[i,o(e).order_info.order_item.value.indexOf("create_time")!=-1]]),s(t("div",D,"付款时间：2023-12-12 14:20:30",512),[[i,o(e).order_info.order_item.value.indexOf("pay_time")!=-1]]),s(t("div",L,"商品总额：￥10.00",512),[[i,o(e).order_info.order_item.value.indexOf("goods_money")!=-1]]),s(t("div",q,"配送金额：￥1.00",512),[[i,o(e).order_info.order_item.value.indexOf("delivery_money")!=-1]]),s(t("div",G,"优惠金额：￥2.00",512),[[i,o(e).order_info.order_item.value.indexOf("discount_money")!=-1]])],512),[[i,o(e).order_info.order_item.value.length]]),s(t("div",{class:_(["my-[10px]",[o(e).order_info.order_money.fontSize+"-size",o(e).order_info.order_money.fontWeight+"-weight"]])},"实付金额：¥7.00",2),[[i,o(e).order_info.order_money.status]]),s(t("div",{class:_(["my-[10px]",[o(e).order_info.shop_remark.fontSize+"-size",o(e).order_info.shop_remark.fontWeight+"-weight"]])},"商家备注：新用户优惠",2),[[i,o(e).order_info.shop_remark.status]]),s(t("div",P,null,512),[[i,o(e).order_info.order_item.value.length||o(e).order_info.order_money.status||o(e).order_info.shop_remark.status]]),t("div",R,[E,M,s(t("div",N,"金额",512),[[i,o(e).goods_info.goods_price.status]])]),t("div",T,[t("div",{class:_(["text-[16px]",[o(e).goods_info.goods_name.fontSize+"-size",o(e).goods_info.goods_name.fontWeight+"-weight"]]),style:{flex:"2 1 0"}},"可口可乐碳酸饮料",2),U,s(t("div",{class:_(["text-[16px] flex-1 text-right",[o(e).goods_info.goods_price.fontSize+"-size",o(e).goods_info.goods_price.fontWeight+"-weight"]])},"¥54.50",2),[[i,o(e).goods_info.goods_price.status]])]),t("div",V,[t("div",{class:_(["text-[16px]",[o(e).goods_info.goods_name.fontSize+"-size",o(e).goods_info.goods_name.fontWeight+"-weight"]]),style:{flex:"2 1 0"}},"液晶电视",2),A,s(t("div",{class:_(["text-[16px] flex-1 text-right",[o(e).goods_info.goods_price.fontSize+"-size",o(e).goods_info.goods_price.fontWeight+"-weight"]])},"¥1999.00",2),[[i,o(e).goods_info.goods_price.status]])]),F,s(t("div",H,K,512),[[i,o(e).buyer_info.member_basic_info.value.indexOf("nickname")!=-1]]),s(t("div",Q,"账户余额：￥2000.00",512),[[i,o(e).buyer_info.member_basic_info.value.indexOf("account_balance")!=-1]]),s(t("div",X,"账户积分：300",512),[[i,o(e).buyer_info.member_basic_info.value.indexOf("account_point")!=-1]]),s(t("div",{class:_(["my-[10px]",[o(e).buyer_info.buyer_mobile.fontSize+"-size",o(e).buyer_info.buyer_mobile.fontWeight+"-weight"]])},"会员手机号："+d(o(e).buyer_info.buyer_mobile.value=="yes"?"152****5131":"15266665131"),3),[[i,o(e).buyer_info.buyer_mobile.status]]),s(t("div",Y,null,512),[[i,o(e).buyer_info.member_basic_info.value||o(e).buyer_info.buyer_mobile.status]]),s(t("div",{class:_(["my-[10px]",[o(e).buyer_info.taker_name.fontSize+"-size",o(e).buyer_info.taker_name.fontWeight+"-weight"]])},"收货人：小张",2),[[i,o(e).buyer_info.taker_name.status]]),s(t("div",{class:_(["my-[10px]",[o(e).buyer_info.taker_mobile.fontSize+"-size",o(e).buyer_info.taker_mobile.fontWeight+"-weight"]])},"联系方式："+d(o(e).buyer_info.taker_mobile.value=="yes"?"152****5131":"15266665131"),3),[[i,o(e).buyer_info.taker_mobile.status]]),s(t("div",{class:_(["my-[10px]",[o(e).buyer_info.taker_full_address.fontSize+"-size",o(e).buyer_info.taker_full_address.fontWeight+"-weight"]])},"收货地址：山西省太原市小店区创业街27号时代广场大厦",2),[[i,o(e).buyer_info.taker_full_address.status]]),s(t("div",{class:_(["my-[10px]",[o(e).buyer_info.member_remark.fontSize+"-size",o(e).buyer_info.member_remark.fontWeight+"-weight"]])},"买家备注：微辣，多放孜然，谢谢！",2),[[i,o(e).buyer_info.member_remark.status]]),s(t("div",Z,null,512),[[i,o(e).buyer_info.taker_name.status||o(e).buyer_info.taker_mobile.status||o(e).buyer_info.taker_full_address.status||o(e).buyer_info.member_remark.status]]),s(t("div",$,[t("img",{src:a.value,class:"w-[150px] h-[150px] mx-auto"},null,8,ee)],512),[[i,o(e).bottom_info.qrcode.status]]),s(t("div",oe,"打印时间：2024年7月13日 17:48:39",512),[[i,o(e).bottom_info.ticket_print_time.status]]),s(t("div",{class:"my-[10px] text-center text-[16px]"},d(o(e).bottom_info.bottom_remark.value),513),[[i,o(e).bottom_info.bottom_remark.status]])]))}});const se=k(te,[["__scopeId","data-v-546f9845"]]),ae=Object.freeze(Object.defineProperty({__proto__:null,default:se},Symbol.toStringTag,{value:"Module"}));export{ae as _};
