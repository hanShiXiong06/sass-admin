import{d as ye,r as E,l as ee,n as O,h as v,c as x,a as n,b as xe,e as _,w as f,i as A,t as h,u as p,q as u,R as N,a0 as $,F as H,T as J,s as q,B as j,v as se,A as oe,aJ as U,a3 as F,a$ as be,U as K,E as Ce,ac as Se,aD as Le,L as Pe,K as Ve,bF as we,M as Ee,aw as Ae,J as Ge,W as Oe,X as Ne,Y as Te,p as Ie,g as $e}from"./index-904cb7a2.js";/* empty css                   *//* empty css                  *//* empty css                   *//* empty css                      *//* empty css                 *//* empty css               *//* empty css                  *//* empty css                  *//* empty css                     *//* empty css                  *//* empty css                 *//* empty css                        *//* empty css                    *//* empty css                *//* empty css                          *//* empty css                 */import"./el-form-item-4ed993c7.js";/* empty css                  */import{_ as B}from"./goods_default-664bb559.js";import{g as je,b as Ue}from"./goods-6bf0c95b.js";import{d as Fe,e as Be}from"./marketing-fa4978d8.js";import{_ as ze}from"./_plugin-vue_export-helper-c27b6911.js";const C=G=>(Ie("data-v-83a851b4"),G=G(),$e(),G),Me={class:"inline-block ml-[10px] text-[14px]"},Re={class:"text-primary mx-[2px]"},De={class:"table w-[100%]"},He={class:"table-head flex items-center bg-[#f5f7f9] py-[8px]"},Je=C(()=>n("div",{class:"w-[3%]"},null,-1)),qe={class:"w-[7%]"},Ke=C(()=>n("div",{class:"w-[50%]"},"商品信息",-1)),We=C(()=>n("div",{class:"w-[20%]"},"商品价格",-1)),Xe=C(()=>n("div",{class:"w-[20%]"},"库存",-1)),Ye={class:"table-body h-[350px] overflow-y-auto"},Qe={class:"flex items-center border-solid border-[#e5e7eb] py-[8px] border-b-[1px]"},Ze={key:0,class:"w-[3%]"},es=["onClick"],ss={key:2,class:"w-[3%]"},os={class:"w-[7%]"},ls={class:"flex items-center cursor-pointer w-[50%]"},ts={class:"min-w-[60px] h-[60px] flex items-center justify-center"},as=C(()=>n("div",{class:"image-slot"},[n("img",{class:"w-[60px] h-[60px]",src:B})],-1)),ds={key:1,class:"w-[60px] h-[60px]",src:B,fit:"contain"},ns={class:"ml-2"},is=["title"],cs={class:"text-primary text-[12px]"},rs={class:"w-[20%]"},ps={class:"w-[20%]"},us=C(()=>n("div",{class:"w-[6%]"},null,-1)),_s={class:"w-[4%]"},gs={class:"flex items-center cursor-pointer w-[50%]"},ms={class:"min-w-[60px] h-[60px] flex items-center justify-center"},hs=C(()=>n("div",{class:"image-slot"},[n("img",{class:"w-[60px] h-[60px]",src:B})],-1)),fs={key:1,class:"w-[60px] h-[60px]",src:B,fit:"contain"},vs={class:"ml-2"},ks=["title"],ys={class:"text-primary text-[12px]"},xs={class:"w-[20%] flex"},bs={class:"w-[20%] flex"},Cs={key:0,class:"h-[60px] flex items-center justify-center border-solid border-[#e5e7eb] py-[12px] border-b-[1px]"},Ss={class:"mt-[16px] flex"},Ls={class:"flex items-center flex-1"},Ps={class:"layui-table-bottom-left-container mr-[10px]"},Vs={class:"text-primary mx-[2px]"},ws={class:"dialog-footer"},Es=ye({__name:"newcomer-goods-select-popup",props:{modelValue:{type:String,default:""},max:{type:Number,default:0},min:{type:Number,default:0},mode:{type:String,default:"spu"},way:{type:String,default:""}},emits:["update:modelValue","goodsSelect"],setup(G,{expose:le,emit:W}){const r=G;let c=r.mode=="sku"?"sku_":"goods_";const S=E(!1),L=E(!1),k=ee({get(){return r.modelValue},set(l){W("update:modelValue",l)}}),P=E(!1),d=O({}),g=O([]),b=ee(()=>Object.keys(d).length),o=O({page:1,limit:10,total:0,loading:!0,data:[],searchParam:{keyword:"",goods_category:[],select_type:"all",goods_ids:"",verify_goods_ids:"",verify_sku_ids:"",goods_type:""}}),X=E(),te=l=>{V()},z=O([]),Y=O([]);(()=>{je().then(l=>{const e=l.data;if(e){const s=[];e.forEach(a=>{const i=[];a.child_list&&a.child_list.forEach(m=>{i.push({value:m.category_id,label:m.category_name})}),s.push({value:a.category_id,label:a.category_name,children:i})}),z.splice(0,z.length,...s)}}),Ue().then(l=>{const e=l.data;if(e)for(const s in e)Y.push(e[s])})})(),E(),E([]);const ae=l=>{l.isShow=!l.isShow},de=l=>{S.value=!1,o.data.forEach((e,s)=>{e.secondLevelCheckAll=l,e.skuList.forEach((a,i)=>{a.threeLevelCheckAll=l})}),l?o.data.forEach(e=>{r.mode=="spu"?(d[c+e.goods_id]=e,g.push(e.goods_id)):e.skuList.forEach(s=>{g.push(s.sku_id),d[c+s.sku_id]=U(s),d[c+s.sku_id].goods_name=e.goods_name,d[c+s.sku_id].goods_type_name=e.goods_type_name,d[c+s.sku_id].goods_type=e.goods_type})}):o.data.forEach(e=>{r.mode=="spu"?(g.splice(g.indexOf(e.goods_id),1),delete d[c+e.goods_id]):e.skuList.forEach(s=>{g.splice(g.indexOf(s.sku_id),1),delete d[c+s.sku_id]})})},ne=(l,e)=>{if(e.skuList.forEach((s,a)=>{s.threeLevelCheckAll=l}),M(),r.mode=="spu"?l?(g.push(e.goods_id),d[c+e.goods_id]=U(e)):(g.splice(g.indexOf(e.goods_id),1),delete d[c+e.goods_id]):l?e.skuList.forEach((s,a)=>{g.push(s.sku_id),d[c+s.sku_id]=U(s),d[c+s.sku_id].goods_name=e.goods_name,d[c+s.sku_id].goods_type_name=e.goods_type_name,d[c+s.sku_id].goods_type=e.goods_type}):e.skuList.forEach((s,a)=>{g.splice(g.indexOf(s.sku_id),1),delete d[c+s.sku_id]}),r.max&&r.max>0&&Object.keys(d).length>0&&Object.keys(d).length>r.max){let s=Object.keys(d).length;s=s-r.max,F(g).forEach((i,m,w)=>{if(m<s){let I=g.indexOf(i);delete d[c+g[I]],g.splice(I,1)}}),T()}},ie=(l,e,s)=>{let a=0;e.skuList.forEach((m,w)=>{m.threeLevelCheckAll&&a++}),a>0&&a!=e.skuList.length?(e.secondLevelCheckAll=!1,e.isSecondLevelIndeterminate=!0):a==e.skuList.length?(e.isSecondLevelIndeterminate=!1,e.secondLevelCheckAll=!0):(e.isSecondLevelIndeterminate=!1,e.secondLevelCheckAll=!1),M();let i=U(s);l?(g.push(i.sku_id),i.goods_name=e.goods_name,i.goods_type_name=e.goods_type_name,i.goods_type=e.goods_type,d[c+i.sku_id]=i):(g.splice(g.indexOf(i.sku_id),1),delete d[c+i.sku_id])},M=()=>{let l=0;o.data.forEach((e,s)=>{e.secondLevelCheckAll&&l++}),l>0&&l!=o.data.length?(L.value=!1,S.value=!0):l>0&&l==o.data.length?(S.value=!1,L.value=!0):(S.value=!1,L.value=!1)},V=(l=1,e=null)=>{S.value=!1,L.value=!1,o.loading=!0,o.data=[],o.page=l;const s=F(o.searchParam);if(s.select_type=="selected"){const a=[];for(let i in d)a.push(parseInt(i.replace(c,"")));s[c+"ids"]=a}else s[c+"ids"]="";Fe({page:o.page,limit:o.limit,...s}).then(a=>{let i=F(a.data.data);i.forEach(m=>{m.isShow=!1,m.isSecondLevelIndeterminate=!1,m.secondLevelCheckAll=!1}),r.mode=="sku"&&i.forEach(m=>{m.skuList.length&&m.skuList.forEach(w=>{w.threeLevelCheckAll=!1,w.goods_type=m.goods_type})}),e&&e(r.mode=="spu"?a.data.verify_goods_ids:a.data.verify_sku_ids,a.data.select_goods_list),T(),o.data=i,o.total=a.data.total,o.loading=!1}).catch(()=>{o.loading=!1})},T=()=>{be(()=>{if(r.mode=="spu")for(let l=0;l<o.data.length;l++)o.data[l].secondLevelCheckAll=!1,d[c+o.data[l].goods_id]&&(o.data[l].secondLevelCheckAll=!0);else{let l=!0;for(let e=0;e<o.data.length;e++)o.data[e].secondLevelCheckAll=!1,l=!0,o.data[e].isSecondLevelIndeterminate=!1,o.data[e].skuList.forEach((s,a)=>{s.threeLevelCheckAll=!1,d[c+s.sku_id]?(o.data[e].isSecondLevelIndeterminate=!0,s.threeLevelCheckAll=!0):l=!1}),l&&(o.data[e].isSecondLevelIndeterminate=!1,o.data[e].secondLevelCheckAll=!0)}M()})},ce=l=>{l&&(l.resetFields(),V())},re=()=>{for(let l in d)delete d[l];c=r.mode=="sku"?"sku_":"goods_",r.mode=="sku"?o.searchParam.verify_sku_ids=k.value:o.searchParam.verify_goods_ids=k.value,pe(),V(1,l=>{if(k.value&&k.value.length&&(k.value.splice(0,k.value.length,...l),g.splice(0,g.length,...l),Object.keys(d).length))for(let e in d){let s=Number(e.split(c)[1]);k.value.indexOf(s)==-1&&delete d[e]}}),P.value=!0},pe=()=>{const l=F(o.searchParam);Be({...l}).then(e=>{const s=e.data;if(r.mode=="sku")for(let a=0;a<s.length;a++)s[a].skuList.forEach(i=>{k.value.indexOf(i.sku_id)!=-1&&(i.goods_name=s[a].goods_name,i.goods_type_name=s[a].goods_type_name,i.goods_type=s[a].goods_type,d[c+i.sku_id]=i)});else for(let a=0;a<s.length;a++)k.value.indexOf(s[a].goods_id)!=-1&&(d[c+s[a].goods_id]=s[a]);if(Object.keys(d).length&&k.value.length)for(let a in d){let i=Number(a.split(c)[1]);k.value.indexOf(i)==-1&&delete d[a]}T()})},ue=()=>{for(let l in d)delete d[l];T()},_e=()=>{if(r.min&&b.value<r.min){K({type:"warning",message:`${u("goodsSelectPopupGoodsMinTip")}${r.min}${u("goodsSelectPopupPiece")}`});return}if(r.max&&r.max>0&&b.value&&b.value>r.max){K({type:"warning",message:`${u("goodsSelectPopupGoodsMaxTip")}${r.max}${u("goodsSelectPopupPiece")}`});return}if(r.way=="single"){let e=0,s=0;for(let a in d)d[a].goods_type=="virtual"?s++:d[a].goods_type=="real"&&e++;if(e!=Object.keys(d).length&&s!=Object.keys(d).length){K({type:"warning",message:`${u("wayPlaceholder")}`});return}}let l=[];for(let e in d)l.push(parseInt(e.replace(c,"")));k.value.splice(0,k.value.length,...l),W("goodsSelect",d),ge(),P.value=!1},ge=()=>{o.searchParam.keyword="",o.searchParam.goods_category=[],o.searchParam.select_type="all",o.searchParam.goods_ids="",o.searchParam.verify_goods_ids="",o.searchParam.verify_sku_ids="",o.searchParam.goods_type=""};return le({showDialog:P,selectGoods:d,selectGoodsNum:b}),(l,e)=>{const s=Ce,a=Se,i=Le,m=Pe,w=Ve,I=we,me=Ee,R=Ae,Q=Ge,he=Oe,fe=Ne,ve=Te;return v(),x("div",null,[n("div",{onClick:re},[xe(l.$slots,"default",{},()=>[_(s,null,{default:f(()=>[A(h(p(u)("goodsSelectPopupSelectGoodsButton")),1)]),_:1}),N(n("div",Me,[n("span",null,h(p(u)("goodsSelectPopupSelect")),1),n("span",Re,h(p(k).length),1),n("span",null,h(p(u)("goodsSelectPopupPiece")),1)],512),[[$,p(k).length]])],!0)]),_(fe,{modelValue:P.value,"onUpdate:modelValue":e[11]||(e[11]=t=>P.value=t),title:p(u)("goodsSelectPopupSelectGoodsDialog"),width:"1000px","close-on-press-escape":!1,"destroy-on-close":!0,"close-on-click-modal":!1},{footer:f(()=>[n("span",ws,[_(s,{onClick:e[10]||(e[10]=t=>P.value=!1)},{default:f(()=>[A(h(p(u)("cancel")),1)]),_:1}),_(s,{type:"primary",onClick:_e},{default:f(()=>[A(h(p(u)("confirm")),1)]),_:1})])]),default:f(()=>[_(me,{inline:!0,model:o.searchParam,ref_key:"searchFormRef",ref:X},{default:f(()=>[_(m,{prop:"select_type",class:"form-item-wrap"},{default:f(()=>[_(i,{modelValue:o.searchParam.select_type,"onUpdate:modelValue":e[0]||(e[0]=t=>o.searchParam.select_type=t),onChange:te},{default:f(()=>[_(a,{label:p(u)("goodsSelectPopupAllGoods"),value:"all"},null,8,["label"]),_(a,{label:p(u)("goodsSelectPopupSelectedGoods"),value:"selected"},null,8,["label"])]),_:1},8,["modelValue"])]),_:1}),_(m,{label:p(u)("goodsSelectPopupGoodsName"),prop:"keyword",class:"form-item-wrap"},{default:f(()=>[_(w,{modelValue:o.searchParam.keyword,"onUpdate:modelValue":e[1]||(e[1]=t=>o.searchParam.keyword=t),modelModifiers:{trim:!0},placeholder:p(u)("goodsSelectPopupGoodsNamePlaceholder"),maxlength:"60"},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),_(m,{label:p(u)("goodsSelectPopupGoodsCategory"),prop:"goods_category",class:"form-item-wrap"},{default:f(()=>[_(I,{modelValue:o.searchParam.goods_category,"onUpdate:modelValue":e[2]||(e[2]=t=>o.searchParam.goods_category=t),options:z,placeholder:p(u)("goodsSelectPopupGoodsCategoryPlaceholder"),clearable:"",props:{value:"value",label:"label",emitPath:!1}},null,8,["modelValue","options","placeholder"])]),_:1},8,["label"]),_(m,{label:p(u)("goodsSelectPopupGoodsType"),prop:"goods_type",class:"form-item-wrap"},{default:f(()=>[_(i,{modelValue:o.searchParam.goods_type,"onUpdate:modelValue":e[3]||(e[3]=t=>o.searchParam.goods_type=t),placeholder:p(u)("goodsSelectPopupGoodsTypePlaceholder"),clearable:""},{default:f(()=>[(v(!0),x(H,null,J(Y,t=>(v(),q(a,{key:t.type,label:t.name,value:t.type},null,8,["label","value"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"]),_(m,{class:"form-item-wrap"},{default:f(()=>[_(s,{type:"primary",onClick:e[4]||(e[4]=t=>V())},{default:f(()=>[A(h(p(u)("search")),1)]),_:1}),_(s,{onClick:e[5]||(e[5]=t=>ce(X.value))},{default:f(()=>[A(h(p(u)("reset")),1)]),_:1})]),_:1})]),_:1},8,["model"]),N((v(),x("div",De,[n("div",He,[Je,n("div",qe,[_(R,{modelValue:L.value,"onUpdate:modelValue":e[6]||(e[6]=t=>L.value=t),indeterminate:S.value,onChange:de},null,8,["modelValue","indeterminate"])]),Ke,We,Xe]),n("div",Ye,[(v(!0),x(H,null,J(o.data,(t,ke)=>(v(),x("div",{key:ke,class:"flex flex-col"},[n("div",Qe,[r.mode=="spu"?(v(),x("div",Ze)):j("",!0),r.mode=="sku"&&t.skuList.length>1?(v(),x("div",{key:1,class:se(["w-[3%] cursor-pointer text-center !text-[10px]",{"iconfont iconxiangyoujiantou":t.skuList.length,"arrow-show":t.isShow}]),onClick:y=>ae(t)},null,10,es)):j("",!0),r.mode=="sku"&&t.skuList.length<=1?(v(),x("div",ss)):j("",!0),n("div",os,[_(R,{modelValue:t.secondLevelCheckAll,"onUpdate:modelValue":y=>t.secondLevelCheckAll=y,indeterminate:t.isSecondLevelIndeterminate,onChange:y=>ne(y,t)},null,8,["modelValue","onUpdate:modelValue","indeterminate","onChange"])]),n("div",ls,[n("div",ts,[t.goods_cover_thumb_small?(v(),q(Q,{key:0,class:"w-[60px] h-[60px]",src:p(oe)(t.goods_cover_thumb_small),fit:"contain"},{error:f(()=>[as]),_:2},1032,["src"])):(v(),x("img",ds))]),n("div",ns,[n("span",{title:t.goods_name,class:"multi-hidden leading-[1.4]"},h(t.goods_name),9,is),n("span",cs,h(t.goods_type_name),1)])]),n("div",rs,"￥"+h(t.skuList.length>1?t.goodsSku.price:t.goodsSku.newcomer_price),1),n("div",ps,h(t.stock),1)]),N(n("div",null,[(v(!0),x(H,null,J(t.skuList,(y,Z)=>(v(),x("div",{key:Z,class:se(["flex items-center py-[8px] border-solid border-transparent border-b-[1px]",{hidden:!t.isShow,"border-[#e5e7eb]":Z==t.skuList.length-1}])},[us,n("div",_s,[_(R,{modelValue:y.threeLevelCheckAll,"onUpdate:modelValue":D=>y.threeLevelCheckAll=D,onChange:D=>ie(D,t,y)},null,8,["modelValue","onUpdate:modelValue","onChange"])]),n("div",gs,[n("div",ms,[y.sku_image?(v(),q(Q,{key:0,class:"w-[60px] h-[60px]",src:p(oe)(y.sku_image),fit:"contain"},{error:f(()=>[hs]),_:2},1032,["src"])):(v(),x("img",fs))]),n("div",vs,[n("span",{title:y.sku_name||t.goods_name,class:"multi-hidden leading-[1.4]"},h(y.sku_name||t.goods_name),9,ks),n("span",ys,h(t.goods_type_name),1)])]),n("div",xs,"￥"+h(y.newcomer_price),1),n("div",bs,h(y.stock),1)],2))),128))],512),[[$,r.mode=="sku"&&t.skuList.length>1]])]))),128)),!o.data.length&&!o.loading?(v(),x("div",Cs," 暂无数据 ")):j("",!0)])])),[[ve,o.loading]]),n("div",Ss,[n("div",Ls,[N(n("div",Ps,[n("span",null,h(p(u)("goodsSelectPopupBeforeTip")),1),n("span",Vs,h(p(b)),1),n("span",null,h(p(u)("goodsSelectPopupAfterTip")),1)],512),[[$,p(b)]]),N(_(s,{type:"primary",link:"",onClick:ue},{default:f(()=>[A(h(p(u)("goodsSelectPopupClearGoods")),1)]),_:1},512),[[$,p(b)]])]),_(he,{"current-page":o.page,"onUpdate:current-page":e[7]||(e[7]=t=>o.page=t),"page-size":o.limit,"onUpdate:page-size":e[8]||(e[8]=t=>o.limit=t),layout:"total, sizes, prev, pager, next, jumper",total:o.total,onSizeChange:e[9]||(e[9]=t=>V()),onCurrentChange:V},null,8,["current-page","page-size","total"])])]),_:1},8,["modelValue","title"])])}}});const eo=ze(Es,[["__scopeId","data-v-83a851b4"]]);export{eo as default};
