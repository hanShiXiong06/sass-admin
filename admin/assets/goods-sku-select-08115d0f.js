import{d as N,r as m,h as _,c as b,e as s,w as a,a as i,i as S,t as f,u as l,q as c,s as A,A as G,a$ as I,ad as $,J as j,ae as q,E as z,X as J}from"./index-904cb7a2.js";/* empty css                  *//* empty css                   *//* empty css                  *//* empty css                 *//* empty css                    */import"./el-tooltip-4ed993c7.js";/* empty css                  *//* empty css                     *//* empty css                 *//* empty css                        *//* empty css                        *//* empty css               */import{_ as w}from"./goods_default-995568ac.js";import{A as L}from"./goods-f69d2db5.js";const P={class:"flex items-center cursor-pointer"},U={class:"min-w-[60px] h-[60px] flex items-center justify-center"},X=i("div",{class:"image-slot"},[i("img",{class:"w-[60px] h-[60px]",src:w})],-1),F={key:1,class:"w-[70px] h-[60px]",src:w,fit:"contain"},H={class:"ml-2"},K=["title"],M={class:"dialog-footer"},de=N({__name:"goods-sku-select",props:{id:{type:String,default:""}},emits:["skuSelect"],setup(y,{expose:E,emit:C}){const V=y,r=m(!1),g=m(!1),d=m(),k=m(),B=p=>{r.value=!0,g.value=!0;let n=p.map(t=>t.sku_id);L({goods_id:V.id}).then(t=>{k.value=t.data.map(e=>(e.goods_stock=e.stock+"",e.goods_price=e.price+"",e.limit_num="",e.stock="",e.point="",e.price="",e)),I(()=>{t.data.forEach(e=>{var u;(u=d.value)==null||u.toggleRowSelection(e,!1),n.includes(e.sku_id)&&d.value.toggleRowSelection(e,!0)}),g.value=!1})})},h=m([]),T=p=>{h.value=p},D=()=>{C("skuSelect",h.value),r.value=!1,d.value&&d.value.clearSelection()};return E({show:B}),(p,n)=>{const t=$,e=j,u=q,v=z,R=J;return _(),b("div",null,[s(R,{modelValue:r.value,"onUpdate:modelValue":n[1]||(n[1]=o=>r.value=o),title:l(c)("goodsSkuTitle"),width:"60%","destroy-on-close":!0},{footer:a(()=>[i("span",M,[s(v,{onClick:n[0]||(n[0]=o=>r.value=!1)},{default:a(()=>[S(f(l(c)("cancel")),1)]),_:1}),s(v,{type:"primary",onClick:D},{default:a(()=>[S(f(l(c)("confirm")),1)]),_:1})])]),default:a(()=>[s(u,{class:"!max-w-[100%]",data:k.value,size:"large",ref_key:"tableRef",ref:d,onSelectionChange:T},{default:a(()=>[s(t,{type:"selection",width:"55"}),s(t,{label:l(c)("goodsSelectPopupGoodsInfo"),"min-width":"300"},{default:a(({row:o})=>{var x;return[i("div",P,[i("div",U,[o.sku_image?(_(),A(e,{key:0,class:"w-[60px] h-[60px]",src:l(G)(o.sku_image),fit:"contain"},{error:a(()=>[X]),_:2},1032,["src"])):(_(),b("img",F))]),i("div",H,[i("span",{title:o.sku_name,class:"multi-hidden"},f(o.sku_name||((x=o.goods)==null?void 0:x.goods_name)),9,K)])])]}),_:1},8,["label"]),s(t,{prop:"goods_price",label:l(c)("price"),"min-width":"170"},null,8,["label"]),s(t,{prop:"goods_stock",label:l(c)("goodsStock"),"min-width":"170"},null,8,["label"])]),_:1},8,["data"])]),_:1},8,["modelValue","title"])])}}});export{de as default};
