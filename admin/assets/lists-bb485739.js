import{O as H,d as A,x as G,f as W,r as k,n as J,h as m,c as p,e as t,w as i,a as l,t as a,u as o,q as s,i as D,R as K,F as V,T as Q,B as x,A as X,s as Z,a3 as ee,bR as te,L as ae,ac as oe,aD as se,E as le,M as ne,a7 as re,ad as ie,ae as de,ab as ce,W as me,Y as pe,p as _e,g as ue}from"./index-904cb7a2.js";/* empty css                   *//* empty css                      *//* empty css                 *//* empty css               *//* empty css                  *//* empty css                  *//* empty css                     *//* empty css                  *//* empty css                 *//* empty css                 *//* empty css                    */import"./el-tooltip-4ed993c7.js";/* empty css                        *//* empty css                *//* empty css                *//* empty css                  */import"./el-form-item-4ed993c7.js";/* empty css                       */import{g as he,a as be,b as fe}from"./order-8e8307b0.js";import{_ as ge}from"./_plugin-vue_export-helper-c27b6911.js";function xe(f){return H.get("shop_fenxiao/order",{params:f})}const ye=f=>(_e("data-v-e2316ee6"),f=f(),ue(),f),ve={class:"main-container"},ke={class:"flex justify-between items-center"},we={class:"text-page-title"},Ce={class:"table-body min-h-[150px]"},De={key:0},Ee={class:"flex items-center justify-between h-[35px] mt-[10px] px-3 text-[12px] text-[#666] border-solid border-b-[1px] border-[var(--el-border-color)] bg-[var(--el-color-info-light-9)]"},Fe={class:"ml-5"},Pe={key:0,class:"ml-5"},Se={class:"ml-5"},Te={class:"flex cursor-pointer"},Ve={class:"flex items-center min-w-[50px] mr-[10px]"},Ne=["src"],Re={key:1,class:"w-[50px] h-[50px]",src:"",alt:""},ze={class:"flex flex-col w-[308px]"},Oe={class:"multi-hidden text-[14px]"},$e={class:"text-[12px] text-[#999]"},je={class:"flex flex-col"},Be={class:"text-[13px]"},Le={class:"text-[13px] mt-[5px]"},Ue={class:"text-[13px]"},Ye={class:"text-[13px]"},qe={key:0,class:"flex flex-col"},Ie=["onClick"],Me={key:0},He={key:1},Ae=["title","onClick"],Ge=["title","onClick"],We={key:1},Je={key:0},Ke=ye(()=>l("span",null,"：",-1)),Qe={key:0},Xe={key:0,class:"text-[14px] h-[30px] leading-[30px] px-3 bg-[#fff0e5] text-[#ff7f5b]"},Ze={class:"mr-[5px]"},et={class:"mt-[16px] flex justify-end"},tt=A({__name:"lists",setup(f){const N=G(),w=W(),R=N.meta.title,z=k([]),O=k([]),$=k([]);(async()=>{z.value=await(await he()).data,O.value=await(await be()).data,$.value=await(await fe()).data})();const n=J({page:1,limit:10,total:0,loading:!0,data:[],searchParam:{is_settlement:"",create_time:[]}}),E=k(),y=(_=1)=>{n.loading=!0,n.page=_,xe({page:n.page,limit:n.limit,...n.searchParam}).then(r=>{n.loading=!1,n.data=[],r.data.data.forEach(h=>{let u=0;h.goods_list=[],h.shop_order.order_goods.forEach(b=>{u+=b.fenxiao_order_goods.length,b.fenxiao_order_goods.forEach((C,v)=>{let g=ee(Object.assign(b,C));delete g.fenxiao_order_goods,g.goodsRowspan=v?0:b.fenxiao_order_goods.length,g.rowspan=0,h.goods_list.push(g)})}),h.goods_list[0].rowspan=u,n.data.push(h)}),n.total=r.data.total}).catch(()=>{n.loading=!1})};y();const F=_=>{const r=w.resolve({path:"/shop_fenxiao/detail",query:{id:_.fenxiao_member_id}});window.open(r.href,"_blank")},j=({row:_,column:r,rowIndex:h,columnIndex:u})=>u<=2?[_.goodsRowspan,_.goodsRowspan?1:0]:u==3||u>7&&u!=8?[_.rowspan,_.rowspan?1:0]:[1,1],B=_=>{const r=w.resolve("/shop/order/detail?order_id="+_.order_id);window.open(r.href,"_blank")},L=_=>{const r=w.resolve({path:"/member/detail",query:{id:_}});window.open(r.href,"_blank")},U=_=>{_&&(_.resetFields(),y())};return(_,r)=>{const h=te,u=ae,b=oe,C=se,v=le,g=ne,P=re,d=ie,S=de,Y=ce,q=me,I=pe;return m(),p("div",ve,[t(P,{class:"card !border-none",shadow:"never"},{default:i(()=>[l("div",ke,[l("span",we,a(o(R)),1)]),t(P,{class:"card my-[10px] !border-none table-search-wrap",shadow:"never"},{default:i(()=>[t(g,{inline:!0,model:n.searchParam,ref_key:"searchFormRef",ref:E},{default:i(()=>[t(u,{label:o(s)("createTime"),prop:"create_time"},{default:i(()=>[t(h,{modelValue:n.searchParam.create_time,"onUpdate:modelValue":r[0]||(r[0]=c=>n.searchParam.create_time=c),type:"datetimerange","value-format":"YYYY-MM-DD HH:mm:ss","start-placeholder":o(s)("startDate"),"end-placeholder":o(s)("endDate")},null,8,["modelValue","start-placeholder","end-placeholder"])]),_:1},8,["label"]),t(u,{label:o(s)("orderStatus"),prop:"is_settlement"},{default:i(()=>[t(C,{modelValue:n.searchParam.is_settlement,"onUpdate:modelValue":r[1]||(r[1]=c=>n.searchParam.is_settlement=c),placeholder:o(s)("orderStatusPlaceholder"),clearable:""},{default:i(()=>[t(b,{label:"已结算",value:1}),t(b,{label:"待结算",value:0})]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"]),t(u,null,{default:i(()=>[t(v,{type:"primary",onClick:r[2]||(r[2]=c=>y())},{default:i(()=>[D(a(o(s)("search")),1)]),_:1}),t(v,{onClick:r[3]||(r[3]=c=>U(E.value))},{default:i(()=>[D(a(o(s)("reset")),1)]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),l("div",null,[t(S,{size:"large",class:"table-top"},{default:i(()=>[t(d,{label:o(s)("orderGoods"),width:"300"},null,8,["label"]),t(d,{label:o(s)("goodsPriceNumber"),"min-width":"140"},null,8,["label"]),t(d,{label:o(s)("refundStatus"),"min-width":"100"},null,8,["label"]),t(d,{label:o(s)("goodsFenxiaoPriceNumber"),"min-width":"120"},null,8,["label"]),t(d,{label:o(s)("buyInfo"),"min-width":"120"},null,8,["label"]),t(d,{label:o(s)("fenxiaoLevel"),"min-width":"70"},null,8,["label"]),t(d,{label:o(s)("fenxiaoName"),"min-width":"120"},null,8,["label"]),t(d,{label:o(s)("calculateType"),"min-width":"130"},null,8,["label"]),t(d,{label:o(s)("goodsFenxiaoPrice"),"min-width":"120",align:"right"},null,8,["label"]),t(d,{label:o(s)("orderStatus"),"min-width":"120"},null,8,["label"]),t(d,{label:o(s)("operation"),fixed:"right",align:"right","min-width":"120"},null,8,["label"])]),_:1}),K((m(),p("div",Ce,[n.loading?x("",!0):(m(),p("div",De,[n.data.length?(m(!0),p(V,{key:0},Q(n.data,(c,M)=>(m(),p("div",{key:M},[l("div",Ee,[l("div",null,[l("span",null,a(o(s)("orderNo"))+"："+a(c.order_no),1),l("span",Fe,a(o(s)("createTime"))+"："+a(c.create_time),1),c.pay?(m(),p("span",Pe,a(o(s)("payType"))+"："+a(c.pay.type_name),1)):x("",!0),l("span",Se,a(o(s)("countPrice"))+"：￥"+a(c.commission_fenxiao),1)])]),t(S,{data:c.goods_list,size:"large","show-header":!1,"span-method":j,ref_for:!0,ref:"multipleTable"},{default:i(()=>[t(d,{align:"left",width:"300"},{default:i(({row:e})=>[l("div",Te,[l("div",Ve,[e.goods_image_thumb_mid?(m(),p("img",{key:0,class:"w-[50px] h-[50px]",src:o(X)(e.goods_image_thumb_mid),alt:""},null,8,Ne)):(m(),p("img",Re))]),l("div",ze,[l("p",Oe,a(e.goods_name),1),l("span",$e,a(e.sku_name),1)])])]),_:1}),t(d,{"min-width":"140"},{default:i(({row:e})=>[l("div",je,[l("span",Be,"￥"+a(e.goods_money),1),l("span",Le,a(e.num)+a(o(s)("price")),1)])]),_:1}),t(d,{"min-width":"100"},{default:i(({row:e})=>[l("span",Ue,a(e.status!=1&&e.status_name?e.status_name:"--"),1)]),_:1}),t(d,{"min-width":"120"},{default:i(({row:e})=>[l("span",Ye,"￥"+a(e.order_goods_money),1)]),_:1}),t(d,{"min-width":"120","class-name":"border-0 border-l-[1px] border-solid border-[var(--el-table-border-color)]"},{default:i(()=>[c.shop_order.member?(m(),p("div",qe,[l("span",{class:"text-[12px] text-primary cursor-pointer",onClick:e=>L(c.shop_order.member.member_id)},a(c.shop_order.member.nickname),9,Ie)])):x("",!0)]),_:2},1024),t(d,{"min-width":"70","class-name":"border-0 border-l-[1px] border-solid border-[var(--el-table-border-color)]"},{default:i(({row:e})=>[e.commission_level?(m(),p("span",Me,a(e.commission_level)+"级",1)):(m(),p("span",He,"--"))]),_:1}),t(d,{"min-width":"120"},{default:i(({row:e})=>[e.member.nickname?(m(),p(V,{key:0},[e.member.nickname?(m(),p("span",{key:0,title:e.member.nickname,class:"multi-hidden text-primary cursor-pointer",onClick:T=>F(e)},a(e.member.nickname),9,Ae)):(m(),p("span",{key:1,title:e.member.nickname,class:"multi-hidden text-primary cursor-pointer",onClick:T=>F(e)},a(e.member.username),9,Ge))],64)):(m(),p("span",We,"--"))]),_:1}),t(d,{"min-width":"150"},{default:i(({row:e})=>[e.calculate_type?(m(),p("span",Je,[l("span",null,a(e.calculate_type_name),1),Ke,l("span",null,a(e.calculate_type!=1?"￥"+e.commission:e.commission_rate+"%"),1)])):x("",!0)]),_:1}),t(d,{"min-width":"120",align:"right"},{default:i(({row:e})=>[e.commission?(m(),p("span",Qe,"￥"+a(e.commission||"0.00"),1)):x("",!0)]),_:1}),t(d,{"min-width":"120","class-name":"border-0 border-l-[1px] border-solid border-[var(--el-table-border-color)]"},{default:i(({row:e})=>[l("span",null,a(e.is_settlement?"已结算":"待结算"),1)]),_:1}),t(d,{align:"right","min-width":"120"},{default:i(({row:e})=>[t(v,{type:"primary",link:"",onClick:T=>B(e)},{default:i(()=>[D(a(o(s)("orderDetail")),1)]),_:2},1032,["onClick"])]),_:1})]),_:2},1032,["data"]),c.shop_remark?(m(),p("div",Xe,[l("span",Ze,a(o(s)("notes"))+"：",1),l("span",null,a(c.shop_remark),1)])):x("",!0)]))),128)):(m(),Z(Y,{key:1,"image-size":1,description:o(s)("emptyData")},null,8,["description"]))]))])),[[I,n.loading]]),l("div",et,[t(q,{"current-page":n.page,"onUpdate:current-page":r[4]||(r[4]=c=>n.page=c),"page-size":n.limit,"onUpdate:page-size":r[5]||(r[5]=c=>n.limit=c),layout:"total, sizes, prev, pager, next, jumper",total:n.total,onSizeChange:r[6]||(r[6]=c=>y()),onCurrentChange:y},null,8,["current-page","page-size","total"])])])]),_:1})])}}});const Ct=ge(tt,[["__scopeId","data-v-e2316ee6"]]);export{Ct as default};