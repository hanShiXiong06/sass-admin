import{d as M,r as p,n as P,l as B,q as t,h as g,s as b,w as s,a as F,e as n,i as y,t as D,u as o,R as k,b$ as C,K as R,L as S,M as $,E as q,X as I,Y as U}from"./index-99f00cf3.js";/* empty css                   *//* empty css                  *//* empty css                   *//* empty css                  *//* empty css                */import"./el-form-item-4ed993c7.js";/* empty css                 */import{c as j,f as K,h as L}from"./delivery-4012edce.js";const O={class:"dialog-footer"},ee=M({__name:"delivery-personnel-edit",emits:["complete"],setup(T,{expose:h,emit:V}){const m=p(!1),r=p(!1),v={deliver_id:"",deliver_name:"",deliver_mobile:""},l=P({...v}),c=p(),w=B(()=>({deliver_name:[{required:!0,message:t("deliverNamePlaceholder"),trigger:"blur"}],deliver_mobile:[{required:!0,message:t("deliverMobilePlaceholder"),trigger:"blur"},{min:11,max:11,message:"请输入11位手机号码",trigger:"blur"},{pattern:/^1[23456789]\d{9}$/,message:"请输入正确的手机号码",trigger:"blur"}]})),x=async d=>{if(r.value||!d)return;const e=l.deliver_id?j:K;await d.validate(async i=>{i&&(r.value=!0,e(l).then(f=>{r.value=!1,m.value=!1,V("complete")}).catch(()=>{r.value=!1}))})};return h({showDialog:m,setFormData:async(d=null)=>{if(Object.assign(l,v),r.value=!0,d){const e=await(await L(d.deliver_id)).data;e&&Object.keys(l).forEach(i=>{e[i]!=null&&(l[i]=e[i])})}r.value=!1}}),(d,e)=>{const i=R,u=S,f=$,_=q,E=I,N=U;return g(),b(E,{modelValue:m.value,"onUpdate:modelValue":e[6]||(e[6]=a=>m.value=a),title:l.deliver_id?o(t)("updateDeliver"):o(t)("addDeliveryPersonnel"),width:"480",class:"diy-dialog-wrap","destroy-on-close":!0},{footer:s(()=>[F("span",O,[n(_,{onClick:e[4]||(e[4]=a=>m.value=!1)},{default:s(()=>[y(D(o(t)("cancel")),1)]),_:1}),n(_,{type:"primary",loading:r.value,onClick:e[5]||(e[5]=a=>x(c.value))},{default:s(()=>[y(D(o(t)("confirm")),1)]),_:1},8,["loading"])])]),default:s(()=>[k((g(),b(f,{model:l,"label-width":"120px",ref_key:"formRef",ref:c,rules:o(w),class:"page-form"},{default:s(()=>[n(u,{label:o(t)("deliverName"),prop:"deliver_name"},{default:s(()=>[n(i,{modelValue:l.deliver_name,"onUpdate:modelValue":e[0]||(e[0]=a=>l.deliver_name=a),modelModifiers:{trim:!0},clearable:"",placeholder:o(t)("deliverNamePlaceholder"),class:"input-width",maxlength:"10"},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),n(u,{label:o(t)("deliverMobile"),prop:"deliver_mobile"},{default:s(()=>[n(i,{modelValue:l.deliver_mobile,"onUpdate:modelValue":e[1]||(e[1]=a=>l.deliver_mobile=a),modelModifiers:{trim:!0},clearable:"",placeholder:o(t)("deliverMobilePlaceholder"),class:"input-width",onKeyup:e[2]||(e[2]=a=>o(C)(a)),onBlur:e[3]||(e[3]=a=>l.deliver_mobile=a.target.value)},null,8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1},8,["model","rules"])),[[N,r.value]])]),_:1},8,["modelValue","title"])}}});export{ee as _};
