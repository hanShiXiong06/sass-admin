import{d as q,r as _,n as A,l as G,q as a,h as b,s as F,w as s,a as c,e as t,i as g,t as u,u as r,R as f,c as K,F as $,T as X,a0 as v,c1 as Y,K as z,L as H,ac as J,aD as Q,au as W,av as Z,bv as ee,aT as le,M as oe,E as ae,X as te,Y as re}from"./index-904cb7a2.js";/* empty css                   *//* empty css                  *//* empty css                   *//* empty css                  *//* empty css                *//* empty css                  */import se from"./index-e888fa8d.js";/* empty css                        *//* empty css                 *//* empty css                       *//* empty css                 *//* empty css               *//* empty css                  *//* empty css                  *//* empty css                     *//* empty css                  */import"./el-form-item-4ed993c7.js";import{E as de,F as ne,G as ie}from"./goods-f69d2db5.js";const ue={class:"form-tip"},me={class:"form-tip"},pe={class:"form-tip"},_e={class:"form-tip"},ce={class:"dialog-footer"},Pe=q({__name:"label-edit",props:{groupList:{type:Object,default:[]}},emits:["complete"],setup(U,{expose:j,emit:L}){const N=U,p=_(!1),i=_(!1),y=_(""),E={label_id:"",label_name:"",group_id:"",style_type:"diy",color_json:{text_color:"rgba(255, 255, 255, 1)",bg_color:"rgba(255, 65, 66, 1)",border_color:""},icon:"",memo:"",sort:"",status:1},V=_(["#F4391c","#ff4500","#ff8c00","#FFD009","#ffd700","#19C650","#90ee90","#00ced1","#1e90ff","#c71585","#FF407E","#CFAF70","#A253FF","rgba(255, 69, 0, 0.68)","rgb(255, 120, 0)","hsl(181, 100%, 37%)","hsla(209, 100%, 56%, 0.73)","#c7158577"]),l=A({...E}),x=_(),k=G(()=>({label_name:[{required:!0,message:a("labelNamePlaceholder"),trigger:"blur"}],group_id:[{required:!0,message:a("groupNamePlaceholder"),trigger:"blur"}]})),B=async m=>{if(i.value||!m)return;const e=l.label_id?de:ne;await m.validate(async n=>{n&&(i.value=!0,e(l).then(w=>{i.value=!1,p.value=!1,L("complete")}).catch(w=>{i.value=!1}))})};return j({showDialog:p,setFormData:async(m=null)=>{if(Object.assign(l,E),i.value=!0,m){const e=await(await ie(m.label_id)).data;y.value=a("updateLabel"),e&&Object.keys(l).forEach(n=>{e[n]!=null&&(l[n]=e[n])})}else y.value=a("addLabel");i.value=!1}}),(m,e)=>{const n=z,d=H,w=J,T=Q,C=W,P=Z,h=ee,R=se,I=le,M=oe,D=ae,O=te,S=re;return b(),F(O,{modelValue:p.value,"onUpdate:modelValue":e[14]||(e[14]=o=>p.value=o),title:y.value,width:"500px",class:"diy-dialog-wrap","destroy-on-close":!0},{footer:s(()=>[c("span",ce,[t(D,{onClick:e[12]||(e[12]=o=>p.value=!1)},{default:s(()=>[g(u(r(a)("cancel")),1)]),_:1}),t(D,{type:"primary",loading:i.value,onClick:e[13]||(e[13]=o=>B(x.value))},{default:s(()=>[g(u(r(a)("confirm")),1)]),_:1},8,["loading"])])]),default:s(()=>[f((b(),F(M,{model:l,"label-width":"120px",ref_key:"formRef",ref:x,rules:r(k),class:"page-form"},{default:s(()=>[t(d,{label:r(a)("labelName"),prop:"label_name"},{default:s(()=>[t(n,{modelValue:l.label_name,"onUpdate:modelValue":e[0]||(e[0]=o=>l.label_name=o),modelModifiers:{trim:!0},clearable:"",placeholder:r(a)("labelNamePlaceholder"),class:"input-width",maxlength:"10"},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),t(d,{label:r(a)("groupName"),prop:"group_id"},{default:s(()=>[t(T,{modelValue:l.group_id,"onUpdate:modelValue":e[1]||(e[1]=o=>l.group_id=o),placeholder:r(a)("groupNamePlaceholder"),clearable:"",class:"input-width"},{default:s(()=>[(b(!0),K($,null,X(N.groupList,o=>(b(),F(w,{key:o.group_id,label:o.group_name,value:o.group_id},null,8,["label","value"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"]),t(d,{label:r(a)("styleType")},{default:s(()=>[t(P,{modelValue:l.style_type,"onUpdate:modelValue":e[2]||(e[2]=o=>l.style_type=o)},{default:s(()=>[t(C,{label:"diy"},{default:s(()=>[g(u(r(a)("styleByDiy")),1)]),_:1}),t(C,{label:"icon"},{default:s(()=>[g(u(r(a)("styleByIcon")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["label"]),f(t(d,{label:r(a)("textColor")},{default:s(()=>[t(h,{modelValue:l.color_json.text_color,"onUpdate:modelValue":e[3]||(e[3]=o=>l.color_json.text_color=o),"show-alpha":"",predefine:V.value},null,8,["modelValue","predefine"]),c("div",ue,u(r(a)("colorTips")),1)]),_:1},8,["label"]),[[v,l.style_type=="diy"]]),f(t(d,{label:r(a)("bgColor")},{default:s(()=>[t(h,{modelValue:l.color_json.bg_color,"onUpdate:modelValue":e[4]||(e[4]=o=>l.color_json.bg_color=o),"show-alpha":"",predefine:V.value},null,8,["modelValue","predefine"]),c("div",me,u(r(a)("colorTips")),1)]),_:1},8,["label"]),[[v,l.style_type=="diy"]]),f(t(d,{label:r(a)("borderColor")},{default:s(()=>[t(h,{modelValue:l.color_json.border_color,"onUpdate:modelValue":e[5]||(e[5]=o=>l.color_json.border_color=o),"show-alpha":"",predefine:V.value},null,8,["modelValue","predefine"]),c("div",pe,u(r(a)("colorTips")),1)]),_:1},8,["label"]),[[v,l.style_type=="diy"]]),f(t(d,{label:r(a)("icon")},{default:s(()=>[t(R,{modelValue:l.icon,"onUpdate:modelValue":e[6]||(e[6]=o=>l.icon=o)},null,8,["modelValue"]),c("div",_e,u(r(a)("iconTips")),1)]),_:1},8,["label"]),[[v,l.style_type=="icon"]]),t(d,{label:r(a)("status")},{default:s(()=>[t(I,{modelValue:l.status,"onUpdate:modelValue":e[7]||(e[7]=o=>l.status=o),"active-value":1,"inactive-value":0},null,8,["modelValue"])]),_:1},8,["label"]),t(d,{label:r(a)("memo")},{default:s(()=>[t(n,{modelValue:l.memo,"onUpdate:modelValue":e[8]||(e[8]=o=>l.memo=o),modelModifiers:{trim:!0},type:"textarea",clearable:"",placeholder:r(a)("memoPlaceholder"),class:"input-width",maxlength:"50"},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),t(d,{label:r(a)("sort")},{default:s(()=>[t(n,{modelValue:l.sort,"onUpdate:modelValue":e[9]||(e[9]=o=>l.sort=o),modelModifiers:{trim:!0},clearable:"",placeholder:r(a)("sortPlaceholder"),class:"input-width",onKeyup:e[10]||(e[10]=o=>r(Y)(o)),maxlength:"6","show-word-limit":"",onBlur:e[11]||(e[11]=o=>l.sort=o.target.value)},null,8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1},8,["model","rules"])),[[S,i.value]])]),_:1},8,["modelValue","title"])}}});export{Pe as _};
