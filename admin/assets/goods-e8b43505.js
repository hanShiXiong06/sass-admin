import{O as s}from"./index-0e396751.js";function t(o){return s.get("o2o/goods",{params:o})}function r(o){return s.get("o2o/goods/select",{params:o})}function u(){return s.get("o2o/goods/list")}function d(o){return s.post("o2o/goods",o,{showErrorMessage:!0,showSuccessMessage:!0})}function g(o){return s.put(`o2o/goods/${o.goods_id}`,o,{showErrorMessage:!0,showSuccessMessage:!0})}function n(o){return s.get("o2o/goods/init",{params:o})}function i(o){return s.put(`o2o/goods/status/${o.goods_id}`,o,{showErrorMessage:!0,showSuccessMessage:!0})}function c(o){return s.put(`o2o/goods/sort/${o.goods_id}`,o,{showErrorMessage:!0,showSuccessMessage:!0})}function a(o){return s.delete(`o2o/goods/${o}`,{showErrorMessage:!0,showSuccessMessage:!0})}function f(o){return s.get("o2o/goods/sku",{params:o})}function h(o){return s.put("o2o/goods/member_price",o,{showSuccessMessage:!0})}export{f as a,n as b,g as c,d,h as e,t as f,r as g,a as h,i,c as j,u as k};
