import{d as Q,r as m,n as W,l as X,q as D,aP as G,Q as H,a2 as I,h as o,s as v,w as a,a as t,c as d,t as s,B as l,e as r,i,F as E,T as C,u as L,A as J,br as K,U as V,a1 as Y,al as Z,d7 as $,cB as ee,a8 as te,a9 as se,a7 as oe,X as ae}from"./index-904cb7a2.js";/* empty css                  *//* empty css                   *//* empty css                *//* empty css                         *//* empty css                  *//* empty css                   *//* empty css               */import{u as le}from"./dict-17d553e9.js";import{b as de,d as re,a as ie}from"./order-c037699a.js";/* empty css                   */const ne={class:"flex items-center mt-4"},ce={key:0,class:"mr-[28px] p-4 pl-12 pr-12 rounded-md statistic-card bg-gradient-to-r from-indigo-50 from-10% via-sky-50 via-10% to-emerald-50 to-10%"},_e=t("div",{class:"font-bold text-slate-400"},"订单金额",-1),ve={class:"text-2xl"},ue={key:1,class:"mr-[28px] p-4 pl-12 pr-12 rounded-md statistic-card bg-gradient-to-r from-indigo-50 from-10% via-sky-50 via-10% to-emerald-50 to-10%"},me=t("div",{class:"font-bold text-slate-400"},"优惠金额",-1),fe={class:"text-2xl"},ye={class:"flex mt-4"},pe={class:"mr-4"},he=t("span",null,"订单号：",-1),Ie={class:"font-bold"},ge={class:"mr-4"},xe=t("span",null,"运单号：",-1),be={class:"font-bold"},ke={class:"mr-2"},we=t("span",null,"创建时间：",-1),De={class:""},Ee={key:0,class:"flex mt-6"},Ce=t("span",null,"用户：",-1),Le={class:"font-bold"},Ve={class:"bg-cyan-50 rounded-md pl-2 pr-2 mr-4"},Be={key:0},Me={key:0,class:"mt-4 flex items-center"},Re=t("div",{class:"mr-4"},"计价规则",-1),je={key:1,class:"mt-4 flex items-center"},Fe=t("div",{class:"mr-4"},"补差详情",-1),Ne={class:"flex mr-2"},Te={class:"mt-4 flex items-center"},Pe=t("div",{class:"mr-4"},"订单状态",-1),Ue={class:"ml-4 font-bold"},qe={key:2,class:"mt-4 flex items-center"},Ae=t("div",{class:"mr-4"},"订单备注",-1),Oe={class:"ml-4 font-bold"},Se={class:"flex items-center mt-4"},ze={key:0,class:"mr-[28px] p-4 rounded-md statistic-card bg-gradient-to-r from-indigo-50 from-10% via-sky-50 via-10% to-emerald-50 to-10%"},Qe={class:"font-bold"},We={class:"flex text-xs text-current"},Xe={class:"mr-2"},Ge={class:"text-current font-bold"},He={key:1,class:"p-4 rounded-md statistic-card bg-gradient-to-r from-indigo-50 from-10% via-sky-50 via-10% to-emerald-50 to-10%"},Je={class:"font-bold"},Ke={class:"flex text-xs text-current"},Ye={class:"mr-2"},Ze={class:"text-current font-bold"},$e={class:"mt-2"},et={class:"flex items-center mb-4"},tt={class:"ml-1 p-2"},st={class:"font-bold"},ot={key:1,class:"ml-8"},at={class:"flex"},lt={class:"mr-2"},dt={class:""},rt={key:0},Dt=Q({__name:"orderadd-edit",emits:["complete"],setup(it,{expose:B,emit:nt}){let f=m(!1);const g=m(!1),e=m(),x={id:"",member_id:"",order_id:"",remark:""},p=W({...x});m(),X(()=>({member_id:[{required:!0,message:D("memberIdPlaceholder"),trigger:"blur"}],order_id:[{required:!0,message:D("orderIdPlaceholder"),trigger:"blur"}]}));const{copy:M,isSupported:R,copied:ct}=G(),j=u=>{if(console.log("ddddddd"),!R.value){V({message:"当前浏览器不支持一键复制，请手动复制",type:"warning"});return}M(u),V({message:"复制成功",type:"success"})};let h=m([]);(async()=>{h.value=await(await le("jhkd_order_status")).data.dictionary})(),H(()=>h.value,()=>{p.order_status=h.value[0].value});const F=m([]);(async()=>{F.value=await(await de({})).data})();const b=m(),N=async u=>{const n=await ie(u);b.value=n.data};return B({showDialog:f,setFormData:async(u=null)=>{if(Object.assign(p,x),g.value=!0,u){const n=await(await re(u.id)).data;e.value=n,e.value.deliveryInfo.delivery_id&&N(e.value.deliveryInfo.delivery_id),n&&Object.keys(p).forEach(y=>{n[y]!=null&&(p[y]=n[y])})}g.value=!1}}),(u,n)=>{const y=I("DocumentCopy"),k=Y,c=Z,T=I("block"),P=I("Right"),U=$,q=ee,A=te,O=se,S=oe,z=ae;return o(),v(z,{modelValue:L(f),"onUpdate:modelValue":n[1]||(n[1]=_=>K(f)?f.value=_:f=_),title:"订单详情",width:"50%",class:"diy-dialog-wrap","destroy-on-close":!0},{default:a(()=>[e.value?(o(),v(S,{key:0},{default:a(()=>[t("div",null,[t("div",ne,[e.value.orderInfo?(o(),d("div",ce,[_e,t("div",ve,s(e.value.orderInfo.order_money),1)])):l("",!0),e.value.orderInfo?(o(),d("div",ue,[me,t("div",fe,s(e.value.orderInfo.order_discount_money),1)])):l("",!0)]),t("div",ye,[t("div",pe,[he,t("span",Ie,s(e.value.orderInfo.order_id),1)]),t("div",ge,[xe,t("span",be,s(e.value.deliveryInfo.delivery_id),1),r(k,{class:"ml-2",onClick:n[0]||(n[0]=_=>j(e.value.deliveryInfo.delivery_id))},{default:a(()=>[r(y)]),_:1})]),t("div",ke,[we,t("span",De,s(e.value.orderInfo.create_time),1)])]),e.value.memberInfo?(o(),d("div",Ee,[Ce,t("span",Le,s(e.value.member_id_name),1),r(c,{class:"ml-2 mr-12"},{default:a(()=>[i(s(e.value.orderInfo.order_from),1)]),_:1}),t("span",Ve,s(e.value.deliveryInfo.goods)+"-"+s(e.value.deliveryInfo.weight)+"kg-"+s(e.value.deliveryInfo.long)+"x"+s(e.value.deliveryInfo.width)+"x"+s(e.value.deliveryInfo.height)+"cm ",1),e.value.deliveryInfo.bj_price?(o(),d("div",Be," 保价："+s(e.value.deliveryInfo.bj_price),1)):l("",!0)])):l("",!0)]),e.value.deliveryInfo.price_rule?(o(),d("div",Me,[Re,r(c,{class:"mr-2"},{default:a(()=>[i(" 首重： "+s(e.value.deliveryInfo.price_rule.start)+"kg;价格:"+s(e.value.deliveryInfo.price_rule.first)+"元 ",1)]),_:1}),r(c,{class:"mr-2"},{default:a(()=>[i(" 续重： "+s(e.value.deliveryInfo.price_rule.add)+"元/kg ",1)]),_:1})])):l("",!0),e.value.deliveryInfo?(o(),d("div",je,[Fe,r(c,{class:"mr-2"},{default:a(()=>[i(" 通知次数: "+s(e.value.deliveryInfo.notice_num)+"次 ",1)]),_:1}),r(c,{class:"mr-2"},{default:a(()=>[i(" 下单重量: "+s(e.value.deliveryInfo.weight)+"kg ",1)]),_:1}),t("div",Ne,[t("div",null," 超重: "+s(Math.ceil(e.value.deliveryRealInfo.fee_weight-e.value.deliveryInfo.weight))+"kg;￥"+s(Math.ceil(e.value.deliveryRealInfo.fee_weight-e.value.deliveryInfo.weight)*e.value.deliveryInfo.price_rule.add)+"; ",1),(o(!0),d(E,null,C(e.value.deliveryRealInfo.fee_blockList,(_,w)=>(o(),v(T,null,{default:a(()=>[t("div",null,s(_.name)+":"+s(_.fee)+"元;",1)]),_:2},1024))),256))]),r(c,{class:"mr-2",type:"error"},{default:a(()=>[i(" 需补金额： "+s(e.value.order_money)+"元 ",1)]),_:1})])):l("",!0),t("div",Te,[Pe,r(c,{class:"mr-2"},{default:a(()=>[i(s(e.value.orderInfo.order_status_arr.name),1)]),_:1}),e.value.orderInfo.is_send==1?(o(),v(c,{key:0},{default:a(()=>[i(" 已发单 ")]),_:1})):l("",!0),e.value.orderInfo.is_send==0?(o(),v(c,{key:1,type:"info"},{default:a(()=>[i(" 未发单 ")]),_:1})):l("",!0),t("span",Ue,s(e.value.orderInfo.close_reason),1)]),e.value.remark?(o(),d("div",qe,[Ae,t("span",Oe,s(e.value.remark),1)])):l("",!0),t("div",Se,[e.value.deliveryInfo?(o(),d("div",ze,[t("div",Qe,s(e.value.deliveryInfo.start_address.address),1),t("div",null,s(e.value.deliveryInfo.start_address.full_address),1),t("div",We,[t("div",Xe,s(e.value.deliveryInfo.start_address.name),1),t("div",Ge,s(e.value.deliveryInfo.start_address.mobile),1)])])):l("",!0),r(k,{class:"mr-[28px]",size:"28"},{default:a(()=>[r(P)]),_:1}),e.value.deliveryInfo.end_address?(o(),d("div",He,[t("div",Je,s(e.value.deliveryInfo.end_address.address),1),t("div",null,s(e.value.deliveryInfo.end_address.full_address),1),t("div",Ke,[t("div",Ye,s(e.value.deliveryInfo.end_address.name),1),t("div",Ze,s(e.value.deliveryInfo.end_address.mobile),1)])])):l("",!0)]),e.value.deliveryInfo?(o(),v(U,{key:3,class:"mt-4","content-position":"left"},{default:a(()=>[i("轨迹跟踪")]),_:1})):l("",!0),t("div",$e,[t("div",et,[e.value&&e.value.deliveryInfo.delivery_arry.logo?(o(),v(q,{key:0,src:L(J)(e.value.deliveryInfo.delivery_arry.logo)},null,8,["src"])):l("",!0),t("div",tt,[t("div",null,s(e.value.deliveryInfo.delivery_arry.name),1),t("div",st,s(e.value.deliveryInfo.delivery_id),1)]),e.value.deliveryInfo.courier_context?(o(),d("div",ot,[t("div",at,[t("div",lt," 揽件员:"+s(e.value.deliveryInfo.courier_context.courierName),1),t("div",dt," 联系电话:"+s(e.value.deliveryInfo.courier_context.courierPhone),1)]),e.value.deliveryInfo.courier_context.pickUpCode?(o(),d("div",rt," 取件码:"+s(e.value.deliveryInfo.courier_context.pickUpCode),1)):l("",!0)])):l("",!0),r(c,{class:"ml-8 font-bold"},{default:a(()=>[i(s(e.value.deliveryInfo.order_status_desc?e.value.deliveryInfo.order_status_desc:"未取件"),1)]),_:1})]),r(O,null,{default:a(()=>[(o(!0),d(E,null,C(b.value,(_,w)=>(o(),v(A,{key:w,timestamp:_.time},{default:a(()=>[i(s(_.desc),1)]),_:2},1032,["timestamp"]))),128))]),_:1})])]),_:1})):l("",!0)]),_:1},8,["modelValue"])}}});export{Dt as _};
