import{d as I,y as S,f as q,r as v,q as L,m as N,h as V,v as w,w as t,a as m,e as a,i as c,t as f,u as i,s as d,R as $,at as j,au as A,L as O,K as P,E as G,M as K,X as M,Y as T}from"./index-0e396751.js";/* empty css                   *//* empty css                  *//* empty css                   *//* empty css                *//* empty css                  *//* empty css                 */import"./el-form-item-4ed993c7.js";/* empty css                       *//* empty css                 */import{b as X,g as Y}from"./notice-affd2d39.js";const z=m("a",{href:"https://api.crmeb.com/",target:"_blank"},"打开一号通后台",-1),H=m("span",{class:"ml-2 relative flex h-3 w-3 mb"},[m("span",{class:"animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"}),m("span",{class:"relative inline-flex rounded-full h-3 w-3 bg-sky-400"})],-1),J={class:"dialog-footer"},ce=I({__name:"sms-yht",emits:["complete"],setup(Q,{expose:h,emit:D}){S();const x=q(),E=n=>{x.push(n)},u=v(!1),r=v(!0),g={sms_type:"",is_use:"",access_key:"",secret_key:""},s=L({...g}),y=v(),R=N(()=>({access_key:[{required:!0,message:"access_key必须填写",trigger:"blur"}],secret_key:[{required:!0,message:"secret_key必须填写",trigger:"blur"}]})),U=async n=>{r.value||!n||await n.validate(async e=>{e&&(r.value=!0,X(s).then(b=>{r.value=!1,u.value=!1,D("complete")}).catch(()=>{r.value=!1}))})};return h({showDialog:u,setFormData:async(n=null)=>{if(r.value=!0,Object.assign(s,g),n){const e=await(await Y(n.sms_type)).data;Object.keys(s).forEach(l=>{e[l]!=null&&(s[l]=e[l]),e.params[l]!=null&&(s[l]=e.params[l].value)})}r.value=!1}}),(n,e)=>{const l=j,b=A,p=O,k=P,_=G,C=K,F=M,B=T;return V(),w(F,{modelValue:u.value,"onUpdate:modelValue":e[6]||(e[6]=o=>u.value=o),title:"一号通短信",width:"580px","destroy-on-close":!0},{footer:t(()=>[m("span",J,[a(_,{onClick:e[4]||(e[4]=o=>u.value=!1)},{default:t(()=>[c(f(i(d)("cancel")),1)]),_:1}),a(_,{type:"primary",loading:r.value,onClick:e[5]||(e[5]=o=>U(y.value))},{default:t(()=>[c(f(i(d)("confirm")),1)]),_:1},8,["loading"])])]),default:t(()=>[$((V(),w(C,{model:s,"label-width":"140px",ref_key:"formRef",ref:y,rules:i(R),class:"page-form"},{default:t(()=>[a(p,{label:i(d)("isUse")},{default:t(()=>[a(b,{modelValue:s.is_use,"onUpdate:modelValue":e[0]||(e[0]=o=>s.is_use=o)},{default:t(()=>[a(l,{label:1},{default:t(()=>[c(f(i(d)("startUsing")),1)]),_:1}),a(l,{label:0},{default:t(()=>[c(f(i(d)("statusDeactivate")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["label"]),a(p,{label:"access_key",prop:"access_key"},{default:t(()=>[a(k,{modelValue:s.access_key,"onUpdate:modelValue":e[1]||(e[1]=o=>s.access_key=o),placeholder:"access_key一号通后台应用管理获得APPID",class:"input-width",clearable:""},null,8,["modelValue"])]),_:1}),a(p,{label:"secret_key",prop:"secret_key"},{default:t(()=>[a(k,{modelValue:s.secret_key,"onUpdate:modelValue":e[2]||(e[2]=o=>s.secret_key=o),placeholder:"secret_key一号通后台应用管理获得AppSecret",class:"input-width",clearable:""},null,8,["modelValue"])]),_:1}),a(p,{label:"常用导航"},{default:t(()=>[a(_,null,{default:t(()=>[z]),_:1}),a(_,{onClick:e[3]||(e[3]=o=>E("/setting/notice/template"))},{default:t(()=>[c(" 设置模板 "),H]),_:1})]),_:1})]),_:1},8,["model","rules"])),[[B,r.value]])]),_:1},8,["modelValue"])}}});export{ce as default};
