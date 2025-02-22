var p=Object.defineProperty;var d=(a,e,s)=>e in a?p(a,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[e]=s;var n=(a,e,s)=>(d(a,typeof e!="symbol"?e+"":e,s),s);import{b2 as b,G as c,b9 as u,U as i,s as t,bt as g,j as h}from"./index-0e396751.js";class l{constructor(){n(this,"instance");this.instance=b.create({baseURL:"/adminapi/".substr(-1)=="/"?"/adminapi/":"/adminapi//",timeout:3e6,headers:{"Content-Type":"application/json",lang:c.get("lang")??"zh-cn"}}),this.instance.interceptors.request.use(e=>(u()&&(e.headers.token=u(),e.headers["site-id"]=c.get("siteId")||0),e),e=>Promise.reject(e)),this.instance.interceptors.response.use(e=>{if(e.request.responseType!="blob"){const s=e.data;return s.code!=1?(this.handleAuthError(s.code),s.code!=401&&e.config.showErrorMessage!==!1&&i({message:s.msg,type:"error",dangerouslyUseHTMLString:!0,duration:5e3}),Promise.reject(new Error(s.msg||"Error"))):(e.config.showSuccessMessage&&i({message:s.msg,type:"success"}),s)}return e.data},e=>(this.handleNetworkError(e),Promise.reject(e)))}get(e,s){return this.instance.get(e,s)}post(e,s,r){return this.instance.post(e,s,r)}put(e,s,r){return this.instance.put(e,s,r)}delete(e,s){return this.instance.delete(e,s)}handleNetworkError(e){let s="";if(e.response&&e.response.status)switch(e.response.status){case 400:s=t("axios.400");break;case 401:s=t("axios.401");break;case 403:s=t("axios.403");break;case 404:s=(g(e.response.config.baseURL)?e.response.config.baseURL:`${location.origin}${e.response.config.baseURL}`)+t("axios.baseUrlError");break;case 405:s=t("axios.405");break;case 408:s=t("axios.408");break;case 409:s=t("axios.409");break;case 500:s=t("axios.500");break;case 501:s=t("axios.501");break;case 502:s=t("axios.502");break;case 503:s=t("axios.503");break;case 504:s=t("axios.504");break;case 505:s=t("axios.505");break}e.message.includes("timeout")&&(s=t("axios.timeout")),e.code=="ERR_NETWORK"&&(s=(g(e.config.baseURL)?e.config.baseURL:`${location.origin}${e.config.baseURL}`)+t("axios.baseUrlError")),s&&i({dangerouslyUseHTMLString:!0,duration:5e3,message:s,type:"error"})}handleAuthError(e){switch(e){case 401:h().logout();break}}}const o=new l;function x(a){return o.post("spdr/goods/import",a)}function U(a){return o.post("spdr/goods/importadmin",a)}function R(a){return o.post("spdr/goods/export",a)}function L(){return o.get("spdr/checkshop")}function E(){return o.get("shop/goods/type")}function y(){return o.get("shop/goods/tree")}export{y as a,U as b,L as c,R as e,E as g,x as i};
