const e="是否启用",t="支付类型",c="微信支付",a="支付宝支付",o="支付方式描述",l="微信支付，用户通过扫描二维码、微信内打开商品页面购买等多种方式调起微信支付模块完成支付。",n="支付宝网站(www.alipay.com) 是国内先进的网上支付平台。",s="设置",i="微信支付",p="支付宝支付",r="线下支付",h="商户号",P="请输入商户号",d="微信支付商户号（MCHID）",y="APIv3密钥",m="请输入APIv3密钥",C="微信支付商户APIv3密钥（paySignKey）",u="商户私钥",f="请上传商户私钥",T="微信支付API证书（apiclient_key.pem）",D="商户公钥",I="请上传商户公钥",b="微信支付API证书（apiclient_cert.pem）",S="支付宝应用ID",g="请输入支付宝应用ID",w="应用私钥",N="请输入应用私钥",A="应用公钥",k="请上传应用公钥",v="支付宝公钥",K="请上传支付宝公钥",B="支付宝根证书",R="请上传支付宝根证书",W="支付宝分配给开发者的应用ID",M="上传appCertPublicKey文件",j="上传alipayCertPublicKey文件",G="上传alipayRootCert文件",O="支付方式",H="配置信息",_="设置默认支付",E="设置默认",F="请选择模板",x="是否启用",J="开启状态",q="请先配置该支付方式",z="请先开启该支付方式",L="点击配置",Q="设置支付配置",U="已开启",V="未开启",X="取消",Y="收款账户名称",Z="收款银行",$="收款账号",ee="转账说明",te="请输入收款账户名称",ce="请输入收款银行",ae="请输入收款账号",oe="请输入转账说明",le="JSAPI支付授权目录",ne="需在微信商户号>产品中心>开发配置>支付配置 支付授权目录中添加该链接",se="H5支付域名",ie="需在微信商户号>产品中心>开发配置>支付配置 H5支付域名中添加该域名",pe="Native支付回调链接",re="需在微信商户号>产品中心>开发配置>支付配置 Native支付回调链接中添加该链接",he="微信支付公钥",Pe="微信支付公钥ID",de="找朋友帮忙付",ye="帮付说明",me="帮付说明标题",Ce="请输入帮付说明标题",ue="说明内容",fe="订单信息清单",Te="开启后，帮付人可以看到订单信息清单",De="支付方式名称",Ie="请输入支付方式名称",be="请输入说明内容",Se="帮付页面名称",ge="请输入帮付页面名称",we="帮付按钮名称",Ne="请输入帮付按钮名称",Ae="发起帮付留言",ke="请输入留言备注",ve="默认分享图片（公众号）",Ke="默认分享图片（小程序）",Be={status:e,name:t,wechatpay:c,alipay:a,paydesc:o,wechatpayDesc:l,alipayDesc:n,config:s,updateWechat:i,updateAlipay:p,updateOfflinepay:r,mchId:h,mchIdPlaceholder:P,mchIdTips:d,mchSecretKey:y,mchSecretKeyPlaceholder:m,mchSecretKeyTips:C,mchSecretCert:u,mchSecretCertPlaceholder:f,mchSecretCertTips:T,mchPublicCertPath:D,mchPublicCertPathPlaceholder:I,mchPublicCertPathTips:b,appId:S,appIdPlaceholder:g,appSecretCert:w,appSecretCertPlaceholder:N,appPublicCertPath:A,appPublicCertPathPlaceholder:k,alipayPublicCertPath:v,alipayPublicCertPathPlaceholder:K,alipayRootCertPath:B,alipayRootCertPathPlaceholder:R,appIdTips:W,appPublicCertPathTips:M,alipayPublicCertPathTips:j,alipayRootCertPathTips:G,payType:O,templateName:H,settingDefaultPay:_,settingDefault:E,defaultTamplate:F,isEnable:x,onState:J,configurePaymentMethod:q,enablePaymentMode:z,clickConfigure:L,setConfig:Q,open:U,notOpen:V,cancel:X,collectionName:Y,collectionBank:Z,collectionAccount:$,collectionDesc:ee,collectionNamePlaceholder:te,collectionBankPlaceholder:ce,collectionAccountPlaceholder:ae,collectionDescPlaceholder:oe,jsapiDir:le,jsapiDirTips:ne,h5Domain:se,h5DomainTips:ie,nativeDomain:pe,nativeDomainTips:re,wechatpayPublicCert:he,wechatpayPublicCertId:Pe,updateFriendsPay:de,friendsPaySwitch:ye,friendsPayTitle:me,friendsPayTitlePlaceholder:Ce,desContent:ue,friendsPayGoodsSwitch:fe,friendsPayGoodsSwitchTips:Te,friendsPayName:De,friendsPayNamePlaceholder:Ie,desContentPlaceholder:be,helpName:Se,helpNamePlaceholder:ge,helpBtn:we,helpBtnPlaceholder:Ne,remark:Ae,remarkPlaceholder:ke,payWechatImage:ve,payWeappImage:Ke};export{a as alipay,n as alipayDesc,v as alipayPublicCertPath,K as alipayPublicCertPathPlaceholder,j as alipayPublicCertPathTips,B as alipayRootCertPath,R as alipayRootCertPathPlaceholder,G as alipayRootCertPathTips,S as appId,g as appIdPlaceholder,W as appIdTips,A as appPublicCertPath,k as appPublicCertPathPlaceholder,M as appPublicCertPathTips,w as appSecretCert,N as appSecretCertPlaceholder,X as cancel,L as clickConfigure,$ as collectionAccount,ae as collectionAccountPlaceholder,Z as collectionBank,ce as collectionBankPlaceholder,ee as collectionDesc,oe as collectionDescPlaceholder,Y as collectionName,te as collectionNamePlaceholder,s as config,q as configurePaymentMethod,Be as default,F as defaultTamplate,ue as desContent,be as desContentPlaceholder,z as enablePaymentMode,fe as friendsPayGoodsSwitch,Te as friendsPayGoodsSwitchTips,De as friendsPayName,Ie as friendsPayNamePlaceholder,ye as friendsPaySwitch,me as friendsPayTitle,Ce as friendsPayTitlePlaceholder,se as h5Domain,ie as h5DomainTips,we as helpBtn,Ne as helpBtnPlaceholder,Se as helpName,ge as helpNamePlaceholder,x as isEnable,le as jsapiDir,ne as jsapiDirTips,h as mchId,P as mchIdPlaceholder,d as mchIdTips,D as mchPublicCertPath,I as mchPublicCertPathPlaceholder,b as mchPublicCertPathTips,u as mchSecretCert,f as mchSecretCertPlaceholder,T as mchSecretCertTips,y as mchSecretKey,m as mchSecretKeyPlaceholder,C as mchSecretKeyTips,t as name,pe as nativeDomain,re as nativeDomainTips,V as notOpen,J as onState,U as open,O as payType,Ke as payWeappImage,ve as payWechatImage,o as paydesc,Ae as remark,ke as remarkPlaceholder,Q as setConfig,E as settingDefault,_ as settingDefaultPay,e as status,H as templateName,p as updateAlipay,de as updateFriendsPay,r as updateOfflinepay,i as updateWechat,c as wechatpay,l as wechatpayDesc,he as wechatpayPublicCert,Pe as wechatpayPublicCertId};
