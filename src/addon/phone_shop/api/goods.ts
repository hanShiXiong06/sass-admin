import request from "@/utils/request";

/**
 * 获取商品列表
 * @param params
 * @returns
 */
export function getGoodsPageList(params: Record<string, any>) {
  return request.get(`phone_shop/goods`, { params });
}

/**
 * 获取商品详情
 * @param goods_id 商品goods_id
 * @returns
 */
export function getGoodsInfo(goods_id: number) {
  return request.get(`phone_shop/goods/${goods_id}`);
}

/**
 * 添加实物商品
 * @param params
 * @returns
 */
export function addGoods(params: Record<string, any>) {
  return request.post("phone_shop/goods", params, {
    showErrorMessage: true,
    showSuccessMessage: true,
  });
}

/**
 * 编辑实物商品
 * @param params
 */
export function editGoods(params: Record<string, any>) {
  return request.put(`phone_shop/goods/${params.goods_id}`, params, {
    showErrorMessage: true,
    showSuccessMessage: true,
  });
}

/**
 * 获取商品添加/编辑初始化数据
 * @param params
 */
export function getGoodsInit(params: Record<string, any>) {
  return request.get(`phone_shop/goods/init`, { params });
}

/**
 * 添加虚拟商品
 * @param params
 * @returns
 */
export function addVirtualGoods(params: Record<string, any>) {
  return request.post("phone_shop/goods/virtual", params, {
    showErrorMessage: true,
    showSuccessMessage: true,
  });
}

/**
 * 编辑虚拟商品
 * @param params
 */
export function editVirtualGoods(params: Record<string, any>) {
  return request.put(`phone_shop/goods/virtual/${params.goods_id}`, params, {
    showErrorMessage: true,
    showSuccessMessage: true,
  });
}

/**
 * 获取虚拟商品添加/编辑初始化数据
 * @param params
 */
export function getVirtualGoodsInit(params: Record<string, any>) {
  return request.get(`phone_shop/goods/virtual/init`, { params });
}

/**
 * 删除商品
 * @param params
 * @returns
 */
export function deleteGoods(params: Record<string, any>) {
  return request.put(`phone_shop/goods/delete`, params, {
    showErrorMessage: true,
    showSuccessMessage: true,
  });
}

/**
 * 获取回收站商品分页列表
 * @param params
 * @returns
 */
export function getRecycleGoodsPageList(params: Record<string, any>) {
  return request.get(`phone_shop/goods/recycle`, { params });
}

/**
 * 恢复商品
 * @param params
 * @returns
 */
export function recycleGoods(params: Record<string, any>) {
  return request.put(`phone_shop/goods/recycle`, params, {
    showErrorMessage: true,
    showSuccessMessage: true,
  });
}

/**
 * 修改商品排序号
 * @param params
 */
export function editGoodsSort(params: Record<string, any>) {
  return request.put(`phone_shop/goods/sort`, params, {
    showSuccessMessage: true,
  });
}

/**
 * 修改商品上下架状态
 * @param params
 */
export function editGoodsStatus(params: Record<string, any>) {
  return request.put(`phone_shop/goods/status`, params, {
    showSuccessMessage: true,
  });
}

/**
 * 复制商品
 * @param params
 */
export function copyGoods(params: Record<string, any>) {
  return request.put(`phone_shop/goods/copy/${params.goods_id}`, params, {
    showSuccessMessage: true,
  });
}

/**
 * 获取商品选择分页列表
 * @param params
 * @returns
 */
export function getGoodsSelectPageList(params: Record<string, any>) {
  return request.get(`phone_shop/goods/select`, { params });
}

/**
 * 获取商品SKU规格列表
 * @param params
 * @returns
 */
export function getGoodsSkuList(params: Record<string, any>) {
  return request.get(`phone_shop/goods/sku`, { params });
}

/**
 * 获取商品SKU规格不分页列表
 * @param params
 * @returns
 */
export function getGoodsSkuNoPageList(params: Record<string, any>) {
  return request.get(`phone_shop/goods/selectgoodssku`, { params });
}

/** 查询商品参与营销活动的数量
 * @param params
 * @returns
 */
export function getActiveGoodsCount(params: Record<string, any>) {
  return request.get(`phone_shop/goods/active/count`, { params });
}

