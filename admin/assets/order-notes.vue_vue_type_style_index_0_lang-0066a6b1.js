import{d as N,r as d,n as R,l as b,q as n,h as v,s as g,w as s,a as B,e as i,i as y,t as k,u as m,R as C,K as q,L as I,M as L,E as M,X as S,Y as U}from"./index-904cb7a2.js";/* empty css                   *//* empty css                  *//* empty css                   *//* empty css                  *//* empty css                */import"./el-form-item-4ed993c7.js";/* empty css                 */import{s as $}from"./shop-dc12703d.js";const j={class:"dialog-footer"},Q=N({__name:"order-notes",emits:["complete"],setup(K,{expose:h,emit:V}){const r=d(!1),o=d(!1),u={order_id:0,shop_remark:""},t=R({...u}),p=d(),w=b(()=>({company_name:[{required:!0,message:n("companyNamePlaceholder"),trigger:"blur"}]})),x=async a=>{o.value||!a||await a.validate(async e=>{e&&(o.value=!0,$(t).then(_=>{o.value=!1,r.value=!1,V("complete")}).catch(()=>{o.value=!1}))})};return h({showDialog:r,setFormData:async(a=null)=>{Object.assign(t,u),o.value=!0,a&&(t.order_id=a.order_id,t.shop_remark=a.shop_remark),o.value=!1}}),(a,e)=>{const c=q,_=I,D=L,f=M,E=S,F=U;return v(),g(E,{modelValue:r.value,"onUpdate:modelValue":e[3]||(e[3]=l=>r.value=l),title:m(n)("notes"),width:"460px",class:"diy-dialog-wrap","destroy-on-close":!0},{footer:s(()=>[B("span",j,[i(f,{onClick:e[1]||(e[1]=l=>r.value=!1)},{default:s(()=>[y(k(m(n)("cancel")),1)]),_:1}),i(f,{type:"primary",loading:o.value,onClick:e[2]||(e[2]=l=>x(p.value))},{default:s(()=>[y(k(m(n)("confirm")),1)]),_:1},8,["loading"])])]),default:s(()=>[C((v(),g(D,{model:t,ref_key:"formRef",ref:p,rules:m(w),class:"page-form notes-form"},{default:s(()=>[i(_,{class:"mb-0"},{default:s(()=>[i(c,{modelValue:t.shop_remark,"onUpdate:modelValue":e[0]||(e[0]=l=>t.shop_remark=l),modelModifiers:{trim:!0},rows:5,type:"textarea",maxlength:"200","show-word-limit":""},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])),[[F,o.value]])]),_:1},8,["modelValue","title"])}}});export{Q as _};
