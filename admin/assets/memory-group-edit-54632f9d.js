import{d as L,r as u,q as k,j as R,s as r,aJ as U,h as c,v as x,w as s,a as I,e as m,i as f,t as g,u as a,c as S,F as P,T as j,K as T,L as J,av as K,c8 as O,M as X,E as z,X as A}from"./index-0e396751.js";/* empty css                  *//* empty css                   *//* empty css                  *//* empty css                *//* empty css                          *//* empty css                    */import"./el-form-item-4ed993c7.js";/* empty css                 */import{N as H,O as Q,P as W}from"./goods-4d7d064c.js";import{_ as Y}from"./_plugin-vue_export-helper-c27b6911.js";const Z={class:"dialog-footer"},$=L({__name:"memory-group-edit",emits:["complete"],setup(ee,{expose:E,emit:M}){var v,V;const i=u(!1),n=u(!1),p=u(),y=u([]),o=k({group_id:"",group_name:"",sort:0,memory_ids:[],site_id:((V=(v=R())==null?void 0:v.siteInfo)==null?void 0:V.site_id)||0}),q=k({group_name:[{required:!0,message:r("groupNameRequired"),trigger:"blur"}],sort:[{required:!0,message:r("sortRequired"),trigger:"blur"}],memory_ids:[{required:!0,message:r("memorySpecsRequired"),trigger:"change",type:"array"}]}),N=async()=>{try{const e=await H({limit:100});e.code===1&&e.data.data&&(y.value=e.data.data)}catch(e){console.error("获取内存规格列表失败:",e)}},D=e=>{o.group_id=(e==null?void 0:e.group_id)??"",o.group_name=(e==null?void 0:e.group_name)??"",o.sort=(e==null?void 0:e.sort)??0,o.memory_ids=e!=null&&e.memory_ids?e.memory_ids.split(",").map(Number):[]},b=()=>{i.value=!1,o.memory_ids=[]},G=()=>{p.value&&p.value.validate(e=>{if(e){n.value=!0;const l={...o,memory_ids:o.memory_ids.join(",")};(o.group_id?Q(Number(o.group_id),l):W(l)).then(()=>{b(),M("complete")}).finally(()=>{n.value=!1})}})};return U(()=>{N()}),E({showDialog:i,setFormData:D}),(e,l)=>{const d=T,_=J,w=K,C=O,B=X,h=z,F=A;return c(),x(F,{modelValue:i.value,"onUpdate:modelValue":l[3]||(l[3]=t=>i.value=t),title:o.group_id?a(r)("editMemoryGroup"):a(r)("addMemoryGroup"),width:"600px","close-on-click-modal":!1,"close-on-press-escape":!1},{footer:s(()=>[I("span",Z,[m(h,{onClick:b},{default:s(()=>[f(g(a(r)("cancel")),1)]),_:1}),m(h,{type:"primary",onClick:G,loading:n.value},{default:s(()=>[f(g(a(r)("confirm")),1)]),_:1},8,["loading"])])]),default:s(()=>[m(B,{ref_key:"formRef",ref:p,model:o,rules:q,"label-width":"120px"},{default:s(()=>[m(_,{label:a(r)("groupName"),prop:"group_name"},{default:s(()=>[m(d,{modelValue:o.group_name,"onUpdate:modelValue":l[0]||(l[0]=t=>o.group_name=t),modelModifiers:{trim:!0},placeholder:a(r)("groupNamePlaceholder")},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),m(_,{label:a(r)("sort"),prop:"sort"},{default:s(()=>[m(d,{modelValue:o.sort,"onUpdate:modelValue":l[1]||(l[1]=t=>o.sort=t),modelModifiers:{trim:!0},placeholder:a(r)("sortPlaceholder")},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),m(_,{label:a(r)("memorySpecs"),prop:"memory_ids"},{default:s(()=>[m(C,{modelValue:o.memory_ids,"onUpdate:modelValue":l[2]||(l[2]=t=>o.memory_ids=t),class:"memory-checkbox-group"},{default:s(()=>[(c(!0),S(P,null,j(y.value,t=>(c(),x(w,{key:t.spec_id,label:t.spec_id,border:""},{default:s(()=>[f(g(t.spec_name),1)]),_:2},1032,["label"]))),128))]),_:1},8,["modelValue"])]),_:1},8,["label"])]),_:1},8,["model","rules"])]),_:1},8,["modelValue","title"])}}});const de=Y($,[["__scopeId","data-v-3a745763"]]);export{de as default};
