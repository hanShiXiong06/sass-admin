import{_ as L}from"./index.vue_vue_type_script_setup_true_lang-ee99396e.js";import{d as M,q as d,r as O,n as S,a2 as q,h as c,c as g,R as _,a0 as f,u as o,a as m,t as r,e as t,w as i,i as w,F as E,T as K,v as X,A as H,s as D,B as x,b as J,a1 as Q,L as W,M as Y,E as Z,X as ee,K as oe,au as te,av as ne,bz as le,bv as de}from"./index-904cb7a2.js";/* empty css                        *//* empty css                 *//* empty css                  *//* empty css                  *//* empty css                        */import"./el-tooltip-4ed993c7.js";/* empty css                  *//* empty css                       *//* empty css                 */import{_ as ie}from"./index.vue_vue_type_style_index_0_lang-11222f02.js";import me from"./index-e888fa8d.js";/* empty css                  *//* empty css                   *//* empty css                */import"./el-form-item-4ed993c7.js";import{u as ae}from"./diy-65820ac1.js";import pe from"./newcomer-goods-select-popup-98f30185.js";const re={class:"content-wrap"},se={class:"edit-attr-item-wrap"},ue={class:"mb-[10px]"},Ce={class:"flex flex-wrap"},ce=["onClick"],be=["src"],ge={class:"dialog-footer"},_e={class:"edit-attr-item-wrap"},fe={class:"mb-[10px]"},we={class:"edit-attr-item-wrap"},ye={class:"mb-[10px]"},xe={class:"style-wrap"},he={class:"edit-attr-item-wrap"},ve={class:"mb-[10px]"},Ve={key:0,class:"edit-attr-item-wrap"},Be={class:"mb-[10px]"},Se={class:"edit-attr-item-wrap"},Ee={class:"mb-[10px]"},De=M({__name:"edit-shop-newcomer",setup(Re,{expose:R}){const e=ae();e.editComponent.ignore=["componentBgUrl"],e.editComponent.verify=p=>{const n={code:!0,message:""};return e.value[p].source=="custom"&&e.value[p].goods_ids.length==0&&(n.code=!1,n.message=d("goodsPlaceholder")),n};const b=O(!1),T=()=>{s.title=e.editComponent.style.title,s.value=e.editComponent.style.value,b.value=!0},k=p=>{s.title=p.title,s.value=p.value},U=()=>{e.editComponent.style.title=s.title,e.editComponent.style.value=s.value,h(e.editComponent.style.value),b.value=!1},G=S([{url:"addon/shop/diy/newcomer/style_01.png",title:"风格1",value:"style-1"},{url:"addon/shop/diy/newcomer/style_02.png",title:"风格2",value:"style-2"},{url:"addon/shop/diy/newcomer/style_03.png",title:"风格3",value:"style-3"},{url:"addon/shop/diy/newcomer/style_04.png",title:"风格4",value:"style-4"}]),h=p=>{p=="style-1"?(e.editComponent.textImg="addon/shop/diy/newcomer/style_title_01.png",e.editComponent.countDown.numberColor="rgba(255, 0, 0, 1)",e.editComponent.countDown.numberBg.startColor="rgba(255, 255, 255, 1)",e.editComponent.countDown.numberBg.endColor="",e.editComponent.countDown.otherColor="rgba(255, 255, 255, 1)",e.editComponent.textColor="#303133",e.editComponent.pageStartBgColor="",e.editComponent.pageEndBgColor="",e.editComponent.pageGradientAngle="to bottom",e.editComponent.componentStartBgColor="#ff6D1A",e.editComponent.componentEndBgColor="rgba(255, 70, 56, 1)",e.editComponent.componentGradientAngle="to right",e.editComponent.bottomRounded=12,e.editComponent.topRounded=12,e.editComponent.elementBgColor="",e.editComponent.bottomElementRounded=10,e.editComponent.topElementRounded=10,e.editComponent.margin.top=10,e.editComponent.margin.bottom=0,e.editComponent.margin.both=10):p=="style-2"?(e.editComponent.textImg="addon/shop/diy/newcomer/style_title_02.png",e.editComponent.countDown.numberColor="rgba(255, 255, 255, 1)",e.editComponent.countDown.numberBg.startColor="rgba(255, 44, 54, 1)",e.editComponent.countDown.numberBg.endColor="",e.editComponent.countDown.otherColor="rgba(102, 102, 102, 1)",e.editComponent.textColor="#303133",e.editComponent.pageStartBgColor="",e.editComponent.pageEndBgColor="",e.editComponent.pageGradientAngle="to bottom",e.editComponent.componentStartBgColor="rgba(255, 255, 255, 1)",e.editComponent.componentEndBgColor="",e.editComponent.componentGradientAngle="to bottom",e.editComponent.bottomRounded=12,e.editComponent.topRounded=12,e.editComponent.elementBgColor="",e.editComponent.bottomElementRounded=5,e.editComponent.topElementRounded=5,e.editComponent.margin.top=10,e.editComponent.margin.bottom=0,e.editComponent.margin.both=10):p=="style-3"?(e.editComponent.textImg="addon/shop/diy/newcomer/style_title_03.png",e.editComponent.subTitle.text="查看更多",e.editComponent.subTitle.textColor="rgba(239, 0, 12, 1)",e.editComponent.subTitle.startColor="rgba(255, 248, 217, 1)",e.editComponent.subTitle.endColor="rgba(255, 254, 251, 1)",e.editComponent.subTitle.link.name="",e.editComponent.countDown.numberColor="rgba(239, 0, 12, 1)",e.editComponent.countDown.numberBg.startColor="rgba(255, 248, 217, 1)",e.editComponent.countDown.numberBg.endColor="rgba(255, 253, 246, 1)",e.editComponent.countDown.otherColor="rgba(255, 253, 246, 1)",e.editComponent.textColor="#303133",e.editComponent.pageStartBgColor="",e.editComponent.pageEndBgColor="",e.editComponent.pageGradientAngle="to bottom",e.editComponent.componentStartBgColor="rgba(255, 12, 16, 1)",e.editComponent.componentEndBgColor="rgba(255, 101, 18, 1)",e.editComponent.componentGradientAngle="to right",e.editComponent.bottomRounded=12,e.editComponent.topRounded=12,e.editComponent.elementBgColor="",e.editComponent.bottomElementRounded=0,e.editComponent.topElementRounded=0,e.editComponent.margin.top=10,e.editComponent.margin.bottom=0,e.editComponent.margin.both=10):p=="style-4"&&(e.editComponent.textImg="addon/shop/diy/newcomer/style_title_02.png",e.editComponent.countDown.numberColor="rgba(255, 255, 255, 1)",e.editComponent.countDown.numberBg.startColor="",e.editComponent.countDown.numberBg.endColor="",e.editComponent.countDown.otherColor="rgba(255, 253, 253, 1)",e.editComponent.textColor="#303133",e.editComponent.pageStartBgColor="",e.editComponent.pageEndBgColor="",e.editComponent.pageGradientAngle="to bottom",e.editComponent.componentStartBgColor="rgba(255, 255, 255, 1)",e.editComponent.componentEndBgColor="rgba(255, 255, 255, 1)",e.editComponent.componentGradientAngle="to bottom",e.editComponent.bottomRounded=12,e.editComponent.topRounded=12,e.editComponent.elementBgColor="",e.editComponent.bottomElementRounded=10,e.editComponent.topElementRounded=10,e.editComponent.margin.top=10,e.editComponent.margin.bottom=0,e.editComponent.margin.both=10)},s=S({title:e.editComponent.style.title,value:e.editComponent.style.value});return h(e.editComponent.style.value),R({}),(p,n)=>{const A=q("ArrowRight"),I=Q,a=W,C=Y,v=Z,P=ee,z=me,N=oe,$=ie,V=te,F=ne,y=le,u=de,B=L;return c(),g(E,null,[_(m("div",re,[m("div",se,[m("h3",ue,r(o(d)("styleRecommend")),1),t(C,{"label-width":"80px",class:"px-[10px]"},{default:i(()=>[t(a,{label:o(d)("selectStyle"),class:"flex"},{default:i(()=>[m("span",{class:"text-primary flex-1 cursor-pointer",onClick:T},r(o(e).editComponent.style.title),1),t(I,null,{default:i(()=>[t(A)]),_:1})]),_:1},8,["label"])]),_:1}),t(P,{modelValue:b.value,"onUpdate:modelValue":n[1]||(n[1]=l=>b.value=l),title:o(d)("selectStyle"),width:"460px"},{footer:i(()=>[m("span",ge,[t(v,{onClick:n[0]||(n[0]=l=>b.value=!1)},{default:i(()=>[w(r(o(d)("cancel")),1)]),_:1}),t(v,{type:"primary",onClick:U},{default:i(()=>[w(r(o(d)("confirm")),1)]),_:1})])]),default:i(()=>[m("div",Ce,[(c(!0),g(E,null,K(G,(l,j)=>(c(),g("div",{key:j,class:X([{"border-primary":s.value==l.value},"flex items-center justify-center overflow-hidden w-[200px] h-[100px] mr-[12px] mb-[12px] cursor-pointer border bg-[#eee]"]),onClick:Te=>k(l)},[m("img",{src:o(H)(l.url)},null,8,be)],10,ce))),128))])]),_:1},8,["modelValue","title"])]),m("div",_e,[m("h3",fe,r(o(d)("titleContent")),1),t(C,{"label-width":"80px",class:"px-[10px]"},{default:i(()=>[t(a,{label:o(d)("image")},{default:i(()=>[t(z,{modelValue:o(e).editComponent.textImg,"onUpdate:modelValue":n[2]||(n[2]=l=>o(e).editComponent.textImg=l),limit:1},null,8,["modelValue"])]),_:1},8,["label"]),_(t(a,{label:o(d)("subTitle")},{default:i(()=>[t(N,{modelValue:o(e).editComponent.subTitle.text,"onUpdate:modelValue":n[3]||(n[3]=l=>o(e).editComponent.subTitle.text=l),modelModifiers:{trim:!0},placeholder:o(d)("subTitlePlaceholder"),clearable:"",maxlength:"8","show-word-limit":""},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),[[f,o(e).editComponent&&o(e).editComponent.style&&o(e).editComponent.style.value=="style-3"]]),_(t(a,{label:o(d)("link")},{default:i(()=>[t($,{modelValue:o(e).editComponent.subTitle.link,"onUpdate:modelValue":n[4]||(n[4]=l=>o(e).editComponent.subTitle.link=l)},null,8,["modelValue"])]),_:1},8,["label"]),[[f,o(e).editComponent&&o(e).editComponent.style&&o(e).editComponent.style.value=="style-3"]])]),_:1})]),m("div",we,[m("h3",ye,r(o(d)("selectSource")),1),t(C,{"label-width":"80px",class:"px-[10px]"},{default:i(()=>[t(a,{label:o(d)("goodsSelectPopupSelectGoodsButton")},{default:i(()=>[t(F,{modelValue:o(e).editComponent.source,"onUpdate:modelValue":n[5]||(n[5]=l=>o(e).editComponent.source=l),title:o(d)("goodsSelectPopupSelectGoodsButton")},{default:i(()=>[t(V,{label:"all"},{default:i(()=>[w(r(o(d)("goodsSelectPopupAllGoods")),1)]),_:1}),t(V,{label:"custom"},{default:i(()=>[w(r(o(d)("manualSelectionSources")),1)]),_:1})]),_:1},8,["modelValue","title"])]),_:1},8,["label"]),o(e).editComponent.source=="all"||o(e).editComponent.source=="category"?(c(),D(a,{key:0,label:o(d)("goodsNum")},{default:i(()=>[t(y,{class:"goods-list-slider","show-input":"",modelValue:o(e).editComponent.num,"onUpdate:modelValue":n[6]||(n[6]=l=>o(e).editComponent.num=l),min:1,max:"20",size:"small"},null,8,["modelValue"])]),_:1},8,["label"])):x("",!0),o(e).editComponent.source=="custom"?(c(),D(a,{key:1,label:o(d)("customGoods")},{default:i(()=>[t(pe,{ref:"goodsSelectPopupRef",modelValue:o(e).editComponent.goods_ids,"onUpdate:modelValue":n[7]||(n[7]=l=>o(e).editComponent.goods_ids=l),min:1,max:99,mode:"sku"},null,8,["modelValue"])]),_:1},8,["label"])):x("",!0)]),_:1})])],512),[[f,o(e).editTab=="content"]]),_(m("div",xe,[m("div",he,[m("h3",ve,r(o(d)("goodsStyle")),1),t(C,{"label-width":"80px",class:"px-[10px]"},{default:i(()=>[t(a,{label:o(d)("topRounded")},{default:i(()=>[t(y,{modelValue:o(e).editComponent.topElementRounded,"onUpdate:modelValue":n[8]||(n[8]=l=>o(e).editComponent.topElementRounded=l),"show-input":"",size:"small",class:"ml-[10px] diy-nav-slider",max:50},null,8,["modelValue"])]),_:1},8,["label"]),t(a,{label:o(d)("bottomRounded")},{default:i(()=>[t(y,{modelValue:o(e).editComponent.bottomElementRounded,"onUpdate:modelValue":n[9]||(n[9]=l=>o(e).editComponent.bottomElementRounded=l),"show-input":"",size:"small",class:"ml-[10px] diy-nav-slider",max:50},null,8,["modelValue"])]),_:1},8,["label"])]),_:1})]),o(e).editComponent&&o(e).editComponent.style&&o(e).editComponent.style.value=="style-3"?(c(),g("div",Ve,[m("h3",Be,r(o(d)("subTitleStyle")),1),t(C,{"label-width":"90px",class:"px-[10px]"},{default:i(()=>[t(a,{label:o(d)("textColor")},{default:i(()=>[t(u,{modelValue:o(e).editComponent.subTitle.textColor,"onUpdate:modelValue":n[10]||(n[10]=l=>o(e).editComponent.subTitle.textColor=l),"show-alpha":"",predefine:o(e).predefineColors},null,8,["modelValue","predefine"])]),_:1},8,["label"]),t(a,{label:o(d)("subTextBgColor")},{default:i(()=>[t(u,{modelValue:o(e).editComponent.subTitle.startColor,"onUpdate:modelValue":n[11]||(n[11]=l=>o(e).editComponent.subTitle.startColor=l),"show-alpha":"",predefine:o(e).predefineColors},null,8,["modelValue","predefine"]),t(B,{name:"iconfont iconmap-connect",size:"20px",class:"block !text-gray-400 mx-[5px]"}),t(u,{modelValue:o(e).editComponent.subTitle.endColor,"onUpdate:modelValue":n[12]||(n[12]=l=>o(e).editComponent.subTitle.endColor=l),"show-alpha":"",predefine:o(e).predefineColors},null,8,["modelValue","predefine"])]),_:1},8,["label"])]),_:1})])):x("",!0),m("div",Se,[m("h3",Ee,r(o(d)("countDownStyle")),1),t(C,{"label-width":"90px",class:"px-[10px]"},{default:i(()=>[t(a,{label:o(d)("newcomerNumberColor")},{default:i(()=>[t(u,{modelValue:o(e).editComponent.countDown.numberColor,"onUpdate:modelValue":n[13]||(n[13]=l=>o(e).editComponent.countDown.numberColor=l),"show-alpha":"",predefine:o(e).predefineColors},null,8,["modelValue","predefine"])]),_:1},8,["label"]),t(a,{label:o(d)("newcomerNumberBg")},{default:i(()=>[t(u,{modelValue:o(e).editComponent.countDown.numberBg.startColor,"onUpdate:modelValue":n[14]||(n[14]=l=>o(e).editComponent.countDown.numberBg.startColor=l),"show-alpha":"",predefine:o(e).predefineColors},null,8,["modelValue","predefine"]),t(B,{name:"iconfont iconmap-connect",size:"20px",class:"block !text-gray-400 mx-[5px]"}),t(u,{modelValue:o(e).editComponent.countDown.numberBg.endColor,"onUpdate:modelValue":n[15]||(n[15]=l=>o(e).editComponent.countDown.numberBg.endColor=l),"show-alpha":"",predefine:o(e).predefineColors},null,8,["modelValue","predefine"])]),_:1},8,["label"]),t(a,{label:o(d)("newcomerOtherColor")},{default:i(()=>[t(u,{modelValue:o(e).editComponent.countDown.otherColor,"onUpdate:modelValue":n[16]||(n[16]=l=>o(e).editComponent.countDown.otherColor=l),"show-alpha":"",predefine:o(e).predefineColors},null,8,["modelValue","predefine"])]),_:1},8,["label"])]),_:1})]),J(p.$slots,"style")],512),[[f,o(e).editTab=="style"]])],64)}}});const Qe=Object.freeze(Object.defineProperty({__proto__:null,default:De},Symbol.toStringTag,{value:"Module"}));export{Qe as _};