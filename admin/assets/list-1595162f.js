import{d as Ne,y as je,f as Ie,r as p,q as D,m as te,s as l,bO as Le,h as _,c as $,e as t,w as a,a as c,t as m,u as r,i as u,F as le,T as ae,v as k,R as Me,C as j,x as Oe,B as qe,bP as We,a5 as I,U as Ae,E as Je,K as Ke,L as Xe,ab as Ye,aC as Ge,M as He,a7 as Qe,av as Ze,ac as et,ak as tt,bg as lt,bh as at,bi as ot,ad as nt,W as rt,X as st,ax as it,ay as mt,Y as ut}from"./index-0e396751.js";/* empty css                   */import{_ as pt}from"./index.vue_vue_type_script_setup_true_lang-0825ba66.js";import dt from"./index-11d71036.js";/* empty css                    *//* empty css                  *//* empty css                   *//* empty css                      *//* empty css                 *//* empty css               *//* empty css                  *//* empty css                  *//* empty css                     *//* empty css                  *//* empty css                 *//* empty css                    */import"./el-tooltip-4ed993c7.js";/* empty css                  *//* empty css                    */import"./el-dropdown-item-4ed993c7.js";/* empty css                        *//* empty css                *//* empty css                */import"./el-form-item-4ed993c7.js";import{j as ct,k as ft,l as _t,m as vt,n as oe,o as gt}from"./diy_form-e1ce8c59.js";import{_ as yt}from"./records.vue_vue_type_style_index_0_lang-123a656b.js";import{_ as ht}from"./form-spread-popup.vue_vue_type_script_setup_true_lang-ac1b63e0.js";import{f as bt}from"./form-submit-popup-99fbef05.js";import{_ as kt}from"./form-write-popup.vue_vue_type_style_index_0_lang-2798aae8.js";import{_ as Ct}from"./_plugin-vue_export-helper-c27b6911.js";/* empty css                        */import"./index.vue_vue_type_style_index_0_lang-d82568af.js";import"./attachment-c52133c7.js";import"./index.vue_vue_type_script_setup_true_lang-34f8a01a.js";/* empty css                 *//* empty css               *//* empty css               *//* empty css                  *//* empty css                    */import"./index.vue_vue_type_script_setup_true_lang-077a27b1.js";/* empty css                   */import"./index.vue_vue_type_script_setup_true_lang-5014406f.js";import"./sortable.esm-be94e56d.js";/* empty css                  *//* empty css                         *//* empty css                       */import"./member_head-d9fd7b2c.js";import"./browser-a1ac24ac.js";/* empty css                       *//* empty css                 *//* empty css                       */import"./member-fcb60d7e.js";const wt={class:"main-container"},xt={class:"flex justify-between items-center"},Dt={class:"text-page-title"},Ft={class:"mb-[10px] flex items-center"},Tt={class:"flex items-center justify-end"},Vt={class:"mt-[16px] flex justify-end"},Et={class:"image-selection-container"},Pt=["onClick"],St=["src"],$t={class:"option-title"},Rt={class:"dialog-footer"},Bt={class:"dialog-footer"},Ut=Ne({__name:"list",setup(zt){const ne=je(),L=Ie(),re=ne.meta.title,y=p(!1),C=D({}),b=D({title:"",type:""}),R=p(null),se=n=>{let e={form_id:n.form_id};R.value.setFormData(e),R.value.showDialog=!0},ie=te(()=>({title:[{required:!0,message:l("titlePlaceholder"),trigger:"blur"}],type:[{required:!0,message:l("formTypePlaceholder"),trigger:"blur"}]})),M=p(),F=p(!1),me=async n=>{n&&await n.validate(async e=>{if(e){const i={type:b.type},V=L.resolve({path:"/decorate/form/edit",query:i});window.open(V.href),F.value=!1,b.title="",b.type=""}})},O=n=>{n.status=n.status===1?0:1;const e={form_id:n.form_id,status:n.status};ct(e)};((n="")=>{ft().then(e=>{for(let i in C)delete C[i];for(const i in e.data)C[i]=e.data[i];b.type=Object.keys(C)[0]})})(),D({});const s=D({page:1,limit:10,total:0,loading:!0,data:[],searchParam:{title:"",type:"",mode:"",addon_name:""}}),q=p(),f=(n=1)=>{s.loading=!0,s.page=n,_t({page:s.page,limit:s.limit,...s.searchParam}).then(e=>{s.loading=!1,s.data=e.data.data,s.total=e.data.total,We(s.page,s.limit,s.searchParam)}).catch(()=>{s.loading=!1})};f(Le(s.searchParam).page);const ue=n=>{b.type=n.toString()},pe=n=>{n&&(n.resetFields(),f())},de=n=>{const e=L.resolve({path:"/decorate/form/edit",query:{form_id:n.form_id}});window.open(e.href)},ce=n=>{I.confirm(l("diyFormCopyTips"),l("warning"),{confirmButtonText:l("confirm"),cancelButtonText:l("cancel"),type:"warning"}).then(()=>{y.value||(y.value=!0,vt({form_id:n}).then(e=>{e.code==1&&f(),y.value=!1}).catch(()=>{y.value=!1}))})},fe=n=>{I.confirm(l("diyFormDeleteTips"),l("warning"),{confirmButtonText:l("confirm"),cancelButtonText:l("cancel"),type:"warning"}).then(()=>{oe({form_ids:[n]}).then(()=>{f()}).catch(()=>{})})},P=p(),S=p(!1),_e=n=>{S.value=!1,W.value.toggleAllSelection()},W=p(),w=p([]),ve=n=>{w.value=n,P.value=!1,w.value.length>0&&w.value.length<s.data.length?S.value=!0:S.value=!1,w.value.length==s.data.length&&(P.value=!0)},ge=()=>{if(w.value.length==0){Ae({type:"warning",message:`${l("batchEmptySelectedFormsTips")}`});return}I.confirm(l("batchFormsDeleteTips"),l("warning"),{confirmButtonText:l("confirm"),cancelButtonText:l("cancel"),type:"warning"}).then(()=>{if(y.value)return;y.value=!0;const n=[];w.value.forEach(e=>{n.push(e.form_id)}),oe({form_ids:n}).then(()=>{f(),y.value=!1}).catch(()=>{y.value=!1})})},v=p("wechat"),A=p(""),J=p(0),g=D({wechat:{title:"",desc:"",url:""},weapp:{title:"",url:""}}),T=p(!1),ye=te(()=>({})),K=p(),he=async n=>{J.value=n.form_id,A.value=n.title;const e=n.share;g.wechat=e.wechat,g.weapp=e.weapp,T.value=!0},be=async n=>{n&&await n.validate(async e=>{e&&gt({form_id:J.value,share:JSON.stringify(g)}).then(()=>{f(),T.value=!1}).catch(()=>{})})},X=p(null),ke=n=>{X.value.show(n)},B=p(null),Ce=n=>{B.value.setFormData(n),B.value.showDialog=!0},U=p(null),we=n=>{U.value.setFormData(n),U.value.showDialog=!0},xe=p(null),z=p(!1),De=n=>{z.value=n},Y=D({form_id:0}),Fe=n=>{Y.form_id=n.form_id,z.value=!0};return(n,e)=>{const i=Je,V=Ke,h=Xe,G=Ye,Te=Ge,N=He,H=Qe,Ve=Ze,x=et,Q=tt,E=lt,Ee=at,Pe=ot,Se=nt,$e=rt,Z=st,ee=it,Re=mt,Be=dt,Ue=pt,ze=ut;return _(),$("div",wt,[t(H,{class:"box-card !border-none",shadow:"never"},{default:a(()=>[c("div",xt,[c("span",Dt,m(r(re)),1),t(i,{type:"primary",class:"w-[100px]",onClick:e[0]||(e[0]=o=>F.value=!0)},{default:a(()=>[u(m(r(l)("addDiyForm")),1)]),_:1})]),t(H,{class:"box-card !border-none my-[10px] table-search-wrap",shadow:"never"},{default:a(()=>[t(N,{inline:!0,model:s.searchParam,ref_key:"searchFormDiyFormRef",ref:q},{default:a(()=>[t(h,{label:r(l)("title"),prop:"title"},{default:a(()=>[t(V,{modelValue:s.searchParam.title,"onUpdate:modelValue":e[1]||(e[1]=o=>s.searchParam.title=o),modelModifiers:{trim:!0},placeholder:r(l)("titlePlaceholder")},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),t(h,{label:r(l)("typeName"),prop:"type"},{default:a(()=>[t(Te,{modelValue:s.searchParam.type,"onUpdate:modelValue":e[2]||(e[2]=o=>s.searchParam.type=o),placeholder:r(l)("formTypePlaceholder")},{default:a(()=>[t(G,{label:r(l)("all"),value:""},null,8,["label"]),(_(!0),$(le,null,ae(C,(o,d)=>(_(),k(G,{label:o.title,value:d,key:d},null,8,["label","value"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"]),t(h,null,{default:a(()=>[t(i,{type:"primary",onClick:e[3]||(e[3]=o=>f())},{default:a(()=>[u(m(r(l)("search")),1)]),_:1}),t(i,{onClick:e[4]||(e[4]=o=>pe(q.value))},{default:a(()=>[u(m(r(l)("reset")),1)]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),c("div",Ft,[t(Ve,{modelValue:P.value,"onUpdate:modelValue":e[5]||(e[5]=o=>P.value=o),size:"large",class:"px-[14px]",onChange:_e,indeterminate:S.value},null,8,["modelValue","indeterminate"]),t(i,{onClick:ge,size:"small"},{default:a(()=>[u(m(r(l)("batchDeletion")),1)]),_:1})]),Me((_(),k(Se,{data:s.data,size:"large",ref_key:"diyFormListTableRef",ref:W,onSelectionChange:ve},{empty:a(()=>[c("span",null,m(s.loading?"":r(l)("emptyData")),1)]),default:a(()=>[t(x,{type:"selection",width:"55"}),t(x,{prop:"page_title",label:r(l)("title"),"min-width":"120"},null,8,["label"]),t(x,{prop:"type_name",label:r(l)("typeName"),"min-width":"80"},null,8,["label"]),t(x,{label:r(l)("status"),"min-width":"80"},{default:a(({row:o})=>[o.status==1?(_(),k(Q,{key:0,type:"success",class:"cursor-pointer",onClick:d=>O(o)},{default:a(()=>[u(m(r(l)("statusOn")),1)]),_:2},1032,["onClick"])):(_(),k(Q,{key:1,type:"info",class:"cursor-pointer",onClick:d=>O(o)},{default:a(()=>[u(m(r(l)("statusOff")),1)]),_:2},1032,["onClick"]))]),_:1},8,["label"]),t(x,{prop:"update_time",label:r(l)("updateTime"),"min-width":"120"},null,8,["label"]),t(x,{label:r(l)("operation"),fixed:"right",align:"right","min-width":"100"},{default:a(({row:o})=>[c("div",Tt,[o.status==1?(_(),k(i,{key:0,type:"primary",link:"",onClick:d=>ke(o)},{default:a(()=>[u(m(r(l)("推广")),1)]),_:2},1032,["onClick"])):j("",!0),t(i,{type:"primary",link:"",onClick:d=>de(o)},{default:a(()=>[u(m(r(l)("edit")),1)]),_:2},1032,["onClick"]),o.status==0?(_(),k(i,{key:1,type:"primary",link:"",onClick:d=>fe(o.form_id)},{default:a(()=>[u(m(r(l)("delete")),1)]),_:2},1032,["onClick"])):j("",!0),t(i,{type:"primary",link:"",onClick:d=>se(o)},{default:a(()=>[u(m(r(l)("详情")),1)]),_:2},1032,["onClick"]),t(Pe,{placement:"bottom",trigger:"click",class:"ml-[12px]"},{dropdown:a(()=>[t(Ee,null,{default:a(()=>[t(E,null,{default:a(()=>[t(i,{type:"primary",class:"w-full",link:"",onClick:d=>Ce(o)},{default:a(()=>[u(m(r(l)("提交成功页")),1)]),_:2},1032,["onClick"])]),_:2},1024),t(E,null,{default:a(()=>[t(i,{type:"primary",class:"w-full",link:"",onClick:d=>we(o)},{default:a(()=>[u(m(r(l)("填写设置")),1)]),_:2},1032,["onClick"])]),_:2},1024),t(E,null,{default:a(()=>[t(i,{type:"primary",class:"w-full",link:"",onClick:d=>he(o)},{default:a(()=>[u(m(r(l)("shareSet")),1)]),_:2},1032,["onClick"])]),_:2},1024),t(E,null,{default:a(()=>[t(i,{type:"primary",class:"w-full",link:"",onClick:d=>Fe(o)},{default:a(()=>[u(m(r(l)("导出")),1)]),_:2},1032,["onClick"])]),_:2},1024),t(E,null,{default:a(()=>[t(i,{type:"primary",class:"w-full",link:"",onClick:d=>ce(o.form_id)},{default:a(()=>[u(m(r(l)("复制")),1)]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024)]),default:a(()=>[t(i,{type:"primary",link:""},{default:a(()=>[u("更多")]),_:1})]),_:2},1024)])]),_:1},8,["label"])]),_:1},8,["data"])),[[ze,s.loading]]),c("div",Vt,[t($e,{"current-page":s.page,"onUpdate:current-page":e[6]||(e[6]=o=>s.page=o),"page-size":s.limit,"onUpdate:page-size":e[7]||(e[7]=o=>s.limit=o),layout:"total, sizes, prev, pager, next, jumper",total:s.total,onSizeChange:e[8]||(e[8]=o=>f()),onCurrentChange:f},null,8,["current-page","page-size","total"])])]),_:1}),t(Z,{modelValue:F.value,"onUpdate:modelValue":e[11]||(e[11]=o=>F.value=o),title:r(l)("addFormTips"),width:"980px"},{footer:a(()=>[c("span",Rt,[t(i,{onClick:e[9]||(e[9]=o=>F.value=!1)},{default:a(()=>[u(m(r(l)("cancel")),1)]),_:1}),t(i,{type:"primary",onClick:e[10]||(e[10]=o=>me(M.value))},{default:a(()=>[u(m(r(l)("confirm")),1)]),_:1})])]),default:a(()=>[t(N,{model:b,ref_key:"formRef",ref:M,rules:r(ie)},{default:a(()=>[t(h,{prop:"type"},{default:a(()=>[c("div",Et,[(_(!0),$(le,null,ae(C,(o,d)=>(_(),$("div",{key:d,class:Oe(["image-option",{selected:b.type===d}]),onClick:jt=>ue(d)},[c("img",{src:r(qe)(o.preview),class:"option-image"},null,8,St),c("div",$t,m(o.title),1)],10,Pt))),128))])]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["modelValue","title"]),t(Z,{modelValue:T.value,"onUpdate:modelValue":e[18]||(e[18]=o=>T.value=o),title:r(l)("shareSet"),width:"30%"},{footer:a(()=>[c("span",Bt,[t(i,{onClick:e[16]||(e[16]=o=>T.value=!1)},{default:a(()=>[u(m(r(l)("cancel")),1)]),_:1}),t(i,{type:"primary",onClick:e[17]||(e[17]=o=>be(K.value))},{default:a(()=>[u(m(r(l)("confirm")),1)]),_:1})])]),default:a(()=>[t(Re,{modelValue:v.value,"onUpdate:modelValue":e[12]||(e[12]=o=>v.value=o)},{default:a(()=>[t(ee,{label:r(l)("wechat"),name:"wechat"},null,8,["label"]),t(ee,{label:r(l)("weapp"),name:"weapp"},null,8,["label"])]),_:1},8,["modelValue"]),t(N,{model:g[v.value],"label-width":"90px",ref_key:"shareFormRef",ref:K,rules:r(ye)},{default:a(()=>[t(h,{label:r(l)("sharePage")},{default:a(()=>[c("span",null,m(A.value),1)]),_:1},8,["label"]),t(h,{label:r(l)("shareTitle"),prop:"title"},{default:a(()=>[t(V,{modelValue:g[v.value].title,"onUpdate:modelValue":e[13]||(e[13]=o=>g[v.value].title=o),modelModifiers:{trim:!0},placeholder:r(l)("shareTitlePlaceholder"),clearable:"",maxlength:"30","show-word-limit":""},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),v.value=="wechat"?(_(),k(h,{key:0,label:r(l)("shareDesc"),prop:"desc"},{default:a(()=>[t(V,{modelValue:g[v.value].desc,"onUpdate:modelValue":e[14]||(e[14]=o=>g[v.value].desc=o),modelModifiers:{trim:!0},placeholder:r(l)("shareDescPlaceholder"),type:"textarea",rows:"4",clearable:"",maxlength:"100","show-word-limit":""},null,8,["modelValue","placeholder"])]),_:1},8,["label"])):j("",!0),t(h,{label:r(l)("shareImageUrl"),prop:"url"},{default:a(()=>[t(Be,{modelValue:g[v.value].url,"onUpdate:modelValue":e[15]||(e[15]=o=>g[v.value].url=o),limit:1},null,8,["modelValue"])]),_:1},8,["label"])]),_:1},8,["model","rules"])]),_:1},8,["modelValue","title"]),t(ht,{ref_key:"formSpreadPopupRef",ref:X},null,512),t(bt,{ref_key:"formSubmitPopupRef",ref:B,onComplete:f},null,512),t(kt,{ref_key:"formWritePopupRef",ref:U,onComplete:f},null,512),t(yt,{ref_key:"recordsDetailDialog",ref:R},null,512),t(Ue,{ref_key:"exportSureDialog",ref:xe,show:z.value,type:"diy_form_records",searchParam:Y,onClose:De},null,8,["show","searchParam"])])}}});const Nl=Ct(Ut,[["__scopeId","data-v-a30c000c"]]);export{Nl as default};
