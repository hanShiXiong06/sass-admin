import{d as re,y as de,r as _,m as ne,s as t,R as ue,h as m,c as b,e as o,w as s,a as r,t as d,u as i,F as A,i as v,v as w,C as S,bU as pe,T as me,B as ce,aI as _e,U as R,aW as ve,aS as ge,L as fe,at as ye,au as he,bR as ke,K as xe,E as be,a7 as we,ac as Se,J as Ve,ad as Te,av as Pe,M as Ee,Y as Le,p as Ie,g as Ue}from"./index-0e396751.js";/* empty css                   *//* empty css                *//* empty css                    *//* empty css                 */import"./el-tooltip-4ed993c7.js";/* empty css                  *//* empty css                     *//* empty css                 *//* empty css                        *//* empty css                        *//* empty css               */import{_ as De}from"./index.vue_vue_type_style_index_0_lang-879dde6f.js";import Ce from"./index-11d71036.js";/* empty css                *//* empty css                  *//* empty css                 *//* empty css                       *//* empty css                       *//* empty css                 */import"./el-form-item-4ed993c7.js";/* empty css                  *//* empty css                 */import{_ as G}from"./goods_default-995568ac.js";import{a1 as Ne,a2 as Re}from"./marketing-c0187315.js";import $e from"./goods-select-popup-31c232c1.js";import{_ as Oe}from"./_plugin-vue_export-helper-c27b6911.js";/* empty css                  *//* empty css                   */import"./diy-e7cda029.js";import"./index.vue_vue_type_style_index_0_lang-d82568af.js";import"./attachment-c52133c7.js";import"./index.vue_vue_type_script_setup_true_lang-34f8a01a.js";/* empty css                  *//* empty css                  *//* empty css                      *//* empty css               *//* empty css               *//* empty css                  *//* empty css                    *//* empty css                    */import"./el-dropdown-item-4ed993c7.js";import"./index.vue_vue_type_script_setup_true_lang-077a27b1.js";/* empty css                   */import"./index.vue_vue_type_script_setup_true_lang-5014406f.js";import"./sortable.esm-be94e56d.js";/* empty css                          */import"./goods-995cb067.js";const P=E=>(Ie("data-v-5a6ec09d"),E=E(),Ue(),E),Fe={class:"flex justify-between items-center mb-[10px]"},Me={class:"text-page-title"},Ye=P(()=>r("p",{class:"mb-[5px]"},"* 新人专享活动旨在通过专属优惠提升新老客户的转化率。达到参与门槛的用户可以享受特定商品的限时新人价优惠。",-1)),Be=P(()=>r("p",{class:"mb-[5px]"},"* 每位用户限购1件新人专享商品，超出1件的部分将按正常价购买。",-1)),qe=P(()=>r("p",{class:"mb-[5px]"},"* 订单支付成功后，将视为用户已参与过新人专享活动。",-1)),Ae=P(()=>r("p",{class:"mb-[5px]"},"* 若订单中的单个商品发生退款，用户将无法重新参与新人专享活动，只有当整个订单全部退货后，用户方可重新参与该活动。",-1)),Ge={class:"panel-title !text-sm pl-[15px]"},je={class:"date-picker mr-[5px]"},He={key:0},ze={key:1},Je={class:"flex items-center mx-[5px]"},Ke={class:"form-tip"},We={class:"flex items-center px-[5px] w-[200px] date-picker"},Qe={class:"form-tip"},Xe={class:"flex"},Ze={class:"panel-title !text-sm pl-[15px]"},et={class:"panel-title !text-sm pl-[15px]"},tt={class:"flex items-center cursor-pointer"},at={class:"min-w-[60px] h-[60px] flex items-center justify-center"},lt=P(()=>r("div",{class:"image-slot"},[r("img",{class:"w-[60px] h-[60px]",src:G})],-1)),ot={key:1,class:"w-[70px] h-[60px]",src:G,fit:"contain"},it={class:"ml-2"},st=["title"],rt={class:"text-primary text-[12px]"},dt={class:"flex items-center mb-[15px] mt-[10px] pl-[14px]"},nt={class:"fixed-footer-wrap"},ut={class:"fixed-footer h-[48px]"},pt=re({__name:"config",setup(E){const j=de().meta.title,$=_(!0),e=_({active_status:"active",banner_list:[{imageUrl:"",toLink:{name:""}}],validity_type:"day",validity_day:7,validity_time:"",participation_way:"never_order",appoint_time:"",goodsSkuIds:[],goodsSkuList:[],goods_data:"",limit_num:1,active_desc:""}),O={required:/[\S]+/,number:/^\d{0,10}$/,digit:/^\d{0,10}(.?\d{0,2})$/,special:/^\d{0,10}(.?\d{0,3})$/},H=ne(()=>({appoint_time:[{required:!0,message:t("appointTimePlaceholder"),trigger:"change"}],validity_day:[{required:!0,validator:(n,a,u)=>{a?parseInt(a)<=0?u(t("validityDayTips")):u():u(t("validityDayPlaceholder"))},trigger:"blur"}],validity_time:[{required:!0,validator:(n,a,u)=>{a?e.value.participation_way!="never_order"?e.value.appoint_time?new Date(a).getTime()<=new Date(e.value.appoint_time).getTime()?u(t("validityTimePlaceholderThree")):u():u(t("validityTimePlaceholderTwo")):u():u(t("validityTimePlaceholder"))},trigger:"change"}],goodsSkuIds:[{required:!0,message:t("goodsSkuIdsPlaceholder"),trigger:"blur"}],active_desc:[{required:!0,message:t("activeDescPlaceholder"),trigger:"blur"}]})),F=_();_();const z=n=>{let a=[];for(let u in n){let c=n[u],p={goods_id:c.goods_id,sku_id:c.sku_id,goods_type_name:c.goods_type_name,price:c.price,sku_image:c.sku_image,goods_name:c.goods_name,sku_name:c.sku_name,stock:c.stock,newcomer_price:""};e.value.goodsSkuList.length&&e.value.goodsSkuList.forEach(f=>{f.sku_id==p.sku_id&&(p=Object.assign(p,f))}),a.push(_e(p))}e.value.goodsSkuList=a},L=_(),I=_(!1),J=n=>{I.value=!1,M.value.toggleAllSelection()},M=_(),k=_([]),K=n=>{k.value=n,L.value=!1,k.value.length>0&&k.value.length<e.value.goodsSkuList.length?I.value=!0:I.value=!1,k.value.length==e.value.goodsSkuList.length&&(L.value=!0)},g=_(null),W=()=>{if(!k.value.length){R({type:"warning",message:`${t("batchEmptySelectedGoodsTips")}`});return}if(!g.value)R({type:"warning",message:`${t("newcomerPricePlaceholder")}`});else if(isNaN(g.value)||!O.digit.test(g.value)){R({type:"warning",message:`${t("newcomerPriceTips")}`});return}else if(parseFloat(g.value)<0){R({type:"warning",message:`${t("newcomerPriceTipsOne")}`});return}e.value.goodsSkuList.forEach(n=>{k.value.some(a=>a.sku_id==n.sku_id)&&(n.newcomer_price=g.value)})},Q=(n,a)=>{e.value.goodsSkuList.splice(a,1),e.value.goodsSkuIds.splice(e.value.goodsSkuIds.indexOf(n.sku_id),1)},Y=()=>{Ne().then(n=>{Object.keys(e.value).forEach(a=>{n.data[a]&&(e.value[a]=n.data[a])}),e.value.goodsSkuIds=[],e.value.banner_list.length==0&&e.value.banner_list.push({imageUrl:"",toLink:{name:""}}),e.value.goodsSkuList=n.data.active_goods.map(a=>(e.value.goodsSkuIds.push(a.sku_id),a.newcomer_price=a.active_goods_value.newcomer_price,a)),$.value=!1}).catch(()=>{$.value=!1})};Y();const U=_(!1),X=async()=>{var n;U.value||await((n=F.value)==null?void 0:n.validate(async a=>{a&&(U.value=!0,e.value.goods_data=JSON.stringify(e.value.goodsSkuList.map(u=>({goods_id:u.goods_id,sku_id:u.sku_id,price:u.price,newcomer_price:u.newcomer_price}))),Re(e.value).then(()=>{g.value=null,Y(),U.value=!1}).catch(()=>{U.value=!1}))}))},Z=()=>{e.value.active_desc=`1、新人价是面向${e.value.participation_way==="never_order"?t("neverOrder"):e.value.participation_way==="assign_time_order"?t("assignTimeOrder"):t("assignTimeRegister")}提供的一种专属优惠价格，同一账号仅限享受一次优惠；
2、仅限${e.value.participation_way==="never_order"?t("neverOrder"):e.value.participation_way==="assign_time_order"?e.value.appoint_time+"之前未下过单的会员":e.value.appoint_time+"之后注册的会员"}可参与；
3、活动有效期：${e.value.validity_type=="day"?"参与活动后"+e.value.validity_day+"天内":e.value.validity_time+"后截止"}。`};return(n,a)=>{const u=ve,c=ge,p=fe,f=ye,B=he,q=ke,D=xe,C=be,N=we,ee=Ce,te=De,V=Se,ae=Ve,le=Te,oe=Pe,ie=Ee,se=Le;return ue((m(),b("div",null,[o(N,{class:"box-card !border-none main-container",shadow:"never"},{default:s(()=>[r("div",Fe,[r("span",Me,d(i(j)),1)]),o(u,{type:"warning",closable:!1,class:"!mb-[0px]"},{default:s(()=>[Ye,Be,qe,Ae]),_:1}),o(ie,{model:e.value,"label-width":"120px",ref_key:"formRef",ref:F,rules:i(H),class:"page-form"},{default:s(()=>[o(N,{class:"box-card !border-none",shadow:"never"},{default:s(()=>[r("h3",Ge,d(i(t)("basicInfoTab")),1),o(p,{label:i(t)("activeStatus")},{default:s(()=>[o(c,{modelValue:e.value.active_status,"onUpdate:modelValue":a[0]||(a[0]=l=>e.value.active_status=l),"active-value":"active","inactive-value":"close"},null,8,["modelValue"])]),_:1},8,["label"]),e.value.active_status==="active"?(m(),b(A,{key:0},[o(p,{label:i(t)("participationWay")},{default:s(()=>[o(B,{modelValue:e.value.participation_way,"onUpdate:modelValue":a[1]||(a[1]=l=>e.value.participation_way=l)},{default:s(()=>[o(f,{label:"never_order"},{default:s(()=>[v(d(i(t)("neverOrder")),1)]),_:1}),o(f,{label:"assign_time_order"},{default:s(()=>[v(d(i(t)("assignTimeOrder")),1)]),_:1}),o(f,{label:"assign_time_register"},{default:s(()=>[v(d(i(t)("assignTimeRegister")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["label"]),e.value.participation_way!="never_order"?(m(),w(p,{key:0,prop:"appoint_time"},{default:s(()=>[r("div",je,[o(q,{class:"!w-[200px]",modelValue:e.value.appoint_time,"onUpdate:modelValue":a[2]||(a[2]=l=>e.value.appoint_time=l),"value-format":"YYYY-MM-DD HH:mm:ss",type:"datetime"},null,8,["modelValue"])]),e.value.participation_way==="assign_time_order"?(m(),b("span",He,"之前未下过单的会员")):(m(),b("span",ze,"之后注册的会员"))]),_:1})):S("",!0),o(p,{label:i(t)("validityType")},{default:s(()=>[o(B,{modelValue:e.value.validity_type,"onUpdate:modelValue":a[3]||(a[3]=l=>e.value.validity_type=l)},{default:s(()=>[o(f,{label:"day"},{default:s(()=>[v(d(i(t)("validityDay")),1)]),_:1}),o(f,{label:"date"},{default:s(()=>[v(d(i(t)("validityTime")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["label"]),e.value.validity_type==="day"?(m(),w(p,{key:1,prop:"validity_day"},{default:s(()=>[r("span",null,d(i(t)("validityDayTipsLeft")),1),r("div",Je,[o(D,{modelValue:e.value.validity_day,"onUpdate:modelValue":a[4]||(a[4]=l=>e.value.validity_day=l),modelModifiers:{trim:!0},onKeyup:a[5]||(a[5]=l=>i(pe)(l)),onBlur:a[6]||(a[6]=()=>{e.value.validity_day>0&&(e.value.validity_day=parseInt(e.value.validity_day))}),clearable:"",class:"input-width-short",maxlength:"3"},null,8,["modelValue"])]),r("span",null,d(i(t)("validityDayTipsRight")),1),r("div",Ke,d(i(t)("validityTimeTipsTwo")),1)]),_:1})):S("",!0),e.value.validity_type==="date"?(m(),w(p,{key:2,prop:"validity_time"},{default:s(()=>[r("span",null,d(i(t)("validityTimeTips")),1),r("div",We,[o(q,{modelValue:e.value.validity_time,"onUpdate:modelValue":a[7]||(a[7]=l=>e.value.validity_time=l),"value-format":"YYYY-MM-DD HH:mm:ss",type:"datetime"},null,8,["modelValue"])]),r("div",Qe,d(i(t)("validityTimeTipsTwo")),1)]),_:1})):S("",!0),o(p,{label:i(t)("activeDesc")},{default:s(()=>[r("div",Xe,[o(D,{modelValue:e.value.active_desc,"onUpdate:modelValue":a[8]||(a[8]=l=>e.value.active_desc=l),placeholder:i(t)("activeDescPlaceholder"),type:"textarea",maxlength:"500","show-word-limit":"",rows:"5",class:"!w-[400px]",clearable:""},null,8,["modelValue","placeholder"]),o(C,{class:"ml-[20px]",type:"primary",onClick:a[9]||(a[9]=l=>Z()),plain:""},{default:s(()=>[v(d(i(t)("useDefaultActiveDesc")),1)]),_:1})])]),_:1},8,["label"])],64)):S("",!0)]),_:1}),e.value.active_status==="active"?(m(),w(N,{key:0,class:"box-card !border-none",shadow:"never"},{default:s(()=>[r("h3",Ze,d(i(t)("bannerList")),1),(m(!0),b(A,null,me(e.value.banner_list,(l,T)=>(m(),b("div",{key:T},[o(p,{label:i(t)("image"),prop:`banner_list.${T}.imageUrl`,rules:[{required:!0,trigger:"change",validator:(y,x,h)=>{x||h(i(t)("imagePlaceholder")),h()}}]},{default:s(()=>[o(ee,{modelValue:l.imageUrl,"onUpdate:modelValue":y=>l.imageUrl=y,limit:1},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["label","prop","rules"]),o(p,{label:i(t)("toLink")},{default:s(()=>[o(te,{modelValue:l.toLink,"onUpdate:modelValue":y=>l.toLink=y},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["label"])]))),128))]),_:1})):S("",!0),e.value.active_status==="active"?(m(),w(N,{key:1,class:"box-card !border-none",shadow:"never"},{default:s(()=>[r("h3",et,d(i(t)("activityGoods")),1),o(p,{label:i(t)("selectGoods"),prop:"goodsSkuIds"},{default:s(()=>[o($e,{ref:"goodsSelectPopupRef",modelValue:e.value.goodsSkuIds,"onUpdate:modelValue":a[10]||(a[10]=l=>e.value.goodsSkuIds=l),onGoodsSelect:z,mode:"sku",min:1,max:99},null,8,["modelValue"])]),_:1},8,["label"]),e.value.goodsSkuList&&e.value.goodsSkuList.length?(m(),w(p,{key:0},{default:s(()=>[r("div",null,[o(le,{class:"sku_list !w-[1400px]",ref_key:"goods_listTableRef",ref:M,data:e.value.goodsSkuList,size:"large","max-height":"480",onSelectionChange:K},{default:s(()=>[o(V,{type:"selection",width:"55"}),o(V,{label:i(t)("goodsSelectPopupGoodsInfo"),"min-width":"300"},{default:s(({row:l})=>[r("div",tt,[r("div",at,[l.sku_image?(m(),w(ae,{key:0,class:"w-[60px] h-[60px]",src:i(ce)(l.sku_image),fit:"contain"},{error:s(()=>[lt]),_:2},1032,["src"])):(m(),b("img",ot))]),r("div",it,[r("span",{title:l.sku_name,class:"multi-hidden"},d(l.sku_name?l.goods_name+" "+l.sku_name:l.goods_name),9,st),r("span",rt,d(l.goods_type_name),1)])])]),_:1},8,["label"]),o(V,{label:i(t)("oldPrice"),"min-width":"120"},{default:s(({row:l})=>[r("div",null,"￥"+d(l.price),1)]),_:1},8,["label"]),o(V,{label:i(t)("newcomerPrice"),"min-width":"120"},{default:s(({row:l,$index:T})=>[o(p,{prop:"goodsSkuList."+T+".newcomer_price",rules:[{trigger:"blur",validator:(y,x,h)=>{x?isNaN(x)||!O.digit.test(x)?h(i(t)("newcomerPriceTips")):parseFloat(x)<0&&h(i(t)("newcomerPriceTipsOne")):h(i(t)("newcomerPricePlaceholder")),parseFloat(x)>parseFloat(l.price)?h(i(t)("newcomerPriceTipsTwo")):h()}}],class:"sku-form-item-wrap"},{default:s(()=>[o(D,{modelValue:l.newcomer_price,"onUpdate:modelValue":y=>l.newcomer_price=y,modelModifiers:{trim:!0},clearable:"",placeholder:"0",maxlength:"8"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["prop","rules"])]),_:1},8,["label"]),o(V,{prop:"stock",label:i(t)("goodsSelectPopupStock"),"min-width":"120",align:"right"},null,8,["label"]),o(V,{label:i(t)("operation"),align:"right","min-width":"160"},{default:s(({row:l,$index:T})=>[o(C,{type:"primary",link:"",onClick:y=>Q(l,T)},{default:s(()=>[v(d(i(t)("delete")),1)]),_:2},1032,["onClick"])]),_:1},8,["label"])]),_:1},8,["data"]),r("div",dt,[o(oe,{modelValue:L.value,"onUpdate:modelValue":a[11]||(a[11]=l=>L.value=l),size:"large",class:"!mr-[15px]",onChange:J,indeterminate:I.value},{default:s(()=>[r("span",null,"已选 "+d(k.value.length)+" 项",1)]),_:1},8,["modelValue","indeterminate"]),r("label",null,d(i(t)("batchOperation")),1),o(D,{modelValue:g.value,"onUpdate:modelValue":a[12]||(a[12]=l=>g.value=l),modelModifiers:{trim:!0},clearable:"",class:"!w-[130px] ml-[10px]",placeholder:i(t)("newcomerPricePlaceholder"),maxlength:"8"},null,8,["modelValue","placeholder"]),o(C,{class:"ml-[10px]",type:"primary",onClick:W},{default:s(()=>[v(d(i(t)("confirm")),1)]),_:1})])])]),_:1})):S("",!0)]),_:1})):S("",!0)]),_:1},8,["model","rules"])]),_:1}),r("div",nt,[r("div",ut,[o(C,{type:"primary",onClick:X},{default:s(()=>[v(d(i(t)("save")),1)]),_:1})])])])),[[se,$.value]])}}});const ra=Oe(pt,[["__scopeId","data-v-5a6ec09d"]]);export{ra as default};
