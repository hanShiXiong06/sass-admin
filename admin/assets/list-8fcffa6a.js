import{d as S,x as R,n as $,r as D,f as L,h as m,c as g,e as l,w as r,a as _,t as n,u as a,i,q as e,R as U,s as b,B as f,a5 as j,E as I,K as M,L as q,M as K,a7 as W,ad as Y,al as G,ae as H,W as J,Y as O}from"./index-904cb7a2.js";/* empty css                   *//* empty css                      *//* empty css                 *//* empty css               *//* empty css                  *//* empty css                  *//* empty css                     *//* empty css                  *//* empty css                 *//* empty css                    */import"./el-tooltip-4ed993c7.js";/* empty css                        *//* empty css                *//* empty css                */import"./el-form-item-4ed993c7.js";/* empty css                  */import{b as Q,d as X}from"./shop_address-57555de0.js";const Z={class:"main-container"},ee={class:"flex justify-between items-center"},te={class:"text-page-title"},ae={class:"mt-[10px]"},le={key:0},oe={key:1},se={class:"mt-[16px] flex justify-end"},Ae=S({__name:"list",setup(re){const E=R().meta.title,t=$({page:1,limit:10,total:0,loading:!0,data:[],searchParam:{mobile:"",full_address:""}}),v=D(),p=(d=1)=>{t.loading=!0,t.page=d,Q({page:t.page,limit:t.limit,...t.searchParam}).then(s=>{t.loading=!1,t.data=s.data.data,t.total=s.data.total}).catch(()=>{t.loading=!1})};p();const y=L(),w=()=>{y.push("/phone_shop/order/address/edit")},A=d=>{y.push("/phone_shop/order/address/edit?id="+d.id)},P=d=>{j.confirm(e("shopAddressDeleteTips"),e("warning"),{confirmButtonText:e("confirm"),cancelButtonText:e("cancel"),type:"warning"}).then(()=>{X(d).then(()=>{p()}).catch(()=>{})})},V=d=>{d&&(d.resetFields(),p())};return(d,s)=>{const u=I,x=M,h=q,B=K,k=W,c=Y,C=G,T=H,z=J,F=O;return m(),g("div",Z,[l(k,{class:"box-card !border-none",shadow:"never"},{default:r(()=>[_("div",ee,[_("span",te,n(a(E)),1),l(u,{type:"primary",onClick:w},{default:r(()=>[i(n(a(e)("addShopAddress")),1)]),_:1})]),l(k,{class:"box-card !border-none my-[10px] table-search-wrap",shadow:"never"},{default:r(()=>[l(B,{inline:!0,model:t.searchParam,ref_key:"searchFormRef",ref:v},{default:r(()=>[l(h,{label:a(e)("mobile"),prop:"mobile"},{default:r(()=>[l(x,{modelValue:t.searchParam.mobile,"onUpdate:modelValue":s[0]||(s[0]=o=>t.searchParam.mobile=o),placeholder:a(e)("mobilePlaceholder")},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),l(h,{label:a(e)("fullAddress"),prop:"full_address"},{default:r(()=>[l(x,{modelValue:t.searchParam.full_address,"onUpdate:modelValue":s[1]||(s[1]=o=>t.searchParam.full_address=o),placeholder:a(e)("fullAddressPlaceholder")},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),l(h,null,{default:r(()=>[l(u,{type:"primary",onClick:s[2]||(s[2]=o=>p())},{default:r(()=>[i(n(a(e)("search")),1)]),_:1}),l(u,{onClick:s[3]||(s[3]=o=>V(v.value))},{default:r(()=>[i(n(a(e)("reset")),1)]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),_("div",ae,[U((m(),b(T,{data:t.data,size:"large"},{empty:r(()=>[_("span",null,n(t.loading?"":a(e)("emptyData")),1)]),default:r(()=>[l(c,{prop:"contact_name",label:a(e)("contactName"),"min-width":"120"},null,8,["label"]),l(c,{prop:"mobile",label:a(e)("mobile"),"min-width":"120"},null,8,["label"]),l(c,{prop:"full_address",label:a(e)("fullAddress"),"min-width":"120","show-overflow-tooltip":!0},null,8,["label"]),l(c,{prop:"is_delivery_address",label:a(e)("addressType"),"min-width":"120",align:"left"},{default:r(({row:o})=>[o.is_delivery_address?(m(),g("div",le,[i(n(a(e)("deliveryAddress"))+" ",1),o.is_default_delivery?(m(),b(C,{key:0,size:"small"},{default:r(()=>[i(n(a(e)("default")),1)]),_:1})):f("",!0)])):f("",!0),o.is_refund_address?(m(),g("div",oe,[i(n(a(e)("refundAddress"))+" ",1),o.is_default_refund?(m(),b(C,{key:0,size:"small"},{default:r(()=>[i(n(a(e)("default")),1)]),_:1})):f("",!0)])):f("",!0)]),_:1},8,["label"]),l(c,{label:a(e)("operation"),fixed:"right","min-width":"120",align:"right"},{default:r(({row:o})=>[l(u,{type:"primary",link:"",onClick:N=>A(o)},{default:r(()=>[i(n(a(e)("edit")),1)]),_:2},1032,["onClick"]),l(u,{type:"primary",link:"",onClick:N=>P(o.id)},{default:r(()=>[i(n(a(e)("delete")),1)]),_:2},1032,["onClick"])]),_:1},8,["label"])]),_:1},8,["data"])),[[F,t.loading]]),_("div",se,[l(z,{"current-page":t.page,"onUpdate:current-page":s[4]||(s[4]=o=>t.page=o),"page-size":t.limit,"onUpdate:page-size":s[5]||(s[5]=o=>t.limit=o),layout:"total, sizes, prev, pager, next, jumper",total:t.total,onSizeChange:s[6]||(s[6]=o=>p()),onCurrentChange:p},null,8,["current-page","page-size","total"])])])]),_:1})])}}});export{Ae as default};
