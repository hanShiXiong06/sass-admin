import{d as B,x as T,n as P,r as _,h as b,c as S,e as a,w as r,a as d,t as m,u as e,q as o,i as u,R as z,s as F,a5 as N,bR as V,L as R,E as Y,M as $,a7 as M,ad as j,ae as U,W as I,Y as q}from"./index-904cb7a2.js";/* empty css                   *//* empty css                      *//* empty css                 *//* empty css               *//* empty css                  *//* empty css                  *//* empty css                     *//* empty css                  *//* empty css                 *//* empty css                    */import"./el-tooltip-4ed993c7.js";/* empty css                        *//* empty css                *//* empty css                *//* empty css                  */import"./el-form-item-4ed993c7.js";/* empty css                       */import{_ as W,g as A,d as G}from"./spdrlist-edit.vue_vue_type_style_index_0_lang-c12fb938.js";import{_ as H}from"./_plugin-vue_export-helper-c27b6911.js";/* empty css                  *//* empty css                   */const J={class:"main-container"},K={class:"flex justify-between items-center"},O={class:"text-lg"},Q={class:"mt-[10px]"},X={class:"mt-[16px] flex justify-end"},Z=B({__name:"spdrlist",setup(ee){const v=T().meta.title;let t=P({page:1,limit:10,total:0,loading:!0,data:[],searchParam:{status:"",create_time:[]}});const f=_();_([]);const n=(i=1)=>{t.loading=!0,t.page=i,A({page:t.page,limit:t.limit,...t.searchParam}).then(l=>{t.loading=!1,t.data=l.data.data,t.total=l.data.total}).catch(()=>{t.loading=!1})};n();const w=_(null),x=i=>{N.confirm(o("spdrListDeleteTips"),o("warning"),{confirmButtonText:o("confirm"),cancelButtonText:o("cancel"),type:"warning"}).then(()=>{G(i).then(()=>{n()}).catch(()=>{})})},y=i=>{i&&(i.resetFields(),n())};return(i,l)=>{const k=V,g=R,c=Y,C=$,h=M,p=j,D=U,E=I,L=q;return b(),S("div",J,[a(h,{class:"box-card !border-none",shadow:"never"},{default:r(()=>[d("div",K,[d("span",O,m(e(v)),1)]),a(h,{class:"box-card !border-none my-[10px] table-search-wrap",shadow:"never"},{default:r(()=>[a(C,{inline:!0,model:e(t).searchParam,ref_key:"searchFormRef",ref:f},{default:r(()=>[a(g,{label:e(o)("createTime"),prop:"create_time"},{default:r(()=>[a(k,{modelValue:e(t).searchParam.create_time,"onUpdate:modelValue":l[0]||(l[0]=s=>e(t).searchParam.create_time=s),type:"datetimerange",format:"YYYY-MM-DD hh:mm:ss","start-placeholder":e(o)("startDate"),"end-placeholder":e(o)("endDate")},null,8,["modelValue","start-placeholder","end-placeholder"])]),_:1},8,["label"]),a(g,null,{default:r(()=>[a(c,{type:"primary",onClick:l[1]||(l[1]=s=>n())},{default:r(()=>[u(m(e(o)("search")),1)]),_:1}),a(c,{onClick:l[2]||(l[2]=s=>y(f.value))},{default:r(()=>[u(m(e(o)("reset")),1)]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),d("div",Q,[z((b(),F(D,{data:e(t).data,size:"large"},{empty:r(()=>[d("span",null,m(e(t).loading?"":e(o)("emptyData")),1)]),default:r(()=>[a(p,{prop:"flie",label:e(o)("flie"),"min-width":"120","show-overflow-tooltip":!0},null,8,["label"]),a(p,{prop:"num",label:e(o)("num"),"min-width":"120","show-overflow-tooltip":!0},null,8,["label"]),a(p,{prop:"success_num",label:e(o)("successNum"),"min-width":"120","show-overflow-tooltip":!0},null,8,["label"]),a(p,{prop:"fail_num",label:e(o)("failNum"),"min-width":"120","show-overflow-tooltip":!0},null,8,["label"]),a(p,{label:e(o)("operation"),fixed:"right","min-width":"120"},{default:r(({row:s})=>[a(c,{type:"primary",link:"",onClick:ae=>x(s.id)},{default:r(()=>[u(m(e(o)("delete")),1)]),_:2},1032,["onClick"])]),_:1},8,["label"])]),_:1},8,["data"])),[[L,e(t).loading]]),d("div",X,[a(E,{"current-page":e(t).page,"onUpdate:current-page":l[3]||(l[3]=s=>e(t).page=s),"page-size":e(t).limit,"onUpdate:page-size":l[4]||(l[4]=s=>e(t).limit=s),layout:"total, sizes, prev, pager, next, jumper",total:e(t).total,onSizeChange:l[5]||(l[5]=s=>n()),onCurrentChange:n},null,8,["current-page","page-size","total"])])]),a(W,{ref_key:"editSpdrListDialog",ref:w,onComplete:n},null,512)]),_:1})])}}});const De=H(Z,[["__scopeId","data-v-029b8db0"]]);export{De as default};
