import{d as $,n as k,r as s,aS as B,aP as D,Q as L,U as f,q as t,h as I,c as N,e as p,w as u,a,t as _,u as r,i as Q,J as j,E as P,K as T,X as q}from"./index-904cb7a2.js";/* empty css                  *//* empty css                   *//* empty css                 *//* empty css                  *//* empty css                 *//* empty css                        */import{b as J}from"./browser-a1ac24ac.js";const K={class:"promote-flex flex"},M={class:"promote-img flex justify-center items-center bg-[#f8f8f8] w-[150px] h-[150px]"},O={class:"px-[20px] flex-1"},R={class:"mb-[10px]"},X=["href"],oe=$({__name:"goods-spread-popup",setup(z,{expose:h}){const d=k({}),l=s(!1),m=s("");s("");const i=s(""),n=s(""),c=s("");B().then(e=>{m.value=e.data.wap_url});const w=()=>{n.value=`${m.value}${c.value}`,J.toDataURL(n.value,{errorCorrectionLevel:"L",margin:0,width:120}).then(e=>{i.value=e})},x=(e,o="goods")=>{Object.assign(d,e),o=="goods"?c.value=`/addon/phone_shop/pages/goods/detail?goods_id=${d.goods_id}`:c.value=`/addon/phone_shop/pages/point/detail?id=${d.id}`,w(),l.value=!0},{copy:y,isSupported:b,copied:v}=D(),E=e=>{b.value||f({message:t("notSupportCopy"),type:"warning"}),y(e)};return L(v,()=>{v.value&&f({message:t("copySuccess"),type:"success"})}),h({showDialog:l,show:x}),(e,o)=>{const C=j,S=P,V=T,U=q;return I(),N("div",null,[p(U,{modelValue:l.value,"onUpdate:modelValue":o[1]||(o[1]=g=>l.value=g),title:r(t)("goodsSpreadTitle"),width:"500px","destroy-on-close":!0},{default:u(()=>[a("div",K,[a("div",M,[p(C,{src:i.value},null,8,["src"])]),a("div",O,[a("div",R,_(r(t)("spreadLink")),1),p(V,{class:"mb-[10px]",readonly:"",value:n.value},{append:u(()=>[p(S,{onClick:o[0]||(o[0]=g=>E(n.value))},{default:u(()=>[Q(_(r(t)("copy")),1)]),_:1})]),_:1},8,["value"]),a("a",{class:"text-primary",href:i.value,download:""},_(r(t)("downloadQrcode")),9,X)])])]),_:1},8,["modelValue","title"])])}}});export{oe as _};
