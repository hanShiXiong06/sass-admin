import z from"./VerifySlide-03851e74.js";import g from"./VerifyPoints-4b487191.js";import{P as k,r as o,l as w,aX as T,R as B,a0 as V,h as p,c as u,a as c,i as N,B as y,$ as d,s as C,aY as P,v}from"./index-904cb7a2.js";import{_ as j}from"./_plugin-vue_export-helper-c27b6911.js";import"./index-0d12e988.js";const O={name:"Vue2Verify",components:{VerifySlide:z,VerifyPoints:g},props:{captchaType:{type:String,required:!0},figure:{type:Number},arith:{type:Number},mode:{type:String,default:"pop"},vSpace:{type:Number},explain:{type:String},imgSize:{type:Object,default(){return{width:"310px",height:"155px"}}},blockSize:{type:Object},barSize:{type:Object}},setup(m){const{captchaType:a,figure:e,arith:t,mode:n,vSpace:h,explain:f,imgSize:I,blockSize:W,barSize:X}=k(m),i=o(!1),r=o(void 0),s=o(void 0),l=o({}),S=w(()=>n.value=="pop"?i.value:!0),b=()=>{l.value.refresh&&l.value.refresh()},x=()=>{i.value=!1,b()},_=()=>{n.value=="pop"&&(i.value=!0)};return T(()=>{switch(a.value){case"blockPuzzle":r.value="2",s.value="VerifySlide";break;case"clickWord":r.value="",s.value="VerifyPoints";break}}),{clickShow:i,verifyType:r,componentType:s,instance:l,showBox:S,closeBox:x,show:_}}},D={key:0,class:"verifybox-top"},E=c("i",{class:"iconfont icon-close"},null,-1),R=[E];function q(m,a,e,t,n,h){return B((p(),u("div",{class:v(e.mode=="pop"?"mask":"")},[c("div",{class:v(e.mode=="pop"?"verifybox":""),style:d({"max-width":parseInt(e.imgSize.width)+30+"px"})},[e.mode=="pop"?(p(),u("div",D,[N(" 请完成安全验证 "),c("span",{class:"verifybox-close",onClick:a[0]||(a[0]=(...f)=>t.closeBox&&t.closeBox(...f))},R)])):y("",!0),c("div",{class:"verifybox-bottom",style:d({padding:e.mode=="pop"?"15px":"0"})},[t.componentType?(p(),C(P(t.componentType),{key:0,captchaType:e.captchaType,type:t.verifyType,figure:e.figure,arith:e.arith,mode:e.mode,vSpace:e.vSpace,explain:e.explain,imgSize:e.imgSize,blockSize:e.blockSize,barSize:e.barSize,ref:"instance"},null,8,["captchaType","type","figure","arith","mode","vSpace","explain","imgSize","blockSize","barSize"])):y("",!0)],4)],6)],2)),[[V,t.showBox]])}const J=j(O,[["render",q]]);export{J as default};
