import{d as S,r as u,q as M,h as f,c as T,R as C,v as P,w as l,e,i as m,a as s,t as k,u as q,s as B,at as R,au as U,L as D,aW as F,K as N,ab as z,aC as I,a7 as L,M as Q,E as A,Y as G}from"./index-0e396751.js";/* empty css                   *//* empty css                  *//* empty css                *//* empty css                *//* empty css                 *//* empty css               *//* empty css                  *//* empty css                  *//* empty css                     *//* empty css                  *//* empty css                 */import"./el-form-item-4ed993c7.js";/* empty css                       *//* empty css                 */import{g as K,s as O}from"./config-13083706.js";const W={class:"main-container"},Y=s("div",{class:"text-gray-500 text-xs ml-2"}," 开启会传递'sms_content'参数（部分通道需要重新计算模板），目前使用短信宝发送需开启，其他渠道请关闭 ",-1),$=s("span",{class:"ml-4"},"其他邮箱需要支持SMTP,465端口发送",-1),j=s("span",{class:"ml-4"},"SMTP开通时候邮箱授权码或者密码，非登录密码",-1),H=s("span",{class:"ml-4"},"这里需要SMTP邮箱保持一致",-1),J={class:"fixed-footer-wrap"},X={class:"fixed-footer"},xe=S({__name:"index",setup(Z){const d=u(!0),x=u(),t=M({email_from:"",email_password:"",email_host:"smtp.qq.com",is_sms_content:0}),p=async()=>{const n=await K();console.log(n),d.value=!1;for(const o in t)t[o]=n.data[o]};p();const b=async()=>{await O(t),p()};return(n,o)=>{const _=R,g=U,r=D,v=F,i=N,c=z,V=I,h=L,w=Q,y=A,E=G;return f(),T("div",W,[C((f(),P(w,{model:t,"label-width":"150px",ref_key:"ruleFormRef",ref:x,rules:n.rules,class:"page-form"},{default:l(()=>[e(h,{class:"box-card !border-none",shadow:"never"},{default:l(()=>[e(r,{label:"短信参数控制",prop:"is_sms_content"},{default:l(()=>[e(g,{modelValue:t.is_sms_content,"onUpdate:modelValue":o[0]||(o[0]=a=>t.is_sms_content=a)},{default:l(()=>[e(_,{border:"",value:1,size:"large",style:{"margin-right":"10px"}},{default:l(()=>[m("开启")]),_:1}),e(_,{border:"",value:0,size:"large",style:{"margin-right":"10px"}},{default:l(()=>[m("关闭")]),_:1})]),_:1},8,["modelValue"]),Y]),_:1}),e(v,{type:"info",title:"温馨提示：需开启SMTP服务并配置正确下面信息才能发送邮件",closable:!1,"show-icon":""}),e(r,{class:"font-bold text-xs mt-4",label:"SMTP地址",prop:"action"},{default:l(()=>[e(i,{clearable:"",modelValue:t.email_host,"onUpdate:modelValue":o[1]||(o[1]=a=>t.email_host=a),style:{width:"300px"},placeholder:"请输入SMTP服务器地址"},null,8,["modelValue"]),e(V,{modelValue:t.email_host,"onUpdate:modelValue":o[2]||(o[2]=a=>t.email_host=a),clearable:"",class:"input-item ml-4"},{default:l(()=>[e(c,{label:"QQ邮箱",value:"smtp.qq.com"}),e(c,{label:"163邮箱",value:"smtp.163.com"})]),_:1},8,["modelValue"]),$]),_:1}),e(r,{class:"font-bold text-xs flex",label:"授权码",prop:"action"},{default:l(()=>[e(i,{clearable:"",modelValue:t.email_password,"onUpdate:modelValue":o[3]||(o[3]=a=>t.email_password=a),style:{width:"300px"},placeholder:"请输入SMTP授权码/密码"},null,8,["modelValue"]),j]),_:1}),e(r,{class:"font-bold text-xs flex",label:"发件邮箱",prop:"action"},{default:l(()=>[e(i,{clearable:"",modelValue:t.email_from,"onUpdate:modelValue":o[4]||(o[4]=a=>t.email_from=a),style:{width:"300px"},placeholder:"请输入发送邮件的邮箱"},null,8,["modelValue"]),H]),_:1})]),_:1})]),_:1},8,["model","rules"])),[[E,d.value]]),s("div",J,[s("div",X,[e(y,{type:"primary",onClick:o[5]||(o[5]=a=>b())},{default:l(()=>[m(k(q(B)("save")),1)]),_:1})])])])}}});export{xe as default};