/**
 * 编辑商品SKU规格库存
 * @param params
 * @returns
 */
export function editGoodsListStock(params: Record<string, any>) {
  return request.put(`phone_shop/goods/sku/stock`, params, {
    showSuccessMessage: true,
  });
}

/**
 * 编辑商品SKU规格价格
 * @param params
 * @returns
 */
export function editGoodsListPrice(params: Record<string, any>) {
  return request.put(`phone_shop/goods/sku/price`, params, {
    showSuccessMessage: true,
  });
}

/**
 * 编辑商品SKU规格会员价格
 * @param params
 * @returns
 */
export function editGoodsListMemberPrice(params: Record<string, any>) {
  return request.put(`phone_shop/goods/sku/member_price`, params, {
    showSuccessMessage: true,
  });
}

/**
 * 获取商品类型
 * @returns
 */
export function getGoodsType() {
  return request.get(`phone_shop/goods/type`);
}

/**
 * 获取商品标签分页列表
 * @param params
 * @returns
 */
export function getLabelPageList(params: Record<string, any>) {
  return request.get(`phone_shop/goods/label`, { params });
}

/**
 * 获取商品标签列表
 * @param params
 * @returns
 */
export function getLabelList(params: Record<string, any>) {
  return request.get(`phone_shop/goods/label/list`, { params });
}

/**
 * 获取商品标签详情
 * @param label_id 商品标签label_id
 * @returns
 */
export function getLabelInfo(label_id: number) {
  return request.get(`phone_shop/goods/label/${label_id}`);
}

/**
 * 添加商品标签
 * @param params
 * @returns
 */
export function addLabel(params: Record<string, any>) {
  return request.post("phone_shop/goods/label", params, {
    showErrorMessage: true,
    showSuccessMessage: true,
  });
}

/**
 * 编辑商品标签
 * @param params
 * @returns
 */
export function editLabel(params: Record<string, any>) {
  return request.put(`phone_shop/goods/label/${params.label_id}`, params, {
    showErrorMessage: true,
    showSuccessMessage: true,
  });
}

/**
 * 删除商品标签
 * @param label_id
 * @returns
 */
export function deleteLabel(label_id: number) {
  return request.delete(`phone_shop/goods/label/${label_id}`, {
    showErrorMessage: true,
    showSuccessMessage: true,
  });
}

/**
 * 修改商品标签排序号
 * @param params
 */
export function modifyLabelSort(params: Record<string, any>) {
  return request.put(`phone_shop/goods/label/sort`, params, {
    showSuccessMessage: true,
  });
}

/**
 * 获取商品品牌分页列表
 * @param params
 * @returns
 */
export function getBrandPageList(params: Record<string, any>) {
  return request.get(`phone_shop/goods/brand`, { params });
}

/**
 * 获取商品品牌列表
 * @param params
 * @returns
 */
export function getBrandList(params: Record<string, any>) {
  return request.get(`phone_shop/goods/brand/list`, { params });
}

/**
 * 获取商品品牌详情
 * @param brand_id 商品品牌brand_id
 * @returns
 */
export function getBrandInfo(brand_id: number) {
  return request.get(`phone_shop/goods/brand/${brand_id}`);
}

/**
 * 添加商品品牌
 * @param params
 * @returns
 */
export function addBrand(params: Record<string, any>) {
  return request.post("phone_shop/goods/brand", params, {
    showErrorMessage: true,
    showSuccessMessage: true,
  });
}

/**
 * 编辑商品品牌
 * @param params
 * @returns
 */
export function editBrand(params: Record<string, any>) {
  return request.put(`phone_shop/goods/brand/${params.brand_id}`, params, {
    showErrorMessage: true,
    showSuccessMessage: true,
  });
}

/**
 * 修改商品品牌排序号
 * @param params
 */
export function modifyBrandSort(params: Record<string, any>) {
  return request.put(`phone_shop/goods/brand/sort`, params, {
    showSuccessMessage: true,
  });
}

/**
 * 删除商品品牌
 * @param brand_id
 * @returns
 */
export function deleteBrand(brand_id: number) {
  return request.delete(`phone_shop/goods/brand/${brand_id}`, {
    showErrorMessage: true,
    showSuccessMessage: true,
  });
}

