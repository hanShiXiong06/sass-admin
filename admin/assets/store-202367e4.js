import{d as N,x as R,n as S,r as V,f as $,h as x,c as L,e as t,w as n,a as r,u as o,t as i,q as a,i as c,R as j,s as D,A as I,a5 as M,E as U,K as q,L as A,M as J,a7 as K,J as W,ad as Y,ae as G,W as H,Y as O}from"./index-99f00cf3.js";/* empty css                   *//* empty css                      *//* empty css                 *//* empty css               *//* empty css                  *//* empty css                  *//* empty css                     *//* empty css                  *//* empty css                 *//* empty css                    */import"./el-tooltip-4ed993c7.js";/* empty css                        *//* empty css                 *//* empty css                        *//* empty css                *//* empty css                */import"./el-form-item-4ed993c7.js";/* empty css                  */import{q as Q,r as X}from"./delivery-4012edce.js";const Z=""+new URL("store_default-447f2c13.png",import.meta.url).href,ee={class:"main-container"},te={class:"flex justify-between items-center"},ae={class:"detail-head !m-0"},oe=r("span",{class:"iconfont iconxiangzuojiantou !text-xs"},null,-1),se={class:"ml-[1px]"},le=r("span",{class:"adorn"},"|",-1),ne={class:"right"},re={class:"mt-[10px]"},ie={class:"h-[50px] flex items-center"},de=r("div",{class:"image-slot"},[r("img",{class:"w-[50px] h-[50px]",src:Z})],-1),pe={class:"ml-[10px] text-[14px]"},me={class:"mt-[16px] flex justify-end"},Ve=N({__name:"store",setup(ce){const v=R().meta.title,e=S({page:1,limit:10,total:0,loading:!0,data:[],searchParam:{store_name:"",create_time:""}}),f=V(),p=(d=1)=>{e.loading=!0,e.page=d,Q({page:e.page,limit:e.limit,...e.searchParam}).then(s=>{e.loading=!1,e.data=s.data.data,e.total=s.data.total}).catch(()=>{e.loading=!1})};p();const u=$(),b=()=>{u.push("/phone_shop/order/delivery/store/edit")},y=d=>{u.push("/phone_shop/order/delivery/store/edit?id="+d.store_id)},w=d=>{M.confirm(a("storeDeleteTips"),a("warning"),{confirmButtonText:a("confirm"),cancelButtonText:a("cancel"),type:"warning"}).then(()=>{X(d).then(()=>{p()}).catch(()=>{})})},C=d=>{d&&(d.resetFields(),p())};return(d,s)=>{const _=U,k=q,g=A,E=J,h=K,T=W,m=Y,P=G,B=H,z=O;return x(),L("div",ee,[t(h,{class:"box-card !border-none",shadow:"never"},{default:n(()=>[r("div",te,[r("div",ae,[r("div",{class:"left",onClick:s[0]||(s[0]=l=>o(u).push("/phone_shop/order/delivery"))},[oe,r("span",se,i(o(a)("returnToPreviousPage")),1)]),le,r("span",ne,i(o(v)),1)]),t(_,{type:"primary",onClick:b},{default:n(()=>[c(i(o(a)("addStore")),1)]),_:1})]),t(h,{class:"box-card !border-none my-[10px] table-search-wrap",shadow:"never"},{default:n(()=>[t(E,{inline:!0,model:e.searchParam,ref_key:"searchFormRef",ref:f},{default:n(()=>[t(g,{label:o(a)("storeName"),prop:"store_name"},{default:n(()=>[t(k,{modelValue:e.searchParam.store_name,"onUpdate:modelValue":s[1]||(s[1]=l=>e.searchParam.store_name=l),modelModifiers:{trim:!0},placeholder:o(a)("storeNamePlaceholder")},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),t(g,null,{default:n(()=>[t(_,{type:"primary",onClick:s[2]||(s[2]=l=>p())},{default:n(()=>[c(i(o(a)("search")),1)]),_:1}),t(_,{onClick:s[3]||(s[3]=l=>C(f.value))},{default:n(()=>[c(i(o(a)("reset")),1)]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),r("div",re,[j((x(),D(P,{data:e.data,size:"large"},{empty:n(()=>[r("span",null,i(e.loading?"":o(a)("emptyData")),1)]),default:n(()=>[t(m,{label:o(a)("storeInfo"),"min-width":"170",align:"left"},{default:n(({row:l})=>[r("div",ie,[t(T,{class:"w-[50px] h-[50px]",src:o(I)(l.store_logo),fit:"contain"},{error:n(()=>[de]),_:2},1032,["src"]),r("p",pe,i(l.store_name),1)])]),_:1},8,["label"]),t(m,{prop:"store_mobile",label:o(a)("storeMobile"),"min-width":"120"},null,8,["label"]),t(m,{prop:"full_address",label:o(a)("fullAddress"),"min-width":"180"},null,8,["label"]),t(m,{prop:"trade_time",label:o(a)("tradeTime"),"min-width":"120"},null,8,["label"]),t(m,{label:o(a)("createTime"),"min-width":"120"},{default:n(({row:l})=>[c(i(l.create_time||""),1)]),_:1},8,["label"]),t(m,{label:o(a)("operation"),fixed:"right",align:"right","min-width":"120"},{default:n(({row:l})=>[t(_,{type:"primary",link:"",onClick:F=>y(l)},{default:n(()=>[c(i(o(a)("edit")),1)]),_:2},1032,["onClick"]),t(_,{type:"primary",link:"",onClick:F=>w(l.store_id)},{default:n(()=>[c(i(o(a)("delete")),1)]),_:2},1032,["onClick"])]),_:1},8,["label"])]),_:1},8,["data"])),[[z,e.loading]]),r("div",me,[t(B,{"current-page":e.page,"onUpdate:current-page":s[4]||(s[4]=l=>e.page=l),"page-size":e.limit,"onUpdate:page-size":s[5]||(s[5]=l=>e.limit=l),layout:"total, sizes, prev, pager, next, jumper",total:e.total,onSizeChange:s[6]||(s[6]=l=>p()),onCurrentChange:p},null,8,["current-page","page-size","total"])])])]),_:1})])}}});export{Ve as default};