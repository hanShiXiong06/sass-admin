import{O as t}from"./index-0e396751.js";function r(e){return t.get("addon_develop",{params:e})}function a(){return t.get("addontype")}function d(e){return t.get(`addon_develop/${e}`)}function u(e){return t.get(`addon_develop/check/${e}`)}function s(){return t.get("addon_develop/key/blacklist")}function l(e,n){return t.post(`addon_develop/${e}`,n)}function g(e,n){return t.put(`addon_develop/${e}`,n)}function c(e){return t.delete(`addon_develop/${e}`,{showSuccessMessage:!0})}function i(e){return t.post(`addon_develop/build/${e}`)}function p(e){return t.post(`addon_develop/download/${e}`,{})}function f(e){return t.get("generator/generator",{params:e})}function v(e){return t.get(`generator/generator/${e}`)}function b(e){return t.post("generator/generator",e,{showSuccessMessage:!0})}function _(e){return t.put(`generator/generator/${e.id}`,e,{showSuccessMessage:!0})}function $(e){return t.delete(`generator/generator/${e}`,{showSuccessMessage:!0})}function m(e){return t.post("generator/download",e)}function w(e){return t.get(`generator/preview/${e}`)}function h(){return t.get("generator/table")}function A(){return t.get("sys/system")}function D(e){return t.get("generator/all_model",{params:e})}function k(e){return t.get("generator/table_column",{params:e})}function G(e){return t.get("generator/check_file",{params:e})}function T(e){return t.get("generator/model_table_column",{params:e})}export{a,d as b,s as c,c as d,u as e,g as f,r as g,l as h,i,p as j,h as k,b as l,D as m,k as n,T as o,v as p,_ as q,G as r,m as s,f as t,$ as u,w as v,A as w};
