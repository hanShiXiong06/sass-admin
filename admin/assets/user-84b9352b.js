import{O as s}from"./index-904cb7a2.js";function t(e){return s.post("qf_notice/deluserselect",e,{showErrorMessage:!0,showSuccessMessage:!0})}function u(){return s.post("qf_notice/clearuser",{showErrorMessage:!0,showSuccessMessage:!0})}function o(e){return s.get("qf_notice/user",{params:e})}function n(e){return s.get(`qf_notice/user/${e}`)}function c(e){return s.post("qf_notice/user",e,{showErrorMessage:!0,showSuccessMessage:!0})}function a(e){return s.put(`qf_notice/user/${e.id}`,e,{showErrorMessage:!0,showSuccessMessage:!0})}function i(e){return s.delete(`qf_notice/user/${e}`,{showErrorMessage:!0,showSuccessMessage:!0})}function f(e){return s.get("qf_notice/user_cat_all",{params:e})}export{c as a,n as b,u as c,t as d,a as e,o as f,f as g,i as h};
