import{O as e}from"./index-0e396751.js";function o(r){return e.post("tk_jhkd/shop/order/cancelorder",r)}function s(r){return e.post("tk_jhkd/shop/order/preorder",r)}function n(r){return e.get("tk_jhkd/shop/order/sendaddress",r)}function d(r){return e.get("tk_jhkd/shop/order/lists",{params:r})}function p(){return e.get("shop/order/status")}function u(r){return e.put(`shop/order/close/${r}`)}function i(r){return e.get("tk_jhkd/shop/order/delivery/type",{params:r})}function a(r){return e.post("tk_jhkd/shop/order/delivery",r)}function h(r){return e.put("shop/order/shop_remark",r)}function c(r){return e.put(`shop/order/finish/${r}`)}function f(){return e.get("shop/order/pay/type")}function k(){return e.get("shop/order/from")}export{i as a,p as b,f as c,k as d,o as e,d as f,n as g,u as h,c as i,a as o,s as p,h as s};
