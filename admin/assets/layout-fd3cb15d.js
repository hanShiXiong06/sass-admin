import{d as Y,x as G,r as i,q as r,h as p,c as g,a as t,e as u,w as s,t as d,u as n,R as H,s as K,i as h,F as $,T as Q,v as L,A as O,B as W,cm as Z,cn as ee,co as te,cp as oe,J as le,ad as ae,E as se,ae as ne,a7 as re,bv as ue,V as ce,X as ie,Y as de}from"./index-904cb7a2.js";/* empty css                   *//* empty css                  *//* empty css                   *//* empty css                     *//* empty css                        *//* empty css                 *//* empty css                  *//* empty css                *//* empty css                 *//* empty css                    */import"./el-tooltip-4ed993c7.js";/* empty css                  *//* empty css                        *//* empty css               *//* empty css                 *//* empty css                        */import{_ as _e}from"./icon-addon-339e16d0.js";import{g as me}from"./addon-59d18bab.js";const E="bussiness",S="/static/resource/images/system/layout_bussiness.png",ve={layout:E,cover:S},pe=Object.freeze(Object.defineProperty({__proto__:null,cover:S,default:ve,layout:E},Symbol.toStringTag,{value:"Module"})),V="darkside",T="/static/resource/images/system/layout_darkside.png",ye={layout:V,cover:T},fe=Object.freeze(Object.defineProperty({__proto__:null,cover:T,default:ye,layout:V},Symbol.toStringTag,{value:"Module"})),z="default",B="/static/resource/images/system/layout_default.png",ge={layout:z,cover:B},be=Object.freeze(Object.defineProperty({__proto__:null,cover:B,default:ge,layout:z},Symbol.toStringTag,{value:"Module"})),D="profession",N="/static/resource/images/system/layout_profession.png",he={layout:D,cover:N},xe=Object.freeze(Object.defineProperty({__proto__:null,cover:N,default:he,layout:D},Symbol.toStringTag,{value:"Module"})),ke={class:"main-container"},je={class:"flex justify-between items-center"},Ce={class:"text-page-title"},we={class:"mt-[20px]"},$e={class:"flex items-center"},Le=t("div",{class:"flex items-center w-full h-full"},[t("img",{class:"w-full h-full",src:_e,alt:""})],-1),Oe={class:"flex-1 ml-2 truncate"},Ee={class:"h-[300px]"},Se={class:"panel-title !text-sm"},Ve={class:"flex justify-items-stretch"},Te=["onClick"],ze=["src"],Be=["src"],De={class:"panel-title !text-sm"},Ne={class:"flex justify-items-stretch"},Pe={class:"dialog-footer"},nt=Y({__name:"layout",setup(Ae){const P=G().meta.title,y=i(!0),c=i({}),x=i([]),_=i(null),m=i({}),k=i([{title:r("manyApp"),key:"system",icon:""}]),j=Object.assign({"/src/layout/bussiness/layout.json":pe,"/src/layout/darkside/layout.json":fe,"/src/layout/default/layout.json":be,"/src/layout/profession/layout.json":xe});for(const a in j){const e=j[a];x.value.push(e.default)}const C=Object.assign({});me().then(({data:a})=>{Object.keys(a).forEach(e=>{const f=a[e];f.type=="app"&&k.value.push(f)}),y.value=!1}),(()=>{Z().then(({data:a})=>{c.value=a}),ee().then(({data:a})=>{m.value=a})})();const l=i(""),v=i(!1),A=async a=>{a!="system"&&(_.value=null,Object.keys(C).forEach(e=>{e.indexOf(`/addon/${a}/`)!=-1&&(_.value=C[e].default)})),l.value=a,v.value=!0},M=()=>{te({key:l.value,value:m.value[l.value]?m.value[l.value]:""}),oe({key:l.value,value:c.value[l.value]?c.value[l.value]:"default"}),v.value=!1};return(a,e)=>{const f=le,w=ae,b=se,F=ne,I=re,R=ue,U=ce,q=ie,J=de;return p(),g($,null,[t("div",ke,[u(I,{class:"box-card !border-none",shadow:"never"},{default:s(()=>[t("div",je,[t("span",Ce,d(n(P)),1)]),t("div",we,[H((p(),K(F,{data:k.value,size:"large"},{empty:s(()=>[t("span",null,d(y.value?"":n(r)("emptyData")),1)]),default:s(()=>[u(w,{prop:"title",label:n(r)("app"),"min-width":"120"},{default:s(({row:o})=>[t("div",$e,[u(f,{class:"w-[40px] h-[40px] rounded-md overflow-hidden",src:o.icon,fit:"contain"},{error:s(()=>[Le]),_:2},1032,["src"]),t("div",Oe,d(o.title),1)])]),_:1},8,["label"]),u(w,{label:n(r)("operation"),align:"right",fixed:"right",width:"100"},{default:s(({row:o})=>[u(b,{type:"primary",link:"",onClick:X=>A(o.key)},{default:s(()=>[h(d(n(r)("setting")),1)]),_:2},1032,["onClick"])]),_:1},8,["label"])]),_:1},8,["data"])),[[J,y.value]])])]),_:1})]),u(q,{modelValue:v.value,"onUpdate:modelValue":e[4]||(e[4]=o=>v.value=o),title:n(r)("selectLayout"),width:"800","destroy-on-close":!0},{footer:s(()=>[t("span",Pe,[u(b,{onClick:e[2]||(e[2]=o=>v.value=!1)},{default:s(()=>[h(d(n(r)("cancel")),1)]),_:1}),u(b,{type:"primary",loading:y.value,onClick:e[3]||(e[3]=o=>M())},{default:s(()=>[h(d(n(r)("confirm")),1)]),_:1},8,["loading"])])]),default:s(()=>[t("div",Ee,[u(U,null,{default:s(()=>[t("h3",Se,d(n(r)("layout")),1),t("div",Ve,[(p(!0),g($,null,Q(x.value,o=>(p(),g("div",{class:L(["w-[180px] h-[130px] mr-[10px] mb-[10px] border hover:border-primary cursor-pointer",{"border-primary":!c.value[l.value]&&o.layout=="default"||c.value[l.value]==o.layout}]),onClick:X=>c.value[l.value]=o.layout},[t("img",{src:n(O)(o.cover),class:"w-full h-full"},null,8,ze)],10,Te))),256)),_.value?(p(),g("div",{key:0,class:L(["w-[180px] h-[130px] mr-[20px] border hover:border-primary cursor-pointer",{"border-primary":!c.value[l.value]&&_.value.layout=="default"||c.value[l.value]==_.value.layout}]),onClick:e[0]||(e[0]=o=>c.value[l.value]=_.value.layout)},[t("img",{src:n(O)(_.value.cover),class:"w-full h-full"},null,8,Be)],2)):W("",!0)]),t("h3",De,d(n(r)("themeColor")),1),t("div",Ne,[u(R,{modelValue:m.value[l.value],"onUpdate:modelValue":e[1]||(e[1]=o=>m.value[l.value]=o),size:"large"},null,8,["modelValue"])])]),_:1})])]),_:1},8,["modelValue","title"])],64)}}});export{nt as default};
