import{d as P,x as I,r as y,n as k,l as T,h as g,c as U,e as a,w as p,a as c,t as r,u as e,q as o,R as S,s as E,i as F,cz as R,cA as B,aW as D,a7 as M,K,L as N,M as A,E as L,Y as $}from"./index-904cb7a2.js";/* empty css                   *//* empty css                  *//* empty css                */import{_ as j}from"./index.vue_vue_type_style_index_0_lang-51a9298e.js";import"./el-form-item-4ed993c7.js";/* empty css                 *//* empty css                *//* empty css                 *//* empty css                    */const q={class:"main-container"},z={class:"flex justify-between items-center"},W={class:"text-page-title"},Y={class:"mt-[20px]"},G={class:"panel-title !text-sm"},H={class:"form-tip"},J={class:"form-tip"},O={class:"input-width"},Q={class:"form-tip"},X={class:"input-width"},Z={class:"form-tip"},ee={class:"panel-title !text-sm"},ae={class:"form-tip"},te={class:"input-width"},le={class:"input-width"},oe={class:"input-width"},ie={class:"fixed-footer-wrap"},ce={class:"fixed-footer"},ve=P({__name:"transfer",setup(pe){const b=I().meta.title,n=y(!1),t=k({...{wechatpay_config:{mch_id:"",mch_secret_key:"",mch_secret_cert:"",mch_public_cert_path:""},alipay_config:{app_secret_cert:"",app_public_cert_path:"",alipay_public_cert_path:"",alipay_root_cert_path:"",app_id:""}}});(async()=>{n.value=!0;const _=await(await R("transfer")).data;_&&_.length&&(t.wechatpay_config=_[0].config,t.alipay_config=_[1].config),n.value=!1})();const h=y(),w=T(()=>({})),v=async _=>{n.value||!_||await _.validate(async l=>{l&&(n.value=!0,B(t).then(m=>{n.value=!1}).catch(()=>{n.value=!1}))})};return(_,l)=>{const f=D,m=M,u=K,s=N,d=j,V=A,x=L,C=$;return g(),U("div",q,[a(m,{class:"box-card !border-none",shadow:"never"},{default:p(()=>[c("div",z,[c("span",W,r(e(b)),1)]),c("div",Y,[a(f,{title:e(o)("operationTip"),type:"warning","show-icon":""},null,8,["title"])])]),_:1}),S((g(),E(V,{class:"page-form",model:t,"label-width":"200px",ref_key:"formRef",ref:h,rules:e(w)},{default:p(()=>[a(m,{class:"box-card mt-[15px] !border-none",shadow:"never"},{default:p(()=>[c("h3",G,r(e(o)("wechatpay")),1),a(s,{label:e(o)("mchId"),prop:"wechatpay_config.mch_id"},{default:p(()=>[a(u,{modelValue:t.wechatpay_config.mch_id,"onUpdate:modelValue":l[0]||(l[0]=i=>t.wechatpay_config.mch_id=i),modelModifiers:{trim:!0},placeholder:e(o)("mchIdPlaceholder"),class:"input-width",maxlength:"32","show-word-limit":"",clearable:""},null,8,["modelValue","placeholder"]),c("div",H,r(e(o)("mchIdTips")),1)]),_:1},8,["label"]),a(s,{label:e(o)("mchSecretKey"),prop:"wechatpay_config.mch_secret_key"},{default:p(()=>[a(u,{modelValue:t.wechatpay_config.mch_secret_key,"onUpdate:modelValue":l[1]||(l[1]=i=>t.wechatpay_config.mch_secret_key=i),modelModifiers:{trim:!0},placeholder:e(o)("mchSecretKeyPlaceholder"),class:"input-width",maxlength:"32","show-word-limit":"",clearable:""},null,8,["modelValue","placeholder"]),c("div",J,r(e(o)("mchSecretKeyTips")),1)]),_:1},8,["label"]),a(s,{label:e(o)("mchSecretCert"),prop:"wechatpay_config.mch_secret_cert"},{default:p(()=>[c("div",O,[a(d,{modelValue:t.wechatpay_config.mch_secret_cert,"onUpdate:modelValue":l[2]||(l[2]=i=>t.wechatpay_config.mch_secret_cert=i),api:"sys/document/wechat"},null,8,["modelValue"])]),c("div",Q,r(e(o)("mchSecretCertTips")),1)]),_:1},8,["label"]),a(s,{label:e(o)("mchPublicCertPath"),prop:"wechatpay_config.mch_public_cert_path"},{default:p(()=>[c("div",X,[a(d,{modelValue:t.wechatpay_config.mch_public_cert_path,"onUpdate:modelValue":l[3]||(l[3]=i=>t.wechatpay_config.mch_public_cert_path=i),api:"sys/document/wechat"},null,8,["modelValue"])]),c("div",Z,r(e(o)("mchPublicCertPathTips")),1)]),_:1},8,["label"])]),_:1}),a(m,{class:"box-card mt-[15px] !border-none",shadow:"never"},{default:p(()=>[c("h3",ee,r(e(o)("alipay")),1),a(s,{label:e(o)("appId"),prop:"alipay_config.app_id"},{default:p(()=>[a(u,{modelValue:t.alipay_config.app_id,"onUpdate:modelValue":l[4]||(l[4]=i=>t.alipay_config.app_id=i),modelModifiers:{trim:!0},placeholder:e(o)("appIdPlaceholder"),class:"input-width",maxlength:"32","show-word-limit":"",clearable:""},null,8,["modelValue","placeholder"]),c("div",ae,r(e(o)("appIdTips")),1)]),_:1},8,["label"]),a(s,{label:e(o)("appSecretCert"),prop:"alipay_config.app_secret_cert"},{default:p(()=>[a(u,{modelValue:t.alipay_config.app_secret_cert,"onUpdate:modelValue":l[5]||(l[5]=i=>t.alipay_config.app_secret_cert=i),modelModifiers:{trim:!0},placeholder:e(o)("appSecretCertPlaceholder"),class:"input-width",type:"textarea",rows:"4",clearable:""},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),a(s,{label:e(o)("appPublicCertPath"),prop:"alipay_config.app_public_cert_path"},{default:p(()=>[c("div",te,[a(d,{modelValue:t.alipay_config.app_public_cert_path,"onUpdate:modelValue":l[6]||(l[6]=i=>t.alipay_config.app_public_cert_path=i),api:"sys/document/aliyun"},null,8,["modelValue"])])]),_:1},8,["label"]),a(s,{label:e(o)("alipayPublicCertPath"),prop:"alipay_config.alipay_public_cert_path"},{default:p(()=>[c("div",le,[a(d,{modelValue:t.alipay_config.alipay_public_cert_path,"onUpdate:modelValue":l[7]||(l[7]=i=>t.alipay_config.alipay_public_cert_path=i),api:"sys/document/aliyun"},null,8,["modelValue"])])]),_:1},8,["label"]),a(s,{label:e(o)("alipayRootCertPath"),prop:"alipay_config.alipay_root_cert_path"},{default:p(()=>[c("div",oe,[a(d,{modelValue:t.alipay_config.alipay_root_cert_path,"onUpdate:modelValue":l[8]||(l[8]=i=>t.alipay_config.alipay_root_cert_path=i),api:"sys/document/aliyun"},null,8,["modelValue"])])]),_:1},8,["label"])]),_:1})]),_:1},8,["model","rules"])),[[C,n.value]]),c("div",ie,[c("div",ce,[a(x,{type:"primary",loading:n.value,onClick:l[9]||(l[9]=i=>v(h.value))},{default:p(()=>[F(r(e(o)("save")),1)]),_:1},8,["loading"])])])])}}});export{ve as default};
