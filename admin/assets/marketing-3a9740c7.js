import{O as t}from"./index-0e396751.js";function s(e){return t.get("phone_shop/marketing",{params:e})}function n(e){return t.get("phone_shop/goods/coupon/init",{params:e})}function c(e){return t.post("phone_shop/goods/coupon",e,{showErrorMessage:!0,showSuccessMessage:!0})}function u(e){return t.get("phone_shop/goods/coupon",{params:e})}function i(e){return t.get("phone_shop/goods/coupon/records",{params:e})}function r(e){return t.get(`phone_shop/goods/coupon/detail/${e}`)}function a(e){return t.put(`phone_shop/goods/coupon/edit/${e.id}`,e,{showErrorMessage:!0,showSuccessMessage:!0})}function g(e){return t.delete(`phone_shop/goods/coupon/${e}`,{showSuccessMessage:!0})}function h(e){return t.put(`phone_shop/goods/coupon/invalid/${e}`,{showSuccessMessage:!0})}function p(e){return t.get("phone_shop/goods/coupon/selected",{params:e})}function d(e){return t.get("phone_shop/active/discount",{params:e})}function v(){return t.get("phone_shop/active/status")}function f(e){return t.get(`phone_shop/active/discount/${e}`)}function _(e){return t.post("phone_shop/active/discount",e,{showErrorMessage:!0,showSuccessMessage:!0})}function w(e){return t.put(`phone_shop/active/discount/${e.active_id}`,e,{showErrorMessage:!0,showSuccessMessage:!0})}function M(e){return t.put(`phone_shop/active/discount/close/${e}`,{},{showErrorMessage:!0,showSuccessMessage:!0})}function A(e){return t.delete(`phone_shop/active/discount/${e}`,{showSuccessMessage:!0})}function S(e){return t.get(`phone_shop/active/discount/goods/${e.active_id}`,{params:e})}function l(e){return t.get(`phone_shop/active/discount/order/${e.active_id}`,{params:e})}function x(e){return t.get(`phone_shop/active/discount/member/${e.active_id}`,{params:e})}function E(){return t.get("phone_shop/active/discount/config")}function $(e){return t.put("phone_shop/active/discount/config",e,{showErrorMessage:!0,showSuccessMessage:!0})}function D(e){return t.get("phone_shop/active/exchange",{params:e})}function C(e){return t.get(`phone_shop/active/exchange/${e}`)}function L(e){return t.post("phone_shop/active/exchange",e,{showErrorMessage:!0,showSuccessMessage:!0})}function P(e){return t.put(`phone_shop/active/exchange/${e.id}`,e,{showErrorMessage:!0,showSuccessMessage:!0})}function k(e){return t.put(`phone_shop/active/exchange/status/${e.id}`,e,{showErrorMessage:!0,showSuccessMessage:!0})}function m(e){return t.delete(`phone_shop/active/exchange/${e}`,{showSuccessMessage:!0})}function G(){return t.get("phone_shop/active/exchange/status")}function I(e){return t.get("shop/active/newcomer/goods/select",{params:e})}function b(e){return t.get("shop/active/newcomer/goods/selectgoodssku",{params:e})}export{P as A,k as B,m as C,s as D,p as E,D as a,G as b,I as c,b as d,n as e,c as f,u as g,i as h,r as i,a as j,g as k,h as l,_ as m,E as n,$ as o,f as p,x as q,S as r,l as s,w as t,d as u,v,M as w,A as x,L as y,C as z};
