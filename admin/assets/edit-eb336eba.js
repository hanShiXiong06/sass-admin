import{d as X,x as Z,f as ee,r as w,l as le,q as i,aK as te,h as b,c as ae,e as t,w as a,u,aQ as oe,R as y,s as x,c9 as T,i as d,a as _,B as C,t as v,b$ as ie,a0 as V,aR as re,a7 as ue,K as de,L as ne,au as se,av as me,bF as pe,bO as ve,M as _e,E as ce,Y as fe}from"./index-99f00cf3.js";/* empty css                   *//* empty css                  *//* empty css                *//* empty css                       *//* empty css                 *//* empty css                     *//* empty css                  *//* empty css                          *//* empty css               *//* empty css                    *//* empty css                 *//* empty css                       */import"./el-form-item-4ed993c7.js";/* empty css                *//* empty css                   *//* empty css                       */import{i as ge,e as ye,j as be}from"./marketing-38c19ed5.js";import Ve from"./goods-select-popup-eba853a9.js";/* empty css                  *//* empty css                   *//* empty css                      *//* empty css                  *//* empty css                  *//* empty css                 */import"./el-tooltip-4ed993c7.js";/* empty css                 *//* empty css                        *//* empty css                        */import"./goods_default-664bb559.js";import"./goods-c64a9d59.js";import"./_plugin-vue_export-helper-c27b6911.js";const he={class:"main-container"},we={class:"flex items-center px-[5px]"},xe={class:"flex items-center px-[5px]"},Ce={class:"w-[220px] pl-[5px]"},Ee=_("div",{class:"form-tip"},"开启手动领取后，会员可以直接在优惠券列表以及优惠券推广中直接领取",-1),Ue={class:"w-[180px]"},ke=_("div",{class:"form-tip"},"每个会员通过前端直接可领用数量",-1),De={class:"fixed-footer-wrap"},Pe={class:"fixed-footer"},sl=X({__name:"edit",setup(Re){const k=Z();ee();const q=k.meta.title,S=parseInt(k.query.id),f=w(!1),N=new Date,F=w(null),E=new Date;E.setTime(E.getTime()+3600*1e3*2*360);const e=w({...{title:"",price:"",type:1,limit:2,receive_type:2,remain_count:1e3,threshold:2,limit_count:"",min_condition_money:"",length:30,goods_ids:[],goods_category_ids:[],receive_type_time:2,valid_type:1,receive_time:[N,E],valid_time:E}}),D=w(),B=le(()=>({title:[{required:!0,message:i("titlePlaceholder"),trigger:"blur"}],price:[{required:!0,validator:K,trigger:"blur"}],goods_ids:[{required:!0,message:i("请选择商品"),trigger:"blur"}],goods_category_ids:[{required:!0,message:i("请选择商品分类"),trigger:"blur"}],min_condition_money:[{required:!0,validator:I,trigger:"blur"}],valid_time:[{required:!0,validator:O,trigger:"blur"}],receive_time:[{required:!0,validator:L,trigger:"blur"}],remain_count:[{required:!0,validator:j,trigger:"blur"}],limit_count:[{required:!0,validator:$,trigger:"blur"}]})),L=(n,l,r)=>{e.value.receive_type_time==1&&e.value.receive_type==1&&((!e.value.receive_time[0]||h(e.value.receive_time[0])<=Date.now())&&r(new Error(i("领取开始时间不能小于等于当前时间"))),(!e.value.receive_time[1]||h(e.value.receive_time[1])<=h(e.value.receive_time[0]))&&r(new Error(i("领取结束时间不能小于等于领取开始时间")))),r()},O=(n,l,r)=>{e.value.valid_type==2&&e.value.valid_time<=Date.now()&&r(new Error(i("有效期不能小于等于当前时间"))),e.value.valid_type==2&&h(e.value.valid_time)<=h(e.value.receive_time[1])&&r(new Error(i("有效期不能小于等于领取结束时间"))),r()},I=(n,l,r)=>{e.value.threshold==1&&e.value.min_condition_money<=0&&r(new Error(i("使用门槛最低不能小于0元"))),r()},j=(n,l,r)=>{e.value.remain_count!=""&&e.value.remain_count>1e5&&r(new Error(i("remainCountPlaceholder"))),(!e.value.remain_count||e.value.remain_count!=""&&e.value.remain_count<1)&&r(new Error(i("发放数量不能小于1张"))),r()},K=(n,l,r)=>{(!e.value.price||e.value.price==""||e.value.price<=0)&&r(new Error(i("pricePlaceholder"))),r()},$=(n,l,r)=>{e.value.limit_count!=""&&e.value.limit_count<1&&r(new Error(i("userLimitCountPlaceholder"))),e.value.limit==1&&e.value.limit_count>e.value.remain_count&&r(new Error(i("限领张数不能大于发放数量"))),r()},M={multiple:!0},U=w([]),G=()=>{ye({}).then(n=>{U.value=n.data.goods_category_tree})},J=async n=>{f.value||!n||await n.validate(async l=>{if(l){f.value=!0;const r=JSON.parse(JSON.stringify(e.value));r.type==1?(delete r.goods_category_ids,delete r.goods_ids):r.type==2?delete r.goods_ids:r.type==3&&delete r.goods_category_ids,be(r).then(p=>{f.value=!1,history.back()}).catch(()=>{f.value=!1})}})};te(async()=>{await G(),H(S)});const h=n=>new Date(n).getTime(),H=n=>{f.value=!0,ge(n).then(l=>{if(e.value=Object.assign(e.value,l.data),parseInt(e.value.start_time)!=0&&parseInt(e.value.end_time)!=0){const r=new Date(e.value.start_time),c=new Date(e.value.end_time);e.value.receive_type_time=1,e.value.receive_time=[r,c]}l.data.valid_end_time&&(e.value.valid_time=l.data.valid_end_time),e.value.type==2&&Q(e.value.goods_category_ids),f.value=!1}).catch(()=>{f.value=!1})},Q=n=>{const l=[];n.forEach((r,c)=>{U.value.forEach((p,s)=>{p.value==r?(l[c]=[],l[c].push(p.value)):p.children.forEach((m,g)=>{m.value==r&&(l[c]=[],l[c].push(p.value),l[c].push(m.value))})})}),e.value.goods_category_ids=l},Y=()=>{history.back()};return(n,l)=>{const r=re,c=ue,p=de,s=ne,m=se,g=me,z=pe,P=ve,A=_e,R=ce,W=fe;return b(),ae("div",he,[t(c,{class:"card !border-none",shadow:"never"},{default:a(()=>[t(r,{content:u(q),icon:u(oe),onBack:l[0]||(l[0]=o=>n.$router.back())},null,8,["content","icon"])]),_:1}),Object.keys(e.value).length?y((b(),x(c,{key:0,class:"box-card mt-[15px] !border-none",shadow:"never"},{default:a(()=>[t(A,{class:"page-form",model:e.value,"label-width":"120px",ref_key:"formRef",ref:D,rules:u(B)},{default:a(()=>[t(s,{label:u(i)("title"),prop:"title"},{default:a(()=>[t(p,{modelValue:e.value.title,"onUpdate:modelValue":l[1]||(l[1]=o=>e.value.title=o),clearable:"",placeholder:u(i)("titlePlaceholder"),class:"input-width",maxlength:20},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),t(s,{label:u(i)("price"),prop:"price"},{default:a(()=>[t(p,{modelValue:e.value.price,"onUpdate:modelValue":l[2]||(l[2]=o=>e.value.price=o),onKeyup:l[3]||(l[3]=o=>u(T)(o)),clearable:"",placeholder:u(i)("pricePlaceholder"),class:"input-width",maxlength:"5"},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),t(s,{label:u(i)("type"),prop:"type"},{default:a(()=>[t(g,{modelValue:e.value.type,"onUpdate:modelValue":l[4]||(l[4]=o=>e.value.type=o),disabled:""},{default:a(()=>[t(m,{label:1},{default:a(()=>[d("通用券")]),_:1}),t(m,{label:2},{default:a(()=>[d("品类券")]),_:1}),t(m,{label:3},{default:a(()=>[d("商品券")]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["label"]),e.value.type==2?(b(),x(s,{key:0,prop:"goods_category_ids"},{default:a(()=>[_("div",null,[t(z,{modelValue:e.value.goods_category_ids,"onUpdate:modelValue":l[5]||(l[5]=o=>e.value.goods_category_ids=o),options:U.value,props:M,"collapse-tags":"","collapse-tags-tooltip":"",clearable:""},null,8,["modelValue","options"])])]),_:1})):C("",!0),e.value.type==3?(b(),x(s,{key:1,prop:"goods_ids"},{default:a(()=>[_("div",null,[t(s,null,{default:a(()=>[t(Ve,{ref_key:"goodsSelectPopupRef",ref:F,modelValue:e.value.goods_ids,"onUpdate:modelValue":l[6]||(l[6]=o=>e.value.goods_ids=o),min:1,max:99},null,8,["modelValue"])]),_:1})])]),_:1})):C("",!0),t(s,{label:u(i)("threshold")},{default:a(()=>[t(g,{modelValue:e.value.threshold,"onUpdate:modelValue":l[7]||(l[7]=o=>e.value.threshold=o)},{default:a(()=>[t(m,{label:1},{default:a(()=>[d(v(u(i)("reduction")),1)]),_:1}),t(m,{label:2},{default:a(()=>[d(v(u(i)("noThreshold")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["label"]),e.value.threshold==1?(b(),x(s,{key:2,prop:"min_condition_money"},{default:a(()=>[d(" 最低满 "),_("div",we,[t(p,{modelValue:e.value.min_condition_money,"onUpdate:modelValue":l[8]||(l[8]=o=>e.value.min_condition_money=o),onKeyup:l[9]||(l[9]=o=>u(T)(o)),clearable:"",class:"!w-[100px]"},null,8,["modelValue"])]),d(" 元可用 ")]),_:1})):C("",!0),t(s,{label:u(i)("validType")},{default:a(()=>[t(g,{modelValue:e.value.valid_type,"onUpdate:modelValue":l[10]||(l[10]=o=>e.value.valid_type=o)},{default:a(()=>[t(m,{label:1},{default:a(()=>[d(v(u(i)("days")),1)]),_:1}),t(m,{label:2},{default:a(()=>[d(v(u(i)("times")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["label"]),y(t(s,null,{default:a(()=>[d(" 领劵后立即生效，有效期 "),_("div",xe,[t(p,{modelValue:e.value.length,"onUpdate:modelValue":l[11]||(l[11]=o=>e.value.length=o),onKeyup:l[12]||(l[12]=o=>u(ie)(o)),clearable:"",class:"!w-[100px]"},null,8,["modelValue"])]),d(" 天 ")]),_:1},512),[[V,e.value.valid_type==1]]),e.value.valid_type==2?(b(),x(s,{key:3,prop:"valid_time"},{default:a(()=>[d(" 领劵后立即生效，使用时间截止至 "),_("div",Ce,[t(P,{modelValue:e.value.valid_time,"onUpdate:modelValue":l[13]||(l[13]=o=>e.value.valid_time=o),type:"datetime",placeholder:u(i)("validTimePlaceholder")},null,8,["modelValue","placeholder"])])]),_:1})):C("",!0),t(s,{label:u(i)("receiveType")},{default:a(()=>[_("div",null,[t(g,{modelValue:e.value.receive_type,"onUpdate:modelValue":l[14]||(l[14]=o=>e.value.receive_type=o)},{default:a(()=>[t(m,{label:1},{default:a(()=>[d(v(u(i)("user")),1)]),_:1}),t(m,{label:2},{default:a(()=>[d(v(u(i)("grant")),1)]),_:1})]),_:1},8,["modelValue"])]),Ee]),_:1},8,["label"]),y(t(s,{label:u(i)("receiveTime")},{default:a(()=>[t(g,{modelValue:e.value.receive_type_time,"onUpdate:modelValue":l[15]||(l[15]=o=>e.value.receive_type_time=o)},{default:a(()=>[t(m,{label:1},{default:a(()=>[d(v(u(i)("limitedTime")),1)]),_:1}),t(m,{label:2},{default:a(()=>[d(v(u(i)("unlimitedTime")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["label"]),[[V,e.value.receive_type==1]]),y(t(s,{prop:"receive_time"},{default:a(()=>[_("div",Ue,[t(P,{modelValue:e.value.receive_time,"onUpdate:modelValue":l[16]||(l[16]=o=>e.value.receive_time=o),type:"datetimerange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},null,8,["modelValue"])])]),_:1},512),[[V,e.value.receive_type_time==1&&e.value.receive_type==1]]),y(t(s,{label:u(i)("receiveNumber")},{default:a(()=>[t(g,{modelValue:e.value.limit,"onUpdate:modelValue":l[17]||(l[17]=o=>e.value.limit=o)},{default:a(()=>[t(m,{label:1},{default:a(()=>[d(v(u(i)("limit")),1)]),_:1}),t(m,{label:2},{default:a(()=>[d(v(u(i)("unlimited")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["label"]),[[V,e.value.receive_type==1]]),y(t(s,{prop:"remain_count"},{default:a(()=>[_("div",null,[t(p,{onkeypress:"return( /[\\d]/.test(String.fromCharCode(event.keyCode) ) )",modelValue:e.value.remain_count,"onUpdate:modelValue":l[18]||(l[18]=o=>e.value.remain_count=o),clearable:"",placeholder:u(i)("remainCountPlaceholder"),class:"input-width",min:e.value.remain_count,max:1e5,controls:!1,maxlength:"6"},{append:a(()=>[d("张")]),_:1},8,["modelValue","placeholder","min"])])]),_:1},512),[[V,e.value.limit==1&&e.value.receive_type==1]]),y(t(s,{label:u(i)("userLimitCount"),prop:"limit_count"},{default:a(()=>[t(p,{onkeypress:"return( /[\\d]/.test(String.fromCharCode(event.keyCode) ) )",modelValue:e.value.limit_count,"onUpdate:modelValue":l[19]||(l[19]=o=>e.value.limit_count=o),clearable:"",placeholder:u(i)("userLimitCountPlaceholder"),class:"input-width",min:1,max:1e5,maxlength:"6"},{append:a(()=>[d("张")]),_:1},8,["modelValue","placeholder"]),ke]),_:1},8,["label"]),[[V,e.value.receive_type==1]])]),_:1},8,["model","rules"])]),_:1})),[[W,f.value]]):C("",!0),_("div",De,[_("div",Pe,[t(R,{type:"primary",onClick:l[20]||(l[20]=o=>J(D.value))},{default:a(()=>[d(v(u(i)("save")),1)]),_:1}),t(R,{onClick:l[21]||(l[21]=o=>Y())},{default:a(()=>[d(v(u(i)("cancel")),1)]),_:1})])])])}}});export{sl as default};