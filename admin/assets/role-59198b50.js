import{d as $,x as z,n as j,r as b,h as f,c as L,e as l,w as n,a as d,t as i,u as r,q as o,i as p,R as M,s as g,B as x,am as U,a5 as I,an as S,K as q,L as K,E as W,M as Y,ad as A,al as G,ae as H,W as J,a7 as O,Y as Q}from"./index-99f00cf3.js";/* empty css                   *//* empty css                *//* empty css                      *//* empty css                 *//* empty css               *//* empty css                  *//* empty css                  *//* empty css                     *//* empty css                  *//* empty css                 *//* empty css                    */import"./el-tooltip-4ed993c7.js";/* empty css                        *//* empty css                *//* empty css                  */import"./el-form-item-4ed993c7.js";import{_ as X}from"./edit-role.vue_vue_type_script_setup_true_async_true_lang-0bcd43ee.js";/* empty css                  *//* empty css                   *//* empty css                *//* empty css                       *//* empty css                 */const Z={class:"main-container"},ee={class:"flex justify-between items-center"},te={class:"text-page-title"},ae={class:"flex justify-between items-center mt-[20px]"},le={class:"mt-[16px] flex justify-end"},Te=$({__name:"role",setup(oe){const k=z().meta.title,e=j({page:1,limit:10,total:0,loading:!0,data:[],searchParam:{search:""}}),v=b(),C=s=>{s&&(s.resetFields(),m())},m=(s=1)=>{e.loading=!0,e.page=s,U({page:e.page,limit:e.limit,role_name:e.searchParam.search}).then(t=>{e.loading=!1,e.data=t.data.data,e.total=t.data.total}).catch(()=>{e.loading=!1})};m();const c=b(null),E=()=>{c.value.setFormData(),c.value.showDialog=!0},D=s=>{c.value.setFormData(s),c.value.showDialog=!0},R=s=>{I.confirm(o("roleDeleteTips"),o("warning"),{confirmButtonText:o("confirm"),cancelButtonText:o("cancel"),type:"warning"}).then(()=>{S(s).then(()=>{m()}).catch(()=>{})})};return(s,t)=>{const w=q,h=K,u=W,B=Y,_=A,y=G,T=H,F=J,N=O,P=Q;return f(),L("div",Z,[l(N,{class:"box-card !border-none",shadow:"never"},{default:n(()=>[d("div",ee,[d("span",te,i(r(k)),1)]),d("div",ae,[l(B,{inline:!0,model:e.searchParam,ref_key:"searchFormRef",ref:v},{default:n(()=>[l(h,{label:r(o)("roleName"),prop:"search"},{default:n(()=>[l(w,{modelValue:e.searchParam.search,"onUpdate:modelValue":t[0]||(t[0]=a=>e.searchParam.search=a),modelModifiers:{trim:!0},class:"w-[240px]",placeholder:r(o)("roleNamePlaceholder")},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),l(h,null,{default:n(()=>[l(u,{type:"primary",onClick:t[1]||(t[1]=a=>m())},{default:n(()=>[p(i(r(o)("search")),1)]),_:1}),l(u,{onClick:t[2]||(t[2]=a=>C(v.value))},{default:n(()=>[p(i(r(o)("reset")),1)]),_:1})]),_:1})]),_:1},8,["model"]),l(u,{type:"primary",class:"w-[100px] self-start",onClick:E},{default:n(()=>[p(i(r(o)("addRole")),1)]),_:1})]),d("div",null,[M((f(),g(T,{data:e.data,size:"large"},{empty:n(()=>[d("span",null,i(e.loading?"":r(o)("emptyData")),1)]),default:n(()=>[l(_,{prop:"role_name",label:r(o)("roleName")},null,8,["label"]),l(_,{label:r(o)("status")},{default:n(({row:a})=>[a.status==1?(f(),g(y,{key:0,type:"success"},{default:n(()=>[p(i(a.status_name),1)]),_:2},1024)):x("",!0),a.status==0?(f(),g(y,{key:1,type:"error"},{default:n(()=>[p(i(a.status_name),1)]),_:2},1024)):x("",!0)]),_:1},8,["label"]),l(_,{prop:"create_time",label:r(o)("createTime")},null,8,["label"]),l(_,{label:r(o)("operation"),align:"right",fixed:"right",width:"130"},{default:n(({row:a})=>[l(u,{type:"primary",link:"",onClick:V=>D(a)},{default:n(()=>[p(i(r(o)("edit")),1)]),_:2},1032,["onClick"]),l(u,{type:"primary",link:"",onClick:V=>R(a.role_id)},{default:n(()=>[p(i(r(o)("delete")),1)]),_:2},1032,["onClick"])]),_:1},8,["label"])]),_:1},8,["data"])),[[P,e.loading]]),d("div",le,[l(F,{"current-page":e.page,"onUpdate:current-page":t[3]||(t[3]=a=>e.page=a),"page-size":e.limit,"onUpdate:page-size":t[4]||(t[4]=a=>e.limit=a),layout:"total, sizes, prev, pager, next, jumper",total:e.total,onSizeChange:t[5]||(t[5]=a=>m()),onCurrentChange:m},null,8,["current-page","page-size","total"])])]),l(X,{ref_key:"editRoleDialog",ref:c,onComplete:t[6]||(t[6]=a=>m())},null,512)]),_:1})])}}});export{Te as default};