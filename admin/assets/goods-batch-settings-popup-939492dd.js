import{d as Te,r as B,y as Oe,f as De,q as h,s as t,h as p,v as m,w as a,a as u,e as d,i as f,t as n,u as s,R as N,c as v,F as x,T as V,C as g,bU as ae,a0 as P,U as E,aW as Ge,dc as Be,dd as Ne,aM as Le,av as Ue,c8 as Fe,L as Pe,K as Me,bF as Re,ab as Ie,aC as $e,at as je,au as qe,aS as Ae,aN as Ke,M as Ye,E as Ze,X as He,Y as We}from"./index-0e396751.js";/* empty css                   *//* empty css                  *//* empty css                   *//* empty css                  *//* empty css                *//* empty css               *//* empty css                  *//* empty css                       *//* empty css                 *//* empty css                 *//* empty css               *//* empty css                  *//* empty css                  *//* empty css                     *//* empty css                  *//* empty css                          *//* empty css                    */import"./el-form-item-4ed993c7.js";/* empty css                          *//* empty css               *//* empty css                */import"./el-tooltip-4ed993c7.js";import"./el-menu-item-4ed993c7.js";/* empty css                 */import{A as Xe,B as ze,C as Je,D as Qe,g as el,E as ll}from"./goods-995cb067.js";import{j as tl}from"./poster-fe5eb9cd.js";import{u as ol}from"./diy_form-e1ce8c59.js";import{i as sl,B as al}from"./delivery-fe1f6e47.js";import{_ as rl}from"./_plugin-vue_export-helper-c27b6911.js";const il={class:"ml-[10px]"},dl={class:"ml-[10px]"},nl={class:"mt-[10px] text-[12px] text-[#999] leading-[20px]"},pl={class:"ml-[10px]"},ul={class:"ml-[10px]"},_l={class:"ml-[10px]"},ml={class:"mt-[10px] text-[12px] text-[#999] leading-[20px]"},cl={key:7},fl={key:0,class:"text-[12px] text-[#999] leading-[20px]"},yl={key:1,class:"text-[12px] text-[#999] leading-[20px]"},vl={class:"ml-[10px]"},gl={key:8},hl={class:"mt-[10px] ml-[120px] text-[12px] text-[#999] leading-[20px]"},bl={class:"ml-[10px]"},xl={class:"dialog-footer"},Vl=Te({__name:"goods-batch-settings-popup",emits:["load"],setup(kl,{expose:re,emit:ie}){const C=B(!1),S=B(!1),_=B("label");Oe();const k=De(),o=h({...{label_ids:[],service_ids:[],poster_id:"",form_id:"",brand_id:"",goods_category:[],virtual_sale_num:0,delivery_template_id:"",delivery_money:0,fee_type:"template",delivery_type:[],stock_type:"inc",is_free_shipping:1,is_gift:0,stock:""}}),H={required:/[\S]+/,number:/^\d{0,10}$/,digit:/^\d{0,10}(.?\d{0,2})$/,special:/^\d{0,10}(.?\d{0,3})$/},W=B(),de=h({virtual_sale_num:[{trigger:"blur",validator:(i,e,r)=>{_.value=="virtual_sale_num"?isNaN(e)||!H.number.test(e)?r(new Error(t("virtualSaleNumTips"))):e<0?r(new Error(t("virtualSaleNumNotZeroTips"))):r():r()}}],delivery_type:[{required:!0,message:t("deliveryTypePlaceholder"),trigger:"blur"}],goods_category:[{required:!0,message:t("goodsCategoryPlaceholderTwo"),trigger:"blur"}],delivery_money:[{trigger:"blur",validator:(i,e,r)=>{_.value=="delivery"&&o.delivery_type.indexOf("express")!=-1&&o.is_free_shipping==0&&o.fee_type=="fixed"?o.delivery_template_id.length==0&&e===""?r(new Error(t("deliveryMoneyPlaceholder"))):isNaN(e)||!H.digit.test(e)?r(new Error(t("deliveryMoneyTips"))):e<0?r(new Error(t("deliveryMoneyNotZeroTips"))):r():r()}}],delivery_template_id:[{trigger:"blur",validator:(i,e,r)=>{_.value=="delivery"&&o.delivery_type.indexOf("express")!=-1&&o.is_free_shipping==0&&o.fee_type=="template"&&o.delivery_money.length==0&&e===""?r(new Error(t("deliveryTemplateIdPlaceholder"))):r()}}]}),L=[],ne=i=>{i.forEach(e=>{L.push(e.goods_id)}),C.value=!0},pe=async i=>{S.value||!i||await i.validate(async e=>{if(e){S.value=!0;const r=[];o.goods_category.forEach(y=>{typeof y=="object"?y.forEach(b=>{r.indexOf(b)==-1&&r.push(b)}):r.indexOf(y)==-1&&r.push(y)}),o.goods_category=r;let T={goods_ids:L,set_type:_.value,set_value:o};Xe(T).then(y=>{["stock"].indexOf(_.value)!=-1&&(_.value="label",C.value=!1,L.splice(0,L.length),Object.assign(o,{label_ids:[],service_ids:[],poster_id:"",form_id:"",brand_id:"",goods_category:[],virtual_sale_num:"",delivery_template_id:"",delivery_money:"",fee_type:"template",delivery_type:[],is_free_shipping:1,is_gift:0}),ie("load")),S.value=!1}).catch(y=>{S.value=!1})}})},ue=i=>{_.value=i},X=h([]);(()=>{ze().then(i=>{Object.assign(X,i.data)})})();const M=h([]),_e=()=>{const i=k.resolve({path:"/shop/goods/label"});window.open(i.href)},z=(i=!1)=>{Je({}).then(e=>{const r=e.data;r&&(M.splice(0,M.length,...r),i&&E({message:t("refreshSuccess"),type:"success"}))})};z();const R=h([]),me=()=>{const i=k.resolve({path:"/shop/goods/service"});window.open(i.href)},J=(i=!1)=>{Qe({}).then(e=>{const r=e.data;r&&(R.splice(0,R.length,...r),i&&E({message:t("refreshSuccess"),type:"success"}))})};J();const I=h([]),ce={multiple:!0},fe=i=>{},ye=()=>{const i=k.resolve({path:"/shop/goods/category"});window.open(i.href)},Q=(i=!1)=>{el().then(e=>{const r=e.data;if(r){const T=[];r.forEach(y=>{const b=[];y.child_list&&y.child_list.forEach(O=>{b.push({value:O.category_id,label:O.category_name})}),T.push({value:y.category_id,label:y.category_name,children:b})}),I.splice(0,I.length,...T),i&&E({message:t("refreshSuccess"),type:"success"})}})};Q();const $=h([]),ve=()=>{const i=k.resolve({path:"/shop/goods/brand"});window.open(i.href)},ee=(i=!1)=>{ll({}).then(e=>{const r=e.data;r&&($.splice(0,$.length,...r),i&&E({message:t("refreshSuccess"),type:"success"}))})};ee();const j=h([]),ge=()=>{const i=k.resolve({path:"/poster/list"});window.open(i.href)},le=(i=!1)=>{tl({type:"shop_goods"}).then(e=>{const r=e.data;r&&(j.splice(0,j.length,...r),i&&E({message:t("refreshSuccess"),type:"success"}))})};le();const G=h([]),q=h([]),he=B(!1);sl().then(i=>{const e=i.data;e&&G.splice(0,G.length,...e)});const be=()=>{const i=k.resolve({path:"/shop/order/shipping/template"});window.open(i.href)},te=(i=!1)=>{al({}).then(e=>{const r=e.data;r&&(q.splice(0,q.length,...r),i&&E({message:t("refreshSuccess"),type:"success"}))})};te();const A=h([]),xe=()=>{const i=k.resolve({path:"/diy_form/list"});window.open(i.href)},oe=(i=!1)=>{ol({type:"DIY_FORM_GOODS_DETAIL",status:1}).then(e=>{const r=e.data;r&&(A.splice(0,A.length,...r),i&&E({message:t("refreshSuccess"),type:"success"}))})};return oe(),re({showDialog:C,show:ne}),(i,e)=>{const r=Ge,T=Be,y=Ne,b=Le,O=Ue,K=Fe,c=Pe,Y=Me,Ve=Re,U=Ie,F=$e,D=je,Z=qe,ke=Ae,we=Ke,Ee=Ye,se=Ze,Ce=He,Se=We;return p(),m(Ce,{modelValue:C.value,"onUpdate:modelValue":e[25]||(e[25]=l=>C.value=l),title:s(t)("batchSetting"),width:"700px",class:"diy-dialog-wrap","destroy-on-close":!0},{footer:a(()=>[u("span",xl,[d(se,{onClick:e[23]||(e[23]=l=>C.value=!1)},{default:a(()=>[f(n(s(t)("cancel")),1)]),_:1}),d(se,{type:"primary",loading:S.value,onClick:e[24]||(e[24]=l=>pe(W.value))},{default:a(()=>[f(n(s(t)("confirm")),1)]),_:1},8,["loading"])])]),default:a(()=>[d(r,{title:s(t)("batchSettingTip"),type:"info",closable:!1},null,8,["title"]),N((p(),m(Ee,{model:o,"label-width":"120px",ref_key:"formRef",ref:W,rules:de,class:"mt-[10px] page-form"},{default:a(()=>[d(we,null,{default:a(()=>[d(b,{span:4,class:"menu-column"},{default:a(()=>[d(y,{"default-active":_.value,onSelect:ue},{default:a(()=>[(p(!0),v(x,null,V(Object.entries(X),([l,w])=>(p(),m(T,{key:l,index:l},{default:a(()=>[f(n(w),1)]),_:2},1032,["index"]))),128))]),_:1},8,["default-active"])]),_:1}),d(b,{span:20,class:"content-column p-[5px]"},{default:a(()=>[_.value==="label"?(p(),m(c,{key:0,label:s(t)("label")},{default:a(()=>[d(K,{modelValue:o.label_ids,"onUpdate:modelValue":e[0]||(e[0]=l=>o.label_ids=l)},{default:a(()=>[(p(!0),v(x,null,V(M,(l,w)=>(p(),m(O,{label:l.label_id,key:w},{default:a(()=>[f(n(l.label_name),1)]),_:2},1032,["label"]))),128))]),_:1},8,["modelValue"]),u("div",il,[u("span",{class:"cursor-pointer text-primary mr-[10px]",onClick:z},n(s(t)("refresh")),1),u("span",{class:"cursor-pointer text-primary",onClick:_e},n(s(t)("addGoodsLabel")),1)])]),_:1},8,["label"])):g("",!0),_.value==="service"?(p(),m(c,{key:1,label:s(t)("label")},{default:a(()=>[d(K,{modelValue:o.service_ids,"onUpdate:modelValue":e[1]||(e[1]=l=>o.service_ids=l)},{default:a(()=>[(p(!0),v(x,null,V(R,(l,w)=>(p(),m(O,{label:l.service_id,key:w},{default:a(()=>[f(n(l.service_name),1)]),_:2},1032,["label"]))),128))]),_:1},8,["modelValue"]),u("div",dl,[u("span",{class:"cursor-pointer text-primary mr-[10px]",onClick:J},n(s(t)("refresh")),1),u("span",{class:"cursor-pointer text-primary",onClick:me},n(s(t)("addGoodsService")),1)])]),_:1},8,["label"])):g("",!0),_.value==="virtual_sale_num"?(p(),m(c,{key:2,label:s(t)("virtualSaleNum"),prop:"virtual_sale_num"},{default:a(()=>[u("div",null,[d(Y,{modelValue:o.virtual_sale_num,"onUpdate:modelValue":e[2]||(e[2]=l=>o.virtual_sale_num=l),modelModifiers:{trim:!0},placeholder:s(t)("virtualSaleNumPlaceholder"),class:"input-width","show-word-limit":"",maxlength:"8",clearable:"",onKeyup:e[3]||(e[3]=l=>s(ae)(l)),onBlur:e[4]||(e[4]=l=>o.virtual_sale_num=l.target.value)},{append:a(()=>[f(n(o.unit?o.unit:"件"),1)]),_:1},8,["modelValue","placeholder"]),u("div",nl,n(s(t)("virtualSaleNumDesc")),1)])]),_:1},8,["label"])):g("",!0),_.value==="category"?(p(),m(c,{key:3,prop:"goods_category",label:s(t)("goodsCategory")},{default:a(()=>[d(Ve,{modelValue:o.goods_category,"onUpdate:modelValue":e[5]||(e[5]=l=>o.goods_category=l),options:I,props:ce,clearable:"",filterable:"",onChange:fe},null,8,["modelValue","options"]),u("div",pl,[u("span",{class:"cursor-pointer text-primary mr-[10px]",onClick:e[6]||(e[6]=l=>Q(!0))},n(s(t)("refresh")),1),u("span",{class:"cursor-pointer text-primary",onClick:ye},n(s(t)("addGoodsCategory")),1)])]),_:1},8,["label"])):g("",!0),_.value==="brand"?(p(),m(c,{key:4,label:s(t)("goodsBrand")},{default:a(()=>[d(F,{modelValue:o.brand_id,"onUpdate:modelValue":e[7]||(e[7]=l=>o.brand_id=l),placeholder:s(t)("brandPlaceholder"),clearable:""},{default:a(()=>[(p(!0),v(x,null,V($,l=>(p(),m(U,{key:l.brand_id,label:l.brand_name,value:l.brand_id},null,8,["label","value"]))),128))]),_:1},8,["modelValue","placeholder"]),u("div",ul,[u("span",{class:"cursor-pointer text-primary mr-[10px]",onClick:e[8]||(e[8]=l=>ee(!0))},n(s(t)("refresh")),1),u("span",{class:"cursor-pointer text-primary",onClick:ve},n(s(t)("addGoodsBrand")),1)])]),_:1},8,["label"])):g("",!0),_.value==="poster"?(p(),m(c,{key:5,label:s(t)("goodsPoster")},{default:a(()=>[d(F,{modelValue:o.poster_id,"onUpdate:modelValue":e[9]||(e[9]=l=>o.poster_id=l),placeholder:s(t)("posterPlaceholder"),clearable:""},{default:a(()=>[(p(!0),v(x,null,V(j,l=>(p(),m(U,{key:l.id,label:l.name,value:l.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue","placeholder"]),u("div",_l,[u("span",{class:"cursor-pointer text-primary mr-[10px]",onClick:e[10]||(e[10]=l=>le(!0))},n(s(t)("refresh")),1),u("span",{class:"cursor-pointer text-primary",onClick:ge},n(s(t)("addGoodsPoster")),1)])]),_:1},8,["label"])):g("",!0),_.value==="gift"?(p(),m(c,{key:6,label:s(t)("isGift")},{default:a(()=>[u("div",null,[d(Z,{modelValue:o.is_gift,"onUpdate:modelValue":e[11]||(e[11]=l=>o.is_gift=l)},{default:a(()=>[d(D,{label:1},{default:a(()=>[f(n(s(t)("yes")),1)]),_:1}),d(D,{label:0},{default:a(()=>[f(n(s(t)("no")),1)]),_:1})]),_:1},8,["modelValue"]),u("div",ml,n(s(t)("giftTips")),1)])]),_:1},8,["label"])):g("",!0),_.value==="delivery"?(p(),v("div",cl,[d(c,{label:s(t)("deliveryType"),prop:"delivery_type"},{default:a(()=>[u("div",null,[d(K,{modelValue:o.delivery_type,"onUpdate:modelValue":e[12]||(e[12]=l=>o.delivery_type=l)},{default:a(()=>[(p(!0),v(x,null,V(G,(l,w)=>(p(),m(O,{key:w,label:l.key},{default:a(()=>[f(n(l.name),1)]),_:2},1032,["label"]))),128))]),_:1},8,["modelValue"]),G&&G.length?(p(),v("div",fl,"只针对实物商品有效")):g("",!0),he.value?(p(),v("div",yl,"请先在配置设置中设置配送方式")):g("",!0)])]),_:1},8,["label"]),N(d(c,{label:s(t)("isFreeShipping")},{default:a(()=>[d(ke,{modelValue:o.is_free_shipping,"onUpdate:modelValue":e[13]||(e[13]=l=>o.is_free_shipping=l),"active-value":1,"inactive-value":0},null,8,["modelValue"])]),_:1},8,["label"]),[[P,o.delivery_type.indexOf("express")!=-1]]),N(d(c,{label:s(t)("feeType"),prop:"fee_type"},{default:a(()=>[d(Z,{modelValue:o.fee_type,"onUpdate:modelValue":e[14]||(e[14]=l=>o.fee_type=l)},{default:a(()=>[d(D,{label:"template"},{default:a(()=>[f(n(s(t)("selectTemplate")),1)]),_:1}),d(D,{label:"fixed"},{default:a(()=>[f(n(s(t)("fixedShipping")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["label"]),[[P,o.delivery_type.indexOf("express")!=-1&&o.is_free_shipping==0]]),N(d(c,{label:s(t)("deliveryMoney"),prop:"delivery_money"},{default:a(()=>[d(Y,{modelValue:o.delivery_money,"onUpdate:modelValue":e[15]||(e[15]=l=>o.delivery_money=l),modelModifiers:{trim:!0},clearable:"",placeholder:"0.00",class:"input-width-short",maxlength:"8"},{append:a(()=>[f(n(s(t)("yuan")),1)]),_:1},8,["modelValue"])]),_:1},8,["label"]),[[P,o.delivery_type.indexOf("express")!=-1&&o.is_free_shipping==0&&o.fee_type=="fixed"]]),N(d(c,{label:s(t)("deliveryTemplateId"),prop:"delivery_template_id"},{default:a(()=>[d(F,{modelValue:o.delivery_template_id,"onUpdate:modelValue":e[16]||(e[16]=l=>o.delivery_template_id=l),placeholder:s(t)("deliveryTemplateIdPlaceholder"),filterable:"",autocomplete:"off",clearable:""},{default:a(()=>[(p(!0),v(x,null,V(q,l=>(p(),m(U,{key:l.template_id,label:l.template_name,value:l.template_id},null,8,["label","value"]))),128))]),_:1},8,["modelValue","placeholder"]),u("div",vl,[u("span",{class:"cursor-pointer text-primary mr-[10px]",onClick:te},n(s(t)("refresh")),1),u("span",{class:"cursor-pointer text-primary",onClick:be},n(s(t)("addDeliveryTemplateId")),1)])]),_:1},8,["label"]),[[P,o.delivery_type.indexOf("express")!=-1&&o.is_free_shipping==0&&o.fee_type=="template"]])])):g("",!0),_.value==="stock"?(p(),v("div",gl,[d(c,{label:s(t)("setStock"),prop:"stock_type"},{default:a(()=>[d(Z,{modelValue:o.stock_type,"onUpdate:modelValue":e[17]||(e[17]=l=>o.stock_type=l)},{default:a(()=>[d(D,{label:"inc"},{default:a(()=>[f(n(s(t)("addStock")),1)]),_:1}),d(D,{label:"dec"},{default:a(()=>[f(n(s(t)("reduceStock")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["label"]),d(c,{label:s(t)("stockNum"),prop:""},{default:a(()=>[d(Y,{modelValue:o.stock,"onUpdate:modelValue":e[18]||(e[18]=l=>o.stock=l),modelModifiers:{trim:!0},clearable:"",placeholder:"0",class:"input-width-short","show-word-limit":"",maxlength:"8",onKeyup:e[19]||(e[19]=l=>s(ae)(l)),onBlur:e[20]||(e[20]=l=>o.stock=l.target.value)},null,8,["modelValue"])]),_:1},8,["label"]),u("div",hl,n(s(t)("stockNumTips")),1)])):g("",!0),_.value==="diy_form"?(p(),m(c,{key:9,label:s(t)("diyForm")},{default:a(()=>[d(F,{modelValue:o.form_id,"onUpdate:modelValue":e[21]||(e[21]=l=>o.form_id=l),placeholder:s(t)("diyFormPlaceholder"),clearable:""},{default:a(()=>[(p(!0),v(x,null,V(A,l=>(p(),m(U,{key:l.form_id,label:l.page_title,value:l.form_id},null,8,["label","value"]))),128))]),_:1},8,["modelValue","placeholder"]),u("div",bl,[u("span",{class:"cursor-pointer text-primary mr-[10px]",onClick:e[22]||(e[22]=l=>oe(!0))},n(s(t)("refresh")),1),u("span",{class:"cursor-pointer text-primary",onClick:xe},n(s(t)("addDiyForm")),1)])]),_:1},8,["label"])):g("",!0)]),_:1})]),_:1})]),_:1},8,["model","rules"])),[[Se,S.value]])]),_:1},8,["modelValue","title"])}}});const tt=rl(Vl,[["__scopeId","data-v-2c56a25f"]]);export{tt as default};
