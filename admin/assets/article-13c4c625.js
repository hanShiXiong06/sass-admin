import{O as t}from"./index-99f00cf3.js";function c(e){return t.get("cms/article",{params:e})}function s(e){return t.get(`cms/article/${e}`)}function o(e){return t.post("cms/article",e,{showSuccessMessage:!0})}function u(e){return t.put(`cms/article/${e.id}`,e,{showSuccessMessage:!0})}function a(e){return t.delete(`cms/article/${e}`,{showSuccessMessage:!0})}function i(e){return t.get("cms/category",{params:e})}function n(e){return t.get("cms/category/all",e)}function g(e){return t.get(`cms/category/${e}`)}function l(e){return t.post("cms/category",e,{showSuccessMessage:!0})}function f(e){return t.put(`cms/category/${e.category_id}`,e,{showSuccessMessage:!0})}function d(e){return t.delete(`cms/category/${e}`,{showSuccessMessage:!0})}export{i as a,l as b,g as c,d,f as e,s as f,c as g,n as h,u as i,o as j,a as k};
