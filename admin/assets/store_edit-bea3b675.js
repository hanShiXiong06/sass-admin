import{d as H,y as J,f as Y,r as D,q as F,m as Z,s as l,aJ as W,ct as X,h as p,c as V,e as r,w as d,u as s,bU as ee,a as u,t as k,F as P,T as L,v as T,i as C,cY as te,cU as U,cZ as ae,Q as oe,c_ as le,U as re,aQ as se,a7 as de,K as ie,L as ne,ab as me,aC as ce,E as ue,M as pe,p as _e,g as ge}from"./index-0e396751.js";/* empty css                *//* empty css                  *//* empty css                 *//* empty css               *//* empty css                  *//* empty css                  *//* empty css                     *//* empty css                  */import fe from"./index-11d71036.js";import"./el-form-item-4ed993c7.js";/* empty css                *//* empty css                   *//* empty css                       */import{t as ve,u as be,v as he}from"./delivery-3c8c2993.js";import{_ as ye}from"./_plugin-vue_export-helper-c27b6911.js";/* empty css                        */import"./index.vue_vue_type_style_index_0_lang-d82568af.js";/* empty css                  *//* empty css                   */import"./attachment-c52133c7.js";/* empty css                   */import"./index.vue_vue_type_script_setup_true_lang-34f8a01a.js";/* empty css                      *//* empty css                    */import"./el-tooltip-4ed993c7.js";/* empty css                 *//* empty css               *//* empty css               *//* empty css                  *//* empty css                    *//* empty css                    */import"./el-dropdown-item-4ed993c7.js";import"./index.vue_vue_type_script_setup_true_lang-077a27b1.js";/* empty css                   */import"./index.vue_vue_type_script_setup_true_lang-5014406f.js";import"./sortable.esm-be94e56d.js";const we=b=>(_e("data-v-373f411e"),b=b(),ge(),b),Ve={class:"main-container"},ke={class:"text-[12px] text-[#999]"},xe=we(()=>u("div",{class:"mt-4"},[u("div",{id:"TxMap",class:"map-item w-[800px] h-[500px]"})],-1)),Me={class:"fixed-footer-wrap"},Pe={class:"fixed-footer"},Le=H({__name:"store_edit",setup(b){const I=J(),q=Y(),h=parseInt(I.query.id),y=D(!1),A={store_id:0,store_name:"",store_desc:"",store_logo:"",store_mobile:"",province_id:0,province_name:"",city_id:0,city_name:"",district_id:0,district_name:"",address:"",full_address:"",longitude:"",latitude:"",trade_time:""},e=F({...A});h&&(async(a=0)=>{Object.assign(e,A);const t=await(await ve(a)).data;Object.keys(e).forEach(i=>{t[i]!=null&&(e[i]=t[i])})})(h);const E=D(),B=Z(()=>({store_name:[{required:!0,message:l("storeNamePlaceholder"),trigger:"blur"}],store_logo:[{required:!0,message:l("storeLogoPlaceholder"),trigger:"blur"}],store_mobile:[{required:!0,message:l("storeMobilePlaceholder"),trigger:"blur"}],province_id:[{required:!0,message:l("provinceIdPlaceholder"),trigger:"blur"}],city_id:[{required:!0,message:l("cityIdPlaceholder"),trigger:"blur"}],district_id:[{required:!0,message:l("districtIdPlaceholder"),trigger:"blur"}],address_area:[{required:!0,validator:N,trigger:"blur"}],address:[{required:!0,message:l("storeAddressDetailPlaceholder"),trigger:"blur"}],trade_time:[{required:!0,message:l("tradeTimePlaceholder"),trigger:"blur"}]})),N=(a,t,i)=>{(e.province_name==""||e.city_name==""||e.district_name=="")&&i(new Error(l("storeAddressPlaceholder"))),i()},j=async a=>{y.value||!a||await a.validate(async t=>{t&&(y.value=!0,(h?be:he)(e).then(m=>{y.value=!1,q.push("/phone_shop/order/delivery/store")}).catch(()=>{y.value=!1}))})},_=F({province:[],city:[],district:[]});(()=>{te(1).then(a=>{_.province=a.data})})();const O=a=>{Object.keys(a).length==0?a.id=e.province_id:(e.province_id=a.id,e.province_name=a.name),U(a.id).then(t=>{_.city=t.data})},R=a=>{Object.keys(a).length==0?a.id=e.city_id:(e.city_id=a.id,e.city_name=a.name),U(a.id).then(t=>{_.district=t.data})},G=a=>{e.district_id=a.id,e.district_name=a.name},z=()=>{e.province_id&&e.city_id&&e.district_id&&e.address&&(e.full_address=e.province_name+e.city_name+e.district_name+e.address,ae({address:e.full_address}).then(a=>{e.latitude=a.data.result.location.lat,e.longitude=a.data.result.location.lng}))};let f;const K=()=>{let a=e.latitude,t=e.longitude;e.latitude==0&&(a="39.90469"),e.longitude==0&&(t="116.40717");const i=new window.TMap.LatLng(a,t);f=new window.TMap.Map("TxMap",{center:i,zoom:17,viewMode:"2D",showControl:!0}),f.on("click",m=>{const c={lat:m.latLng.getLat().toFixed(6),lng:m.latLng.getLng().toFixed(6)};Q(c.lat,c.lng,1),n.updateGeometries({id:"shop",position:m.latLng})});const n=new window.TMap.MultiMarker({id:"marker-layer",map:f,minimumClusterSize:1});n.updateGeometries({id:"shop",position:i}),f.on("idle",()=>{oe(()=>e.latitude,(m,c)=>{const w=new window.TMap.LatLng(e.latitude,e.longitude);f.panTo(w,1),n.updateGeometries({id:"shop",position:w})})})};W(()=>{const a=document.createElement("script");X().then(t=>{a.type="text/javascript",a.src="https://map.qq.com/api/gljs?v=1.exp&key="+t.data.key,document.body.appendChild(a)}),a.onload=()=>{setTimeout(()=>{K()},500)}});const Q=(a,t,i)=>{le({location:a+","+t}).then(n=>{n.data.result?(e.province_name=n.data.result.address_component.province,e.city_name=n.data.result.address_component.city,e.district_name=n.data.result.address_component.district,i==1&&(e.address=n.data.result.formatted_addresses.recommend,e.full_address=e.province_name+e.city_name+e.district_name+e.address,e.latitude=a,e.longitude=t)):re({type:"warning",message:n.data.message})})},S=()=>{q.push("/phone_shop/order/delivery/store")};return(a,t)=>{const i=se,n=de,m=ie,c=ne,w=fe,g=me,x=ce,M=ue,$=pe;return p(),V("div",Ve,[r(n,{class:"card !border-none mb-[15px]",shadow:"never"},{default:d(()=>[r(i,{content:s(h)?s(l)("updateStore"):s(l)("addStore"),icon:a.ArrowLeft,onBack:S},null,8,["content","icon"])]),_:1}),r(n,{class:"box-card !border-none",shadow:"never"},{default:d(()=>[r($,{model:e,"label-width":"140px",ref_key:"formRef",ref:E,rules:s(B),class:"page-form"},{default:d(()=>[r(c,{label:s(l)("storeName"),prop:"store_name"},{default:d(()=>[r(m,{modelValue:e.store_name,"onUpdate:modelValue":t[0]||(t[0]=o=>e.store_name=o),modelModifiers:{trim:!0},clearable:"",placeholder:s(l)("storeNamePlaceholder"),class:"input-width"},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),r(c,{label:s(l)("storeDesc")},{default:d(()=>[r(m,{modelValue:e.store_desc,"onUpdate:modelValue":t[1]||(t[1]=o=>e.store_desc=o),modelModifiers:{trim:!0},type:"textarea",rows:"4",clearable:"",placeholder:s(l)("storeDescPlaceholder"),class:"input-width"},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),r(c,{label:s(l)("storeLogo")},{default:d(()=>[r(w,{modelValue:e.store_logo,"onUpdate:modelValue":t[2]||(t[2]=o=>e.store_logo=o)},null,8,["modelValue"])]),_:1},8,["label"]),r(c,{label:s(l)("storeMobile"),prop:"store_mobile"},{default:d(()=>[r(m,{modelValue:e.store_mobile,"onUpdate:modelValue":t[3]||(t[3]=o=>e.store_mobile=o),modelModifiers:{trim:!0},clearable:"",placeholder:s(l)("storeMobilePlaceholder"),class:"input-width",onKeyup:t[4]||(t[4]=o=>s(ee)(o)),onBlur:t[5]||(t[5]=o=>e.store_mobile=o.target.value)},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),r(c,{label:s(l)("tradeTime"),prop:"trade_time"},{default:d(()=>[u("div",null,[r(m,{modelValue:e.trade_time,"onUpdate:modelValue":t[6]||(t[6]=o=>e.trade_time=o),modelModifiers:{trim:!0},clearable:"",placeholder:s(l)("tradeTimePlaceholder"),class:"input-width"},null,8,["modelValue","placeholder"]),u("p",ke,k(s(l)("tradeTimeTips")),1)])]),_:1},8,["label"]),r(c,{label:s(l)("storeAddress"),prop:"address_area"},{default:d(()=>[r(x,{modelValue:e.province_name,"onUpdate:modelValue":t[7]||(t[7]=o=>e.province_name=o),"value-key":"id",clearable:"",class:"w-[200px]",onChange:O},{default:d(()=>[r(g,{label:s(l)("provincePlaceholder"),value:""},null,8,["label"]),(p(!0),V(P,null,L(_.province,(o,v)=>(p(),T(g,{key:v,label:o.name,value:o},null,8,["label","value"]))),128))]),_:1},8,["modelValue"]),r(x,{modelValue:e.city_name,"onUpdate:modelValue":t[8]||(t[8]=o=>e.city_name=o),"value-key":"id",clearable:"",class:"w-[200px] ml-3",onChange:R},{default:d(()=>[r(g,{label:s(l)("cityPlaceholder"),value:""},null,8,["label"]),(p(!0),V(P,null,L(_.city,(o,v)=>(p(),T(g,{key:v,label:o.name,value:o},null,8,["label","value"]))),128))]),_:1},8,["modelValue"]),r(x,{modelValue:e.district_name,"onUpdate:modelValue":t[9]||(t[9]=o=>e.district_name=o),"value-key":"id",clearable:"",class:"w-[200px] ml-3",onChange:G},{default:d(()=>[r(g,{label:s(l)("districtPlaceholder"),value:""},null,8,["label"]),(p(!0),V(P,null,L(_.district,(o,v)=>(p(),T(g,{key:v,label:o.name,value:o},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1},8,["label"]),r(c,{label:s(l)("storeAddressDetail"),prop:"address"},{default:d(()=>[u("div",null,[u("div",null,[r(m,{modelValue:e.address,"onUpdate:modelValue":t[10]||(t[10]=o=>e.address=o),modelModifiers:{trim:!0},clearable:"",placeholder:s(l)("storeAddressDetailPlaceholder"),class:"input-width"},null,8,["modelValue","placeholder"]),r(M,{class:"ml-3",onClick:z},{default:d(()=>[C(k(s(l)("search")),1)]),_:1})]),xe])]),_:1},8,["label"])]),_:1},8,["model","rules"])]),_:1}),u("div",Me,[u("div",Pe,[r(M,{type:"primary",onClick:t[11]||(t[11]=o=>j(E.value))},{default:d(()=>[C(k(s(l)("save")),1)]),_:1}),r(M,{onClick:t[12]||(t[12]=o=>S())},{default:d(()=>[C(k(s(l)("cancel")),1)]),_:1})])])])}}});const pt=ye(Le,[["__scopeId","data-v-373f411e"]]);export{pt as default};
