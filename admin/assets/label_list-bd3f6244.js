import{d as X,x as Z,f as H,n as N,r as k,h as i,c as g,e as s,w as r,a as u,t as p,u as a,i as _,q as o,F as J,T as Q,s as f,R as ee,$ as te,A as ae,B as C,j as L,a5 as oe,aq as le,U as ne,E as se,ay as re,az as ie,K as pe,L as de,ac as me,aD as ce,M as ue,a7 as _e,ad as be,al as ge,ae as fe,W as he,Y as ye}from"./index-99f00cf3.js";/* empty css                   *//* empty css                      *//* empty css                 *//* empty css               *//* empty css                  *//* empty css                  *//* empty css                     *//* empty css                  *//* empty css                 *//* empty css                    */import"./el-tooltip-4ed993c7.js";/* empty css                        *//* empty css                *//* empty css                */import"./el-form-item-4ed993c7.js";/* empty css                    *//* empty css                  */import{X as ve,Y as xe,Z as ke,_ as Ce,$ as Le}from"./goods-c64a9d59.js";import{_ as Ee}from"./label-edit.vue_vue_type_style_index_0_lang-210f8164.js";/* empty css                  *//* empty css                   *//* empty css                  */import"./index-015c0c3e.js";/* empty css                        */import"./index.vue_vue_type_style_index_0_lang-2e54ab99.js";import"./attachment-6fc096d0.js";import"./index.vue_vue_type_script_setup_true_lang-a59c79e6.js";/* empty css                 *//* empty css               *//* empty css               *//* empty css                    *//* empty css                    */import"./el-dropdown-item-4ed993c7.js";import"./index.vue_vue_type_script_setup_true_lang-bde8c802.js";/* empty css                   */import"./index.vue_vue_type_script_setup_true_lang-49ab6f2c.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./sortable.esm-be94e56d.js";/* empty css                        *//* empty css                       *//* empty css                 */const Pe={class:"main-container"},Te={class:"flex justify-between items-center"},Ve={class:"text-page-title"},De={class:"mt-[10px]"},$e=["src"],Ne={key:0},Be={key:1},Fe={class:"mt-[16px] flex justify-end"},Lt=X({__name:"label_list",setup(je){const B=Z(),F=H(),j=B.meta.title,S=n=>{F.push({path:n})},l=N({page:1,limit:10,total:0,loading:!0,data:[],searchParam:{label_name:"",group_id:"",order:"",sort:""}}),y=N([]),E=k(),z=n=>{let t="";n.order=="ascending"?t="asc":n.order=="descending"&&(t="desc"),t&&(l.searchParam.order=n.prop,l.searchParam.sort=t),d()},d=(n=1)=>{l.loading=!0,l.page=n,ve({page:l.page,limit:l.limit,...l.searchParam}).then(t=>{l.loading=!1,l.data=t.data.data,l.total=t.data.total}).catch(()=>{l.loading=!1})};(()=>{xe({}).then(n=>{const t=n.data;t&&y.push(...t)}),d()})();const h=k(null),U=()=>{h.value.setFormData(),h.value.showDialog=!0},w=n=>{h.value.setFormData(n),h.value.showDialog=!0},I=n=>{oe.confirm(o("labelDeleteTips"),o("warning"),{confirmButtonText:o("confirm"),cancelButtonText:o("cancel"),type:"warning"}).then(()=>{ke(n).then(()=>{d()}).catch(()=>{})})},R=le((n,t)=>{if(isNaN(n)||!/^\d{0,8}$/.test(n)){ne({type:"warning",message:`${o("sortTips")}`});return}n>99999999&&(t.sort=99999999),Ce({label_id:t.label_id,sort:n}).then(m=>{})}),v=k(!1),P=(n,t)=>{v.value||(v.value=!0,Le({label_id:n,status:t}).then(m=>{d(),v.value=!1}))},M=n=>{n&&(n.resetFields(),d())};return(n,t)=>{const m=se,T=re,G=ie,V=pe,x=de,O=me,q=ce,Y=ue,D=_e,c=be,$=ge,A=fe,K=he,W=ye;return i(),g("div",Pe,[s(D,{class:"box-card !border-none",shadow:"never"},{default:r(()=>[u("div",Te,[u("span",Ve,p(a(j)),1),s(m,{type:"primary",onClick:U},{default:r(()=>[_(p(a(o)("addLabel")),1)]),_:1})]),s(G,{"model-value":"/phone_shop/goods/label",onTabChange:S},{default:r(()=>[s(T,{label:a(o)("tabGoodsLabel"),name:"/phone_shop/goods/label"},null,8,["label"]),s(T,{label:a(o)("tabGoodsLabelGroup"),name:"/phone_shop/goods/label/group"},null,8,["label"])]),_:1}),s(D,{class:"box-card !border-none my-[10px] table-search-wrap",shadow:"never"},{default:r(()=>[s(Y,{inline:!0,model:l.searchParam,ref_key:"searchFormRef",ref:E},{default:r(()=>[s(x,{label:a(o)("labelName"),prop:"label_name"},{default:r(()=>[s(V,{modelValue:l.searchParam.label_name,"onUpdate:modelValue":t[0]||(t[0]=e=>l.searchParam.label_name=e),modelModifiers:{trim:!0},placeholder:a(o)("labelNamePlaceholder")},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),s(x,{label:a(o)("groupName"),prop:"group_id"},{default:r(()=>[s(q,{modelValue:l.searchParam.group_id,"onUpdate:modelValue":t[1]||(t[1]=e=>l.searchParam.group_id=e),placeholder:a(o)("groupNamePlaceholder"),clearable:""},{default:r(()=>[(i(!0),g(J,null,Q(y,e=>(i(),f(O,{key:e.group_id,label:e.group_name,value:e.group_id},null,8,["label","value"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"]),s(x,null,{default:r(()=>[s(m,{type:"primary",onClick:t[2]||(t[2]=e=>d())},{default:r(()=>[_(p(a(o)("search")),1)]),_:1}),s(m,{onClick:t[3]||(t[3]=e=>M(E.value))},{default:r(()=>[_(p(a(o)("reset")),1)]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),u("div",De,[ee((i(),f(A,{data:l.data,size:"large",onSortChange:z},{empty:r(()=>[u("span",null,p(l.loading?"":a(o)("emptyData")),1)]),default:r(()=>[s(c,{prop:"label_name",label:a(o)("label"),"min-width":"120"},{default:r(({row:e})=>[e.style_type=="diy"?(i(),g("div",{key:0,class:"inline-block px-[10px] text-[12px] rounded-[4px] box-border whitespace-nowrap h-[28px] leading-[28px]",style:te({color:e.color_json.text_color,backgroundColor:e.color_json.bg_color,border:e.color_json.border_color?"1px solid "+e.color_json.border_color:"none"})},[u("span",null,p(e.label_name),1)],4)):e.style_type=="icon"?(i(),g("img",{key:1,class:"block h-[28px] rounded-[4px] object-cover",src:a(ae)(e.icon)},null,8,$e)):C("",!0)]),_:1},8,["label"]),s(c,{prop:"group_name",label:a(o)("groupName"),"min-width":"120"},{default:r(({row:e})=>[e.group?(i(),g("span",Ne,p(e.group.group_name),1)):(i(),g("span",Be,"--"))]),_:1},8,["label"]),s(c,{prop:"status",label:a(o)("status"),"min-width":"80","show-overflow-tooltip":!0},{default:r(({row:e})=>[e.status==1?(i(),f($,{key:0,type:"success",onClick:b=>P(e.label_id,0),class:"cursor-pointer"},{default:r(()=>[_(p(a(o)("statusOn")),1)]),_:2},1032,["onClick"])):(i(),f($,{key:1,type:"info",onClick:b=>P(e.label_id,1),class:"cursor-pointer"},{default:r(()=>[_(p(a(o)("statusOff")),1)]),_:2},1032,["onClick"]))]),_:1},8,["label"]),s(c,{prop:"memo",label:a(o)("memo"),"min-width":"200"},null,8,["label"]),s(c,{prop:"sort",label:a(o)("sort"),"min-width":"120",sortable:"custom"},{default:r(({row:e})=>[s(V,{modelValue:e.sort,"onUpdate:modelValue":b=>e.sort=b,modelModifiers:{trim:!0},disabled:a(L)().siteInfo.site_id!==e.site_id,class:"!w-[100px]",maxlength:"8",onBlur:b=>a(R)(e.sort,e)},null,8,["modelValue","onUpdate:modelValue","disabled","onBlur"])]),_:1},8,["label"]),s(c,{prop:"create_time",label:a(o)("createTime"),"min-width":"100",sortable:"custom"},{default:r(({row:e})=>[u("div",null,p(e.create_time),1)]),_:1},8,["label"]),s(c,{label:a(o)("operation"),fixed:"right",align:"right","min-width":"120"},{default:r(({row:e})=>[a(L)().siteInfo.site_id==e.site_id?(i(),f(m,{key:0,type:"primary",link:"",onClick:b=>w(e)},{default:r(()=>[_(p(a(o)("edit")),1)]),_:2},1032,["onClick"])):C("",!0),a(L)().siteInfo.site_id==e.site_id?(i(),f(m,{key:1,type:"primary",link:"",onClick:b=>I(e.label_id)},{default:r(()=>[_(p(a(o)("delete")),1)]),_:2},1032,["onClick"])):C("",!0)]),_:1},8,["label"])]),_:1},8,["data"])),[[W,l.loading]]),u("div",Fe,[s(K,{"current-page":l.page,"onUpdate:current-page":t[4]||(t[4]=e=>l.page=e),"page-size":l.limit,"onUpdate:page-size":t[5]||(t[5]=e=>l.limit=e),layout:"total, sizes, prev, pager, next, jumper",total:l.total,onSizeChange:t[6]||(t[6]=e=>d()),onCurrentChange:d},null,8,["current-page","page-size","total"])])]),s(Ee,{ref_key:"editLabelDialog",ref:h,onComplete:d,groupList:y},null,8,["groupList"])]),_:1})])}}});export{Lt as default};