/**
 * 获取商品服务分页列表
 * @param params
 * @returns
 */
export function getServePageList(params: Record<string, any>) {
  return request.get(`phone_shop/goods/service`, { params });
}

/**
 * 获取商品服务列表
 * @param params
 * @returns
 */
export function getServeList(params: Record<string, any>) {
  return request.get(`phone_shop/goods/service/list`, { params });
}

/**
 * 获取商品服务详情
 * @param service_id 商品服务service_id
 * @returns
 */
export function getServeInfo(service_id: number) {
  return request.get(`phone_shop/goods/service/${service_id}`);
}

/**
 * 添加商品服务
 * @param params
 * @returns
 */
export function addServe(params: Record<string, any>) {
  return request.post("phone_shop/goods/service", params, {
    showErrorMessage: true,
    showSuccessMessage: true,
  });
}

/**
 * 编辑商品服务
 * @param params
 * @returns
 */
export function editServe(params: Record<string, any>) {
  return request.put(`phone_shop/goods/service/${params.service_id}`, params, {
    showErrorMessage: true,
    showSuccessMessage: true,
  });
}

/**
 * 删除商品服务
 * @param service_id
 * @returns
 */
export function deleteServe(service_id: number) {
  return request.delete(`phone_shop/goods/service/${service_id}`, {
    showErrorMessage: true,
    showSuccessMessage: true,
  });
}

/**
 * 获取商品分类树结构
 * @returns
 */
export function getCategoryTree() {
  return request.get(`phone_shop/goods/tree`);
}

/**
 * 获取商品分类列表
 * @param params
 * @returns
 */
export function getCategoryList(params: Record<string, any>) {
  return request.get(`phone_shop/goods/category`, { params });
}

/**
 * 获取商品分类详情
 * @param category_id 商品分类category_id
 * @returns
 */
export function getCategoryInfo(category_id: number) {
  return request.get(`phone_shop/goods/category/${category_id}`);
}

/**
 * 添加商品分类
 * @param params
 * @returns
 */
export function addCategory(params: Record<string, any>) {
  return request.post("phone_shop/goods/category", params, {
    showErrorMessage: true,
    showSuccessMessage: true,
  });
}

/**
 * 编辑商品分类
 * @param params
 * @returns
 */
export function editCategory(params: Record<string, any>) {
  return request.put(
    `phone_shop/goods/category/${params.category_id}`,
    params,
    {
      showErrorMessage: true,
      showSuccessMessage: true,
    }
  );
}

/**
 * 删除商品分类
 * @param category_id
 * @returns
 */
export function deleteCategory(category_id: number) {
  return request.delete(`phone_shop/goods/category/${category_id}`, {
    showErrorMessage: true,
    showSuccessMessage: true,
  });
}

/**
 * 拖拽编辑商品分类
 * @param params
 * @returns
 */
export function updateCategory(params: Record<string, any>) {
  return request.post(`phone_shop/goods/category/update`, params, {
    showErrorMessage: true,
    showSuccessMessage: true,
  });
}

/**
 * 设置商品分类配置
 * @param params
 * @returns
 */
export function setCategoryConfig(params: Record<string, any>) {
  return request.post(`phone_shop/goods/category/config`, params, {
    showErrorMessage: true,
    showSuccessMessage: true,
  });
}

/**
 * 获取商品分类配置
 * @returns
 */
export function getCategoryConfig() {
  return request.get(`phone_shop/goods/category/config`);
}

/**
 * 获取商品分类树结构供弹框调用
 * @returns
 */
export function getCategoryTreeComponents() {
  return request.get(`phone_shop/goods/category/components`);
}

/**
 * 获取供应商列表
 * @param params
 * @returns
 */
export function getSupplierList(params: Record<string, any>) {
  return request.get(`shop_supplier/supplier/list`, { params });
}

/**
 * 获取商品评价列表
 * @param params
 * @returns
 */
export function getEvaluateList(params: Record<string, any>) {
  return request.get(`phone_shop/goods/evaluate`, { params });
}

/**
 * 添加商品评价
 * @param params
 * @returns
 */
export function addEvaluate(params: Record<string, any>) {
  return request.post("phone_shop/goods/evaluate", params, {
    showErrorMessage: true,
    showSuccessMessage: true,
  });
}

