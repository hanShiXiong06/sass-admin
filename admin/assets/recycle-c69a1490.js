import{d as Y,x as H,r as f,n as w,h,c as k,e as l,w as r,a as i,t as c,u as s,q as o,F as J,T as Q,s as S,i as T,R as X,A as Z,B as F,U as ee,a5 as z,a3 as ae,K as te,L as oe,bF as le,ac as se,aD as ne,E as re,M as ie,a7 as ce,aw as de,ad as pe,ae as me,W as ue,Y as _e}from"./index-904cb7a2.js";/* empty css                   *//* empty css                      *//* empty css                 *//* empty css               *//* empty css                  *//* empty css                  *//* empty css                     *//* empty css                  *//* empty css                 *//* empty css                    */import"./el-tooltip-4ed993c7.js";/* empty css                        *//* empty css                *//* empty css                *//* empty css                  *//* empty css                          *//* empty css                 */import"./el-form-item-4ed993c7.js";import{g as ge,b as fe,ae as D,af as he}from"./goods-6bf0c95b.js";import{_ as ye}from"./_plugin-vue_export-helper-c27b6911.js";const ve={class:"main-container"},be={class:"flex justify-between items-center"},xe={class:"text-page-title"},Ce={class:"mt-[10px]"},ke={class:"mb-[10px] flex items-center"},Te={class:"flex items-center cursor-pointer"},Ee={class:"min-w-[70px] h-[70px] flex items-center justify-center"},we=["src"],Pe={class:"ml-2"},Ve=["title"],Be={class:"text-primary text-[12px]"},Re={key:0},Se={key:1},Fe={class:"mt-[16px] flex justify-end"},ze=Y({__name:"recycle",setup(De){const N=H().meta.title,m=f(!1),t=w({page:1,limit:10,total:0,loading:!0,data:[],searchParam:{goods_name:"",goods_category:[],goods_type:"",order:"",sort:""}}),P=f(),E=w([]),V=w([]);(()=>{ge().then(n=>{const e=n.data;if(e){const d=[];e.forEach(p=>{const b=[];p.child_list&&p.child_list.forEach(x=>{b.push({value:x.category_id,label:x.category_name})}),d.push({value:p.category_id,label:p.category_name,children:b})}),E.splice(0,E.length,...d)}}),fe().then(n=>{const e=n.data;if(e)for(const d in e)V.push(e[d])})})();const y=f(),v=f(!1),L=n=>{v.value=!1,B.value.toggleAllSelection()},B=f(),g=f([]),U=n=>{g.value=n,y.value=!1,g.value.length>0&&g.value.length<t.data.length?v.value=!0:v.value=!1,g.value.length==t.data.length&&t.data.length&&g.value.length&&(y.value=!0)},G=()=>{if(g.value.length==0){ee({type:"warning",message:`${o("batchEmptySelectedGoodsTips")}`});return}z.confirm(o("batchGoodsRecycleTips"),o("warning"),{confirmButtonText:o("confirm"),cancelButtonText:o("cancel"),type:"warning"}).then(()=>{if(m.value)return;m.value=!0;const n=[];g.value.forEach(e=>{n.push(e.goods_id)}),D({goods_ids:n}).then(()=>{u(),y.value=!1,m.value=!1}).catch(()=>{m.value=!1})})},u=(n=1)=>{t.loading=!0,t.page=n;const e=ae(t.searchParam);he({page:t.page,limit:t.limit,...e}).then(d=>{t.loading=!1,t.data=d.data.data,t.total=d.data.total}).catch(()=>{t.loading=!1})};u();const I=n=>{z.confirm(o("goodsRecycleTips"),o("warning"),{confirmButtonText:o("confirm"),cancelButtonText:o("cancel"),type:"warning"}).then(()=>{m.value||(m.value=!0,D({goods_ids:n.goods_id}).then(e=>{e.code==1&&u(),m.value=!1}).catch(()=>{m.value=!1}))})},$=n=>{n&&(n.resetFields(),u())},j=n=>{let e="";n.order=="ascending"?e="asc":n.order=="descending"&&(e="desc"),e&&(t.searchParam.order=n.prop,t.searchParam.sort=e),u()};return(n,e)=>{const d=te,p=oe,b=le,x=se,M=ne,C=re,O=ie,R=ce,A=de,_=pe,q=me,K=ue,W=_e;return h(),k("div",ve,[l(R,{class:"box-card !border-none",shadow:"never"},{default:r(()=>[i("div",be,[i("span",xe,c(s(N)),1)]),l(R,{class:"box-card !border-none my-[10px] table-search-wrap",shadow:"never"},{default:r(()=>[l(O,{inline:!0,model:t.searchParam,ref_key:"searchFormRef",ref:P},{default:r(()=>[l(p,{label:s(o)("goodsName"),prop:"goods_name"},{default:r(()=>[l(d,{modelValue:t.searchParam.goods_name,"onUpdate:modelValue":e[0]||(e[0]=a=>t.searchParam.goods_name=a),modelModifiers:{trim:!0},placeholder:s(o)("goodsNamePlaceholder"),maxlength:"60"},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),l(p,{label:s(o)("goodsCategory"),prop:"goods_category"},{default:r(()=>[l(b,{modelValue:t.searchParam.goods_category,"onUpdate:modelValue":e[1]||(e[1]=a=>t.searchParam.goods_category=a),options:E,placeholder:s(o)("goodsCategoryPlaceholder"),clearable:"",props:{value:"value",label:"label",emitPath:!1}},null,8,["modelValue","options","placeholder"])]),_:1},8,["label"]),l(p,{label:s(o)("goodsType"),prop:"goods_type"},{default:r(()=>[l(M,{modelValue:t.searchParam.goods_type,"onUpdate:modelValue":e[2]||(e[2]=a=>t.searchParam.goods_type=a),placeholder:s(o)("goodsTypePlaceholder"),clearable:""},{default:r(()=>[(h(!0),k(J,null,Q(V,a=>(h(),S(x,{key:a.type,label:a.name,value:a.type},null,8,["label","value"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"]),l(p,null,{default:r(()=>[l(C,{type:"primary",onClick:e[3]||(e[3]=a=>u())},{default:r(()=>[T(c(s(o)("search")),1)]),_:1}),l(C,{onClick:e[4]||(e[4]=a=>$(P.value))},{default:r(()=>[T(c(s(o)("reset")),1)]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),i("div",Ce,[i("div",ke,[l(A,{modelValue:y.value,"onUpdate:modelValue":e[5]||(e[5]=a=>y.value=a),size:"large",class:"px-[14px]",onChange:L,indeterminate:v.value},null,8,["modelValue","indeterminate"]),l(C,{onClick:G,size:"small"},{default:r(()=>[T(c(s(o)("batchRecycle")),1)]),_:1})]),X((h(),S(q,{data:t.data,size:"large",ref_key:"goodsListTableRef",ref:B,onSortChange:j,onSelectionChange:U},{empty:r(()=>[i("span",null,c(t.loading?"":s(o)("emptyData")),1)]),default:r(()=>[l(_,{type:"selection",width:"55"}),l(_,{prop:"goods_id",label:s(o)("goodsInfo"),"min-width":"300"},{default:r(({row:a})=>[i("div",Te,[i("div",Ee,[i("img",{class:"max-w-[70px] max-h-[70px]",src:s(Z)(a.goods_cover_thumb_small)},null,8,we)]),i("div",Pe,[i("span",{title:a.goods_name,class:"multi-hidden"},c(a.goods_name),9,Ve),i("span",Be,c(a.goods_type_name),1)])])]),_:1},8,["label"]),l(_,{prop:"price",label:s(o)("price"),"min-width":"120",align:"right",sortable:"custom"},{default:r(({row:a})=>[i("div",null,"￥"+c(a.goodsSku.price),1)]),_:1},8,["label"]),l(_,{prop:"stock",label:s(o)("stock"),"min-width":"120",sortable:"custom"},null,8,["label"]),l(_,{prop:"sale_num",label:s(o)("saleNum"),"min-width":"100",sortable:"custom"},null,8,["label"]),l(_,{prop:"status",label:s(o)("status"),"min-width":"100"},{default:r(({row:a})=>[a.status==1?(h(),k("div",Re,c(s(o)("statusOn")),1)):F("",!0),a.status==0?(h(),k("div",Se,c(s(o)("statusOff")),1)):F("",!0)]),_:1},8,["label"]),l(_,{prop:"create_time",label:s(o)("createTime"),"min-width":"150",sortable:"custom"},{default:r(({row:a})=>[i("div",null,c(a.create_time),1)]),_:1},8,["label"]),l(_,{label:s(o)("operation"),fixed:"right",align:"right","min-width":"120"},{default:r(({row:a})=>[l(C,{type:"primary",link:"",onClick:Ue=>I(a)},{default:r(()=>[T(c(s(o)("recycle")),1)]),_:2},1032,["onClick"])]),_:1},8,["label"])]),_:1},8,["data"])),[[W,t.loading]]),i("div",Fe,[l(K,{"current-page":t.page,"onUpdate:current-page":e[6]||(e[6]=a=>t.page=a),"page-size":t.limit,"onUpdate:page-size":e[7]||(e[7]=a=>t.limit=a),layout:"total, sizes, prev, pager, next, jumper",total:t.total,onSizeChange:e[8]||(e[8]=a=>u()),onCurrentChange:u},null,8,["current-page","page-size","total"])])])]),_:1})])}}});const sa=ye(ze,[["__scopeId","data-v-f637a463"]]);export{sa as default};
