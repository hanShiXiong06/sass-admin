import{d as U,x as J,f as Y,r as G,n as H,P as Q,aK as W,h as _,c as D,e as a,w as l,a as o,t as n,u as e,br as X,q as t,i as d,R as Z,s as x,A as ee,B as N,a5 as V,E as te,aL as le,aM as ae,ay as ne,K as se,L as oe,M as ie,a7 as pe,J as ce,ad as de,ae as re,az as me,Y as _e}from"./index-904cb7a2.js";/* empty css                   *//* empty css                    *//* empty css                 *//* empty css                    */import"./el-tooltip-4ed993c7.js";/* empty css                  *//* empty css                     *//* empty css                        *//* empty css               *//* empty css                 *//* empty css                        *//* empty css                *//* empty css                */import"./el-form-item-4ed993c7.js";/* empty css                 *//* empty css                *//* empty css                  */import{_ as $}from"./category_default-6c62f083.js";import{g as ue,i as fe,j as ve,d as he}from"./tools-61cc6978.js";const xe={class:"main-container"},be={class:"flex justify-between items-center"},ye={class:"text-page-title"},ge={class:"text-[14px] font-[700]"},ke={class:"text-[#999]"},we={class:"mt-[20px] mb-[40px] h-[32px]"},Ce={class:"text-[14px] font-[700]"},Ee={class:"text-[#999]"},Be={class:"mt-[20px] mb-[40px] h-[32px]"},De={class:"text-[14px] font-[700]"},Ne={class:"text-[#999]"},Ve={class:"mt-[20px] mb-[40px] h-[32px]"},$e={class:"text-[14px] font-[700]"},Fe={class:"text-[#999]"},Te={class:"mt-[20px] mb-[40px] h-[32px]"},je={class:"text-[14px] font-[700]"},Ae={class:"text-[#999]"},Le={class:"mt-[20px] mb-[40px] h-[32px]"},Re={class:"flex justify-between"},Pe={class:"flex items-center justify-between"},Me=o("img",{class:"w-[45px] h-[45px]",src:$,alt:""},null,-1),Oe={key:1,class:"w-[45px] h-[45px]",src:$,alt:""},Ie={class:"flex-1 w-[236px] pl-[15px] truncate"},ct=U({__name:"index",setup(Se){const F=J(),y=Y(),T=F.meta.title,g=G(null),v=H({params:{search:""},loading:!1,data:[],activeName:"developmentProcess",active:0}),{params:b,loading:r,data:j,activeName:u,active:qe}=Q(v);W(()=>{window.addonActiveName&&(v.activeName=window.addonActiveName+"",window.addonActiveName=null),h()});const h=()=>{r.value=!0,ue(v.params).then(p=>{v.data=p.data,r.value=!1}).catch(()=>{r.value=!1})},A=p=>{p&&(p.resetFields(),h())},L=p=>{y.push({path:"/tools/addon_edit",query:{key:p}})},k=p=>{window.open(p,"_blank")},R=p=>{r.value=!0,fe(p.key).then(i=>{r.value=!1,ve(p.key).then(c=>{V.alert(`插件打包成功，插件包所在位置：网站根目录${c.data}下请手动进行下载`,t("warning"))}).catch()}).catch(()=>{r.value=!1})},P=p=>{V.confirm(t("codeDeleteTips"),t("warning"),{confirmButtonText:t("confirm"),cancelButtonText:t("cancel"),type:"warning"}).then(()=>{r.value=!0,he(p).then(()=>{h()}).catch(()=>{r.value=!1})})};return(p,i)=>{const c=te,f=le,M=ae,w=ne,O=se,C=oe,I=ie,E=pe,S=ce,m=de,q=re,z=me,K=_e;return _(),D("div",xe,[a(E,{class:"box-card !border-none",shadow:"never"},{default:l(()=>[o("div",be,[o("span",ye,n(e(T)),1)]),a(z,{modelValue:e(u),"onUpdate:modelValue":i[7]||(i[7]=s=>X(u)?u.value=s:null),class:"mt-[20px]"},{default:l(()=>[a(w,{label:e(t)("developmentProcess"),name:"developmentProcess"},{default:l(()=>[a(M,{active:5,direction:"vertical"},{default:l(()=>[a(f,null,{title:l(()=>[o("p",ge,n(e(t)("step1")),1)]),description:l(()=>[o("span",ke,n(e(t)("describe1")),1),o("div",we,[a(c,{type:"primary",onClick:i[0]||(i[0]=s=>e(y).push({path:"/tools/addon_edit"}))},{default:l(()=>[d(n(e(t)("btn1")),1)]),_:1})])]),_:1}),a(f,null,{title:l(()=>[o("p",Ce,n(e(t)("step2")),1)]),description:l(()=>[o("span",Ee,n(e(t)("describe2")),1),o("div",Be,[a(c,{type:"primary",plain:"",onClick:i[1]||(i[1]=s=>u.value="pluginList")},{default:l(()=>[d(n(e(t)("btn2")),1)]),_:1})])]),_:1}),a(f,null,{title:l(()=>[o("p",De,n(e(t)("step3")),1)]),description:l(()=>[o("span",Ne,n(e(t)("describe3")),1),o("div",Ve,[a(c,{type:"primary",plain:"",onClick:i[2]||(i[2]=s=>k("https://www.kancloud.cn/niucloud/niucloud-admin-develop/3225439"))},{default:l(()=>[d(n(e(t)("btn3")),1)]),_:1})])]),_:1}),a(f,null,{title:l(()=>[o("p",$e,n(e(t)("step4")),1)]),description:l(()=>[o("span",Fe,n(e(t)("describe4")),1),o("div",Te,[a(c,{type:"primary",plain:"",onClick:i[3]||(i[3]=s=>u.value="pluginList")},{default:l(()=>[d(n(e(t)("btn4")),1)]),_:1})])]),_:1}),a(f,null,{title:l(()=>[o("p",je,n(e(t)("step5")),1)]),description:l(()=>[o("span",Ae,n(e(t)("describe5")),1),o("div",Le,[a(c,{type:"primary",plain:"",onClick:i[4]||(i[4]=s=>k("https://www.niucloud.com/app"))},{default:l(()=>[d(n(e(t)("btn5")),1)]),_:1})])]),_:1})]),_:1})]),_:1},8,["label"]),a(w,{label:e(t)("pluginList"),name:"pluginList"},{default:l(()=>[a(E,{class:"box-card !border-none mb-[10px] table-search-wrap",shadow:"never"},{default:l(()=>[o("div",Re,[a(I,{inline:!0,model:e(b),ref_key:"searchFormRef",ref:g},{default:l(()=>[a(C,{label:e(t)("title"),prop:"search"},{default:l(()=>[a(O,{modelValue:e(b).search,"onUpdate:modelValue":i[5]||(i[5]=s=>e(b).search=s),modelModifiers:{trim:!0},placeholder:e(t)("titlePlaceholder")},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),a(C,null,{default:l(()=>[a(c,{type:"primary",onClick:h},{default:l(()=>[d(n(e(t)("search")),1)]),_:1}),a(c,{onClick:i[6]||(i[6]=s=>A(g.value))},{default:l(()=>[d(n(e(t)("reset")),1)]),_:1})]),_:1})]),_:1},8,["model"])])]),_:1}),Z((_(),x(q,{data:e(j),size:"large",class:"pt-[5px]"},{empty:l(()=>[o("span",null,n(e(t)("emptyData")),1)]),default:l(()=>[a(m,{label:e(t)("title"),align:"left","min-width":"320"},{default:l(({row:s})=>[o("div",Pe,[s.icon?(_(),x(S,{key:0,class:"w-[45px] h-[45px]",src:s.icon.indexOf("data:image")!=-1?s.icon:e(ee)(s.icon),fit:"contain"},{error:l(()=>[Me]),_:2},1032,["src"])):(_(),D("img",Oe)),o("div",Ie,n(s.title),1)])]),_:1},8,["label"]),a(m,{prop:"key",label:e(t)("key"),align:"center","min-width":"200"},null,8,["label"]),a(m,{prop:"type_name",label:e(t)("type"),align:"center","min-width":"200"},null,8,["label"]),a(m,{prop:"author",label:e(t)("author"),align:"center","min-width":"200"},null,8,["label"]),a(m,{prop:"version",label:e(t)("version"),align:"center","min-width":"200"},null,8,["label"]),a(m,{label:e(t)("status"),align:"center","min-width":"200"},{default:l(({row:s})=>[d(n(Object.keys(s.install_info).length?"已安装":"未安装"),1)]),_:1},8,["label"]),a(m,{label:e(t)("operation"),fixed:"right",align:"right",width:"180","show-overflow-tooltip":!0},{default:l(({row:s})=>[a(c,{type:"primary",link:"",onClick:B=>L(s.key)},{default:l(()=>[d(n(e(t)("edit")),1)]),_:2},1032,["onClick"]),Object.keys(s.install_info).length?(_(),x(c,{key:0,type:"primary",link:"",onClick:B=>R(s)},{default:l(()=>[d(n(e(t)("step4")),1)]),_:2},1032,["onClick"])):N("",!0),Object.keys(s.install_info).length?N("",!0):(_(),x(c,{key:1,type:"primary",link:"",onClick:B=>P(s.key)},{default:l(()=>[d(n(e(t)("delete")),1)]),_:2},1032,["onClick"]))]),_:1},8,["label"])]),_:1},8,["data"])),[[K,e(r)]])]),_:1},8,["label"])]),_:1},8,["modelValue"])]),_:1})])}}});export{ct as default};