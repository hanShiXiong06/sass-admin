import{d as E,r as d,l as N,q as i,h as B,s as F,w as n,a as f,e as t,i as b,t as g,u as r,K as U,L as w,M,E as R,X as q}from"./index-904cb7a2.js";/* empty css                  *//* empty css                   *//* empty css                  *//* empty css                */import L from"./index-e888fa8d.js";import"./el-form-item-4ed993c7.js";/* empty css                 */import{s as $}from"./order-8e8307b0.js";const K={class:"dialog-footer"},O=E({__name:"invoice-dialog",emits:["complete"],setup(P,{expose:V,emit:k}){const u=d(!1),o=d({invoice_number:"",remark:"",invoice_voucher:""}),m=d(!1);let v=0;const x=async(l=null)=>{l&&(v=l.id,o.value.invoice_number=l.invoice_number,o.value.remark=l.remark,o.value.invoice_voucher=l.invoice_voucher)},h=async l=>{m.value||!l||await l.validate(async e=>{if(e){m.value=!0;const s=o.value;$(v,s).then(c=>{k("complete"),u.value=!1,m.value=!1}).catch(()=>{m.value=!1})}})},p=d(),y=N(()=>({invoice_number:[{required:!0,message:i("invoiceNumberPlaceholder"),trigger:"blur"}]}));return V({invoiceDialog:u,setInvoiceData:x}),(l,e)=>{const s=U,c=w,I=L,D=M,_=R,C=q;return B(),F(C,{modelValue:u.value,"onUpdate:modelValue":e[5]||(e[5]=a=>u.value=a),title:r(i)("invoice"),width:"420px"},{footer:n(()=>[f("span",K,[t(_,{onClick:e[3]||(e[3]=a=>u.value=!1)},{default:n(()=>[b(g(r(i)("cancel")),1)]),_:1}),t(_,{type:"primary",loading:m.value,onClick:e[4]||(e[4]=a=>h(p.value))},{default:n(()=>[b(g(r(i)("confirm")),1)]),_:1},8,["loading"])])]),default:n(()=>[f("div",null,[t(D,{model:o.value,ref_key:"makeInvoiceFormRef",ref:p,rules:r(y),"label-width":"80px","label-position":"right"},{default:n(()=>[t(c,{label:r(i)("invoiceNumber"),prop:"invoice_number"},{default:n(()=>[t(s,{modelValue:o.value.invoice_number,"onUpdate:modelValue":e[0]||(e[0]=a=>o.value.invoice_number=a),modelModifiers:{trim:!0},maxlength:"30"},null,8,["modelValue"])]),_:1},8,["label"]),t(c,{label:r(i)("invoiceVoucher"),prop:"invoice_voucher"},{default:n(()=>[t(I,{modelValue:o.value.invoice_voucher,"onUpdate:modelValue":e[1]||(e[1]=a=>o.value.invoice_voucher=a)},null,8,["modelValue"])]),_:1},8,["label"]),t(c,{label:r(i)("remark"),prop:"remark"},{default:n(()=>[t(s,{modelValue:o.value.remark,"onUpdate:modelValue":e[2]||(e[2]=a=>o.value.remark=a),modelModifiers:{trim:!0},type:"textarea",maxlength:"200","show-word-limit":""},null,8,["modelValue"])]),_:1},8,["label"])]),_:1},8,["model","rules"])])]),_:1},8,["modelValue","title"])}}});export{O as _};
