import{d as j,r as k,h as t,s as h,w as o,R as J,c as n,e as a,B as L,u as s,q as r,A as U,i as T,t as i,a as m,F as x,T as N,v as g,ay as q,az as A,J as M,L as Y,a7 as $,ad as H,ae as K,M as Q,bS as W,Y as X}from"./index-904cb7a2.js";/* empty css                   *//* empty css                  *//* empty css                   *//* empty css                *//* empty css                 *//* empty css                    */import"./el-tooltip-4ed993c7.js";/* empty css                  *//* empty css                     *//* empty css                        *//* empty css               *//* empty css                */import"./el-form-item-4ed993c7.js";/* empty css                 *//* empty css                        *//* empty css                    */import{g as Z}from"./goods-515d05f6.js";const ee={class:"main-container"},ae={key:0},le={key:1},oe={class:"w-full"},te={class:"h-[62px] border-box py-[15px]"},se={class:"text-[var(--el-text-color-secondary)] text-[12px] leading-[25px]"},re={class:"px-[16px] border-box"},Ce=j({__name:"fenxiao-goods-detail",props:{title:{type:String,default:""},max:{type:Number,default:1},params:{type:Object,default:()=>({is_agent:"all"})}},emits:["load"],setup(ne,{expose:I,emit:ie}){const y=k(!1),w=k(!0),f=k("basicInfo"),c=k({});let V="";const e=k({id:0,is_fenxiao:1,fenxiao_type:1,skuList:[],fenxiao_rule:{}}),F=b=>{f.value=b},P=b=>{f.value="basicInfo",y.value=!1},R=b=>{w.value=!0,Z(b).then(p=>{c.value=p.data,e.value.id=b,e.value.fenxiao_type=p.data.goods_info.fenxiao_type,e.value.is_fenxiao=p.data.goods_info.is_set_fenxiao,e.value.skuList=p.data.goods_info.skuList,e.value.fenxiao_rule=JSON.parse(p.data.goods_info.fenxiaoGoods.fenxiao_rule),w.value=!1}).catch(()=>{w.value=!1})};return I({showDialog:y,setFormData:async(b=null)=>{V=b.id,R(V)}}),(b,p)=>{const C=q,S=A,z=M,v=Y,D=$,u=H,E=K,B=Q,O=W,G=X;return t(),h(O,{modelValue:y.value,"onUpdate:modelValue":p[1]||(p[1]=l=>y.value=l),title:"分销商品详情",direction:"rtl","before-close":P,class:"member-detail-drawer"},{default:o(()=>[J((t(),n("div",ee,[a(S,{modelValue:f.value,"onUpdate:modelValue":p[0]||(p[0]=l=>f.value=l),class:"pb-[10px]",onTabChange:F},{default:o(()=>[a(C,{label:"商品信息",name:"basicInfo"}),e.value.is_fenxiao?(t(),h(C,{key:0,label:"佣金设置",name:"commissionSet"})):L("",!0)]),_:1},8,["modelValue"]),Object.keys(c.value).length?(t(),h(B,{key:0,class:"page-form","label-width":"100px",ref:"formRef"},{default:o(()=>[f.value=="basicInfo"?(t(),n("div",ae,[a(D,{class:"card !border-none",shadow:"never"},{default:o(()=>[a(v,{label:s(r)("goodsImage")},{default:o(()=>[a(z,{class:"w-[98px] h-[98px]",fit:"contain",src:s(U)(c.value.goods_info.goods_cover_thumb_small)},null,8,["src"])]),_:1},8,["label"]),a(v,{label:s(r)("goodsName")},{default:o(()=>[T(i(c.value.goods_info.goods_name),1)]),_:1},8,["label"])]),_:1})])):L("",!0),f.value=="commissionSet"&&e.value.is_fenxiao?(t(),n("div",le,[a(D,{class:"card !border-none",shadow:"never"},{default:o(()=>[a(v,{label:s(r)("countPrice")},{default:o(()=>[m("div",oe,[a(E,{data:e.value.skuList,size:"large"},{default:o(()=>[a(u,{prop:"sku_name",label:s(r)("skuName"),"min-width":"120"},{default:o(({row:l})=>[m("span",null,i(l.sku_name||c.value.goods_info.goods_name),1)]),_:1},8,["label"]),a(u,{prop:"price",label:s(r)("salesPrice"),"min-width":"120"},null,8,["label"]),a(u,{prop:"cost_price",label:s(r)("costPrice"),"min-width":"120"},null,8,["label"]),a(u,{label:s(r)("calculatePrice"),"min-width":"120"},{default:o(({row:l,$index:_})=>[m("div",te," ￥"+i(l.calculate_price),1)]),_:1},8,["label"])]),_:1},8,["data"]),m("p",se,i(s(r)("calculatePriceTip")),1)])]),_:1},8,["label"]),a(v,{label:s(r)("type")},{default:o(()=>[T(i(c.value.goods_info.fenxiao_type==1?s(r)("typeLabelOne"):s(r)("typeLabelTwo")),1)]),_:1},8,["label"]),c.value.goods_info.fenxiao_type==1?(t(),h(v,{key:0},{default:o(()=>[a(E,{data:c.value.rule,size:"large"},{default:o(()=>[a(u,{prop:"level_name",label:s(r)("levelname"),"min-width":"120"},null,8,["label"]),a(u,{prop:"one_rate",label:s(r)("oneRate"),"min-width":"120"},{default:o(({row:l})=>[m("span",null,i(l.one_rate)+"%",1)]),_:1},8,["label"]),a(u,{prop:"two_rate",label:s(r)("twoRate"),"min-width":"120"},{default:o(({row:l})=>[m("span",null,i(l.two_rate)+"%",1)]),_:1},8,["label"])]),_:1},8,["data"])]),_:1})):(t(),h(v,{key:1},{default:o(()=>[a(E,{data:c.value.rule,size:"large",class:"rule"},{default:o(()=>[a(u,{label:s(r)("skuName"),"min-width":"120"},{default:o(({row:l})=>[(t(!0),n(x,null,N(e.value.skuList,(_,d)=>(t(),n("p",{class:g(["leading-[62px] px-[16px] border-box",{"border-b-[1px] border-solid border-[var(--el-table-border-color)]":d<e.value.skuList.length-1}]),key:d},i(_.sku_name),3))),128))]),_:1},8,["label"]),a(u,{label:s(r)("price"),"min-width":"120"},{default:o(({row:l})=>[(t(!0),n(x,null,N(e.value.skuList,(_,d)=>(t(),n("p",{class:g(["leading-[62px] px-[16px] border-box",{"border-b-[1px] border-solid border-[var(--el-table-border-color)]":d<e.value.skuList.length-1}]),key:d},"￥"+i(_.price),3))),128))]),_:1},8,["label"]),a(u,{prop:"level_name",label:s(r)("rateName"),"min-width":"120"},{default:o(({row:l})=>[m("p",re,i(l.level_name),1)]),_:1},8,["label"]),a(u,{label:s(r)("oneRate"),"min-width":"120"},{default:o(({row:l})=>[(t(!0),n(x,null,N(e.value.skuList,(_,d)=>(t(),n(x,{key:d},[e.value.fenxiao_rule[_.sku_id][l.level_id].one_rate?(t(),n("div",{key:0,class:g(["h-[62px] border-box py-[15px] px-[16px]",{"border-b-[1px] border-solid border-[var(--el-table-border-color)]":d<e.value.skuList.length-1}])},i(e.value.fenxiao_rule[_.sku_id][l.level_id].one_rate)+"% ",3)):(t(),n("div",{key:1,class:g(["h-[62px] border-box py-[15px] px-[16px]",{"border-b-[1px] border-solid border-[var(--el-table-border-color)]":d<e.value.skuList.length-1}])},i(e.value.fenxiao_rule[_.sku_id][l.level_id].one_money)+"元 ",3))],64))),128))]),_:1},8,["label"]),a(u,{prop:"two_rate",label:s(r)("twoRate"),"min-width":"120"},{default:o(({row:l})=>[(t(!0),n(x,null,N(e.value.skuList,(_,d)=>(t(),n(x,{key:d},[e.value.fenxiao_rule[_.sku_id][l.level_id].two_rate?(t(),n("div",{key:0,class:g(["h-[62px] border-box py-[15px] px-[16px]",{"border-b-[1px] border-solid border-[var(--el-table-border-color)]":d<e.value.skuList.length-1}])},i(e.value.fenxiao_rule[_.sku_id][l.level_id].two_rate)+"% ",3)):(t(),n("div",{key:1,class:g(["h-[62px] border-box py-[15px] px-[16px]",{"border-b-[1px] border-solid border-[var(--el-table-border-color)]":d<e.value.skuList.length-1}])},i(e.value.fenxiao_rule[_.sku_id][l.level_id].two_money)+"元 ",3))],64))),128))]),_:1},8,["label"])]),_:1},8,["data"])]),_:1}))]),_:1})])):L("",!0)]),_:1},512)):L("",!0)])),[[G,w.value]])]),_:1},8,["modelValue"])}}});export{Ce as _};
