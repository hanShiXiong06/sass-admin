import{d as pe,x as ue,f as de,r as p,n as re,h as v,c as I,e as l,w as n,a as c,t as u,u as o,q as e,i as m,B as k,R as ce,s as x,a5 as C,G as P,m as me,ay as fe,az as _e,E as ge,ad as ve,aa as he,ae as be,W as we,a7 as ye,K as Ve,L as Te,M as ke,X as xe,V as Ce,Y as Ee}from"./index-99f00cf3.js";/* empty css                   *//* empty css                     *//* empty css                  *//* empty css                   *//* empty css                */import{_ as Be}from"./index.vue_vue_type_style_index_0_lang-bad0a04a.js";import"./el-form-item-4ed993c7.js";/* empty css                 *//* empty css                *//* empty css                      *//* empty css               *//* empty css                  *//* empty css                  *//* empty css                  *//* empty css                 *//* empty css                    */import"./el-tooltip-4ed993c7.js";/* empty css                        *//* empty css                  *//* empty css                    */import{g as Ue,a as Re,b as Le,s as ze,c as Me}from"./weapp-3dcfdbcd.js";import{a as We}from"./module-6f59d22d.js";import{s as De}from"./wxoplatform-eba9a07b.js";/* empty css                    */const Fe={class:"main-container"},Ne={class:"flex justify-between items-center"},Se={class:"text-page-title"},$e={key:0,class:"mt-[20px]"},Ie={class:"mt-[16px] flex justify-end"},Pe={class:"dialog-footer"},Ae=["innerHTML"],je=["innerHTML"],He={class:"flex justify-end"},va=pe({__name:"code",setup(Ke){const A=ue(),E=de(),j=A.meta.title,B=p(!1),w=p(!0),i=re({page:1,limit:10,total:0,loading:!1,data:[]}),f=p({desc:"",code:"",path:"",content:""}),h=p(!1),U=p("");We().then(s=>{s.data.data&&s.data.data.auth_code&&(U.value=s.data.data.auth_code,V()),w.value=!1}).catch(()=>{w.value=!1});const R=p({app_id:"",app_secret:"",is_authorization:0});Ue().then(s=>{R.value=s.data});const L=p("/channel/weapp/code"),H=s=>{E.push({path:L.value})},D=p(null),g=(s=1)=>{i.loading=!0,i.page=s,Le({page:i.page,limit:i.limit}).then(t=>{i.loading=!1,i.data=t.data.data,i.total=t.data.total,s==1&&i.data.length&&i.data[0].status==0&&N(i.data[0].task_key)}).catch(()=>{i.loading=!1})};g();const K=()=>{D.value.clearValidate()},d=p(!1),F=()=>{if(!U.value){G();return}if(!R.value.app_id){X();return}d.value||(d.value=!0,y.value="",ze(f.value).then(s=>{g(),V(),d.value=!1}).catch(()=>{d.value=!1}))},q=()=>{C.alert(e("localInsertTips"),e("warning"),{confirmButtonText:e("confirm")})},y=p(""),V=()=>{U.value&&Re().then(s=>{s.data&&(y.value=`<img src="${s.data}" class="w-[150px]">`)}).catch()},N=s=>{Me(s).then(t=>{const _=t.data.data??[];if(_[0]&&_[0].length){const b=_[0][_[0].length-1];if(b.code==0){g();return}if(b.code==1&&b.percent==100){g(),V(),!P.get("weappUploadTipsLock")&&(h.value=!0);return}setTimeout(()=>{N(s)},2e3)}})},G=()=>{me()=="admin"?C.confirm(e("authTips"),e("warning"),{distinguishCancelAndClose:!0,confirmButtonText:e("toBind"),cancelButtonText:e("toNiucloud")}).then(()=>{E.push({path:"/app/authorize"})}).catch(s=>{s==="cancel"&&window.open("https://www.niucloud.com/app")}):C.alert(e("siteAuthTips"),e("warning"))},X=()=>{C.confirm(e("weappTips"),e("warning"),{confirmButtonText:e("toSetting"),cancelButtonText:e("cancel")}).then(()=>{E.push({path:"/channel/weapp/config"})})},S=p(""),z=p(!1),Y=s=>{S.value=s.fail_reason,z.value=!0},J=()=>{P.set({key:"weappUploadTipsLock",data:!0}),h.value=!1},O=()=>{d.value||(d.value=!0,De().then(()=>{g(),V(),d.value=!1}).catch(()=>{d.value=!1}))};return(s,t)=>{const _=fe,b=_e,r=ge,T=ve,Q=he,Z=be,ee=we,ae=ye,$=Ve,M=Te,te=Be,le=ke,W=xe,oe=Ce,ne=Ee;return v(),I("div",Fe,[l(ae,{class:"card !border-none",shadow:"never"},{default:n(()=>[c("div",Ne,[c("span",Se,u(o(j)),1)]),l(b,{modelValue:L.value,"onUpdate:modelValue":t[0]||(t[0]=a=>L.value=a),class:"my-[20px]",onTabChange:H},{default:n(()=>[l(_,{label:o(e)("weappAccessFlow"),name:"/channel/weapp"},null,8,["label"]),l(_,{label:o(e)("subscribeMessage"),name:"/channel/weapp/message"},null,8,["label"]),l(_,{label:o(e)("weappRelease"),name:"/channel/weapp/code"},null,8,["label"])]),_:1},8,["modelValue"]),R.value.is_authorization?k("",!0):(v(),I("div",$e,[l(r,{type:"primary",onClick:F,loading:d.value,disabled:w.value},{default:n(()=>[m(u(o(e)("cloudRelease")),1)]),_:1},8,["loading","disabled"]),l(r,{onClick:q,disabled:w.value},{default:n(()=>[m(u(o(e)("localRelease")),1)]),_:1},8,["disabled"])])),ce((v(),x(Z,{class:"mt-[15px]",data:i.data,size:"default"},{empty:n(()=>[c("span",null,u(o(e)("emptyData")),1)]),default:n(()=>[l(T,{prop:"version",label:o(e)("code"),align:"left"},null,8,["label"]),l(T,{prop:"status_name",label:o(e)("status"),align:"left"},{default:n(({row:a})=>[c("div",null,u(a.status_name),1)]),_:1},8,["label"]),l(T,{prop:"create_time",label:o(e)("createTime"),align:"center"},null,8,["label"]),l(T,{label:o(e)("operation"),fixed:"right",align:"right","min-width":"120"},{default:n(({row:a,$index:se})=>[y.value&&se==0&&(a.status==1||a.status==2)&&i.page==1?(v(),x(Q,{key:0,content:y.value,"raw-content":"",effect:"light"},{default:n(()=>[l(r,{type:"primary",link:""},{default:n(()=>[m(u(o(e)("preview")),1)]),_:1})]),_:1},8,["content"])):k("",!0),a.status==-1||a.status==-2?(v(),x(r,{key:1,type:"primary",link:"",onClick:ie=>Y(a)},{default:n(()=>[m(u(o(e)("failReason")),1)]),_:2},1032,["onClick"])):k("",!0),a.status==-2?(v(),x(r,{key:2,type:"primary",link:"",onClick:ie=>O(a),loading:d.value},{default:n(()=>[m(u(o(e)("againUpload")),1)]),_:2},1032,["onClick","loading"])):k("",!0)]),_:1},8,["label"])]),_:1},8,["data"])),[[ne,i.loading]]),c("div",Ie,[l(ee,{"current-page":i.page,"onUpdate:current-page":t[1]||(t[1]=a=>i.page=a),"page-size":i.limit,"onUpdate:page-size":t[2]||(t[2]=a=>i.limit=a),layout:"total, sizes, prev, pager, next, jumper",total:i.total,onSizeChange:t[3]||(t[3]=a=>g()),onCurrentChange:g},null,8,["current-page","page-size","total"])])]),_:1}),l(W,{modelValue:B.value,"onUpdate:modelValue":t[8]||(t[8]=a=>B.value=a),title:o(e)("codeDownTwoDesc"),width:"30%","before-close":K},{footer:n(()=>[c("span",Pe,[l(r,{onClick:t[7]||(t[7]=a=>B.value=!1)},{default:n(()=>[m(u(o(e)("cancel")),1)]),_:1}),l(r,{type:"primary",onClick:F},{default:n(()=>[m(u(o(e)("confirm")),1)]),_:1})])]),default:n(()=>[l(le,{ref_key:"ruleFormRef",ref:D,model:f.value,"label-width":"120px"},{default:n(()=>[l(M,{prop:"code",label:o(e)("code")},{default:n(()=>[l($,{modelValue:f.value.code,"onUpdate:modelValue":t[4]||(t[4]=a=>f.value.code=a),modelModifiers:{trim:!0},placeholder:o(e)("codePlaceholder"),onkeyup:"this.value = this.value.replace(/[^\\d\\.]/g,'');"},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),l(M,{prop:"path",label:o(e)("path")},{default:n(()=>[l(te,{modelValue:f.value.path,"onUpdate:modelValue":t[5]||(t[5]=a=>f.value.path=a),api:"weapp/upload",accept:".zip"},null,8,["modelValue","accept"])]),_:1},8,["label"]),l(M,{label:o(e)("content")},{default:n(()=>[l($,{type:"textarea",modelValue:f.value.content,"onUpdate:modelValue":t[6]||(t[6]=a=>f.value.content=a),modelModifiers:{trim:!0},placeholder:o(e)("contentPlaceholder")},null,8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1},8,["model"])]),_:1},8,["modelValue","title"]),l(W,{modelValue:z.value,"onUpdate:modelValue":t[9]||(t[9]=a=>z.value=a),title:o(e)("failReason"),width:"60%"},{default:n(()=>[l(oe,{class:"h-[60vh] w-full whitespace-pre-wrap p-[20px]"},{default:n(()=>[c("div",{innerHTML:S.value},null,8,Ae)]),_:1})]),_:1},8,["modelValue","title"]),l(W,{modelValue:h.value,"onUpdate:modelValue":t[11]||(t[11]=a=>h.value=a),title:o(e)("warning"),width:"500px",draggable:""},{footer:n(()=>[c("div",He,[l(r,{onClick:J,type:"primary"},{default:n(()=>[m(u(o(e)("knownToKnow")),1)]),_:1}),l(r,{onClick:t[10]||(t[10]=a=>h.value=!1),type:"primary",plain:""},{default:n(()=>[m(u(o(e)("confirm")),1)]),_:1})])]),default:n(()=>[c("span",{innerHTML:o(e)("uploadSuccessTips")},null,8,je)]),_:1},8,["modelValue","title"])])}}});export{va as default};
