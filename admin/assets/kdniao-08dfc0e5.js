import{d as q,r as _,q as R,m as U,h as v,v as V,w as a,a as f,e as t,i,R as F,u as I,at as B,au as C,L as N,K as j,E as L,M as O,X as P,Y as $}from"./index-0e396751.js";/* empty css                   *//* empty css                  *//* empty css                   *//* empty css                *//* empty css                  *//* empty css                 */import"./el-form-item-4ed993c7.js";/* empty css                       *//* empty css                 */import{e as z,g as G}from"./platform-6692df40.js";const K=f("span",{class:"ml-2 text-gray-400"},"正式使用请切换正式环境",-1),M=f("a",{href:"https://biz.kdniao.com/login",target:"_blank"},"快递鸟后台",-1),T={class:"dialog-footer"},oe=q({__name:"kdniao",emits:["complete"],setup(X,{expose:y,emit:k}){const n=_(!1),r=_(!0),c={type:"",is_use:"",business_id:"",api_key:"",shipper_type:5,is_test:0},l=R({...c}),b=_(),w=U(()=>({is_use:[{required:!0,message:"请选择是否启用",trigger:"blur"}],business_id:[{required:!0,message:"请输商户ID",trigger:"blur"}],api_key:[{required:!0,message:"请输入密钥",trigger:"blur"}],shipper_type:[{required:!0,message:"请选择产品类型",trigger:"blur"}],is_test:[{required:!0,message:"请选择环境类型",trigger:"blur"}]})),D=async u=>{r.value||!u||await u.validate(async e=>{e&&(r.value=!0,z(l).then(p=>{r.value=!1,n.value=!1,k("complete")}).catch(()=>{r.value=!1}))})};return y({showDialog:n,setFormData:async(u=null)=>{if(r.value=!0,Object.assign(l,c),u){const e=await(await G(u.type)).data;Object.keys(l).forEach(o=>{e[o]!=null&&(l[o]=e[o]),e.params[o]!=null&&(l[o]=e.params[o].value)})}r.value=!1}}),(u,e)=>{const o=B,p=C,d=N,g=j,m=L,h=O,E=P,x=$;return v(),V(E,{modelValue:n.value,"onUpdate:modelValue":e[7]||(e[7]=s=>n.value=s),title:"快递鸟",width:"580px","destroy-on-close":!0},{footer:a(()=>[f("span",T,[t(m,{onClick:e[5]||(e[5]=s=>n.value=!1)},{default:a(()=>[i("取消")]),_:1}),t(m,{type:"primary",loading:r.value,onClick:e[6]||(e[6]=s=>D(b.value))},{default:a(()=>[i("确认")]),_:1},8,["loading"])])]),default:a(()=>[F((v(),V(h,{model:l,"label-width":"140px",ref_key:"formRef",ref:b,rules:I(w),class:"page-form"},{default:a(()=>[t(d,{label:"是否启用"},{default:a(()=>[t(p,{modelValue:l.is_use,"onUpdate:modelValue":e[0]||(e[0]=s=>l.is_use=s),prop:"is_use"},{default:a(()=>[t(o,{label:1},{default:a(()=>[i("启用")]),_:1}),t(o,{label:0},{default:a(()=>[i("停用")]),_:1})]),_:1},8,["modelValue"])]),_:1}),t(d,{label:"business_id",prop:"business_id"},{default:a(()=>[t(g,{modelValue:l.business_id,"onUpdate:modelValue":e[1]||(e[1]=s=>l.business_id=s),placeholder:"商户ID",class:"input-width",clearable:""},null,8,["modelValue"])]),_:1}),t(d,{label:"api_key",prop:"api_key"},{default:a(()=>[t(g,{modelValue:l.api_key,"onUpdate:modelValue":e[2]||(e[2]=s=>l.api_key=s),placeholder:"密钥",class:"input-width",clearable:""},null,8,["modelValue"])]),_:1}),t(d,{label:"产品类型",prop:"shipper_type"},{default:a(()=>[t(p,{modelValue:l.shipper_type,"onUpdate:modelValue":e[3]||(e[3]=s=>l.shipper_type=s)},{default:a(()=>[t(o,{label:1},{default:a(()=>[i("特快（仅支持顺丰）")]),_:1}),t(o,{label:3},{default:a(()=>[i("2小时收")]),_:1}),t(o,{label:4},{default:a(()=>[i("半日收")]),_:1}),t(o,{label:5},{default:a(()=>[i("当日收")]),_:1})]),_:1},8,["modelValue"])]),_:1}),t(d,{label:"环境类型",prop:"is_test"},{default:a(()=>[t(p,{modelValue:l.is_test,"onUpdate:modelValue":e[4]||(e[4]=s=>l.is_test=s)},{default:a(()=>[t(o,{label:1},{default:a(()=>[i("测试环境")]),_:1}),t(o,{label:0},{default:a(()=>[i("正式环境")]),_:1})]),_:1},8,["modelValue"]),K]),_:1}),t(d,{label:"常用导航"},{default:a(()=>[t(m,null,{default:a(()=>[M]),_:1})]),_:1})]),_:1},8,["model","rules"])),[[x,r.value]])]),_:1},8,["modelValue"])}}});export{oe as default};
