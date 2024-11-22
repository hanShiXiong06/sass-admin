import{O as s}from"./index-99f00cf3.js";function t(e){return s.get("phone_shop/goods",{params:e})}function r(e){return s.post("phone_shop/goods",e,{showErrorMessage:!0,showSuccessMessage:!0})}function u(e){return s.put(`phone_shop/goods/${e.goods_id}`,e,{showErrorMessage:!0,showSuccessMessage:!0})}function n(e){return s.get("phone_shop/goods/init",{params:e})}function a(e){return s.post("phone_shop/goods/virtual",e,{showErrorMessage:!0,showSuccessMessage:!0})}function g(e){return s.put(`phone_shop/goods/virtual/${e.goods_id}`,e,{showErrorMessage:!0,showSuccessMessage:!0})}function h(e){return s.get("phone_shop/goods/virtual/init",{params:e})}function p(e){return s.put("phone_shop/goods/delete",e,{showErrorMessage:!0,showSuccessMessage:!0})}function c(e){return s.get("phone_shop/goods/recycle",{params:e})}function d(e){return s.put("phone_shop/goods/recycle",e,{showErrorMessage:!0,showSuccessMessage:!0})}function i(e){return s.put("phone_shop/goods/sort",e,{showSuccessMessage:!0})}function l(e){return s.put("phone_shop/goods/status",e,{showSuccessMessage:!0})}function f(e){return s.put(`phone_shop/goods/copy/${e.goods_id}`,e,{showSuccessMessage:!0})}function _(e){return s.get("phone_shop/goods/select",{params:e})}function M(e){return s.get("phone_shop/goods/sku",{params:e})}function w(e){return s.get("phone_shop/goods/active/count",{params:e})}function S(e){return s.put("phone_shop/goods/sku/stock",e,{showSuccessMessage:!0})}function b(e){return s.put("phone_shop/goods/sku/price",e,{showSuccessMessage:!0})}function E(e){return s.put("phone_shop/goods/sku/member_price",e,{showSuccessMessage:!0})}function v(){return s.get("phone_shop/goods/type")}function y(e){return s.get("phone_shop/goods/label",{params:e})}function L(e){return s.get("phone_shop/goods/label/list",{params:e})}function G(e){return s.get(`phone_shop/goods/label/${e}`)}function $(e){return s.post("phone_shop/goods/label",e,{showErrorMessage:!0,showSuccessMessage:!0})}function C(e){return s.put(`phone_shop/goods/label/${e.label_id}`,e,{showErrorMessage:!0,showSuccessMessage:!0})}function P(e){return s.delete(`phone_shop/goods/label/${e}`,{showErrorMessage:!0,showSuccessMessage:!0})}function A(e){return s.get("phone_shop/goods/label/group/list",{params:e})}function k(e){return s.get(`phone_shop/goods/label/group/${e}`)}function I(e){return s.post("phone_shop/goods/label/group",e,{showErrorMessage:!0,showSuccessMessage:!0})}function B(e){return s.put(`phone_shop/goods/label/group/${e.group_id}`,e,{showErrorMessage:!0,showSuccessMessage:!0})}function V(e){return s.put("phone_shop/goods/label/status",e,{showSuccessMessage:!0})}function T(e){return s.delete(`phone_shop/goods/label/group/${e}`,{showErrorMessage:!0,showSuccessMessage:!0})}function j(e){return s.put("phone_shop/goods/label/sort",e,{showSuccessMessage:!0})}function m(e){return s.get("phone_shop/goods/brand",{params:e})}function q(e){return s.get("phone_shop/goods/label/group",{params:e})}function x(e){return s.put("phone_shop/goods/label/group/sort",e,{showSuccessMessage:!0})}function O(e){return s.get("phone_shop/goods/brand/list",{params:e})}function R(e){return s.get(`phone_shop/goods/brand/${e}`)}function z(e){return s.post("phone_shop/goods/brand",e,{showErrorMessage:!0,showSuccessMessage:!0})}function D(e){return s.put(`phone_shop/goods/brand/${e.brand_id}`,e,{showErrorMessage:!0,showSuccessMessage:!0})}function F(e){return s.put("phone_shop/goods/brand/sort",e,{showSuccessMessage:!0})}function H(e){return s.delete(`phone_shop/goods/brand/${e}`,{showErrorMessage:!0,showSuccessMessage:!0})}function J(e){return s.get("phone_shop/goods/service",{params:e})}function K(e){return s.get("phone_shop/goods/service/list",{params:e})}function N(e){return s.get(`phone_shop/goods/service/${e}`)}function Q(e){return s.post("phone_shop/goods/service",e,{showErrorMessage:!0,showSuccessMessage:!0})}function U(e){return s.put(`phone_shop/goods/service/${e.service_id}`,e,{showErrorMessage:!0,showSuccessMessage:!0})}function W(e){return s.delete(`phone_shop/goods/service/${e}`,{showErrorMessage:!0,showSuccessMessage:!0})}function X(e){return s.get("phone_shop/goods/tree",{params:e})}function Y(e){return s.get("phone_shop/goods/category",{params:e})}function Z(e){return s.get(`phone_shop/goods/category/${e}`)}function ee(e){return s.post("phone_shop/goods/category",e,{showErrorMessage:!0,showSuccessMessage:!0})}function se(e){return s.put(`phone_shop/goods/category/${e.category_id}`,e,{showErrorMessage:!0,showSuccessMessage:!0})}function oe(e){return s.delete(`phone_shop/goods/category/${e}`,{showErrorMessage:!0,showSuccessMessage:!0})}function te(e){return s.post("phone_shop/goods/category/update",e,{showErrorMessage:!0,showSuccessMessage:!0})}function re(e){return s.post("phone_shop/goods/category/config",e,{showErrorMessage:!0,showSuccessMessage:!0})}function ue(){return s.get("phone_shop/goods/category/config")}function ne(e){return s.get("shop_supplier/supplier/list",{params:e})}function ae(e){return s.get("phone_shop/goods/evaluate",{params:e})}function ge(e){return s.post("phone_shop/goods/evaluate",e,{showErrorMessage:!0,showSuccessMessage:!0})}function he(e){return s.delete(`phone_shop/goods/evaluate/${e}`,{showErrorMessage:!0,showSuccessMessage:!0})}function pe(e){return s.put(`phone_shop/goods/evaluate/adopt/${e}`,{showErrorMessage:!0,showSuccessMessage:!0})}function ce(e){return s.put(`phone_shop/goods/evaluate/refuse/${e}`,{showErrorMessage:!0,showSuccessMessage:!0})}function de(e){return s.put(`phone_shop/goods/evaluate/reply/${e.evaluate_id}`,e,{showErrorMessage:!0,showSuccessMessage:!0})}function ie(e){return s.put(`phone_shop/goods/evaluate/topping/${e}`,{showErrorMessage:!0,showSuccessMessage:!0})}function le(e){return s.put(`phone_shop/goods/evaluate/cancel_topping/${e}`,{showErrorMessage:!0,showSuccessMessage:!0})}function fe(e){return s.get("phone_shop/goods/attr",{params:e})}function _e(e){return s.get("phone_shop/goods/attr/list",{params:e})}function Me(e){return s.get(`phone_shop/goods/attr/${e}`)}function we(e){return s.post("phone_shop/goods/attr",e,{showErrorMessage:!0,showSuccessMessage:!0})}function Se(e){return s.put(`phone_shop/goods/attr/${e.attr_id}`,e,{showErrorMessage:!0,showSuccessMessage:!0})}function be(e){return s.delete(`phone_shop/goods/attr/${e}`,{showErrorMessage:!0,showSuccessMessage:!0})}function Ee(e){return s.put("phone_shop/goods/attr/sort",e,{showSuccessMessage:!0})}function ve(e){return s.put("phone_shop/goods/attr/attr_value",e,{showSuccessMessage:!0})}function ye(){return s.get("phone_shop/goods/sync_goods_list",{showErrorMessage:!0,showSuccessMessage:!0})}export{V as $,M as A,w as B,b as C,S as D,C as E,$ as F,G,B as H,I,k as J,U as K,Q as L,N as M,ae as N,he as O,pe as P,ce as Q,ie as R,le as S,de as T,q as U,T as V,x as W,y as X,A as Y,P as Z,j as _,Y as a,O as a0,L as a1,l as a2,p as a3,i as a4,t as a5,f as a6,ye as a7,r as a8,u as a9,n as aa,K as ab,ne as ac,_e as ad,d as ae,c as af,J as ag,W as ah,h as ai,a as aj,g as ak,v as b,_ as c,fe as d,Se as e,we as f,X as g,be as h,Me as i,ve as j,m as k,H as l,Ee as m,F as n,D as o,z as p,R as q,se as r,oe as s,ee as t,te as u,Z as v,ue as w,re as x,ge as y,E as z};
