import{d as oe,r as _,q as re,m as se,s as o,h as d,v,w as r,a as g,e as i,i as w,t as f,u as n,R as ie,c as p,C as h,F as E,T,B as ne,a3 as P,U as de,aW as _e,at as pe,au as ue,L as ce,ab as me,aC as ye,K as ve,M as fe,ac as ge,ad as he,E as xe,X as be,Y as we}from"./index-0e396751.js";/* empty css                   *//* empty css                  *//* empty css                   *//* empty css                  *//* empty css                 *//* empty css                    */import"./el-tooltip-4ed993c7.js";/* empty css                  *//* empty css                     *//* empty css                        *//* empty css               *//* empty css                *//* empty css                 *//* empty css                  *//* empty css                  */import"./el-form-item-4ed993c7.js";/* empty css                       *//* empty css                 *//* empty css                 */import{j as Ee}from"./delivery-fe1f6e47.js";import{i as Ve,j as De}from"./order-3f7fd991.js";import{l as ke}from"./weapp-aa1cc52a.js";import{a as Se,i as Ce,p as Te}from"./electronic_sheet-29211c03.js";import{l as Pe,g as Ne}from"./lodop-18d3c062.js";const Fe=g("p",null,"您已开通微信小程序发货信息管理服务，平台会将发货信息以消息的形式推送给购买的微信用户。",-1),Ie=g("p",null,"注意：每个订单只能更新一次发货信息，请谨慎操作！",-1),Re={class:"flex cursor-pointer"},Le={class:"flex items-center min-w-[50px] mr-[10px]"},Ue=["src"],Be={key:1,class:"w-[50px] h-[50px]",src:"",alt:""},Me={class:"flex flex-col items-start"},We={class:"multi-hidden text-[14px]"},qe={key:0,class:"text-[#999] text-[12px]"},Ae={key:1,class:"px-[4px] text-[12px] text-[#fff] rounded-[4px] bg-primary leading-[18px]"},Oe={class:"dialog-footer"},vt=oe({__name:"delivery-action",emits:["complete"],setup(je,{expose:q,emit:A}){const x=_(!1),u=_(!1),N=_([]),V=_(!1),D=_([]),F=_(!1);Ee({}).then(t=>{N.value=t.data}),ke().then(t=>{F.value=t.data.is_trade_managed}),Se().then(t=>{t.data&&Pe(t.data)});const I=_([]),k=_([]);Ce({status:1}).then(t=>{t.data&&(I.value=t.data)});const O=t=>{k.value=[],l.electronic_sheet_id="",I.value.forEach(e=>{e.express_company_id==t&&k.value.push(P(e))})},S=_([]),l=re({...{order_id:0,delivery_type:"",delivery_way:"manual_write",express_company_id:"",express_number:"",electronic_sheet_id:"",order_goods_ids:[]}}),R=_(),j=se(()=>({delivery_type:[{required:!0,message:o("deliveryTypePlaceholder"),trigger:"blur"}],express_company_id:[{required:!0,validator:G,trigger:"blur"}],express_number:[{required:!0,validator:H,trigger:"blur"}],electronic_sheet_id:[{required:!0,validator:$,trigger:"blur"}]})),G=(t,e,s)=>{l.delivery_type=="express"&&e===""?s(new Error(o("companyPlaceholder"))):s()},H=(t,e,s)=>{l.delivery_type=="express"&&l.delivery_way=="manual_write"&&e===""?s(new Error(o("expressNumberPlaceholder"))):s()},$=(t,e,s)=>{l.delivery_type=="express"&&l.delivery_way=="electronic_sheet"&&e===""?s(new Error(o("electronicSheetTemplatePlaceholder"))):s()},z=(t,e)=>!(t.status==2||t.delivery_status=="delivery_finish"||t.status==3||t.is_gift==1),C=_([]),L=()=>{const t=[];l.delivery_type&&l.delivery_type=="virtual"?S.value.forEach((e,s)=>{e.goods_type=="virtual"&&t.push(e)}):l.delivery_type&&l.delivery_type!="virtual"&&S.value.forEach((e,s)=>{e.goods_type!="virtual"&&t.push(e)}),C.value=P(t)},K=t=>{l.order_goods_ids=P([]);for(const e in t)l.order_goods_ids.push(t[e].order_goods_id)},X=async t=>{if(!(u.value||!t)){if(l.order_goods_ids.length<=0){de({message:o("orderGoodsPlaceholder"),type:"warning"});return}await t.validate(async e=>{e&&(u.value=!0,Ve(l).then(c=>{l.delivery_type=="express"&&l.delivery_way=="electronic_sheet"&&Q(),u.value=!1,x.value=!1,A("complete"),J()}).catch(()=>{u.value=!1}))})}},Y=async(t=null)=>{if(u.value=!0,t){l.order_id=t.order_id,l.delivery_type="",l.delivery_way="manual_write",S.value=t.order_goods,C.value=t.order_goods,V.value=!1,await De({delivery_type:t.delivery_type}).then(e=>{D.value=e.data;for(const s in e.data){l.delivery_type=s;break}L()});for(let e=0;e<t.order_goods.length;e++)if(t.order_goods[e].goods_type=="virtual"){V.value=!0;break}V.value&&Object.assign(D.value,{virtual:o("virtualDelivery")})}u.value=!1},J=()=>{l.order_id=0,l.delivery_type="",l.express_company_id="",l.electronic_sheet_id="",l.express_number="",l.order_goods_ids=[]},Q=()=>{const t=Ne();t&&Te({print_type:"multiple",order_id:l.order_id,electronic_sheet_id:l.electronic_sheet_id,order_goods_ids:l.order_goods_ids}).then(e=>{if(e.data){const s=e.data;let c=!1;t.PRINT_INIT("打印电子面单");for(let m=0;m<s.length;m++)if(s[m].success){const y=s[m].print_template;t.ADD_PRINT_HTM(0,0,"100%","100%",y),t.NewPage(),c=!0}c&&t.PREVIEW()}})};return q({showDialog:x,setFormData:Y}),(t,e)=>{const s=_e,c=pe,m=ue,y=ce,U=me,B=ye,Z=ve,ee=fe,b=ge,te=he,M=xe,le=be,ae=we;return d(),v(le,{modelValue:x.value,"onUpdate:modelValue":e[7]||(e[7]=a=>x.value=a),title:n(o)("delivery"),width:"700px",class:"diy-dialog-wrap","destroy-on-close":!0},{footer:r(()=>[g("span",Oe,[i(M,{onClick:e[5]||(e[5]=a=>x.value=!1)},{default:r(()=>[w(f(n(o)("cancel")),1)]),_:1}),i(M,{type:"primary",loading:u.value,onClick:e[6]||(e[6]=a=>X(R.value))},{default:r(()=>[w(f(n(o)("confirm")),1)]),_:1},8,["loading"])])]),default:r(()=>[ie((d(),p("div",null,[F.value?(d(),v(s,{key:0,type:"warning",closable:!1,class:"!mb-[10px]"},{default:r(()=>[Fe,Ie]),_:1})):h("",!0),i(ee,{model:l,"label-width":"100px",ref_key:"formRef",ref:R,rules:n(j),class:"page-form mb-[30px]"},{default:r(()=>[i(y,{label:n(o)("deliveryType"),prop:"delivery_type"},{default:r(()=>[i(m,{modelValue:l.delivery_type,"onUpdate:modelValue":e[0]||(e[0]=a=>l.delivery_type=a),onChange:L},{default:r(()=>[(d(!0),p(E,null,T(D.value,(a,W)=>(d(),v(c,{label:W,key:W},{default:r(()=>[w(f(a),1)]),_:2},1032,["label"]))),128))]),_:1},8,["modelValue"])]),_:1},8,["label"]),l.delivery_type=="express"?(d(),p(E,{key:0},[i(y,{label:n(o)("deliveryWay")},{default:r(()=>[i(m,{modelValue:l.delivery_way,"onUpdate:modelValue":e[1]||(e[1]=a=>l.delivery_way=a)},{default:r(()=>[i(c,{label:"manual_write"},{default:r(()=>[w(f(n(o)("manualWriteWay")),1)]),_:1}),i(c,{label:"electronic_sheet"},{default:r(()=>[w(f(n(o)("electronicSheetWay")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["label"]),i(y,{label:n(o)("company"),prop:"express_company_id"},{default:r(()=>[i(B,{modelValue:l.express_company_id,"onUpdate:modelValue":e[2]||(e[2]=a=>l.express_company_id=a),placeholder:n(o)("companyPlaceholder"),class:"input-width",onChange:O},{default:r(()=>[(d(!0),p(E,null,T(N.value,a=>(d(),v(U,{key:a.index,label:a.company_name,value:a.company_id},null,8,["label","value"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"]),l.delivery_way=="manual_write"?(d(),v(y,{key:0,label:n(o)("expressNumber"),prop:"express_number"},{default:r(()=>[i(Z,{modelValue:l.express_number,"onUpdate:modelValue":e[3]||(e[3]=a=>l.express_number=a),modelModifiers:{trim:!0},clearable:"",placeholder:n(o)("expressNumberPlaceholder"),class:"input-width",maxlength:"30"},null,8,["modelValue","placeholder"])]),_:1},8,["label"])):h("",!0),l.delivery_way=="electronic_sheet"?(d(),v(y,{key:1,label:n(o)("electronicSheetTemplate"),prop:"electronic_sheet_id"},{default:r(()=>[i(B,{modelValue:l.electronic_sheet_id,"onUpdate:modelValue":e[4]||(e[4]=a=>l.electronic_sheet_id=a),placeholder:n(o)("electronicSheetTemplatePlaceholder"),clearable:"",class:"input-width"},{default:r(()=>[(d(!0),p(E,null,T(k.value,a=>(d(),v(U,{key:a.id,label:a.template_name,value:a.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"])):h("",!0)],64)):h("",!0)]),_:1},8,["model","rules"]),i(te,{data:C.value,size:"large",onSelectionChange:K,"max-height":"400px"},{default:r(()=>[i(b,{type:"selection",width:"55",selectable:z}),i(b,{prop:"goods_name",label:n(o)("goodsName"),"min-width":"200"},{default:r(({row:a})=>[g("div",Re,[g("div",Le,[a.goods_image?(d(),p("img",{key:0,class:"w-[50px] h-[50px]",src:n(ne)(a.goods_image),alt:""},null,8,Ue)):(d(),p("img",Be))]),g("div",Me,[g("span",We,f(a.goods_name),1),a.sku_name?(d(),p("span",qe,f(a.sku_name),1)):h("",!0),a.is_gift==1?(d(),p("span",Ae,"赠品")):h("",!0)])])]),_:1},8,["label"]),i(b,{prop:"num",label:n(o)("num"),"min-width":"80"},null,8,["label"]),i(b,{prop:"status_name",label:n(o)("refundStatusName"),"min-width":"80"},null,8,["label"]),i(b,{prop:"delivery_status_name",label:n(o)("deliveryStatusName"),"min-width":"80",align:"right"},null,8,["label"])]),_:1},8,["data"])])),[[ae,u.value]])]),_:1},8,["modelValue","title"])}}});export{vt as _};
