import{O as c,d as U,r as h,q as D,m as j,s as l,h as v,v as V,w as s,a as M,e as t,br as y,i as w,t as k,u as a,R as T,K as x,L as I,M as F,E as R,X as B,Y as C}from"./index-0e396751.js";/* empty css                   *//* empty css                  *//* empty css                   *//* empty css                  *//* empty css                */import"./el-form-item-4ed993c7.js";/* empty css                 */function ee(i){return c.get("tk_jhkd/shop_order",{params:i})}function $(i){return c.get(`tk_jhkd/shop_order/${i}`)}function L(i){return c.post("tk_jhkd/shop_order",i,{showErrorMessage:!0,showSuccessMessage:!0})}function K(i){return c.put(`tk_jhkd/shop_order/${i.id}`,i,{showErrorMessage:!0,showSuccessMessage:!0})}function le(i){return c.delete(`tk_jhkd/shop_order/${i}`,{showErrorMessage:!0,showSuccessMessage:!0})}const X={class:"dialog-footer"},re=U({__name:"shop-order-edit",emits:["complete"],setup(i,{expose:P,emit:S}){let u=h(!1);const m=h(!1),f={id:"",order_no:"",delivery_id:"",yida_order_no:"",order_status_name:"",is_pick:"",is_send:"",close_time:"",delete_time:""},r=D({...f}),g=h(),O=j(()=>({order_no:[{required:!0,message:l("orderNoPlaceholder"),trigger:"blur"}],delivery_id:[{required:!0,message:l("deliveryIdPlaceholder"),trigger:"blur"}],yida_order_no:[{required:!0,message:l("yidaOrderNoPlaceholder"),trigger:"blur"}],order_status_name:[{required:!0,message:l("orderStatusNamePlaceholder"),trigger:"blur"}],is_pick:[{required:!0,message:l("isPickPlaceholder"),trigger:"blur"}],is_send:[{required:!0,message:l("isSendPlaceholder"),trigger:"blur"}],close_time:[{required:!0,message:l("closeTimePlaceholder"),trigger:"blur"}],delete_time:[{required:!0,message:l("deleteTimePlaceholder"),trigger:"blur"}]})),N=async p=>{if(m.value||!p)return;let e=r.id?K:L;await p.validate(async d=>{d&&(m.value=!0,e(r).then(_=>{m.value=!1,u.value=!1,S("complete")}).catch(_=>{m.value=!1}))})};return P({showDialog:u,setFormData:async(p=null)=>{if(Object.assign(r,f),m.value=!0,p){const e=await(await $(p.id)).data;e&&Object.keys(r).forEach(d=>{e[d]!=null&&(r[d]=e[d])})}m.value=!1}}),(p,e)=>{const d=x,n=I,_=F,b=R,q=B,E=C;return v(),V(q,{modelValue:a(u),"onUpdate:modelValue":e[10]||(e[10]=o=>y(u)?u.value=o:u=o),title:r.id?a(l)("updateShopOrder"):a(l)("addShopOrder"),width:"50%",class:"diy-dialog-wrap","destroy-on-close":!0},{footer:s(()=>[M("span",X,[t(b,{onClick:e[8]||(e[8]=o=>y(u)?u.value=!1:u=!1)},{default:s(()=>[w(k(a(l)("cancel")),1)]),_:1}),t(b,{type:"primary",loading:m.value,onClick:e[9]||(e[9]=o=>N(g.value))},{default:s(()=>[w(k(a(l)("confirm")),1)]),_:1},8,["loading"])])]),default:s(()=>[T((v(),V(_,{model:r,"label-width":"120px",ref_key:"formRef",ref:g,rules:a(O),class:"page-form"},{default:s(()=>[t(n,{label:a(l)("orderNo"),prop:"order_no"},{default:s(()=>[t(d,{modelValue:r.order_no,"onUpdate:modelValue":e[0]||(e[0]=o=>r.order_no=o),clearable:"",placeholder:a(l)("orderNoPlaceholder"),class:"input-width"},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),t(n,{label:a(l)("deliveryId")},{default:s(()=>[t(d,{modelValue:r.delivery_id,"onUpdate:modelValue":e[1]||(e[1]=o=>r.delivery_id=o),clearable:"",placeholder:a(l)("deliveryIdPlaceholder"),class:"input-width"},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),t(n,{label:a(l)("yidaOrderNo")},{default:s(()=>[t(d,{modelValue:r.yida_order_no,"onUpdate:modelValue":e[2]||(e[2]=o=>r.yida_order_no=o),clearable:"",placeholder:a(l)("yidaOrderNoPlaceholder"),class:"input-width"},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),t(n,{label:a(l)("orderStatusName")},{default:s(()=>[t(d,{modelValue:r.order_status_name,"onUpdate:modelValue":e[3]||(e[3]=o=>r.order_status_name=o),clearable:"",placeholder:a(l)("orderStatusNamePlaceholder"),class:"input-width"},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),t(n,{label:a(l)("isPick")},{default:s(()=>[t(d,{modelValue:r.is_pick,"onUpdate:modelValue":e[4]||(e[4]=o=>r.is_pick=o),clearable:"",placeholder:a(l)("isPickPlaceholder"),class:"input-width"},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),t(n,{label:a(l)("isSend")},{default:s(()=>[t(d,{modelValue:r.is_send,"onUpdate:modelValue":e[5]||(e[5]=o=>r.is_send=o),clearable:"",placeholder:a(l)("isSendPlaceholder"),class:"input-width"},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),t(n,{label:a(l)("closeTime")},{default:s(()=>[t(d,{modelValue:r.close_time,"onUpdate:modelValue":e[6]||(e[6]=o=>r.close_time=o),clearable:"",placeholder:a(l)("closeTimePlaceholder"),class:"input-width"},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),t(n,{label:a(l)("deleteTime")},{default:s(()=>[t(d,{modelValue:r.delete_time,"onUpdate:modelValue":e[7]||(e[7]=o=>r.delete_time=o),clearable:"",placeholder:a(l)("deleteTimePlaceholder"),class:"input-width"},null,8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1},8,["model","rules"])),[[E,m.value]])]),_:1},8,["modelValue","title"])}}});export{re as _,le as d,ee as g};
