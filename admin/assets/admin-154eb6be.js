import{d as k,r as m,n as x,l as E,h as p,c as q,R as A,s as C,w as l,e as o,a as s,u,i as B,t as D,q as I,aW as U,K as F,L as P,a7 as R,M as N,E as L,Y as S}from"./index-99f00cf3.js";/* empty css                   *//* empty css                  *//* empty css                *//* empty css                */import{_ as $}from"./index.vue_vue_type_style_index_0_lang-bad0a04a.js";import"./el-form-item-4ed993c7.js";/* empty css                 *//* empty css                 */import{g as K,s as M}from"./config-ed9c7ed3.js";/* empty css                    */const T={class:"main-container"},W={class:"mb-4",style:{width:"640px"}},Y={class:"input-width"},j=s("div",{class:"form-tip"},"微信支付API证书（apiclient_key.pem）",-1),z={class:"input-width"},G=s("div",{class:"form-tip"},"微信支付API证书（apiclient_cert.pem）",-1),H={class:"fixed-footer-wrap"},J={class:"fixed-footer"},ce=k({__name:"admin",setup(O){const d=m(!0),f=m(),t=x({app_id:"",mch_id:"",mch_secret_key:"",mch_secret_cert:"",mch_public_cert_path:""}),h=E(()=>({app_id:[{required:!0,message:"请输入服务商商户名称",trigger:"blur"}],mch_id:[{required:!0,message:"请输入服务商商户名称",trigger:"blur"}],mch_secret_key:[{required:!0,message:"请输入V3密钥",trigger:"blur"}],mch_secret_cert:[{required:!0,message:"请上传私钥",trigger:"blur"}],mch_public_cert_path:[{required:!0,message:"请上传公钥",trigger:"blur"}]})),n=async()=>{const i=await K();console.log(i),d.value=!1;for(const e in t)t[e]=i.data[e]};n();const g=async()=>{await M(t),n()};return(i,e)=>{const b=U,c=F,r=P,_=$,V=R,y=N,v=L,w=S;return p(),q("div",T,[A((p(),C(y,{model:t,"label-width":"150px",ref_key:"ruleFormRef",ref:f,rules:u(h),class:"page-form"},{default:l(()=>[o(V,{class:"box-card !border-none",shadow:"never"},{default:l(()=>[s("div",W,[o(b,{type:"info",title:"配置微信支付服务商信息，站点可以使用服务商模式进行支付，支付通道名称“微信快捷支付”",closable:!1,"show-icon":""})]),o(r,{label:"服务商APPID",prop:"app_id"},{default:l(()=>[o(c,{modelValue:t.app_id,"onUpdate:modelValue":e[0]||(e[0]=a=>t.app_id=a),style:{width:"200px"},placeholder:"请输入服务商appid"},null,8,["modelValue"])]),_:1}),o(r,{label:"服务商商户号",prop:"mch_id"},{default:l(()=>[o(c,{modelValue:t.mch_id,"onUpdate:modelValue":e[1]||(e[1]=a=>t.mch_id=a),style:{width:"200px"},placeholder:"请输入服务商商户号"},null,8,["modelValue"])]),_:1}),o(r,{label:"V3密钥",prop:"mch_secret_key"},{default:l(()=>[o(c,{modelValue:t.mch_secret_key,"onUpdate:modelValue":e[2]||(e[2]=a=>t.mch_secret_key=a),style:{width:"200px"},placeholder:"请输入服务商V3密钥"},null,8,["modelValue"])]),_:1}),o(r,{label:"上传私钥证书",prop:"mch_secret_cert"},{default:l(()=>[s("div",Y,[o(_,{modelValue:t.mch_secret_cert,"onUpdate:modelValue":e[3]||(e[3]=a=>t.mch_secret_cert=a),api:"sys/document/wechat"},null,8,["modelValue"])]),j]),_:1}),o(r,{label:"上传公钥证书",prop:"mch_public_cert_path"},{default:l(()=>[s("div",z,[o(_,{modelValue:t.mch_public_cert_path,"onUpdate:modelValue":e[4]||(e[4]=a=>t.mch_public_cert_path=a),api:"sys/document/wechat"},null,8,["modelValue"])]),G]),_:1})]),_:1})]),_:1},8,["model","rules"])),[[w,d.value]]),s("div",H,[s("div",J,[o(v,{type:"primary",onClick:e[5]||(e[5]=a=>g())},{default:l(()=>[B(D(u(I)("save")),1)]),_:1})])])])}}});export{ce as default};
