import{d as be,r as p,q as Y,m as he,s as r,a2 as xe,h as _,v as C,w as o,a as d,e as a,i as m,t as u,u as i,R as H,c as x,C as w,F as J,T as K,a3 as X,U as ke,cE as we,E as Ce,at as Ve,au as De,L as Ee,M as Pe,ac as Ae,ad as Fe,aW as Ne,K as ze,X as Te,a7 as Ue,ak as $e,W as Se,Y as je}from"./index-0e396751.js";/* empty css                   *//* empty css                      *//* empty css                 *//* empty css               *//* empty css                  *//* empty css                  *//* empty css                     *//* empty css                  *//* empty css                *//* empty css                  *//* empty css                   *//* empty css                 *//* empty css                 *//* empty css                    */import"./el-tooltip-4ed993c7.js";/* empty css                        *//* empty css                */import"./el-form-item-4ed993c7.js";/* empty css                       *//* empty css                 *//* empty css                  *//* empty css                  */import{g as Q,o as Re,a as Oe,p as Be}from"./shop-4299764b.js";const qe={key:0,class:"flex mb-2 items-center"},Le={class:"ml-2 mr-4"},Ie={class:"font-bold truncate"},We={class:"font-bold"},Ge={key:1,class:"flex justify-end"},Me={class:"pr-4 pl-4 pt-1 pb-1 rounded-md statistic-card bg-gradient-to-r from-indigo-50 from-10% via-sky-50 via-10% to-emerald-50 to-10%"},Ye={class:"font-bold"},He={class:"flex items-center"},Je={class:"mr-2 font-bold"},Ke={class:"mr-4"},Xe=d("span",{class:"ml-2"},"单位：kg",-1),Qe=d("span",{class:"ml-2"},"单位：元",-1),Ze=d("span",{class:"ml-2 text-slate-400"}," 如不需保价可以留空",-1),el={class:"flex flex-wrap"},ll=["onClick"],tl=["onClick"],al={class:"font-bold truncate"},ol={class:"text-xs"},sl={class:"flex items-center"},rl=d("div",{class:"text-xs pt-1"},"￥",-1),dl={class:"font-bold text-xl text-red-500"},il={class:"dialog-footer"},nl={class:"mt-[10px]"},ul={key:0},pl={key:1},_l={class:"mt-[16px] flex justify-end"},ml={class:"dialog-footer"},Bl=be({__name:"delivery-action",emits:["complete"],setup(cl,{expose:Z,emit:ee}){const y=p(null);try{const t=localStorage.getItem("mr_address");t?y.value=JSON.parse(t):console.log("Address is empty.")}catch(t){console.error("Error parsing address:",t)}const U=p(),b=p(),le=async t=>{A.value=!1,y.value=t,s.send_id=t.id,F()},$=()=>{b.value=null,V.value=!0,F()},S=t=>{b.value=t,s.predata=t,V.value=!1},te=()=>{b.value=null},V=p(!1),A=p(!1),ae=async()=>{A.value=!0,await Q({})},n=Y({page:1,limit:10,total:0,loading:!0,data:[],searchParam:{mobile:"",full_address:""}}),j=p(),D=(t=1)=>{n.loading=!0,n.page=t,Q({page:n.page,limit:n.limit,...n.searchParam}).then(e=>{n.loading=!1,n.data=e.data.data,n.total=e.data.total}).catch(()=>{n.loading=!1})};D();const oe=t=>{t&&(t.resetFields(),D())},E=p(!1),h=p(!1);p([]);const R=p(!1),z=p([]),O=p([]),s=Y({...{order_id:0,delivery_type:"",express_company_id:"",express_number:"",order_goods_ids:[],weight:"1",bj_price:"",send_id:"",predata:""}}),B=p(),se=he(()=>({delivery_type:[{required:!0,message:r("deliveryTypePlaceholder"),trigger:"blur"}],express_company_id:[{required:!0,validator:re,trigger:"blur"}],express_number:[{required:!0,validator:de,trigger:"blur"}]})),re=(t,e,c)=>{s.delivery_type=="express"&&e===""?c(new Error(r("companyPlaceholder"))):c()},de=(t,e,c)=>{s.delivery_type=="express"&&e===""?c(new Error(r("expressNumberPlaceholder"))):c()},ie=(t,e)=>!(t.status==2||t.delivery_status=="delivery_finish"),g=p([]),q=()=>{if(g.value=X(O.value),s.delivery_type&&s.delivery_type=="virtual")for(const t in g.value)g.value[t].goods_type!="virtual"&&g.value.splice(t,1);else if(s.delivery_type&&s.delivery_type!="virtual")for(const t in g.value)g.value[t].goods_type=="virtual"&&g.value.splice(t,1)},ne=t=>{s.order_goods_ids=X([]);for(const e in t)s.order_goods_ids.push(t[e].order_goods_id)},ue=async t=>{if(s.send_id=y.value.id,!(h.value||!t)){if(s.order_goods_ids.length<=0){ke({message:r("orderGoodsPlaceholder"),type:"warning"});return}await t.validate(async e=>{e&&(h.value=!0,Re(s).then(v=>{h.value=!1,E.value=!1,ee("complete"),L()}).catch(v=>{h.value=!1,L()}))})}},pe=async(t=null)=>{if(h.value=!0,t){s.order_id=t.order_id,s.delivery_type="",O.value=t.order_goods,g.value=t.order_goods,await Oe({delivery_type:t.delivery_type}).then(e=>{z.value=e.data;for(const c in e.data){s.delivery_type=c;break}q()});for(let e=0;e<t.order_goods.length;e++)if(t.order_goods[e].goods_type=="virtual"){R.value=!0;break}R.value==!0&&Object.assign(z.value,{virtual:r("virtualDelivery")}),V.value=!0,F()}h.value=!1},L=()=>{s.delivery_type="",s.express_company_id="",s.express_number="",s.order_goods_ids=[],s.send_id=y.value.id},F=async()=>{let t={send_id:y.value.id,order_id:s.order_id,weight:s.weight,bj_price:s.bj_price};if(y.value.id){const e=await Be(t);U.value=e.data}};return Z({showDialog:E,setFormData:pe}),(t,e)=>{const c=we,v=Ce,_e=Ve,me=De,k=Ee,I=Pe,f=Ae,W=Fe,ce=Ne,N=ze,ve=xe("block"),T=Te,fe=Ue,G=$e,ye=Se,M=je;return _(),C(T,{modelValue:E.value,"onUpdate:modelValue":e[17]||(e[17]=l=>E.value=l),title:"聚合发货",width:"700px",class:"diy-dialog-wrap","destroy-on-close":!0,onClose:te},{footer:o(()=>[d("span",ml,[a(v,{onClick:e[15]||(e[15]=l=>E.value=!1)},{default:o(()=>[m(u(i(r)("cancel")),1)]),_:1}),a(v,{type:"primary",loading:h.value,onClick:e[16]||(e[16]=l=>ue(B.value))},{default:o(()=>[m(u(i(r)("confirm")),1)]),_:1},8,["loading"])])]),default:o(()=>[H((_(),x("div",null,[a(I,{model:s,"label-width":"100px",ref_key:"formRef",ref:B,rules:i(se),class:"page-form mb-[30px]"},{default:o(()=>[b.value&&s.delivery_type=="express"?(_(),x("div",qe,[a(c,{src:b.value.logo},null,8,["src"]),d("div",Le,[d("div",Ie,u(b.value.channelName),1),d("div",We," 预计运费:￥"+u(b.value.preDeliveryFee),1)]),a(v,{type:"primary",size:"small",round:"",onClick:e[0]||(e[0]=l=>$())},{default:o(()=>[m("重新选择")]),_:1})])):w("",!0),!b.value&&s.delivery_type=="express"?(_(),x("div",Ge,[a(v,{type:"primary",onClick:e[1]||(e[1]=l=>$())},{default:o(()=>[m("选择快递")]),_:1})])):w("",!0),a(k,{label:i(r)("deliveryType"),prop:"delivery_type"},{default:o(()=>[a(me,{modelValue:s.delivery_type,"onUpdate:modelValue":e[2]||(e[2]=l=>s.delivery_type=l),onChange:q},{default:o(()=>[(_(!0),x(J,null,K(z.value,(l,P)=>(_(),C(_e,{label:P,key:P},{default:o(()=>[m(u(l),1)]),_:2},1032,["label"]))),128))]),_:1},8,["modelValue"])]),_:1},8,["label"])]),_:1},8,["model","rules"]),a(W,{data:g.value,size:"large",onSelectionChange:ne},{default:o(()=>[a(f,{type:"selection",width:"55",selectable:ie}),a(f,{prop:"goods_name",label:i(r)("goodsName"),"min-width":"200"},null,8,["label"]),a(f,{prop:"num",label:i(r)("num"),"min-width":"80"},null,8,["label"]),a(f,{prop:"status_name",label:i(r)("refundStatusName"),"min-width":"120"},null,8,["label"]),a(f,{prop:"delivery_status_name",label:i(r)("deliveryStatusName"),"min-width":"120",align:"right"},null,8,["label"])]),_:1},8,["data"])])),[[M,h.value]]),a(T,{modelValue:V.value,"onUpdate:modelValue":e[6]||(e[6]=l=>V.value=l),width:"65%","close-on-click-modal":!1},{footer:o(()=>[d("span",il,[a(v,{type:"primary",onClick:e[5]||(e[5]=l=>F())},{default:o(()=>[m("重新报价")]),_:1})])]),default:o(()=>[a(ce,{type:"warning",title:"默认会提前1kg,不保价获取快递运费，如您的重量不一致或者需要保价，您可以修改信息重新获取报价",description:"请提前打包好物品，根据包裹实际重量下单，如长时间未揽收，请到已发货/发单记录里面取消订单重新选择其他渠道下单",closable:!1,"show-icon":""}),a(k,{label:"发件地址",class:"mt-4"},{default:o(()=>[d("div",Me,[d("div",Ye,u(y.value.full_address),1),d("div",He,[d("div",Je,u(y.value.contact_name),1),d("div",Ke,u(y.value.mobile),1),a(v,{type:"primary",size:"small",round:"",onClick:ae},{default:o(()=>[m("切换地址")]),_:1})])])]),_:1}),a(k,{label:"包裹重量"},{default:o(()=>[a(N,{class:"input-width",type:"number",modelValue:s.weight,"onUpdate:modelValue":e[3]||(e[3]=l=>s.weight=l),placeholder:"请输入重量",style:{width:"88px"}},null,8,["modelValue"]),Xe]),_:1}),a(k,{label:"保价金额"},{default:o(()=>[a(N,{class:"input-width",type:"number",modelValue:s.bj_price,"onUpdate:modelValue":e[4]||(e[4]=l=>s.bj_price=l),placeholder:"",style:{width:"88px"}},null,8,["modelValue"]),Qe,Ze]),_:1}),d("div",el,[(_(!0),x(J,null,K(U.value,(l,P)=>(_(),C(ve,{key:P},{default:o(()=>[l.onlinePay=="Y"?(_(),x("div",{key:0,class:"flex items-center w-[260px] p-2 pt-3 m-2 rounded-md statistic-card bg-gradient-to-r from-indigo-50 from-10% via-sky-50 via-10% to-emerald-50 to-10%",onClick:ge=>S(l)},[d("div",null,[a(c,{src:l.logo},null,8,["src"])]),d("div",{class:"ml-2",onClick:ge=>S(l)},[d("div",al,u(l.channelName),1),d("div",ol,"限重:"+u(l.limitWeight)+"kg",1),d("div",sl,[rl,d("div",dl,u(l.preDeliveryFee),1)])],8,tl)],8,ll)):w("",!0)]),_:2},1024))),128))])]),_:1},8,["modelValue"]),a(T,{modelValue:A.value,"onUpdate:modelValue":e[14]||(e[14]=l=>A.value=l),title:"选择地址",width:"800px",class:"diy-dialog-wrap","destroy-on-close":!0},{default:o(()=>[a(fe,{class:"box-card !border-none my-[10px] table-search-wrap",shadow:"never"},{default:o(()=>[a(I,{inline:!0,model:n.searchParam,ref_key:"searchFormRef",ref:j},{default:o(()=>[a(k,{label:i(r)("mobile"),prop:"mobile"},{default:o(()=>[a(N,{modelValue:n.searchParam.mobile,"onUpdate:modelValue":e[7]||(e[7]=l=>n.searchParam.mobile=l),placeholder:i(r)("mobilePlaceholder")},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),a(k,{label:i(r)("fullAddress"),prop:"full_address"},{default:o(()=>[a(N,{modelValue:n.searchParam.full_address,"onUpdate:modelValue":e[8]||(e[8]=l=>n.searchParam.full_address=l),placeholder:i(r)("fullAddressPlaceholder")},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),a(k,null,{default:o(()=>[a(v,{type:"primary",onClick:e[9]||(e[9]=l=>D())},{default:o(()=>[m(u(i(r)("search")),1)]),_:1}),a(v,{onClick:e[10]||(e[10]=l=>oe(j.value))},{default:o(()=>[m(u(i(r)("reset")),1)]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),d("div",nl,[H((_(),C(W,{data:n.data,size:"large"},{empty:o(()=>[d("span",null,u(n.loading?"":i(r)("emptyData")),1)]),default:o(()=>[a(f,{prop:"contact_name",label:i(r)("contactName"),"min-width":"120"},null,8,["label"]),a(f,{prop:"mobile",label:i(r)("mobile"),"min-width":"120"},null,8,["label"]),a(f,{prop:"full_address",label:i(r)("fullAddress"),"min-width":"120","show-overflow-tooltip":!0},null,8,["label"]),a(f,{prop:"is_delivery_address",label:i(r)("addressType"),"min-width":"120",align:"left"},{default:o(({row:l})=>[l.is_delivery_address?(_(),x("div",ul,[m(u(i(r)("deliveryAddress"))+" ",1),l.is_default_delivery?(_(),C(G,{key:0,size:"small"},{default:o(()=>[m(u(i(r)("default")),1)]),_:1})):w("",!0)])):w("",!0),l.is_refund_address?(_(),x("div",pl,[m(u(i(r)("refundAddress"))+" ",1),l.is_default_refund?(_(),C(G,{key:0,size:"small"},{default:o(()=>[m(u(i(r)("default")),1)]),_:1})):w("",!0)])):w("",!0)]),_:1},8,["label"]),a(f,{"min-width":"100"},{default:o(({row:l})=>[a(v,{type:"primary",size:"small",onClick:P=>le(l)},{default:o(()=>[m("选择")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])),[[M,n.loading]]),d("div",_l,[a(ye,{"current-page":n.page,"onUpdate:current-page":e[11]||(e[11]=l=>n.page=l),"page-size":n.limit,"onUpdate:page-size":e[12]||(e[12]=l=>n.limit=l),layout:"total, sizes, prev, pager, next, jumper",total:n.total,onSizeChange:e[13]||(e[13]=l=>D()),onCurrentChange:D},null,8,["current-page","page-size","total"])])])]),_:1},8,["modelValue"])]),_:1},8,["modelValue"])}}});export{Bl as _};
