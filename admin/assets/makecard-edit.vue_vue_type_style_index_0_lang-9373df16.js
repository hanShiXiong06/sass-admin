import{d as O,x as Q,r as _,n as W,l as Y,q as o,h as b,s as D,w as n,a as p,e as s,br as N,i as f,t as c,u as l,R as E,c as U,F as B,b$ as T,B as G,a0 as k,aJ as Z,U as V,au as ee,av as te,L as ae,ad as oe,K as le,ae as re,M as ne,d4 as se,E as ie,X as de}from"./index-99f00cf3.js";/* empty css                  *//* empty css                   *//* empty css                  *//* empty css                    *//* empty css                */import{_ as ce}from"./index.vue_vue_type_style_index_0_lang-bad0a04a.js";/* empty css                 *//* empty css                    */import"./el-tooltip-4ed993c7.js";/* empty css                  *//* empty css                     *//* empty css                 *//* empty css                        *//* empty css               */import"./el-form-item-4ed993c7.js";/* empty css                       *//* empty css                 */import{b as ue,c as _e}from"./giftcard-f0fd540a.js";import{m as pe}from"./card-b900a778.js";const me={class:"mt-[10px] text-[12px] text-[#999] leading-[20px]"},fe={class:"mt-[10px] text-[12px] text-[#999] leading-[20px]"},ge={class:"mt-[10px] text-[12px] text-[#999] leading-[20px]"},ve={class:"adding-wrap"},ye={class:"dialog-footer"},ze=O({__name:"makecard-edit",emits:["complete"],setup(be,{expose:M,emit:q}){const K=Q();let u=_(!1);const m=_(!1),g=_("select"),y=_(0),C=_(0),v=_(!1),e=W({...{giftcard_id:0,make_card_way:"auto",balance_json:[],card_right_type:"balance",total_count:"",import_path:""}}),F=_();e.giftcard_id=K.query.giftcard_id||0;const w=_(null);(()=>{ue(e.giftcard_id).then(d=>{d.data&&(w.value=d.data,e.balance_json=Z(w.value.balance_json),e.card_right_type=w.value.card_right_type,e.card_right_type=="balance"&&e.balance_json.forEach(t=>{t.count="",t.make_count=0,t.total_count=0,t.status="no_start"}))})})();const S=Y(()=>({total_count:[{required:!0,trigger:"blur",validator:(d,t,a)=>{e.make_card_way=="auto"&&(t===""?a(new Error(o("请输入制卡数量"))):isNaN(t)||!/^\d{0,10}$/.test(t)?a(new Error(o("制卡数量格式输入错误"))):t<0?a(new Error(o("制卡数量不能小于0"))):t==0?a(new Error(o("制卡数量必须大于0"))):t>1001&&a(new Error(o("单次制作数量不能超出一千张")))),a()}}],import_path:[{required:!0,trigger:"blur",validator:(d,t,a)=>{e.make_card_way=="import"&&t===""&&a(new Error(o("请上传卡密文件"))),a()}}]})),z=()=>{e.card_right_type=="balance"?window.open(`${location.origin}/addon/shop_giftcard/import/card_import_balance.xls`):e.card_right_type=="goods"&&window.open(`${location.origin}/addon/shop_giftcard/import/card_import_goods.xls`)},J=async d=>{m.value||!d||await d.validate(async t=>{if(t){if(e.make_card_way=="auto"&&e.card_right_type=="balance"){if(e.total_count=0,e.balance_json.forEach(i=>{i.count&&(i.total_count=parseInt(i.count),e.total_count+=parseInt(i.count))}),e.total_count==0){V({type:"warning",message:`${o("请输入制卡数量")}`});return}else if(e.total_count>1e3){V({type:"warning",message:`${o("单次制作数量不能超出一千张")}`});return}e.balance_json.forEach(i=>{i.count||(i.count=0)})}let a=e;if(m.value=!0,v.value)return;v.value=!0,_e(a).then(i=>{i.data.make_id&&(g.value="adding",$(i.data.make_id))}).catch(i=>{m.value=!1,v.value=!1})}})},$=d=>{pe({make_id:d,giftcard_id:e.giftcard_id}).then(t=>{let a=t.data;a&&(C.value=_(a.success_count),a.total_count==0||a.success_count+a.fail_count==0?y.value=100:y.value=((a.success_count+a.fail_count)/a.total_count*100).toFixed(),a.total_count==a.success_count+a.fail_count?(V({type:"success",message:`${o("制卡成功")}`}),setTimeout(()=>{m.value=!1,u.value=!1,v.value=!1,g.value="select",y.value=0,C.value=0,e.balance_json=[],e.total_count="",e.import_path="",q("complete")},1e3)):setTimeout(()=>{$(d)},1e3))}).catch(t=>{m.value=!1,v.value=!1})};return M({showDialog:u}),(d,t)=>{const a=ee,i=te,x=ae,j=oe,I=le,L=re,P=ce,X=ne,A=se,R=ie,H=de;return b(),D(H,{modelValue:l(u),"onUpdate:modelValue":t[7]||(t[7]=r=>N(u)?u.value=r:u=r),title:g.value=="select"?l(o)("addCard"):l(o)("卡密制作中，请稍等..."),width:"450px",class:"diy-dialog-wrap","destroy-on-close":!0,"close-on-press-escape":!1,"close-on-click-modal":!1},{footer:n(()=>[p("span",ye,[s(R,{onClick:t[5]||(t[5]=r=>N(u)?u.value=!1:u=!1)},{default:n(()=>[f(c(l(o)("cancel")),1)]),_:1}),s(R,{type:"primary",loading:m.value,onClick:t[6]||(t[6]=r=>J(F.value))},{default:n(()=>[f(c(l(o)("confirm")),1)]),_:1},8,["loading"])])]),default:n(()=>[E(s(X,{model:e,"label-width":"120px",ref_key:"formRef",ref:F,rules:l(S),class:"page-form"},{default:n(()=>[s(x,{label:l(o)("制卡方式"),prop:"giftcard_id"},{default:n(()=>[s(i,{modelValue:e.make_card_way,"onUpdate:modelValue":t[0]||(t[0]=r=>e.make_card_way=r)},{default:n(()=>[s(a,{label:"auto"},{default:n(()=>[f(c(l(o)("在线制卡")),1)]),_:1}),s(a,{label:"import"},{default:n(()=>[f(c(l(o)("导入制卡")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["label"]),e.make_card_way=="auto"?(b(),U(B,{key:0},[e.card_right_type=="balance"?(b(),U(B,{key:0},[s(L,{data:e.balance_json,size:"large","max-height":"400"},{default:n(()=>[s(j,{prop:"balance",label:l(o)("面值"),"min-width":"120","show-overflow-tooltip":!0},{default:n(({row:r})=>[p("div",null,"￥"+c(r.balance),1)]),_:1},8,["label"]),s(j,{prop:"count",label:l(o)("制卡数量"),"min-width":"120"},{default:n(({row:r})=>[s(I,{modelValue:r.count,"onUpdate:modelValue":h=>r.count=h,modelModifiers:{trim:!0},clearable:"",placeholder:"0",class:"!w-[140px]",maxlength:"4",onKeyup:t[1]||(t[1]=h=>l(T)(h))},{append:n(()=>[f(c(l(o)("张")),1)]),_:2},1032,["modelValue","onUpdate:modelValue"])]),_:1},8,["label"])]),_:1},8,["data"]),p("div",me,c(l(o)("在线制卡最多单次制作1千张，卡号及密钥按照制卡规则生成")),1)],64)):e.card_right_type=="goods"?(b(),D(x,{key:1,label:l(o)("制卡数量"),prop:"total_count"},{default:n(()=>[p("div",null,[s(I,{modelValue:e.total_count,"onUpdate:modelValue":t[2]||(t[2]=r=>e.total_count=r),modelModifiers:{trim:!0},clearable:"",placeholder:"0",class:"!w-[140px]",maxlength:"4",onKeyup:t[3]||(t[3]=r=>l(T)(r))},{append:n(()=>[f(c(l(o)("张")),1)]),_:1},8,["modelValue"]),p("div",fe,c(l(o)("在线制卡最多单次制作1千张，卡号及密钥按照制卡规则生成")),1)])]),_:1},8,["label"])):G("",!0)],64)):G("",!0),E(s(x,{label:l(o)("上传文件"),prop:"import_path"},{default:n(()=>[p("div",null,[s(P,{modelValue:e.import_path,"onUpdate:modelValue":t[4]||(t[4]=r=>e.import_path=r),api:"sys/document/excel"},null,8,["modelValue"]),p("div",{onClick:z,class:"form-tip mt-[5px] !text-[var(--el-color-primary)] cursor-pointer"},c(l(o)("下载卡密模板")),1),p("div",ge,c(l(o)("导入制卡需上传卡密文件，注意不要重复，且单次最多制作1千张")),1)])]),_:1},8,["label"]),[[k,e.make_card_way=="import"]])]),_:1},8,["model","rules"]),[[k,g.value=="select"]]),E(p("div",ve,[s(A,{percentage:y.value},null,8,["percentage"])],512),[[k,g.value=="adding"]])]),_:1},8,["modelValue","title"])}}});export{ze as _};
