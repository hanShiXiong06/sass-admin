import{d as Y,y as H,r as h,q as w,h as f,c as k,e as l,w as r,a as i,t as c,u as s,s as o,F as J,T as Q,v as S,i as T,R as X,B as Z,C as F,U as ee,a5 as z,a3 as te,K as ae,L as oe,bF as le,ab as se,aC as ne,E as re,M as ie,a7 as ce,av as de,ac as pe,ad as me,W as ue,Y as _e}from"./index-0e396751.js";/* empty css                   *//* empty css                      *//* empty css                 *//* empty css               *//* empty css                  *//* empty css                  *//* empty css                     *//* empty css                  *//* empty css                 *//* empty css                    */import"./el-tooltip-4ed993c7.js";/* empty css                        *//* empty css                *//* empty css                *//* empty css                  *//* empty css                          *//* empty css                 */import"./el-form-item-4ed993c7.js";import{g as ge,b as he,an as N,ao as fe}from"./goods-4d7d064c.js";import{_ as ye}from"./_plugin-vue_export-helper-c27b6911.js";const ve={class:"main-container"},be={class:"flex justify-between items-center"},xe={class:"text-page-title"},Ce={class:"mt-[10px]"},ke={class:"mb-[10px] flex items-center"},Te={class:"flex items-center cursor-pointer"},Ee={class:"min-w-[70px] h-[70px] flex items-center justify-center"},we=["src"],Pe={class:"ml-2"},Ve=["title"],Be={class:"text-primary text-[12px]"},Re={key:0},Se={key:1},Fe={class:"mt-[16px] flex justify-end"},ze=Y({__name:"recycle",setup(Ne){const D=H().meta.title,m=h(!1),a=w({page:1,limit:10,total:0,loading:!0,data:[],searchParam:{goods_name:"",goods_category:[],goods_type:"",order:"",sort:""}}),P=h(),E=w([]),V=w([]);(()=>{ge().then(n=>{const e=n.data;if(e){const d=[];e.forEach(p=>{const b=[];p.child_list&&p.child_list.forEach(x=>{b.push({value:x.category_id,label:x.category_name})}),d.push({value:p.category_id,label:p.category_name,children:b})}),E.splice(0,E.length,...d)}}),he().then(n=>{const e=n.data;if(e)for(const d in e)V.push(e[d])})})();const y=h(),v=h(!1),L=n=>{v.value=!1,B.value.toggleAllSelection()},B=h(),g=h([]),U=n=>{g.value=n,y.value=!1,g.value.length>0&&g.value.length<a.data.length?v.value=!0:v.value=!1,g.value.length==a.data.length&&a.data.length&&g.value.length&&(y.value=!0)},G=()=>{if(g.value.length==0){ee({type:"warning",message:`${o("batchEmptySelectedGoodsTips")}`});return}z.confirm(o("batchGoodsRecycleTips"),o("warning"),{confirmButtonText:o("confirm"),cancelButtonText:o("cancel"),type:"warning"}).then(()=>{if(m.value)return;m.value=!0;const n=[];g.value.forEach(e=>{n.push(e.goods_id)}),N({goods_ids:n}).then(()=>{u(),y.value=!1,m.value=!1}).catch(()=>{m.value=!1})})},u=(n=1)=>{a.loading=!0,a.page=n;const e=te(a.searchParam);fe({page:a.page,limit:a.limit,...e}).then(d=>{a.loading=!1,a.data=d.data.data,a.total=d.data.total}).catch(()=>{a.loading=!1})};u();const I=n=>{z.confirm(o("goodsRecycleTips"),o("warning"),{confirmButtonText:o("confirm"),cancelButtonText:o("cancel"),type:"warning"}).then(()=>{m.value||(m.value=!0,N({goods_ids:n.goods_id}).then(e=>{e.code==1&&u(),m.value=!1}).catch(()=>{m.value=!1}))})},$=n=>{n&&(n.resetFields(),u())},j=n=>{let e="";n.order=="ascending"?e="asc":n.order=="descending"&&(e="desc"),e&&(a.searchParam.order=n.prop,a.searchParam.sort=e),u()};return(n,e)=>{const d=ae,p=oe,b=le,x=se,M=ne,C=re,O=ie,R=ce,q=de,_=pe,A=me,K=ue,W=_e;return f(),k("div",ve,[l(R,{class:"box-card !border-none",shadow:"never"},{default:r(()=>[i("div",be,[i("span",xe,c(s(D)),1)]),l(R,{class:"box-card !border-none my-[10px] table-search-wrap",shadow:"never"},{default:r(()=>[l(O,{inline:!0,model:a.searchParam,ref_key:"searchFormRef",ref:P},{default:r(()=>[l(p,{label:s(o)("goodsName"),prop:"goods_name"},{default:r(()=>[l(d,{modelValue:a.searchParam.goods_name,"onUpdate:modelValue":e[0]||(e[0]=t=>a.searchParam.goods_name=t),modelModifiers:{trim:!0},placeholder:s(o)("goodsNamePlaceholder"),maxlength:"60"},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),l(p,{label:s(o)("goodsCategory"),prop:"goods_category"},{default:r(()=>[l(b,{modelValue:a.searchParam.goods_category,"onUpdate:modelValue":e[1]||(e[1]=t=>a.searchParam.goods_category=t),options:E,placeholder:s(o)("goodsCategoryPlaceholder"),clearable:"",props:{value:"value",label:"label",emitPath:!1}},null,8,["modelValue","options","placeholder"])]),_:1},8,["label"]),l(p,{label:s(o)("goodsType"),prop:"goods_type"},{default:r(()=>[l(M,{modelValue:a.searchParam.goods_type,"onUpdate:modelValue":e[2]||(e[2]=t=>a.searchParam.goods_type=t),placeholder:s(o)("goodsTypePlaceholder"),clearable:""},{default:r(()=>[(f(!0),k(J,null,Q(V,t=>(f(),S(x,{key:t.type,label:t.name,value:t.type},null,8,["label","value"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"]),l(p,null,{default:r(()=>[l(C,{type:"primary",onClick:e[3]||(e[3]=t=>u())},{default:r(()=>[T(c(s(o)("search")),1)]),_:1}),l(C,{onClick:e[4]||(e[4]=t=>$(P.value))},{default:r(()=>[T(c(s(o)("reset")),1)]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),i("div",Ce,[i("div",ke,[l(q,{modelValue:y.value,"onUpdate:modelValue":e[5]||(e[5]=t=>y.value=t),size:"large",class:"px-[14px]",onChange:L,indeterminate:v.value},null,8,["modelValue","indeterminate"]),l(C,{onClick:G,size:"small"},{default:r(()=>[T(c(s(o)("batchRecycle")),1)]),_:1})]),X((f(),S(A,{data:a.data,size:"large",ref_key:"goodsListTableRef",ref:B,onSortChange:j,onSelectionChange:U},{empty:r(()=>[i("span",null,c(a.loading?"":s(o)("emptyData")),1)]),default:r(()=>[l(_,{type:"selection",width:"55"}),l(_,{prop:"goods_id",label:s(o)("goodsInfo"),"min-width":"300"},{default:r(({row:t})=>[i("div",Te,[i("div",Ee,[i("img",{class:"max-w-[70px] max-h-[70px]",src:s(Z)(t.goods_cover_thumb_small)},null,8,we)]),i("div",Pe,[i("span",{title:t.goods_name,class:"multi-hidden"},c(t.goods_name),9,Ve),i("span",Be,c(t.goods_type_name),1)])])]),_:1},8,["label"]),l(_,{prop:"price",label:s(o)("price"),"min-width":"120",align:"right",sortable:"custom"},{default:r(({row:t})=>[i("div",null,"￥"+c(t.goodsSku.price),1)]),_:1},8,["label"]),l(_,{prop:"stock",label:s(o)("stock"),"min-width":"120",sortable:"custom"},null,8,["label"]),l(_,{prop:"sale_num",label:s(o)("saleNum"),"min-width":"100",sortable:"custom"},null,8,["label"]),l(_,{prop:"status",label:s(o)("status"),"min-width":"100"},{default:r(({row:t})=>[t.status==1?(f(),k("div",Re,c(s(o)("statusOn")),1)):F("",!0),t.status==0?(f(),k("div",Se,c(s(o)("statusOff")),1)):F("",!0)]),_:1},8,["label"]),l(_,{prop:"create_time",label:s(o)("createTime"),"min-width":"150",sortable:"custom"},{default:r(({row:t})=>[i("div",null,c(t.create_time),1)]),_:1},8,["label"]),l(_,{label:s(o)("operation"),fixed:"right",align:"right","min-width":"120"},{default:r(({row:t})=>[l(C,{type:"primary",link:"",onClick:Ue=>I(t)},{default:r(()=>[T(c(s(o)("recycle")),1)]),_:2},1032,["onClick"])]),_:1},8,["label"])]),_:1},8,["data"])),[[W,a.loading]]),i("div",Fe,[l(K,{"current-page":a.page,"onUpdate:current-page":e[6]||(e[6]=t=>a.page=t),"page-size":a.limit,"onUpdate:page-size":e[7]||(e[7]=t=>a.limit=t),layout:"total, sizes, prev, pager, next, jumper",total:a.total,onSizeChange:e[8]||(e[8]=t=>u()),onCurrentChange:u},null,8,["current-page","page-size","total"])])])]),_:1})])}}});const st=ye(ze,[["__scopeId","data-v-2d79d0cd"]]);export{st as default};
