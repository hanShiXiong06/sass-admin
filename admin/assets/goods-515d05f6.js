import{O as e}from"./index-904cb7a2.js";function n(o){return e.get("shop_fenxiao/fenxiao_goods",{params:o})}function i(o){return e.put("shop_fenxiao/fenxiao_goods/is_fenxiao",o,{showSuccessMessage:!0})}function t(o){return e.get(`shop_fenxiao/fenxiao_goods_config/${o}`)}function a(o){return e.put(`shop_fenxiao/fenxiao_goods/${o.id}`,o,{showErrorMessage:!0,showSuccessMessage:!0})}export{n as a,i as e,t as g,a as s};
