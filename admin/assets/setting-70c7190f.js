import{d as R,y as D,r as f,q as $,s as l,aO as q,Q as B,U as V,h as k,c as I,R as K,v as T,w as s,e as a,a as p,t as i,u as t,i as g,c6 as A,K as N,L as F,a7 as L,E as O,M as Q,Y as W}from"./index-0e396751.js";/* empty css                   *//* empty css                */import{_ as Y}from"./index.vue_vue_type_style_index_0_lang-95e0c00f.js";/* empty css                  *//* empty css                */import"./el-form-item-4ed993c7.js";/* empty css                 */import{b as j,c as z,e as G}from"./wxoplatform-3612e95d.js";/* empty css                  *//* empty css                    */const H={class:"main-container"},J={class:"panel-title !text-sm"},X={class:"panel-title !text-sm"},Z={class:"form-tip"},ee={class:"panel-title !text-sm"},le={class:"panel-title !text-sm"},ae={class:"input-width"},oe={class:"form-tip"},te={class:"fixed-footer-wrap"},se={class:"fixed-footer"},be=R({__name:"setting",setup(re){D().meta.title;const _=f(!0),r=f({app_id:"",app_secret:"",token:"",aes_key:"",develop_app_id:"",develop_upload_private_key:""}),d=f({});j().then(({data:n})=>{d.value=n}),z().then(({data:n})=>{r.value=n,_.value=!1});const y=f(),w=$({app_id:[{required:!0,message:l("appidPlaceholder"),trigger:"blur"}],app_secret:[{required:!0,message:l("appSecretPlaceholder"),trigger:"blur"}],token:[{required:!0,message:l("tokenPlaceholder"),trigger:"blur"}],aes_key:[{required:!0,message:l("aesKeyPlaceholder"),trigger:"blur"}]}),x=()=>{r.value.aes_key=A(43)},C=async n=>{_.value||!n||await n.validate(async e=>{e&&(_.value=!0,G(r.value).then(()=>{_.value=!1}).catch(()=>{_.value=!1}))})},{copy:P,isSupported:U,copied:b}=q(),c=n=>{if(!U.value){V({message:l("notSupportCopy"),type:"warning"});return}P(n)};return B(b,()=>{b.value&&V({message:l("copySuccess"),type:"success"})}),(n,e)=>{const m=N,u=F,v=L,h=O,M=Y,S=Q,E=W;return k(),I("div",H,[K((k(),T(S,{model:r.value,rules:w,"label-width":"150px",ref_key:"formRef",ref:y,class:"page-form"},{default:s(()=>[a(v,{class:"box-card !border-none",shadow:"never"},{default:s(()=>[p("h3",J,i(t(l)("oplatformSetting")),1),a(u,{label:"APPID",prop:"app_id"},{default:s(()=>[a(m,{modelValue:r.value.app_id,"onUpdate:modelValue":e[0]||(e[0]=o=>r.value.app_id=o),modelModifiers:{trim:!0},placeholder:t(l)("appidPlaceholder"),class:"input-width",clearable:""},null,8,["modelValue","placeholder"])]),_:1}),a(u,{label:"APPSECRET",prop:"app_secret"},{default:s(()=>[a(m,{modelValue:r.value.app_secret,"onUpdate:modelValue":e[1]||(e[1]=o=>r.value.app_secret=o),modelModifiers:{trim:!0},placeholder:t(l)("appSecretPlaceholder"),class:"input-width",clearable:""},null,8,["modelValue","placeholder"])]),_:1})]),_:1}),a(v,{class:"box-card mt-[15px] !border-none",shadow:"never"},{default:s(()=>[p("h3",X,i(t(l)("messagesReceiving")),1),a(u,{label:t(l)("empowerReceiveUrl")},{default:s(()=>[a(m,{modelValue:d.value.auth_serve_url,"onUpdate:modelValue":e[3]||(e[3]=o=>d.value.auth_serve_url=o),modelModifiers:{trim:!0},placeholder:"Please input",class:"!w-[500px]",readonly:!0},{append:s(()=>[p("div",{class:"cursor-pointer",onClick:e[2]||(e[2]=o=>c(d.value.auth_serve_url))},i(t(l)("copy")),1)]),_:1},8,["modelValue"])]),_:1},8,["label"]),a(u,{label:t(l)("messageReceiveUrl")},{default:s(()=>[a(m,{modelValue:d.value.message_serve_url,"onUpdate:modelValue":e[5]||(e[5]=o=>d.value.message_serve_url=o),modelModifiers:{trim:!0},placeholder:"Please input",class:"!w-[500px]",readonly:!0},{append:s(()=>[p("div",{class:"cursor-pointer",onClick:e[4]||(e[4]=o=>c(d.value.message_serve_url))},i(t(l)("copy")),1)]),_:1},8,["modelValue"])]),_:1},8,["label"]),a(u,{label:t(l)("messageValidationToken"),prop:"token"},{default:s(()=>[a(m,{modelValue:r.value.token,"onUpdate:modelValue":e[6]||(e[6]=o=>r.value.token=o),modelModifiers:{trim:!0},class:"input-width",clearable:""},null,8,["modelValue"])]),_:1},8,["label"]),a(u,{label:t(l)("messageDecryptKey"),prop:"aes_key"},{default:s(()=>[a(m,{modelValue:r.value.aes_key,"onUpdate:modelValue":e[8]||(e[8]=o=>r.value.aes_key=o),modelModifiers:{trim:!0},class:"input-width"},{append:s(()=>[p("div",{class:"cursor-pointer",onClick:e[7]||(e[7]=o=>c(r.value.aes_key))},i(t(l)("copy")),1)]),_:1},8,["modelValue"]),p("div",Z,[g(i(t(l)("messageDecryptKeyTips")),1),a(h,{type:"primary",link:"",onClick:x},{default:s(()=>[g(i(t(l)("regenerate")),1)]),_:1})])]),_:1},8,["label"])]),_:1}),a(v,{class:"box-card mt-[15px] !border-none",shadow:"never"},{default:s(()=>[p("h3",ee,i(t(l)("domainSetting")),1),a(u,{label:t(l)("empowerStartDomain")},{default:s(()=>[a(m,{modelValue:d.value.auth_launch_domain,"onUpdate:modelValue":e[10]||(e[10]=o=>d.value.auth_launch_domain=o),modelModifiers:{trim:!0},placeholder:"Please input",class:"input-width",readonly:!0},{append:s(()=>[p("div",{class:"cursor-pointer",onClick:e[9]||(e[9]=o=>c(d.value.auth_launch_domain))},i(t(l)("copy")),1)]),_:1},8,["modelValue"])]),_:1},8,["label"]),a(u,{label:t(l)("wechatDomain")},{default:s(()=>[a(m,{modelValue:d.value.wechat_auth_domain,"onUpdate:modelValue":e[12]||(e[12]=o=>d.value.wechat_auth_domain=o),modelModifiers:{trim:!0},placeholder:"Please input",class:"input-width",readonly:!0},{append:s(()=>[p("div",{class:"cursor-pointer",onClick:e[11]||(e[11]=o=>c(d.value.wechat_auth_domain))},i(t(l)("copy")),1)]),_:1},8,["modelValue"])]),_:1},8,["label"])]),_:1}),a(v,{class:"box-card mt-[15px] !border-none",shadow:"never"},{default:s(()=>[p("h3",le,i(t(l)("developerWeappUpload")),1),a(u,{label:t(l)("developAppid"),prop:"develop_app_id"},{default:s(()=>[a(m,{modelValue:r.value.develop_app_id,"onUpdate:modelValue":e[13]||(e[13]=o=>r.value.develop_app_id=o),modelModifiers:{trim:!0},placeholder:t(l)("developAppidPlaceholder"),class:"input-width",clearable:""},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),a(u,{label:t(l)("uploadKey"),prop:"develop_upload_private_key"},{default:s(()=>[p("div",ae,[a(M,{modelValue:r.value.develop_upload_private_key,"onUpdate:modelValue":e[14]||(e[14]=o=>r.value.develop_upload_private_key=o),api:"sys/document/wechat"},null,8,["modelValue"])]),p("div",oe,i(t(l)("uploadIpTips"))+i(d.value.upload_ip),1)]),_:1},8,["label"])]),_:1})]),_:1},8,["model","rules"])),[[E,_.value]]),p("div",te,[p("div",se,[a(h,{type:"primary",loading:_.value,onClick:e[15]||(e[15]=o=>C(y.value))},{default:s(()=>[g(i(t(l)("save")),1)]),_:1},8,["loading"])])])])}}});export{be as default};
