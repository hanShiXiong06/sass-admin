import{d as ae,x as se,f as ne,r as x,n as B,aK as re,a$ as ie,a2 as N,h as _,c as b,e as l,w as n,u as s,aQ as de,R,s as T,a as i,$ as D,F as H,T as j,A as ue,B as z,t as d,q as a,v as me,i as m,a0 as pe,b3 as L,aR as ce,a7 as _e,a1 as ve,J as fe,L as xe,K as be,E as ye,ay as ge,au as ke,av as Ce,bv as Ve,az as he,M as we,Y as $e}from"./index-904cb7a2.js";/* empty css                   *//* empty css                *//* empty css                    *//* empty css                        *//* empty css                 *//* empty css                  *//* empty css                       *//* empty css                 */import{_ as Fe}from"./index.vue_vue_type_style_index_0_lang-11222f02.js";import"./el-form-item-4ed993c7.js";import Ee from"./index-e888fa8d.js";/* empty css                 *//* empty css                        *//* empty css                *//* empty css                   *//* empty css                       */import{u as Ue,v as Se}from"./diy-aeba879c.js";import{S as Ie}from"./sortable.esm-be94e56d.js";/* empty css                        */import{r as Pe}from"./range-e18b2c5a.js";import{_ as Be}from"./_plugin-vue_export-helper-c27b6911.js";/* empty css                  *//* empty css                   *//* empty css                     */import"./index.vue_vue_type_style_index_0_lang-68b58aeb.js";import"./attachment-731ba4e8.js";import"./index.vue_vue_type_script_setup_true_lang-e98f54f2.js";/* empty css               *//* empty css                  *//* empty css                  *//* empty css                  *//* empty css                      *//* empty css                    */import"./el-tooltip-4ed993c7.js";/* empty css               *//* empty css               *//* empty css                    *//* empty css                    */import"./el-dropdown-item-4ed993c7.js";import"./index.vue_vue_type_script_setup_true_lang-a9b96fa2.js";/* empty css                   */import"./index.vue_vue_type_script_setup_true_lang-ee99396e.js";const Ne={class:"main-container"},Re={class:"flex"},Te={class:"w-[360px] h-[400px] absolute mr-[30px] border-[1px] border-gray-300"},De={class:"image-slot flex justify-center items-center mt-1"},He={class:"flex-1 ml-[430px]"},je={class:"flex items-center border-l-[3px] border-primary pl-[5px] leading-[1.1] mt-[10px]"},ze={class:"text-[14px]"},Le={class:"text-[14px] text-primary mx-[3px]"},Me={class:"text-[14px]"},qe={class:"text-[12px] ml-[8px] text-gray-500"},Oe=["data-id"],Ke={class:"flex align-center"},Ae={class:"flex flex-col justify-center items-center"},Ge={class:"mr-[10px] text-sm"},Je={class:"flex flex-col justify-center items-center"},Qe={class:"mr-[10px] text-sm"},Ye={class:"flex align-center"},We={class:"flex align-center"},Xe={class:"flex align-center"},Ze={class:"fixed-footer-wrap"},et={class:"fixed-footer"},tt=ae({__name:"tabbar_edit",setup(lt){const g=se(),M=ne(),q=g.meta.title,w=x("navPicture"),p=x(!1);g.query.key=g.query.key||"";const t=B({key:"",info:{},value:{backgroundColor:"#FFFFFF",textColor:"#333333",textHoverColor:"#333333",type:"1",list:[]}}),O=B({text:"",link:{name:"",title:"",parent:"",url:""},iconSelectPath:"",iconPath:""}),$=()=>{t.value.list.length>=5||t.value.list.push({...O})};$();const K=r=>{t.value.list.splice(r,1)},F=x();(()=>{p.value=!0,Ue({key:g.query.key}).then(r=>{p.value=!1,Object.keys(t).forEach((e,u)=>{t[e]=r.data[e]})}).catch(()=>{p.value=!1})})();const A=async r=>{if(J())return!1;p.value||!r||await r.validate(async e=>{e&&(p.value=!0,Se({key:t.key,value:t.value}).then(u=>{p.value=!1}).catch(()=>{p.value=!1}))})},G=()=>{M.push("/diy/tabbar")},J=()=>{if(t.value.list.length<2)return L({type:"error",message:a("leastTwoNav")}),!0;try{const r=x("");t.value.list.forEach((e,u)=>{if(e.iconPath||(r.value=`${a("pleaseUpload")}${u+1}${a("navIcon")}`),e.iconSelectPath||(r.value=`${a("pleaseUpload")}${u+1}${a("navSelectIcon")}`),e.text||(r.value=`${a("pleaseEnter")}[${u+1}${a("navTitle")}`),e.link.url||(r.value=`${a("pleaseChoose")}${u+1}${a("navLink")}`),r.value)throw L({type:"error",message:r.value}),Error()})}catch{return!0}return!1},E=x();re(()=>{const r=Ie.create(E.value,{group:"item-wrap",animation:200,filter:".not-sort",onEnd:e=>{const u=t.value.list[e.oldIndex];t.value.list.splice(e.oldIndex,1),t.value.list.splice(e.newIndex,0,u),ie(()=>{r.sort(Pe(t.value.list.length).map(k=>k.toString()))})}})});const U=x(!1),Q=r=>{U.value=r};return(r,e)=>{const u=ce,k=_e,Y=N("Picture"),S=ve,W=fe,I=Ee,v=xe,C=be,X=Fe,Z=N("CircleCloseFilled"),f=ye,P=ge,V=ke,ee=Ce,h=Ve,te=he,le=we,oe=$e;return _(),b("div",Ne,[l(k,{class:"card !border-none",shadow:"never"},{default:n(()=>[l(u,{content:s(q),icon:s(de),onBack:e[0]||(e[0]=o=>r.$router.back())},null,8,["content","icon"])]),_:1}),R((_(),T(k,{class:"box-card mt-[15px] !border-none",shadow:"never"},{default:n(()=>[i("div",Re,[i("div",Te,[i("div",{class:"flex items-center justify-between absolute h-[60px] left-[0px] right-[0px] bottom-[0px] border-[1px] border-primary",style:D({backgroundColor:t.value.backgroundColor})},[(_(!0),b(H,null,j(t.value.list,(o,y)=>(_(),b("div",{class:"flex flex-1 flex-col items-center justify-center",key:"b"+y},[["1","2"].includes(t.value.type.toString())?(_(),T(W,{key:0,class:"w-[22px] h-[22px] mb-[5px] leading-1",src:s(ue)(o.iconPath),fit:r.contain},{error:n(()=>[i("div",De,[l(S,null,{default:n(()=>[l(Y,{class:"text-3xl text-gray-500"})]),_:1})])]),_:2},1032,["src","fit"])):z("",!0),["1","3"].includes(t.value.type.toString())?(_(),b("span",{key:1,class:"text-[12px]",style:D({color:t.value.textColor})},d(o.text),5)):z("",!0)]))),128))],4)]),i("div",He,[i("div",je,[i("span",ze,d(s(a)("editing")),1),i("span",Le,d(t.info.title),1),i("span",Me,d(s(a)("bottomNav")),1),i("span",qe,d(s(a)("bottomNavHint")),1)]),l(le,{model:t.value,"label-width":"100px",ref_key:"formRef",ref:F},{default:n(()=>[l(te,{modelValue:w.value,"onUpdate:modelValue":e[11]||(e[11]=o=>w.value=o),class:"demo-tabs mt-[15px]"},{default:n(()=>[l(P,{label:s(a)("navImage"),name:"navPicture"},{default:n(()=>[i("div",{ref_key:"navItemRef",ref:E},[(_(!0),b(H,null,j(t.value.list,(o,y)=>(_(),b("div",{key:"a"+y,"data-id":y,class:me(["item-wrap border-2 border-dashed pt-[18px] m-[10px] mb-[15px] relative list-item",{"not-sort":U.value}])},[l(v,{label:s(a)("navIconOne")},{default:n(()=>[i("div",Ke,[i("div",Ae,[l(I,{modelValue:o.iconPath,"onUpdate:modelValue":c=>o.iconPath=c,width:"60px",height:"60px",limit:1},null,8,["modelValue","onUpdate:modelValue"]),i("span",Ge,d(s(a)("uploadImgUnselected")),1)]),i("div",Je,[l(I,{modelValue:o.iconSelectPath,"onUpdate:modelValue":c=>o.iconSelectPath=c,width:"60px",height:"60px",limit:1},null,8,["modelValue","onUpdate:modelValue"]),i("span",Qe,d(s(a)("uploadImgSelected")),1)])])]),_:2},1032,["label"]),l(v,{label:s(a)("navTitleOne")},{default:n(()=>[l(C,{class:"!w-[215px]",modelValue:o.text,"onUpdate:modelValue":c=>o.text=c,modelModifiers:{trim:!0},placeholder:s(a)("titleContent"),maxlength:"5","show-word-limit":""},null,8,["modelValue","onUpdate:modelValue","placeholder"])]),_:2},1032,["label"]),l(v,{label:s(a)("navLinkOne")},{default:n(()=>[l(X,{modelValue:o.link,"onUpdate:modelValue":c=>o.link=c,onConfirm:Q},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["label"]),l(S,{class:"close-icon cursor-pointer -top-[11px] -right-[8px]",onClick:c=>K(y)},{default:n(()=>[l(Z)]),_:2},1032,["onClick"])],10,Oe))),128))],512),R(l(f,{type:"primary",class:"mt-[15px]",onClick:$},{default:n(()=>[m(d(s(a)("addnav")),1)]),_:1},512),[[pe,t.value.list.length<5]])]),_:1},8,["label"]),l(P,{label:s(a)("styleSet"),name:"setStyle"},{default:n(()=>[l(v,{label:s(a)("navType")},{default:n(()=>[l(ee,{modelValue:t.value.type,"onUpdate:modelValue":e[1]||(e[1]=o=>t.value.type=o),class:"ml-4"},{default:n(()=>[l(V,{label:"1",size:"large"},{default:n(()=>[m(d(s(a)("imageText")),1)]),_:1}),l(V,{label:"2",size:"large"},{default:n(()=>[m(d(s(a)("image")),1)]),_:1}),l(V,{label:"3",size:"large"},{default:n(()=>[m(d(s(a)("text")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["label"]),l(v,{label:s(a)("textColor")},{default:n(()=>[i("div",Ye,[l(h,{modelValue:t.value.textColor,"onUpdate:modelValue":e[2]||(e[2]=o=>t.value.textColor=o)},null,8,["modelValue"]),l(C,{class:"ml-[10px]",modelValue:t.value.textColor,"onUpdate:modelValue":e[3]||(e[3]=o=>t.value.textColor=o),modelModifiers:{trim:!0},disabled:""},null,8,["modelValue"]),l(f,{class:"ml-[10px]",type:"primary",onClick:e[4]||(e[4]=o=>t.value.textColor="#333333")},{default:n(()=>[m(d(s(a)("reset")),1)]),_:1})])]),_:1},8,["label"]),l(v,{label:s(a)("textSelectColor")},{default:n(()=>[i("div",We,[l(h,{modelValue:t.value.textHoverColor,"onUpdate:modelValue":e[5]||(e[5]=o=>t.value.textHoverColor=o)},null,8,["modelValue"]),l(C,{class:"ml-[10px]",modelValue:t.value.textHoverColor,"onUpdate:modelValue":e[6]||(e[6]=o=>t.value.textHoverColor=o),modelModifiers:{trim:!0},disabled:""},null,8,["modelValue"]),l(f,{class:"ml-[10px]",type:"primary",onClick:e[7]||(e[7]=o=>t.value.textHoverColor="#333333")},{default:n(()=>[m(d(s(a)("reset")),1)]),_:1})])]),_:1},8,["label"]),l(v,{label:s(a)("backgroundColor")},{default:n(()=>[i("div",Xe,[l(h,{modelValue:t.value.backgroundColor,"onUpdate:modelValue":e[8]||(e[8]=o=>t.value.backgroundColor=o)},null,8,["modelValue"]),l(C,{class:"ml-[10px]",modelValue:t.value.backgroundColor,"onUpdate:modelValue":e[9]||(e[9]=o=>t.value.backgroundColor=o),modelModifiers:{trim:!0},disabled:""},null,8,["modelValue"]),l(f,{class:"ml-[10px]",type:"primary",onClick:e[10]||(e[10]=o=>t.value.backgroundColor="#FFFFFF")},{default:n(()=>[m(d(s(a)("reset")),1)]),_:1})])]),_:1},8,["label"])]),_:1},8,["label"])]),_:1},8,["modelValue"])]),_:1},8,["model"])])])]),_:1})),[[oe,p.value]]),i("div",Ze,[i("div",et,[l(f,{type:"primary",onClick:e[12]||(e[12]=o=>A(F.value))},{default:n(()=>[m(d(s(a)("save")),1)]),_:1}),l(f,{onClick:e[13]||(e[13]=o=>G())},{default:n(()=>[m(d(s(a)("back")),1)]),_:1})])])])}}});const Gt=Be(tt,[["__scopeId","data-v-8be5d9c8"]]);export{Gt as default};
