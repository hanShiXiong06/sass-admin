import{d as J,r as i,l as D,n as K,q as o,aI as X,h as p,s as _,w as d,a as Y,e as t,i as v,t as g,u as r,R as z,c as U,B as E,F as H,T as Q,aJ as W,ap as Z,K as ee,L as le,ac as ae,aD as oe,au as re,av as te,M as se,E as de,X as ue,Y as ne}from"./index-904cb7a2.js";/* empty css                   *//* empty css                  *//* empty css                   *//* empty css                  *//* empty css                *//* empty css                       *//* empty css                 *//* empty css                 *//* empty css               *//* empty css                  *//* empty css                  *//* empty css                     *//* empty css                  */import ie from"./index-e888fa8d.js";import"./el-form-item-4ed993c7.js";import{g as me}from"./user-9adb10ba.js";import{e as pe,f as fe,h as ce}from"./site-df2c329a.js";const _e={key:0},ve={key:0},ge={class:"dialog-footer"},Me=J({__name:"edit-user",emits:["complete"],setup(we,{expose:x,emit:$}){const F=i([]),f=i(""),P=()=>{me({}).then(({data:u})=>{F.value=u}).catch()};P();const w=i(!0),b=i(!0),V=i(!0),q=D(()=>!!(l.uid||!f.value||typeof f.value=="string")),c=i(!1),m=i(!1);let h="";const R={uid:0,username:"",head_img:"",real_name:"",password:"",confirm_password:"",status:1,role_ids:[],userrole:{}},l=K({...R}),k=i(),I=D(()=>({uid:[{validator:(u,e,s)=>{!l.uid&&f.value===""?s(new Error(o("managerPlaceholder"))):s()},trigger:"blur"}],username:[{required:l.uid==0,message:o("accountNumberPlaceholder"),trigger:"blur"}],real_name:[{required:!0,message:o("userRealNamePlaceholder"),trigger:"blur"}],role_ids:[{required:!0,message:o("userRolePlaceholder"),trigger:"blur"}],password:[{required:l.uid==0,message:o("passwordPlaceholder"),trigger:"blur"}],confirm_password:[{required:l.uid==0,message:o("confirmPasswordPlaceholder"),trigger:"blur"},{validator:(u,e,s)=>{e!=l.password?s(new Error(o("confirmPasswordError"))):s()},trigger:"blur"}]})),y=i([]);X().then(u=>{y.value=u.data,y.value.forEach(e=>{e.role_id=e.role_id.toString()})});const L=async u=>{if(m.value||!u)return;const e=l.uid?pe:fe;await u.validate(async s=>{if(s){m.value=!0;const n=W(Z(l));!l.uid&&typeof f.value=="number"&&(n.uid=f.value),e(n).then(N=>{m.value=!1,c.value=!1,!l.uid&&P(),$("complete")}).catch(()=>{m.value=!1})}})};return x({showDialog:c,setFormData:async(u=null)=>{if(m.value=!0,f.value="",Object.assign(l,R),h=o("addUser"),u){h=o("updateUser");const e=await(await ce(u.uid)).data;e.role_ids=e.role_ids||[],Object.keys(l).forEach(s=>{e[s]!=null&&(l[s]=e[s])})}m.value=!1}}),(u,e)=>{const s=ee,n=le,N=ie,M=ae,O=oe,B=re,S=te,T=se,C=de,j=ue,A=ne;return p(),_(j,{modelValue:c.value,"onUpdate:modelValue":e[15]||(e[15]=a=>c.value=a),title:r(h),width:"500px","destroy-on-close":!0},{footer:d(()=>[Y("span",ge,[t(C,{onClick:e[13]||(e[13]=a=>c.value=!1)},{default:d(()=>[v(g(r(o)("cancel")),1)]),_:1}),t(C,{type:"primary",loading:m.value,onClick:e[14]||(e[14]=a=>L(k.value))},{default:d(()=>[v(g(r(o)("confirm")),1)]),_:1},8,["loading"])])]),default:d(()=>[z((p(),_(T,{model:l,"label-width":"90px",ref_key:"formRef",ref:k,rules:r(I),class:"page-form"},{default:d(()=>[t(n,{label:r(o)("accountNumber"),prop:"username"},{default:d(()=>[t(s,{modelValue:l.username,"onUpdate:modelValue":e[0]||(e[0]=a=>l.username=a),modelModifiers:{trim:!0},placeholder:r(o)("accountNumberPlaceholder"),clearable:"",disabled:l.uid,class:"input-width",maxlength:"10","show-word-limit":""},null,8,["modelValue","placeholder","disabled"])]),_:1},8,["label"]),r(q)?(p(),U("div",_e,[t(n,{label:r(o)("headImg")},{default:d(()=>[t(N,{modelValue:l.head_img,"onUpdate:modelValue":e[1]||(e[1]=a=>l.head_img=a)},null,8,["modelValue"])]),_:1},8,["label"]),t(n,{label:r(o)("userRealName"),prop:"real_name"},{default:d(()=>[t(s,{modelValue:l.real_name,"onUpdate:modelValue":e[2]||(e[2]=a=>l.real_name=a),modelModifiers:{trim:!0},placeholder:r(o)("userRealNamePlaceholder"),readonly:w.value,onClick:e[3]||(e[3]=a=>w.value=!1),onBlur:e[4]||(e[4]=a=>w.value=!0),clearable:"",class:"input-width",maxlength:"10","show-word-limit":""},null,8,["modelValue","placeholder","readonly"])]),_:1},8,["label"]),l.uid?E("",!0):(p(),U("div",ve,[t(n,{label:r(o)("password"),prop:"password"},{default:d(()=>[t(s,{modelValue:l.password,"onUpdate:modelValue":e[5]||(e[5]=a=>l.password=a),modelModifiers:{trim:!0},placeholder:r(o)("passwordPlaceholder"),readonly:b.value,onClick:e[6]||(e[6]=a=>b.value=!1),onBlur:e[7]||(e[7]=a=>b.value=!0),type:"password","show-password":!0,clearable:"",class:"input-width"},null,8,["modelValue","placeholder","readonly"])]),_:1},8,["label"]),t(n,{label:r(o)("confirmPassword"),prop:"confirm_password"},{default:d(()=>[t(s,{modelValue:l.confirm_password,"onUpdate:modelValue":e[8]||(e[8]=a=>l.confirm_password=a),modelModifiers:{trim:!0},placeholder:r(o)("confirmPasswordPlaceholder"),readonly:V.value,onClick:e[9]||(e[9]=a=>V.value=!1),onBlur:e[10]||(e[10]=a=>V.value=!0),type:"password","show-password":!0,clearable:"",class:"input-width"},null,8,["modelValue","placeholder","readonly"])]),_:1},8,["label"])]))])):E("",!0),l.userrole.is_admin?E("",!0):(p(),_(n,{key:1,label:r(o)("userRoleName"),prop:"role_ids"},{default:d(()=>[t(O,{modelValue:l.role_ids,"onUpdate:modelValue":e[11]||(e[11]=a=>l.role_ids=a),placeholder:r(o)("userRolePlaceholder"),class:"input-width",multiple:"","collapse-tags":"","collapse-tags-tooltip":""},{default:d(()=>[(p(!0),U(H,null,Q(y.value,(a,G)=>(p(),_(M,{label:a.role_name,value:a.role_id,key:G,disabled:a.disabled},null,8,["label","value","disabled"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"])),t(n,{label:r(o)("status")},{default:d(()=>[t(S,{modelValue:l.status,"onUpdate:modelValue":e[12]||(e[12]=a=>l.status=a)},{default:d(()=>[t(B,{label:1},{default:d(()=>[v(g(r(o)("statusUnlock")),1)]),_:1}),t(B,{label:0},{default:d(()=>[v(g(r(o)("lock")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["label"])]),_:1},8,["model","rules"])),[[A,m.value]])]),_:1},8,["modelValue","title"])}}});export{Me as _};