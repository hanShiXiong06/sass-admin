import{d as k,q as a,r as B,aK as P,a$ as G,h as b,c as V,R as f,a0 as h,u as e,a as m,t as c,e as l,w as n,i as v,s as I,B as z,F as S,T as M,b as N,au as $,av as j,L as D,M as L,K as O,bv as A,E as K,bz as q}from"./index-904cb7a2.js";/* empty css                  *//* empty css                 *//* empty css                        */import"./el-tooltip-4ed993c7.js";/* empty css                  *//* empty css                  */import{_ as H}from"./index.vue_vue_type_script_setup_true_lang-ee99396e.js";/* empty css                        *//* empty css                */import"./el-form-item-4ed993c7.js";/* empty css                       *//* empty css                 */import{u as J}from"./diy-65820ac1.js";import Q from"./goods-select-popup-f394e385.js";import{S as W}from"./sortable.esm-be94e56d.js";import{r as X}from"./range-e18b2c5a.js";const Y={class:"content-wrap"},Z={class:"edit-attr-item-wrap"},ee={class:"mb-[10px]"},oe={class:"edit-attr-item-wrap"},le={class:"mb-[10px]"},te={class:"text-sm text-gray-400 mb-[10px]"},ae=["onClick"],de={class:"style-wrap"},ne={class:"edit-attr-item-wrap"},se={class:"mb-[10px]"},re=k({__name:"edit-shop-goods-recommend",setup(ie,{expose:T}){const o=J();o.editComponent.ignore=["componentBgUrl"],o.editComponent.verify=r=>{const d={code:!0,message:""};return o.value[r].list.forEach(p=>{if(!p.title.text)return d.code=!1,d.message=a("activeCubeTitlePlaceholder"),d;if(!p.moreTitle.text)return d.code=!1,d.message=a("shopGoodsRecommendComponentTagPlaceholder"),d;if(!p.button.text)return d.code=!1,d.message=a("activeCubeButtonPlaceholder"),d}),o.value[r].source=="custom"&&o.value[r].goods_ids.length<o.value[r].list.length&&(d.code=!1,d.message=a("goodsPlaceholder")),d},o.editComponent.list.forEach(r=>{r.id||(r.id=o.generateRandom())});const w=B();P(()=>{G(()=>{const r=W.create(w.value,{group:"item-wrap",animation:200,onEnd:_=>{const i=o.editComponent.list[_.oldIndex];o.editComponent.list.splice(_.oldIndex,1),o.editComponent.list.splice(_.newIndex,0,i),r.sort(X(o.editComponent.list.length).map(C=>C.toString()))}});let d=o.editComponent.list.length,p=o.editComponent.goods_ids.length;o.editComponent.goods_ids.splice(d,p)})});const U=()=>{o.editComponent.list.push({id:o.generateRandom(),title:{text:"标题",textColor:"#303133"},moreTitle:{text:"精选",startColor:"#FF7234",endColor:"#FF213F"},listFrame:{startColor:"#FFE5E5",endColor:"#FFF5F0"},button:{text:"首单",textColor:"#FFFFFF",color:"#FF1128"},goodsId:[]})},y=r=>{o.editComponent.list.splice(r,1),o.editComponent.goods_ids.splice(r,1)};return T({}),(r,d)=>{const p=$,_=j,i=D,C=L,x=O,u=A,g=H,E=K,F=q;return b(),V(S,null,[f(m("div",Y,[m("div",Z,[m("h3",ee,c(e(a)("selectSource")),1),l(C,{"label-width":"80px",class:"px-[10px]"},{default:n(()=>[l(i,{label:e(a)("goodsSelectPopupSelectGoodsButton")},{default:n(()=>[l(_,{modelValue:e(o).editComponent.source,"onUpdate:modelValue":d[0]||(d[0]=t=>e(o).editComponent.source=t),title:e(a)("goodsSelectPopupSelectGoodsButton")},{default:n(()=>[l(p,{label:"all"},{default:n(()=>[v(c(e(a)("defaultGoodsSelect")),1)]),_:1}),l(p,{label:"custom"},{default:n(()=>[v(c(e(a)("manualSelectionSources")),1)]),_:1})]),_:1},8,["modelValue","title"])]),_:1},8,["label"]),e(o).editComponent.source=="custom"?(b(),I(i,{key:0,label:e(a)("customGoods")},{default:n(()=>[l(Q,{ref:"goodsSelectPopupRef",modelValue:e(o).editComponent.goods_ids,"onUpdate:modelValue":d[1]||(d[1]=t=>e(o).editComponent.goods_ids=t),min:e(o).editComponent.list.length,max:e(o).editComponent.list.length},null,8,["modelValue","min","max"])]),_:1},8,["label"])):z("",!0)]),_:1})]),m("div",oe,[l(C,{"label-width":"120px",class:"px-[10px]"},{default:n(()=>[m("h3",le,c(e(a)("activeCubeBlockContent")),1),m("p",te,c(e(a)("dragMouseAdjustOrder")),1),m("div",{ref_key:"blockBoxRef",ref:w},[(b(!0),V(S,null,M(e(o).editComponent.list,(t,R)=>(b(),V("div",{key:t.id,class:"item-wrap p-[10px] pb-0 relative border border-dashed border-gray-300 mb-[16px]"},[l(i,{label:e(a)("activeCubeTitle")},{default:n(()=>[l(x,{modelValue:t.title.text,"onUpdate:modelValue":s=>t.title.text=s,modelModifiers:{trim:!0},placeholder:e(a)("activeCubeTitlePlaceholder"),clearable:"",maxlength:"4","show-word-limit":""},null,8,["modelValue","onUpdate:modelValue","placeholder"])]),_:2},1032,["label"]),l(i,{label:e(a)("shopGoodsRecommendComponentTag")},{default:n(()=>[l(x,{modelValue:t.moreTitle.text,"onUpdate:modelValue":s=>t.moreTitle.text=s,modelModifiers:{trim:!0},placeholder:e(a)("shopGoodsRecommendComponentTagPlaceholder"),clearable:"",maxlength:"2","show-word-limit":""},null,8,["modelValue","onUpdate:modelValue","placeholder"])]),_:2},1032,["label"]),l(i,{label:e(a)("activeCubeButton")},{default:n(()=>[l(x,{modelValue:t.button.text,"onUpdate:modelValue":s=>t.button.text=s,modelModifiers:{trim:!0},placeholder:e(a)("activeCubeButtonPlaceholder"),clearable:"",maxlength:"2","show-word-limit":""},null,8,["modelValue","onUpdate:modelValue","placeholder"])]),_:2},1032,["label"]),l(i,{label:e(a)("activeCubeSubTitleTextColor")},{default:n(()=>[l(u,{modelValue:t.title.textColor,"onUpdate:modelValue":s=>t.title.textColor=s,"show-alpha":"",predefine:e(o).predefineColors},null,8,["modelValue","onUpdate:modelValue","predefine"])]),_:2},1032,["label"]),l(i,{label:e(a)("shopGoodsRecommendComponentTagcolor")},{default:n(()=>[l(u,{modelValue:t.moreTitle.startColor,"onUpdate:modelValue":s=>t.moreTitle.startColor=s,"show-alpha":"",predefine:e(o).predefineColors},null,8,["modelValue","onUpdate:modelValue","predefine"]),l(g,{name:"iconfont iconmap-connect",size:"20px",class:"block !text-gray-400 mx-[5px]"}),l(u,{modelValue:t.moreTitle.endColor,"onUpdate:modelValue":s=>t.moreTitle.endColor=s,"show-alpha":"",predefine:e(o).predefineColors},null,8,["modelValue","onUpdate:modelValue","predefine"])]),_:2},1032,["label"]),l(i,{label:e(a)("activeCubeButtonColor")},{default:n(()=>[l(u,{modelValue:t.button.color,"onUpdate:modelValue":s=>t.button.color=s,"show-alpha":"",predefine:e(o).predefineColors},null,8,["modelValue","onUpdate:modelValue","predefine"])]),_:2},1032,["label"]),l(i,{label:e(a)("activeListFrameColor")},{default:n(()=>[l(u,{modelValue:t.listFrame.startColor,"onUpdate:modelValue":s=>t.listFrame.startColor=s,"show-alpha":"",predefine:e(o).predefineColors},null,8,["modelValue","onUpdate:modelValue","predefine"]),l(g,{name:"iconfont iconmap-connect",size:"20px",class:"block !text-gray-400 mx-[5px]"}),l(u,{modelValue:t.listFrame.endColor,"onUpdate:modelValue":s=>t.listFrame.endColor=s,"show-alpha":"",predefine:e(o).predefineColors},null,8,["modelValue","onUpdate:modelValue","predefine"])]),_:2},1032,["label"]),f(m("div",{class:"del absolute cursor-pointer z-[2] top-[-8px] right-[-8px]",onClick:s=>y(R)},[l(g,{name:"element CircleCloseFilled",color:"#bbb",size:"20px"})],8,ae),[[h,e(o).editComponent.list.length>1]])]))),128))],512),f(l(E,{class:"w-full",onClick:U},{default:n(()=>[v(c(e(a)("activeCubeAddItem")),1)]),_:1},512),[[h,e(o).editComponent.list.length<10]])]),_:1})])],512),[[h,e(o).editTab=="content"]]),f(m("div",de,[m("div",ne,[m("h3",se,c(e(a)("goodsStyle")),1),l(C,{"label-width":"80px",class:"px-[10px]"},{default:n(()=>[l(i,{label:e(a)("goodsPriceColor")},{default:n(()=>[l(u,{modelValue:e(o).editComponent.priceStyle.mainColor,"onUpdate:modelValue":d[2]||(d[2]=t=>e(o).editComponent.priceStyle.mainColor=t),"show-alpha":"",predefine:e(o).predefineColors},null,8,["modelValue","predefine"])]),_:1},8,["label"]),l(i,{label:e(a)("topRounded")},{default:n(()=>[l(F,{modelValue:e(o).editComponent.topElementRounded,"onUpdate:modelValue":d[3]||(d[3]=t=>e(o).editComponent.topElementRounded=t),"show-input":"",size:"small",class:"ml-[10px] diy-nav-slider",max:50},null,8,["modelValue"])]),_:1},8,["label"]),l(i,{label:e(a)("bottomRounded")},{default:n(()=>[l(F,{modelValue:e(o).editComponent.bottomElementRounded,"onUpdate:modelValue":d[4]||(d[4]=t=>e(o).editComponent.bottomElementRounded=t),"show-input":"",size:"small",class:"ml-[10px] diy-nav-slider",max:50},null,8,["modelValue"])]),_:1},8,["label"])]),_:1})]),N(r.$slots,"style")],512),[[h,e(o).editTab=="style"]])],64)}}}),Ue=Object.freeze(Object.defineProperty({__proto__:null,default:re},Symbol.toStringTag,{value:"Module"}));export{Ue as _};