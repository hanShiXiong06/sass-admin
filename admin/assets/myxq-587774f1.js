import{d as q,x as B,f as C,r as g,n as N,l as j,h as V,s as h,w as a,a as v,e as o,i as m,t as p,u,q as c,R as O,aW as S,au as L,av as P,L as $,K as A,E as G,M as J,X as K,Y as M}from"./index-904cb7a2.js";/* empty css                   *//* empty css                  *//* empty css                   *//* empty css                *//* empty css                  *//* empty css                 */import"./el-form-item-4ed993c7.js";/* empty css                       *//* empty css                 *//* empty css                 */import{e as T,g as W}from"./platform-fd2270fe.js";const X={style:{width:"640px"},class:"mb-2"},Y=v("a",{href:"https://www.haojingke.com/index.php/auth/login",target:"_blank"},"开放平台",-1),z={class:"dialog-footer"},me=q({__name:"myxq",emits:["complete"],setup(H,{expose:k,emit:x}){B(),C();const n=g(!1),i=g(!0),w={type:"",is_use:"1",api_key:"",secret:"",site_id:""},t=N({...w}),b=g(),D=j(()=>({api_key:[{required:!0,message:"请输入api_key",trigger:"blur"}],secret:[{required:!0,message:"请输入secret",trigger:"blur"}]})),E=async r=>{i.value||!r||await r.validate(async e=>{e&&(i.value=!0,t.site_id=JSON.parse(localStorage.getItem("site.siteInfo")).site_id,T(t).then(_=>{i.value=!1,n.value=!1,x("complete")}).catch(()=>{i.value=!1}))})};return k({showDialog:n,setFormData:async(r=null)=>{if(i.value=!0,Object.assign(t,w),r){const e=await(await W(r.type)).data;Object.keys(t).forEach(l=>{e[l]!=null&&(t[l]=e[l]),e.params[l]!=null&&(t[l]=e.params[l].value)})}i.value=!1}}),(r,e)=>{const l=S,_=L,R=P,d=$,y=A,f=G,F=J,I=K,U=M;return V(),h(I,{modelValue:n.value,"onUpdate:modelValue":e[5]||(e[5]=s=>n.value=s),title:"蚂蚁星球对接",width:"680px","destroy-on-close":!0},{footer:a(()=>[v("span",z,[o(f,{onClick:e[3]||(e[3]=s=>n.value=!1)},{default:a(()=>[m(p(u(c)("cancel")),1)]),_:1}),o(f,{type:"primary",loading:i.value,onClick:e[4]||(e[4]=s=>E(b.value))},{default:a(()=>[m(p(u(c)("confirm")),1)]),_:1},8,["loading"])])]),default:a(()=>[O((V(),h(F,{model:t,"label-width":"140px",ref_key:"formRef",ref:b,rules:u(D),class:"page-form"},{default:a(()=>[v("div",X,[o(l,{type:"info",title:"提示：请正确配置蚂蚁星球信息，并且启用该渠道，否则无法正常使用",closable:!1,"show-icon":""})]),o(d,{label:"是否启用"},{default:a(()=>[o(R,{modelValue:t.is_use,"onUpdate:modelValue":e[0]||(e[0]=s=>t.is_use=s)},{default:a(()=>[o(_,{label:1},{default:a(()=>[m(p(u(c)("startUsing")),1)]),_:1}),o(_,{label:0},{default:a(()=>[m(p(u(c)("statusDeactivate")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1}),o(d,{label:"蚂蚁星球api_key",prop:"api_key"},{default:a(()=>[o(y,{modelValue:t.api_key,"onUpdate:modelValue":e[1]||(e[1]=s=>t.api_key=s),placeholder:"请输入聚推客api_key",class:"input-width","show-word-limit":"",clearable:""},null,8,["modelValue"])]),_:1}),o(d,{label:"蚂蚁星球secret",prop:"secret"},{default:a(()=>[o(y,{modelValue:t.secret,"onUpdate:modelValue":e[2]||(e[2]=s=>t.secret=s),placeholder:"请输入蚂蚁星球secret",class:"input-width","show-word-limit":"",clearable:""},null,8,["modelValue"])]),_:1}),o(d,{label:"快速导航"},{default:a(()=>[o(f,null,{default:a(()=>[Y]),_:1})]),_:1})]),_:1},8,["model","rules"])),[[U,i.value]])]),_:1},8,["modelValue"])}}});export{me as default};
