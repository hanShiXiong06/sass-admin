import{d as L,r as c,n as x,l as B,q as e,h as p,s as f,w as i,a as R,e as r,br as w,i as k,t as P,u as o,R as N,c as O,F as j,T as S,ac as T,aD as K,L as M,K as W,M as X,E as Y,X as $,Y as z}from"./index-904cb7a2.js";/* empty css                   *//* empty css                  *//* empty css                   *//* empty css                  *//* empty css                *//* empty css                 */import"./el-form-item-4ed993c7.js";/* empty css               *//* empty css                  *//* empty css                  *//* empty css                     *//* empty css                  */import{e as A,a as G,g as H,b as J}from"./user-84b9352b.js";const Q={class:"dialog-footer"},_e=L({__name:"user-edit",emits:["complete"],setup(Z,{expose:y,emit:U}){let s=c(!1);const d=c(!1),_={id:"",cat_id:"",nickname:"",headimg:"",config_id:"",mobile:"",openid:"",unionid:"",email:"",num:""},l=x({..._}),b=c(),q=B(()=>({cat_id:[{required:!0,message:e("catIdPlaceholder"),trigger:"blur"}],nickname:[{required:!0,message:e("nicknamePlaceholder"),trigger:"blur"}],headimg:[{required:!0,message:e("headimgPlaceholder"),trigger:"blur"}],config_id:[{required:!0,message:e("configIdPlaceholder"),trigger:"blur"}],mobile:[{required:!0,message:e("mobilePlaceholder"),trigger:"blur"}],openid:[{required:!0,message:e("openidPlaceholder"),trigger:"blur"}],unionid:[{required:!0,message:e("unionidPlaceholder"),trigger:"blur"}],email:[{required:!0,message:e("emailPlaceholder"),trigger:"blur"}],num:[{required:!0,message:e("numPlaceholder"),trigger:"blur"}]})),E=async u=>{if(d.value||!u)return;let a=l.id?A:G;await u.validate(async n=>{n&&(d.value=!0,a(l).then(m=>{d.value=!1,s.value=!1,U("complete")}).catch(m=>{d.value=!1}))})},v=c([]);return(async()=>{v.value=await(await H({})).data})(),y({showDialog:s,setFormData:async(u=null)=>{if(Object.assign(l,_),d.value=!0,u){const a=await(await J(u.id)).data;a&&Object.keys(l).forEach(n=>{a[n]!=null&&(l[n]=a[n])})}d.value=!1}}),(u,a)=>{const n=T,h=K,m=M,g=W,I=X,V=Y,D=$,C=z;return p(),f(D,{modelValue:o(s),"onUpdate:modelValue":a[6]||(a[6]=t=>w(s)?s.value=t:s=t),title:l.id?o(e)("updateUser"):o(e)("addUser"),width:"50%",class:"diy-dialog-wrap","destroy-on-close":!0},{footer:i(()=>[R("span",Q,[r(V,{onClick:a[4]||(a[4]=t=>w(s)?s.value=!1:s=!1)},{default:i(()=>[k(P(o(e)("cancel")),1)]),_:1}),r(V,{type:"primary",loading:d.value,onClick:a[5]||(a[5]=t=>E(b.value))},{default:i(()=>[k(P(o(e)("confirm")),1)]),_:1},8,["loading"])])]),default:i(()=>[N((p(),f(I,{model:l,"label-width":"120px",ref_key:"formRef",ref:b,rules:o(q),class:"page-form"},{default:i(()=>[r(m,{label:o(e)("catId")},{default:i(()=>[r(h,{class:"input-width",modelValue:l.cat_id,"onUpdate:modelValue":a[0]||(a[0]=t=>l.cat_id=t),clearable:"",placeholder:o(e)("catIdPlaceholder")},{default:i(()=>[r(n,{label:"请选择",value:""}),(p(!0),O(j,null,S(v.value,(t,F)=>(p(),f(n,{key:F,label:t.name,value:t.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"]),r(m,{label:o(e)("nickname")},{default:i(()=>[r(g,{modelValue:l.nickname,"onUpdate:modelValue":a[1]||(a[1]=t=>l.nickname=t),clearable:"",placeholder:o(e)("nicknamePlaceholder"),class:"input-width"},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),r(m,{label:o(e)("mobile")},{default:i(()=>[r(g,{modelValue:l.mobile,"onUpdate:modelValue":a[2]||(a[2]=t=>l.mobile=t),clearable:"",placeholder:o(e)("mobilePlaceholder"),class:"input-width"},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),r(m,{label:o(e)("email")},{default:i(()=>[r(g,{modelValue:l.email,"onUpdate:modelValue":a[3]||(a[3]=t=>l.email=t),clearable:"",placeholder:o(e)("emailPlaceholder"),class:"input-width"},null,8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1},8,["model","rules"])),[[C,d.value]])]),_:1},8,["modelValue","title"])}}});export{_e as _};
