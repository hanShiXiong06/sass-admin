import{d as R,y as U,q as $,r as D,f as L,h as _,c as S,e as a,w as s,a as m,t as r,u as e,i as u,s as l,R as I,v as g,B as M,a5 as q,E as A,K,L as O,ab as W,aC as Y,M as G,a7 as H,ac as J,cE as Q,ad as X,W as Z,Y as ee}from"./index-0e396751.js";/* empty css                   *//* empty css                      *//* empty css                 *//* empty css               *//* empty css                  *//* empty css                  *//* empty css                     *//* empty css                  *//* empty css                 *//* empty css                    */import"./el-tooltip-4ed993c7.js";/* empty css                  *//* empty css                        *//* empty css                *//* empty css                */import"./el-form-item-4ed993c7.js";/* empty css                  */import{b as te,d as ae}from"./tkjhkd-125130d5.js";const le={class:"main-container"},oe={class:"flex justify-between items-center"},ne={class:"text-[20px]"},se={class:"mt-[10px]"},ie={class:"mt-[16px] flex justify-end"},Te=R({__name:"notice",setup(re){const x=U().meta.title;let t=$({page:1,limit:10,total:0,loading:!0,data:[],searchParam:{title:"",status:"",create_time:"",update_time:"",addon:""}});const h=D(),d=(i=1)=>{t.loading=!0,t.page=i,te({page:t.page,limit:t.limit,...t.searchParam}).then(o=>{t.loading=!1,t.data=o.data.data,t.total=o.data.total}).catch(()=>{t.loading=!1})};d();const b=L(),y=()=>{b.push("/tk_jhkd/noticeedit")},E=i=>{b.push("/tk_jhkd/noticeedit?id="+i.id)},C=i=>{q.confirm(l("tkjhkdNoticeDeleteTips"),l("warning"),{confirmButtonText:l("confirm"),cancelButtonText:l("cancel"),type:"warning"}).then(()=>{ae(i).then(()=>{d()}).catch(()=>{})})},w=i=>{i&&(i.resetFields(),d())};return(i,o)=>{const p=A,j=K,f=O,N=W,P=Y,T=G,k=H,c=J,v=Q,B=X,V=Z,F=ee;return _(),S("div",le,[a(k,{class:"box-card !border-none",shadow:"never"},{default:s(()=>[m("div",oe,[m("span",ne,r(e(x)),1),a(p,{type:"primary",class:"w-[100px]",onClick:y},{default:s(()=>[u(r(e(l)("addNotice")),1)]),_:1})]),a(k,{class:"box-card !border-none my-[10px] table-search-wrap",shadow:"never"},{default:s(()=>[a(T,{inline:!0,model:e(t).searchParam,ref_key:"searchFormRef",ref:h},{default:s(()=>[a(f,{label:e(l)("title"),prop:"title"},{default:s(()=>[a(j,{modelValue:e(t).searchParam.title,"onUpdate:modelValue":o[0]||(o[0]=n=>e(t).searchParam.title=n),placeholder:e(l)("titlePlaceholder")},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),a(f,{label:e(l)("status"),prop:"status"},{default:s(()=>[a(P,{class:"",modelValue:e(t).searchParam.status,"onUpdate:modelValue":o[1]||(o[1]=n=>e(t).searchParam.status=n),clearable:"",placeholder:e(l)("statusPlaceholder")},{default:s(()=>[a(N,{label:"全部",value:""})]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"]),a(f,null,{default:s(()=>[a(p,{type:"primary",onClick:o[2]||(o[2]=n=>d())},{default:s(()=>[u(r(e(l)("search")),1)]),_:1}),a(p,{onClick:o[3]||(o[3]=n=>w(h.value))},{default:s(()=>[u(r(e(l)("reset")),1)]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),m("div",se,[I((_(),g(B,{data:e(t).data,size:"large"},{empty:s(()=>[m("span",null,r(e(t).loading?"":e(l)("emptyData")),1)]),default:s(()=>[a(c,{prop:"title",label:e(l)("title"),"min-width":"120"},null,8,["label"]),a(c,{label:e(l)("image"),width:"100",align:"left"},{default:s(({row:n})=>[n.image?(_(),g(v,{key:0,src:e(M)(n.image)},null,8,["src"])):(_(),g(v,{key:1,icon:"UserFilled"}))]),_:1},8,["label"]),a(c,{prop:"status",label:e(l)("status"),"min-width":"120"},null,8,["label"]),a(c,{prop:"addon",label:e(l)("addon"),"min-width":"120"},null,8,["label"]),a(c,{label:e(l)("operation"),fixed:"right","min-width":"120"},{default:s(({row:n})=>[a(p,{type:"primary",link:"",onClick:z=>E(n)},{default:s(()=>[u(r(e(l)("edit")),1)]),_:2},1032,["onClick"]),a(p,{type:"danger",link:"",onClick:z=>C(n.id)},{default:s(()=>[u(r(e(l)("delete")),1)]),_:2},1032,["onClick"])]),_:1},8,["label"])]),_:1},8,["data"])),[[F,e(t).loading]]),m("div",ie,[a(V,{"current-page":e(t).page,"onUpdate:current-page":o[4]||(o[4]=n=>e(t).page=n),"page-size":e(t).limit,"onUpdate:page-size":o[5]||(o[5]=n=>e(t).limit=n),layout:"total, sizes, prev, pager, next, jumper",total:e(t).total,onSizeChange:o[6]||(o[6]=n=>d()),onCurrentChange:d},null,8,["current-page","page-size","total"])])])]),_:1})])}}});export{Te as default};
