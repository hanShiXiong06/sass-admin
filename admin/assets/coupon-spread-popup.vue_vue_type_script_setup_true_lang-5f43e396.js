import{d as k,q as B,r as o,aR as D,aO as L,Q as $,U as g,s as t,h as I,c as N,e as p,w as i,a,t as u,u as r,i as Q,J as j,E as O,K as R,X as T}from"./index-0e396751.js";/* empty css                  *//* empty css                   *//* empty css                 *//* empty css                  *//* empty css                 *//* empty css                        */import{b as q}from"./browser-a1ac24ac.js";const J={class:"promote-flex flex"},K={class:"promote-img flex justify-center items-center bg-[#f8f8f8] w-[150px] h-[150px]"},M={class:"px-[20px] flex-1"},P={class:"mb-[10px]"},X=["href"],oe=k({__name:"coupon-spread-popup",setup(z,{expose:w}){const d=B({}),s=o(!1),m=o("");o("");const c=o(""),l=o(""),_=o("");D().then(e=>{m.value=e.data.wap_url});const x=()=>{l.value=`${m.value}${_.value}`,q.toDataURL(l.value,{errorCorrectionLevel:"L",margin:0,width:120}).then(e=>{c.value=e})},h=e=>{Object.assign(d,e),_.value=`/addon/shop/pages/coupon/detail?coupon_id=${d.id}`,x(),s.value=!0},{copy:y,isSupported:b,copied:v}=L(),E=e=>{b.value||g({message:t("notSupportCopy"),type:"warning"}),y(e)};return $(v,()=>{v.value&&g({message:t("copySuccess"),type:"success"})}),w({showDialog:s,show:h}),(e,n)=>{const C=j,V=O,S=R,U=T;return I(),N("div",null,[p(U,{modelValue:s.value,"onUpdate:modelValue":n[1]||(n[1]=f=>s.value=f),title:r(t)("couponSpreadTitle"),width:"500px","destroy-on-close":!0},{default:i(()=>[a("div",J,[a("div",K,[p(C,{src:c.value},null,8,["src"])]),a("div",M,[a("div",P,u(r(t)("spreadLink")),1),p(S,{class:"mb-[10px]",readonly:"",value:l.value},{append:i(()=>[p(V,{onClick:n[0]||(n[0]=f=>E(l.value))},{default:i(()=>[Q(u(r(t)("copy")),1)]),_:1})]),_:1},8,["value"]),a("a",{class:"text-primary",href:c.value,download:""},u(r(t)("downloadQrcode")),9,X)])])]),_:1},8,["modelValue","title"])])}}});export{oe as _};
