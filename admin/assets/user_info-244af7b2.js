import{d as G,y as z,f as A,r as f,R as M,h as m,c as V,e,w as t,u as s,aP as j,a as n,t as i,s as a,i as r,F as H,v as x,C as $,a5 as Q,aQ as Y,a7 as J,aM as K,aN as O,ac as W,ak as X,E as Z,ad as ee,ax as te,ay as ae,Y as se}from"./index-0e396751.js";/* empty css                   *//* empty css                    *//* empty css                 *//* empty css                    */import"./el-tooltip-4ed993c7.js";/* empty css                  *//* empty css                     *//* empty css                  *//* empty css               *//* empty css                        *//* empty css               *//* empty css               *//* empty css                *//* empty css                   *//* empty css                       */import{d as le,k as ie,l as ne}from"./user-14563ef3.js";import{B as oe}from"./site-901e63ef.js";import{_ as re}from"./create-site-limit.vue_vue_type_script_setup_true_lang-4d56ea45.js";/* empty css                  *//* empty css                   *//* empty css                *//* empty css                 */import"./el-form-item-4ed993c7.js";/* empty css                  *//* empty css                  */const pe={class:"main-container"},ue={class:"panel-title !text-sm"},_e={class:"text-[14px] w-[130px] text-right mr-[20px]"},me={class:"text-[14px] text-[#666666]"},ce={class:"text-[14px] w-[130px] text-right mr-[20px]"},de={class:"text-[14px] text-[#666666]"},fe={class:"text-[14px] w-[130px] text-right mr-[20px]"},xe={class:"text-[14px] text-[#666666]"},be={class:"text-[14px] w-[130px] text-right mr-[20px]"},ge={class:"text-[14px] text-[#666666]"},he={class:"text-[14px] w-[130px] text-right mr-[20px]"},ve={class:"text-[14px] text-[#666666]"},ye={class:"text-[14px] w-[130px] text-right mr-[20px]"},ke={class:"text-[14px] text-[#666666]"},Ce={class:"flex justify-end mb-[16px]"},We=G({__name:"user_info",setup(Te){const y=z(),R=A(),U=y.meta.title,b=parseInt(y.query.uid||0),E=f(!0),u=f({}),L=f(y.query.tab||"siteInfo"),c=f({}),w=f([]),k=f(null);le(b).then(({data:o})=>{u.value=o,E.value=!1}).catch(),oe({uid:b}).then(({data:o})=>{const _={};o.forEach(g=>{_[g.group_id]=g}),c.value=_});const C=()=>{ie(b).then(({data:o})=>{w.value=o})};C();const D=o=>{R.push({path:"/admin/site/info",query:{id:o.site_id}})},F=o=>{Q.confirm(a("createSiteTimeLimitDeleteTips"),a("warning"),{confirmButtonText:a("confirm"),cancelButtonText:a("cancel"),type:"warning"}).then(()=>{ne(o).then(()=>{C()}).catch(()=>{})})};return(o,_)=>{const g=Y,T=J,d=K,S=O,p=W,h=X,v=Z,B=ee,I=te,P=ae,q=se;return M((m(),V("div",pe,[e(T,{class:"card !border-none",shadow:"never"},{default:t(()=>[e(g,{content:s(U),icon:s(j),onBack:_[0]||(_[0]=l=>o.$router.back())},null,8,["content","icon"])]),_:1}),e(T,{class:"box-card mt-[15px] !border-none",shadow:"never"},{default:t(()=>[n("h3",ue,i(s(a)("userInfo")),1),e(S,{gutter:20,class:"mt-[20px] mb-[20px]"},{default:t(()=>[e(d,{span:6},{default:t(()=>[n("span",_e,i(s(a)("uid")),1),n("span",me,i(u.value.uid),1)]),_:1}),e(d,{span:6,offset:6},{default:t(()=>[n("span",ce,i(s(a)("username")),1),n("span",de,i(u.value.username),1)]),_:1})]),_:1}),e(S,{gutter:20,class:"mb-[20px]"},{default:t(()=>[e(d,{span:6},{default:t(()=>[n("span",fe,i(s(a)("realname")),1),n("span",xe,i(u.value.real_name||"--"),1)]),_:1}),e(d,{span:6,offset:6},{default:t(()=>[n("span",be,i(s(a)("addTime")),1),n("span",ge,i(u.value.create_time),1)]),_:1})]),_:1}),e(S,{gutter:20,class:"mb-[20px]"},{default:t(()=>[e(d,{span:6},{default:t(()=>[n("span",he,i(s(a)("lastLoginTime")),1),n("span",ve,i(u.value.last_time||""),1)]),_:1}),e(d,{span:6,offset:6},{default:t(()=>[n("span",ye,i(s(a)("lastLoginIP")),1),n("span",ke,i(u.value.last_ip||""),1)]),_:1})]),_:1})]),_:1}),e(T,{class:"box-card mt-[15px] !border-none",shadow:"never"},{default:t(()=>[e(P,{modelValue:L.value,"onUpdate:modelValue":_[2]||(_[2]=l=>L.value=l),onTabClick:o.handleClick},{default:t(()=>[e(I,{label:s(a)("siteInfo"),name:"siteInfo"},{default:t(()=>[e(B,{data:u.value.roles,size:"large"},{default:t(()=>[e(p,{prop:"site_id",label:s(a)("siteId"),width:"100px"},null,8,["label"]),e(p,{prop:"site_name",label:s(a)("siteName")},null,8,["label"]),e(p,{prop:"is_admin",label:s(a)("isAdmin"),"min-width":"180",align:"center"},{default:t(({row:l})=>[r(i(l.is_admin?s(a)("yes"):s(a)("no")),1)]),_:1},8,["label"]),e(p,{label:s(a)("status"),"min-width":"80",align:"center"},{default:t(({row:l})=>[l.site_status_name?(m(),V(H,{key:0},[l.site_status==1?(m(),x(h,{key:0,class:"ml-2",type:"success"},{default:t(()=>[r(i(l.site_status_name),1)]),_:2},1024)):l.site_status==3?(m(),x(h,{key:1,class:"ml-2",type:"error"},{default:t(()=>[r(i(l.site_status_name),1)]),_:2},1024)):(m(),x(h,{key:2,class:"ml-2",type:"error"},{default:t(()=>[r(i(l.site_status_name),1)]),_:2},1024))],64)):(m(),x(h,{key:1,class:"ml-2",type:"error"},{default:t(()=>[r(i(s(a)("siteEmpty")),1)]),_:1}))]),_:1},8,["label"]),e(p,{prop:"expire_time",label:s(a)("expireTime")},null,8,["label"]),e(p,{label:s(a)("operation"),align:"right",fixed:"right"},{default:t(({row:l})=>[l.site_status_name?(m(),x(v,{key:0,type:"primary",link:"",onClick:N=>D(l)},{default:t(()=>[r(i(s(a)("info")),1)]),_:2},1032,["onClick"])):$("",!0)]),_:1},8,["label"])]),_:1},8,["data"])]),_:1},8,["label"]),u.value.is_super_admin?$("",!0):(m(),x(I,{key:0,label:s(a)("userCreateSiteLimit"),name:"userCreateSiteLimit"},{default:t(()=>[n("div",Ce,[e(v,{type:"primary",onClick:_[1]||(_[1]=l=>k.value.setFormData())},{default:t(()=>[r(i(s(a)("addSserCreateSiteLimit")),1)]),_:1})]),e(B,{data:w.value,size:"large"},{default:t(()=>[e(p,{label:s(a)("siteGroup")},{default:t(({row:l})=>[r(i(c.value[l.group_id]?c.value[l.group_id].group_name:""),1)]),_:1},8,["label"]),e(p,{label:s(a)("createdSiteNum")},{default:t(({row:l})=>[r(i(c.value[l.group_id]?c.value[l.group_id].site_num:0),1)]),_:1},8,["label"]),e(p,{prop:"num",label:s(a)("createSiteNum"),align:"center"},null,8,["label"]),e(p,{prop:"month",label:s(a)("createSiteTimeLimit"),align:"center"},{default:t(({row:l})=>[r(i(l.month)+"个"+i(s(a)("month")),1)]),_:1},8,["label"]),e(p,{label:s(a)("operation"),align:"right",fixed:"right"},{default:t(({row:l})=>[e(v,{type:"primary",link:"",onClick:N=>k.value.setFormData(l.id)},{default:t(()=>[r(i(s(a)("edit")),1)]),_:2},1032,["onClick"]),e(v,{type:"primary",link:"",onClick:N=>F(l.id)},{default:t(()=>[r(i(s(a)("delete")),1)]),_:2},1032,["onClick"])]),_:1},8,["label"])]),_:1},8,["data"])]),_:1},8,["label"]))]),_:1},8,["modelValue","onTabClick"])]),_:1}),e(re,{ref_key:"createSiteLimitRef",ref:k,"site-group":c.value,uid:s(b),onComplete:C},null,8,["site-group","uid"])])),[[q,E.value]])}}});export{We as default};
