import{d as V,y as F,f as $,q as j,r as R,bO as D,h as g,c as b,e as t,w as s,a as i,u as o,t as m,s as a,i as _,R as L,v as M,B as U,C as I,bP as q,a5 as K,E as O,K as W,L as Y,M as A,a7 as G,ac as H,ad as J,W as Q,Y as X}from"./index-0e396751.js";/* empty css                   *//* empty css                      *//* empty css                 *//* empty css               *//* empty css                  *//* empty css                  *//* empty css                     *//* empty css                  *//* empty css                 *//* empty css                    */import"./el-tooltip-4ed993c7.js";/* empty css                        *//* empty css                *//* empty css                */import"./el-form-item-4ed993c7.js";/* empty css                  */import{g as Z,d as ee}from"./delivery-fe1f6e47.js";const ae={class:"main-container"},te={class:"flex justify-between items-center"},oe={class:"detail-head !m-0"},ne=i("span",{class:"iconfont iconxiangzuojiantou !text-xs"},null,-1),le={class:"ml-[1px]"},se=i("span",{class:"adorn"},"|",-1),ie={class:"right"},re={class:"mt-[10px]"},me={class:"w-[50px] h-[50px] flex items-center justify-center"},pe=["src"],ce={class:"mt-[16px] flex justify-end"},Se=V({__name:"company",setup(de){const v=F(),u=$(),x=v.meta.title,e=j({page:1,limit:10,total:0,loading:!0,data:[],searchParam:{company_name:"",logo:"",url:"",create_time:"",modify_time:""}}),h=R(),c=(r=1)=>{e.loading=!0,e.page=r,Z({page:e.page,limit:e.limit,...e.searchParam}).then(n=>{e.loading=!1,e.data=n.data.data,e.total=n.data.total,q(e.page,e.limit,e.searchParam)}).catch(()=>{e.loading=!1})};c(D(e.searchParam).page);const C=()=>{u.push("/shop/order/delivery/company_add")},w=r=>{u.push("/shop/order/delivery/company_edit?company_id="+r.company_id)},k=r=>{K.confirm(a("companyDeleteTips"),a("warning"),{confirmButtonText:a("confirm"),cancelButtonText:a("cancel"),type:"warning"}).then(()=>{ee(r).then(()=>{c()}).catch(()=>{})})},P=r=>{r&&(r.resetFields(),c())};return(r,n)=>{const d=O,E=W,f=Y,N=A,y=G,p=H,T=J,B=Q,z=X;return g(),b("div",ae,[t(y,{class:"box-card !border-none",shadow:"never"},{default:s(()=>[i("div",te,[i("div",oe,[i("div",{class:"left",onClick:n[0]||(n[0]=l=>o(u).push("/shop/order/delivery"))},[ne,i("span",le,m(o(a)("returnToPreviousPage")),1)]),se,i("span",ie,m(o(x)),1)]),t(d,{type:"primary",onClick:C},{default:s(()=>[_(m(o(a)("addCompany")),1)]),_:1})]),t(y,{class:"box-card !border-none my-[10px] table-search-wrap",shadow:"never"},{default:s(()=>[t(N,{inline:!0,model:e.searchParam,ref_key:"searchFormRef",ref:h},{default:s(()=>[t(f,{label:o(a)("companyName"),prop:"company_name"},{default:s(()=>[t(E,{modelValue:e.searchParam.company_name,"onUpdate:modelValue":n[1]||(n[1]=l=>e.searchParam.company_name=l),modelModifiers:{trim:!0},placeholder:o(a)("companyNamePlaceholder")},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),t(f,null,{default:s(()=>[t(d,{type:"primary",onClick:n[2]||(n[2]=l=>c())},{default:s(()=>[_(m(o(a)("search")),1)]),_:1}),t(d,{onClick:n[3]||(n[3]=l=>P(h.value))},{default:s(()=>[_(m(o(a)("reset")),1)]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),i("div",re,[L((g(),M(T,{data:e.data,size:"large"},{empty:s(()=>[i("span",null,m(e.loading?"":o(a)("emptyData")),1)]),default:s(()=>[t(p,{prop:"company_name",label:o(a)("companyName"),"min-width":"120"},null,8,["label"]),t(p,{prop:"logo",label:o(a)("logo"),"min-width":"120"},{default:s(({row:l})=>[i("div",me,[l.logo?(g(),b("img",{key:0,class:"max-w-[100%] max-h-[100%]",src:o(U)(l.logo)},null,8,pe)):I("",!0)])]),_:1},8,["label"]),t(p,{prop:"url",label:o(a)("url"),"min-width":"120"},null,8,["label"]),t(p,{prop:"express_no",label:o(a)("expressNo"),"min-width":"120"},null,8,["label"]),t(p,{prop:"express_no_electronic_sheet",label:o(a)("expressNoElectronicSheet"),"min-width":"120"},null,8,["label"]),t(p,{label:o(a)("electronicSheetSwitchName"),"min-width":"120"},{default:s(({row:l})=>[i("span",null,m(l.electronic_sheet_switch==1?"支持":"不支持"),1)]),_:1},8,["label"]),t(p,{label:o(a)("operation"),fixed:"right",align:"right","min-width":"120"},{default:s(({row:l})=>[t(d,{type:"primary",link:"",onClick:S=>w(l)},{default:s(()=>[_(m(o(a)("edit")),1)]),_:2},1032,["onClick"]),t(d,{type:"primary",link:"",onClick:S=>k(l.company_id)},{default:s(()=>[_(m(o(a)("delete")),1)]),_:2},1032,["onClick"])]),_:1},8,["label"])]),_:1},8,["data"])),[[z,e.loading]]),i("div",ce,[t(B,{"current-page":e.page,"onUpdate:current-page":n[4]||(n[4]=l=>e.page=l),"page-size":e.limit,"onUpdate:page-size":n[5]||(n[5]=l=>e.limit=l),layout:"total, sizes, prev, pager, next, jumper",total:e.total,onSizeChange:n[6]||(n[6]=l=>c()),onCurrentChange:c},null,8,["current-page","page-size","total"])])])]),_:1})])}}});export{Se as default};
