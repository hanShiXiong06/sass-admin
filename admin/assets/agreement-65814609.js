import{d as v,x as k,n as x,f as y,h as m,c as E,e as a,w as o,a as i,t as r,u as e,R as C,s as B,q as n,i as p,ad as N,E as T,ae as D,a7 as L,Y as j}from"./index-904cb7a2.js";/* empty css                   *//* empty css                *//* empty css                 *//* empty css                    */import"./el-tooltip-4ed993c7.js";/* empty css                  *//* empty css                     *//* empty css                  *//* empty css                        *//* empty css               */import{g as A}from"./agreement-42f74121.js";const R={class:"main-container"},V={class:"flex justify-between items-center"},$={class:"text-[20px]"},q={class:"mt-[20px]"},Z=v({__name:"agreement",setup(z){const _=k().meta.title;let t=x({loading:!0,data:[]});(()=>{t.loading=!0,t.data=[],A().then(l=>{Object.keys(l.data).forEach(d=>t.data.push(l.data[d])),t.loading=!1}).catch(()=>{t.loading=!1})})();const u=y(),g=l=>{u.push(`/tk_jhkd/agreement_edit?key=${l.agreement_key}`)};return(l,d)=>{const s=N,h=T,f=D,b=L,w=j;return m(),E("div",R,[a(b,{class:"box-card !border-none",shadow:"never"},{default:o(()=>[i("div",V,[i("span",$,r(e(_)),1)]),i("div",q,[C((m(),B(f,{data:e(t).data,size:"large"},{empty:o(()=>[i("span",null,r(e(t).loading?"":e(n)("emptyData")),1)]),default:o(()=>[a(s,{prop:"type_name",label:e(n)("typeName"),"min-width":"100","show-overflow-tooltip":!0},null,8,["label"]),a(s,{prop:"title",label:e(n)("title"),"min-width":"100","show-overflow-tooltip":!0},null,8,["label"]),a(s,{label:e(n)("updateTime"),"min-width":"180",align:"center"},{default:o(({row:c})=>[p(r(c.update_time||""),1)]),_:1},8,["label"]),a(s,{label:e(n)("operation"),align:"right",fixed:"right",width:"100"},{default:o(({row:c})=>[a(h,{type:"primary",link:"",onClick:Y=>g(c)},{default:o(()=>[p(r(e(n)("config")),1)]),_:2},1032,["onClick"])]),_:1},8,["label"])]),_:1},8,["data"])),[[w,e(t).loading]])])]),_:1})])}}});export{Z as default};
