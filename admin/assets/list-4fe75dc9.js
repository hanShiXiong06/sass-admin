import{d as he,x as ye,f as ve,n as R,r as y,a2 as be,h as c,c as g,e as o,w as i,a as d,t as r,u as t,i as u,q as l,F as q,T as A,s as v,R as ke,A as Ce,B as b,a5 as Q,U as H,aq as xe,E as Ee,K as Te,L as Ve,ac as Pe,aD as we,M as $e,a7 as Re,ay as Se,az as Be,aw as De,ad as Oe,J as Fe,a1 as Ie,aa as Ue,al as ze,ae as Ge,W as Le,Y as Ne}from"./index-904cb7a2.js";/* empty css                   *//* empty css                      *//* empty css                 *//* empty css               *//* empty css                  *//* empty css                  *//* empty css                     *//* empty css                  *//* empty css                 *//* empty css                    */import"./el-tooltip-4ed993c7.js";/* empty css                 *//* empty css                        *//* empty css                        *//* empty css                    *//* empty css                *//* empty css                */import"./el-form-item-4ed993c7.js";/* empty css                  */import{_ as Me}from"./goods_default-664bb559.js";import{j as je,e as qe,m as S,k as Ae,l as Qe}from"./giftcard-3fdffc2f.js";import{g as He}from"./category-7dc18bc5.js";import{_ as Je}from"./giftcard-spread-popup.vue_vue_type_script_setup_true_lang-ec5b4a97.js";import{_ as Ke}from"./giftcard-detail.vue_vue_type_style_index_0_lang-ff14a247.js";/* empty css                  *//* empty css                   */import"./browser-a1ac24ac.js";/* empty css                  *//* empty css                     *//* empty css               *//* empty css               */import"./card-6cee3277.js";const We={class:"main-container"},Ye={class:"flex justify-between items-center"},Xe={class:"text-lg"},Ze={class:"mt-[10px]"},et={class:"mb-[10px] flex items-center"},tt={class:"flex items-center cursor-pointer"},at={class:"min-w-[80px] h-[50px] flex items-center justify-center"},lt=d("div",{class:"image-slot"},[d("img",{class:"w-[80px] h-[50px]",src:Me})],-1),ot={class:"ml-2"},it=["title"],st={class:"text-primary text-[12px]"},nt={key:0},rt={key:1},dt={key:0},ct={key:1},pt={key:2},ut={style:{display:"inline-flex","align-items":"center"}},mt={class:"mr-[5px]"},_t=d("br",null,null,-1),ft={key:0},gt={key:1},ht={style:{display:"inline-flex","align-items":"center"}},yt={class:"mr-[5px]"},vt={class:"mt-[16px] flex justify-end"},ta=he({__name:"list",setup(bt){const J=ye(),C=ve(),K=J.meta.title;let n=R({page:1,limit:10,total:0,loading:!0,data:[],searchParam:{type:"",category_id:"",card_right_type:"",card_name:"",status:"",order:"",sort:""}});const B=y(),m=(s=1)=>{n.loading=!0,n.page=s,je({page:n.page,limit:n.limit,...n.searchParam}).then(a=>{n.loading=!1,n.data=a.data.data,n.total=a.data.total}).catch(()=>{n.loading=!1})},P=R([]),D=R({});(()=>{He({}).then(s=>{const a=s.data;a&&P.splice(0,P.length,...a)}),qe({}).then(s=>{const a=s.data;a&&Object.assign(D,a)}),m()})();const W=(s,a)=>{n.searchParam.type=s.props.name,m()},T=y(),V=y(!1),Y=s=>{V.value=!1,O.value.toggleAllSelection()},O=y(),k=y([]),X=s=>{k.value=s,T.value=!1,k.value.length>0&&k.value.length<n.data.length?V.value=!0:V.value=!1,k.value.length==n.data.length&&(T.value=!0)},h=y(!1),Z=s=>{let a="";s.order=="ascending"?a="asc":s.order=="descending"&&(a="desc"),a&&(n.searchParam.order=s.prop,n.searchParam.sort=a),m()},F=(s,a)=>{if(a){if(h.value)return;h.value=!0,S({giftcard_ids:s.giftcard_id,status:a}).then(p=>{m(),h.value=!1}).catch(()=>{h.value=!1})}else Q.confirm(l("modifyStatusEventTips"),l("warning"),{confirmButtonText:l("confirm"),cancelButtonText:l("cancel"),type:"warning"}).then(()=>{S({giftcard_ids:s.giftcard_id,status:a}).then(p=>{m()})})},I=s=>{if(k.value.length==0){H({type:"warning",message:`${l("batchEmptySelectedGiftcardTips")}`});return}if(h.value)return;h.value=!0;const a=[];k.value.forEach(p=>{a.push(p.giftcard_id)}),S({giftcard_ids:a,status:s}).then(p=>{m(),h.value=!1}).catch(()=>{h.value=!1})},ee=xe((s,a)=>{if(isNaN(s)||!/^\d{0,10}$/.test(s)){H({type:"warning",message:`${l("sortTips")}`});return}s>99999999&&(a.sort=99999999),Ae({giftcard_id:a.giftcard_id,sort:s}).then(p=>{})}),te=()=>{C.push("/shop_giftcard/giftcard/edit")},ae=s=>{C.push("/shop_giftcard/giftcard/edit?giftcard_id="+s.giftcard_id)},le=y(null),oe=s=>{C.push(`/shop_giftcard/giftcard/detail?giftcard_id=${s.giftcard_id}`)},U=y(null),ie=s=>{U.value.show(s)},se=s=>{const a=C.resolve({path:"/shop_giftcard/makecard",query:{giftcard_id:s.giftcard_id}});window.open(a.href)},ne=s=>{const a=C.resolve({path:"/shop_giftcard/order/list",query:{giftcard_id:s.giftcard_id}});window.open(a.href)},re=s=>{Q.confirm(l("giftcardDeleteTips"),l("warning"),{confirmButtonText:l("confirm"),cancelButtonText:l("cancel"),type:"warning"}).then(()=>{Qe(s).then(()=>{m()}).catch(()=>{})})},de=s=>{s&&(s.resetFields(),m())};return(s,a)=>{const p=Ee,z=Te,x=Ve,E=Pe,w=we,ce=$e,G=Re,$=Se,pe=Be,ue=De,_=Oe,me=Fe,L=be("QuestionFilled"),N=Ie,M=Ue,j=ze,_e=Ge,fe=Le,ge=Ne;return c(),g("div",We,[o(G,{class:"box-card !border-none",shadow:"never"},{default:i(()=>[d("div",Ye,[d("span",Xe,r(t(K)),1),o(p,{type:"primary",onClick:te},{default:i(()=>[u(r(t(l)("addGiftcard")),1)]),_:1})]),o(G,{class:"box-card !border-none my-[10px] table-search-wrap",shadow:"never"},{default:i(()=>[o(ce,{inline:!0,model:t(n).searchParam,ref_key:"searchFormRef",ref:B},{default:i(()=>[o(x,{label:t(l)("cardName"),prop:"card_name"},{default:i(()=>[o(z,{modelValue:t(n).searchParam.card_name,"onUpdate:modelValue":a[0]||(a[0]=e=>t(n).searchParam.card_name=e),modelModifiers:{trim:!0},placeholder:t(l)("cardNamePlaceholder"),maxlength:"20"},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),o(x,{label:t(l)("categoryId"),prop:"category_id"},{default:i(()=>[o(w,{modelValue:t(n).searchParam.category_id,"onUpdate:modelValue":a[1]||(a[1]=e=>t(n).searchParam.category_id=e),modelModifiers:{trim:!0},placeholder:t(l)("categoryIdPlaceholder"),clearable:""},{default:i(()=>[(c(!0),g(q,null,A(P,e=>(c(),v(E,{key:e.category_id,label:e.category_name,value:e.category_id},null,8,["label","value"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"]),o(x,{label:t(l)("cardRightType"),prop:"card_right_type"},{default:i(()=>[o(w,{modelValue:t(n).searchParam.card_right_type,"onUpdate:modelValue":a[2]||(a[2]=e=>t(n).searchParam.card_right_type=e),modelModifiers:{trim:!0},placeholder:t(l)("cardRightTypePlaceholder"),clearable:""},{default:i(()=>[(c(!0),g(q,null,A(D,e=>(c(),v(E,{key:e.type,label:e.name,value:e.type},null,8,["label","value"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"]),o(x,{label:t(l)("status"),prop:"status"},{default:i(()=>[o(w,{modelValue:t(n).searchParam.status,"onUpdate:modelValue":a[3]||(a[3]=e=>t(n).searchParam.status=e),placeholder:t(l)("statusPlaceholder")},{default:i(()=>[o(E,{label:t(l)("statusAll"),value:""},null,8,["label"]),o(E,{label:t(l)("statusOn"),value:"1"},null,8,["label"]),o(E,{label:t(l)("statusOff"),value:"0"},null,8,["label"])]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"]),o(x,null,{default:i(()=>[o(p,{type:"primary",onClick:a[4]||(a[4]=e=>m())},{default:i(()=>[u(r(t(l)("search")),1)]),_:1}),o(p,{onClick:a[5]||(a[5]=e=>de(B.value))},{default:i(()=>[u(r(t(l)("reset")),1)]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),d("div",Ze,[o(pe,{modelValue:t(n).searchParam.type,"onUpdate:modelValue":a[6]||(a[6]=e=>t(n).searchParam.type=e),onTabClick:W},{default:i(()=>[o($,{label:t(l)("typeAll"),name:""},null,8,["label"]),o($,{label:t(l)("typeVirtual"),name:"virtual"},null,8,["label"]),o($,{label:t(l)("typeReal"),name:"real"},null,8,["label"])]),_:1},8,["modelValue"]),d("div",et,[o(ue,{modelValue:T.value,"onUpdate:modelValue":a[7]||(a[7]=e=>T.value=e),size:"large",class:"px-[14px]",onChange:Y,indeterminate:V.value},null,8,["modelValue","indeterminate"]),o(p,{onClick:a[8]||(a[8]=e=>I(1)),size:"small"},{default:i(()=>[u(r(t(l)("batchOn")),1)]),_:1}),o(p,{onClick:a[9]||(a[9]=e=>I(0)),size:"small"},{default:i(()=>[u(r(t(l)("batchOff")),1)]),_:1})]),ke((c(),v(_e,{data:t(n).data,size:"large",ref_key:"giftcardListTableRef",ref:O,onSortChange:Z,onSelectionChange:X},{empty:i(()=>[d("span",null,r(t(n).loading?"":t(l)("emptyData")),1)]),default:i(()=>[o(_,{type:"selection",width:"55"}),o(_,{prop:"giftcard_id",label:t(l)("cardInfo"),"min-width":"230"},{default:i(({row:e})=>[d("div",tt,[d("div",at,[o(me,{class:"w-[80px] h-[50px]",src:t(Ce)(e.cover.split(",")[0]),fit:"contain"},{error:i(()=>[lt]),_:2},1032,["src"])]),d("div",ot,[d("span",{title:e.card_name,class:"multi-hidden"},r(e.card_name),9,it),d("span",st,r(e.type_name),1)])])]),_:1},8,["label"]),o(_,{prop:"category_id",label:t(l)("categoryId"),"min-width":"120","show-overflow-tooltip":!0},{default:i(({row:e})=>[e.category?(c(),g("div",nt,r(e.category.category_name),1)):(c(),g("div",rt,"--"))]),_:1},8,["label"]),o(_,{prop:"card_right_type_name",label:t(l)("cardRightType"),"min-width":"100","show-overflow-tooltip":!0},null,8,["label"]),o(_,{prop:"validity_type",label:t(l)("validityType"),"min-width":"180"},{default:i(({row:e})=>[e.validity_type=="forever"?(c(),g("div",dt,r(t(l)("validityForever")),1)):b("",!0),e.validity_type=="day"?(c(),g("div",ct,"购买后"+r(e.validity_day)+"天有效",1)):b("",!0),e.validity_type=="date"?(c(),g("div",pt,"使用截止时间为："+r(e.validity_time||""),1)):b("",!0)]),_:1},8,["label"]),o(_,{prop:"sale_count",label:t(l)("saleCount"),"min-width":"170","show-overflow-tooltip":!0,sortable:"custom"},{header:i(()=>[d("div",ut,[d("span",mt,r(t(l)("saleCount")),1),o(M,{class:"box-item",effect:"light",placement:"top"},{content:i(()=>[u(r(t(l)("saleCountTips1")),1),_t,u(r(t(l)("saleCountTips2")),1)]),default:i(()=>[o(N,{color:"#666"},{default:i(()=>[o(L)]),_:1})]),_:1})])]),default:i(({row:e})=>[e.type=="virtual"?(c(),g("div",ft,r(e.sale_count),1)):e.type=="real"?(c(),g("div",gt,r(e.activate_count),1)):b("",!0)]),_:1},8,["label"]),o(_,{prop:"sort","min-width":"120","show-overflow-tooltip":!0,sortable:"custom"},{header:i(()=>[d("div",ht,[d("span",yt,r(t(l)("sort")),1),o(M,{class:"box-item",effect:"light",content:t(l)("sortRules"),placement:"top"},{default:i(()=>[o(N,{color:"#666"},{default:i(()=>[o(L)]),_:1})]),_:1},8,["content"])])]),default:i(({row:e})=>[o(z,{modelValue:e.sort,"onUpdate:modelValue":f=>e.sort=f,modelModifiers:{trim:!0},class:"w-[70px]",maxlength:"8",onBlur:f=>t(ee)(e.sort,e)},null,8,["modelValue","onUpdate:modelValue","onBlur"])]),_:1}),o(_,{prop:"status",label:t(l)("status"),"min-width":"80","show-overflow-tooltip":!0},{default:i(({row:e})=>[e.status==1?(c(),v(j,{key:0,type:"success",onClick:f=>F(e,0),class:"cursor-pointer"},{default:i(()=>[u(r(t(l)("statusOn")),1)]),_:2},1032,["onClick"])):(c(),v(j,{key:1,type:"info",onClick:f=>F(e,1),class:"cursor-pointer"},{default:i(()=>[u(r(t(l)("statusOff")),1)]),_:2},1032,["onClick"]))]),_:1},8,["label"]),o(_,{prop:"use_count",label:t(l)("useCount"),"min-width":"120","show-overflow-tooltip":!0,sortable:"custom"},null,8,["label"]),o(_,{prop:"create_time",label:t(l)("createTime"),"min-width":"150",sortable:"custom"},{default:i(({row:e})=>[d("div",null,r(e.create_time),1)]),_:1},8,["label"]),o(_,{label:t(l)("operation"),fixed:"right",align:"right","min-width":"120"},{default:i(({row:e})=>[o(p,{type:"primary",link:"",onClick:f=>oe(e)},{default:i(()=>[u(r(t(l)("giftcardDetail")),1)]),_:2},1032,["onClick"]),o(p,{type:"primary",link:"",onClick:f=>ae(e)},{default:i(()=>[u(r(t(l)("edit")),1)]),_:2},1032,["onClick"]),o(p,{type:"primary",link:"",onClick:f=>ie(e)},{default:i(()=>[u(r(t(l)("spreadGiftcard")),1)]),_:2},1032,["onClick"]),e.type=="real"?(c(),v(p,{key:0,type:"primary",link:"",onClick:f=>se(e)},{default:i(()=>[u(r(t(l)("makeCard")),1)]),_:2},1032,["onClick"])):b("",!0),e.type=="virtual"?(c(),v(p,{key:1,type:"primary",link:"",onClick:f=>ne(e)},{default:i(()=>[u(r(t(l)("toOrder")),1)]),_:2},1032,["onClick"])):b("",!0),e.status==0?(c(),v(p,{key:2,type:"primary",link:"",onClick:f=>re(e.giftcard_id)},{default:i(()=>[u(r(t(l)("delete")),1)]),_:2},1032,["onClick"])):b("",!0)]),_:1},8,["label"])]),_:1},8,["data"])),[[ge,t(n).loading]]),d("div",vt,[o(fe,{"current-page":t(n).page,"onUpdate:current-page":a[10]||(a[10]=e=>t(n).page=e),"page-size":t(n).limit,"onUpdate:page-size":a[11]||(a[11]=e=>t(n).limit=e),layout:"total, sizes, prev, pager, next, jumper",total:t(n).total,onSizeChange:a[12]||(a[12]=e=>m()),onCurrentChange:m},null,8,["current-page","page-size","total"])])])]),_:1}),o(Je,{ref_key:"giftcardSpreadPopupRef",ref:U},null,512),o(Ke,{ref_key:"giftcardDetailDialog",ref:le},null,512)])}}});export{ta as default};