import{d as F,s,r as S,q as I,aJ as L,h as f,c as M,R as w,a0 as N,u as e,a as d,t as i,x as k,e as l,w as a,i as p,v as C,C as E,ad as O,B as J,b as q,F as A,a$ as X,at as Y,au as H,L as K,bx as Q,M as Z,ac as ee,J as oe,E as te,X as le,bv as ae,Y as ne}from"./index-0e396751.js";/* empty css                   *//* empty css                        *//* empty css                 *//* empty css                  *//* empty css                  *//* empty css                   *//* empty css                 *//* empty css                        *//* empty css                        *//* empty css                    *//* empty css               *//* empty css                *//* empty css                  *//* empty css                        */import"./el-tooltip-4ed993c7.js";/* empty css                  */import"./el-form-item-4ed993c7.js";/* empty css                       *//* empty css                 */import{_ as se}from"./category_default-57987dd3.js";import{g as de}from"./goods-4d7d064c.js";import{u as re}from"./diy-0604e925.js";import ie from"./goods-select-popup-9347d583.js";const me={class:"content-wrap"},pe={class:"edit-attr-item-wrap"},ue={class:"mb-[10px]"},ce={class:"flex items-center mb-[18px] rounded overflow-hidden"},ge={class:"edit-attr-item-wrap"},_e={class:"mb-[10px]"},fe={class:"flex items-center w-full"},ye={class:"text-[var(--el-color-primary)]"},Ce=d("span",{class:"iconfont iconxiangyoujiantou"},null,-1),be={class:"flex items-center w-full ml-[5px]"},xe={class:"ml-[15px]"},he={class:"order-2"},ve={class:"h-[30px]"},Ve=d("div",{class:"image-slot"},[d("img",{class:"w-[30px] h-[30px]",src:se})],-1),Se={class:"flex items-center justify-end mt-[15px]"},we={class:"style-wrap"},ke={class:"edit-attr-item-wrap"},Ee={class:"mb-[10px]"},Re=d("div",{class:"mr-[20px]"},null,-1),Be=F({__name:"edit-phone-goods-list",setup(Ne,{expose:T}){const o=re();o.editComponent.ignore=[],o.editComponent.verify=r=>{const t={code:!0,message:""};return o.value[r].source=="category"?o.value[r].goods_category==""&&(t.code=!1,t.message=s("goodsCategoryPlaceholder")):o.value[r].source=="custom"&&o.value[r].goods_ids.length==0&&(t.code=!1,t.message=s("goodsPlaceholder")),t};const g=S(!1),u=I({loading:!0,data:[]});L(()=>{U()});const _=S();let b=null;const U=()=>{console.log("加载商品分类列表"),u.loading=!0,de().then(r=>{u.loading=!1,u.data=r.data}).catch(()=>{u.loading=!1})},P=r=>{let t="";r&&(t=r[r.length-1]),r.length>1&&_.value.clearSelection(),t&&_.value.toggleRowSelection(t,!0),b=t},D=()=>{o.editComponent.goods_category=b.category_id,o.editComponent.goods_category_name=b.category_name,g.value=!1},j=()=>{g.value=!0,X(()=>{z()})},x=S([]),z=()=>{x.value=[],u.data.forEach(r=>{o.editComponent.goods_category==r.category_id?_.value.toggleRowSelection(r,!0):r.child_list&&r.child_list.length&&r.child_list.forEach(t=>{o.editComponent.goods_category==t.category_id&&(x.value.push(r.category_id.toString()),_.value.toggleRowSelection(t,!0))})})};return T({}),(r,t)=>{const c=Y,h=H,m=K,v=Q,R=Z,V=ee,W=oe,B=te,$=le,y=ae,G=ne;return f(),M(A,null,[w(d("div",me,[d("div",pe,[d("h3",ue,i(e(s)("selectStyle")),1),d("div",ce,[d("span",{class:k(["iconfont iconzuoyoutuwenpc border-[1px] border-solid border-[#eee] cursor-pointer flex-1 flex items-center justify-center py-[5px]",{"border-[var(--el-color-primary)] text-[var(--el-color-primary)]":e(o).editComponent.style=="style-1"}]),onClick:t[0]||(t[0]=n=>e(o).editComponent.style="style-1")},null,2),d("span",{class:k(["iconfont iconshangxiatuwenpc border-[1px] border-solid border-[#eee] cursor-pointer flex-1 flex items-center justify-center py-[5px]",{"border-[var(--el-color-primary)] text-[var(--el-color-primary)]":e(o).editComponent.style=="style-2"}]),onClick:t[1]||(t[1]=n=>e(o).editComponent.style="style-2")},null,2),d("span",{class:k(["iconfont iconliebiaopc border-[1px] border-solid border-[#eee] cursor-pointer flex-1 flex items-center justify-center py-[5px]",{"border-[var(--el-color-primary)] text-[var(--el-color-primary)]":e(o).editComponent.style=="style-3"}]),onClick:t[2]||(t[2]=n=>e(o).editComponent.style="style-3")},null,2)])]),d("div",ge,[d("h3",_e,i(e(s)("selectSource")),1),l(R,{"label-width":"80px",class:"px-[10px]"},{default:a(()=>[l(m,{label:e(s)("sortWay")},{default:a(()=>[l(h,{modelValue:e(o).editComponent.sortWay,"onUpdate:modelValue":t[3]||(t[3]=n=>e(o).editComponent.sortWay=n)},{default:a(()=>[l(c,{label:"default"},{default:a(()=>[p(i(e(s)("default")),1)]),_:1}),l(c,{label:"sale_num"},{default:a(()=>[p(i(e(s)("sales")),1)]),_:1}),l(c,{label:"price"},{default:a(()=>[p(i(e(s)("price")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["label"]),l(m,{label:e(s)("goodsSelectPopupSelectGoodsButton")},{default:a(()=>[l(h,{modelValue:e(o).editComponent.source,"onUpdate:modelValue":t[4]||(t[4]=n=>e(o).editComponent.source=n),title:e(s)("goodsSelectPopupSelectGoodsButton")},{default:a(()=>[l(c,{label:"all"},{default:a(()=>[p(i(e(s)("goodsSelectPopupAllGoods")),1)]),_:1}),l(c,{label:"category"},{default:a(()=>[p(i(e(s)("selectCategory")),1)]),_:1}),l(c,{label:"custom"},{default:a(()=>[p(i(e(s)("manualSelectionSources")),1)]),_:1})]),_:1},8,["modelValue","title"])]),_:1},8,["label"]),e(o).editComponent.source=="category"?(f(),C(m,{key:0,label:e(s)("selectCategory")},{default:a(()=>[d("div",fe,[d("div",{class:"cursor-pointer ml-auto",onClick:j},[d("span",ye,i(e(o).editComponent.goods_category_name),1),Ce])])]),_:1},8,["label"])):E("",!0),e(o).editComponent.source=="all"||e(o).editComponent.source=="category"?(f(),C(m,{key:1,label:e(s)("goodsNum")},{default:a(()=>[d("div",be,[l(v,{class:"flex-1",modelValue:e(o).editComponent.num,"onUpdate:modelValue":t[5]||(t[5]=n=>e(o).editComponent.num=n),max:"20",size:"small"},null,8,["modelValue"]),d("span",xe,i(e(o).editComponent.num),1)])]),_:1},8,["label"])):E("",!0),e(o).editComponent.source=="custom"?(f(),C(m,{key:2,label:e(s)("customGoods")},{default:a(()=>[l(ie,{ref:"goodsSelectPopupRef",modelValue:e(o).editComponent.goods_ids,"onUpdate:modelValue":t[6]||(t[6]=n=>e(o).editComponent.goods_ids=n),min:1,max:99},null,8,["modelValue"])]),_:1},8,["label"])):E("",!0)]),_:1}),l($,{modelValue:g.value,"onUpdate:modelValue":t[8]||(t[8]=n=>g.value=n),title:e(s)("goodsCategoryTitle"),width:"1000px","close-on-press-escape":!1,"destroy-on-close":!0,"close-on-click-modal":!1},{default:a(()=>[w((f(),C(e(O),{data:u.data,ref_key:"categoryTableRef",ref:_,size:"large",height:"490px",onSelectionChange:P,"row-key":"category_id","expand-row-keys":x.value,"tree-props":{hasChildren:"hasChildren",children:"child_list"}},{empty:a(()=>[d("span",null,i(u.loading?"":e(s)("emptyData")),1)]),default:a(()=>[l(V,{type:"selection",width:"55"}),l(V,{label:e(s)("categoryName"),"min-width":"120"},{default:a(({row:n})=>[d("span",he,i(n.category_name),1)]),_:1},8,["label"]),l(V,{label:e(s)("categoryImage"),width:"170",align:"left"},{default:a(({row:n})=>[d("div",ve,[l(W,{class:"w-[30px] h-[30px]",src:e(J)(n.image),fit:"contain"},{error:a(()=>[Ve]),_:2},1032,["src"])])]),_:1},8,["label"])]),_:1},8,["data","expand-row-keys"])),[[G,u.loading]]),d("div",Se,[l(B,{type:"primary",onClick:D},{default:a(()=>[p(i(e(s)("confirm")),1)]),_:1}),l(B,{onClick:t[7]||(t[7]=n=>g.value=!1)},{default:a(()=>[p(i(e(s)("cancel")),1)]),_:1})])]),_:1},8,["modelValue","title"])])],512),[[N,e(o).editTab=="content"]]),w(d("div",we,[d("div",ke,[d("h3",Ee,i(e(s)("goodsStyle")),1),l(R,{"label-width":"80px",class:"px-[10px]"},{default:a(()=>[l(m,{label:e(s)("goodsBgColor")},{default:a(()=>[l(y,{modelValue:e(o).editComponent.elementBgColor,"onUpdate:modelValue":t[9]||(t[9]=n=>e(o).editComponent.elementBgColor=n),"show-alpha":"",predefine:e(o).predefineColors},null,8,["modelValue","predefine"])]),_:1},8,["label"]),l(m,{label:e(s)("goodsNameColor")},{default:a(()=>[l(y,{modelValue:e(o).editComponent.goodsNameStyle.color,"onUpdate:modelValue":t[10]||(t[10]=n=>e(o).editComponent.goodsNameStyle.color=n),"show-alpha":"",predefine:e(o).predefineColors},null,8,["modelValue","predefine"]),Re,l(h,{modelValue:e(o).editComponent.goodsNameStyle.fontWeight,"onUpdate:modelValue":t[11]||(t[11]=n=>e(o).editComponent.goodsNameStyle.fontWeight=n)},{default:a(()=>[l(c,{label:"normal"},{default:a(()=>[p(i(e(s)("fontWeightNormal")),1)]),_:1}),l(c,{label:"bold"},{default:a(()=>[p(i(e(s)("fontWeightBold")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["label"]),l(m,{label:e(s)("goodsPriceColor")},{default:a(()=>[l(y,{modelValue:e(o).editComponent.priceStyle.mainColor,"onUpdate:modelValue":t[12]||(t[12]=n=>e(o).editComponent.priceStyle.mainColor=n),"show-alpha":"",predefine:e(o).predefineColors},null,8,["modelValue","predefine"])]),_:1},8,["label"]),l(m,{label:e(s)("goodsSaleColor")},{default:a(()=>[l(y,{modelValue:e(o).editComponent.saleStyle.color,"onUpdate:modelValue":t[13]||(t[13]=n=>e(o).editComponent.saleStyle.color=n),"show-alpha":"",predefine:e(o).predefineColors},null,8,["modelValue","predefine"])]),_:1},8,["label"]),l(m,{label:e(s)("topRounded")},{default:a(()=>[l(v,{modelValue:e(o).editComponent.topElementRounded,"onUpdate:modelValue":t[14]||(t[14]=n=>e(o).editComponent.topElementRounded=n),"show-input":"",size:"small",class:"ml-[10px] graphic-nav-slider",max:50},null,8,["modelValue"])]),_:1},8,["label"]),l(m,{label:e(s)("bottomRounded")},{default:a(()=>[l(v,{modelValue:e(o).editComponent.bottomElementRounded,"onUpdate:modelValue":t[15]||(t[15]=n=>e(o).editComponent.bottomElementRounded=n),"show-input":"",size:"small",class:"ml-[10px] graphic-nav-slider",max:50},null,8,["modelValue"])]),_:1},8,["label"])]),_:1})]),q(r.$slots,"style")],512),[[N,e(o).editTab=="style"]])],64)}}}),oo=Object.freeze(Object.defineProperty({__proto__:null,default:Be},Symbol.toStringTag,{value:"Module"}));export{oo as _};
