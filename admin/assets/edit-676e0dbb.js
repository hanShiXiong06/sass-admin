import{d as Z,x as ee,f as le,r as w,l as te,q as i,aK as ae,h as b,c as oe,e as t,w as a,u,aQ as ie,R as y,s as x,cb as q,i as d,a as _,B as C,t as v,c1 as re,a0 as V,a3 as ue,aR as de,a7 as ne,K as se,L as me,au as pe,av as ve,bF as _e,bR as ce,M as fe,E as ge,Y as ye}from"./index-904cb7a2.js";/* empty css                   *//* empty css                  *//* empty css                *//* empty css                       *//* empty css                 *//* empty css                     *//* empty css                  *//* empty css                          *//* empty css               *//* empty css                    *//* empty css                 *//* empty css                       */import"./el-form-item-4ed993c7.js";/* empty css                *//* empty css                   *//* empty css                       */import{j as be,f as Ve,k as he}from"./marketing-fa4978d8.js";import we from"./goods-select-popup-f394e385.js";/* empty css                  *//* empty css                   *//* empty css                      *//* empty css                  *//* empty css                  *//* empty css                 *//* empty css                        */import"./goods_default-664bb559.js";import"./goods-6bf0c95b.js";import"./_plugin-vue_export-helper-c27b6911.js";const xe={class:"main-container"},Ce={class:"flex items-center px-[5px]"},Ee={class:"flex items-center px-[5px]"},Ue={class:"w-[220px] pl-[5px]"},De=_("div",{class:"form-tip"},"开启手动领取后，会员可以直接在优惠券列表以及优惠券推广中直接领取",-1),ke={class:"w-[180px]"},Pe=_("div",{class:"form-tip"},"每个会员通过前端直接可领用数量",-1),Re={class:"fixed-footer-wrap"},Te={class:"fixed-footer"},nl=Z({__name:"edit",setup(qe){const D=ee(),M=le(),F=D.meta.title,I=parseInt(D.query.id),f=w(!1),S=new Date,B=w(null),E=new Date;E.setTime(E.getTime()+3600*1e3*2*360);const e=w({...{title:"",price:"",type:1,limit:2,receive_type:2,remain_count:1e3,threshold:2,limit_count:"",min_condition_money:"",length:30,goods_ids:[],goods_category_ids:[],receive_type_time:2,valid_type:1,receive_time:[S,E],valid_time:E}}),k=w(),L=te(()=>({title:[{required:!0,message:i("titlePlaceholder"),trigger:"blur"}],price:[{required:!0,validator:$,trigger:"blur"}],goods_ids:[{required:!0,message:i("请选择商品"),trigger:"blur"}],goods_category_ids:[{required:!0,message:i("请选择商品分类"),trigger:"blur"}],min_condition_money:[{required:!0,validator:K,trigger:"blur"}],valid_time:[{required:!0,validator:j,trigger:"blur"}],receive_time:[{required:!0,validator:N,trigger:"blur"}],remain_count:[{required:!0,validator:O,trigger:"blur"}],limit_count:[{required:!0,validator:G,trigger:"blur"}]})),N=(s,l,r)=>{e.value.receive_type_time==1&&e.value.receive_type==1&&((!e.value.receive_time[0]||h(e.value.receive_time[0])<=Date.now())&&r(new Error(i("领取开始时间不能小于等于当前时间"))),(!e.value.receive_time[1]||h(e.value.receive_time[1])<=h(e.value.receive_time[0]))&&r(new Error(i("领取结束时间不能小于等于领取开始时间")))),r()},j=(s,l,r)=>{e.value.valid_type==2&&e.value.valid_time<=Date.now()&&r(new Error(i("有效期不能小于等于当前时间"))),e.value.valid_type==2&&e.value.receive_type_time==1&&e.value.receive_type==1&&h(e.value.valid_time)<=h(e.value.receive_time[1])&&r(new Error(i("有效期不能小于等于领取结束时间"))),r()},K=(s,l,r)=>{e.value.threshold==1&&e.value.min_condition_money<=0&&r(new Error(i("使用门槛最低不能小于0元"))),r()},O=(s,l,r)=>{e.value.remain_count!=""&&e.value.remain_count>1e5&&r(new Error(i("remainCountPlaceholder"))),(!e.value.remain_count||e.value.remain_count!=""&&e.value.remain_count<1)&&r(new Error(i("发放数量不能小于1张"))),r()},$=(s,l,r)=>{(!e.value.price||e.value.price==""||e.value.price<=0)&&r(new Error(i("pricePlaceholder"))),r()},G=(s,l,r)=>{(!e.value.limit_count||e.value.limit_count!=""&&e.value.limit_count<1)&&r(new Error(i("userLimitCountPlaceholder"))),e.value.limit==1&&e.value.limit_count!=""&&e.value.remain_count!=""&&parseInt(e.value.limit_count)>parseInt(e.value.remain_count)&&r(new Error(i("限领张数不能大于发放数量"))),r()},H={multiple:!0},U=w([]),Q=()=>{Ve({}).then(s=>{U.value=s.data.goods_category_tree})},Y=async s=>{f.value||!s||await s.validate(async l=>{if(l){f.value=!0;const r=ue(e.value);r.type==1?(delete r.goods_category_ids,delete r.goods_ids):r.type==2?delete r.goods_ids:r.type==3&&delete r.goods_category_ids,he(r).then(p=>{f.value=!1,history.back()}).catch(()=>{f.value=!1})}})};ae(async()=>{await Q(),z(I)});const h=s=>new Date(s).getTime(),z=s=>{f.value=!0,be(s).then(l=>{if(e.value=Object.assign(e.value,l.data),parseInt(e.value.start_time)!=0&&parseInt(e.value.end_time)!=0){const r=new Date(e.value.start_time),c=new Date(e.value.end_time);e.value.receive_type_time=1,e.value.receive_time=[r,c]}l.data.valid_end_time&&(e.value.valid_time=l.data.valid_end_time),e.value.type==2&&A(e.value.goods_category_ids),f.value=!1}).catch(()=>{f.value=!1})},A=s=>{const l=[];s.forEach((r,c)=>{U.value.forEach((p,n)=>{p.value==r?(l[c]=[],l[c].push(p.value)):p.children.forEach((m,g)=>{m.value==r&&(l[c]=[],l[c].push(p.value),l[c].push(m.value))})})}),e.value.goods_category_ids=l},P=()=>{M.push("/shop/marketing/coupon/list")};return(s,l)=>{const r=de,c=ne,p=se,n=me,m=pe,g=ve,J=_e,R=ce,W=fe,T=ge,X=ye;return b(),oe("div",xe,[t(c,{class:"card !border-none",shadow:"never"},{default:a(()=>[t(r,{content:u(F),icon:u(ie),onBack:l[0]||(l[0]=o=>P())},null,8,["content","icon"])]),_:1}),Object.keys(e.value).length?y((b(),x(c,{key:0,class:"box-card mt-[15px] !border-none",shadow:"never"},{default:a(()=>[t(W,{class:"page-form",model:e.value,"label-width":"120px",ref_key:"formRef",ref:k,rules:u(L)},{default:a(()=>[t(n,{label:u(i)("title"),prop:"title"},{default:a(()=>[t(p,{modelValue:e.value.title,"onUpdate:modelValue":l[1]||(l[1]=o=>e.value.title=o),modelModifiers:{trim:!0},clearable:"",placeholder:u(i)("titlePlaceholder"),class:"input-width",maxlength:20},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),t(n,{label:u(i)("price"),prop:"price"},{default:a(()=>[t(p,{modelValue:e.value.price,"onUpdate:modelValue":l[2]||(l[2]=o=>e.value.price=o),modelModifiers:{trim:!0},onKeyup:l[3]||(l[3]=o=>u(q)(o)),clearable:"",placeholder:u(i)("pricePlaceholder"),class:"input-width",maxlength:"5"},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),t(n,{label:u(i)("type"),prop:"type"},{default:a(()=>[t(g,{modelValue:e.value.type,"onUpdate:modelValue":l[4]||(l[4]=o=>e.value.type=o),disabled:""},{default:a(()=>[t(m,{label:1},{default:a(()=>[d("通用券")]),_:1}),t(m,{label:2},{default:a(()=>[d("品类券")]),_:1}),t(m,{label:3},{default:a(()=>[d("商品券")]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["label"]),e.value.type==2?(b(),x(n,{key:0,prop:"goods_category_ids"},{default:a(()=>[_("div",null,[t(J,{modelValue:e.value.goods_category_ids,"onUpdate:modelValue":l[5]||(l[5]=o=>e.value.goods_category_ids=o),options:U.value,props:H,"collapse-tags":"","collapse-tags-tooltip":"",clearable:""},null,8,["modelValue","options"])])]),_:1})):C("",!0),e.value.type==3?(b(),x(n,{key:1,prop:"goods_ids"},{default:a(()=>[_("div",null,[t(n,null,{default:a(()=>[t(we,{ref_key:"goodsSelectPopupRef",ref:B,modelValue:e.value.goods_ids,"onUpdate:modelValue":l[6]||(l[6]=o=>e.value.goods_ids=o),min:1,max:99},null,8,["modelValue"])]),_:1})])]),_:1})):C("",!0),t(n,{label:u(i)("threshold")},{default:a(()=>[t(g,{modelValue:e.value.threshold,"onUpdate:modelValue":l[7]||(l[7]=o=>e.value.threshold=o)},{default:a(()=>[t(m,{label:1},{default:a(()=>[d(v(u(i)("reduction")),1)]),_:1}),t(m,{label:2},{default:a(()=>[d(v(u(i)("noThreshold")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["label"]),e.value.threshold==1?(b(),x(n,{key:2,prop:"min_condition_money"},{default:a(()=>[d(" 最低满 "),_("div",Ce,[t(p,{modelValue:e.value.min_condition_money,"onUpdate:modelValue":l[8]||(l[8]=o=>e.value.min_condition_money=o),modelModifiers:{trim:!0},onKeyup:l[9]||(l[9]=o=>u(q)(o)),clearable:"",class:"!w-[100px]"},null,8,["modelValue"])]),d(" 元可用 ")]),_:1})):C("",!0),t(n,{label:u(i)("validType")},{default:a(()=>[t(g,{modelValue:e.value.valid_type,"onUpdate:modelValue":l[10]||(l[10]=o=>e.value.valid_type=o)},{default:a(()=>[t(m,{label:1},{default:a(()=>[d(v(u(i)("days")),1)]),_:1}),t(m,{label:2},{default:a(()=>[d(v(u(i)("times")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["label"]),y(t(n,null,{default:a(()=>[d(" 领劵后立即生效，有效期 "),_("div",Ee,[t(p,{modelValue:e.value.length,"onUpdate:modelValue":l[11]||(l[11]=o=>e.value.length=o),modelModifiers:{trim:!0},onKeyup:l[12]||(l[12]=o=>u(re)(o)),clearable:"",class:"!w-[100px]"},null,8,["modelValue"])]),d(" 天 ")]),_:1},512),[[V,e.value.valid_type==1]]),e.value.valid_type==2?(b(),x(n,{key:3,prop:"valid_time"},{default:a(()=>[d(" 领劵后立即生效，使用时间截止至 "),_("div",Ue,[t(R,{modelValue:e.value.valid_time,"onUpdate:modelValue":l[13]||(l[13]=o=>e.value.valid_time=o),type:"datetime",placeholder:u(i)("validTimePlaceholder")},null,8,["modelValue","placeholder"])])]),_:1})):C("",!0),t(n,{label:u(i)("receiveType")},{default:a(()=>[_("div",null,[t(g,{modelValue:e.value.receive_type,"onUpdate:modelValue":l[14]||(l[14]=o=>e.value.receive_type=o)},{default:a(()=>[t(m,{label:1},{default:a(()=>[d(v(u(i)("user")),1)]),_:1}),t(m,{label:2},{default:a(()=>[d(v(u(i)("grant")),1)]),_:1})]),_:1},8,["modelValue"])]),De]),_:1},8,["label"]),y(t(n,{label:u(i)("receiveTime")},{default:a(()=>[t(g,{modelValue:e.value.receive_type_time,"onUpdate:modelValue":l[15]||(l[15]=o=>e.value.receive_type_time=o)},{default:a(()=>[t(m,{label:1},{default:a(()=>[d(v(u(i)("limitedTime")),1)]),_:1}),t(m,{label:2},{default:a(()=>[d(v(u(i)("unlimitedTime")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["label"]),[[V,e.value.receive_type==1]]),y(t(n,{prop:"receive_time"},{default:a(()=>[_("div",ke,[t(R,{modelValue:e.value.receive_time,"onUpdate:modelValue":l[16]||(l[16]=o=>e.value.receive_time=o),type:"datetimerange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},null,8,["modelValue"])])]),_:1},512),[[V,e.value.receive_type_time==1&&e.value.receive_type==1]]),y(t(n,{label:u(i)("receiveNumber")},{default:a(()=>[t(g,{modelValue:e.value.limit,"onUpdate:modelValue":l[17]||(l[17]=o=>e.value.limit=o)},{default:a(()=>[t(m,{label:1},{default:a(()=>[d(v(u(i)("limit")),1)]),_:1}),t(m,{label:2},{default:a(()=>[d(v(u(i)("unlimited")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["label"]),[[V,e.value.receive_type==1]]),y(t(n,{prop:"remain_count"},{default:a(()=>[_("div",null,[t(p,{onkeypress:"return( /[\\d]/.test(String.fromCharCode(event.keyCode) ) )",modelValue:e.value.remain_count,"onUpdate:modelValue":l[18]||(l[18]=o=>e.value.remain_count=o),modelModifiers:{trim:!0},clearable:"",placeholder:u(i)("remainCountPlaceholder"),class:"input-width",min:e.value.remain_count,max:1e5,controls:!1,maxlength:"6"},{append:a(()=>[d("张")]),_:1},8,["modelValue","placeholder","min"])])]),_:1},512),[[V,e.value.limit==1&&e.value.receive_type==1]]),y(t(n,{label:u(i)("userLimitCount"),prop:"limit_count"},{default:a(()=>[t(p,{onkeypress:"return( /[\\d]/.test(String.fromCharCode(event.keyCode) ) )",modelValue:e.value.limit_count,"onUpdate:modelValue":l[19]||(l[19]=o=>e.value.limit_count=o),modelModifiers:{trim:!0},clearable:"",placeholder:u(i)("userLimitCountPlaceholder"),class:"input-width",min:1,max:1e5,maxlength:"6"},{append:a(()=>[d("张")]),_:1},8,["modelValue","placeholder"]),Pe]),_:1},8,["label"]),[[V,e.value.receive_type==1]])]),_:1},8,["model","rules"])]),_:1})),[[X,f.value]]):C("",!0),_("div",Re,[_("div",Te,[t(T,{type:"primary",onClick:l[20]||(l[20]=o=>Y(k.value))},{default:a(()=>[d(v(u(i)("save")),1)]),_:1}),t(T,{onClick:l[21]||(l[21]=o=>P())},{default:a(()=>[d(v(u(i)("cancel")),1)]),_:1})])])])}}});export{nl as default};
