import{d as Q,f as Z,y as ee,q as D,m as te,s as a,r as v,h as d,c as g,e as o,w as n,a as b,t as i,u as l,i as m,F as S,T as M,v as y,R as ae,C as E,B as le,a5 as oe,E as ne,K as re,L as se,ab as ie,aC as pe,M as de,a7 as ue,ac as me,ak as ce,ad as fe,W as ye,X as _e,Y as ve}from"./index-0e396751.js";/* empty css                   *//* empty css                  *//* empty css                   *//* empty css                      *//* empty css                 *//* empty css               *//* empty css                  *//* empty css                  *//* empty css                     *//* empty css                  *//* empty css                 *//* empty css                    */import"./el-tooltip-4ed993c7.js";/* empty css                        *//* empty css                *//* empty css                */import"./el-form-item-4ed993c7.js";/* empty css                  */import{d as ge,g as be,m as he,f as ke,h as Pe,c as we}from"./poster-fe5eb9cd.js";const Ce={class:"main-container"},xe={class:"flex justify-between items-center"},Ve={class:"text-page-title"},Te={key:0,class:"text-primary"},De={key:1},Ee={class:"mt-[16px] flex justify-end"},$e={class:"dialog-footer"},Ne={key:0},Fe=["src"],at=Q({__name:"list",setup(Be){const $=Z(),j=ee().meta.title,h=D({}),c=D({name:"",type:""}),I=te(()=>({name:[{required:!0,message:a("posterNamePlaceholder"),trigger:"blur"}],type:[{required:!0,message:a("posterTypePlaceholder"),trigger:"blur"}]})),N=v(),k=v(!1),K=async s=>{s&&await s.validate(async e=>{if(e){const u={type:c.type,name:c.name},C=$.resolve({path:"/poster/edit",query:u});window.open(C.href),k.value=!1,c.name="",c.type=""}})};(()=>{ge({}).then(s=>{for(let e in h)delete h[e];for(const e in s.data)h[e]=s.data[e]})})();const r=D({page:1,limit:10,total:0,loading:!0,data:[],searchParam:{name:"",type:""}}),F=v(),f=(s=1)=>{r.loading=!0,r.page=s,be({page:r.page,limit:r.limit,...r.searchParam}).then(e=>{r.loading=!1,r.data=e.data.data,r.total=e.data.total}).catch(()=>{r.loading=!1})};f();const O=s=>{const e=$.resolve({path:"/poster/edit",query:{id:s.id}});window.open(e.href)},p=v(!1),B=(s,e)=>{p.value||(p.value=!0,he({id:s,status:e}).then(u=>{f(),p.value=!1}))},W=s=>{p.value||(p.value=!0,ke({id:s}).then(e=>{f(),p.value=!1}))},X=s=>{oe.confirm(a("diyPosterDeleteTips"),a("warning"),{confirmButtonText:a("confirm"),cancelButtonText:a("cancel"),type:"warning"}).then(()=>{p.value||(p.value=!0,Pe(s).then(()=>{f(),p.value=!1}).catch(()=>{p.value=!1}))})},x=v(!1),V=v(""),Y=s=>{p.value||(p.value=!0,we({id:s.id,type:s.type}).then(e=>{e.data&&(V.value=e.data,x.value=!0),p.value=!1}))},A=s=>{s&&(s.resetFields(),f())};return(s,e)=>{const u=ne,C=re,P=se,T=ie,R=pe,U=de,z=ue,_=me,q=ce,G=fe,H=ye,L=_e,J=ve;return d(),g("div",Ce,[o(z,{class:"box-card !border-none",shadow:"never"},{default:n(()=>[b("div",xe,[b("span",Ve,i(l(j)),1),o(u,{type:"primary",class:"w-[100px]",onClick:e[0]||(e[0]=t=>k.value=!0)},{default:n(()=>[m(i(l(a)("添加海报")),1)]),_:1})]),o(z,{class:"box-card !border-none my-[10px] table-search-wrap",shadow:"never"},{default:n(()=>[o(U,{inline:!0,model:r.searchParam,ref_key:"searchFormDiyPosterRef",ref:F},{default:n(()=>[o(P,{label:l(a)("posterName"),prop:"name"},{default:n(()=>[o(C,{modelValue:r.searchParam.name,"onUpdate:modelValue":e[1]||(e[1]=t=>r.searchParam.name=t),modelModifiers:{trim:!0},placeholder:l(a)("posterNamePlaceholder")},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),o(P,{label:l(a)("posterType"),prop:"type"},{default:n(()=>[o(R,{modelValue:r.searchParam.type,"onUpdate:modelValue":e[2]||(e[2]=t=>r.searchParam.type=t),placeholder:l(a)("posterTypePlaceholder")},{default:n(()=>[o(T,{label:l(a)("all"),value:""},null,8,["label"]),(d(!0),g(S,null,M(h,t=>(d(),y(T,{label:t.name,value:t.type,key:t.type},null,8,["label","value"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"]),o(P,null,{default:n(()=>[o(u,{type:"primary",onClick:e[3]||(e[3]=t=>f())},{default:n(()=>[m(i(l(a)("search")),1)]),_:1}),o(u,{onClick:e[4]||(e[4]=t=>A(F.value))},{default:n(()=>[m(i(l(a)("reset")),1)]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),ae((d(),y(G,{data:r.data,size:"large"},{empty:n(()=>[b("span",null,i(r.loading?"":l(a)("emptyData")),1)]),default:n(()=>[o(_,{prop:"name",label:l(a)("posterName"),"min-width":"120"},null,8,["label"]),o(_,{prop:"type_name",label:l(a)("posterType"),"min-width":"80"},null,8,["label"]),o(_,{label:l(a)("status"),"min-width":"80"},{default:n(({row:t})=>[t.status==1?(d(),y(q,{key:0,type:"success",onClick:w=>B(t.id,0),class:"cursor-pointer"},{default:n(()=>[m(i(l(a)("启用")),1)]),_:2},1032,["onClick"])):(d(),y(q,{key:1,type:"info",onClick:w=>B(t.id,1),class:"cursor-pointer"},{default:n(()=>[m(i(l(a)("未启用")),1)]),_:2},1032,["onClick"]))]),_:1},8,["label"]),o(_,{label:l(a)("isDefault"),"min-width":"80"},{default:n(({row:t})=>[t.is_default==1?(d(),g("span",Te,i(l(a)("defaultPoster")),1)):(d(),g("span",De,i(l(a)("noDefault")),1))]),_:1},8,["label"]),o(_,{prop:"update_time",label:l(a)("updateTime"),"min-width":"120"},null,8,["label"]),o(_,{label:l(a)("operation"),fixed:"right",align:"right","min-width":"160"},{default:n(({row:t})=>[o(u,{type:"primary",link:"",onClick:w=>Y(t)},{default:n(()=>[m(i(l(a)("preview")),1)]),_:2},1032,["onClick"]),t.is_default==0?(d(),y(u,{key:0,type:"primary",link:"",onClick:w=>W(t.id)},{default:n(()=>[m(i(l(a)("modifyDefault")),1)]),_:2},1032,["onClick"])):E("",!0),o(u,{type:"primary",link:"",onClick:w=>O(t)},{default:n(()=>[m(i(l(a)("edit")),1)]),_:2},1032,["onClick"]),t.is_default==0?(d(),y(u,{key:1,type:"primary",link:"",onClick:w=>X(t.id)},{default:n(()=>[m(i(l(a)("delete")),1)]),_:2},1032,["onClick"])):E("",!0)]),_:1},8,["label"])]),_:1},8,["data"])),[[J,r.loading]]),b("div",Ee,[o(H,{"current-page":r.page,"onUpdate:current-page":e[5]||(e[5]=t=>r.page=t),"page-size":r.limit,"onUpdate:page-size":e[6]||(e[6]=t=>r.limit=t),layout:"total, sizes, prev, pager, next, jumper",total:r.total,onSizeChange:e[7]||(e[7]=t=>f()),onCurrentChange:f},null,8,["current-page","page-size","total"])])]),_:1}),o(L,{modelValue:k.value,"onUpdate:modelValue":e[12]||(e[12]=t=>k.value=t),title:l(a)("addPosterTitle"),width:"350px"},{footer:n(()=>[b("span",$e,[o(u,{onClick:e[10]||(e[10]=t=>k.value=!1)},{default:n(()=>[m(i(l(a)("cancel")),1)]),_:1}),o(u,{type:"primary",onClick:e[11]||(e[11]=t=>K(N.value))},{default:n(()=>[m(i(l(a)("confirm")),1)]),_:1})])]),default:n(()=>[o(U,{model:c,"label-width":"90px",ref_key:"formRef",ref:N,rules:l(I)},{default:n(()=>[o(P,{label:l(a)("posterName"),prop:"name"},{default:n(()=>[o(C,{modelValue:c.name,"onUpdate:modelValue":e[8]||(e[8]=t=>c.name=t),modelModifiers:{trim:!0},placeholder:l(a)("posterNamePlaceholder"),clearable:"",maxlength:"12","show-word-limit":"",class:"w-full"},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),o(P,{label:l(a)("posterType"),prop:"type"},{default:n(()=>[o(R,{modelValue:c.type,"onUpdate:modelValue":e[9]||(e[9]=t=>c.type=t),placeholder:l(a)("posterTypePlaceholder"),class:"!w-full"},{default:n(()=>[(d(!0),g(S,null,M(h,t=>(d(),y(T,{label:t.name,value:t.type,key:t.type},null,8,["label","value"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1},8,["model","rules"])]),_:1},8,["modelValue","title"]),o(L,{modelValue:x.value,"onUpdate:modelValue":e[13]||(e[13]=t=>x.value=t),title:l(a)("previewDialogTitle"),width:"400px",height:"640px"},{default:n(()=>[V.value?(d(),g("div",Ne,[b("img",{src:l(le)(V.value),class:"w-[360px] h-[640px]"},null,8,Fe)])):E("",!0)]),_:1},8,["modelValue","title"])])}}});export{at as default};
