var b=Object.defineProperty;var g=(t,e,s)=>e in t?b(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var i=(t,e,s)=>(g(t,typeof e!="symbol"?e+"":e,s),s);import{b2 as h,G as n,b9 as c,U as o,q as a,bt as u,j as d}from"./index-904cb7a2.js";class l{constructor(){i(this,"instance");this.instance=h.create({baseURL:"/adminapi/".substr(-1)=="/"?"/adminapi/":"/adminapi//",timeout:3e6,headers:{"Content-Type":"application/json",lang:n.get("lang")??"zh-cn"}}),this.instance.interceptors.request.use(e=>(c()&&(e.headers.token=c(),e.headers["site-id"]=n.get("siteId")||0),e),e=>Promise.reject(e)),this.instance.interceptors.response.use(e=>{if(e.request.responseType!="blob"){const s=e.data;return s.code!=1?(this.handleAuthError(s.code),s.code!=401&&e.config.showErrorMessage!==!1&&o({message:s.msg,type:"error",dangerouslyUseHTMLString:!0,duration:5e3}),Promise.reject(new Error(s.msg||"Error"))):(e.config.showSuccessMessage&&o({message:s.msg,type:"success"}),s)}return e.data},e=>(this.handleNetworkError(e),Promise.reject(e)))}get(e,s){return this.instance.get(e,s)}post(e,s,r){return this.instance.post(e,s,r)}put(e,s,r){return this.instance.put(e,s,r)}delete(e,s){return this.instance.delete(e,s)}handleNetworkError(e){let s="";if(e.response&&e.response.status)switch(e.response.status){case 400:s=a("axios.400");break;case 401:s=a("axios.401");break;case 403:s=a("axios.403");break;case 404:s=(u(e.response.config.baseURL)?e.response.config.baseURL:`${location.origin}${e.response.config.baseURL}`)+a("axios.baseUrlError");break;case 405:s=a("axios.405");break;case 408:s=a("axios.408");break;case 409:s=a("axios.409");break;case 500:s=a("axios.500");break;case 501:s=a("axios.501");break;case 502:s=a("axios.502");break;case 503:s=a("axios.503");break;case 504:s=a("axios.504");break;case 505:s=a("axios.505");break}e.message.includes("timeout")&&(s=a("axios.timeout")),e.code=="ERR_NETWORK"&&(s=(u(e.config.baseURL)?e.config.baseURL:`${location.origin}${e.config.baseURL}`)+a("axios.baseUrlError")),s&&o({dangerouslyUseHTMLString:!0,duration:5e3,message:s,type:"error"})}handleAuthError(e){switch(e){case 401:d().logout();break}}}const p=new l;function x(){return p.get("tk_yht/checkshop")}export{x as c,p as r};
