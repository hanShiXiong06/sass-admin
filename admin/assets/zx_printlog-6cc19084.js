import{O as f,d as $,x as O,n as R,r as b,h as g,c as z,e as r,w as n,a as _,t as d,u as e,q as o,F as S,T as Y,s as k,i as c,R as N,a5 as U,ac as j,aD as Z,L as q,bR as W,E as A,M as G,a7 as H,ad as J,ae as K,W as Q,Y as X}from"./index-904cb7a2.js";/* empty css                   *//* empty css                      *//* empty css                 *//* empty css               *//* empty css                  *//* empty css                  *//* empty css                     *//* empty css                  *//* empty css                 *//* empty css                    */import"./el-tooltip-4ed993c7.js";/* empty css                        *//* empty css                *//* empty css                *//* empty css                  *//* empty css                       */import"./el-form-item-4ed993c7.js";import{_ as ee}from"./_plugin-vue_export-helper-c27b6911.js";function te(s){return f.get("zxprint/zx_printlog",{params:s})}function ae(s){return f.delete(`zxprint/zx_printlog/${s}`,{showErrorMessage:!0,showSuccessMessage:!0})}function oe(s){return f.post(`zxprint/print/${s}`,{showErrorMessage:!0,showSuccessMessage:!0})}function re(s){return f.get("zxprint/order_all",{params:s})}const le={class:"main-container"},ne={class:"flex justify-between items-center"},ie={class:"text-lg"},se={class:"mt-[10px]"},de={class:"mt-[16px] flex justify-end"},pe=$({__name:"zx_printlog",setup(s){const E=O().meta.title;let t=R({page:1,limit:10,total:0,loading:!0,data:[],searchParam:{order_id:"",create_time:[]}});const v=b();b([]);const p=(i=1)=>{t.loading=!0,t.page=i,te({page:t.page,limit:t.limit,...t.searchParam}).then(l=>{t.loading=!1,t.data=l.data.data,t.total=l.data.total}).catch(()=>{t.loading=!1})};p();const P=i=>{U.confirm(o("zxPrintlogDeleteTips"),o("warning"),{confirmButtonText:o("confirm"),cancelButtonText:o("cancel"),type:"warning"}).then(()=>{ae(i).then(()=>{p()}).catch(()=>{})})},C=i=>{oe(i).then(()=>{p()}).catch(()=>{})},w=b([]);(async()=>{w.value=await(await re({})).data})();const D=i=>{i&&(i.resetFields(),p())};return(i,l)=>{const T=j,L=Z,h=q,V=W,u=A,B=G,y=H,m=J,F=K,I=Q,M=X;return g(),z("div",le,[r(y,{class:"box-card !border-none",shadow:"never"},{default:n(()=>[_("div",ne,[_("span",ie,d(e(E)),1)]),r(y,{class:"box-card !border-none my-[10px] table-search-wrap",shadow:"never"},{default:n(()=>[r(B,{inline:!0,model:e(t).searchParam,ref_key:"searchFormRef",ref:v},{default:n(()=>[r(h,{label:e(o)("orderId"),prop:"order_id"},{default:n(()=>[r(L,{class:"w-[280px]",modelValue:e(t).searchParam.order_id,"onUpdate:modelValue":l[0]||(l[0]=a=>e(t).searchParam.order_id=a),clearable:"",placeholder:e(o)("orderIdPlaceholder")},{default:n(()=>[(g(!0),z(S,null,Y(w.value,(a,x)=>(g(),k(T,{key:x,label:a.order_id,value:a.order_id},null,8,["label","value"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"]),r(h,{label:e(o)("createTime"),prop:"create_time"},{default:n(()=>[r(V,{modelValue:e(t).searchParam.create_time,"onUpdate:modelValue":l[1]||(l[1]=a=>e(t).searchParam.create_time=a),type:"datetimerange",format:"YYYY-MM-DD hh:mm:ss","start-placeholder":e(o)("startDate"),"end-placeholder":e(o)("endDate")},null,8,["modelValue","start-placeholder","end-placeholder"])]),_:1},8,["label"]),r(h,null,{default:n(()=>[r(u,{type:"primary",onClick:l[2]||(l[2]=a=>p())},{default:n(()=>[c(d(e(o)("search")),1)]),_:1}),r(u,{onClick:l[3]||(l[3]=a=>D(v.value))},{default:n(()=>[c(d(e(o)("reset")),1)]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),_("div",se,[N((g(),k(F,{data:e(t).data,size:"large"},{empty:n(()=>[_("span",null,d(e(t).loading?"":e(o)("emptyData")),1)]),default:n(()=>[r(m,{prop:"id",label:e(o)("id"),"min-width":"120","show-overflow-tooltip":!0},null,8,["label"]),r(m,{prop:"order_id",label:e(o)("orderId"),"min-width":"120",align:"center","show-overflow-tooltip":!0},null,8,["label"]),r(m,{label:e(o)("status"),"min-width":"120",align:"center","show-overflow-tooltip":!0},{default:n(({row:a})=>[c(d(a.status==1?"已打印":"未打印"),1)]),_:1},8,["label"]),r(m,{label:e(o)("createTime"),"min-width":"180",align:"center","show-overflow-tooltip":!0},{default:n(({row:a})=>[c(d(a.create_time||""),1)]),_:1},8,["label"]),r(m,{label:e(o)("operation"),align:"center","min-width":"120"},{default:n(({row:a})=>[r(u,{type:"primary",link:"",onClick:x=>C(a.order_id)},{default:n(()=>[c(d(e(o)("print")),1)]),_:2},1032,["onClick"]),r(u,{type:"primary",link:"",onClick:x=>P(a.id)},{default:n(()=>[c(d(e(o)("delete")),1)]),_:2},1032,["onClick"])]),_:1},8,["label"])]),_:1},8,["data"])),[[M,e(t).loading]]),_("div",de,[r(I,{"current-page":e(t).page,"onUpdate:current-page":l[4]||(l[4]=a=>e(t).page=a),"page-size":e(t).limit,"onUpdate:page-size":l[5]||(l[5]=a=>e(t).limit=a),layout:"total, sizes, prev, pager, next, jumper",total:e(t).total,onSizeChange:l[6]||(l[6]=a=>p()),onCurrentChange:p},null,8,["current-page","page-size","total"])])])]),_:1})])}}});const Be=ee(pe,[["__scopeId","data-v-7ab630a3"]]);export{Be as default};
