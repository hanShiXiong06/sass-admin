import{d as G,r as m,n as B,l as F,q as l,h as b,s as w,w as n,a as k,e as i,i as V,t as y,u as s,R as C,c1 as I,K as R,L as K,M,E as P,X as U,Y as j}from"./index-904cb7a2.js";/* empty css                   *//* empty css                  *//* empty css                   *//* empty css                  *//* empty css                */import"./el-form-item-4ed993c7.js";/* empty css                 */import{I as q,J as O,K as $}from"./goods-6bf0c95b.js";const J={class:"dialog-footer"},ae=G({__name:"label-group-edit",emits:["complete"],setup(S,{expose:h,emit:x}){const d=m(!1),t=m(!1),p=m(""),_={group_id:"",group_name:"",sort:""},a=B({..._}),g=m(),D=F(()=>({group_name:[{required:!0,message:l("groupNamePlaceholder"),trigger:"blur"}]})),E=async u=>{if(t.value||!u)return;const e=a.group_id?q:O;await u.validate(async r=>{r&&(t.value=!0,e(a).then(f=>{t.value=!1,d.value=!1,x("complete")}).catch(f=>{t.value=!1}))})};return h({showDialog:d,setFormData:async(u=null)=>{if(Object.assign(a,_),t.value=!0,u){const e=await(await $(u.group_id)).data;p.value=l("updateLabelGroup"),e&&Object.keys(a).forEach(r=>{e[r]!=null&&(a[r]=e[r])})}else p.value=l("addLabelGroup");t.value=!1}}),(u,e)=>{const r=R,c=K,f=M,v=P,L=U,N=j;return b(),w(L,{modelValue:d.value,"onUpdate:modelValue":e[6]||(e[6]=o=>d.value=o),title:p.value,width:"500px",class:"diy-dialog-wrap","destroy-on-close":!0},{footer:n(()=>[k("span",J,[i(v,{onClick:e[4]||(e[4]=o=>d.value=!1)},{default:n(()=>[V(y(s(l)("cancel")),1)]),_:1}),i(v,{type:"primary",loading:t.value,onClick:e[5]||(e[5]=o=>E(g.value))},{default:n(()=>[V(y(s(l)("confirm")),1)]),_:1},8,["loading"])])]),default:n(()=>[C((b(),w(f,{model:a,"label-width":"120px",ref_key:"formRef",ref:g,rules:s(D),class:"page-form"},{default:n(()=>[i(c,{label:s(l)("groupName"),prop:"group_name"},{default:n(()=>[i(r,{modelValue:a.group_name,"onUpdate:modelValue":e[0]||(e[0]=o=>a.group_name=o),modelModifiers:{trim:!0},clearable:"",placeholder:s(l)("groupNamePlaceholder"),class:"input-width",maxlength:"10"},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),i(c,{label:s(l)("sort")},{default:n(()=>[i(r,{modelValue:a.sort,"onUpdate:modelValue":e[1]||(e[1]=o=>a.sort=o),modelModifiers:{trim:!0},clearable:"",placeholder:s(l)("sortPlaceholder"),class:"input-width",onKeyup:e[2]||(e[2]=o=>s(I)(o)),maxlength:"8","show-word-limit":"",onBlur:e[3]||(e[3]=o=>a.sort=o.target.value)},null,8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1},8,["model","rules"])),[[N,t.value]])]),_:1},8,["modelValue","title"])}}});export{ae as _};