import{d as Z,r as p,n as ee,l as le,q as o,h as d,s as c,w as r,a as _,e as n,i as k,t as f,u as s,R as ae,c as y,B as g,F as R,T as S,A as te,a3 as M,U as oe,aW as re,au as se,av as ne,L as ie,ac as de,aD as pe,K as ue,M as _e,ad as me,ae as ce,E as ye,X as ve,Y as fe}from"./index-904cb7a2.js";/* empty css                   *//* empty css                  *//* empty css                   *//* empty css                  *//* empty css                 *//* empty css                    */import"./el-tooltip-4ed993c7.js";/* empty css                  *//* empty css                     *//* empty css                        *//* empty css               *//* empty css                *//* empty css                 *//* empty css                  *//* empty css                  */import"./el-form-item-4ed993c7.js";/* empty css                       *//* empty css                 *//* empty css                 */import{j as ge}from"./delivery-2973e36f.js";import{i as xe,j as he}from"./order-68eec8ec.js";import{l as be}from"./weapp-20eea152.js";const Ee=_("p",null,"您已开通微信小程序发货信息管理服务，平台会将发货信息以消息的形式推送给购买的微信用户。",-1),De=_("p",null,"注意：每个订单只能更新一次发货信息，请谨慎操作！",-1),Ve={class:"flex cursor-pointer"},ke={class:"flex items-center min-w-[50px] mr-[10px]"},we=["src"],Ce={key:1,class:"w-[50px] h-[50px]",src:"",alt:""},Ne={class:"flex flex-col"},Te={class:"multi-hidden text-[14px]"},Fe={key:0,class:"text-[#999] text-[12px]"},Pe={class:"dialog-footer"},tl=Z({__name:"delivery-action",emits:["complete"],setup(Be,{expose:U,emit:q}){const m=p(!1),u=p(!1),w=p([]),x=p(!1),h=p([]),C=p(!1);ge({}).then(a=>{w.value=a.data}),be().then(a=>{C.value=a.data.is_trade_managed});const b=p([]),l=ee({...{order_id:0,delivery_type:"",express_company_id:"",express_number:"",order_goods_ids:[]}}),N=p(),A=le(()=>({delivery_type:[{required:!0,message:o("deliveryTypePlaceholder"),trigger:"blur"}],express_company_id:[{required:!0,validator:L,trigger:"blur"}],express_number:[{required:!0,validator:j,trigger:"blur"}]})),L=(a,e,i)=>{l.delivery_type=="express"&&e===""?i(new Error(o("companyPlaceholder"))):i()},j=(a,e,i)=>{l.delivery_type=="express"&&e===""?i(new Error(o("expressNumberPlaceholder"))):i()},I=(a,e)=>!(a.status==2||a.delivery_status=="delivery_finish"),E=p([]),T=()=>{let a=[];l.delivery_type&&l.delivery_type=="virtual"?b.value.forEach((e,i)=>{e.goods_type=="virtual"&&a.push(e)}):l.delivery_type&&l.delivery_type!="virtual"&&b.value.forEach((e,i)=>{e.goods_type!="virtual"&&a.push(e)}),E.value=M(a)},O=a=>{l.order_goods_ids=M([]);for(const e in a)l.order_goods_ids.push(a[e].order_goods_id)},G=async a=>{if(!(u.value||!a)){if(l.order_goods_ids.length<=0){oe({message:o("orderGoodsPlaceholder"),type:"warning"});return}await a.validate(async e=>{e&&(u.value=!0,xe(l).then(D=>{u.value=!1,m.value=!1,q("complete"),F()}).catch(D=>{u.value=!1,m.value=!1,F()}))})}},$=async(a=null)=>{if(u.value=!0,a){l.order_id=a.order_id,l.delivery_type="",b.value=a.order_goods,E.value=a.order_goods,x.value=!1,await he({delivery_type:a.delivery_type}).then(e=>{h.value=e.data;for(const i in e.data){l.delivery_type=i;break}T()});for(let e=0;e<a.order_goods.length;e++)if(a.order_goods[e].goods_type=="virtual"){x.value=!0;break}x.value==!0&&Object.assign(h.value,{virtual:o("virtualDelivery")})}u.value=!1},F=()=>{l.order_id=0,l.delivery_type="",l.express_company_id="",l.express_number="",l.order_goods_ids=[]};return U({showDialog:m,setFormData:$}),(a,e)=>{const i=re,D=se,z=ne,V=ie,H=de,K=pe,W=ue,X=_e,v=me,Y=ce,P=ye,J=ve,Q=fe;return d(),c(J,{modelValue:m.value,"onUpdate:modelValue":e[5]||(e[5]=t=>m.value=t),title:s(o)("delivery"),width:"700px",class:"diy-dialog-wrap","destroy-on-close":!0},{footer:r(()=>[_("span",Pe,[n(P,{onClick:e[3]||(e[3]=t=>m.value=!1)},{default:r(()=>[k(f(s(o)("cancel")),1)]),_:1}),n(P,{type:"primary",loading:u.value,onClick:e[4]||(e[4]=t=>G(N.value))},{default:r(()=>[k(f(s(o)("confirm")),1)]),_:1},8,["loading"])])]),default:r(()=>[ae((d(),y("div",null,[C.value?(d(),c(i,{key:0,type:"warning",closable:!1,class:"!mb-[10px]"},{default:r(()=>[Ee,De]),_:1})):g("",!0),n(X,{model:l,"label-width":"100px",ref_key:"formRef",ref:N,rules:s(A),class:"page-form mb-[30px]"},{default:r(()=>[n(V,{label:s(o)("deliveryType"),prop:"delivery_type"},{default:r(()=>[n(z,{modelValue:l.delivery_type,"onUpdate:modelValue":e[0]||(e[0]=t=>l.delivery_type=t),onChange:T},{default:r(()=>[(d(!0),y(R,null,S(h.value,(t,B)=>(d(),c(D,{label:B,key:B},{default:r(()=>[k(f(t),1)]),_:2},1032,["label"]))),128))]),_:1},8,["modelValue"])]),_:1},8,["label"]),l.delivery_type=="express"?(d(),c(V,{key:0,label:s(o)("company"),prop:"express_company_id"},{default:r(()=>[n(K,{modelValue:l.express_company_id,"onUpdate:modelValue":e[1]||(e[1]=t=>l.express_company_id=t),placeholder:s(o)("companyPlaceholder"),class:"input-width"},{default:r(()=>[(d(!0),y(R,null,S(w.value,t=>(d(),c(H,{key:t.index,label:t.company_name,value:t.company_id},null,8,["label","value"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"])):g("",!0),l.delivery_type=="express"?(d(),c(V,{key:1,label:s(o)("expressNumber"),prop:"express_number"},{default:r(()=>[n(W,{modelValue:l.express_number,"onUpdate:modelValue":e[2]||(e[2]=t=>l.express_number=t),modelModifiers:{trim:!0},clearable:"",placeholder:s(o)("expressNumberPlaceholder"),class:"input-width",maxlength:"30"},null,8,["modelValue","placeholder"])]),_:1},8,["label"])):g("",!0)]),_:1},8,["model","rules"]),n(Y,{data:E.value,size:"large",onSelectionChange:O},{default:r(()=>[n(v,{type:"selection",width:"55",selectable:I}),n(v,{prop:"goods_name",label:s(o)("goodsName"),"min-width":"200"},{default:r(({row:t})=>[_("div",Ve,[_("div",ke,[t.goods_image?(d(),y("img",{key:0,class:"w-[50px] h-[50px]",src:s(te)(t.goods_image),alt:""},null,8,we)):(d(),y("img",Ce))]),_("div",Ne,[_("span",Te,f(t.goods_name),1),t.sku_name?(d(),y("span",Fe,f(t.sku_name),1)):g("",!0)])])]),_:1},8,["label"]),n(v,{prop:"num",label:s(o)("num"),"min-width":"80"},null,8,["label"]),n(v,{prop:"status_name",label:s(o)("refundStatusName"),"min-width":"80"},null,8,["label"]),n(v,{prop:"delivery_status_name",label:s(o)("deliveryStatusName"),"min-width":"80",align:"right"},null,8,["label"])]),_:1},8,["data"])])),[[Q,u.value]])]),_:1},8,["modelValue","title"])}}});export{tl as _};
