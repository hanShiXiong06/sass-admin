import{d as ye,x as Ve,f as be,r as _,n as D,l as W,q as t,h as p,c as y,e as o,w as r,u as a,s as M,a as w,t as i,i as h,B as S,R as I,F as L,T as Z,v as we,b$ as j,a0 as xe,a3 as F,a5 as ke,aq as Ae,U as G,aR as Ne,a7 as Ce,aN as Ee,E as Te,aO as Be,ad as Ue,K as De,ae as Me,L as Re,M as $e,X as Pe,ac as Se,aD as Ie,bv as Oe,Y as qe}from"./index-99f00cf3.js";/* empty css                   *//* empty css                        *//* empty css                 *//* empty css                  *//* empty css               *//* empty css                  *//* empty css                  *//* empty css                     *//* empty css                  *//* empty css                  *//* empty css                   *//* empty css                */import"./el-form-item-4ed993c7.js";/* empty css                 *//* empty css                    */import"./el-tooltip-4ed993c7.js";/* empty css                        *//* empty css               *//* empty css               *//* empty css                *//* empty css                   *//* empty css                       */import{i as Le,e as je,j as J}from"./goods-c64a9d59.js";const Fe={class:"main-container"},Ge={class:"ml-[10px]"},Je={class:"ml-[10px]"},Ke={key:0},ze={key:1},He={key:2},Xe={key:1},Ye={class:"dialog-footer"},Qe={class:"dialog-footer"},xt=ye({__name:"attr_edit",setup(We){const R=Ve(),ee=be(),te=R.meta.title;R.query.attr_id=R.query.attr_id||0;const $=_(R.query.attr_id),s=D({}),ae=_(30),k=D({loading:!0,data:[]}),E=()=>{Le($.value).then(d=>{Object.assign(s,d.data),s.attr_value_format?s.attr_value_format=JSON.parse(s.attr_value_format):s.attr_value_format=[],k.data=F(s.attr_value_format),k.data.sort((l,c)=>c.sort-l.sort),k.loading=!1})};E();const T=_(!1),A=_(!1),K=_(),f=D({attr_id:0,attr_name:"",sort:0}),le=W(()=>({attr_name:[{required:!0,message:t("attrNamePlaceholder"),trigger:"blur"}]})),oe=d=>{f.attr_id=s.attr_id,f.attr_name=s.attr_name,f.sort=s.sort,f.color=s.color,T.value=!0},re=async d=>{A.value||!d||await d.validate(async l=>{l&&(A.value=!0,je(f).then(c=>{A.value=!1,T.value=!1,E()}).catch(c=>{A.value=!1}))})},ne=d=>{ke.confirm(t("goodsAttrDeleteTips"),t("warning"),{confirmButtonText:t("confirm"),cancelButtonText:t("cancel"),type:"warning"}).then(()=>{if(V.value)return;V.value=!0,s.attr_value_format.splice(d,1);let l={attr_id:$.value,attr_value_format:JSON.stringify(s.attr_value_format)};J(l).then(c=>{V.value=!1,E()}).catch(c=>{V.value=!1})})},N=_(!1),C=_(!1),z=_(),O=_(""),n=D({attr_value_id:0,attr_value_name:"",type:"radio",sort:0,child:[]}),se=D([{label:"单选",value:"radio"},{label:"多选",value:"checkbox"},{label:"输入",value:"text"}]),H=()=>Math.floor(new Date().getSeconds())+Math.floor(new Date().getMilliseconds()),ue=()=>{n.attr_value_id=s.attr_value_format.length+H(),n.attr_value_name="",n.type="radio",n.sort=0,n.color="#000000",n.child=[],N.value=!0,O.value=t("addShopGoodsAttr"),P.value=-1},de=Ae((d,l)=>{if(isNaN(d)||!/^\d{0,10}$/.test(d)){G({type:"warning",message:`${t("sortTips")}`});return}for(let u=0;u<s.attr_value_format.length;u++)if(s.attr_value_format[u].attr_value_id==l.attr_value_id){s.attr_value_format[u].sort=d;break}let c={attr_id:$.value,attr_value_format:JSON.stringify(s.attr_value_format)};J(c).then(u=>{E()}).catch(u=>{})}),ie=()=>{n.child.push({id:n.child.length+H(),name:"",color:"#000000",sort:0})},me=(d,l)=>{O.value=t("updateShopGoodsAttr"),P.value=d.attr_value_id,Object.assign(n,F(d)),N.value=!0},pe=W(()=>({attr_value_name:[{required:!0,message:t("attrValueNamePlaceholder"),trigger:"blur"}]})),P=_(-1),V=_(!1),ce=async d=>{C.value||!d||await d.validate(async l=>{if(l){if(n.type!="text"){if(n.child.length==0){G({type:"warning",message:`${t("attrValueNamePlaceholder")}`});return}for(let u=0;u<n.child.length;u++)if(n.child[u].name==""){G({type:"warning",message:`${t("attrValueNamePlaceholder")}`});break}}if(V.value)return;if(V.value=!0,n.child.sort((u,B)=>B.sort-u.sort),C.value=!0,P.value==-1)s.attr_value_format.push(n);else for(let u=0;u<s.attr_value_format.length;u++)if(s.attr_value_format[u].attr_value_id==P.value){s.attr_value_format[u]=F(n);break}let c={attr_id:$.value,attr_value_format:JSON.stringify(s.attr_value_format)};J(c).then(u=>{C.value=!1,N.value=!1,V.value=!1,E()}).catch(u=>{C.value=!1,V.value=!1})}})},_e=(d,l)=>{n.child.splice(l,1)};return(d,l)=>{const c=Ne,u=Ce,B=Ee,v=Te,fe=Be,g=Ue,x=De,X=Me,U=Re,Y=$e,Q=Pe,ve=Se,he=Ie,ge=Oe,q=qe;return p(),y("div",Fe,[o(u,{class:"card !border-none mb-[15px]",shadow:"never"},{default:r(()=>[o(c,{content:a(te),icon:d.ArrowLeft,onBack:l[0]||(l[0]=e=>a(ee).push("/phone_shop/goods/attr"))},null,8,["content","icon"])]),_:1}),o(u,{class:"box-card !border-none",shadow:"never"},{default:r(()=>[Object.keys(s).length?(p(),M(fe,{key:0,gutter:20,class:"text-[14px]"},{default:r(()=>[o(B,{span:8},{default:r(()=>[w("label",null,i(a(t)("attrName"))+"：",1),w("span",Ge,i(s.attr_name),1)]),_:1}),o(B,{span:6},{default:r(()=>[w("label",null,i(a(t)("sort"))+"：",1),w("span",Je,i(s.sort),1)]),_:1}),o(B,{span:6},{default:r(()=>[o(v,{type:"primary",link:"",onClick:oe},{default:r(()=>[h(i(a(t)("edit")),1)]),_:1})]),_:1})]),_:1})):S("",!0),o(v,{type:"primary",onClick:ue,class:"my-[15px]"},{default:r(()=>[h(i(a(t)("addShopGoodsAttr")),1)]),_:1}),I((p(),M(X,{data:k.data,size:"large"},{empty:r(()=>[w("span",null,i(k.loading?"":a(t)("emptyData")),1)]),default:r(()=>[o(g,{prop:"attr_value_name",label:a(t)("attrValueName"),"min-width":"200","show-overflow-tooltip":!0},null,8,["label"]),o(g,{prop:"type",label:a(t)("attrValueType"),"min-width":"100","show-overflow-tooltip":!0},{default:r(({row:e})=>[e.type=="radio"?(p(),y("span",Ke,i(a(t)("attrValueTypeRadio")),1)):e.type=="checkbox"?(p(),y("span",ze,i(a(t)("attrValueTypeCheckbox")),1)):S("",!0),e.type=="text"?(p(),y("span",He,i(a(t)("attrValueTypeText")),1)):S("",!0)]),_:1},8,["label"]),o(g,{prop:"child",label:a(t)("attrValueChild"),"min-width":"320","show-overflow-tooltip":!0},{default:r(({row:e})=>[e.type!="text"?(p(!0),y(L,{key:0},Z(e.child,(m,b)=>(p(),y("span",{class:we({"mr-[5px]":b+1!=e.child.length})},i(m.name),3))),256)):(p(),y("span",Xe,"-"))]),_:1},8,["label"]),o(g,{prop:"sort",label:a(t)("sort"),"min-width":"120",sortable:"custom"},{default:r(({row:e,$index:m})=>[o(x,{modelValue:e.sort,"onUpdate:modelValue":b=>e.sort=b,modelModifiers:{trim:!0},class:"w-[70px]",maxlength:"10",onInput:b=>a(de)(b,e)},null,8,["modelValue","onUpdate:modelValue","onInput"])]),_:1},8,["label"]),o(g,{label:a(t)("operation"),fixed:"right",align:"right","min-width":"120"},{default:r(({row:e,$index:m})=>[o(v,{type:"primary",link:"",onClick:b=>me(e,m)},{default:r(()=>[h(i(a(t)("edit")),1)]),_:2},1032,["onClick"]),o(v,{type:"primary",link:"",onClick:b=>ne(m)},{default:r(()=>[h(i(a(t)("delete")),1)]),_:2},1032,["onClick"])]),_:1},8,["label"])]),_:1},8,["data"])),[[q,k.loading]])]),_:1}),o(Q,{modelValue:T.value,"onUpdate:modelValue":l[6]||(l[6]=e=>T.value=e),title:a(t)("updateShopGoodsAttr"),width:"500px","destroy-on-close":!0},{footer:r(()=>[w("span",Ye,[o(v,{onClick:l[4]||(l[4]=e=>T.value=!1)},{default:r(()=>[h(i(a(t)("cancel")),1)]),_:1}),o(v,{type:"primary",loading:A.value,onClick:l[5]||(l[5]=e=>re(K.value))},{default:r(()=>[h(i(a(t)("confirm")),1)]),_:1},8,["loading"])])]),default:r(()=>[I((p(),M(Y,{model:f,"label-width":"120px",ref_key:"formRef",ref:K,rules:a(le),class:"page-form"},{default:r(()=>[o(U,{label:a(t)("attrName"),prop:"attr_name"},{default:r(()=>[o(x,{modelValue:f.attr_name,"onUpdate:modelValue":l[1]||(l[1]=e=>f.attr_name=e),modelModifiers:{trim:!0},clearable:"",placeholder:a(t)("attrNamePlaceholder"),class:"input-width",maxlength:"20"},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),o(U,{label:a(t)("sort")},{default:r(()=>[o(x,{modelValue:f.sort,"onUpdate:modelValue":l[2]||(l[2]=e=>f.sort=e),modelModifiers:{trim:!0},maxlength:"6","show-word-limit":"",clearable:"",placeholder:a(t)("sortPlaceholder"),class:"input-width",onKeyup:l[3]||(l[3]=e=>a(j)(e))},null,8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1},8,["model","rules"])),[[q,A.value]])]),_:1},8,["modelValue","title"]),o(Q,{modelValue:N.value,"onUpdate:modelValue":l[14]||(l[14]=e=>N.value=e),title:O.value,width:"700px","destroy-on-close":!0},{footer:r(()=>[w("span",Qe,[o(v,{onClick:l[12]||(l[12]=e=>N.value=!1)},{default:r(()=>[h(i(a(t)("cancel")),1)]),_:1}),o(v,{type:"primary",loading:C.value,onClick:l[13]||(l[13]=e=>ce(z.value))},{default:r(()=>[h(i(a(t)("confirm")),1)]),_:1},8,["loading"])])]),default:r(()=>[I((p(),M(Y,{model:n,"label-width":"120px",ref_key:"formAttrValueRef",ref:z,rules:a(pe),class:"page-form"},{default:r(()=>[o(U,{label:a(t)("attrValueName"),prop:"attr_value_name"},{default:r(()=>[o(x,{modelValue:n.attr_value_name,"onUpdate:modelValue":l[7]||(l[7]=e=>n.attr_value_name=e),modelModifiers:{trim:!0},clearable:"",placeholder:a(t)("attrValueNamePlaceholder"),class:"input-width",maxlength:"20","show-word-limit":""},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),o(U,{label:a(t)("attrValueType")},{default:r(()=>[o(he,{modelValue:n.type,"onUpdate:modelValue":l[8]||(l[8]=e=>n.type=e),class:"!w-[150px]",disabled:d.actionAttrValueIndex>-1},{default:r(()=>[(p(!0),y(L,null,Z(se,e=>(p(),M(ve,{label:e.label,value:e.value},null,8,["label","value"]))),256))]),_:1},8,["modelValue","disabled"])]),_:1},8,["label"]),o(U,{label:a(t)("sort")},{default:r(()=>[o(x,{modelValue:n.sort,"onUpdate:modelValue":l[9]||(l[9]=e=>n.sort=e),modelModifiers:{trim:!0},maxlength:"6","show-word-limit":"",clearable:"",placeholder:a(t)("sortPlaceholder"),class:"!w-[150px]",onKeyup:l[10]||(l[10]=e=>a(j)(e))},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),n.type!="text"?(p(),y(L,{key:0},[o(X,{data:n.child,size:"large"},{empty:r(()=>[w("span",null,i(n.child.length==0?a(t)("emptyData"):""),1)]),default:r(()=>[o(g,{prop:"name",label:a(t)("attrValueName"),"min-width":"200"},{default:r(({row:e})=>[o(x,{modelValue:e.name,"onUpdate:modelValue":m=>e.name=m,modelModifiers:{trim:!0},class:"input-width",maxlength:"20",placeholder:a(t)("attrValueNamePlaceholder"),clearable:"","show-word-limit":""},null,8,["modelValue","onUpdate:modelValue","placeholder"])]),_:1},8,["label"]),o(g,{prop:"name",label:a(t)("sort"),"min-width":"120"},{default:r(({row:e})=>[o(x,{modelValue:e.sort,"onUpdate:modelValue":m=>e.sort=m,modelModifiers:{trim:!0},class:"!w-[150px]",maxlength:"6",placeholder:a(t)("sortPlaceholder"),clearable:"","show-word-limit":"",onKeyup:l[11]||(l[11]=m=>a(j)(m))},null,8,["modelValue","onUpdate:modelValue","placeholder"])]),_:1},8,["label"]),o(g,{prop:"name",label:a(t)("字体颜色"),"min-width":"120"},{default:r(({row:e})=>[o(ge,{modelValue:e.color,"onUpdate:modelValue":m=>e.color=m},null,8,["modelValue","onUpdate:modelValue"])]),_:1},8,["label"]),o(g,{label:a(t)("operation"),fixed:"right",align:"right","min-width":"60"},{default:r(({row:e,$index:m})=>[o(v,{type:"primary",link:"",onClick:b=>_e(e,m)},{default:r(()=>[h(i(a(t)("delete")),1)]),_:2},1032,["onClick"])]),_:1},8,["label"])]),_:1},8,["data"]),I(o(v,{type:"primary",plain:"",onClick:ie,class:"my-[10px]"},{default:r(()=>[h(i(a(t)("addAttrValue")),1)]),_:1},512),[[xe,n.child.length<ae.value]])],64)):S("",!0)]),_:1},8,["model","rules"])),[[q,C.value]])]),_:1},8,["modelValue","title"])])}}});export{xt as default};