import{d as $,x as k,r as b,a2 as G,h,c as C,e as l,w as a,a as i,t as s,u as o,R as q,s as E,q as t,c1 as y,i as _,F as z,T as A,v as Y,B as U,K as H,L as J,aw as Q,a7 as W,au as X,av as Z,a1 as ee,E as le,c4 as te,M as oe,Y as ne}from"./index-904cb7a2.js";/* empty css                   *//* empty css                *//* empty css                          *//* empty css                  *//* empty css                       *//* empty css                 *//* empty css                *//* empty css                    */import"./el-form-item-4ed993c7.js";/* empty css                 */import{u as ae,v as se}from"./order-8e8307b0.js";const ie={class:"main-container"},re={class:"flex justify-between items-center"},ue={class:"text-page-title"},de={class:"panel-title !text-sm pl-[15px]"},_e={class:"!text-sm"},pe={class:"text-[12px] text-[#a9a9a9] leading-normal mt-[5px]"},me={class:"panel-title !text-sm pl-[15px]"},fe={class:"!text-sm"},ve={class:"text-[12px] text-[#a9a9a9] leading-normal mt-[5px]"},ce={class:"panel-title !text-sm pl-[15px]"},he={class:"!text-sm"},xe={class:"text-[12px] text-[#a9a9a9] leading-normal mt-[5px]"},ge={class:"panel-title !text-sm pl-[15px]"},be={class:"panel-title !text-sm pl-[15px]"},Ve={class:"flex"},we={class:"mx-[10px]"},Ce={class:"mr-[10px]"},Ee={key:0,class:"fixed-footer-wrap"},ye={class:"fixed-footer"},qe=$({__name:"config",setup(Ie){const B=k().meta.title,n=b({close_length:"10",finish_length:"1",invoice_content:[""],invoice_type:[],is_close:"1",is_finish:"1",is_invoice:"1",no_allow_refund:"1",refund_length:"1",is_evaluate:1,evaluate_is_to_examine:1,evaluate_is_show:1}),N=b({close_length:[{validator:(p,e,u)=>n.value.is_close!="2"?e==""?u(new Error(t("CloseLengthPlaceholder"))):Number(e)>=10&&Number(e)<=1440?u():u(new Error(t("closeOrderInfoBottom"))):u(),trigger:"blur"}],finish_length:[{validator:(p,e,u)=>n.value.is_finish!="2"?e==""?u(new Error(t("finishLengthPlaceholder"))):Number(e)>=1&&Number(e)<=30?u():u(new Error(t("confirmBottom"))):u(),trigger:"blur"}],refund_length:[{validator:(p,e,u)=>n.value.no_allow_refund!="2"?e==""?u(new Error(t("validRefundLengthPlaceholder"))):Number(e)>=1&&Number(e)<=30?u():u(new Error(t("refundBottom"))):u(),trigger:"blur"}],invoice_type:[{validator:(p,e,u)=>n.value.is_invoice==="1"?e.length?u():u(new Error(t("invoiceTypePlaceholder"))):u(),trigger:"change"}]}),f=b(!1),I=()=>{f.value=!0,ae().then(p=>{Object.values(p.data).forEach(e=>{n.value=Object.assign(n.value,e)}),n.value.invoice_content.length||n.value.invoice_content.push(""),f.value=!1}).catch(()=>{f.value=!1})},O=()=>{n.value.invoice_content.push("")},F=p=>{n.value.invoice_content.splice(p,1)};I();const L=b(),T=async p=>{await p.validate(async e=>{e&&(f.value=!0,se(n.value).then(u=>{I()}).catch(()=>{f.value=!1}))})};return(p,e)=>{const u=H,d=J,x=Q,c=W,m=X,g=Z,M=G("CircleCloseFilled"),P=ee,R=le,K=te,j=oe,D=ne;return h(),C("div",ie,[l(c,{class:"box-card !border-none",shadow:"never"},{default:a(()=>[i("div",re,[i("span",ue,s(o(B)),1)]),q((h(),E(j,{model:n.value,"label-width":"95",ref_key:"formRef",ref:L,rules:N.value,class:"page-form"},{default:a(()=>[l(c,{class:"box-card !border-none",shadow:"never"},{default:a(()=>[i("h3",de,s(o(t)("closeOrderInfo")),1),l(d,{prop:"close_length"},{default:a(()=>[i("div",null,[i("p",_e,[i("span",null,s(o(t)("closeOrderInfoLeft")),1),l(u,{modelValue:n.value.close_length,"onUpdate:modelValue":e[0]||(e[0]=r=>n.value.close_length=r),modelModifiers:{trim:!0},class:"!w-[120px] mx-[10px]",onKeyup:e[1]||(e[1]=r=>o(y)(r)),clearable:""},null,8,["modelValue"]),i("span",null,s(o(t)("closeOrderInfoRight")),1)]),i("p",pe,s(o(t)("closeOrderInfoBottom")),1)])]),_:1}),l(d,{prop:"is_close"},{default:a(()=>[l(x,{modelValue:n.value.is_close,"onUpdate:modelValue":e[2]||(e[2]=r=>n.value.is_close=r),label:o(t)("isClose"),"true-label":"1","false-label":"2"},null,8,["modelValue","label"])]),_:1})]),_:1}),l(c,{class:"box-card !border-none",shadow:"never"},{default:a(()=>[i("h3",me,s(o(t)("confirm")),1),l(d,{prop:"finish_length"},{default:a(()=>[i("div",null,[i("p",fe,[i("span",null,s(o(t)("confirmLeft")),1),l(u,{modelValue:n.value.finish_length,"onUpdate:modelValue":e[3]||(e[3]=r=>n.value.finish_length=r),modelModifiers:{trim:!0},class:"!w-[120px] mx-[10px]",onKeyup:e[4]||(e[4]=r=>o(y)(r)),clearable:""},null,8,["modelValue"]),i("span",null,s(o(t)("confirmRight")),1)]),i("p",ve,s(o(t)("confirmBottom")),1)])]),_:1}),l(d,{prop:"is_finish"},{default:a(()=>[l(x,{modelValue:n.value.is_finish,"onUpdate:modelValue":e[5]||(e[5]=r=>n.value.is_finish=r),label:o(t)("isFinish"),"true-label":"1","false-label":"2"},null,8,["modelValue","label"])]),_:1})]),_:1}),l(c,{class:"box-card !border-none",shadow:"never"},{default:a(()=>[i("h3",ce,s(o(t)("refund")),1),l(d,{prop:"refund_length"},{default:a(()=>[i("div",null,[i("p",he,[i("span",null,s(o(t)("refundLeft")),1),l(u,{modelValue:n.value.refund_length,"onUpdate:modelValue":e[6]||(e[6]=r=>n.value.refund_length=r),modelModifiers:{trim:!0},class:"!w-[120px] mx-[10px]",onKeyup:e[7]||(e[7]=r=>o(y)(r)),clearable:""},null,8,["modelValue"]),i("span",null,s(o(t)("refundRight")),1)]),i("p",xe,s(o(t)("refundBottom")),1)])]),_:1}),l(d,{prop:"no_allow_refund"},{default:a(()=>[l(x,{modelValue:n.value.no_allow_refund,"onUpdate:modelValue":e[8]||(e[8]=r=>n.value.no_allow_refund=r),label:o(t)("noAllowRefund"),"true-label":"1","false-label":"2"},null,8,["modelValue","label"])]),_:1})]),_:1}),l(c,{class:"box-card !border-none",shadow:"never"},{default:a(()=>[i("h3",ge,s(o(t)("evaluate")),1),l(d,{prop:"refund_length"},{default:a(()=>[i("span",null,s(o(t)("isEvaluate")),1),l(g,{class:"mx-[10px]",modelValue:n.value.is_evaluate,"onUpdate:modelValue":e[9]||(e[9]=r=>n.value.is_evaluate=r)},{default:a(()=>[l(m,{label:1},{default:a(()=>[_(s(o(t)("isEvaluateOpen")),1)]),_:1}),l(m,{label:0},{default:a(()=>[_(s(o(t)("isEvaluateClose")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1}),l(d,{prop:"refund_length"},{default:a(()=>[i("span",null,s(o(t)("evaluateIsToExamine")),1),l(g,{class:"mx-[10px]",modelValue:n.value.evaluate_is_to_examine,"onUpdate:modelValue":e[10]||(e[10]=r=>n.value.evaluate_is_to_examine=r)},{default:a(()=>[l(m,{label:1},{default:a(()=>[_(s(o(t)("isEvaluateOpen")),1)]),_:1}),l(m,{label:0},{default:a(()=>[_(s(o(t)("isEvaluateClose")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1}),l(d,{prop:"refund_length"},{default:a(()=>[i("span",null,s(o(t)("evaluateIsShow")),1),l(g,{class:"mx-[10px]",modelValue:n.value.evaluate_is_show,"onUpdate:modelValue":e[11]||(e[11]=r=>n.value.evaluate_is_show=r)},{default:a(()=>[l(m,{label:1},{default:a(()=>[_(s(o(t)("isEvaluateOpen")),1)]),_:1}),l(m,{label:0},{default:a(()=>[_(s(o(t)("isEvaluateClose")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1}),l(c,{class:"box-card !border-none",shadow:"never"},{default:a(()=>[i("h3",be,s(o(t)("invoice")),1),l(d,null,{default:a(()=>[i("span",null,s(o(t)("isInvoice")),1),l(g,{class:"mx-[10px]",modelValue:n.value.is_invoice,"onUpdate:modelValue":e[12]||(e[12]=r=>n.value.is_invoice=r)},{default:a(()=>[l(m,{label:"2"},{default:a(()=>[_(s(o(t)("isInvoiceClose")),1)]),_:1}),l(m,{label:"1"},{default:a(()=>[_(s(o(t)("isInvoiceOpen")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1}),l(d,{class:"invoice"},{default:a(()=>[i("div",Ve,[i("div",null,s(o(t)("invoiceContent")),1),i("div",we,[(h(!0),C(z,null,A(n.value.invoice_content,(r,v)=>(h(),E(d,{prop:`invoice_content[${v}]`,key:v,rules:[{validator:(V,S,w)=>n.value.is_invoice==="1"&&S===""?w(o(t)("invoicePlaceholder")):w(),trigger:"blur"}]},{default:a(()=>[i("div",{class:Y(["w-[120px] relative",v?"mt-[15px]":""])},[l(u,{modelValue:n.value.invoice_content[v],"onUpdate:modelValue":V=>n.value.invoice_content[v]=V,modelModifiers:{trim:!0},class:"!w-[120px]",clearable:""},null,8,["modelValue","onUpdate:modelValue"]),v?(h(),E(P,{key:0,color:"rgba(0, 0, 0, 0.3)",class:"!absolute right-[-6px] top-[-5px]",onClick:V=>F(v)},{default:a(()=>[l(M)]),_:2},1032,["onClick"])):U("",!0)],2)]),_:2},1032,["prop","rules"]))),128))]),l(R,{onClick:O},{default:a(()=>[_(s(o(t)("insert")),1)]),_:1})])]),_:1}),l(d,{prop:"invoice_type"},{default:a(()=>[i("span",Ce,s(o(t)("invoiceType")),1),l(K,{modelValue:n.value.invoice_type,"onUpdate:modelValue":e[13]||(e[13]=r=>n.value.invoice_type=r)},{default:a(()=>[l(x,{label:"1"},{default:a(()=>[_(s(o(t)("electronicInvoice")),1)]),_:1}),l(x,{label:"2"},{default:a(()=>[_(s(o(t)("paperInvoice")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1},8,["model","rules"])),[[D,f.value]]),f.value?U("",!0):(h(),C("div",Ee,[i("div",ye,[l(R,{type:"primary",onClick:e[14]||(e[14]=r=>T(L.value))},{default:a(()=>[_(s(o(t)("save")),1)]),_:1})])]))]),_:1})])}}});export{qe as default};
