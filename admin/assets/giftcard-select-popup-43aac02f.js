import{d as ae,l as L,r as w,n as E,h as y,c as b,a as s,b as le,e as o,w as d,i as P,t as c,u as i,q as r,R as T,a0 as G,F as ie,T as re,s as O,A as oe,B as I,aJ as de,a3 as se,a$ as ce,U as R,E as ne,ac as pe,aD as fe,L as _e,K as me,M as ue,ad as ge,J as he,ae as ye,W as ve,X as Pe,Y as Se,p as xe,g as be}from"./index-904cb7a2.js";/* empty css                   *//* empty css                  *//* empty css                   *//* empty css                      *//* empty css                 *//* empty css               *//* empty css                  *//* empty css                  *//* empty css                     *//* empty css                  *//* empty css                 *//* empty css                    */import"./el-tooltip-4ed993c7.js";/* empty css                 *//* empty css                        *//* empty css                        *//* empty css                */import"./el-form-item-4ed993c7.js";/* empty css                  */import{_ as Ce}from"./goods_default-664bb559.js";import{g as ke}from"./giftcard-3fdffc2f.js";import{g as Ve}from"./category-7dc18bc5.js";import{_ as we}from"./_plugin-vue_export-helper-c27b6911.js";const Ee=S=>(xe("data-v-64a69222"),S=S(),be(),S),Te={class:"inline-block ml-[10px] text-[14px]"},De={class:"text-primary mx-[2px]"},Ge={class:"flex items-center cursor-pointer"},Ie={class:"min-w-[80px] h-[50px] flex items-center justify-center"},$e=Ee(()=>s("div",{class:"image-slot"},[s("img",{class:"w-[80px] h-[50px]",src:Ce})],-1)),Fe={class:"ml-2"},Ne=["title"],Be={class:"text-primary text-[12px]"},Le={key:0},Oe={key:1},Re={key:2},Ue={class:"mt-[16px] flex"},ze={class:"flex items-center flex-1"},Ae={class:"layui-table-bottom-left-container mr-[10px]"},Me={class:"text-primary mx-[2px]"},je={class:"dialog-footer"},Je=ae({__name:"giftcard-select-popup",props:{modelValue:{type:String,default:""},max:{type:Number,default:0},min:{type:Number,default:0}},emits:["update:modelValue","giftcardSelect"],setup(S,{expose:U,emit:$}){const m=S,_=L({get(){return m.modelValue},set(l){$("update:modelValue",l)}}),v=w(!1),n=E({}),u=E([]),g=L(()=>Object.keys(n).length),t=E({page:1,limit:10,total:0,loading:!0,data:[],searchParam:{card_name:"",category_id:"",select_type:"all",giftcard_ids:"",verify_giftcard_ids:""}}),F=w(),z=l=>{h()},D=E([]);(()=>{Ve({}).then(l=>{const e=l.data;e&&D.splice(0,D.length,...e)})})();const C=w();w([]);const A=(l,e)=>{let p=!1;for(let f=0;f<l.length;f++)if(l[f].giftcard_id==e.giftcard_id){p=!0;break}p?(u.push(e.giftcard_id),n["giftcard_"+e.giftcard_id]=de(e)):(u.splice(u.indexOf(e.giftcard_id),1),delete n["giftcard_"+e.giftcard_id])},M=l=>{l.length?l.forEach(e=>{n["giftcard_"+e.giftcard_id]=e,u.indexOf(e.giftcard_id)==-1&&u.push(e.giftcard_id)}):t.data.forEach(e=>{u.splice(u.indexOf(e.giftcard_id),1),delete n["giftcard_"+e.giftcard_id]})},h=(l=1,e=null)=>{t.loading=!0,t.page=l;const p=se(t.searchParam);if(p.select_type=="selected"){const f=[];for(let k in n)f.push(parseInt(k.replace("giftcard_","")));p.giftcard_ids=f}else p.giftcard_ids="";ke({page:t.page,limit:t.limit,...p}).then(f=>{t.loading=!1,t.data=f.data.data,t.total=f.data.total,e&&e(f.data.verify_giftcard_ids),N()}).catch(()=>{t.loading=!1})},N=()=>{ce(()=>{if(C.value)for(let l=0;l<t.data.length;l++)C.value.toggleRowSelection(t.data[l],!1),n["giftcard_"+t.data[l].giftcard_id]&&C.value.toggleRowSelection(t.data[l],!0)})},j=l=>{l&&(l.resetFields(),h())},J=()=>{for(let l in n)delete n[l];t.searchParam.verify_giftcard_ids=_.value,h(1,l=>{if(_.value){_.value.splice(0,_.value.length,...l),_.value.forEach(e=>{n["giftcard_"+e]||(n["giftcard_"+e]={})});for(let e=0;e<t.data.length;e++)_.value.indexOf(t.data[e].giftcard_id)!=-1&&(n["giftcard_"+t.data[e].giftcard_id]=t.data[e])}}),v.value=!0},q=()=>{for(let l in n)delete n[l];t.searchParam.verify_giftcard_ids="",h(),N()},K=()=>{if(m.min&&g.value<m.min){R({type:"warning",message:`${r("giftcardSelectPopupGiftcardMinTip")}${m.min}${r("giftcardSelectPopupPiece")}`});return}if(m.max&&m.max>0&&g.value&&g.value>m.max){R({type:"warning",message:`${r("giftcardSelectPopupGiftcardMaxTip")}${m.max}${r("giftcardSelectPopupPiece")}`});return}let l=[];for(let e in n)l.push(parseInt(e.replace("giftcard_","")));_.value.splice(0,_.value.length,...l),$("giftcardSelect",n),B(),v.value=!1},W=()=>{B()},B=()=>{t.searchParam.card_name="",t.searchParam.category_id="",t.searchParam.select_type="all",t.searchParam.giftcard_ids="",t.searchParam.verify_giftcard_ids=""};return U({showDialog:v,selectGiftcard:n,selectGiftcardNum:g}),(l,e)=>{const p=ne,f=pe,k=fe,V=_e,X=me,Y=ue,x=ge,H=he,Q=ye,Z=ve,ee=Pe,te=Se;return y(),b("div",null,[s("div",{onClick:J},[le(l.$slots,"default",{},()=>[o(p,null,{default:d(()=>[P(c(i(r)("giftcardSelectPopupButton")),1)]),_:1}),T(s("div",Te,[s("span",null,c(i(r)("giftcardSelectPopupSelect")),1),s("span",De,c(i(_).length),1),s("span",null,c(i(r)("giftcardSelectPopupPiece")),1)],512),[[G,i(_).length]])],!0)]),o(ee,{modelValue:v.value,"onUpdate:modelValue":e[9]||(e[9]=a=>v.value=a),title:i(r)("giftcardSelectPopupSelectGiftcardDialog"),width:"1000px","close-on-press-escape":!1,"destroy-on-close":!0,"close-on-click-modal":!1,onClose:W},{footer:d(()=>[s("span",je,[o(p,{onClick:e[8]||(e[8]=a=>v.value=!1)},{default:d(()=>[P(c(i(r)("cancel")),1)]),_:1}),o(p,{type:"primary",onClick:K},{default:d(()=>[P(c(i(r)("confirm")),1)]),_:1})])]),default:d(()=>[o(Y,{inline:!0,model:t.searchParam,ref_key:"searchFormRef",ref:F},{default:d(()=>[o(V,{prop:"select_type",class:"form-item-wrap"},{default:d(()=>[o(k,{modelValue:t.searchParam.select_type,"onUpdate:modelValue":e[0]||(e[0]=a=>t.searchParam.select_type=a),onChange:z},{default:d(()=>[o(f,{label:i(r)("giftcardSelectPopupAllGiftcard"),value:"all"},null,8,["label"]),o(f,{label:i(r)("giftcardSelectPopupSelectedGiftcard"),value:"selected"},null,8,["label"])]),_:1},8,["modelValue"])]),_:1}),o(V,{label:i(r)("giftcardSelectPopupCardName"),prop:"card_name",class:"form-item-wrap"},{default:d(()=>[o(X,{modelValue:t.searchParam.card_name,"onUpdate:modelValue":e[1]||(e[1]=a=>t.searchParam.card_name=a),modelModifiers:{trim:!0},placeholder:i(r)("giftcardSelectPopupCardNamePlaceholder"),maxlength:"20"},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),o(V,{label:i(r)("giftcardSelectPopupCardCategory"),prop:"category_id",class:"form-item-wrap"},{default:d(()=>[o(k,{modelValue:t.searchParam.category_id,"onUpdate:modelValue":e[2]||(e[2]=a=>t.searchParam.category_id=a),placeholder:i(r)("giftcardSelectPopupCardCategoryPlaceholder"),clearable:""},{default:d(()=>[(y(!0),b(ie,null,re(D,a=>(y(),O(f,{key:a.category_id,label:a.category_name,value:a.category_id},null,8,["label","value"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"]),o(V,{class:"form-item-wrap"},{default:d(()=>[o(p,{type:"primary",onClick:e[3]||(e[3]=a=>h())},{default:d(()=>[P(c(i(r)("search")),1)]),_:1}),o(p,{onClick:e[4]||(e[4]=a=>j(F.value))},{default:d(()=>[P(c(i(r)("reset")),1)]),_:1})]),_:1})]),_:1},8,["model"]),T((y(),O(Q,{data:t.data,size:"large",ref_key:"giftcardListTableRef",ref:C,"max-height":"400",onSelect:A,onSelectAll:M},{empty:d(()=>[s("span",null,c(t.loading?"":i(r)("emptyData")),1)]),default:d(()=>[o(x,{type:"selection",width:"55"}),o(x,{prop:"giftcard_id",label:i(r)("giftcardSelectPopupCardInfo"),"min-width":"300"},{default:d(({row:a})=>[s("div",Ge,[s("div",Ie,[o(H,{class:"w-[80px] h-[50px]",src:i(oe)(a.cover.split(",")[0]),fit:"contain"},{error:d(()=>[$e]),_:2},1032,["src"])]),s("div",Fe,[s("span",{title:a.card_name,class:"multi-hidden"},c(a.card_name),9,Ne),s("span",Be,c(a.card_right_type_name),1)])])]),_:1},8,["label"]),o(x,{prop:"card_price",label:i(r)("giftcardSelectPopupCardPrice"),"min-width":"120"},{default:d(({row:a})=>[s("div",null,"￥"+c(a.card_price),1)]),_:1},8,["label"]),o(x,{prop:"category_id",label:i(r)("giftcardSelectPopupCardCategory"),"min-width":"140","show-overflow-tooltip":!0},{default:d(({row:a})=>[s("div",null,c(a.category.category_name),1)]),_:1},8,["label"]),o(x,{prop:"validity_type",label:i(r)("validityType"),"min-width":"200","show-overflow-tooltip":!0},{default:d(({row:a})=>[a.validity_type=="forever"?(y(),b("div",Le,c(i(r)("validityForever")),1)):I("",!0),a.validity_type=="day"?(y(),b("div",Oe,"购买后"+c(a.validity_day)+"天有效",1)):I("",!0),a.validity_type=="date"?(y(),b("div",Re,"使用截止时间为："+c(a.validity_time||""),1)):I("",!0)]),_:1},8,["label"])]),_:1},8,["data"])),[[te,t.loading]]),s("div",Ue,[s("div",ze,[T(s("div",Ae,[s("span",null,c(i(r)("giftcardSelectPopupBeforeTip")),1),s("span",Me,c(i(g)),1),s("span",null,c(i(r)("giftcardSelectPopupAfterTip")),1)],512),[[G,i(g)]]),T(o(p,{type:"primary",link:"",onClick:q},{default:d(()=>[P(c(i(r)("giftcardSelectPopupClearGiftcard")),1)]),_:1},512),[[G,i(g)]])]),o(Z,{"current-page":t.page,"onUpdate:current-page":e[5]||(e[5]=a=>t.page=a),"page-size":t.limit,"onUpdate:page-size":e[6]||(e[6]=a=>t.limit=a),layout:"total, sizes, prev, pager, next, jumper",total:t.total,onSizeChange:e[7]||(e[7]=a=>h()),onCurrentChange:h},null,8,["current-page","page-size","total"])])]),_:1},8,["modelValue","title"])])}}});const ht=we(Je,[["__scopeId","data-v-64a69222"]]);export{ht as default};
