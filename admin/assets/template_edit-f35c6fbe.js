import{d as me,r as S,x as fe,f as ce,n as ve,cT as he,l as B,q as t,H as O,h as U,c as I,a as b,e as l,w as n,u as r,R as L,s as G,i as h,t as v,c9 as x,B as ge,a0 as X,F as ye,U as Y,aR as be,a7 as Ve,K as ke,L as Se,au as we,av as Ee,ad as xe,E as Ce,ae as Ue,aT as De,M as Be,ax as Ae,V as Ne,X as Te,Y as Pe}from"./index-99f00cf3.js";/* empty css                   *//* empty css                  *//* empty css                   *//* empty css                     *//* empty css                *//* empty css                    *//* empty css                *//* empty css                  *//* empty css                 */import"./el-tooltip-4ed993c7.js";/* empty css                  *//* empty css                  *//* empty css                        *//* empty css               *//* empty css                       *//* empty css                 */import"./el-form-item-4ed993c7.js";/* empty css                 *//* empty css                *//* empty css                   *//* empty css                       */import{y as Me,z as Re,A as ze}from"./delivery-8329da8a.js";/* empty css                   */import{_ as Ke}from"./_plugin-vue_export-helper-c27b6911.js";const Fe={class:"main-container"},Oe={class:"area-input"},Ie=["onClick"],Le={key:1},je={class:"mt-[10px]"},qe={class:"area-input"},We={class:"form-tip"},Ze={class:"mt-[10px]"},He={class:"area-input"},Ge={class:"mt-[10px]"},Xe={class:"fixed-footer-wrap"},Ye={class:"fixed-footer"},Je={class:"dialog-footer"},Qe=me({__name:"template_edit",setup($e){const C=S(!1),A=fe(),j=ce(),V=S(!1),J={template_id:"",template_name:"",fee_type:"num",area:[],no_delivery:0,is_free_shipping:0,fee_data:[],free_shipping_data:[],no_delivery_data:[]},Q=A.meta.title,u=ve({...J}),q=S(),N=S([]);A.query.id&&(V.value=!0,Me(A.query.id).then(({data:d})=>{d&&(Object.keys(u).forEach(e=>{d[e]!=null&&(u[e]=d[e])}),m.value=d.fee_data,y.value=d.no_delivery_data,f.value=d.free_shipping_data),V.value=!1}).catch(()=>{V.value=!1})),he(2).then(d=>{N.value=d.data}).catch();const $=B(()=>({template_name:[{required:!0,message:t("templateNamePlaceholder"),trigger:"blur"}],fee_data:[{validator:ee}],free_shipping_data:[{validator:ae}],no_delivery_data:[{validator:le}]})),ee=(d,e,p)=>{for(let _=0;_<m.value.length;_++){const o=m.value[_];if(!o.area_ids.length){p(new Error(t("areaPlaceholder")));break}if(O.empty(o.snum)||o.snum<0){p(new Error(D.value.first+t("notUnderZero")));break}if(O.empty(o.xnum)||o.snum<0){p(new Error(D.value.continue+t("notUnderZero")));break}}p()},ae=(d,e,p)=>{if(u.is_free_shipping){for(let _=0;_<f.value.length;_++){const o=f.value[_];if(!o.area_ids.length){p(new Error(t("freeShippingPlaceholder")));break}if(O.empty(o.free_shipping_num)||o.free_shipping_num<0){p(new Error(W.value+t("notUnderZero")));break}}p()}else p()},le=(d,e,p)=>{if(u.no_delivery){for(let _=0;_<y.value.length;_++)if(!y.value[_].area_ids.length){p(new Error(t("noDeliveryPlaceholder")));break}p()}else p()},D=B(()=>({num:{first:t("firstNum"),continue:t("continueNum")},weight:{first:t("firstWeight"),continue:t("continueWeight")},volume:{first:t("firstVolume"),continue:t("continueVolume")}})[u.fee_type]),W=B(()=>({num:t("freeShippingNum"),weight:t("freeShippingWeight"),volume:t("freeShippingVolume")})[u.fee_type]),m=S([{area_ids:[0],fee_area_names:"全国",snum:1,sprice:0,xnum:1,xprice:0}]),f=S([]),y=S([]),T=d=>{switch(d){case"fee":m.value.push({area_ids:[],fee_area_names:"",snum:1,sprice:0,xnum:1,xprice:0});break;case"free_shipping":f.value.push({area_ids:[],free_shipping_area_names:"",free_shipping_num:0,free_shipping_price:0});break;case"no_delivery":y.value.push({area_ids:[],no_delivery_area_names:""});break}},P=(d,e)=>{switch(d){case"fee":m.value.splice(e,1);break;case"free_shipping":f.value.splice(e,1);break;case"no_delivery":y.value.splice(e,1);break}};let M=[];const R=S([]);let w={type:"",index:0};const z=(d,e)=>{w={type:d,index:e};let p=[];switch(d){case"fee":p=m.value;break;case"free_shipping":p=f.value;break;case"no_delivery":p=y.value;break}M=p[e].area_ids,R.value=[],p.forEach((_,o)=>{e!=o&&R.value.push(..._.area_ids)}),C.value=!0},te=B(()=>(N.value.forEach(d=>{d.child.forEach(e=>{e.disabled=R.value.includes(e.id)})}),N.value)),K=S(),re=()=>{const d=K.value.getCheckedNodes(!1,!1),e=[],p=[];switch(d.forEach(_=>{_.level==2&&(e.push(_.id),p.push(_.name))}),w.type){case"fee":m.value[w.index].area_ids=e,m.value[w.index].fee_area_names=p.toString();break;case"free_shipping":f.value[w.index].area_ids=e,f.value[w.index].free_shipping_area_names=p.toString();break;case"no_delivery":y.value[w.index].area_ids=e,y.value[w.index].no_delivery_area_names=p.toString();break}C.value=!1},ie=()=>{K.value.setCheckedKeys(M,!1)},ne=async d=>{if(V.value||!d)return;const e=u.template_id?Re:ze;await d.validate(async p=>{if(p){if(u.is_free_shipping&&f.value.length==0){Y.error(t("freeShippingPlaceholder"));return}if(u.no_delivery&&y.value.length==0){Y.error("noDeliveryPlaceholder");return}V.value=!0;const _={template_id:u.template_id,template_name:u.template_name,fee_type:u.fee_type,no_delivery:u.no_delivery,is_free_shipping:u.is_free_shipping},o={};m.value.forEach(s=>{s.area_ids.forEach(c=>{o["city_"+c]={city_id:c,fee_area_ids:s.area_ids.toString(),fee_area_names:s.fee_area_names,snum:s.snum,sprice:s.sprice,xnum:s.xnum,xprice:s.xprice}})}),f.value.forEach(s=>{s.area_ids.forEach(c=>{o["city_"+c]?Object.assign(o["city_"+c],{free_shipping_area_ids:s.area_ids.toString(),free_shipping_area_names:s.free_shipping_area_names,free_shipping_num:s.free_shipping_num,free_shipping_price:s.free_shipping_price}):o["city_"+c]={city_id:c,free_shipping_area_ids:s.area_ids.toString(),free_shipping_area_names:s.free_shipping_area_names,free_shipping_num:s.free_shipping_num,free_shipping_price:s.free_shipping_price}})}),y.value.forEach(s=>{s.area_ids.forEach(c=>{o["city_"+c]?Object.assign(o["city_"+c],{no_delivery_area_ids:s.area_ids.toString(),no_delivery_area_names:s.no_delivery_area_names}):o["city_"+c]={city_id:c,no_delivery_area_ids:s.area_ids.toString(),no_delivery_area_names:s.no_delivery_area_names}})}),_.area=Object.values(o),e(_).then(()=>{V.value=!1,j.push({path:"/shop/order/shipping/template"})}).catch(()=>{V.value=!1})}})},Z=()=>{j.push({path:"/shop/order/shipping/template"})};return(d,e)=>{const p=be,_=Ve,o=ke,s=Se,c=we,oe=Ee,g=xe,k=Ce,F=Ue,H=De,se=Be,de=Ae,pe=Ne,ue=Te,_e=Pe;return U(),I(ye,null,[b("div",Fe,[l(_,{class:"card !border-none mb-[15px]",shadow:"never"},{default:n(()=>[l(p,{content:r(Q),icon:d.ArrowLeft,onBack:Z},null,8,["content","icon"])]),_:1}),l(_,{class:"box-card !border-none",shadow:"never"},{default:n(()=>[L((U(),G(se,{model:u,"label-width":"120px",ref_key:"formRef",ref:q,rules:r($),class:"page-form"},{default:n(()=>[l(s,{label:r(t)("templateName"),prop:"template_name"},{default:n(()=>[l(o,{modelValue:u.template_name,"onUpdate:modelValue":e[0]||(e[0]=a=>u.template_name=a),modelModifiers:{trim:!0},clearable:"",placeholder:r(t)("templateNamePlaceholder"),class:"input-width",maxlength:"60"},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),l(s,{label:r(t)("feeTypeName"),prop:"fee_type"},{default:n(()=>[l(oe,{modelValue:u.fee_type,"onUpdate:modelValue":e[1]||(e[1]=a=>u.fee_type=a)},{default:n(()=>[l(c,{label:"num",size:"large"},{default:n(()=>[h(v(r(t)("num")),1)]),_:1}),l(c,{label:"weight",size:"large"},{default:n(()=>[h(v(r(t)("weight")),1)]),_:1}),l(c,{label:"volume",size:"large"},{default:n(()=>[h(v(r(t)("volume")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["label"]),l(s,{label:r(t)("feeSetting"),prop:"fee_data"},{default:n(()=>[l(F,{data:m.value,style:{width:"100%"},size:"default"},{default:n(()=>[l(g,{label:r(t)("deliveryArea")},{default:n(({row:a,$index:i})=>[b("div",Oe,[i?(U(),I("span",{key:0,onClick:E=>z("fee",i),class:"cursor-pointer"},v(a.fee_area_names?a.fee_area_names:r(t)("areaPlaceholder")),9,Ie)):(U(),I("span",Le,v(a.fee_area_names?a.fee_area_names:r(t)("areaPlaceholder")),1))])]),_:1},8,["label"]),l(g,{label:r(D).first},{default:n(({$index:a})=>[l(o,{modelValue:m.value[a].snum,"onUpdate:modelValue":i=>m.value[a].snum=i,modelModifiers:{trim:!0},maxlength:"8",onKeyup:e[2]||(e[2]=i=>r(x)(i)),onBlur:i=>m.value[a].snum=i.target.value},null,8,["modelValue","onUpdate:modelValue","onBlur"])]),_:1},8,["label"]),l(g,{label:r(t)("fee")},{default:n(({$index:a})=>[l(o,{modelValue:m.value[a].sprice,"onUpdate:modelValue":i=>m.value[a].sprice=i,modelModifiers:{trim:!0},maxlength:"8",onKeyup:e[3]||(e[3]=i=>r(x)(i)),onBlur:i=>m.value[a].sprice=i.target.value},null,8,["modelValue","onUpdate:modelValue","onBlur"])]),_:1},8,["label"]),l(g,{label:r(D).continue},{default:n(({$index:a})=>[l(o,{modelValue:m.value[a].xnum,"onUpdate:modelValue":i=>m.value[a].xnum=i,modelModifiers:{trim:!0},maxlength:"8",onKeyup:e[4]||(e[4]=i=>r(x)(i)),onBlur:i=>m.value[a].xnum=i.target.value},null,8,["modelValue","onUpdate:modelValue","onBlur"])]),_:1},8,["label"]),l(g,{label:r(t)("continueFee")},{default:n(({$index:a})=>[l(o,{modelValue:m.value[a].xprice,"onUpdate:modelValue":i=>m.value[a].xprice=i,modelModifiers:{trim:!0},onKeyup:e[5]||(e[5]=i=>r(x)(i)),maxlength:"8",onBlur:i=>m.value[a].xprice=i.target.value},null,8,["modelValue","onUpdate:modelValue","onBlur"])]),_:1},8,["label"]),l(g,{label:r(t)("operation"),align:"right",width:"150"},{default:n(({$index:a})=>[a?(U(),G(k,{key:0,type:"primary",onClick:i=>P("fee",a),link:""},{default:n(()=>[h(v(r(t)("delete")),1)]),_:2},1032,["onClick"])):ge("",!0)]),_:1},8,["label"])]),_:1},8,["data"]),b("div",je,[l(k,{type:"primary",onClick:e[6]||(e[6]=a=>T("fee"))},{default:n(()=>[h(v(r(t)("addDeliveryArea")),1)]),_:1})])]),_:1},8,["label"]),l(s,{label:r(t)("freeShipping"),prop:"is_free_shipping"},{default:n(()=>[l(H,{modelValue:u.is_free_shipping,"onUpdate:modelValue":e[7]||(e[7]=a=>u.is_free_shipping=a),size:"small","inactive-value":0,"active-value":1},null,8,["modelValue"])]),_:1},8,["label"]),L(l(s,{prop:"free_shipping_data"},{default:n(()=>[l(F,{data:f.value,style:{width:"100%"},size:"default"},{default:n(()=>[l(g,{label:r(t)("freeShippingArea")},{default:n(({row:a,$index:i})=>[b("div",qe,[l(o,{modelValue:a.free_shipping_area_names,"onUpdate:modelValue":E=>a.free_shipping_area_names=E,modelModifiers:{trim:!0},placeholder:r(t)("areaPlaceholder"),readonly:"",onClick:E=>z("free_shipping",i)},null,8,["modelValue","onUpdate:modelValue","placeholder","onClick"])])]),_:1},8,["label"]),l(g,{label:r(W)},{default:n(({$index:a})=>[l(o,{modelValue:f.value[a].free_shipping_num,"onUpdate:modelValue":i=>f.value[a].free_shipping_num=i,modelModifiers:{trim:!0},onKeyup:e[8]||(e[8]=i=>r(x)(i)),maxlength:"8",onBlur:i=>f.value[a].free_shipping_num=i.target.value},null,8,["modelValue","onUpdate:modelValue","onBlur"])]),_:1},8,["label"]),l(g,{label:r(t)("freeShippingPrice")},{default:n(({$index:a})=>[l(o,{modelValue:f.value[a].free_shipping_price,"onUpdate:modelValue":i=>f.value[a].free_shipping_price=i,modelModifiers:{trim:!0},onKeyup:e[9]||(e[9]=i=>r(x)(i)),maxlength:"8",onBlur:i=>f.value[a].free_shipping_price=i.target.value},null,8,["modelValue","onUpdate:modelValue","onBlur"])]),_:1},8,["label"]),l(g,{label:r(t)("operation"),align:"right",width:"150"},{default:n(({$index:a})=>[l(k,{type:"primary",onClick:i=>P("free_shipping",a),link:""},{default:n(()=>[h(v(r(t)("delete")),1)]),_:2},1032,["onClick"])]),_:1},8,["label"])]),_:1},8,["data"]),b("div",We,v(r(t)("freeShippingAreaTips")),1),b("div",Ze,[l(k,{type:"primary",onClick:e[10]||(e[10]=a=>T("free_shipping"))},{default:n(()=>[h(v(r(t)("addFreeShippingArea")),1)]),_:1})])]),_:1},512),[[X,u.is_free_shipping]]),l(s,{label:r(t)("noDelivery"),prop:"no_delivery"},{default:n(()=>[l(H,{modelValue:u.no_delivery,"onUpdate:modelValue":e[11]||(e[11]=a=>u.no_delivery=a),size:"small","inactive-value":0,"active-value":1},null,8,["modelValue"])]),_:1},8,["label"]),L(l(s,{prop:"no_delivery_data"},{default:n(()=>[l(F,{data:y.value,style:{width:"100%"},size:"default"},{default:n(()=>[l(g,{label:r(t)("noDelivery")},{default:n(({row:a,$index:i})=>[b("div",He,[l(o,{modelValue:a.no_delivery_area_names,"onUpdate:modelValue":E=>a.no_delivery_area_names=E,modelModifiers:{trim:!0},readonly:"",onClick:E=>z("no_delivery",i),placeholder:r(t)("areaPlaceholder")},null,8,["modelValue","onUpdate:modelValue","onClick","placeholder"])])]),_:1},8,["label"]),l(g,{label:r(t)("operation"),align:"right",width:"150"},{default:n(({$index:a})=>[l(k,{type:"primary",onClick:i=>P("no_delivery",a),link:""},{default:n(()=>[h(v(r(t)("delete")),1)]),_:2},1032,["onClick"])]),_:1},8,["label"])]),_:1},8,["data"]),b("div",Ge,[l(k,{type:"primary",onClick:e[12]||(e[12]=a=>T("no_delivery"))},{default:n(()=>[h(v(r(t)("addNoDelivery")),1)]),_:1})])]),_:1},512),[[X,u.no_delivery]])]),_:1},8,["model","rules"])),[[_e,V.value]])]),_:1}),b("div",Xe,[b("div",Ye,[l(k,{type:"primary",onClick:e[13]||(e[13]=a=>ne(q.value)),disabled:V.value},{default:n(()=>[h(v(r(t)("save")),1)]),_:1},8,["disabled"]),l(k,{onClick:e[14]||(e[14]=a=>Z())},{default:n(()=>[h(v(r(t)("cancel")),1)]),_:1})])])]),l(ue,{modelValue:C.value,"onUpdate:modelValue":e[16]||(e[16]=a=>C.value=a),title:r(t)("selectArea"),width:"80%",class:"diy-dialog-wrap","destroy-on-close":!0,onOpened:ie},{footer:n(()=>[b("span",Je,[l(k,{onClick:e[15]||(e[15]=a=>C.value=!1)},{default:n(()=>[h(v(r(t)("cancel")),1)]),_:1}),l(k,{type:"primary",loading:V.value,onClick:re},{default:n(()=>[h(v(r(t)("confirm")),1)]),_:1},8,["loading"])])]),default:n(()=>[l(pe,{height:"50vh"},{default:n(()=>[l(de,{data:r(te),props:{children:"child",label:"name"},"default-expand-all":"","show-checkbox":"",ref_key:"areaTreeRef",ref:K,"default-checked-keys":r(M),"node-key":"id"},null,8,["data","default-checked-keys"])]),_:1})]),_:1},8,["modelValue","title"])],64)}}});const Ea=Ke(Qe,[["__scopeId","data-v-31435171"]]);export{Ea as default};
