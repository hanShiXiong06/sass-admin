import{O as t}from"./index-0e396751.js";function r(e){return t.get("o2o/category/list",{params:e})}function s(){return t.get("o2o/category/tree")}function a(e){return t.get(`o2o/category/${e}`)}function g(e){return t.post("o2o/category",e,{showErrorMessage:!0,showSuccessMessage:!0})}function u(e){return t.put(`o2o/category/${e.category_id}`,e,{showErrorMessage:!0,showSuccessMessage:!0})}function c(e){return t.delete(`o2o/category/${e}`,{showErrorMessage:!0,showSuccessMessage:!0})}export{g as a,r as b,a as c,c as d,u as e,s as g};
