import{O as e}from"./index-0e396751.js";function n(){return e.get("fast_pay/config/getbusinessconfig")}function o(s){return e.post("fast_pay/config/setbusinessconfig",s,{showErrorMessage:!0,showSuccessMessage:!0})}function r(){return e.get("fast_pay/config/getadminconfig")}function g(s){return e.post("fast_pay/config/setadminconfig",s,{showErrorMessage:!0,showSuccessMessage:!0})}function i(){return e.get("fast_pay/config/getconfig")}function f(s){return e.post("fast_pay/config/setconfig",s,{showErrorMessage:!0,showSuccessMessage:!0})}function a(s){return e.post("fast_pay/config/poster",s,{showErrorMessage:!0,showSuccessMessage:!0})}export{n as a,o as b,i as c,f as d,r as g,a as p,g as s};
