import{d as b,y as w,f as y,r as k,q as I,R as C,h as c,c as _,a as t,t as s,u as e,s as a,e as B,w as D,B as E,C as d,U as N,a7 as S,Y as T,p as j,g as M}from"./index-0e396751.js";/* empty css                   *//* empty css                */import{_ as R}from"./member_head-d9fd7b2c.js";import{a3 as V}from"./vipcard-7f8d9659.js";import{_ as q}from"./_plugin-vue_export-helper-c27b6911.js";const m=p=>(j("data-v-6f329340"),p=p(),M(),p),F={class:"main-container"},O={class:"detail-head !ml-[20px] !mb-[5px]"},P=m(()=>t("span",{class:"iconfont iconxiangzuojiantou !text-xs"},null,-1)),z={class:"ml-[1px]"},L=m(()=>t("span",{class:"adorn"},"|",-1)),U={class:"right"},Y={class:"member-info w-[250px]"},$={class:"flex items-center"},A={class:"text-[14px] w-[130px] text-right mr-[20px]"},G={class:"flex items-end text-[14px]"},H=["src"],J={key:1,class:"w-[50px] h-[50px] inline-block rounded-full",src:R,alt:""},K={class:"flex items-center mt-[15px]"},Q={class:"text-[14px] w-[130px] text-right mr-[20px]"},W={class:"text-[14px] text-[#666666]"},X={class:"flex items-center mt-[15px]"},Z={class:"text-[14px] w-[130px] text-right mr-[20px]"},tt={class:"text-[14px] text-[#666666]"},st={class:"flex items-center mt-[15px]"},et={class:"text-[14px] w-[130px] text-right mr-[20px]"},at={class:"text-[14px] text-[#666666]"},ot={class:"flex items-center mt-[15px]"},nt={class:"text-[14px] w-[130px] text-right mr-[20px]"},it={class:"text-[14px] text-[#666666]"},ct={class:"flex items-center mt-[15px]"},_t={class:"text-[14px] w-[130px] text-right mr-[20px]"},pt={class:"text-[14px] text-[#666666]"},xt={class:"flex items-center mt-[15px]"},rt={class:"text-[14px] w-[130px] text-right mr-[20px]"},lt={key:0,class:"text-[14px] text-[#666666]"},dt={key:1,class:"text-[14px] text-[#666666]"},mt={class:"flex items-center mt-[15px]"},ht={class:"text-[14px] w-[130px] text-right mr-[20px]"},ut={class:"text-[14px] text-[#666666]"},ft=b({__name:"detail",setup(p){const r=w(),h=y(),u=r.meta.title,x=k(!0),l=parseInt(r.query.id||0),o=I({});(async()=>{if(x.value=!0,l){const n=await(await V(l)).data;if(!n||Object.keys(n).length==0)return N.error(a("")),setTimeout(()=>{h.go(-1)},2e3),!1;Object.keys(n).forEach(i=>{o[i]=n[i]}),x.value=!1}else x.value=!1})();const f=()=>{history.back()};return(n,i)=>{const g=S,v=T;return C((c(),_("div",F,[t("div",O,[t("div",{class:"left",onClick:i[0]||(i[0]=vt=>f())},[P,t("span",z,s(e(a)("returnToPreviousPage")),1)]),L,t("span",U,s(e(u)),1)]),B(g,{class:"box-card !border-none",shadow:"never"},{default:D(()=>[t("div",Y,[t("div",$,[t("span",A,s(e(a)("headimg")),1),t("span",G,[o.image_thumb_small?(c(),_("img",{key:0,class:"w-[50px] h-[50px] inline-block rounded-[999px]",src:e(E)(o.image_thumb_small),alt:""},null,8,H)):(c(),_("img",J))])])]),t("div",K,[t("span",Q,s(e(a)("name")),1),t("span",W,s(o.name),1)]),t("div",X,[t("span",Z,s(e(a)("mobile")),1),t("span",tt,s(o.mobile),1)]),t("div",st,[t("span",et,s(e(a)("seniority")),1),t("span",at,s(o.seniority),1)]),t("div",ot,[t("span",nt,s(e(a)("number")),1),t("span",it,s(o.number),1)]),t("div",ct,[t("span",_t,s(e(a)("position")),1),t("span",pt,s(o.position),1)]),t("div",xt,[t("span",rt,s(e(a)("status")),1),o.status==0?(c(),_("span",lt,s(e(a)("disabled")),1)):d("",!0),o.status==1?(c(),_("span",dt,s(e(a)("normal")),1)):d("",!0)]),t("div",mt,[t("span",ht,s(e(a)("createTime")),1),t("span",ut,s(o.create_time),1)])]),_:1})])),[[v,x.value]])}}});const Bt=q(ft,[["__scopeId","data-v-6f329340"]]);export{Bt as default};
