import{d as T,r as h,n as Y,l as j,Q as y,a2 as M,h as m,s as V,w as c,e as t,a as e,R as H,i as d,c as u,F as I,T as L,B as b,a0 as $,bX as z,aw as K,E as P,K as Q,ac as X,aD as q,bO as G,aT as J,aa as W,L as Z,M as ee}from"./index-99f00cf3.js";/* empty css                */import"./el-form-item-4ed993c7.js";import"./el-tooltip-4ed993c7.js";/* empty css                  *//* empty css                  *//* empty css                       *//* empty css                 *//* empty css                     *//* empty css                  *//* empty css               *//* empty css                  *//* empty css                  *//* empty css                    */const le={class:"flex items-center"},te=e("span",{class:"ml-[10px] el-form-item__label"},"付费升级",-1),oe={class:""},se=e("div",{class:"text-sm text-gray-400 mb-[5px]"}," 名称可填写如日卡，季度卡等，等级有效期单位天，0为永久不限制;限制购买数量0将不会限制;会员等级到期后将会回退到默认等级 ",-1),ae={class:"bg-[#FAFBFA] p-2 rounded-[5px] mb-[10px]"},ne={class:"flex items-center mb-2"},ce={class:"flex items-center mt-[5px]"},me=e("span",{class:"ml-[10px] mr-4"},[d("名称 "),e("span",{class:"text-red-500"},"*")],-1),de={class:"flex items-center mt-[5px] ml-[8px]"},pe=e("span",{class:"ml-[10px] mr-4"},[d("付费金额 "),e("span",{class:"text-red-500"},"*")],-1),ie={class:"flex items-center mt-[5px] ml-[8px] w-[140px]"},re={key:0,class:"flex items-center mt-[5px] ml-[8px]"},ue=e("span",{class:"ml-[10px] mr-4"},[d("有效期 "),e("span",{class:"text-red-500"},"*")],-1),_e=e("span",{class:"ml-[5px]"},"天",-1),fe={key:1,class:"flex items-center mt-[5px] ml-[8px]"},ve={class:"ml-8"},xe=e("div",{class:"text-sm text-gray-400 mb-[5px]"}," 开启后当前等级将等级权益将可以通过用户自主付费购买升级 ",-1),Ae=T({__name:"benefits-vip-fee",props:{modelValue:{type:Object,default:()=>({})}},emits:["update:modelValue"],setup(k,{expose:w,emit:U}){const E=k,o=h({is_use:0,fee_info:[]}),_=h(null),g=()=>{Array.isArray(o.value.fee_info)||(o.value.fee_info=[]),o.value.fee_info.push({id:z(),name:"",market_price:0,price:0,day:0,limit_num:0,num:0,is_use:"1",over_type:"common",over_time:""})},C=n=>{o.value.fee_info.splice(n.index,1)},B=Y({}),p=j({get(){return E.modelValue},set(n){U("update:modelValue",n)}});return y(()=>p.value,(n,a)=>{(!a||!Object.keys(a).length)&&Object.keys(n).length&&(o.value=p.value)},{immediate:!0}),y(()=>o.value,()=>{p.value=o.value},{deep:!0}),w({verify:async()=>{var a;let n=!0;return await((a=_.value)==null?void 0:a.validate(i=>{n=i})),n}}),(n,a)=>{const i=K,f=P,r=Q,v=X,F=q,D=G,O=J,S=W,A=M("block"),N=Z,R=ee;return m(),V(R,{ref_key:"formRef",ref:_,model:o.value,rules:B},{default:c(()=>[t(N,{label:"",prop:"discount",class:"!mb-[10px]"},{default:c(()=>[e("div",null,[e("div",le,[t(i,{modelValue:o.value.is_use,"onUpdate:modelValue":a[0]||(a[0]=l=>o.value.is_use=l),"true-label":1,"false-label":0,label:"",size:"large"},null,8,["modelValue"]),te]),H(e("div",oe,[e("div",null,[t(f,{onClick:a[1]||(a[1]=l=>g()),type:"primary"},{default:c(()=>[d("添加规格")]),_:1})]),se,e("div",ae,[(m(!0),u(I,null,L(o.value.fee_info,(l,x)=>(m(),V(A,{key:x},{default:c(()=>[e("div",ne,[e("div",ce,[me,t(r,{style:{width:"120px"},modelValue:l.name,"onUpdate:modelValue":s=>l.name=s,placeholder:"如日卡",class:"w-[120px]"},null,8,["modelValue","onUpdate:modelValue"])]),e("div",de,[pe,t(r,{mini:"0",style:{width:"100px"},modelValue:l.price,"onUpdate:modelValue":s=>l.price=s,placeholder:"售卖价格",type:"number",class:"w-[120px]"},null,8,["modelValue","onUpdate:modelValue"])]),e("div",ie,[t(F,{modelValue:l.over_type,"onUpdate:modelValue":s=>l.over_type=s,placeholder:"选择到期类型",style:{width:"240px"}},{default:c(()=>[t(v,{key:"common",label:"天数",value:"common"}),t(v,{key:"fixed",label:"固定到期",value:"fixed"})]),_:2},1032,["modelValue","onUpdate:modelValue"])]),l.over_type=="common"?(m(),u("div",re,[ue,t(r,{mini:"0",style:{width:"80px"},modelValue:l.day,"onUpdate:modelValue":s=>l.day=s,placeholder:"请输入",type:"number",class:"w-[120px]"},null,8,["modelValue","onUpdate:modelValue"]),_e])):b("",!0),l.over_type=="fixed"?(m(),u("div",fe,[t(D,{class:"ml-2",modelValue:l.over_time,"onUpdate:modelValue":s=>l.over_time=s,type:"datetime",placeholder:"请选择时间",format:"YYYY-MM-DD HH:mm:ss"},null,8,["modelValue","onUpdate:modelValue"])])):b("",!0),t(S,{content:l.is_use==0?"下架中":"使用中",placement:"top"},{default:c(()=>[t(O,{modelValue:l.is_use,"onUpdate:modelValue":s=>l.is_use=s,class:"ml-2","active-value":"1","inactive-value":"0"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["content"]),e("div",ve,[t(f,{plain:"",onClick:s=>C(x),type:"info"},{default:c(()=>[d("删除")]),_:2},1032,["onClick"])])])]),_:2},1024))),128))])],512),[[$,o.value.is_use]]),xe])]),_:1})]),_:1},8,["model","rules"])}}});export{Ae as default};
