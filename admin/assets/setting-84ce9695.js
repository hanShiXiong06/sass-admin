import{O as y,d as w,x,r as m,n as N,h as C,c as q,e as a,w as p,a as i,t as _,u as f,i as U,q as k,K as I,L as E,M as K,a7 as M,E as A}from"./index-904cb7a2.js";/* empty css                  *//* empty css                *//* empty css                */import B from"./index-e888fa8d.js";import"./el-form-item-4ed993c7.js";/* empty css                 */import{_ as R}from"./_plugin-vue_export-helper-c27b6911.js";/* empty css                        */import"./index.vue_vue_type_style_index_0_lang-68b58aeb.js";/* empty css                  *//* empty css                   */import"./attachment-731ba4e8.js";/* empty css                   */import"./index.vue_vue_type_script_setup_true_lang-e98f54f2.js";/* empty css               *//* empty css                  *//* empty css                  *//* empty css                     *//* empty css                  *//* empty css                      *//* empty css                    */import"./el-tooltip-4ed993c7.js";/* empty css                 *//* empty css               *//* empty css               *//* empty css                    *//* empty css                    */import"./el-dropdown-item-4ed993c7.js";import"./index.vue_vue_type_script_setup_true_lang-a9b96fa2.js";/* empty css                   */import"./index.vue_vue_type_script_setup_true_lang-ee99396e.js";import"./sortable.esm-be94e56d.js";function D(){return y.get("seafox_pay/setting/getConfig")}function F(s){return y.post("seafox_pay/setting/setConfig",s)}const j={class:"main-container"},L={class:"flex justify-between items-center"},O={class:"text-page-title"},S={class:"fixed-footer-wrap"},T={class:"fixed-footer"},$=w({__name:"setting",setup(s){const V=x().meta.title,d=m(!0),e=N({firstClassMerchantNo:"",public_encryption:"",public_autograph:"",scancode_encryption:"",scancode_autograph:"",merchant_privateKey:"",merchant_cannelName:"",receiptAppIds:"",app_product_wechat_qrcode:"",app_product_alipay_qrcode:""}),u=m();D().then(l=>{e.firstClassMerchantNo=l.data.firstClassMerchantNo,e.public_encryption=l.data.public_encryption,e.public_autograph=l.data.public_autograph,e.scancode_encryption=l.data.scancode_encryption,e.scancode_autograph=l.data.scancode_autograph,e.merchant_privateKey=l.data.merchant_privateKey,e.merchant_cannelName=l.data.merchant_cannelName,e.receiptAppIds=l.data.receiptAppIds,e.app_product_wechat_qrcode=l.data.app_product_wechat_qrcode,e.app_product_alipay_qrcode=l.data.app_product_alipay_qrcode,d.value=!1});const g=async l=>{d.value||!l||await l.validate(async t=>{if(t){d.value=!0;const n={...e};F(n).then(()=>{d.value=!1}).catch(()=>{d.value=!1})}})};return(l,t)=>{const n=I,r=E,c=B,h=K,b=M,v=A;return C(),q("div",j,[a(b,{class:"box-card !border-none",shadow:"never"},{default:p(()=>[i("div",L,[i("span",O,_(f(V)),1)]),a(h,{class:"page-form mt-[20px]",model:e,"label-width":"150px",ref_key:"formRef",ref:u},{default:p(()=>[a(r,{label:"商户编号"},{default:p(()=>[a(n,{modelValue:e.firstClassMerchantNo,"onUpdate:modelValue":t[0]||(t[0]=o=>e.firstClassMerchantNo=o),class:"input-width"},null,8,["modelValue"])]),_:1}),a(r,{label:"公共产品的加密key"},{default:p(()=>[a(n,{modelValue:e.public_encryption,"onUpdate:modelValue":t[1]||(t[1]=o=>e.public_encryption=o),class:"input-width"},null,8,["modelValue"])]),_:1}),a(r,{label:"公共产品的签名key"},{default:p(()=>[a(n,{modelValue:e.public_autograph,"onUpdate:modelValue":t[2]||(t[2]=o=>e.public_autograph=o),class:"input-width"},null,8,["modelValue"])]),_:1}),a(r,{label:"扫码产品的加密key"},{default:p(()=>[a(n,{modelValue:e.scancode_encryption,"onUpdate:modelValue":t[3]||(t[3]=o=>e.scancode_encryption=o),class:"input-width"},null,8,["modelValue"])]),_:1}),a(r,{label:"扫码产品的签名key"},{default:p(()=>[a(n,{modelValue:e.scancode_autograph,"onUpdate:modelValue":t[4]||(t[4]=o=>e.scancode_autograph=o),class:"input-width"},null,8,["modelValue"])]),_:1}),a(r,{label:"商户私钥"},{default:p(()=>[a(n,{modelValue:e.merchant_privateKey,"onUpdate:modelValue":t[5]||(t[5]=o=>e.merchant_privateKey=o),class:"input-width"},null,8,["modelValue"])]),_:1}),a(r,{label:"渠道名"},{default:p(()=>[a(n,{modelValue:e.merchant_cannelName,"onUpdate:modelValue":t[6]||(t[6]=o=>e.merchant_cannelName=o),class:"input-width"},null,8,["modelValue"])]),_:1}),a(r,{label:"小程序appid"},{default:p(()=>[a(n,{modelValue:e.receiptAppIds,"onUpdate:modelValue":t[7]||(t[7]=o=>e.receiptAppIds=o),class:"input-width"},null,8,["modelValue"])]),_:1}),a(r,{label:"app报备微信图片"},{default:p(()=>[i("div",null,[a(c,{modelValue:e.app_product_wechat_qrcode,"onUpdate:modelValue":t[8]||(t[8]=o=>e.app_product_wechat_qrcode=o)},null,8,["modelValue"])])]),_:1}),a(r,{label:"app报备支付宝图片"},{default:p(()=>[i("div",null,[a(c,{modelValue:e.app_product_alipay_qrcode,"onUpdate:modelValue":t[9]||(t[9]=o=>e.app_product_alipay_qrcode=o)},null,8,["modelValue"])])]),_:1})]),_:1},8,["model"])]),_:1}),i("div",S,[i("div",T,[a(v,{type:"primary",loading:d.value,onClick:t[10]||(t[10]=o=>g(u.value))},{default:p(()=>[U(_(f(k)("save")),1)]),_:1},8,["loading"])])])])}}});const Ne=R($,[["__scopeId","data-v-b54f4f36"]]);export{Ne as default};
