import{d as C,r as i,n as F,l as N,h as p,s as d,w as a,a as R,e as n,i as _,t as g,u,q as v,R as j,H as q,K as I,L,M,E as O,X as U,Y as $}from"./index-904cb7a2.js";/* empty css                   *//* empty css                  *//* empty css                   *//* empty css                  *//* empty css                */import"./el-form-item-4ed993c7.js";/* empty css                 */const H={class:"dialog-footer"},Q=C({__name:"pay-seafoxpay",emits:["complete"],setup(K,{expose:b,emit:y}){const s=i(!1),l=i(!0),m={type:"seafoxpay",config:{customer_number:""},channel:"",status:0,is_default:0},t=F({...m}),c=i(),V=N(()=>({"config.customer_number":[{required:!0,message:"请输入海狐聚合商户号",trigger:"blur"}]})),w=async(o=null)=>{l.value=!0,Object.assign(t,m),o&&(Object.keys(t).forEach(e=>{o[e]!=null&&(t[e]=o[e])}),t.channel=o.redio_key.split("_")[0],t.status=Number(t.status)),l.value=!1},x=async o=>{l.value||!o||await o.validate(async e=>{e&&(y("complete",t),s.value=!1)})};return b({showDialog:s,setFormData:w,enableVerify:()=>{let o=!0;return q.empty(t.config.customer_number)&&(o=!1),o}}),(o,e)=>{const D=I,h=L,E=M,f=O,k=U,B=$;return p(),d(k,{modelValue:s.value,"onUpdate:modelValue":e[3]||(e[3]=r=>s.value=r),title:"海狐聚合支付配置",width:"700px","destroy-on-close":!0},{footer:a(()=>[R("span",H,[n(f,{onClick:e[1]||(e[1]=r=>s.value=!1)},{default:a(()=>[_(g(u(v)("cancel")),1)]),_:1}),n(f,{type:"primary",loading:l.value,onClick:e[2]||(e[2]=r=>x(c.value))},{default:a(()=>[_(g(u(v)("confirm")),1)]),_:1},8,["loading"])])]),default:a(()=>[j((p(),d(E,{model:t,"label-width":"180px",ref_key:"formRef",ref:c,rules:u(V),class:"page-form"},{default:a(()=>[n(h,{label:"海狐聚合商户号",prop:"config.customer_number"},{default:a(()=>[n(D,{modelValue:t.config.customer_number,"onUpdate:modelValue":e[0]||(e[0]=r=>t.config.customer_number=r),modelModifiers:{trim:!0},placeholder:"请输入海狐聚合商户号",class:"input-width","show-word-limit":"",clearable:""},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])),[[B,l.value]])]),_:1},8,["modelValue"])}}});export{Q as default};
