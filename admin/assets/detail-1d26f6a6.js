import{d as le,x as se,f as oe,r as E,n as T,h as d,c as m,e as a,w as t,u as e,R as j,s as v,F as P,a as i,t as n,q as l,B as c,A as ne,T as I,i as N,a5 as ie,aR as de,a7 as re,L as ce,aN as ue,aO as _e,bQ as pe,ad as me,ae as ve,K as he,ac as fe,aD as be,E as ye,M as ge,ay as xe,az as we,W as ke,ab as Ce,Y as Ee}from"./index-904cb7a2.js";/* empty css                   *//* empty css                 *//* empty css                      *//* empty css                 *//* empty css               *//* empty css                  *//* empty css                  *//* empty css                     *//* empty css                  *//* empty css                    *//* empty css                *//* empty css                  *//* empty css                 *//* empty css                    */import"./el-tooltip-4ed993c7.js";/* empty css                        *//* empty css                     *//* empty css               *//* empty css               */import"./el-form-item-4ed993c7.js";/* empty css                *//* empty css                   *//* empty css                       */import{a as Te}from"./giftcard-3fdffc2f.js";import{b as Pe,c as Ne,a as Be,d as Ve}from"./card-6cee3277.js";import{_ as De}from"./_plugin-vue_export-helper-c27b6911.js";const Le={class:"main-container"},Se={class:"panel-title"},Fe={class:"input-width"},Re={class:"input-width"},ze={class:"input-width"},Oe={class:"input-width"},Ue={key:0,class:"input-width"},$e={key:1,class:"input-width"},Ae={key:2,class:"input-width"},Ge={class:"input-width"},je={class:"input-width"},Ie={key:0,class:"input-width"},Me={key:1,class:"input-width"},qe={class:"input-width"},We={class:"panel-title"},He={class:"text-[14px]"},Ke={class:"text-[14px]"},Qe={class:"text-[14px]"},Ye={class:"text-[14px]"},Je={class:"text-[14px]"},Xe={class:"text-[14px]"},Ze={class:"text-[14px]"},et={class:"text-[14px]"},tt={class:"text-[14px]"},at={class:"panel-title"},lt={key:0,class:"text-[14px]"},st={key:1,class:"text-[14px]"},ot={key:1,class:"text-[14px]"},nt={class:"panel-title"},it={class:"text-[14px]"},dt={class:"text-[14px]"},rt={class:"text-[14px]"},ct={class:"text-[14px]"},ut={class:"panel-title"},_t={class:"flex"},pt={class:"flex items-center shrink-0"},mt=["src"],vt={class:"flex flex-col"},ht={class:"multi-hidden text-[14px]"},ft={class:"text-[12px] text-[#999]"},bt={class:"text-[14px]"},yt={class:"text-[14px]"},gt={class:"text-[14px]"},xt={class:"text-[14px]"},wt={class:"panel-title"},kt={class:"mt-[10px]"},Ct=["onClick"],Et={key:1},Tt=["onClick"],Pt={key:1},Nt={key:0},Bt={key:1},Vt={key:0},Dt={key:1},Lt={class:"mt-[16px] flex justify-end"},St=le({__name:"detail",setup(Ft){const D=se(),B=oe(),M=D.meta.title,L=E(D.query.giftcard_id||0),k=E(!0),o=E(null),S=T({}),F=T({}),R=T({}),q=()=>{Pe().then(p=>{const r=p.data;r&&Object.assign(S,r)}),Ne({}).then(p=>{const r=p.data;r&&Object.assign(F,r)}),z()},z=()=>{Te(L.value).then(p=>{p.data&&(o.value=p.data,k.value=!1,Object.assign(R,F[o.value.type][o.value.card_right_type]))}).catch(()=>{k.value=!1})};q();let u=T({page:1,limit:10,total:0,loading:!0,data:[],searchParam:{card_no:"",giftcard_id:L.value,source:"",status:""}});const O=E(),W=p=>{p&&(p.resetFields(),x())},x=(p=1)=>{u.loading=!0,u.page=p,Be({page:u.page,limit:u.limit,...u.searchParam}).then(r=>{u.loading=!1,u.data=r.data.data,u.total=r.data.total}).catch(()=>{u.loading=!1})};x();const H=p=>{ie.confirm(l("cardDeleteTips"),l("warning"),{confirmButtonText:l("confirm"),cancelButtonText:l("cancel"),type:"warning"}).then(()=>{Ve(p).then(()=>{x(),z()}).catch(()=>{})})},K=(p,r)=>{u.searchParam.status=p.props.name,x()},U=p=>{const r=B.resolve({path:"/member/detail",query:{id:p}});window.open(r.href)},Q=p=>{const r=B.resolve({path:"/shop_giftcard/giftcard/card_detail",query:{card_id:p.card_id}});window.open(r.href)};return(p,r)=>{const Y=de,y=re,f=ce,h=ue,w=_e,b=pe,_=me,V=ve,J=he,X=fe,Z=be,C=ye,$=ge,A=xe,ee=we,te=ke,ae=Ce,G=Ee;return d(),m("div",Le,[a(y,{class:"card !border-none mb-[15px]",shadow:"never"},{default:t(()=>[a(Y,{content:e(M),icon:p.ArrowLeft,onBack:r[0]||(r[0]=s=>e(B).push({path:"/shop_giftcard/giftcard/list"}))},null,8,["content","icon"])]),_:1}),j((d(),v($,{model:o.value,"label-width":"100px",ref:"formRef",class:"page-form","label-position":"left"},{default:t(()=>[o.value?(d(),m(P,{key:0},[a(y,{class:"box-card !border-none relative",shadow:"never"},{default:t(()=>[i("h3",Se,n(e(l)("giftcardInfoTitle")),1),a(w,{class:"row-bg px-[30px]",gutter:20},{default:t(()=>[a(h,{span:8},{default:t(()=>[a(f,{label:e(l)("cardType")},{default:t(()=>[i("div",Fe,n(o.value.type_name),1)]),_:1},8,["label"]),a(f,{label:e(l)("cardName")},{default:t(()=>[i("div",Re,n(o.value.card_name),1)]),_:1},8,["label"]),a(f,{label:e(l)("cardCategory")},{default:t(()=>[i("div",ze,n(o.value.category.category_name),1)]),_:1},8,["label"])]),_:1}),a(h,{span:8},{default:t(()=>[a(f,{label:e(l)("cardRightType")},{default:t(()=>[i("div",Oe,n(o.value.card_right_type_name),1)]),_:1},8,["label"]),a(f,{label:e(l)("validityType")},{default:t(()=>[o.value.validity_type=="forever"?(d(),m("div",Ue,n(e(l)("validityForever")),1)):c("",!0),o.value.validity_type=="day"?(d(),m("div",$e,"购买后"+n(o.value.validity_day)+"天有效",1)):c("",!0),o.value.validity_type=="date"?(d(),m("div",Ae,"使用截止时间为："+n(o.value.validity_time||""),1)):c("",!0)]),_:1},8,["label"]),a(f,{label:e(l)("status")},{default:t(()=>[i("div",Ge,n(o.value.status==1?e(l)("statusOn"):e(l)("statusOff")),1)]),_:1},8,["label"])]),_:1}),a(h,{span:8},{default:t(()=>[a(f,{label:e(l)("isGive")},{default:t(()=>[i("div",je,n(o.value.is_give==1?"是":"否"),1)]),_:1},8,["label"]),o.value.card_right_type=="goods"?(d(),v(f,{key:0,label:e(l)("deliveryWay")},{default:t(()=>[o.value.delivery_way=="all"?(d(),m("div",Ie,n(e(l)("deliveryWayByAll")),1)):o.value.delivery_way=="batch"?(d(),m("div",Me,n(e(l)("deliveryWayByBatch")),1)):c("",!0)]),_:1},8,["label"])):c("",!0),o.value.card_right_type=="goods"?(d(),v(f,{key:1,label:e(l)("cardPrice")},{default:t(()=>[i("div",qe,"￥"+n(o.value.card_price),1)]),_:1},8,["label"])):c("",!0)]),_:1})]),_:1})]),_:1}),a(y,{class:"box-card !border-none relative",shadow:"never"},{default:t(()=>[i("h3",We,n(e(l)("dataStatisticsTitle")),1),o.value.type=="virtual"?(d(),v(w,{key:0,class:"row-bg px-[30px]",gutter:20},{default:t(()=>[a(h,{span:6},{default:t(()=>[a(b,{value:o.value.sale_count},{title:t(()=>[i("span",He,n(e(l)("saleCount")),1)]),_:1},8,["value"])]),_:1}),a(h,{span:6},{default:t(()=>[a(b,{value:o.value.use_count},{title:t(()=>[i("span",Ke,n(e(l)("useCount")),1)]),_:1},8,["value"])]),_:1}),a(h,{span:6},{default:t(()=>[a(b,{value:o.value.sale_count-o.value.use_count-o.value.invalid_count},{title:t(()=>[i("span",Qe,n(e(l)("notUseCount")),1)]),_:1},8,["value"])]),_:1}),a(h,{span:6},{default:t(()=>[a(b,{value:o.value.invalid_count},{title:t(()=>[i("span",Ye,n(e(l)("invalidCount")),1)]),_:1},8,["value"])]),_:1})]),_:1})):c("",!0),o.value.type=="real"?(d(),v(w,{key:1,class:"row-bg px-[30px]",gutter:0},{default:t(()=>[a(h,{span:5},{default:t(()=>[a(b,{value:o.value.make_card_count},{title:t(()=>[i("span",Je,n(e(l)("makeCardCount")),1)]),_:1},8,["value"])]),_:1}),a(h,{span:5},{default:t(()=>[a(b,{value:o.value.activate_count},{title:t(()=>[i("span",Xe,n(e(l)("activateCount")),1)]),_:1},8,["value"])]),_:1}),a(h,{span:5},{default:t(()=>[a(b,{value:o.value.use_count},{title:t(()=>[i("span",Ze,n(e(l)("useCount")),1)]),_:1},8,["value"])]),_:1}),a(h,{span:5},{default:t(()=>[a(b,{value:o.value.activate_count-o.value.use_count-o.value.invalid_count},{title:t(()=>[i("span",et,n(e(l)("notUseCount")),1)]),_:1},8,["value"])]),_:1}),a(h,{span:5},{default:t(()=>[a(b,{value:o.value.invalid_count},{title:t(()=>[i("span",tt,n(e(l)("invalidCount")),1)]),_:1},8,["value"])]),_:1})]),_:1})):c("",!0)]),_:1}),a(y,{class:"box-card !border-none relative",shadow:"never"},{default:t(()=>[i("h3",at,n(e(l)("useRuleTitle")),1),a(w,{class:"row-bg px-[30px]",gutter:20},{default:t(()=>[a(h,{span:8},{default:t(()=>[o.value.card_right_type=="goods"?(d(),m(P,{key:0},[o.value.card_goods_type=="all"?(d(),m("p",lt,"持卡人兑换时，可从按照商品列表中商品数量进行兑换")):c("",!0),o.value.card_goods_type=="diy"?(d(),m("p",st,"持卡人兑换时，可从以下商品列表中任选"+n(o.value.card_goods_count)+"件",1)):c("",!0)],64)):c("",!0),o.value.card_right_type=="balance"?(d(),m("p",ot,"持卡人兑换时，将储值卡的储值余额充值到账户余额中")):c("",!0)]),_:1})]),_:1})]),_:1}),o.value.card_right_type=="balance"?(d(),v(y,{key:0,class:"box-card !border-none relative",shadow:"never"},{default:t(()=>[i("h3",nt,n(e(l)("balanceTitle")),1),a(w,{class:"row-bg px-[30px]",gutter:20},{default:t(()=>[a(h,{span:24},{default:t(()=>[a(V,{data:o.value.balance_json,size:"large","max-height":"400",border:"",style:{"max-width":"850px"}},{default:t(()=>[a(_,{prop:"balance",label:e(l)("balanceValue"),"min-width":"120"},{default:t(({row:s})=>[i("div",null,"￥"+n(s.balance),1)]),_:1},8,["label"]),a(_,{prop:"price",label:e(l)("balancePrice"),"min-width":"120",align:"center"},{default:t(({row:s})=>[i("div",null,"￥"+n(s.price),1)]),_:1},8,["label"]),o.value.type=="real"?(d(),v(_,{key:0,label:e(l)("toActivateCount"),"min-width":"120",align:"center"},{default:t(({row:s})=>[i("span",it,n(s.to_activate_num),1)]),_:1},8,["label"])):c("",!0),a(_,{label:e(l)("notUseCount"),"min-width":"120",align:"center"},{default:t(({row:s})=>[i("span",dt,n(s.can_use_num),1)]),_:1},8,["label"]),a(_,{label:e(l)("useCount"),"min-width":"120",align:"center"},{default:t(({row:s})=>[i("span",rt,n(s.use_num),1)]),_:1},8,["label"]),a(_,{label:e(l)("invalidCount"),"min-width":"120",align:"center"},{default:t(({row:s})=>[i("span",ct,n(s.invalid_num),1)]),_:1},8,["label"])]),_:1},8,["data"])]),_:1})]),_:1})]),_:1})):c("",!0),o.value.card_right_type=="goods"?(d(),v(y,{key:1,class:"box-card !border-none relative",shadow:"never"},{default:t(()=>[i("h3",ut,n(e(l)("goodsSkuListTitle")),1),a(V,{data:o.value.goods_sku_list,size:"large",border:"","max-height":"400",style:{"max-width":"850px"}},{default:t(()=>[a(_,{label:e(l)("goodsName"),align:"left",width:"350"},{default:t(({row:s})=>[i("div",_t,[i("div",pt,[i("img",{class:"w-[50px] h-[50px] mr-[10px]",src:e(ne)(s.sku.sku_image)},null,8,mt)]),i("div",vt,[i("p",ht,n(s.goods.goods_name),1),i("span",ft,n(s.sku.sku_name),1)])])]),_:1},8,["label"]),a(_,{label:e(l)("price"),"min-width":"120",align:"center"},{default:t(({row:s})=>[i("span",bt,"￥"+n(s.sku.price),1)]),_:1},8,["label"]),o.value.card_goods_type=="all"?(d(),v(_,{key:0,label:e(l)("canExchangeNum"),"min-width":"120",align:"center"},{default:t(({row:s})=>[i("span",yt,n(s.total_num),1)]),_:1},8,["label"])):c("",!0),a(_,{label:e(l)("hasExchangeNum"),"min-width":"120",align:"center"},{default:t(({row:s})=>[i("span",gt,n(s.use_num),1)]),_:1},8,["label"]),o.value.card_goods_type=="all"?(d(),v(_,{key:1,label:e(l)("notExchangeNum"),"min-width":"120",align:"center"},{default:t(({row:s})=>[i("span",xt,n(s.total_num-s.use_num),1)]),_:1},8,["label"])):c("",!0)]),_:1},8,["data"])]),_:1})):c("",!0),a(y,{class:"box-card !border-none relative",shadow:"never"},{default:t(()=>[i("h3",wt,n(e(l)("cardListTitle")),1),a($,{inline:!0,model:e(u).searchParam,ref_key:"searchFormRef",ref:O},{default:t(()=>[a(f,{label:e(l)("cardNo"),prop:"card_no"},{default:t(()=>[a(J,{modelValue:e(u).searchParam.card_no,"onUpdate:modelValue":r[1]||(r[1]=s=>e(u).searchParam.card_no=s),modelModifiers:{trim:!0},placeholder:e(l)("cardNoPlaceholder"),maxlength:"30"},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),a(f,{label:e(l)("cardSource"),prop:"source",class:"form-item-wrap"},{default:t(()=>[a(Z,{modelValue:e(u).searchParam.source,"onUpdate:modelValue":r[2]||(r[2]=s=>e(u).searchParam.source=s),placeholder:e(l)("cardSourcePlaceholder"),clearable:""},{default:t(()=>[(d(!0),m(P,null,I(S,(s,g)=>(d(),v(X,{key:g,label:s,value:g},null,8,["label","value"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"]),a(f,null,{default:t(()=>[a(C,{type:"primary",onClick:r[3]||(r[3]=s=>x())},{default:t(()=>[N(n(e(l)("search")),1)]),_:1}),a(C,{onClick:r[4]||(r[4]=s=>W(O.value))},{default:t(()=>[N(n(e(l)("reset")),1)]),_:1})]),_:1})]),_:1},8,["model"]),i("div",kt,[a(ee,{modelValue:e(u).searchParam.status,"onUpdate:modelValue":r[5]||(r[5]=s=>e(u).searchParam.status=s),onTabClick:K},{default:t(()=>[a(A,{label:e(l)("statusAll"),name:""},null,8,["label"]),(d(!0),m(P,null,I(R,(s,g)=>(d(),v(A,{label:s,name:g},null,8,["label","name"]))),256))]),_:1},8,["modelValue"]),j((d(),v(V,{data:e(u).data,size:"large"},{empty:t(()=>[i("span",null,n(e(u).loading?"":e(l)("emptyData")),1)]),default:t(()=>[a(_,{prop:"card_no",label:e(l)("cardNo"),"min-width":"120","show-overflow-tooltip":!0},null,8,["label"]),o.value.type=="real"?(d(),v(_,{key:0,prop:"card_key",label:e(l)("cardKey"),"min-width":"120","show-overflow-tooltip":!0},null,8,["label"])):c("",!0),o.value.card_right_type=="balance"?(d(),v(_,{key:1,prop:"balance",label:e(l)("cardBalance"),"min-width":"100","show-overflow-tooltip":!0},{default:t(({row:s})=>[i("span",null,"￥"+n(s.balance),1)]),_:1},8,["label"])):c("",!0),a(_,{prop:"source_name",label:e(l)("cardSource"),"min-width":"80","show-overflow-tooltip":!0},null,8,["label"]),a(_,{prop:"create_time",label:e(l)("createTime"),"min-width":"120","show-overflow-tooltip":!0},null,8,["label"]),o.value.type=="real"?(d(),v(_,{key:2,label:e(l)("activateMember"),"min-width":"120"},{default:t(({row:s})=>[s.member?(d(),m("span",{key:0,class:"text-primary cursor-pointer",onClick:g=>U(s.member.member_id)},n(s.member.nickname),9,Ct)):(d(),m("span",Et,"--"))]),_:1},8,["label"])):c("",!0),o.value.type=="virtual"?(d(),v(_,{key:3,label:e(l)("formMember"),"min-width":"120"},{default:t(({row:s})=>[s.member?(d(),m("span",{key:0,class:"text-primary cursor-pointer",onClick:g=>U(s.member.member_id)},n(s.member.nickname),9,Tt)):(d(),m("span",Pt,"--"))]),_:1},8,["label"])):c("",!0),a(_,{prop:"status_name",label:e(l)("status"),"min-width":"80","show-overflow-tooltip":!0},null,8,["label"]),o.value.type=="real"?(d(),v(_,{key:4,prop:"activate_time",label:e(l)("activateTime"),"min-width":"100","show-overflow-tooltip":!0},{default:t(({row:s})=>[s.activate_time?(d(),m("div",Nt,n(s.activate_time),1)):(d(),m("div",Bt,"--"))]),_:1},8,["label"])):c("",!0),a(_,{prop:"validity_time",label:e(l)("validityTime"),"min-width":"100","show-overflow-tooltip":!0},{default:t(({row:s})=>[s.validity_time?(d(),m("div",Vt,n(s.validity_time),1)):(d(),m("div",Dt,n(e(l)("validityForever")),1))]),_:1},8,["label"]),a(_,{prop:"total_num",label:e(l)("totalNum"),"min-width":"120","show-overflow-tooltip":!0},{default:t(({row:s})=>[i("span",null,n(s.use_num)+"/"+n(s.total_num),1)]),_:1},8,["label"]),a(_,{label:e(l)("operation"),fixed:"right","min-width":"80",align:"right"},{default:t(({row:s})=>[s.status!="to_activate"?(d(),v(C,{key:0,type:"primary",link:"",onClick:g=>Q(s)},{default:t(()=>[N(n(e(l)("cardDetailAction")),1)]),_:2},1032,["onClick"])):c("",!0),s.status=="to_activate"?(d(),v(C,{key:1,type:"primary",link:"",onClick:g=>H(s.card_id)},{default:t(()=>[N(n(e(l)("delete")),1)]),_:2},1032,["onClick"])):c("",!0)]),_:1},8,["label"])]),_:1},8,["data"])),[[G,e(u).loading]]),i("div",Lt,[a(te,{"current-page":e(u).page,"onUpdate:current-page":r[6]||(r[6]=s=>e(u).page=s),"page-size":e(u).limit,"onUpdate:page-size":r[7]||(r[7]=s=>e(u).limit=s),layout:"total, sizes, prev, pager, next, jumper",total:e(u).total,onSizeChange:r[8]||(r[8]=s=>x()),onCurrentChange:x},null,8,["current-page","page-size","total"])])])]),_:1})],64)):c("",!0),!k.value&&!o.value?(d(),v(y,{key:1,class:"box-card !border-none relative",shadow:"never"},{default:t(()=>[a(ae,{description:e(l)("cardInfoEmpty")},null,8,["description"])]),_:1})):c("",!0)]),_:1},8,["model"])),[[G,k.value]])])}}});const da=De(St,[["__scopeId","data-v-938f7e20"]]);export{da as default};