import{d as K,r as _,n as S,l as x,q as a,h as V,s as k,w as s,a as h,e as o,i as f,t as m,u as t,R,ca as F,cb as M,au as C,av as A,L as I,K as N,M as j,E as L,X as O,Y as T}from"./index-99f00cf3.js";/* empty css                   *//* empty css                  *//* empty css                   *//* empty css                  *//* empty css                *//* empty css                 */import"./el-form-item-4ed993c7.js";/* empty css                       *//* empty css                 */const $={class:"form-tip"},G={class:"dialog-footer"},oe=K({__name:"storage-qiniu",emits:["complete"],setup(X,{expose:q,emit:w}){const n=_(!1),u=_(!0),g={storage_type:"",bucket:"",access_key:"",secret_key:"",domain:"",is_use:""},l=S({...g}),b=_(),D=x(()=>({bucket:[{required:!0,message:a("qiniuBucketPlaceholder"),trigger:"blur"}],access_key:[{required:!0,message:a("qiniuAccessKeyPlaceholder"),trigger:"blur"}],secret_key:[{required:!0,message:a("qiniuSecretKeyPlaceholder"),trigger:"blur"}],endpoint:[{required:!0,message:a("aliEndpointPlaceholder"),trigger:"blur"}],domain:[{required:!0,message:a("domainPlaceholder"),trigger:"blur"}]})),E=async d=>{u.value||!d||await d.validate(async e=>{e&&(u.value=!0,F(l).then(v=>{u.value=!1,n.value=!1,w("complete")}).catch(()=>{u.value=!1}))})};return q({showDialog:n,setFormData:async(d=null)=>{if(u.value=!0,Object.assign(l,g),d){const e=await(await M(d.storage_type)).data;Object.keys(l).forEach(i=>{e[i]!=null&&(l[i]=e[i]),e.params[i]!=null&&(l[i]=e.params[i].value)})}u.value=!1}}),(d,e)=>{const i=C,v=A,c=I,p=N,P=j,y=L,B=O,U=T;return V(),k(B,{modelValue:n.value,"onUpdate:modelValue":e[7]||(e[7]=r=>n.value=r),title:t(a)("qiniuStorage"),width:"580px","destroy-on-close":!0},{footer:s(()=>[h("span",G,[o(y,{onClick:e[5]||(e[5]=r=>n.value=!1)},{default:s(()=>[f(m(t(a)("cancel")),1)]),_:1}),o(y,{type:"primary",loading:u.value,onClick:e[6]||(e[6]=r=>E(b.value))},{default:s(()=>[f(m(t(a)("confirm")),1)]),_:1},8,["loading"])])]),default:s(()=>[R((V(),k(P,{model:l,"label-width":"140px",ref_key:"formRef",ref:b,rules:t(D),class:"page-form"},{default:s(()=>[o(c,{label:t(a)("isUse")},{default:s(()=>[o(v,{modelValue:l.is_use,"onUpdate:modelValue":e[0]||(e[0]=r=>l.is_use=r)},{default:s(()=>[o(i,{label:"1"},{default:s(()=>[f(m(t(a)("startUsing")),1)]),_:1}),o(i,{label:"0"},{default:s(()=>[f(m(t(a)("statusDeactivate")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["label"]),o(c,{label:t(a)("qiniuBucket"),prop:"bucket"},{default:s(()=>[o(p,{modelValue:l.bucket,"onUpdate:modelValue":e[1]||(e[1]=r=>l.bucket=r),modelModifiers:{trim:!0},placeholder:t(a)("qiniuBucketPlaceholder"),class:"input-width","show-word-limit":"",clearable:""},null,8,["modelValue","placeholder"]),h("div",$,m(t(a)("qiniuBucketTips")),1)]),_:1},8,["label"]),o(c,{label:t(a)("qiniuAccessKey"),prop:"access_key"},{default:s(()=>[o(p,{modelValue:l.access_key,"onUpdate:modelValue":e[2]||(e[2]=r=>l.access_key=r),modelModifiers:{trim:!0},placeholder:t(a)("qiniuAccessKeyPlaceholder"),class:"input-width",clearable:""},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),o(c,{label:t(a)("qiniuSecretKey"),prop:"secret_key"},{default:s(()=>[o(p,{modelValue:l.secret_key,"onUpdate:modelValue":e[3]||(e[3]=r=>l.secret_key=r),modelModifiers:{trim:!0},placeholder:t(a)("qiniuSecretKeyPlaceholder"),class:"input-width",clearable:""},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),o(c,{label:t(a)("domain"),prop:"domain"},{default:s(()=>[o(p,{modelValue:l.domain,"onUpdate:modelValue":e[4]||(e[4]=r=>l.domain=r),modelModifiers:{trim:!0},placeholder:t(a)("domainPlaceholder"),class:"input-width",clearable:""},null,8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1},8,["model","rules"])),[[U,u.value]])]),_:1},8,["modelValue","title"])}}});export{oe as default};
