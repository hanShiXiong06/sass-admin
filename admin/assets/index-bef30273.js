import{d as f,x as y,f as v,r as s,l as b,n as k,h,c as x,a as o,e as r,t as w,w as l,i as c,u as I,aW as D,E as S}from"./index-904cb7a2.js";/* empty css                  *//* empty css                 */import{a as E,c as A,b as C}from"./config-e5332f70.js";const F={class:"main-container"},N={class:"!border-none mt-4",shadow:"never",style:{width:"640px"}},q={class:"flex ml-6 mt-6 mb-6 items-center"},B=o("div",{class:"text-slate-400 text-xs"},"站点KEY:",-1),P={class:"text-[#1F1F1F] font-bold ml-2"},W=f({__name:"index",setup(V){const d=y(),u=v();d.meta.title,s();const m=s(!1),t=s(!0),p=async()=>{t.value=!0;try{await A(),u.push("/channel/weapp/code")}catch{}finally{t.value=!1}};s(),(()=>{let a="00",e="-1";localStorage.getItem("admin.userinfo")&&(a=JSON.parse(localStorage.getItem("admin.userinfo")).uid),localStorage.getItem("site.userinfo")&&(e=JSON.parse(localStorage.getItem("site.userinfo")).uid),a===e&&(m.value=!0)})(),b(()=>({pub_id:[{required:!0,message:"聚推客pub_id必须填写",trigger:"blur"}],api_key:[{required:!0,message:"聚推客apikey必须填写",trigger:"blur"}],mapi_key:[{required:!0,message:"蚂蚁星球apikey必须填写",trigger:"blur"}],secret:[{required:!0,message:"蚂蚁星球secret必须填写",trigger:"blur"}]}));const i=k({...{pub_id:"",api_key:"",mapi_key:"",secret:"",site_key:""}});return(async()=>{t.value=!0;const a=await C();for(const e in i)i[e]=a.data[e];t.value=!1})(),(a,e)=>{const g=D,n=S;return h(),x("div",F,[o("div",N,[r(g,{type:"info",title:"请先在渠道-微信小程序里面配置好小程序APPID、密钥和上传密钥，小程序需要关闭白名单或者放行IP；这里上传的小程序带插件，没有申请插件会自动尝试申请",closable:!1,"show-icon":""}),o("div",q,[B,o("div",P,w(i.site_key),1)]),r(n,{loading:t.value,class:"mb-6 ml-6",type:"primary",plain:"",onClick:e[0]||(e[0]=_=>I(E)())},{default:l(()=>[c(" 申请小程序插件 ")]),_:1},8,["loading"]),r(n,{loading:t.value,class:"mb-6 ml-6",type:"primary",onClick:e[1]||(e[1]=_=>p())},{default:l(()=>[c(" 云上传小程序 ")]),_:1},8,["loading"])])])}}});export{W as default};