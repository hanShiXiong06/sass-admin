import{d as Q,r as h,n as Z,l as ee,q as n,h as m,s as D,w as l,a as r,e as i,i as R,t as p,u as s,R as le,c as E,F as T,T as B,A as te,B as w,U as ae,aW as ie,ay as se,az as ne,ac as oe,aD as re,L as de,ad as ue,ae as ce,al as _e,E as pe,M as me,X as ve,Y as fe}from"./index-904cb7a2.js";/* empty css                   *//* empty css                  *//* empty css                   *//* empty css                *//* empty css                  *//* empty css               *//* empty css                 *//* empty css                    */import"./el-tooltip-4ed993c7.js";/* empty css                  *//* empty css                     *//* empty css                        */import"./el-form-item-4ed993c7.js";/* empty css                 *//* empty css                  *//* empty css                  *//* empty css                    *//* empty css                 */import{a as he,i as ge,p as ye}from"./electronic_sheet-81054cac.js";import{l as be}from"./order-8e8307b0.js";import{l as ke,g as z}from"./lodop-ff2d2f62.js";const xe=r("p",null,"注意事项：",-1),Pe=r("p",null,"* 配送方式为物流配送的订单支持打印电子面单",-1),De=r("p",null,"* 无需物流、虚拟发货不支持打印电子面单",-1),Ee=r("p",null,"* 请对应物流公司选择面单模板",-1),Te=r("p",null,"* 批量打印时，只能选择一种面单模板",-1),we=r("p",null,"* 单个打印时，如果有多个包裹，会展示商品信息，支持多包裹打印电子面单",-1),Se=r("p",null,"* 多包裹打印时，请不要重复选择面单模板",-1),Ve={class:"truncate"},Ne={class:"truncate"},Ce={class:"flex"},Ie={class:"flex items-center w-[50px] h-[50px] mr-[10px]"},Re=["src"],Oe={class:"flex flex-col flex-1"},Le={class:"multi-hidden text-[14px]"},Fe={class:"text-[12px] text-[#999]"},Ae={class:"my-[15px]"},Be={class:"dialog-footer"},rl=Q({__name:"electronic-sheet-print",emits:["complete"],setup(Me,{expose:W,emit:j}){const S=h(!1),V=h(!1),b=h(!1);he().then(d=>{d.data&&ke(d.data)});const A=h([]);ge({status:1}).then(d=>{d.data&&(A.value=d.data)});const M={print_type:"multiple",order_id:0,electronic_sheet_id:"",list:[]},o=Z({...M}),U=h(),H=ee(()=>({electronic_sheet_id:[{required:!0,message:n("electronicSheetTemplatePlaceholder"),trigger:"blur"}]})),N=h("460px"),k=h([]),g=h(0),O=h(0),x=h([]),v=h({}),q=d=>{g.value=parseInt(d),O.value=o.list[d].delivery_id},X=async(d=null)=>{if(V.value=!0,Object.assign(o,M),x.value=[],k.value=[],v.value={},g.value=0,O.value=0,!!d)if(o.order_id=d.order_id,o.print_type=d.print_type,o.list=[],d.print_type=="single"){let t=[];d.order_goods.forEach(f=>{f.delivery_id&&t.indexOf(f.delivery_id)==-1&&t.push(f.delivery_id)}),t.length>1?be({order_id:o.order_id}).then(f=>{if(f.data){let C=f.data.filter(_=>{if(_.delivery_type=="express"&&_.sub_delivery_type=="express")return _});k.value.push(...C),k.value.forEach(_=>{o.list.push({delivery_id:_.id,electronic_sheet_id:""})})}V.value=!1,N.value="800px"}):(o.print_type="multiple",N.value="460px",V.value=!1)}else V.value=!1,N.value="460px"},Y=async d=>{if(V.value||!d)return;let t=z();t&&await d.validate(async f=>{if(f){let C=!1;if(o.print_type=="single"){for(let _=0;_<o.list.length;_++)if(o.list[_].electronic_sheet_id.length==0){ae({type:"warning",message:`请选择[包裹${_+1}]的面单模板`}),g.value=_,C=!0;break}}if(C||b.value)return;b.value=!0,ye({print_type:o.print_type,order_id:o.order_id,electronic_sheet_id:o.electronic_sheet_id,list:o.list}).then(_=>{if(x.value=[],v.value={},_.data){let u=_.data,y={},P=[],c=!1;if(t.PRINT_INIT("打印电子面单"),o.print_type=="single"){for(let a=0;a<u.length;a++)if(v.value["delivery_id_"+u[a].delivery_id]||(v.value["delivery_id_"+u[a].delivery_id]=[]),y["delivery_id_"+u[a].delivery_id]||(y["delivery_id_"+u[a].delivery_id]=[]),u[a].success){let I=u[a].print_template;t.ADD_PRINT_HTM(0,0,"100%","100%",I),t.NewPage(),c=!0,v.value["delivery_id_"+u[a].delivery_id].push(u[a])}else y["delivery_id_"+u[a].delivery_id].push(u[a]);for(let a in v.value)y[a]&&y[a].length&&v.value[a].push(...y[a]);Object.keys(v.value).length>1?N.value="800px":Object.keys(v.value).length==1&&(S.value=!1)}else{for(let a=0;a<u.length;a++)if(u[a].success){let I=u[a].print_template;t.ADD_PRINT_HTM(0,0,"100%","100%",I),t.NewPage(),c=!0,x.value.push(u[a])}else P.push(u[a]);P.length&&x.value.push(...P),x.value.length>1?N.value="800px":x.value.length==1&&(S.value=!1)}c&&t.PREVIEW(),b.value=!1}j("complete")}).catch(()=>{b.value=!1})}})},$=d=>{let t=z();if(!t||b.value)return;b.value=!0;let f=d.print_template;t.PRINT_INIT("打印电子面单"),t.ADD_PRINT_HTM(0,0,"100%","100%",f),t.PREVIEW(),b.value=!1};return W({showDialog:S,setFormData:X}),(d,t)=>{const f=ie,C=se,_=ne,u=oe,y=re,P=de,c=ue,a=ce,I=_e,L=pe,G=me,J=ve,K=fe;return m(),D(J,{modelValue:S.value,"onUpdate:modelValue":t[5]||(t[5]=e=>S.value=e),title:s(n)("electronicSheetPrintTitle"),width:N.value,class:"diy-dialog-wrap","destroy-on-close":!0,"close-on-click-modal":!1},{footer:l(()=>[r("span",Be,[i(L,{onClick:t[3]||(t[3]=e=>S.value=!1)},{default:l(()=>[R(p(s(n)("cancel")),1)]),_:1}),i(L,{type:"primary",loading:b.value,onClick:t[4]||(t[4]=e=>Y(U.value))},{default:l(()=>[R(p(s(n)("confirm")),1)]),_:1},8,["loading"])])]),default:l(()=>[i(f,{type:"warning",closable:!1,class:"!mb-[10px]"},{default:l(()=>[xe,Pe,De,Ee,Te,we,Se]),_:1}),le((m(),D(G,{model:o,ref_key:"formRef",ref:U,rules:s(H),class:"page-form es-form"},{default:l(()=>[o.print_type=="single"?(m(),E(T,{key:0},[k.value.length?(m(),E(T,{key:0},[i(_,{modelValue:g.value,"onUpdate:modelValue":t[0]||(t[0]=e=>g.value=e),onTabChange:q},{default:l(()=>[(m(!0),E(T,null,B(k.value,(e,F)=>(m(),D(C,{label:"包裹"+(F+1),name:F},null,8,["label","name"]))),256))]),_:1},8,["modelValue"]),i(P,{label:s(n)("electronicSheetTemplate")},{default:l(()=>[i(y,{modelValue:o.list[g.value].electronic_sheet_id,"onUpdate:modelValue":t[1]||(t[1]=e=>o.list[g.value].electronic_sheet_id=e),placeholder:s(n)("electronicSheetTemplatePlaceholder"),clearable:"",class:"input-width"},{default:l(()=>[(m(!0),E(T,null,B(A.value,e=>(m(),D(u,{key:e.id,label:e.template_name,value:e.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"]),i(P,{label:s(n)("company")},{default:l(()=>[r("div",Ve,p(k.value[g.value].company.company_name),1)]),_:1},8,["label"]),i(P,{label:s(n)("expressNumber")},{default:l(()=>[r("div",Ne,p(k.value[g.value].express_number),1)]),_:1},8,["label"]),i(a,{data:k.value[g.value].order_goods,size:"large"},{default:l(()=>[i(c,{label:s(n)("goodsName"),align:"left",width:"300"},{default:l(({row:e})=>[r("div",Ce,[r("div",Ie,[r("img",{class:"w-[50px] h-[50px]",src:s(te)(e.goods_image_thumb_small)},null,8,Re)]),r("div",Oe,[r("p",Le,p(e.goods_name),1),r("span",Fe,p(e.sku_name),1)])])]),_:1},8,["label"]),i(c,{prop:"price",label:s(n)("price"),"min-width":"50",align:"left"},null,8,["label"]),i(c,{prop:"num",label:s(n)("num"),"min-width":"50",align:"right"},null,8,["label"])]),_:1},8,["data"])],64)):w("",!0),v.value["delivery_id_"+O.value]&&v.value["delivery_id_"+O.value].length?(m(),E(T,{key:1},[r("h3",Ae,p(s(n)("electronicSheetPrintResult")),1),i(a,{data:v.value["delivery_id_"+O.value],size:"large",class:"table-top"},{default:l(()=>[i(c,{label:s(n)("deliveryPackageNo"),"min-width":"80"},{default:l(({row:e})=>[r("div",null,p(e.delivery_id),1)]),_:1},8,["label"]),i(c,{label:s(n)("printStatus"),"min-width":"80"},{default:l(({row:e})=>[i(I,{class:"cursor-pointer",type:e.success?"success":"danger"},{default:l(()=>[R(p(e.success?"成功":"失败"),1)]),_:2},1032,["type"])]),_:1},8,["label"]),i(c,{label:s(n)("printResultCode"),"min-width":"80"},{default:l(({row:e})=>[r("div",null,p(e.result_code),1)]),_:1},8,["label"]),i(c,{label:s(n)("printRemark"),"min-width":"200"},{default:l(({row:e})=>[r("div",null,p(e.reason),1)]),_:1},8,["label"]),i(c,{label:s(n)("operation"),fixed:"right",align:"right","min-width":"80"},{default:l(({row:e})=>[e.success?(m(),D(L,{key:0,type:"primary",link:"",onClick:F=>$(e)},{default:l(()=>[R(p(s(n)("electronicSheetPrintOperation")),1)]),_:2},1032,["onClick"])):w("",!0)]),_:1},8,["label"])]),_:1},8,["data"])],64)):w("",!0)],64)):w("",!0),o.print_type=="multiple"?(m(),E(T,{key:1},[i(P,{label:s(n)("electronicSheetTemplate"),prop:"electronic_sheet_id"},{default:l(()=>[i(y,{modelValue:o.electronic_sheet_id,"onUpdate:modelValue":t[2]||(t[2]=e=>o.electronic_sheet_id=e),placeholder:s(n)("electronicSheetTemplatePlaceholder"),clearable:"",class:"input-width"},{default:l(()=>[(m(!0),E(T,null,B(A.value,e=>(m(),D(u,{key:e.id,label:e.template_name,value:e.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"]),x.value.length>1?(m(),D(a,{key:0,data:x.value,size:"large",class:"table-top"},{default:l(()=>[i(c,{prop:"order_no",label:s(n)("orderNo"),"min-width":"150"},null,8,["label"]),i(c,{label:s(n)("printStatus"),"min-width":"80"},{default:l(({row:e})=>[i(I,{class:"cursor-pointer",type:e.success?"success":"danger"},{default:l(()=>[R(p(e.success?"成功":"失败"),1)]),_:2},1032,["type"])]),_:1},8,["label"]),i(c,{label:s(n)("printResultCode"),"min-width":"80"},{default:l(({row:e})=>[r("div",null,p(e.result_code),1)]),_:1},8,["label"]),i(c,{label:s(n)("printRemark"),"min-width":"160"},{default:l(({row:e})=>[r("div",null,p(e.reason),1)]),_:1},8,["label"]),i(c,{label:s(n)("operation"),fixed:"right",align:"right","min-width":"80"},{default:l(({row:e})=>[e.success?(m(),D(L,{key:0,type:"primary",link:"",onClick:F=>$(e)},{default:l(()=>[R(p(s(n)("electronicSheetPrintOperation")),1)]),_:2},1032,["onClick"])):w("",!0)]),_:1},8,["label"])]),_:1},8,["data"])):w("",!0)],64)):w("",!0)]),_:1},8,["model","rules"])),[[K,V.value]])]),_:1},8,["modelValue","title","width"])}}});export{rl as _};
