import{d as Z,q as b,r as C,h as _,c as x,e as c,w as i,a as l,i as y,t as r,u as a,s as t,v as w,B as q,C as S,R as z,U as g,J as F,K as J,E as K,ac as M,ad as R,X,Y,p as H,g as Q}from"./index-0e396751.js";/* empty css                   *//* empty css                  *//* empty css                   *//* empty css                 *//* empty css                    */import"./el-tooltip-4ed993c7.js";/* empty css                  *//* empty css                     *//* empty css                        *//* empty css               *//* empty css                  *//* empty css                 *//* empty css                 *//* empty css                        */import{_ as N}from"./goods_default-664bb559.js";import{C as W,E as ee,B as te}from"./goods-4d7d064c.js";import{_ as oe}from"./_plugin-vue_export-helper-c27b6911.js";const se=f=>(H("data-v-7c9735ed"),f=f(),Q(),f),ae={class:"flex items-center mb-[10px]"},le={class:"min-w-[70px] h-[70px] flex items-center justify-center"},ne=se(()=>l("div",{class:"image-slot"},[l("img",{class:"w-[70px] h-[70px]",src:N})],-1)),ie={key:1,class:"w-[70px] h-[70px]",src:N,fit:"contain"},ce={class:"ml-2"},de=["title"],re={class:"text-primary text-[12px]"},pe={key:0,class:"batch-operation-sku"},me={class:"dialog-footer"},ue=Z({__name:"goods-stock-edit-popup",emits:["load"],setup(f,{expose:T,emit:B}){const n=b({}),h=C(0),p=C(!1),s=b({loading:!0,data:[]}),m=b({value:""}),$=()=>{if(m.value.length==0){g({type:"warning",message:`${t("stockPlaceholder")}`});return}if(!E.number.test(m.value)){g({type:"warning",message:`${t("stockTips")}`});return}if(m.value<0){g({type:"warning",message:`${t("stockNotZeroTips")}`});return}s.data.forEach(e=>{e.stock=m.value})},G=()=>{s.loading=!0,te({goods_id:n.goods_id}).then(e=>{s.loading=!1,s.data=e.data}).catch(()=>{s.loading=!1})},I=e=>{Object.assign(n,e),D(),G(),p.value=!0},D=()=>{W({goods_id:n.goods_id}).then(e=>{h.value=e.data})},E={number:/^\d{0,10}$/},P=()=>{let e=!0;for(let o=0;o<s.data.length;o++){let u=s.data[o];if(u.stock.length==0){e=!1,g({type:"warning",message:`${t("stockPlaceholder")}`});break}else if(isNaN(u.stock)||!E.number.test(u.stock)){e=!1,g({type:"warning",message:`${t("stockTips")}`});break}else if(u.stock<0){e=!1,g({type:"warning",message:`${t("stockNotZeroTips")}`});break}}return e},U=()=>{if(P()){const e=[];s.data.forEach(o=>{e.push({sku_id:o.sku_id,stock:o.stock})}),ee({goods_id:n.goods_id,sku_list:e}).then(o=>{B("load"),p.value=!1})}};return T({showDialog:p,show:I}),(e,o)=>{const u=F,V=J,k=K,v=M,L=R,O=X,j=Y;return _(),x("div",null,[c(O,{modelValue:p.value,"onUpdate:modelValue":o[2]||(o[2]=d=>p.value=d),title:a(t)("editStockPopupTitle"),width:"600px","close-on-press-escape":!1,"destroy-on-close":!0,"close-on-click-modal":!1},{footer:i(()=>[l("span",me,[c(k,{onClick:o[1]||(o[1]=d=>p.value=!1)},{default:i(()=>[y(r(a(t)("cancel")),1)]),_:1}),c(k,{type:"primary",onClick:U},{default:i(()=>[y(r(a(t)("confirm")),1)]),_:1})])]),default:i(()=>[l("div",ae,[l("div",le,[n.goods_cover_thumb_small?(_(),w(u,{key:0,class:"w-[70px] h-[70px]",src:a(q)(n.goods_cover_thumb_small),fit:"contain"},{error:i(()=>[ne]),_:1},8,["src"])):(_(),x("img",ie))]),l("div",ce,[l("span",{title:n.goods_name,class:"multi-hidden"},r(n.goods_name),9,de),l("span",re,r(n.goods_type_name),1)])]),h.value==0&&s.data.length>1?(_(),x("div",pe,[l("label",null,r(a(t)("batchOperationSku")),1),c(V,{modelValue:m.value,"onUpdate:modelValue":o[0]||(o[0]=d=>m.value=d),clearable:"",placeholder:a(t)("stock"),class:"set-input",maxlength:"20",autofocus:!0},null,8,["modelValue","placeholder"]),c(k,{type:"primary",onClick:$},{default:i(()=>[y(r(a(t)("confirm")),1)]),_:1})])):S("",!0),z((_(),w(L,{data:s.data,size:"large","max-height":"400"},{empty:i(()=>[l("span",null,r(s.loading?"":a(t)("emptyData")),1)]),default:i(()=>[s.data.length>1?(_(),w(v,{key:0,prop:"sku_name",label:a(t)("skuName"),"min-width":"120"},null,8,["label"])):S("",!0),c(v,{prop:"price",label:a(t)("price"),"min-width":"120"},null,8,["label"]),c(v,{prop:"stock",label:a(t)("stock"),"min-width":"120"},{default:i(({row:d})=>[c(V,{modelValue:d.stock,"onUpdate:modelValue":A=>d.stock=A,clearable:"",placeholder:"0",maxlength:"10",disabled:h.value>0},null,8,["modelValue","onUpdate:modelValue","disabled"])]),_:1},8,["label"])]),_:1},8,["data"])),[[j,s.loading]])]),_:1},8,["modelValue","title"])])}}});const Ge=oe(ue,[["__scopeId","data-v-7c9735ed"]]);export{Ge as default};
