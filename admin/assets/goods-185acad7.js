import{O as C,d as ke,r as d,f as we,y as Ce,q as x,a2 as k,h as p,c as b,e as s,w as n,u as r,s as o,F as D,T as F,v,a as i,R as w,bS as N,b6 as $,i as V,t as h,C as O,B as Ee,U as c,a3 as X,aW as Se,K as Te,L as Ne,bF as $e,ab as Ve,aC as Le,E as Ie,M as Re,a7 as Ue,J as De,ac as Fe,a1 as Oe,ad as Ae,W as Be,Y as Me,p as ze,g as Ge}from"./index-0e396751.js";/* empty css                   */import{_ as Ke}from"./index.vue_vue_type_script_setup_true_lang-0825ba66.js";/* empty css                      *//* empty css                 *//* empty css               *//* empty css                  *//* empty css                  *//* empty css                     *//* empty css                  *//* empty css                 *//* empty css                    */import"./el-tooltip-4ed993c7.js";/* empty css                        *//* empty css                 *//* empty css                        *//* empty css                *//* empty css                *//* empty css                  *//* empty css                          *//* empty css                 */import"./el-form-item-4ed993c7.js";/* empty css                 */import{e as je}from"./goods-b3c79f78.js";import{a as qe}from"./member-fcb60d7e.js";import{_ as Je}from"./_plugin-vue_export-helper-c27b6911.js";/* empty css                  *//* empty css                   */const Z=""+new URL("goods_default-9268386d.png",import.meta.url).href;function We(_){return C.get("shop/goods",{params:_})}function Ye(){return C.get("shop/goods/type")}function He(_){return C.get("shop/goods/label/list",{params:_})}function Qe(_){return C.get("shop/goods/brand/list",{params:_})}function Xe(){return C.get("shop/goods/tree")}const A=_=>(ze("data-v-3faa44ce"),_=_(),Ge(),_),Ze={class:"main-container"},ea={class:"region-input"},aa=["placeholder"],ta=A(()=>i("span",{class:"separator"},"-",-1)),oa=["placeholder"],sa={class:"region-input"},ra=["placeholder"],la=A(()=>i("span",{class:"separator"},"-",-1)),na=["placeholder"],ia={class:"mt-[10px]"},da=["onClick"],pa={class:"min-w-[70px] h-[70px] flex items-center justify-center"},ca=A(()=>i("div",{class:"image-slot"},[i("img",{class:"w-[70px] h-[70px]",src:Z})],-1)),ma={key:1,class:"w-[70px] h-[70px]",src:Z,fit:"contain"},ua={class:"ml-2"},_a=["title"],ga={class:"text-primary text-[12px]"},ha=["onClick"],fa=["onClick"],ba={key:0},Pa={key:1},ya={class:"mt-[16px] flex justify-end"},va=ke({__name:"goods",setup(_){const B=d(!1);(()=>{let l="00",a="-1";localStorage.getItem("admin.userinfo")&&(l=JSON.parse(localStorage.getItem("admin.userinfo")).uid),localStorage.getItem("site.userinfo")&&(a=JSON.parse(localStorage.getItem("site.userinfo")).uid),l===a&&(B.value=!0)})();const M=d(),L=d(!1),ee=()=>{L.value=!1,m()},ae=async()=>{L.value=!0,M.value=!0},te=async()=>{oe(),z.push("/setting/export")},oe=(l=1)=>{if(e.searchParam.start_sale_num&&!f.digit.test(e.searchParam.start_sale_num)){c({type:"warning",message:`${o("startSaleNumTips")}`});return}if(e.searchParam.end_sale_num&&!f.digit.test(e.searchParam.end_sale_num)){c({type:"warning",message:`${o("endSaleNumTips")}`});return}if(Number(e.searchParam.start_sale_num)>Number(e.searchParam.end_sale_num)){c({type:"warning",message:`${o("shopSaleNumTips")}`});return}if(e.searchParam.start_price&&!f.digit.test(e.searchParam.start_price)){c({type:"warning",message:`${o("startPriceTips")}`});return}if(e.searchParam.end_price&&!f.digit.test(e.searchParam.end_price)){c({type:"warning",message:`${o("endPriceTips")}`});return}if(Number(e.searchParam.start_price)>Number(e.searchParam.end_price)){c({type:"warning",message:`${o("shopPriceTips")}`});return}e.loading=!0,e.page=l;const a=X(e.searchParam);je({page:e.page,limit:e.limit,...a}).then(g=>{e.loading=!1,m()}).catch(()=>{e.loading=!1})},z=we();Ce().meta.title,d(!1);const e=x({page:1,limit:10,total:0,loading:!0,data:[],searchParam:{goods_name:"",goods_category:[],goods_type:"",brand_id:"",label_ids:"",start_sale_num:"",end_sale_num:"",start_price:"",end_price:"",status:"",order:"",sort:""}}),E=d(),f={number:/^\d{0,10}$/,digit:/^\d{0,10}(.?\d{0,2})$/},I=x([]),G=x([]),K=x([]),j=x([]);(()=>{Xe().then(l=>{const a=l.data;if(a){const g=[];a.forEach(P=>{const u=[];P.child_list&&P.child_list.forEach(S=>{u.push({value:S.category_id,label:S.category_name})}),g.push({value:P.category_id,label:P.category_name,children:u})}),I.splice(0,I.length,...g)}}),Ye().then(l=>{const a=l.data;if(a)for(const g in a)G.push(a[g])}),Qe({}).then(l=>{const a=l.data;a&&K.push(...a)}),He({}).then(l=>{const a=l.data;a&&j.push(...a)})})(),d(),d(!1);const se=d();d([]);const re=l=>{const a=z.resolve({path:"/preview/wap",query:{page:`/addon/shop/pages/goods/detail?goods_id=${l.goods_id}`}});window.open(a.href)},le=l=>{let a="";l.order=="ascending"?a="asc":l.order=="descending"&&(a="desc"),a&&(e.searchParam.order=l.prop,e.searchParam.sort=a),m()},m=(l=1)=>{if(e.searchParam.start_sale_num&&!f.digit.test(e.searchParam.start_sale_num)){c({type:"warning",message:`${o("startSaleNumTips")}`});return}if(e.searchParam.end_sale_num&&!f.digit.test(e.searchParam.end_sale_num)){c({type:"warning",message:`${o("endSaleNumTips")}`});return}if(Number(e.searchParam.start_sale_num)>Number(e.searchParam.end_sale_num)){c({type:"warning",message:`${o("shopSaleNumTips")}`});return}if(e.searchParam.start_price&&!f.digit.test(e.searchParam.start_price)){c({type:"warning",message:`${o("startPriceTips")}`});return}if(e.searchParam.end_price&&!f.digit.test(e.searchParam.end_price)){c({type:"warning",message:`${o("endPriceTips")}`});return}if(Number(e.searchParam.start_price)>Number(e.searchParam.end_price)){c({type:"warning",message:`${o("shopPriceTips")}`});return}e.loading=!0,e.page=l;const a=X(e.searchParam);We({page:e.page,limit:e.limit,...a}).then(g=>{e.loading=!1,e.data=g.data.data,e.total=g.data.total}).catch(()=>{e.loading=!1})};m();const q=d(null),ne=l=>{q.value.show(l)},J=d(null),ie=l=>{J.value.show(l)},de=d(null),pe=d([]);(()=>{qe().then(l=>{pe.value=l.data?l.data:[]})})();const ce=d(null),me=l=>{l&&(l.resetFields(),e.searchParam.start_price="",e.searchParam.end_price="",e.searchParam.start_sale_num="",e.searchParam.end_sale_num="",m())};return(l,a)=>{const g=Se,P=Te,u=Ne,S=$e,R=Ve,U=Le,T=Ie,ue=Re,W=Ue,_e=De,y=Fe,Y=k("EditPen"),H=Oe,ge=Ae,he=Be,fe=Ke,be=k("goods-stock-edit-popup"),Pe=k("goods-price-edit-popup"),ye=k("goods-spread-popup"),ve=k("goods-member-price-popup"),xe=Me;return p(),b("div",Ze,[s(W,{class:"box-card !border-none",shadow:"never"},{default:n(()=>[s(g,{type:"info",title:"说明:如有大量数据请分批导出或者联系管理员导出",closable:!1,"show-icon":""}),s(W,{class:"box-card !border-none my-[10px] table-search-wrap",shadow:"never"},{default:n(()=>[s(ue,{inline:!0,model:e.searchParam,ref_key:"searchFormRef",ref:E},{default:n(()=>[s(u,{label:r(o)("goodsName"),prop:"goods_name"},{default:n(()=>[s(P,{modelValue:e.searchParam.goods_name,"onUpdate:modelValue":a[0]||(a[0]=t=>e.searchParam.goods_name=t),modelModifiers:{trim:!0},placeholder:r(o)("goodsNamePlaceholder"),maxlength:"60"},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),s(u,{label:r(o)("goodsCategory"),prop:"goods_category"},{default:n(()=>[s(S,{modelValue:e.searchParam.goods_category,"onUpdate:modelValue":a[1]||(a[1]=t=>e.searchParam.goods_category=t),options:I,placeholder:r(o)("goodsCategoryPlaceholder"),clearable:"",props:{value:"value",label:"label",emitPath:!1}},null,8,["modelValue","options","placeholder"])]),_:1},8,["label"]),s(u,{label:r(o)("goodsType"),prop:"goods_type"},{default:n(()=>[s(U,{modelValue:e.searchParam.goods_type,"onUpdate:modelValue":a[2]||(a[2]=t=>e.searchParam.goods_type=t),placeholder:r(o)("goodsTypePlaceholder"),clearable:""},{default:n(()=>[(p(!0),b(D,null,F(G,t=>(p(),v(R,{key:t.type,label:t.name,value:t.type},null,8,["label","value"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"]),s(u,{label:r(o)("brand"),prop:"brand_id"},{default:n(()=>[s(U,{modelValue:e.searchParam.brand_id,"onUpdate:modelValue":a[3]||(a[3]=t=>e.searchParam.brand_id=t),placeholder:r(o)("brandPlaceholder"),clearable:""},{default:n(()=>[(p(!0),b(D,null,F(K,t=>(p(),v(R,{key:t.brand_id,label:t.brand_name,value:t.brand_id},null,8,["label","value"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"]),s(u,{label:r(o)("labelIds"),prop:"label_ids"},{default:n(()=>[s(U,{modelValue:e.searchParam.label_ids,"onUpdate:modelValue":a[4]||(a[4]=t=>e.searchParam.label_ids=t),placeholder:r(o)("labelIdsPlaceholder"),clearable:""},{default:n(()=>[(p(!0),b(D,null,F(j,t=>(p(),v(R,{key:t.label_id,label:t.label_name,value:t.label_id},null,8,["label","value"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"]),s(u,{label:r(o)("saleNum"),prop:"sale_num"},{default:n(()=>[i("div",ea,[w(i("input",{type:"text",placeholder:r(o)("startSaleNumPlaceholder"),maxlength:"10","onUpdate:modelValue":a[5]||(a[5]=t=>e.searchParam.start_sale_num=t),onKeyup:a[6]||(a[6]=t=>r(N)(t))},null,40,aa),[[$,e.searchParam.start_sale_num,void 0,{trim:!0}]]),ta,w(i("input",{type:"text",placeholder:r(o)("endSaleNumPlaceholder"),maxlength:"10","onUpdate:modelValue":a[7]||(a[7]=t=>e.searchParam.end_sale_num=t),onKeyup:a[8]||(a[8]=t=>r(N)(t))},null,40,oa),[[$,e.searchParam.end_sale_num,void 0,{trim:!0}]])])]),_:1},8,["label"]),s(u,{label:r(o)("skuPrice"),prop:"sku_price"},{default:n(()=>[i("div",sa,[w(i("input",{type:"text",placeholder:r(o)("startPricePlaceholder"),maxlength:"10","onUpdate:modelValue":a[9]||(a[9]=t=>e.searchParam.start_price=t),onKeyup:a[10]||(a[10]=t=>r(N)(t))},null,40,ra),[[$,e.searchParam.start_price,void 0,{trim:!0}]]),la,w(i("input",{type:"text",placeholder:r(o)("endPricePlaceholder"),maxlength:"10","onUpdate:modelValue":a[11]||(a[11]=t=>e.searchParam.end_price=t),onKeyup:a[12]||(a[12]=t=>r(N)(t))},null,40,na),[[$,e.searchParam.end_price,void 0,{trim:!0}]])])]),_:1},8,["label"]),s(u,null,{default:n(()=>[s(T,{onClick:a[13]||(a[13]=t=>me(E.value))},{default:n(()=>[V(h(r(o)("reset")),1)]),_:1}),s(T,{type:"primary",onClick:a[14]||(a[14]=t=>m())},{default:n(()=>[V(h(r(o)("search")),1)]),_:1}),B.value==!0?(p(),v(T,{key:0,plain:"",type:"primary",onClick:a[15]||(a[15]=t=>ae(E.value))},{default:n(()=>[V("全部导出")]),_:1})):O("",!0),s(T,{type:"primary",onClick:a[16]||(a[16]=t=>te(E.value))},{default:n(()=>[V("列表导出")]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),i("div",ia,[w((p(),v(ge,{data:e.data,size:"large",ref_key:"goodsListTableRef",ref:se,onSortChange:le},{empty:n(()=>[i("span",null,h(e.loading?"":r(o)("emptyData")),1)]),default:n(()=>[s(y,{prop:"goods_id",label:r(o)("goodsInfo"),"min-width":"300"},{default:n(({row:t})=>[i("div",{class:"flex items-center cursor-pointer",onClick:Q=>re(t)},[i("div",pa,[t.goods_cover_thumb_small?(p(),v(_e,{key:0,class:"w-[70px] h-[70px]",src:r(Ee)(t.goods_cover_thumb_small),fit:"contain"},{error:n(()=>[ca]),_:2},1032,["src"])):(p(),b("img",ma))]),i("div",ua,[i("span",{title:t.goods_name,class:"multi-hidden"},h(t.goods_name),9,_a),i("span",ga,h(t.goods_type_name),1)])],8,da)]),_:1},8,["label"]),s(y,{prop:"price",label:r(o)("skuPrice"),"min-width":"120",align:"right",sortable:"custom"},{default:n(({row:t})=>[i("div",{class:"cursor-pointer price-wrap",onClick:Q=>ne(t)},[i("span",null,"￥"+h(t.goodsSku.price),1),s(H,{class:"icon-wrap ml-[5px] invisible"},{default:n(()=>[s(Y)]),_:1})],8,ha)]),_:1},8,["label"]),s(y,{prop:"stock",label:r(o)("stock"),"min-width":"120",sortable:"custom"},{default:n(({row:t})=>[i("div",{class:"cursor-pointer stock-wrap",onClick:Q=>ie(t)},[i("span",null,h(t.stock),1),s(H,{class:"icon-wrap ml-[5px] invisible"},{default:n(()=>[s(Y)]),_:1})],8,fa)]),_:1},8,["label"]),s(y,{prop:"sale_num",label:r(o)("saleNum"),"min-width":"100",sortable:"custom"},null,8,["label"]),s(y,{prop:"status",label:r(o)("status"),"min-width":"100"},{default:n(({row:t})=>[t.status==1?(p(),b("div",ba,h(r(o)("statusOn")),1)):O("",!0),t.status==0?(p(),b("div",Pa,h(r(o)("statusOff")),1)):O("",!0)]),_:1},8,["label"]),s(y,{prop:"create_time",label:r(o)("createTime"),"min-width":"150",sortable:"custom"},{default:n(({row:t})=>[i("div",null,h(t.create_time),1)]),_:1},8,["label"])]),_:1},8,["data"])),[[xe,e.loading]]),i("div",ya,[s(he,{"current-page":e.page,"onUpdate:current-page":a[17]||(a[17]=t=>e.page=t),"page-size":e.limit,"onUpdate:page-size":a[18]||(a[18]=t=>e.limit=t),layout:"total, sizes, prev, pager, next, jumper",total:e.total,onSizeChange:a[19]||(a[19]=t=>m()),onCurrentChange:m},null,8,["current-page","page-size","total"])])])]),_:1}),s(fe,{ref_key:"exportSureDialog",ref:M,show:L.value,type:"spdr_export_goods",searchParam:e.searchParam,onClose:ee},null,8,["show","searchParam"]),s(be,{ref_key:"goodsStockEditPopupRef",ref:J,onLoad:m},null,512),s(Pe,{ref_key:"goodsPriceEditPopupRef",ref:q,onLoad:m},null,512),s(ye,{ref_key:"goodsSpreadPopupRef",ref:de},null,512),s(ve,{ref_key:"memberPricePopupRef",ref:ce,onLoad:m},null,512)])}}});const et=Je(va,[["__scopeId","data-v-3faa44ce"]]);export{et as default};