/**
 * 删除商品评价
 * @param evaluate_id
 * @returns
 */
export function deleteEvaluate(evaluate_id: number) {
  return request.delete(`phone_shop/goods/evaluate/${evaluate_id}`, {
    showErrorMessage: true,
    showSuccessMessage: true,
  });
}

/**
 * 商品评价 通过
 * @param evaluate_id
 * @returns
 */
export function adoptEvaluate(evaluate_id: number) {
  return request.put(`phone_shop/goods/evaluate/adopt/${evaluate_id}`, {
    showErrorMessage: true,
    showSuccessMessage: true,
  });
}

/**
 * 商品评价 拒绝
 * @param evaluate_id
 * @returns
 */
export function refuseEvaluate(evaluate_id: number) {
  return request.put(`phone_shop/goods/evaluate/refuse/${evaluate_id}`, {
    showErrorMessage: true,
    showSuccessMessage: true,
  });
}

/**
 * 商品评价 回复
 * @param params
 * @returns
 */
export function replyEvaluate(params: Record<string, any>) {
  return request.put(
    `phone_shop/goods/evaluate/reply/${params.evaluate_id}`,
    params,
    {
      showErrorMessage: true,
      showSuccessMessage: true,
    }
  );
}

/**
 * 商品评价 置顶
 * @param evaluate_id
 * @returns
 */
export function toppingEvaluate(evaluate_id: number) {
  return request.put(`phone_shop/goods/evaluate/topping/${evaluate_id}`, {
    showErrorMessage: true,
    showSuccessMessage: true,
  });
}

/**
 * 商品评价 取消置顶
 * @param evaluate_id
 * @returns
 */
export function cancelToppingEvaluate(evaluate_id: number) {
  return request.put(
    `phone_shop/goods/evaluate/cancel_topping/${evaluate_id}`,
    {
      showErrorMessage: true,
      showSuccessMessage: true,
    }
  );
}

/**
 * 获取商品参数分页列表
 * @param params
 * @returns
 */
export function getAttrPageList(params: Record<string, any>) {
  return request.get(`phone_shop/goods/attr`, { params });
}

/**
 * 获取商品参数列表
 * @param params
 * @returns
 */
export function getAttrList(params: Record<string, any>) {
  return request.get(`phone_shop/goods/attr/list`, { params });
}

/**
 * 获取商品参数详情
 * @param attr_id 商品参数attr_id
 * @returns
 */
export function getAttrInfo(attr_id: number) {
  return request.get(`phone_shop/goods/attr/${attr_id}`);
}

/**
 * 添加商品参数
 * @param params
 * @returns
 */
export function addAttr(params: Record<string, any>) {
  return request.post("phone_shop/goods/attr", params, {
    showErrorMessage: true,
    showSuccessMessage: true,
  });
}

/**
 * 编辑商品参数
 * @param params
 * @returns
 */
export function editAttr(params: Record<string, any>) {
  return request.put(`phone_shop/goods/attr/${params.attr_id}`, params, {
    showErrorMessage: true,
    showSuccessMessage: true,
  });
}

/**
 * 删除商品参数
 * @param attr_id
 * @returns
 */
export function deleteAttr(attr_id: number) {
  return request.delete(`phone_shop/goods/attr/${attr_id}`, {
    showErrorMessage: true,
    showSuccessMessage: true,
  });
}

/**
 * 修改商品参数排序号
 * @param params
 */
export function modifyAttrSort(params: Record<string, any>) {
  return request.put(`phone_shop/goods/attr/sort`, params, {
    showSuccessMessage: true,
  });
}

/**
 * 修改商品参数名称
 * @param params
 */
export function modifyAttrName(params: Record<string, any>) {
  return request.put(`phone_shop/goods/attr/attr_name`, params, {
    showSuccessMessage: true,
  });
}

/**
 * 修改商品参数值
 * @param params
 */
export function modifyAttrValue(params: Record<string, any>) {
  return request.put(`phone_shop/goods/attr/attr_value`, params, {
    showSuccessMessage: true,
  });
}
/**
 * syncGoodsList
 * 一键同步商品
 * */
export function syncGoodsList() {
  return request.get(`phone_shop/goods/sync_goods_list`, {
    showErrorMessage: true,
    showSuccessMessage: true,
  });
}
