import{d as M,x as O,r as g,n as E,h as i,c as k,e as r,w as o,a as b,t as d,u as l,R as K,s as m,q as s,cb as R,B as f,i as _,F as L,T as S,aT as W,L as j,K as G,au as H,av as I,aw as P,c4 as q,a7 as Y,M as $,E as J,Y as Q}from"./index-904cb7a2.js";/* empty css                   *//* empty css                  *//* empty css                *//* empty css                *//* empty css                          *//* empty css                    *//* empty css                       *//* empty css                 *//* empty css                 */import"./el-form-item-4ed993c7.js";/* empty css                  */import{b as X,T as Z,U as ee}from"./member-49c3e5fc.js";const te={class:"main-container"},ae={class:"flex justify-between items-center"},oe={class:"text-page-title"},le=b("span",{class:"ml-2"},"%",-1),se={class:"fixed-footer-wrap"},re={class:"fixed-footer"},Re=M({__name:"cash_out",setup(ne){const C=O().meta.title,c=g(!0),y=g(),t=E({is_auto_transfer:"0",is_auto_verify:"0",is_open:"0",min:"0",rate:"0",transfer_type:[]}),w=g([]);(async()=>{w.value=await(await X()).data})(),(async()=>{const u=await(await Z()).data;Object.keys(t).forEach(e=>{u[e]!=null&&(t[e]=u[e])}),c.value=!1})();const F=E({min:[{validator:(u,e,n)=>{Number(e)<.01?n(new Error(s("cashWithdrawalAmountHint"))):n()},trigger:"blur"}],rate:[{validator:(u,e,n)=>{Number(e)>100||Number(e)<0?n(new Error(s("commissionRatioHint"))):n()},trigger:"blur"}]}),T=async u=>{c.value||!u||await u.validate(e=>{if(e){const n={...t};ee(n).then(()=>{c.value=!1}).catch(()=>{c.value=!1})}})};return(u,e)=>{const n=W,p=j,V=G,v=H,h=I,N=P,U=q,x=Y,B=$,D=J,z=Q;return i(),k("div",te,[r(x,{class:"box-card !border-none",shadow:"never"},{default:o(()=>[b("div",ae,[b("span",oe,d(l(C)),1)]),K((i(),m(B,{class:"page-form mt-[20px]",model:t,"label-width":"150px",ref_key:"ruleFormRef",ref:y,rules:F},{default:o(()=>[r(x,{class:"box-card !border-none",shadow:"never"},{default:o(()=>[r(p,{label:l(s)("isOpen")},{default:o(()=>[r(n,{modelValue:t.is_open,"onUpdate:modelValue":e[0]||(e[0]=a=>t.is_open=a),"active-value":"1","inactive-value":"0"},null,8,["modelValue"])]),_:1},8,["label"]),t.is_open?(i(),m(p,{key:0,label:l(s)("cashWithdrawalAmount"),prop:"min"},{default:o(()=>[r(V,{modelValue:t.min,"onUpdate:modelValue":e[1]||(e[1]=a=>t.min=a),modelModifiers:{trim:!0},onKeyup:e[2]||(e[2]=a=>l(R)(a)),class:"input-width",placeholder:l(s)("cashWithdrawalAmountPlaceholder")},null,8,["modelValue","placeholder"])]),_:1},8,["label"])):f("",!0),t.is_open?(i(),m(p,{key:1,label:l(s)("commissionRatio"),prop:"rate"},{default:o(()=>[r(V,{modelValue:t.rate,"onUpdate:modelValue":e[3]||(e[3]=a=>t.rate=a),modelModifiers:{trim:!0},onKeyup:e[4]||(e[4]=a=>l(R)(a)),class:"input-width",placeholder:l(s)("commissionRatioPlaceholder")},null,8,["modelValue","placeholder"]),le]),_:1},8,["label"])):f("",!0),t.is_open?(i(),m(p,{key:2,label:l(s)("audit"),class:"items-center"},{default:o(()=>[r(h,{modelValue:t.is_auto_verify,"onUpdate:modelValue":e[5]||(e[5]=a=>t.is_auto_verify=a)},{default:o(()=>[r(v,{label:"0",size:"large"},{default:o(()=>[_(d(l(s)("manualAudit")),1)]),_:1}),r(v,{label:"1",size:"large"},{default:o(()=>[_(d(l(s)("automaticAudit")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["label"])):f("",!0),t.is_open?(i(),m(p,{key:3,label:l(s)("transfer"),class:"items-center"},{default:o(()=>[r(h,{modelValue:t.is_auto_transfer,"onUpdate:modelValue":e[6]||(e[6]=a=>t.is_auto_transfer=a)},{default:o(()=>[r(v,{label:"0",size:"large"},{default:o(()=>[_(d(l(s)("manualTransfer")),1)]),_:1}),r(v,{label:"1",size:"large"},{default:o(()=>[_(d(l(s)("automatedTransit")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["label"])):f("",!0),t.is_open?(i(),m(p,{key:4,label:l(s)("transferMode"),class:"items-center"},{default:o(()=>[r(U,{modelValue:t.transfer_type,"onUpdate:modelValue":e[7]||(e[7]=a=>t.transfer_type=a),size:"large"},{default:o(()=>[(i(!0),k(L,null,S(w.value,(a,A)=>(i(),m(N,{label:a.key,key:"a"+A},{default:o(()=>[_(d(a.name),1)]),_:2},1032,["label"]))),128))]),_:1},8,["modelValue"])]),_:1},8,["label"])):f("",!0)]),_:1})]),_:1},8,["model","rules"])),[[z,c.value]])]),_:1}),b("div",se,[b("div",re,[r(D,{type:"primary",onClick:e[8]||(e[8]=a=>T(y.value))},{default:o(()=>[_(d(l(s)("save")),1)]),_:1})])])])}}});export{Re as default};
