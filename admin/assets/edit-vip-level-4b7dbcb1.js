import{d as T,q as v,r as j,a2 as F,h as _,c as d,R as f,a0 as g,u as t,a as l,t as p,s as i,e as s,w as a,i as b,F as h,T as L,x as R,B as $,b as z,a1 as A,L as I,M,E as O,X as U}from"./index-0e396751.js";/* empty css                  *//* empty css                   *//* empty css                  *//* empty css                */import"./el-form-item-4ed993c7.js";import{u as q}from"./diy-0604e925.js";const P={class:"content-wrap"},X={class:"edit-attr-item-wrap"},G={class:"mb-[10px]"},H={class:"flex flex-wrap"},J=["onClick"],K=["src"],Q={class:"dialog-footer"},W={class:"style-wrap"},Y=T({__name:"edit-vip-level",setup(Z,{expose:x}){const e=q();e.editComponent.ignore=["componentBgColor","componentBgUrl"];const o=v({title:e.editComponent.styleName,value:e.editComponent.style}),r=j(!1),C=()=>{r.value=!0,o.title=e.editComponent.styleName,o.value=e.editComponent.style},w=v([{url:"static/resource/images/diy/member/member_level_style1.jpg",title:"风格1",value:"style-1"},{url:"static/resource/images/diy/member/member_level_style2.png",title:"风格2",value:"style-2"},{url:"static/resource/images/diy/member/member_level_style4.png",title:"风格3",value:"style-4"}]),S=c=>{o.title=c.title,o.value=c.value},k=()=>{e.editComponent.styleName=o.title,e.editComponent.style=o.value,r.value=!1};return x({}),(c,m)=>{const B=F("ArrowRight"),E=A,N=I,V=M,u=O,D=U;return _(),d(h,null,[f(l("div",P,[l("div",X,[l("h3",G,p(t(i)("selectStyle")),1),s(V,{"label-width":"80px",class:"px-[10px]"},{default:a(()=>[s(N,{label:t(i)("selectStyle"),class:"flex"},{default:a(()=>[l("span",{class:"text-primary flex-1 cursor-pointer",onClick:C},p(t(e).editComponent.styleName),1),s(E,null,{default:a(()=>[s(B)]),_:1})]),_:1},8,["label"])]),_:1}),s(D,{modelValue:r.value,"onUpdate:modelValue":m[1]||(m[1]=n=>r.value=n),title:t(i)("selectStyle"),width:"660px"},{footer:a(()=>[l("span",Q,[s(u,{onClick:m[0]||(m[0]=n=>r.value=!1)},{default:a(()=>[b(p(t(i)("cancel")),1)]),_:1}),s(u,{type:"primary",onClick:k},{default:a(()=>[b(p(t(i)("confirm")),1)]),_:1})])]),default:a(()=>[l("div",H,[(_(!0),d(h,null,L(w,(n,y)=>(_(),d("div",{key:y,class:R([{"border-primary":o.value==n.value,"!mr-[0]":[(y+1)%3]==0},"flex my-[5px] items-center justify-center overflow-hidden w-[200px] h-[100px] mr-[12px] cursor-pointer border bg-gray-50"]),onClick:ee=>S(n)},[l("img",{src:t($)(n.url)},null,8,K)],10,J))),128))])]),_:1},8,["modelValue","title"])])],512),[[g,t(e).editTab=="content"]]),f(l("div",W,[z(c.$slots,"style")],512),[[g,t(e).editTab=="style"]])],64)}}}),ie=Object.freeze(Object.defineProperty({__proto__:null,default:Y},Symbol.toStringTag,{value:"Module"}));export{ie as _};
