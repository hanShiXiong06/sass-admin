import{O as t}from"./index-0e396751.js";function o(e){return t.get("qf_notice/member_level_all",{params:e})}function s(e){return t.get(`qf_notice/send/notice/${e}`,{showSuccessMessage:!0,showErrorMessage:!0})}function r(){return t.get("qf_notice/addon/addontype")}function d(e){return t.get("qf_notice/category_all",{params:e})}function u(e){return t.get("qf_notice/addon",{params:e})}function c(e){return t.get(`qf_notice/addon/${e}`)}function a(e){return t.post("qf_notice/addon",e,{showErrorMessage:!0,showSuccessMessage:!0})}function i(e){return t.put(`qf_notice/addon/${e.id}`,e,{showErrorMessage:!0,showSuccessMessage:!0})}function g(e){return t.delete(`qf_notice/addon/${e}`,{showErrorMessage:!0,showSuccessMessage:!0})}export{d as a,u as b,o as c,g as d,i as e,a as f,r as g,c as h,s};
