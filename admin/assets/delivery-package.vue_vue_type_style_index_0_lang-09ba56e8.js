import{d as D,r as v,h as o,s as N,w as _,a as e,e as d,i as V,t as s,u as t,q as a,R as B,c as i,B as x,A as E,F as h,T as C,ad as T,ae as F,E as I,X as L,Y as j}from"./index-99f00cf3.js";/* empty css                   *//* empty css                  *//* empty css                   *//* empty css                  *//* empty css                 *//* empty css                    */import"./el-tooltip-4ed993c7.js";/* empty css                  *//* empty css                     *//* empty css                        *//* empty css               */import{k as q}from"./order-b4e82541.js";const P={class:"max-h-[600px] overflow-y-auto"},R={class:"panel-title"},z={class:"pl-[20px] mb-[20px] text-[14px] flex justify-between"},A={class:"pl-[20px] mb-[20px] text-[14px] flex"},S={key:0},U={key:1},X={class:"ml-[60px]"},Y={class:"panel-title"},$={class:"pl-[20px] mb-[20px]"},G={class:"flex"},H={class:"flex items-center w-[50px] h-[50px] mr-[10px]"},J=["src"],K={class:"flex flex-col flex-1"},M={class:"multi-hidden text-[14px]"},O={class:"text-[12px] text-[#999]"},Q={class:"panel-title"},W={key:0,class:"pl-[20px]"},Z={class:"block w-[150px]"},ee={class:"block w-[500px]"},se={key:1,class:"pl-[20px]"},te={key:1,class:"pl-[20px]"},ae={class:"dialog-footer"},ge=D({__name:"delivery-package",setup(le,{expose:f}){const r=v(!1),u=v(!1),l=v("");return f({showDialog:r,setFormData:async(m,c)=>{u.value=!0,m&&q({id:m,mobile:c}).then(p=>{l.value=p.data,u.value=!1})}}),(m,c)=>{const p=T,g=F,y=I,b=L,k=j;return o(),N(b,{modelValue:r.value,"onUpdate:modelValue":c[1]||(c[1]=n=>r.value=n),title:t(a)("packageInfo"),width:"700px",class:"diy-dialog-wrap","destroy-on-close":!0},{footer:_(()=>[e("span",ae,[d(y,{onClick:c[0]||(c[0]=n=>r.value=!1)},{default:_(()=>[V(s(t(a)("cancel")),1)]),_:1})])]),default:_(()=>[B((o(),i("div",P,[e("h3",R,s(t(a)("deliveryInfo")),1),e("div",z,[e("div",null,[e("span",null,s(t(a)("devliveryTime"))+"：",1),e("span",null,s(l.value.create_time),1)])]),e("div",A,[l.value.company?(o(),i("div",S,[e("span",null,s(t(a)("companyName"))+"：",1),e("span",null,s(l.value.company.company_name),1)])):x("",!0),l.value.express_number?(o(),i("div",U,[e("span",X,s(t(a)("logisticNo"))+"：",1),e("span",null,s(l.value.express_number),1)])):x("",!0)]),e("h3",Y,s(t(a)("goodsInfo")),1),e("div",$,[d(g,{data:l.value.order_goods,size:"large"},{default:_(()=>[d(p,{label:t(a)("goodsName"),align:"left",width:"300"},{default:_(({row:n})=>[e("div",G,[e("div",H,[e("img",{class:"w-[50px] h-[50px]",src:t(E)(n.goods_image_thumb_small)},null,8,J)]),e("div",K,[e("p",M,s(n.goods_name),1),e("span",O,s(n.sku_name),1)])])]),_:1},8,["label"]),d(p,{prop:"price",label:t(a)("price"),"min-width":"50",align:"left"},null,8,["label"]),d(p,{prop:"num",label:t(a)("num"),"min-width":"50",align:"right"},null,8,["label"])]),_:1},8,["data"])]),e("h3",Q,s(t(a)("logisticInfo")),1),l.value.sub_delivery_type!="none_express"?(o(),i(h,{key:0},[l.value.traces?(o(),i("div",W,[l.value.traces.list?(o(!0),i(h,{key:0},C(l.value.traces.list,(n,w)=>(o(),i("div",{class:"flex justify-between mb-[15px]",key:w},[e("span",Z,s(n.datetime),1),e("span",ee,s(n.remark),1)]))),128)):x("",!0),e("div",null,s(l.value.traces.reason),1)])):(o(),i("div",se,[e("div",null,s(t(a)("notLogistics")),1)]))],64)):(o(),i("span",te,s(t(a)("noLogisticsRequired")),1))])),[[k,u.value]])]),_:1},8,["modelValue","title"])}}});export{ge as _};
