import{d as Fe,x as $e,f as Ae,r as f,n as J,bO as Ne,h as p,c as m,e as t,w as i,a as c,t as n,u as s,q as a,F as A,T as Y,s as D,i as h,B as v,R as Me,A as Be,a3 as Q,bP as Ue,a5 as X,U as Z,ac as Oe,aD as ze,K as Re,L as Ye,bR as je,E as Ie,M as Le,a7 as qe,ay as He,az as Ge,ad as Ke,ae as We,aa as Je,ab as Qe,W as Xe,Y as Ze}from"./index-904cb7a2.js";/* empty css                   */import{_ as et}from"./index.vue_vue_type_script_setup_true_lang-6df563ba.js";/* empty css                      *//* empty css                 *//* empty css               *//* empty css                  *//* empty css                  *//* empty css                     *//* empty css                  *//* empty css                 */import"./el-tooltip-4ed993c7.js";/* empty css                 *//* empty css                    *//* empty css                        *//* empty css                    *//* empty css                *//* empty css                *//* empty css                  *//* empty css                       */import"./el-form-item-4ed993c7.js";import{g as tt,a as at,b as lt,c as ot,x as rt,y as st}from"./order-8e8307b0.js";import{p as nt}from"./printer-463cc376.js";import{_ as it}from"./delivery-action.vue_vue_type_style_index_0_lang-755ea9e1.js";import{_ as dt}from"./order-notes.vue_vue_type_style_index_0_lang-389a2637.js";import{_ as pt}from"./order-export-select.vue_vue_type_script_setup_true_lang-b2b1c30f.js";import{_ as ct}from"./order-edit-address.vue_vue_type_style_index_0_lang-231c203f.js";import{_ as ut}from"./adjust-money.vue_vue_type_style_index_0_lang-585de22f.js";import{_ as mt}from"./shop-active-refund.vue_vue_type_style_index_0_lang-23adaece.js";import{_ as _t}from"./electronic-sheet-print.vue_vue_type_style_index_0_lang-18b32fba.js";import{_ as ft}from"./_plugin-vue_export-helper-c27b6911.js";/* empty css                  *//* empty css                   *//* empty css                       *//* empty css                 *//* empty css                 */import"./delivery-86e0fcc0.js";import"./weapp-20eea152.js";import"./electronic_sheet-81054cac.js";import"./lodop-ff2d2f62.js";import"./qqmap-011f3cfb.js";const ht={class:"main-container"},yt={class:"flex justify-between items-center"},gt={class:"text-page-title"},vt={key:0,class:"mb-[10px] flex items-center"},bt={class:"table-body min-h-[150px]"},xt={key:0},kt={class:"flex items-center justify-between bg-[#f7f8fa] mt-[10px] border-[#e4e7ed] border-solid border-b-[1px] px-3 h-[35px] text-[12px] text-[#666]"},wt={class:"ml-5"},Dt={key:0,class:"ml-5"},Ct={class:"flex cursor-pointer"},Pt={class:"flex items-center min-w-[50px] mr-[10px]"},St=["src"],Et={key:1,class:"w-[50px] h-[50px]",src:"",alt:""},Tt={class:"flex flex-col items-start"},Vt={class:"max-w-[250px]"},Ft={class:"multi-hidden text-[14px]"},$t={class:"text-[12px] text-[#999] truncate"},At={key:0,class:"px-[4px] text-[12px] text-[#fff] rounded-[4px] bg-primary leading-[18px]"},Nt={class:"flex flex-col"},Mt={key:0},Bt={key:0},Ut={key:1,class:"text-[13px]"},Ot={class:"text-[13px] mt-[5px]"},zt={class:"flex flex-col cursor-pointer"},Rt={key:0,class:"text-[14px]"},Yt={key:0},jt={key:1,class:"text-[14px]"},It={class:"flex flex-col"},Lt=["onClick"],qt={class:"text-[12px] mt-[5px]"},Ht={class:"text-[12px] mt-[5px]"},Gt={class:"text-[14px]"},Kt={class:"text-[14px]"},Wt={key:0,class:"text-[14px] min-h-[30px] leading-[30px] px-3 bg-[#fff0e5] text-[#ff7f5b]"},Jt={class:"mr-[5px]"},Qt={class:"mt-[16px] flex justify-end"},Xt=Fe({__name:"list",setup(Zt){const N=$e(),j=Ae(),ee=N.meta.title,T=f(N.query.status||""),te=f([]),I=f([]),L=f([]);(async()=>{te.value=await(await tt()).data,I.value=await(await at()).data,L.value=await(await lt()).data})();const k=J({}),V=f(null),S=f(!1),ae=()=>{if(S.value){S.value=!1;for(const l in o.data)V.value[l].clearSelection(),delete k["order_"+o.data[l].order_id]}else{S.value=!0;for(const l in o.data){let r=!1;for(const d in o.data[l].order_goods)o.data[l].order_goods[d].status==1&&(V.value[l].toggleRowSelection(o.data[l].order_goods[d],!0),r=!0);r&&(k["order_"+o.data[l].order_id]=Q(o.data[l]))}}},le=(l,r)=>{let d=!1,y=null;for(let x=0;x<o.data.length;x++)if(o.data[x].order_id==r.order_id){y=o.data[x];break}for(let x=0;x<l.length;x++)if(l[x].order_id==r.order_id){d=!0;break}d?k["order_"+r.order_id]=y:delete k["order_"+r.order_id]},o=J({page:1,limit:10,total:0,loading:!0,data:[],searchParam:{search_type:"order_no",search_name:"",keyword:"",pay_type:"",order_from:"",status:N.query.status||"",create_time:[],pay_time:[]}}),q=f(),b=(l=1)=>{o.loading=!0,o.page=l,ot({page:o.page,limit:o.limit,...o.searchParam}).then(r=>{o.loading=!1,o.data=r.data.data.map(d=>(d.isSupportElectronicSheet=!1,d.isSupportPrintTicket=!1,d.delivery_type=="express"&&d.status==3&&(d.isSupportElectronicSheet=!0),d.delivery_type!="virtual"&&(d.status==2||d.status==3||d.status==5)&&(d.isSupportPrintTicket=!0),d.order_goods.forEach(y=>{y.rowNum=d.order_goods.length}),d)),o.data.forEach((d,y,x)=>{let w=0;d.order_goods.forEach(($,g)=>{$.status==1&&w++}),x[y].is_refund_show=w>0}),o.total=r.data.total,Ue(o.page,o.limit,o.searchParam)}).catch(()=>{o.loading=!1})};b(Ne(o.searchParam).page);const oe=l=>{o.searchParam.status=l,S.value=!1;for(let r in k)delete k[r];b()},re=({row:l,column:r,rowIndex:d,columnIndex:y})=>d===0?y===0?[l.rowNum,1]:y>3?[l.rowNum,1]:[1,1]:y===0?[0,0]:y>3?[0,0]:[1,1],se=f(null),H=f(""),M=f(!1),ne=l=>{M.value=l},ie=l=>{H.value=l,M.value=!0},G=f(null),de=()=>{G.value.showDialog=!0},pe=l=>{j.push("/shop/order/detail?order_id="+l.order_id)},ce=l=>{const r=j.resolve({path:"/member/detail",query:{id:l}});window.open(r.href,"_blank")},ue=l=>{X.confirm(a("orderCloseTips"),a("warning"),{confirmButtonText:a("confirm"),cancelButtonText:a("cancel"),type:"warning"}).then(()=>{rt(l.order_id).then(()=>{b()})})},B=f(null),me=l=>{B.value.setFormData(l),B.value.showDialog=!0},U=f(null),_e=l=>{U.value.setFormData(l),U.value.showDialog=!0},O=f(null),fe=l=>{O.value.setFormData(l),O.value.showDialog=!0},he=l=>{X.confirm(a("orderFinishTips"),a("warning"),{confirmButtonText:a("confirm"),cancelButtonText:a("cancel"),type:"warning"}).then(()=>{st(l.order_id).then(()=>{b()})})},ye=l=>{l&&(l.resetFields(),b())},z=f(null),ge=async l=>{z.value.showDialog=!0,z.value.setFormData(l)},E=f(null),ve=l=>{let r=Q(l);r.print_type="single",E.value.setFormData(r),E.value.showDialog=!0},be=()=>{let l=0,r=[];for(let d in k)k[d].isSupportElectronicSheet?r.push(k[d].order_id):l++;if(l&&r.length==0){Z({type:"warning",message:`${a("notSupportPrintElectronicSheetTips")}`});return}if(r.length==0){Z({type:"warning",message:`${a("batchEmptySelectedOrderTips")}`});return}E.value.setFormData({order_id:r.toString(),print_type:"multiple"}),E.value.showDialog=!0},xe=()=>{S.value=!1;for(const l in o.data)V.value[l].clearSelection(),delete k["order_"+o.data[l].order_id]},F=f(!1),ke=l=>{F.value||(F.value=!0,nt({type:"shopGoodsOrder",trigger:"manual",business:{order_id:l.order_id}}).then(r=>{F.value=!1}).catch(()=>{F.value=!1}))},R=f(null),we=l=>{R.value.setFormData(l),R.value.showDialog=!0};return(l,r)=>{const d=Oe,y=ze,x=Re,w=Ye,$=je,g=Ie,De=Le,K=qe,C=He,Ce=Ge,_=Ke,W=We,Pe=Je,Se=Qe,Ee=Xe,Te=et,Ve=Ze;return p(),m("div",ht,[t(K,{class:"box-card !border-none",shadow:"never"},{default:i(()=>[c("div",yt,[c("span",gt,n(s(ee)),1)]),t(K,{class:"box-card !border-none my-[10px] table-search-wrap",shadow:"never"},{default:i(()=>[t(De,{inline:!0,model:o.searchParam,ref_key:"searchFormRef",ref:q},{default:i(()=>[t(w,{label:s(a)("orderInfo"),prop:"search_name"},{default:i(()=>[t(y,{modelValue:o.searchParam.search_type,"onUpdate:modelValue":r[0]||(r[0]=e=>o.searchParam.search_type=e),clearable:"",class:"input-item"},{default:i(()=>[t(d,{label:s(a)("orderNo"),value:"order_no"},null,8,["label"]),t(d,{label:s(a)("outTradeNo"),value:"out_trade_no"},null,8,["label"])]),_:1},8,["modelValue"]),t(x,{class:"input-item ml-3",modelValue:o.searchParam.search_name,"onUpdate:modelValue":r[1]||(r[1]=e=>o.searchParam.search_name=e),modelModifiers:{trim:!0}},null,8,["modelValue"])]),_:1},8,["label"]),t(w,{label:s(a)("memberInfo"),prop:"keyword"},{default:i(()=>[t(x,{class:"w-[200px]",modelValue:o.searchParam.keyword,"onUpdate:modelValue":r[2]||(r[2]=e=>o.searchParam.keyword=e),modelModifiers:{trim:!0},placeholder:s(a)("memberInfoPlaceholder")},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),t(w,{label:s(a)("payType"),prop:"pay_type"},{default:i(()=>[t(y,{modelValue:o.searchParam.pay_type,"onUpdate:modelValue":r[3]||(r[3]=e=>o.searchParam.pay_type=e),clearable:"",class:"input-item"},{default:i(()=>[(p(!0),m(A,null,Y(I.value,(e,P)=>(p(),D(d,{key:P,label:e.name,value:e.key},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1},8,["label"]),t(w,{label:s(a)("fromType"),prop:"order_from"},{default:i(()=>[t(y,{modelValue:o.searchParam.order_from,"onUpdate:modelValue":r[4]||(r[4]=e=>o.searchParam.order_from=e),clearable:"",class:"input-item"},{default:i(()=>[(p(!0),m(A,null,Y(L.value,(e,P)=>(p(),D(d,{key:P,label:e,value:P},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1},8,["label"]),t(w,{label:s(a)("createTime"),prop:"create_time"},{default:i(()=>[t($,{modelValue:o.searchParam.create_time,"onUpdate:modelValue":r[5]||(r[5]=e=>o.searchParam.create_time=e),type:"datetimerange","value-format":"YYYY-MM-DD HH:mm:ss","start-placeholder":s(a)("startDate"),"end-placeholder":s(a)("endDate")},null,8,["modelValue","start-placeholder","end-placeholder"])]),_:1},8,["label"]),t(w,{label:s(a)("payTime"),prop:"pay_time"},{default:i(()=>[t($,{modelValue:o.searchParam.pay_time,"onUpdate:modelValue":r[6]||(r[6]=e=>o.searchParam.pay_time=e),type:"datetimerange","value-format":"YYYY-MM-DD HH:mm:ss","start-placeholder":s(a)("startDate"),"end-placeholder":s(a)("endDate")},null,8,["modelValue","start-placeholder","end-placeholder"])]),_:1},8,["label"]),t(w,null,{default:i(()=>[t(g,{type:"primary",onClick:r[7]||(r[7]=e=>b())},{default:i(()=>[h(n(s(a)("search")),1)]),_:1}),t(g,{onClick:r[8]||(r[8]=e=>ye(q.value))},{default:i(()=>[h(n(s(a)("reset")),1)]),_:1}),t(g,{type:"primary",onClick:de},{default:i(()=>[h(n(s(a)("export")),1)]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),t(Ce,{modelValue:T.value,"onUpdate:modelValue":r[9]||(r[9]=e=>T.value=e),class:"demo-tabs",onTabChange:oe},{default:i(()=>[t(C,{label:s(a)("all"),name:""},null,8,["label"]),t(C,{label:s(a)("toBePaid"),name:"1"},null,8,["label"]),t(C,{label:s(a)("toBeShipped"),name:"2"},null,8,["label"]),t(C,{label:s(a)("shipped"),name:"3"},null,8,["label"]),t(C,{label:s(a)("completed"),name:"5"},null,8,["label"]),t(C,{label:s(a)("closed"),name:"-1"},null,8,["label"])]),_:1},8,["modelValue"]),c("div",null,[T.value==3?(p(),m("div",vt,[T.value==3?(p(),D(g,{key:0,onClick:be,size:"small"},{default:i(()=>[h(n(s(a)("batchPrintElectronicSheet")),1)]),_:1})):v("",!0)])):v("",!0),t(W,{data:o.data,size:"large",class:"table-top",onSelectAll:ae},{default:i(()=>[t(_,{type:"selection",width:"40"}),t(_,{label:s(a)("orderGoods"),"min-width":"200"},null,8,["label"]),t(_,{label:s(a)("goodsPriceNumber"),"min-width":"120"},null,8,["label"]),t(_,{label:s(a)("rightsProtection"),"min-width":"120"},null,8,["label"]),t(_,{label:s(a)("orderMoney"),"min-width":"120"},null,8,["label"]),t(_,{label:s(a)("buyInfo"),"min-width":"120"},null,8,["label"]),t(_,{label:s(a)("deliveryType"),"min-width":"100"},null,8,["label"]),t(_,{label:s(a)("orderStatus"),"min-width":"100"},null,8,["label"]),t(_,{label:s(a)("operation"),fixed:"right",align:"right","min-width":"120"},null,8,["label"])]),_:1},8,["data"]),Me((p(),m("div",bt,[o.loading?v("",!0):(p(),m("div",xt,[o.data.length?(p(!0),m(A,{key:0},Y(o.data,(e,P)=>(p(),m("div",{key:P},[c("div",kt,[c("div",null,[c("span",null,n(s(a)("orderNo"))+"："+n(e.order_no),1),c("span",wt,n(s(a)("createTime"))+"："+n(e.create_time),1),e.pay?(p(),m("span",Dt,n(s(a)("payType"))+"："+n(e.pay.type_name),1)):v("",!0)]),c("div",null,[e.isSupportPrintTicket?(p(),D(g,{key:0,type:"primary",link:"",onClick:u=>ke(e)},{default:i(()=>[h(n(s(a)("printTicket")),1)]),_:2},1032,["onClick"])):v("",!0),e.isSupportElectronicSheet?(p(),D(g,{key:1,type:"primary",link:"",onClick:u=>ve(e)},{default:i(()=>[h(n(s(a)("electronicSheetPrintTitle")),1)]),_:2},1032,["onClick"])):v("",!0),t(g,{type:"primary",link:"",onClick:u=>pe(e)},{default:i(()=>[h(n(s(a)("info")),1)]),_:2},1032,["onClick"]),t(g,{type:"primary",link:"",onClick:u=>fe(e)},{default:i(()=>[h(n(s(a)("notes")),1)]),_:2},1032,["onClick"])])]),t(W,{data:e.order_goods,size:"large","show-header":!1,"span-method":re,ref_for:!0,ref_key:"multipleTable",ref:V,onSelect:le},{default:i(()=>[t(_,{type:"selection",width:"40"}),t(_,{align:"left","min-width":"200"},{default:i(({row:u})=>[c("div",Ct,[c("div",Pt,[u.goods_image?(p(),m("img",{key:0,class:"w-[50px] h-[50px]",src:s(Be)(u.goods_image),alt:""},null,8,St)):(p(),m("img",Et))]),c("div",Tt,[t(Pe,{class:"box-item",effect:"light",placement:"top"},{content:i(()=>[c("div",Vt,n(u.goods_name),1)]),default:i(()=>[c("p",Ft,n(u.goods_name),1)]),_:2},1024),c("span",$t,n(u.sku_name),1),u.is_gift==1?(p(),m("span",At,"赠品")):v("",!0)])])]),_:1}),t(_,{"min-width":"120"},{default:i(({row:u})=>[c("div",Nt,[e.activity_type=="exchange"?(p(),m("span",Mt,[h(n(u.extend.point)+n(s(a)("point"))+" ",1),parseFloat(u.price)?(p(),m("span",Bt,"+￥"+n(u.price),1)):v("",!0)])):(p(),m("span",Ut,"￥"+n(u.price),1)),c("span",Ot,n(u.num)+n(s(a)("piece")),1)])]),_:2},1024),t(_,{"min-width":"120"},{default:i(({row:u})=>[c("div",zt,[c("span",null,n(u.status_name),1)])]),_:1}),t(_,{"min-width":"120","class-name":"border-0 border-l-[1px] border-solid border-[var(--el-table-border-color)]"},{default:i(()=>[e.activity_type=="exchange"?(p(),m("span",Rt,[h(n(e.point)+n(s(a)("point"))+" ",1),parseFloat(e.order_money)?(p(),m("span",Yt,"+￥"+n(e.order_money),1)):v("",!0)])):(p(),m("span",jt,"￥"+n(e.order_money),1))]),_:2},1024),t(_,{"min-width":"120"},{default:i(()=>[c("div",It,[c("span",{class:"text-[12px] text-primary cursor-pointer",onClick:u=>ce(e.member.member_id)},n(e.member.nickname),9,Lt),c("span",qt,n(e.taker_name)+" "+n(e.taker_mobile),1),c("span",Ht,n(e.taker_full_address),1)])]),_:2},1024),t(_,{"min-width":"100"},{default:i(()=>[c("span",Gt,n(e.delivery_type_name),1)]),_:2},1024),t(_,{"min-width":"100"},{default:i(()=>[c("span",Kt,n(e.status_name.name),1)]),_:2},1024),t(_,{align:"right","min-width":"120"},{default:i(()=>[e.status==1?(p(),m(A,{key:0},[t(g,{type:"primary",link:"",onClick:u=>ue(e)},{default:i(()=>[h(n(s(a)("orderClose")),1)]),_:2},1032,["onClick"]),t(g,{type:"primary",link:"",onClick:u=>me(e)},{default:i(()=>[h(n(s(a)("editPrice")),1)]),_:2},1032,["onClick"]),e.delivery_type!="virtual"&&e.activity_type!="giftcard"?(p(),D(g,{key:0,type:"primary",link:"",onClick:u=>ge(e)},{default:i(()=>[h(n(s(a)("editAddress")),1)]),_:2},1032,["onClick"])):v("",!0)],64)):v("",!0),e.status==2?(p(),D(g,{key:1,type:"primary",link:"",onClick:u=>_e(e)},{default:i(()=>[h(n(s(a)("sendOutGoods")),1)]),_:2},1032,["onClick"])):v("",!0),e.status==3?(p(),D(g,{key:2,type:"primary",link:"",onClick:u=>he(e)},{default:i(()=>[h(n(s(a)("confirmTakeDelivery")),1)]),_:2},1032,["onClick"])):v("",!0),e.is_refund_show&&e.status!=1&&e.status!=-1&&e.is_enable_refund==1?(p(),D(g,{key:3,type:"primary",link:"",onClick:u=>we(e)},{default:i(()=>[h(n(s(a)("voluntaryRefund")),1)]),_:2},1032,["onClick"])):v("",!0)]),_:2},1024)]),_:2},1032,["data"]),e.shop_remark?(p(),m("div",Wt,[c("span",Jt,n(s(a)("notes"))+"：",1),c("span",null,n(e.shop_remark),1)])):v("",!0)]))),128)):(p(),D(Se,{key:1,"image-size":1,description:s(a)("emptyData")},null,8,["description"]))]))])),[[Ve,o.loading]]),c("div",Qt,[t(Ee,{"current-page":o.page,"onUpdate:current-page":r[10]||(r[10]=e=>o.page=e),"page-size":o.limit,"onUpdate:page-size":r[11]||(r[11]=e=>o.limit=e),layout:"total, sizes, prev, pager, next, jumper",total:o.total,onSizeChange:r[12]||(r[12]=e=>b()),onCurrentChange:b},null,8,["current-page","page-size","total"])])])]),_:1}),t(ut,{ref_key:"orderAdjustMoneyActionDialog",ref:B,onComplete:b},null,512),t(it,{ref_key:"deliveryActionDialog",ref:U,onComplete:b},null,512),t(dt,{ref_key:"orderNotesDialog",ref:O,onComplete:b},null,512),t(pt,{ref_key:"selectExportDialog",ref:G,onComplete:ie},null,512),t(Te,{ref_key:"exportSureDialog",ref:se,show:M.value,type:H.value,searchParam:o.searchParam,onClose:ne},null,8,["show","type","searchParam"]),t(ct,{ref_key:"orderEditAddressDialog",ref:z,onComplete:b},null,512),t(_t,{ref_key:"electronicSheetPrintDialog",ref:E,onComplete:xe},null,512),t(mt,{ref_key:"shopActiveRefundDialog",ref:R,onComplete:b},null,512)])}}});const ja=ft(Xt,[["__scopeId","data-v-c2942533"]]);export{ja as default};
