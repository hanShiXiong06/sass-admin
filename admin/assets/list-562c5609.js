import{d as oe,y as se,q as F,r as E,f as le,h as g,c as T,e as l,w as n,a as i,t as m,u as s,i as u,s as o,R as P,bS as V,b6 as w,v,B as re,C as x,U as f,a3 as ne,a5 as ie,ap as de,E as me,K as pe,L as ce,bF as ue,bR as _e,M as ge,a7 as he,ax as fe,ay as be,J as ye,ak as Pe,ac as ve,ad as xe,W as ke,Y as Ce}from"./index-0e396751.js";/* empty css                   *//* empty css                      *//* empty css                 *//* empty css               *//* empty css                  *//* empty css                  *//* empty css                     *//* empty css                  *//* empty css                 *//* empty css                    */import"./el-tooltip-4ed993c7.js";/* empty css                        *//* empty css                 *//* empty css                        *//* empty css                    *//* empty css                *//* empty css                *//* empty css                       *//* empty css                  *//* empty css                          *//* empty css                 */import"./el-form-item-4ed993c7.js";import{_ as G}from"./goods_default-665e448a.js";import{g as Ee}from"./category-9c4c9137.js";import{f as Te,h as Ve,i as we,j as $e}from"./goods-e8b43505.js";import{_ as Ne}from"./goods-spread-popup.vue_vue_type_script_setup_true_lang-454fc018.js";import{a as Se}from"./member-fcb60d7e.js";import{_ as Ue}from"./goods-member-price-popup.vue_vue_type_script_setup_true_lang-1fadf538.js";/* empty css                  *//* empty css                   */import"./browser-a1ac24ac.js";/* empty css                       */const De={class:"main-container"},Le={class:"flex justify-between items-center"},Re={class:"text-page-title"},Me={class:"region-input"},Be=["placeholder"],Fe=i("span",{class:"separator"},"-",-1),Ge=["placeholder"],Ie={class:"region-input"},je=["placeholder"],ze=i("span",{class:"separator"},"-",-1),Ke=["placeholder"],Ye={class:"mt-[10px]"},Ae={class:"flex items-center"},He={class:"w-[60px] max-h-[60px]"},Oe={class:"min-w-[60px] h-[60px] flex items-center justify-center"},qe=i("div",{class:"image-slot"},[i("img",{class:"w-[60px] h-[60px]",src:G})],-1),Je={key:1,class:"w-[60px] h-[60px]",src:G,fit:"contain"},We={class:"ml-2"},Qe=["title"],Xe={key:0},Ze={key:1},ea={class:"mt-[16px] flex justify-end"},Fa=oe({__name:"list",setup(aa){const I=se().meta.title,a=F({page:1,limit:10,total:0,loading:!0,data:[],searchParam:{goods_name:"",goods_category:"",status:"",create_time:"",start_sale_num:"",end_sale_num:"",start_price:"",end_price:"",order:"",sort:""}}),S=E(),$=F([]);(async(r=null)=>{Ee().then(t=>{const d=t.data;if(d){const y=[];d.forEach(p=>{const k=[];p.children&&p.children.forEach(C=>{k.push({value:C.category_id,label:C.category_name})}),y.push({value:p.category_id,label:p.category_name,children:k})}),$.splice(0,$.length,...y)}})})();const b={required:/[\S]+/,number:/^\d{0,10}$/,digit:/^\d{0,10}(.?\d{0,2})$/,special:/^\d{0,10}(.?\d{0,3})$/},c=(r=1)=>{if(a.searchParam.start_sale_num&&!b.digit.test(a.searchParam.start_sale_num)){f({type:"warning",message:`${o("startSaleNumTips")}`});return}if(a.searchParam.end_sale_num&&!b.digit.test(a.searchParam.end_sale_num)){f({type:"warning",message:`${o("endSaleNumTips")}`});return}if(Number(a.searchParam.start_sale_num)>Number(a.searchParam.end_sale_num)){f({type:"warning",message:`${o("o2oSaleNumTips")}`});return}if(a.searchParam.start_price&&!b.digit.test(a.searchParam.start_price)){f({type:"warning",message:`${o("startPriceTips")}`});return}if(a.searchParam.end_price&&!b.digit.test(a.searchParam.end_price)){f({type:"warning",message:`${o("endPriceTips")}`});return}if(Number(a.searchParam.start_price)>Number(a.searchParam.end_price)){f({type:"warning",message:`${o("o2oPriceTips")}`});return}a.loading=!0,a.page=r;const t=ne(a.searchParam);Te({page:a.page,limit:a.limit,...t}).then(d=>{a.loading=!1,a.data=d.data.data,a.total=d.data.total}).catch(()=>{a.loading=!1})};c();const U=le(),j=r=>{let t="";r.order=="ascending"?t="asc":r.order=="descending"&&(t="desc"),t&&(a.searchParam.order=r.prop,a.searchParam.sort=t),c()},z=()=>{U.push("/o2o/goods/edit")},K=r=>{U.push("/o2o/goods/edit?id="+r.goods_id)},D=E(null),Y=r=>{D.value.show(r)},A=r=>{ie.confirm(o("o2oGoodsDeleteTips"),o("warning"),{confirmButtonText:o("confirm"),cancelButtonText:o("cancel"),type:"warning"}).then(()=>{Ve(r).then(()=>{c()}).catch(()=>{})})},L=(r,t)=>{we({goods_id:r.goods_id,status:t}).then(()=>{c()})},H=de((r,t)=>{if(isNaN(r)||!b.number.test(r)){f({type:"warning",message:`${o("sortTips")}`});return}$e({goods_id:t.goods_id,sort:r}).then(d=>{})}),O=r=>{a.searchParam.status=r,c()},q=r=>{r&&(r.resetFields(),a.searchParam.end_sale_num="",a.searchParam.end_price="",c())},R=E([]);(()=>{Se().then(r=>{R.value=r.data?r.data:[]})})();const M=E(null),J=r=>{M.value.show(r,R.value)};return(r,t)=>{const d=me,y=pe,p=ce,k=ue,C=_e,W=ge,B=he,N=fe,Q=be,X=ye,Z=Pe,h=ve,ee=xe,ae=ke,te=Ce;return g(),T("div",De,[l(B,{class:"box-card !border-none",shadow:"never"},{default:n(()=>[i("div",Le,[i("span",Re,m(s(I)),1),l(d,{type:"primary",class:"w-[100px]",onClick:z},{default:n(()=>[u(m(s(o)("addGoods")),1)]),_:1})]),l(B,{class:"box-card !border-none my-[10px] table-search-wrap",shadow:"never"},{default:n(()=>[l(W,{inline:!0,model:a.searchParam,ref_key:"searchFormRef",ref:S},{default:n(()=>[l(p,{label:s(o)("goodsName"),prop:"goods_name"},{default:n(()=>[l(y,{modelValue:a.searchParam.goods_name,"onUpdate:modelValue":t[0]||(t[0]=e=>a.searchParam.goods_name=e),modelModifiers:{trim:!0},placeholder:s(o)("goodsNamePlaceholder")},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),l(p,{label:s(o)("categoryId"),prop:"goods_category"},{default:n(()=>[l(k,{class:"input-width",modelValue:a.searchParam.goods_category,"onUpdate:modelValue":t[1]||(t[1]=e=>a.searchParam.goods_category=e),options:$,clearable:"",props:{value:"value",label:"label",emitPath:!1}},null,8,["modelValue","options"])]),_:1},8,["label"]),l(p,{label:s(o)("createTime"),prop:"create_time"},{default:n(()=>[l(C,{modelValue:a.searchParam.create_time,"onUpdate:modelValue":t[2]||(t[2]=e=>a.searchParam.create_time=e),type:"datetimerange","value-format":"YYYY-MM-DD HH:mm:ss","start-placeholder":s(o)("startDate"),"end-placeholder":s(o)("endDate")},null,8,["modelValue","start-placeholder","end-placeholder"])]),_:1},8,["label"]),l(p,{label:s(o)("saleNum"),prop:"start_sale_num"},{default:n(()=>[i("div",Me,[P(i("input",{type:"text",placeholder:s(o)("startSaleNumPlaceholder"),maxlength:"10","onUpdate:modelValue":t[3]||(t[3]=e=>a.searchParam.start_sale_num=e),onKeyup:t[4]||(t[4]=e=>s(V)(e))},null,40,Be),[[w,a.searchParam.start_sale_num]]),Fe,P(i("input",{type:"text",placeholder:s(o)("endSaleNumPlaceholder"),maxlength:"10","onUpdate:modelValue":t[5]||(t[5]=e=>a.searchParam.end_sale_num=e),onKeyup:t[6]||(t[6]=e=>s(V)(e))},null,40,Ge),[[w,a.searchParam.end_sale_num]])])]),_:1},8,["label"]),l(p,{label:s(o)("skuPrice"),prop:"start_price"},{default:n(()=>[i("div",Ie,[P(i("input",{type:"text",placeholder:s(o)("startPricePlaceholder"),maxlength:"10","onUpdate:modelValue":t[7]||(t[7]=e=>a.searchParam.start_price=e),onKeyup:t[8]||(t[8]=e=>s(V)(e))},null,40,je),[[w,a.searchParam.start_price]]),ze,P(i("input",{type:"text",placeholder:s(o)("endPricePlaceholder"),maxlength:"10","onUpdate:modelValue":t[9]||(t[9]=e=>a.searchParam.end_price=e),onKeyup:t[10]||(t[10]=e=>s(V)(e))},null,40,Ke),[[w,a.searchParam.end_price]])])]),_:1},8,["label"]),l(p,null,{default:n(()=>[l(d,{type:"primary",onClick:t[11]||(t[11]=e=>c())},{default:n(()=>[u(m(s(o)("search")),1)]),_:1}),l(d,{onClick:t[12]||(t[12]=e=>q(S.value))},{default:n(()=>[u(m(s(o)("reset")),1)]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),l(Q,{modelValue:a.searchParam.status,"onUpdate:modelValue":t[13]||(t[13]=e=>a.searchParam.status=e),class:"goods-tabs",onTabChange:O},{default:n(()=>[l(N,{label:s(o)("all"),name:""},null,8,["label"]),l(N,{label:s(o)("statusOn"),name:"1"},null,8,["label"]),l(N,{label:s(o)("statusOff"),name:"0"},null,8,["label"])]),_:1},8,["modelValue"]),i("div",Ye,[P((g(),v(ee,{data:a.data,size:"large",ref:"goodsListTableRef",onSortChange:j},{empty:n(()=>[i("span",null,m(a.loading?"":s(o)("emptyData")),1)]),default:n(()=>[l(h,{label:s(o)("goodsInfo"),"show-overflow-tooltip":!0,"min-width":"240",align:"left"},{default:n(({row:e})=>[i("div",Ae,[i("div",He,[i("div",Oe,[e.goods_cover?(g(),v(X,{key:0,class:"w-[60px] h-[60px]",src:s(re)(e.goods_cover),fit:"contain"},{error:n(()=>[qe]),_:2},1032,["src"])):(g(),T("img",Je))])]),i("div",We,[i("div",null,[i("a",{href:"javascript:;",class:"flex-1 multi-hidden",title:e.goods_name},m(e.goods_name),9,Qe)]),i("div",null,[l(Z,null,{default:n(()=>[u(m(e.buy_type_name),1)]),_:2},1024)])])])]),_:1},8,["label"]),l(h,{prop:"price",label:s(o)("price"),"min-width":"120",sortable:"custom"},{default:n(({row:e})=>[i("span",null,"￥"+m(e.price),1)]),_:1},8,["label"]),l(h,{prop:"sale_num",label:s(o)("saleNum"),"min-width":"120",sortable:"custom"},null,8,["label"]),l(h,{prop:"status",label:s(o)("status"),"min-width":"120"},{default:n(({row:e})=>[e.status==1?(g(),T("span",Xe,m(s(o)("tooUp")),1)):x("",!0),e.status==0?(g(),T("span",Ze,m(s(o)("tooDown")),1)):x("",!0)]),_:1},8,["label"]),l(h,{prop:"sort",label:s(o)("sort"),"min-width":"120",sortable:"custom"},{default:n(({row:e})=>[l(y,{modelValue:e.sort,"onUpdate:modelValue":_=>e.sort=_,class:"!w-[70px]",maxlength:"10",onInput:_=>s(H)(_,e)},null,8,["modelValue","onUpdate:modelValue","onInput"])]),_:1},8,["label"]),l(h,{prop:"create_time",label:s(o)("createTime"),"min-width":"150"},null,8,["label"]),l(h,{label:s(o)("operation"),fixed:"right",align:"right","min-width":"120"},{default:n(({row:e})=>[l(d,{type:"primary",link:"",onClick:_=>Y(e)},{default:n(()=>[u(m(s(o)("spreadGoods")),1)]),_:2},1032,["onClick"]),e.status==0?(g(),v(d,{key:0,type:"primary",link:"",onClick:_=>L(e,1)},{default:n(()=>[u(m(s(o)("up")),1)]),_:2},1032,["onClick"])):x("",!0),e.status==1?(g(),v(d,{key:1,type:"primary",link:"",onClick:_=>L(e,0)},{default:n(()=>[u(m(s(o)("down")),1)]),_:2},1032,["onClick"])):x("",!0),e.buy_type=="buy"?(g(),v(d,{key:2,type:"primary",link:"",onClick:_=>J(e)},{default:n(()=>[u(m(s(o)("memberPrice")),1)]),_:2},1032,["onClick"])):x("",!0),l(d,{type:"primary",link:"",onClick:_=>K(e)},{default:n(()=>[u(m(s(o)("edit")),1)]),_:2},1032,["onClick"]),l(d,{type:"primary",link:"",onClick:_=>A(e.goods_id)},{default:n(()=>[u(m(s(o)("delete")),1)]),_:2},1032,["onClick"])]),_:1},8,["label"])]),_:1},8,["data"])),[[te,a.loading]]),i("div",ea,[l(ae,{"current-page":a.page,"onUpdate:current-page":t[14]||(t[14]=e=>a.page=e),"page-size":a.limit,"onUpdate:page-size":t[15]||(t[15]=e=>a.limit=e),layout:"total, sizes, prev, pager, next, jumper",total:a.total,onSizeChange:t[16]||(t[16]=e=>c()),onCurrentChange:c},null,8,["current-page","page-size","total"])])])]),_:1}),l(Ne,{ref_key:"goodsSpreadPopupRef",ref:D},null,512),l(Ue,{ref_key:"memberPricePopupRef",ref:M,onLoad:c},null,512)])}}});export{Fa as default};
