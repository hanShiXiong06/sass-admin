import{d as F,r as _,q as T,f as Q,aO as z,Q as G,U as h,s as l,h as b,c as D,e as i,w as r,a as s,t as p,R as w,a0 as x,u as o,i as g,B as W,C as V,x as X,G as Z,K as ee,E as te,L as ae,M as se,J as le,a7 as oe}from"./index-0e396751.js";/* empty css                *//* empty css                 *//* empty css                        *//* empty css                */import"./el-form-item-4ed993c7.js";import{_ as ne}from"./index.vue_vue_type_style_index_0_lang-879dde6f.js";/* empty css                  *//* empty css                 */import{f as ie,h as pe}from"./diy-e7cda029.js";import{b as re}from"./browser-a1ac24ac.js";import{_ as de}from"./_plugin-vue_export-helper-c27b6911.js";/* empty css                  *//* empty css                   *//* empty css                     */const ue={class:"main-container"},ce={key:0,class:"flex flex-wrap min-w-[1200px]"},me={class:"page-item relative w-[340px] mr-[40px] pt-[90px] pb-[20px] bg-[#f7f7f7] bg-no-repeat"},_e={class:"absolute top-[54px] left-[50%] translate-x-[-50%] w-[130px] text-[14px] truncate text-center"},fe={class:"w-[320px] h-[550px] mx-auto"},ve=["id","src"],we={class:"w-[320px] h-[550px] mx-auto bg-body pt-[20px] px-[20px]"},xe={class:"font-bold text-xl mb-[40px]"},ge={class:"mb-[20px] flex flex-col"},ye={class:"mb-[10px]"},he={class:"flex"},be={class:"overflow-hidden w-[320px] h-[550px] mx-auto"},De=["src"],Ie={class:"w-[700px]"},Pe={class:"flex flex-wrap"},Ce={class:"info-wrap"},ke={class:"mt-[20px] p-[20px] flex items-center justify-between bg"},Ee={class:"font-bold"},Ue={class:"text-[#999] text-base"},Le={class:"text-center"},Te=F({__name:"index",setup(Ve){const f=_("DIY_INDEX"),e=T({}),I=Q(),v=_(""),P=_(""),n=_({name:""}),u=T({type:"",name:"",parent:"",page:"",title:"",action:""}),C=()=>{ie({type:f.value}).then(a=>{for(const t in a.data)e[t]=a.data[t];n.value.name=e.use_template.name,n.value.title=e.use_template.title,n.value.url=e.use_template.page,n.value.action=e.use_template.action,n.value.parent=e.use_template.parent,e.use_template.url&&(e.loadingIframe=!1,e.loadingDev=!1,e.isDisabledPop=!1,e.difference=0,v.value=e.domain_url.wap_domain,e.wapUrl=e.domain_url.wap_url,U())})};C();const k=_(!1);window.addEventListener("message",a=>{try{let t={type:""};if(typeof a.data=="string"?t=JSON.parse(a.data):typeof a.data=="object"&&(t=a.data),t.type&&["appOnLaunch","appOnReady"].indexOf(t.type)!=-1){e.loadingDev=!1,e.loadingIframe=!0;let m=new Date().getTime();e.difference=m-e.timeIframe,e.isDisabledPop=!1,k.value=!0}}catch(t){E(),console.log("diy index 后台接受数据错误",t)}},!1);const O=()=>{const a=JSON.stringify({type:"appOnReady",message:"加载完成"});window["previewIframe_"+f.value]&&window["previewIframe_"+f.value].contentWindow.postMessage(a,"*")},E=()=>{e.loadingDev=!0,e.isDisabledPop=!0,e.loadingIframe=!1},N=()=>{if(v.value.trim().length==0){h({type:"warning",message:`${l("wapDomainPlaceholder")}`});return}const a=v.value+"/wap";Z.set({key:"wap_domain",data:a}),e.use_template.url&&(e.wapUrl=a,U()),setTimeout(()=>{e.use_template.url&&(e.loadingIframe=!0,e.loadingDev=!1,e.isDisabledPop=!1)},100*3)},R=()=>{window.open("https://www.kancloud.cn/niucloud/niucloud-admin-develop/3213393")},U=()=>{e.use_template.wapPreview=e.wapUrl+e.use_template.url,e.shareUrl=e.wapUrl+"/",re.toDataURL(e.shareUrl,{errorCorrectionLevel:"L",margin:0,width:100}).then(c=>{P.value=c});const a=()=>{e.timeIframe=new Date().getTime(),O()};a();let t=0,m=setInterval(()=>{if(k.value||t>=50){clearInterval(m);return}a(),t++},200);setTimeout(()=>{e.difference==0&&E()},1e3*10)},S=()=>{const a={back:"/site/diy/index"};e.use_template.id?a.id=e.use_template.id:e.use_template.type?a.name=e.use_template.type:e.use_template.url&&(a.url=e.use_template.url);const t=I.resolve({path:"/decorate/edit",query:a});window.open(t.href)},M=()=>{let a=e.use_template.page;e.use_template.url?a=e.use_template.url:e.use_template.id&&(a+="?id="+e.use_template.id);const t=I.resolve({path:"/preview/wap",query:{page:a}});window.open(t.href)},y=_(!1),$=()=>{u.type=f.value,u.name=n.value.name,u.page=n.value.url,u.title=n.value.title,u.action=n.value.action,u.parent=n.value.parent,!y.value&&(y.value=!0,pe({...u}).then(a=>{y.value=!1,C()}))},{copy:B,isSupported:A,copied:L}=z(),J=a=>{A.value||h({message:l("notSupportCopy"),type:"warning"}),B(a)};return G(L,()=>{L.value&&h({message:l("copySuccess"),type:"success"})}),(a,t)=>{const m=ee,c=te,Y=ne,q=ae,H=se,K=le,j=oe;return b(),D("div",ue,[i(j,{class:"box-card !border-none",shadow:"never"},{default:r(()=>[e.use_template?(b(),D("div",ce,[s("div",me,[s("p",_e,p(e.use_template.title),1),w(s("div",fe,[w(s("iframe",{id:"previewIframe_"+f.value,class:"w-[320px] h-[550px] mx-auto",src:e.use_template.wapPreview,frameborder:"0"},null,8,ve),[[x,e.loadingIframe]]),w(s("div",we,[s("div",xe,p(o(l)("developTitle")),1),s("div",ge,[s("text",ye,p(o(l)("wapDomain")),1),i(m,{modelValue:v.value,"onUpdate:modelValue":t[0]||(t[0]=d=>v.value=d),modelModifiers:{trim:!0},placeholder:o(l)("wapDomainPlaceholder"),clearable:""},null,8,["modelValue","placeholder"])]),s("div",he,[i(c,{type:"primary",onClick:t[1]||(t[1]=d=>N())},{default:r(()=>[g(p(o(l)("confirm")),1)]),_:1}),i(c,{type:"primary",onClick:t[2]||(t[2]=d=>R()),plain:""},{default:r(()=>[g(p(o(l)("settingTips")),1)]),_:1})])],512),[[x,e.loadingDev]])],512),[[x,e.use_template.url]]),w(s("div",be,[e.use_template.cover?(b(),D("img",{key:0,class:"max-w-full",src:o(W)(e.use_template.cover)},null,8,De)):V("",!0)],512),[[x,!e.use_template.wapPreview]]),s("div",{class:X(["popup-wrap absolute inset-x-0 inset-y-0 select-none",{disabled:e.isDisabledPop}])},null,2)]),s("div",Ie,[s("div",Pe,[i(Y,{modelValue:n.value,"onUpdate:modelValue":t[3]||(t[3]=d=>n.value=d),ignore:["DIY_LINK","DIY_JUMP_OTHER_APPLET","DIY_MAKE_PHONE_CALL"],onSuccess:$},{default:r(()=>[i(c,{type:"primary"},{default:r(()=>[g(p(o(l)("changePage")),1)]),_:1})]),_:1},8,["modelValue"]),w(i(c,{type:"primary",onClick:t[4]||(t[4]=d=>S()),class:"ml-[12px]"},{default:r(()=>[g(p(o(l)("decorate")),1)]),_:1},512),[[x,e.use_template.action=="decorate"]])]),s("div",Ce,[s("div",ke,[s("div",null,[s("div",Ee,p(o(l)("H5")),1),i(H,{"label-width":"40px",class:"mt-[5px]"},{default:r(()=>[i(q,{label:o(l)("link"),class:"mb-[5px]"},{default:r(()=>[i(m,{readonly:"",value:e.shareUrl,class:"!w-[390px]"},{append:r(()=>[i(c,{onClick:t[5]||(t[5]=d=>J(e.shareUrl)),class:"bg-primary copy"},{default:r(()=>[g(p(o(l)("copy")),1)]),_:1})]),_:1},8,["value"])]),_:1},8,["label"])]),_:1}),s("div",Ue,p(o(l)("scanQRCodeOnRight")),1)]),s("div",Le,[i(K,{class:"w-[100px] h-[100px] mb-[5px]",src:P.value},null,8,["src"]),s("div",{onClick:t[6]||(t[6]=d=>M()),class:"text-primary text-base cursor-pointer"},p(o(l)("preview")),1)])])])])])):V("",!0)]),_:1})])}}});const Qe=de(Te,[["__scopeId","data-v-6a7123d7"]]);export{Qe as default};
