import{d as O,r as p,y as q,f as K,q as W,h as b,v as C,w as l,R as N,c as Y,e,a as s,t as c,u as o,s as n,i as v,C as Z,b$ as A,aM as G,aN as H,a7 as J,K as Q,L as X,E as ee,M as te,ac as ae,ad as le,W as oe,bZ as se,Y as ne}from"./index-0e396751.js";/* empty css                   *//* empty css                  *//* empty css                   *//* empty css                      *//* empty css                 *//* empty css               *//* empty css                  *//* empty css                  *//* empty css                     *//* empty css                  *//* empty css                 *//* empty css                    */import"./el-tooltip-4ed993c7.js";/* empty css                        *//* empty css                *//* empty css                  */import"./el-form-item-4ed993c7.js";/* empty css                *//* empty css               *//* empty css               *//* empty css                     */import{i as ie,j as re}from"./marketing-c0187315.js";const ce={class:"main-container"},pe={class:"statistic-card"},de={class:"statistic-footer"},ue={class:"footer-item text-[14px] text-[#666]"},me={class:"statistic-card"},_e={class:"statistic-footer"},ve={class:"footer-item text-[14px] text-[#666]"},fe={class:"statistic-card"},be={class:"statistic-footer"},xe={class:"footer-item text-[14px] text-[#666]"},ge={class:"mt-[10px]"},he={class:"flex flex-col"},ye={class:"text-[12px] mt-[5px]"},Ce={class:"text-[12px] mt-[5px]"},we={class:"mt-[16px] flex justify-end"},He=O({__name:"coupon-collection",setup(ke,{expose:V}){const m=p(!1),x=p(!1);p(!1);let I="优惠券领取记录",f="";q();const R=K();p(!0),p(!0),p(!0);const T=r=>{m.value=!1},F=p("order"),z=p(null),a=W({page:1,limit:5,total:0,loading:!1,data:[],searchParam:{keywords:""}}),w=p(),u=p([]),_=()=>{a.loading=!0,ie({page:a.page,limit:a.limit,id:f,...a.searchParam}).then(r=>{a.loading=!1,a.data=r.data.data,a.total=r.data.total,console.log("tableData",a,f)}).catch(()=>{a.loading=!1}),re(f).then(r=>{u.value=r.data,x.value=!1}).catch(()=>{x.value=!1})},P=r=>{m.value=!1,R.push("/shop/order/detail?order_id="+r.trade_id)},B=r=>{r&&(r.resetFields(),_())};return V({showDialog:m,setFormData:async(r=null)=>{f=r.id,z.value=null,F.value="order",_()}}),(r,i)=>{const g=A,h=G,U=H,k=J,$=Q,E=X,y=ee,S=te,d=ae,j=le,M=oe,L=se,D=ne;return b(),C(L,{modelValue:m.value,"onUpdate:modelValue":i[6]||(i[6]=t=>m.value=t),title:o(I),direction:"rtl","before-close":T,class:"collection-detail-drawer"},{default:l(()=>[N((b(),Y("div",ce,[e(k,{class:"box-card !border-none",shadow:"never"},{default:l(()=>[e(U,{class:"flex"},{default:l(()=>[e(h,{span:8,class:"min-w-[100px]"},{default:l(()=>[s("div",pe,[e(g,{value:u.value.receive_count?Number.parseInt(u.value.receive_count):"0"},null,8,["value"]),s("div",de,[s("div",ue,[s("span",null,c(o(n)("receiveCount")),1)])])])]),_:1}),e(h,{span:8,class:"min-w-[100px]"},{default:l(()=>[s("div",me,[e(g,{value:u.value.receive_use_count?Number.parseInt(u.value.receive_use_count):"0"},null,8,["value"]),s("div",_e,[s("div",ve,[s("span",null,c(o(n)("receiveUseCount")),1)])])])]),_:1}),e(h,{span:8,class:"min-w-[100px]"},{default:l(()=>[s("div",fe,[e(g,{value:u.value.receive_expire_count?Number.parseInt(u.value.receive_expire_count):"0"},null,8,["value"]),s("div",be,[s("div",xe,[s("span",null,c(o(n)("receiveExpireCount")),1)])])])]),_:1})]),_:1})]),_:1}),e(k,{class:"box-card !border-none mb-[10px] table-search-wrap",shadow:"never"},{default:l(()=>[e(S,{inline:!0,model:a.searchParam,ref_key:"searchFormRef",ref:w},{default:l(()=>[e(E,{label:o(n)("memberInfo"),prop:"keywords"},{default:l(()=>[e($,{modelValue:a.searchParam.keywords,"onUpdate:modelValue":i[0]||(i[0]=t=>a.searchParam.keywords=t),modelModifiers:{trim:!0},class:"w-[240px]",placeholder:o(n)("memberInfoPlaceholder")},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),e(E,null,{default:l(()=>[e(y,{type:"primary",onClick:i[1]||(i[1]=t=>_())},{default:l(()=>[v(c(o(n)("search")),1)]),_:1}),e(y,{onClick:i[2]||(i[2]=t=>B(w.value))},{default:l(()=>[v(c(o(n)("reset")),1)]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),s("div",ge,[N((b(),C(j,{data:a.data,ref:"tableRef",size:"large"},{empty:l(()=>[s("span",null,c(a.loading?"":o(n)("emptyData")),1)]),default:l(()=>[e(d,{prop:"title",label:o(n)("collectionTtitle")},null,8,["label"]),e(d,{label:o(n)("userName")},{default:l(({row:t})=>[s("div",he,[s("span",ye,c(t.member.nickname),1),s("span",Ce,c(t.member.mobile),1)])]),_:1},8,["label"]),e(d,{prop:"receive_type_name",label:o(n)("collectionReceiveType")},null,8,["label"]),e(d,{prop:"create_time",label:o(n)("createTime")},null,8,["label"]),e(d,{prop:"expire_time",label:o(n)("expireTime")},null,8,["label"]),e(d,{prop:"status_name",label:o(n)("status")},null,8,["label"]),e(d,{label:o(n)("useTime")},{default:l(({row:t})=>[v(c(t.use_time||"--"),1)]),_:1},8,["label"]),e(d,{label:o(n)("validity")},{default:l(({row:t})=>[v(c(t.create_time)+"至"+c(t.expire_time),1)]),_:1},8,["label"]),e(d,{label:o(n)("operation"),fixed:"right",align:"right"},{default:l(({row:t})=>[t.use_time!=0?(b(),C(y,{key:0,type:"primary",link:"",onClick:De=>P(t)},{default:l(()=>[v(c(o(n)("showOrder")),1)]),_:2},1032,["onClick"])):Z("",!0)]),_:1},8,["label"])]),_:1},8,["data"])),[[D,a.loading]]),s("div",we,[e(M,{"current-page":a.page,"onUpdate:current-page":i[3]||(i[3]=t=>a.page=t),"page-size":a.limit,"onUpdate:page-size":i[4]||(i[4]=t=>a.limit=t),layout:"total, sizes, prev, pager, next, jumper",total:a.total,"page-sizes":[5,10,20,50,100],onSizeChange:i[5]||(i[5]=t=>_()),onCurrentChange:_},null,8,["current-page","page-size","total"])])])])),[[D,x.value]])]),_:1},8,["modelValue","title"])}}});export{He as _};
