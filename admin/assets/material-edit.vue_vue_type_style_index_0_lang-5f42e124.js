import{d as C,r as _,n as x,l as L,q as l,h as p,s as f,w as n,a as g,e as d,br as w,i as D,t as v,u as o,R as O,c as q,F as N,T as P,ac as T,aD as U,L as j,M as S,E as X,X as Y,Y as $}from"./index-904cb7a2.js";/* empty css                   *//* empty css                  *//* empty css                   *//* empty css                  *//* empty css                */import z from"./index-e888fa8d.js";import"./el-form-item-4ed993c7.js";/* empty css                 *//* empty css               *//* empty css                  *//* empty css                  *//* empty css                     *//* empty css                  */import{g as A,e as H,a as J,b as K}from"./material-81af0ad8.js";const Q={class:"text-[12px] text-[#a9a9a9]"},W={class:"dialog-footer"},ve=C({__name:"material-edit",emits:["complete"],setup(Z,{expose:E,emit:k}){let r=_(!1);const s=_(!1),b={material_id:"",group_id:"",url:""},t=x({...b}),V=_(),F=L(()=>({group_id:[{required:!0,message:l("materialGroupIdPlaceholder"),trigger:"blur"}],url:[{required:!0,message:l("urlPlaceholder"),trigger:"blur"}]})),c=x([]);(()=>{A({}).then(i=>{const e=i.data;e&&c.splice(0,c.length,...e)})})();const M=async i=>{if(s.value||!i)return;let e=t.material_id?H:J;await i.validate(async u=>{u&&(s.value=!0,e(t).then(m=>{s.value=!1,r.value=!1,k("complete")}).catch(m=>{s.value=!1}))})};return E({showDialog:r,setFormData:async(i=null)=>{if(Object.assign(t,b),s.value=!0,i){const e=await(await K(i.material_id)).data;e&&Object.keys(t).forEach(u=>{e[u]!=null&&(t[u]=e[u])})}s.value=!1}}),(i,e)=>{const u=T,h=U,m=j,B=z,G=S,y=X,I=Y,R=$;return p(),f(I,{modelValue:o(r),"onUpdate:modelValue":e[4]||(e[4]=a=>w(r)?r.value=a:r=a),title:t.material_id?o(l)("updateMaterial"):o(l)("addMaterial"),width:"500px",class:"diy-dialog-wrap","destroy-on-close":!0,"close-on-click-modal":!1},{footer:n(()=>[g("span",W,[d(y,{onClick:e[2]||(e[2]=a=>w(r)?r.value=!1:r=!1)},{default:n(()=>[D(v(o(l)("cancel")),1)]),_:1}),d(y,{type:"primary",loading:s.value,onClick:e[3]||(e[3]=a=>M(V.value))},{default:n(()=>[D(v(o(l)("confirm")),1)]),_:1},8,["loading"])])]),default:n(()=>[O((p(),f(G,{model:t,"label-width":"120px",ref_key:"formRef",ref:V,rules:o(F),class:"page-form"},{default:n(()=>[d(m,{label:o(l)("materialId"),prop:"group_id"},{default:n(()=>[d(h,{modelValue:t.group_id,"onUpdate:modelValue":e[0]||(e[0]=a=>t.group_id=a),placeholder:o(l)("materialGroupIdPlaceholder"),clearable:""},{default:n(()=>[(p(!0),q(N,null,P(c,a=>(p(),f(u,{key:a.group_id,label:a.group_name,value:a.group_id},null,8,["label","value"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"]),d(m,{label:o(l)("url"),prop:"url"},{default:n(()=>[g("div",null,[d(B,{modelValue:t.url,"onUpdate:modelValue":e[1]||(e[1]=a=>t.url=a),limit:"10"},null,8,["modelValue"]),g("p",Q,v(o(l)("urlTips")),1)])]),_:1},8,["label"])]),_:1},8,["model","rules"])),[[R,s.value]])]),_:1},8,["modelValue","title"])}}});export{ve as _};
