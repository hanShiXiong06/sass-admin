import{d as W,x as X,r as v,n as ee,l as oe,q as t,H as ae,h as i,c as m,e as l,w as s,u as r,a as u,F as S,T as N,v as te,t as c,B as f,Z as le,i as _,s as C,cb as L,aR as re,a7 as se,L as de,K as ne,aF as ie,E as ue,au as pe,av as me,bR as ce,M as _e,p as ye,g as fe}from"./index-904cb7a2.js";/* empty css                */import{_ as ge}from"./index.vue_vue_type_script_setup_true_lang-c45af5f5.js";/* empty css                       *//* empty css                 *//* empty css                     *//* empty css                  *//* empty css                  *//* empty css                       *//* empty css                 */import ve from"./index-e888fa8d.js";/* empty css                        */import"./el-form-item-4ed993c7.js";/* empty css                *//* empty css                   *//* empty css                       */import{a as be,b as Ve,c as he,e as we,d as xe}from"./vipcard-0c5838f8.js";import{_ as ke}from"./card-goods-select.vue_vue_type_script_setup_true_lang-4f6b80fc.js";import{_ as Ce}from"./_plugin-vue_export-helper-c27b6911.js";import"./index.vue_vue_type_style_index_0_lang-68b58aeb.js";/* empty css                  *//* empty css                   */import"./attachment-731ba4e8.js";/* empty css                   */import"./index.vue_vue_type_script_setup_true_lang-e98f54f2.js";/* empty css                        *//* empty css               *//* empty css                  *//* empty css                  *//* empty css                      *//* empty css                    */import"./el-tooltip-4ed993c7.js";/* empty css                 *//* empty css               *//* empty css               *//* empty css                    *//* empty css                    */import"./el-dropdown-item-4ed993c7.js";import"./index.vue_vue_type_script_setup_true_lang-a9b96fa2.js";/* empty css                   */import"./index.vue_vue_type_script_setup_true_lang-ee99396e.js";import"./sortable.esm-be94e56d.js";/* empty css                        *//* empty css                */const P=V=>(ye("data-v-af076335"),V=V(),fe(),V),Pe={class:"main-container"},De={class:"card-type"},Fe=["onClick"],Ue={key:0,class:"pay-table mt-3"},Ee={class:"flex items-center pay-table-head table-bg table-item-pd table-item-border justify-between table-bg"},Te=P(()=>u("span",{class:"text-base text-[#999] w-[150px]"},"项目名称",-1)),Ie={key:0,class:"text-base text-[#999] w-[110px] text-center"},Se=P(()=>u("span",{class:"text-base text-[#999] w-[80px] text-center"},"售价",-1)),Ne=P(()=>u("span",{class:"text-base text-[#999] w-[80px] text-center"},"操作",-1)),Re=["data-key"],qe={class:"table-item-flex w-[150px]"},Be={key:0,class:"table-item-flex w-[110px]"},$e={class:"table-item-flex w-[110px] justify-center"},je={class:"table-item-flex w-[80px] justify-center"},Me=["onClick"],Le={key:1,class:"flex items-center mt-2"},Ge=P(()=>u("span",{class:"text-[#666]"},"批量操作：",-1)),Ae={key:1,class:"flex items-center"},Ke={key:1,class:"w-[300px]"},Ye={class:"fixed-footer-wrap"},Oe={class:"fixed-footer"},Qe=W({__name:"edit",setup(V){const G=X(),h=parseInt(G.query.id),w=v(!1),R={goods_id:0,goods_name:"",price:"",goods_cover:"",goods_image:"",goods_content:"",buy_info:"",verify_validity_type:0,verify_validity:0,status:0,goods_arr:[],card_type:"",scribe_price:"",keywords:"",common_num:0,virtually_sale:""},e=ee({...R}),D=v(!0),F=v([]);(async()=>{const d=await(await be()).data;F.value=Object.values(d),e.card_type=F.value[0].type})();const A=d=>{e.verify_validity=""},U=v([]);(async()=>{const d=await(await Ve()).data;U.value=d,e.verify_validity_type=U.value[0].type})();const x=v(null),K=()=>{x.value.setFormData(),x.value.showDialog=!0},Y=d=>{e.goods_arr=d,x.value.showDialog=!1},O=d=>{e.goods_arr.forEach((o,p)=>{o.goods_id==d&&e.goods_arr.splice(p,1)})},E=v(0),Q=()=>{e.goods_arr.forEach((d,o)=>{d.num=E.value})};h&&(async(d=0)=>{Object.assign(e,R);const o=await(await he(d)).data;Object.keys(e).forEach(p=>{o[p]!=null&&(e[p]=o[p])}),e.goods_arr=o.item})(h);const q=v(),H=oe(()=>({goods_name:[{required:!0,message:t("goodsNamePlaceholder"),trigger:"blur"}],keywords:[{required:!0,message:t("keywordsPlaceholder"),trigger:"blur"}],goods_arr:[{required:!0,message:t("goodsArrPlaceholder"),trigger:"blur"},{validator:(d,o,p)=>{if(e.card_type=="oncecard"){let g=!0;for(let n=0;n<e.goods_arr.length;n++){const y=e.goods_arr[n].num;if(!ae.digits(y)){g=!1,p(t("availableQuantityFormatError"));break}if(parseInt(y)<=0){g=!1,p(t("availableQuantityMin"));break}}g&&p()}else p()}}],price:[{required:!0,message:t("pricePlaceholder"),trigger:"blur"}],goods_cover:[{required:!0,message:t("goodsCoverPlaceholder"),trigger:"blur"}],goods_content:[{required:!0,message:t("goodsContentPlaceholder"),trigger:"blur"}]})),z=async d=>{w.value||!d||await d.validate(async o=>{o&&(w.value=!0,(h?we:xe)(e).then(n=>{w.value=!1,history.back()}).catch(()=>{w.value=!1}))})},B=()=>{history.back()};return(d,o)=>{const p=re,g=se,n=de,y=ne,T=ie,k=ue,$=ve,I=pe,j=me,Z=ce,M=ge,J=_e;return i(),m("div",Pe,[l(g,{class:"card !border-none mb-[15px]",shadow:"never"},{default:s(()=>[l(p,{content:r(h)?r(t)("editCard"):r(t)("addCard"),icon:d.ArrowLeft,onBack:B},null,8,["content","icon"])]),_:1}),l(g,{class:"box-card !border-none",shadow:"never"},{default:s(()=>[l(J,{model:e,"label-width":"110px",ref_key:"formRef",ref:q,rules:r(H),class:"page-form"},{default:s(()=>[l(n,{label:r(t)("cardType")},{default:s(()=>[u("div",De,[(i(!0),m(S,null,N(F.value,(a,b)=>(i(),m("div",{class:te(["card-type-item",{"card-type-select":a.type==e.card_type}]),onClick:Je=>e.card_type=a.type,key:b},[u("span",null,c(a.name),1),u("span",null,c(a.desc),1)],10,Fe))),128))])]),_:1},8,["label"]),l(n,{label:r(t)("cardName"),prop:"goods_name"},{default:s(()=>[l(y,{modelValue:e.goods_name,"onUpdate:modelValue":o[0]||(o[0]=a=>e.goods_name=a),modelModifiers:{trim:!0},maxlength:"30","show-word-limit":"",clearable:"",placeholder:r(t)("cardNamePlaceholder"),class:"input-width"},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),l(n,{label:r(t)("promotionalLanguage"),prop:"keywords"},{default:s(()=>[l(y,{class:"input-width",placeholder:r(t)("promotionalLanguagePlaceholder"),maxlength:"100","show-word-limit":"",modelValue:e.keywords,"onUpdate:modelValue":o[1]||(o[1]=a=>e.keywords=a),modelModifiers:{trim:!0}},null,8,["placeholder","modelValue"])]),_:1},8,["label"]),l(n,{label:r(t)("cardContent"),prop:"goods_arr"},{default:s(()=>[u("div",null,[u("p",{class:"text-color cursor-pointer",onClick:K},c(r(t)("addCard")),1),e.goods_arr.length?(i(),m("div",Ue,[u("div",Ee,[Te,e.card_type=="oncecard"?(i(),m("span",Ie,"可用次数/数量")):f("",!0),Se,Ne]),u("div",{ref:"fieldBoxRefs","data-key":d.payKey},[(i(!0),m(S,null,N(e.goods_arr,a=>(i(),m("div",{class:"flex table-item-border table-item-pd justify-between",key:a.goods_id},[u("div",qe,c(a.goods_name),1),e.card_type=="oncecard"?(i(),m("div",Be,[l(T,{modelValue:a.num,"onUpdate:modelValue":b=>a.num=b,min:0,"controls-position":"right"},null,8,["modelValue","onUpdate:modelValue"])])):f("",!0),u("div",$e,"￥"+c(a.price),1),u("div",je,[u("span",{class:"text-base text-color cursor-pointer",onClick:le(b=>O(a.goods_id),["stop"])},"删除",8,Me)])]))),128))],8,Re)])):f("",!0),e.card_type=="oncecard"&&e.goods_arr.length?(i(),m("div",Le,[Ge,D.value?(i(),m("span",{key:0,class:"text-color cursor-pointer",onClick:o[2]||(o[2]=a=>D.value=!1)},"可用次数")):(i(),m("div",Ae,[l(T,{modelValue:E.value,"onUpdate:modelValue":o[3]||(o[3]=a=>E.value=a),min:1,"controls-position":"right",onChange:d.handleChange},null,8,["modelValue","onChange"]),l(k,{type:"primary",class:"ml-3",onClick:Q},{default:s(()=>[_("确认")]),_:1}),l(k,{class:"!ml-3",onClick:o[4]||(o[4]=a=>D.value=!0)},{default:s(()=>[_("取消")]),_:1})]))])):f("",!0)])]),_:1},8,["label"]),e.card_type=="commoncard"&&e.goods_arr.length?(i(),C(n,{key:0,label:r(t)("availableQuantity"),prop:"hotel_name"},{default:s(()=>[l(T,{modelValue:e.common_num,"onUpdate:modelValue":o[5]||(o[5]=a=>e.common_num=a),min:1,"controls-position":"right",onChange:d.handleChange},null,8,["modelValue","onChange"])]),_:1},8,["label"])):f("",!0),l(n,{label:r(t)("cardPrice"),prop:"price"},{default:s(()=>[l(y,{modelValue:e.price,"onUpdate:modelValue":o[6]||(o[6]=a=>e.price=a),onKeyup:o[7]||(o[7]=a=>r(L)(a)),placeholder:r(t)("cardPricePlaceholder"),class:"input-width"},{append:s(()=>[_(c(r(t)("unit")),1)]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"]),l(n,{label:r(t)("crossedPrice")},{default:s(()=>[l(y,{modelValue:e.scribe_price,"onUpdate:modelValue":o[8]||(o[8]=a=>e.scribe_price=a),onKeyup:o[9]||(o[9]=a=>r(L)(a)),placeholder:r(t)("crossedPricePlaceholder"),class:"input-width"},{append:s(()=>[_(c(r(t)("unit")),1)]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"]),l(n,{label:r(t)("virtuallySale")},{default:s(()=>[l(y,{modelValue:e.virtually_sale,"onUpdate:modelValue":o[10]||(o[10]=a=>e.virtually_sale=a),clearable:"",placeholder:r(t)("virtuallySalePlaceholder"),class:"input-width"},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),l(n,{label:r(t)("cardCover"),prop:"goods_cover"},{default:s(()=>[l($,{modelValue:e.goods_cover,"onUpdate:modelValue":o[11]||(o[11]=a=>e.goods_cover=a)},null,8,["modelValue"])]),_:1},8,["label"]),l(n,{label:r(t)("cardImages")},{default:s(()=>[l($,{modelValue:e.goods_image,"onUpdate:modelValue":o[12]||(o[12]=a=>e.goods_image=a),limit:"10"},null,8,["modelValue"])]),_:1},8,["label"]),l(n,{label:r(t)("cardDate")},{default:s(()=>[l(j,{modelValue:e.verify_validity_type,"onUpdate:modelValue":o[13]||(o[13]=a=>e.verify_validity_type=a),onChange:A},{default:s(()=>[(i(!0),m(S,null,N(U.value,(a,b)=>(i(),C(I,{label:a.type,key:b},{default:s(()=>[_(c(a.name),1)]),_:2},1032,["label"]))),128))]),_:1},8,["modelValue"])]),_:1},8,["label"]),e.verify_validity_type!=0?(i(),C(n,{key:1,label:r(t)("verifyValidity")},{default:s(()=>[e.verify_validity_type==1?(i(),C(y,{key:0,modelValue:e.verify_validity,"onUpdate:modelValue":o[14]||(o[14]=a=>e.verify_validity=a),placeholder:r(t)("serviceTimePlaceholder"),class:"input-width"},{append:s(()=>[_(c(r(t)("day")),1)]),_:1},8,["modelValue","placeholder"])):f("",!0),e.verify_validity_type==2?(i(),m("div",Ke,[l(Z,{modelValue:e.verify_validity,"onUpdate:modelValue":o[15]||(o[15]=a=>e.verify_validity=a),"value-format":"YYYY-MM-DD",type:"date"},null,8,["modelValue"])])):f("",!0)]),_:1},8,["label"])):f("",!0),l(n,{label:r(t)("isShelf")},{default:s(()=>[l(j,{modelValue:e.status,"onUpdate:modelValue":o[16]||(o[16]=a=>e.status=a)},{default:s(()=>[l(I,{label:1},{default:s(()=>[_(c(r(t)("are")),1)]),_:1}),l(I,{label:0},{default:s(()=>[_(c(r(t)("no")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["label"]),l(n,{label:r(t)("buyInfo")},{default:s(()=>[l(M,{modelValue:e.buy_info,"onUpdate:modelValue":o[17]||(o[17]=a=>e.buy_info=a)},null,8,["modelValue"])]),_:1},8,["label"]),l(n,{label:r(t)("cardDetails"),prop:"goods_content"},{default:s(()=>[l(M,{modelValue:e.goods_content,"onUpdate:modelValue":o[18]||(o[18]=a=>e.goods_content=a)},null,8,["modelValue"])]),_:1},8,["label"])]),_:1},8,["model","rules"])]),_:1}),u("div",Ye,[u("div",Oe,[l(k,{type:"primary",onClick:o[19]||(o[19]=a=>z(q.value))},{default:s(()=>[_(c(r(t)("save")),1)]),_:1}),l(k,{onClick:o[20]||(o[20]=a=>B())},{default:s(()=>[_(c(r(t)("cancel")),1)]),_:1})])]),l(ke,{ref_key:"cardGoodsSelectDialog",ref:x,onComplete:Y},null,512)])}}});const Ao=Ce(Qe,[["__scopeId","data-v-af076335"]]);export{Ao as default};
