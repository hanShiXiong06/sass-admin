import{r as ref,a5 as ElMessageBox,U as ElMessage}from"./index-99f00cf3.js";const MainJS="CLodopfuncs.js",URL_WS1=ref("ws://localhost:{port}/"+MainJS),URL_WS2=ref("ws://localhost:{port}/"+MainJS),URL_HTTP1=ref("http://localhost:{port}/"+MainJS),URL_HTTP2=ref("http://localhost:{port}/"+MainJS),URL_HTTP3=ref("https://localhost.lodop.net:{port}/"+MainJS),CreatedOKLodopObject=ref(null),CLodopIsLocal=ref(null),LoadJsState=ref(""),initPort=t=>{t||(t={server_port1:8e3,server_port2:18e3,https_port:8443}),URL_WS1.value=URL_WS1.value.replace("{port}",t.server_port1),URL_WS2.value=URL_WS2.value.replace("{port}",t.server_port2),URL_HTTP1.value=URL_HTTP1.value.replace("{port}",t.server_port1),URL_HTTP2.value=URL_HTTP2.value.replace("{port}",t.server_port2),URL_HTTP3.value=URL_HTTP2.value.replace("{port}",t.https_port)},needCLodop=()=>{try{let t=navigator.userAgent;if(t.match(/Windows\sPhone/i)||t.match(/iPhone|iPod|iPad/i)||t.match(/Android/i)||t.match(/Edge\D?\d+/i))return!0;let a=t.match(/Trident\D?\d+/i),l=t.match(/MSIE\D?\d+/i),r=t.match(/OPR\D?\d+/i),n=t.match(/Firefox\D?\d+/i),d=t.match(/x64/i);if(!a&&!l&&d)return!0;if(n){if(n=n[0].match(/\d+/),n[0]>=41||d)return!0}else if(r){if(r=r[0].match(/\d+/),r[0]>=32)return!0}else if(!a&&!l){let i=t.match(/Chrome\D?\d+/i);if(i&&(i=i[0].match(/\d+/),i[0]>=41))return!0}return!1}catch{return!0}};function checkOrTryHttp(){if(window.getCLodop)return LoadJsState.value="complete",!0;if(LoadJsState.value=="loadingB"||LoadJsState.value=="complete")return;LoadJsState.value="loadingB";let t=document.head||document.getElementsByTagName("head")[0]||document.documentElement,a=document.createElement("script"),l=document.createElement("script"),r=document.createElement("script");a.src=URL_HTTP1.value,l.src=URL_HTTP2.value,r.src=URL_HTTP3.value,a.onload=l.onload=r.onload=l.onerror=r.onerror=function(){LoadJsState.value="complete"},a.onerror=function(n){window.location.protocol!=="https:"?t.insertBefore(l,t.firstChild):t.insertBefore(r,t.firstChild)},t.insertBefore(a,t.firstChild)}const loadCLodop=(paramas=null)=>{if(needCLodop()){initPort(paramas),CLodopIsLocal.value=!!(URL_WS1.value+URL_WS2.value).match(/\/\/localho|\/\/127.0.0./i),LoadJsState.value="loadingA",!window.WebSocket&&window.MozWebSocket&&(window.WebSocket=window.MozWebSocket);try{let WSK1=new WebSocket(URL_WS1.value);WSK1.onopen=function(t){setTimeout(checkOrTryHttp,200)},WSK1.onmessage=function(e){window.getCLodop||eval(e.data)},WSK1.onerror=function(e){let WSK2=new WebSocket(URL_WS2.value);WSK2.onopen=function(t){setTimeout(checkOrTryHttp,200)},WSK2.onmessage=function(e){window.getCLodop||eval(e.data)},WSK2.onerror=function(t){checkOrTryHttp()}}}catch(t){checkOrTryHttp()}}},getLodop=(t=null,a=null)=>{let l="<br>打印控件",r=l+"未安装!点击这里<a href='http://www.lodop.net/download.html' target='_blank' class='text-primary'>执行安装</a>",n=l+"需要升级!点击这里<a href='http://www.lodop.net/download.html' target='_blank' class='text-primary'>执行升级</a>",d="<br>Web打印服务CLodop未安装启动，点击这里<a href='http://www.lodop.net/download.html' target='_blank' class='text-primary'>下载执行安装</a>",i="<br>（若此前已安装过，可<a href='CLodop.protocol:setup' target='_blank' class='text-primary'>点这里直接再次启动</a>）",g="<br>Web打印服务CLodop需升级!点击这里<a href='http://www.lodop.net/download.html' target='_blank' class='text-primary'>执行升级</a>",f="<br>Web打印服务Lodop7",h="点击这里<a href='http://www.lodop.net/download.html' target='_blank' class='text-primary'>下载安装</a>(下载后解压，点击lodop文件开始执行)",m=f+"未安装启动，"+h,S=f+"需升级，"+h,p="，成功后请刷新本页面或重启浏览器。",o;try{let c=/MSIE/i.test(navigator.userAgent)||/Trident/i.test(navigator.userAgent),u=/Linux/i.test(navigator.platform)&&/x86/i.test(navigator.platform),L=/Linux/i.test(navigator.platform)&&/aarch/i.test(navigator.platform);if(needCLodop()||u||L){try{o=window.getCLodop()}catch{}if(!o&&LoadJsState.value!=="complete"){LoadJsState.value?ElMessageBox.alert("网页还没下载完毕，请稍等一下再操作","提示",{dangerouslyUseHTMLString:!0}):ElMessageBox.alert("未曾加载Lodop主JS文件，请先调用loadCLodop过程","提示",{dangerouslyUseHTMLString:!0});return}let s;if(o)(u||L)&&o.CVERSION<"7.0.7.5"?s=S:CLODOP.CVERSION<"6.5.9.8"&&(s=g),s&&ElMessageBox.alert(s+p,"提示",{dangerouslyUseHTMLString:!0});else{u||L?s=m:s=d+(CLodopIsLocal.value?i:""),ElMessageBox.alert(s+p,"提示",{dangerouslyUseHTMLString:!0});return}}else{if(t||a?c?o=t:o=a:CreatedOKLodopObject.value?o=CreatedOKLodopObject.value:(o=document.createElement("object"),o.setAttribute("width",0),o.setAttribute("height",0),o.setAttribute("style","position:absolute;left:0px;top:-100px;width:0px;height:0px;"),c?o.setAttribute("classid","clsid:2105C259-1E0C-4534-8141-A753534CB4CA"):o.setAttribute("type","application/x-print-lodop"),document.documentElement.appendChild(o),CreatedOKLodopObject.value=o),!o||!o.VERSION)return ElMessageBox.alert(r+p,"提示",{dangerouslyUseHTMLString:!0}),o;o.VERSION<"6.2.2.6"&&ElMessageBox.alert(n+p,"提示",{dangerouslyUseHTMLString:!0})}return o}catch(c){ElMessage({message:"getLodop出错:"+c,type:"error",duration:5e3})}};export{getLodop as g,loadCLodop as l};
