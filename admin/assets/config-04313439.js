import{d as D,x as $,f as z,r as y,n as V,l as j,q as e,aP as K,Q as O,U as k,h as g,c as I,e as t,w as l,u as o,aQ as Q,R as L,s as x,a as n,t as i,B as W,i as f,aR as F,a7 as G,K as H,L as Y,au as J,av as X,M as Z,E as ee,Y as oe}from"./index-99f00cf3.js";/* empty css                   *//* empty css                  *//* empty css                *//* empty css                       *//* empty css                 */import te from"./index-015c0c3e.js";import"./el-form-item-4ed993c7.js";/* empty css                 *//* empty css                *//* empty css                   *//* empty css                       */import{g as ae,b as le,e as re}from"./wechat-814a14b3.js";/* empty css                        */import"./index.vue_vue_type_style_index_0_lang-2e54ab99.js";/* empty css                  *//* empty css                   */import"./attachment-6fc096d0.js";import"./index.vue_vue_type_script_setup_true_lang-a59c79e6.js";/* empty css               *//* empty css                  *//* empty css                  *//* empty css                     *//* empty css                  *//* empty css                      *//* empty css                    */import"./el-tooltip-4ed993c7.js";/* empty css                 *//* empty css               *//* empty css               *//* empty css                    *//* empty css                    */import"./el-dropdown-item-4ed993c7.js";import"./index.vue_vue_type_script_setup_true_lang-bde8c802.js";/* empty css                   */import"./index.vue_vue_type_script_setup_true_lang-49ab6f2c.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./sortable.esm-be94e56d.js";const se={class:"main-container"},ie={class:"panel-title !text-sm"},ne={class:"form-tip"},de={class:"panel-title !text-sm"},pe={class:"form-tip"},ce={class:"form-tip"},ue={class:"panel-title !text-sm"},me={class:"form-tip"},_e={class:"form-tip"},he={class:"form-tip"},fe={class:"form-tip"},be={class:"form-tip"},ge={class:"flex"},ve={class:"panel-title !text-sm"},we={class:"form-tip"},ye={class:"fixed-footer-wrap"},Ve={class:"fixed-footer"},no=D({__name:"config",setup(ke){const P=$();z();const S=P.meta.title,m=y(!0),r=V({wechat_name:"",wechat_original:"",app_id:"",app_secret:"",qr_code:"",token:"",encoding_aes_key:"",encryption_type:"not_encrypt",is_authorization:0}),v=y(),E=j(()=>({wechat_name:[{required:!0,message:e("wechatNamePlaceholder"),trigger:"blur"}],wechat_original:[{required:!0,message:e("wechatOriginalPlaceholder"),trigger:"blur"}],app_id:[{required:!0,message:e("appidPlaceholder"),trigger:"blur"}],app_secret:[{required:!r.is_authorization,message:e("appSecretPlaceholder"),trigger:"blur"}],token:[{required:!0,message:e("tokenPlaceholder"),trigger:"blur"}],encoding_aes_key:[{required:!0,message:e("encodingAesKeyPlaceholder"),trigger:"blur"}]}));ae().then(p=>{Object.assign(r,p.data),m.value=!1});const u=V({business_domain:"",js_secure_domain:"",serve_url:"",web_auth_domain:""});le().then(p=>{Object.assign(u,p.data),m.value=!1});const{copy:M,isSupported:C,copied:w}=K(),h=p=>{if(!C.value){k({message:e("notSupportCopy"),type:"warning"});return}M(p)};O(w,()=>{w.value&&k({message:e("copySuccess"),type:"success"})});const T=async p=>{m.value||!p||await p.validate(async a=>{a&&(m.value=!0,re(r).then(()=>{m.value=!1}).catch(()=>{m.value=!1}))})};return(p,a)=>{const q=F,_=G,c=H,d=Y,R=te,b=J,U=X,A=Z,N=ee,B=oe;return g(),I("div",se,[t(_,{class:"card !border-none",shadow:"never"},{default:l(()=>[t(q,{content:o(S),icon:o(Q),onBack:a[0]||(a[0]=s=>p.$router.back())},null,8,["content","icon"])]),_:1}),L((g(),x(A,{class:"page-form mt-[15px]",model:r,"label-width":"150px",ref_key:"formRef",ref:v,rules:o(E)},{default:l(()=>[t(_,{class:"box-card !border-none",shadow:"never"},{default:l(()=>[n("h3",ie,i(o(e)("wechatInfo")),1),t(d,{label:o(e)("wechatName"),prop:"wechat_name"},{default:l(()=>[t(c,{modelValue:r.wechat_name,"onUpdate:modelValue":a[1]||(a[1]=s=>r.wechat_name=s),modelModifiers:{trim:!0},placeholder:o(e)("wechatNamePlaceholder"),class:"input-width",clearable:"",readonly:r.is_authorization},null,8,["modelValue","placeholder","readonly"])]),_:1},8,["label"]),t(d,{label:o(e)("wechatOriginal"),prop:"wechat_original"},{default:l(()=>[t(c,{modelValue:r.wechat_original,"onUpdate:modelValue":a[2]||(a[2]=s=>r.wechat_original=s),modelModifiers:{trim:!0},placeholder:o(e)("wechatOriginalPlaceholder"),class:"input-width",clearable:"",readonly:r.is_authorization},null,8,["modelValue","placeholder","readonly"])]),_:1},8,["label"]),t(d,{label:o(e)("wechatQrcode"),prop:"qr_code"},{default:l(()=>[t(R,{modelValue:r.qr_code,"onUpdate:modelValue":a[3]||(a[3]=s=>r.qr_code=s)},null,8,["modelValue"]),n("div",ne,i(o(e)("wechatQrcodeTips")),1)]),_:1},8,["label"])]),_:1}),t(_,{class:"box-card !border-none mt-[15px]",shadow:"never"},{default:l(()=>[n("h3",de,i(o(e)("wechatDevelopInfo")),1),t(d,{label:o(e)("wechatAppid"),prop:"app_id"},{default:l(()=>[t(c,{modelValue:r.app_id,"onUpdate:modelValue":a[4]||(a[4]=s=>r.app_id=s),modelModifiers:{trim:!0},placeholder:o(e)("appidPlaceholder"),class:"input-width",clearable:"",readonly:r.is_authorization},null,8,["modelValue","placeholder","readonly"]),n("div",pe,i(o(e)("wechatAppidTips")),1)]),_:1},8,["label"]),r.is_authorization?W("",!0):(g(),x(d,{key:0,label:o(e)("wechatAppsecret"),prop:"app_secret"},{default:l(()=>[t(c,{modelValue:r.app_secret,"onUpdate:modelValue":a[5]||(a[5]=s=>r.app_secret=s),modelModifiers:{trim:!0},placeholder:o(e)("appSecretPlaceholder"),class:"input-width",clearable:""},null,8,["modelValue","placeholder"]),n("div",ce,i(o(e)("wechatAppsecretTips")),1)]),_:1},8,["label"]))]),_:1}),t(_,{class:"box-card !border-none mt-[15px]",shadow:"never"},{default:l(()=>[n("h3",ue,i(o(e)("theServerSetting")),1),t(d,{label:"URL"},{default:l(()=>[t(c,{"model-value":u.serve_url,placeholder:"Please input",class:"input-width",readonly:!0},{append:l(()=>[n("div",{class:"cursor-pointer",onClick:a[6]||(a[6]=s=>h(u.serve_url))},i(o(e)("copy")),1)]),_:1},8,["model-value"])]),_:1}),t(d,{label:"Token",prop:"token"},{default:l(()=>[t(c,{modelValue:r.token,"onUpdate:modelValue":a[7]||(a[7]=s=>r.token=s),modelModifiers:{trim:!0},placeholder:o(e)("tokenPlaceholder"),class:"input-width",maxlength:"32","show-word-limit":"",clearable:""},null,8,["modelValue","placeholder"]),n("div",me,i(o(e)("tokenTips")),1)]),_:1}),t(d,{label:"EncodingAESKey",prop:"encoding_aes_key"},{default:l(()=>[t(c,{modelValue:r.encoding_aes_key,"onUpdate:modelValue":a[8]||(a[8]=s=>r.encoding_aes_key=s),modelModifiers:{trim:!0},placeholder:o(e)("encodingAesKeyPlaceholder"),class:"input-width",maxlength:"43","show-word-limit":"",clearable:""},null,8,["modelValue","placeholder"]),n("div",_e,i(o(e)("encodingAESKeyTips")),1)]),_:1}),t(d,{label:o(e)("encryptionType"),prop:"encryption_type"},{default:l(()=>[t(U,{modelValue:r.encryption_type,"onUpdate:modelValue":a[9]||(a[9]=s=>r.encryption_type=s)},{default:l(()=>[t(b,{label:"not_encrypt"},{default:l(()=>[f(i(o(e)("cleartextMode")),1)]),_:1}),t(b,{label:"compatible"},{default:l(()=>[f(i(o(e)("compatibleMode")),1)]),_:1}),t(b,{label:"safe"},{default:l(()=>[f(i(o(e)("safeMode")),1)]),_:1})]),_:1},8,["modelValue"]),n("div",he,i(o(e)("cleartextModeTips")),1),n("div",fe,i(o(e)("compatibleModeTips")),1),n("div",be,i(o(e)("safeModeTips")),1)]),_:1},8,["label"])]),_:1}),t(_,{class:"box-card !border-none mt-[15px]",shadow:"never"},{default:l(()=>[n("div",ge,[n("h3",ve,i(o(e)("functionSetting")),1)]),t(d,{label:""},{default:l(()=>[n("div",we,i(o(e)("functionSettingTips")),1)]),_:1}),t(d,{label:o(e)("businessDomain")},{default:l(()=>[t(c,{"model-value":u.business_domain,placeholder:"Please input",class:"input-width",readonly:!0},{append:l(()=>[n("div",{class:"cursor-pointer",onClick:a[10]||(a[10]=s=>h(u.business_domain))},i(o(e)("copy")),1)]),_:1},8,["model-value"])]),_:1},8,["label"]),t(d,{label:o(e)("jsSecureDomain")},{default:l(()=>[t(c,{"model-value":u.js_secure_domain,placeholder:"Please input",class:"input-width",readonly:!0},{append:l(()=>[n("div",{class:"cursor-pointer",onClick:a[11]||(a[11]=s=>h(u.business_domain))},i(o(e)("copy")),1)]),_:1},8,["model-value"])]),_:1},8,["label"]),t(d,{label:o(e)("webAuthDomain")},{default:l(()=>[t(c,{"model-value":u.web_auth_domain,placeholder:"Please input",class:"input-width",readonly:!0},{append:l(()=>[n("div",{class:"cursor-pointer",onClick:a[12]||(a[12]=s=>h(u.business_domain))},i(o(e)("copy")),1)]),_:1},8,["model-value"])]),_:1},8,["label"])]),_:1})]),_:1},8,["model","rules"])),[[B,m.value]]),n("div",ye,[n("div",Ve,[t(N,{type:"primary",loading:m.value,onClick:a[13]||(a[13]=s=>T(v.value))},{default:l(()=>[f(i(o(e)("save")),1)]),_:1},8,["loading"])])])])}}});export{no as default};