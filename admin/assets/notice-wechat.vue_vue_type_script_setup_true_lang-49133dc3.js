import{d as C,r as v,n as L,l as j,h as f,s as y,w as a,a as _,e as s,i as p,t as i,u as o,q as n,R as U,c as k,F as O,T as S,au as T,av as $,L as q,M as G,E as I,X as K,Y as M}from"./index-904cb7a2.js";/* empty css                   *//* empty css                  *//* empty css                   *//* empty css                  *//* empty css                */import"./el-form-item-4ed993c7.js";/* empty css                       *//* empty css                 */import{a as X}from"./notice-a6a6dd5e.js";const Y={class:"input-width"},z={class:"input-width"},A={class:"input-width"},H={class:"input-width"},J={class:"dialog-footer"},re=C({__name:"notice-wechat",emits:["complete"],setup(P,{expose:D,emit:V}){const u=v(!1),r=v(!0),h={is_wechat:0,key:"",name:"",title:"",type:"",content:[],temp_key:"",keyword_name_list:""},t=L({...h}),w=v(),E=j(()=>({})),F=async l=>{r.value||!l||await l.validate(async e=>{if(e){r.value=!0;const d=t;d.status=d.is_wechat,X(d).then(b=>{r.value=!1,u.value=!1,V("complete")}).catch(()=>{r.value=!1})}})};return D({showDialog:u,setFormData:async(l=null)=>{r.value=!0,Object.assign(t,h),l&&Object.keys(t).forEach(e=>{l[e]!=null&&(t[e]=l[e]),l.wechat&&l.wechat[e]!=null&&(t[e]=l.wechat[e])}),r.value=!1}}),(l,e)=>{const d=T,b=$,m=q,x=G,g=I,R=K,B=M;return f(),y(R,{modelValue:u.value,"onUpdate:modelValue":e[3]||(e[3]=c=>u.value=c),title:o(n)("noticeSetting"),width:"550px","destroy-on-close":!0},{footer:a(()=>[_("span",J,[s(g,{onClick:e[1]||(e[1]=c=>u.value=!1)},{default:a(()=>[p(i(o(n)("cancel")),1)]),_:1}),s(g,{type:"primary",loading:r.value,onClick:e[2]||(e[2]=c=>F(w.value))},{default:a(()=>[p(i(o(n)("confirm")),1)]),_:1},8,["loading"])])]),default:a(()=>[U((f(),y(x,{model:t,"label-width":"110px",ref_key:"formRef",ref:w,rules:o(E),class:"page-form"},{default:a(()=>[s(m,{label:o(n)("status")},{default:a(()=>[s(b,{modelValue:t.is_wechat,"onUpdate:modelValue":e[0]||(e[0]=c=>t.is_wechat=c)},{default:a(()=>[s(d,{label:1},{default:a(()=>[p(i(o(n)("startUsing")),1)]),_:1}),s(d,{label:0},{default:a(()=>[p(i(o(n)("statusDeactivate")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["label"]),s(m,{label:o(n)("name")},{default:a(()=>[_("div",Y,i(t.name),1)]),_:1},8,["label"]),s(m,{label:o(n)("tempKey")},{default:a(()=>[_("div",z,i(t.temp_key),1)]),_:1},8,["label"]),s(m,{label:o(n)("keywordNameList")},{default:a(()=>[_("div",A,i(t.keyword_name_list?t.keyword_name_list.join("，"):""),1)]),_:1},8,["label"]),s(m,{label:o(n)("content")},{default:a(()=>[_("div",H,[(f(!0),k(O,null,S(t.content,(c,N)=>(f(),k("div",{key:N},i(c[0])+"："+i(c[1]),1))),128))])]),_:1},8,["label"])]),_:1},8,["model","rules"])),[[B,r.value]])]),_:1},8,["modelValue","title"])}}});export{re as _};
