import{d as se,x as re,f as ne,r as b,n as R,h as p,c as f,e,w as n,a as d,t as c,u as o,q as l,F as $,T as I,s as S,i as k,R as ie,B as w,A as de,a3 as ce,a5 as me,ac as pe,aD as _e,K as ue,L as fe,bR as he,E as be,M as ye,a7 as ge,ay as xe,az as ve,ad as ke,ae as we,aa as Ce,ab as Ve,W as Te,Y as De}from"./index-904cb7a2.js";/* empty css                   *//* empty css                      *//* empty css                 *//* empty css               *//* empty css                  *//* empty css                  *//* empty css                     *//* empty css                  *//* empty css                 */import"./el-tooltip-4ed993c7.js";/* empty css                 *//* empty css                    *//* empty css                        *//* empty css                    *//* empty css                *//* empty css                *//* empty css                  *//* empty css                       */import"./el-form-item-4ed993c7.js";import{_ as Pe,a as Ee,b as Se,d as Ne,c as Fe}from"./order-notes.vue_vue_type_style_index_0_lang-165d4926.js";import{_ as Be}from"./_plugin-vue_export-helper-c27b6911.js";/* empty css                  *//* empty css                   */const Ue={class:"main-container"},ze={class:"flex justify-between items-center"},Me={class:"text-page-title"},Ye={class:"table-body min-h-[150px]"},Re={key:0},$e={class:"flex items-center justify-between bg-[#f7f8fa] mt-[10px] border-[#e4e7ed] border-solid border-b-[1px] px-3 h-[35px] text-[12px] text-[#666]"},Ie={class:"ml-5"},Oe={key:0,class:"ml-5"},je={class:"flex cursor-pointer"},qe={class:"flex items-center min-w-[50px] mr-[10px]"},Ae=["src"],Le={key:1,class:"w-[50px] h-[50px]",src:"",alt:""},He={class:"flex flex-col"},Ge={class:"max-w-[250px]"},Ke={class:"multi-hidden text-[14px]"},We={class:"flex flex-col"},Je={class:"text-[13px]"},Qe={class:"text-[13px] mt-[5px]"},Xe={class:"text-[14px]"},Ze={class:"text-[14px]"},et={class:"flex flex-col"},tt=["onClick"],at={class:"text-[14px]"},lt={key:0,class:"text-[14px]"},ot={key:0,class:"text-[14px] min-h-[30px] leading-[30px] px-3 bg-[#fff0e5] text-[#ff7f5b]"},st={class:"mr-[5px]"},rt={class:"mt-[16px] flex justify-end"},nt=se({__name:"list",setup(it){const C=re(),N=ne(),O=C.meta.title,F=b(C.query.status||""),j=b([]),B=b([]);(async()=>{j.value=await(await Ee()).data,B.value=await(await Se()).data})();const t=R({page:1,limit:10,total:0,loading:!0,data:[],searchParam:{search_type:"order_no",search_name:"",nickname:"",pay_type:"",status:C.query.status||"",create_time:[],pay_time:[],giftcard_id:C.query.giftcard_id}}),U=b(),y=R({}),D=b(null),V=b(!1),q=()=>{if(V.value){V.value=!1;for(const r in t.data)D.value[r].clearSelection(),delete y["order_"+t.data[r].order_id]}else{V.value=!0;for(const r in t.data){let a=!1;for(const _ in t.data[r].order_gift_card)t.data[r].order_gift_card[_].status==1&&(D.value[r].toggleRowSelection(t.data[r].order_gift_card[_],!0),a=!0);a&&(y["order_"+t.data[r].order_id]=ce(t.data[r]))}}},A=(r,a)=>{let _=!1,x=null;for(let u=0;u<t.data.length;u++)if(t.data[u].order_id==a.order_id){x=t.data[u];break}for(let u=0;u<r.length;u++)if(r[u].order_id==a.order_id){_=!0;break}_?y["order_"+a.order_id]=x:delete y["order_"+a.order_id]},L=(r,a)=>!0,h=(r=1)=>{t.loading=!0,t.page=r,Ne({page:t.page,limit:t.limit,...t.searchParam}).then(a=>{t.loading=!1,t.data=a.data.data.map(_=>(_.order_gift_card=[_],_)),t.total=a.data.total}).catch(()=>{t.loading=!1})};h();const H=r=>{t.searchParam.status=r,V.value=!1;for(let a in y)delete y[a];h()},G=r=>{r&&(r.resetFields(),h())},K=r=>{N.push("/shop_giftcard/order/detail?order_id="+r.order_id)},P=b(null),W=r=>{P.value.setFormData(r),P.value.showDialog=!0},J=r=>{const a=N.resolve({path:"/member/detail",query:{id:r}});window.open(a.href,"_blank")},Q=r=>{me.confirm(l("orderCloseTips"),l("warning"),{confirmButtonText:l("confirm"),cancelButtonText:l("cancel"),type:"warning"}).then(()=>{Fe(r.order_id).then(()=>{h()})})};return(r,a)=>{const _=pe,x=_e,u=ue,g=fe,z=he,v=be,X=ye,M=ge,T=xe,Z=ve,m=ke,Y=we,ee=Ce,te=Ve,ae=Te,le=De;return p(),f("div",Ue,[e(M,{class:"box-card !border-none",shadow:"never"},{default:n(()=>[d("div",ze,[d("span",Me,c(o(O)),1)]),e(M,{class:"box-card !border-none my-[10px] table-search-wrap",shadow:"never"},{default:n(()=>[e(X,{inline:!0,model:t.searchParam,ref_key:"searchFormRef",ref:U},{default:n(()=>[e(g,{label:o(l)("orderInfo"),prop:"search_name"},{default:n(()=>[e(x,{modelValue:t.searchParam.search_type,"onUpdate:modelValue":a[0]||(a[0]=s=>t.searchParam.search_type=s),clearable:"",class:"input-item"},{default:n(()=>[e(_,{label:o(l)("orderNo"),value:"order_no"},null,8,["label"]),e(_,{label:o(l)("outTradeNo"),value:"out_trade_no"},null,8,["label"])]),_:1},8,["modelValue"]),e(u,{class:"input-item ml-3",modelValue:t.searchParam.search_name,"onUpdate:modelValue":a[1]||(a[1]=s=>t.searchParam.search_name=s),modelModifiers:{trim:!0},maxlength:"20"},null,8,["modelValue"])]),_:1},8,["label"]),e(g,{label:o(l)("memberInfo"),prop:"nickname"},{default:n(()=>[e(u,{class:"w-[200px]",modelValue:t.searchParam.nickname,"onUpdate:modelValue":a[2]||(a[2]=s=>t.searchParam.nickname=s),modelModifiers:{trim:!0},placeholder:o(l)("memberInfoPlaceholder"),maxlength:"20"},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),e(g,{label:o(l)("payType"),prop:"pay_type"},{default:n(()=>[e(x,{modelValue:t.searchParam.pay_type,"onUpdate:modelValue":a[3]||(a[3]=s=>t.searchParam.pay_type=s),clearable:"",class:"input-item"},{default:n(()=>[(p(!0),f($,null,I(B.value,(s,E)=>(p(),S(_,{key:E,label:s.name,value:s.key},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1},8,["label"]),e(g,{label:o(l)("createTime"),prop:"create_time"},{default:n(()=>[e(z,{modelValue:t.searchParam.create_time,"onUpdate:modelValue":a[4]||(a[4]=s=>t.searchParam.create_time=s),type:"datetimerange","value-format":"YYYY-MM-DD HH:mm:ss","start-placeholder":o(l)("startDate"),"end-placeholder":o(l)("endDate")},null,8,["modelValue","start-placeholder","end-placeholder"])]),_:1},8,["label"]),e(g,{label:o(l)("payTime"),prop:"pay_time"},{default:n(()=>[e(z,{modelValue:t.searchParam.pay_time,"onUpdate:modelValue":a[5]||(a[5]=s=>t.searchParam.pay_time=s),type:"datetimerange","value-format":"YYYY-MM-DD HH:mm:ss","start-placeholder":o(l)("startDate"),"end-placeholder":o(l)("endDate")},null,8,["modelValue","start-placeholder","end-placeholder"])]),_:1},8,["label"]),e(g,null,{default:n(()=>[e(v,{type:"primary",onClick:a[6]||(a[6]=s=>h())},{default:n(()=>[k(c(o(l)("search")),1)]),_:1}),e(v,{onClick:a[7]||(a[7]=s=>G(U.value))},{default:n(()=>[k(c(o(l)("reset")),1)]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),e(Z,{modelValue:F.value,"onUpdate:modelValue":a[8]||(a[8]=s=>F.value=s),class:"demo-tabs",onTabChange:H},{default:n(()=>[e(T,{label:o(l)("all"),name:""},null,8,["label"]),e(T,{label:o(l)("toBePaid"),name:"1"},null,8,["label"]),e(T,{label:o(l)("completed"),name:"2"},null,8,["label"]),e(T,{label:o(l)("closed"),name:"-1"},null,8,["label"])]),_:1},8,["modelValue"]),d("div",null,[e(Y,{data:t.data,size:"large",class:"table-top",onSelectAll:q},{default:n(()=>[e(m,{type:"selection",width:"40"}),e(m,{label:o(l)("giftCard"),"min-width":"200"},null,8,["label"]),e(m,{label:o(l)("cardNumber"),"min-width":"120"},null,8,["label"]),e(m,{label:o(l)("cardRightType"),"min-width":"120"},null,8,["label"]),e(m,{label:o(l)("orderMoney"),"min-width":"120"},null,8,["label"]),e(m,{label:o(l)("buyInfo"),"min-width":"120"},null,8,["label"]),e(m,{label:o(l)("orderStatus"),"min-width":"100"},null,8,["label"]),e(m,{label:o(l)("payTime"),"min-width":"120"},null,8,["label"]),e(m,{label:o(l)("operation"),fixed:"right",align:"right","min-width":"120"},null,8,["label"])]),_:1},8,["data"]),ie((p(),f("div",Ye,[t.loading?w("",!0):(p(),f("div",Re,[t.data.length?(p(!0),f($,{key:0},I(t.data,(s,E)=>(p(),f("div",{key:E},[d("div",$e,[d("div",null,[d("span",null,c(o(l)("orderNo"))+"："+c(s.order_no),1),d("span",Ie,c(o(l)("createTime"))+"："+c(s.create_time),1),s.pay?(p(),f("span",Oe,c(o(l)("payType"))+"："+c(s.pay.type_name),1)):w("",!0)]),d("div",null,[e(v,{type:"primary",link:"",onClick:i=>K(s)},{default:n(()=>[k(c(o(l)("info")),1)]),_:2},1032,["onClick"]),e(v,{type:"primary",link:"",onClick:i=>W(s)},{default:n(()=>[k(c(o(l)("notes")),1)]),_:2},1032,["onClick"])])]),e(Y,{data:s.order_gift_card,size:"large","show-header":!1,ref_for:!0,ref_key:"multipleTable",ref:D,onSelect:A},{default:n(()=>[e(m,{type:"selection",width:"40",selectable:L}),e(m,{"min-width":"200"},{default:n(({row:i})=>[d("div",je,[d("div",qe,[i.card_cover?(p(),f("img",{key:0,class:"w-[50px] h-[50px]",src:o(de)(i.card_cover),alt:""},null,8,Ae)):(p(),f("img",Le))]),d("div",He,[e(ee,{class:"box-item",effect:"light",placement:"top"},{content:n(()=>[d("div",Ge,c(i.body),1)]),default:n(()=>[d("p",Ke,c(i.body),1)]),_:2},1024)])])]),_:1}),e(m,{"min-width":"120"},{default:n(({row:i})=>[d("div",We,[d("span",Je,"￥"+c(i.card_price),1),d("span",Qe,c(i.num)+c(o(l)("piece")),1)])]),_:1}),e(m,{"min-width":"120"},{default:n(({row:i})=>[d("span",Xe,c(i.card_right_type_name),1)]),_:1}),e(m,{"min-width":"120"},{default:n(({row:i})=>[d("span",Ze,"￥"+c(i.order_money),1)]),_:1}),e(m,{"min-width":"120"},{default:n(({row:i})=>[d("div",et,[d("span",{class:"text-[12px] text-primary cursor-pointer",onClick:oe=>J(i.member.member_id)},c(i.member.nickname),9,tt)])]),_:1}),e(m,{"min-width":"100"},{default:n(({row:i})=>[d("span",at,c(i.status_name),1)]),_:1}),e(m,{"min-width":"120"},{default:n(({row:i})=>[i.pay_time!=0?(p(),f("span",lt,c(i.pay_time),1)):w("",!0)]),_:1}),e(m,{align:"right","min-width":"120"},{default:n(({row:i})=>[i.status==1?(p(),S(v,{key:0,type:"primary",link:"",onClick:oe=>Q(i)},{default:n(()=>[k(c(o(l)("orderClose")),1)]),_:2},1032,["onClick"])):w("",!0)]),_:1})]),_:2},1032,["data"]),s.shop_remark?(p(),f("div",ot,[d("span",st,c(o(l)("notes"))+"：",1),d("span",null,c(s.shop_remark),1)])):w("",!0)]))),128)):(p(),S(te,{key:1,"image-size":1,description:o(l)("emptyData")},null,8,["description"]))]))])),[[le,t.loading]]),d("div",rt,[e(ae,{"current-page":t.page,"onUpdate:current-page":a[9]||(a[9]=s=>t.page=s),"page-size":t.limit,"onUpdate:page-size":a[10]||(a[10]=s=>t.limit=s),layout:"total, sizes, prev, pager, next, jumper",total:t.total,onSizeChange:a[11]||(a[11]=s=>h()),onCurrentChange:h},null,8,["current-page","page-size","total"])])])]),_:1}),e(Pe,{ref_key:"orderNotesDialog",ref:P,onComplete:h},null,512)])}}});const Ut=Be(nt,[["__scopeId","data-v-4572e40f"]]);export{Ut as default};
