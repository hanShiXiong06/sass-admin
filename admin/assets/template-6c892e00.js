import{d as S,y as F,f as V,q as $,r as R,bO as j,h as b,c as D,e as o,w as i,a as s,u as a,t as p,s as t,i as d,R as L,v as M,bP as U,a5 as q,E as I,K,L as O,M as W,a7 as Y,ac as A,ad as G,W as H,Y as J}from"./index-0e396751.js";/* empty css                   *//* empty css                      *//* empty css                 *//* empty css               *//* empty css                  *//* empty css                  *//* empty css                     *//* empty css                  *//* empty css                 *//* empty css                    */import"./el-tooltip-4ed993c7.js";/* empty css                        *//* empty css                *//* empty css                */import"./el-form-item-4ed993c7.js";/* empty css                  */import{w as Q,x as X}from"./delivery-fe1f6e47.js";const Z={class:"main-container"},ee={class:"flex justify-between items-center"},te={class:"detail-head !m-0"},ae=s("span",{class:"iconfont iconxiangzuojiantou !text-xs"},null,-1),le={class:"ml-[1px]"},oe=s("span",{class:"adorn"},"|",-1),ne={class:"right"},ie={class:"mt-[10px]"},se={class:"mt-[16px] flex justify-end"},Ee=S({__name:"template",setup(re){const v=F(),u=V(),y=v.meta.title,e=$({page:1,limit:10,total:0,loading:!0,data:[],searchParam:{template_name:""}}),g=R(),m=(r=1)=>{e.loading=!0,e.page=r,Q({page:e.page,limit:e.limit,...e.searchParam}).then(l=>{e.loading=!1,e.data=l.data.data,e.total=l.data.total,U(e.page,e.limit,e.searchParam)}).catch(()=>{e.loading=!1})};m(j(e.searchParam).page);const x=()=>{u.push({path:"/shop/order/shipping/template_edit"})},T=r=>{u.push({path:"/shop/order/shipping/template_edit",query:{id:r.template_id}})},C=r=>{q.confirm(t("templateDeleteTips"),t("warning"),{confirmButtonText:t("confirm"),cancelButtonText:t("cancel"),type:"warning"}).then(()=>{X(r).then(()=>{m()}).catch(()=>{})})},P=r=>{r&&(r.resetFields(),m())};return(r,l)=>{const c=I,k=K,h=O,w=W,f=Y,_=A,E=G,B=H,N=J;return b(),D("div",Z,[o(f,{class:"box-card !border-none",shadow:"never"},{default:i(()=>[s("div",ee,[s("div",te,[s("div",{class:"left",onClick:l[0]||(l[0]=n=>a(u).push("/shop/order/delivery"))},[ae,s("span",le,p(a(t)("returnToPreviousPage")),1)]),oe,s("span",ne,p(a(y)),1)]),o(c,{type:"primary",onClick:x},{default:i(()=>[d(p(a(t)("addTemplate")),1)]),_:1})]),o(f,{class:"box-card !border-none my-[10px] table-search-wrap",shadow:"never"},{default:i(()=>[o(w,{inline:!0,model:e.searchParam,ref_key:"searchFormRef",ref:g},{default:i(()=>[o(h,{label:a(t)("templateName"),prop:"template_name"},{default:i(()=>[o(k,{modelValue:e.searchParam.template_name,"onUpdate:modelValue":l[1]||(l[1]=n=>e.searchParam.template_name=n),modelModifiers:{trim:!0},placeholder:a(t)("templateNamePlaceholder")},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),o(h,null,{default:i(()=>[o(c,{type:"primary",onClick:l[2]||(l[2]=n=>m())},{default:i(()=>[d(p(a(t)("search")),1)]),_:1}),o(c,{onClick:l[3]||(l[3]=n=>P(g.value))},{default:i(()=>[d(p(a(t)("reset")),1)]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),s("div",ie,[L((b(),M(E,{data:e.data,size:"large"},{empty:i(()=>[s("span",null,p(e.loading?"":a(t)("emptyData")),1)]),default:i(()=>[o(_,{prop:"template_name",label:a(t)("templateName"),"min-width":"120"},null,8,["label"]),o(_,{prop:"fee_type_name",label:a(t)("feeTypeName"),"min-width":"120"},null,8,["label"]),o(_,{label:a(t)("freeShipping"),"min-width":"120",align:"center"},{default:i(({row:n})=>[d(p(n.is_free_shipping?a(t)("open"):a(t)("close")),1)]),_:1},8,["label"]),o(_,{prop:"create_time",label:a(t)("createTime"),"min-width":"120"},null,8,["label"]),o(_,{label:a(t)("operation"),fixed:"right","min-width":"120",align:"right"},{default:i(({row:n})=>[o(c,{type:"primary",link:"",onClick:z=>T(n)},{default:i(()=>[d(p(a(t)("edit")),1)]),_:2},1032,["onClick"]),o(c,{type:"primary",link:"",onClick:z=>C(n.template_id)},{default:i(()=>[d(p(a(t)("delete")),1)]),_:2},1032,["onClick"])]),_:1},8,["label"])]),_:1},8,["data"])),[[N,e.loading]]),s("div",se,[o(B,{"current-page":e.page,"onUpdate:current-page":l[4]||(l[4]=n=>e.page=n),"page-size":e.limit,"onUpdate:page-size":l[5]||(l[5]=n=>e.limit=n),layout:"total, sizes, prev, pager, next, jumper",total:e.total,onSizeChange:l[6]||(l[6]=n=>m()),onCurrentChange:m},null,8,["current-page","page-size","total"])])])]),_:1})])}}});export{Ee as default};
