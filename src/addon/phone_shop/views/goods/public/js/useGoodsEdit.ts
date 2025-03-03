import { reactive, ref, computed, nextTick, watch, watchEffect } from "vue";
import { t } from "@/lang";
import { TabsPaneContext, ElMessage } from "element-plus";
import Sortable from "sortablejs";
import { range, cloneDeep } from "lodash-es";
import { debounce, deepClone } from "@/utils/common";
import { useRoute, useRouter } from "vue-router";
import Test from "@/utils/test";
import {
  getGoodsType,
  getBrandList,
  getLabelList,
  getMemoryLists,
  getServeList,
  getSupplierList,
  getCategoryTree,
  getAttrList,
  getAttrInfo,
} from "@/addon/phone_shop/api/goods";
import { getRecyclerPriceConfigBySiteId } from "@/addon/phone_shop/api/site";
import { getPosterList } from "@/app/api/poster";

// 定义价格区间接口
interface PriceRange {
  id: number;
  config_id: number;
  min_price: string;
  max_price: string;
  member_markup: string;
  create_time: string;
  update_time: string;
}

interface RecyclerPriceConfig {
  id: number;
  site_id: number;
  recycler_id: number;
  price_type: number;
  member_markup: string;
  non_member_markup: string;
  create_time: string;
  update_time: string;
  price_ranges: PriceRange[];
}

// 商品添加/编辑
export function useGoodsEdit(params: any = {}) {
  const route = useRoute();
  const router = useRouter();

  const repeat = ref(false);

  // 表单数据
  const formData: any = reactive({
    goods_id: "",
    goods_type: "real",

    // 基础信息
    goods_name: "",
    sub_title: "",
    goods_image: "",
    goods_category: "",
    brand_id: "",
    poster_id: "",
    label_ids: [],
    only_self: 0,
    // memory
    memory_ids: [],
    service_ids: [],
    supplier_id: "",
    status: "1",
    sort: "",
    is_proxy: 1,

    addon_shop_supplier: [],

    // 价格库存
    spec_type: "single",
    price: "",
    market_price: "",
    cost_price: "",
    stock: "",
    sku_no: "",
    unit: "",
    virtual_sale_num: "",
    member_discount: "",

    // 商品参数
    attr_format: [],
    attr_id: "",

    // 商品详情
    goods_desc: "-",
  });

  Object.assign(formData, params.formData);

  formData.goods_id = ref(route.query.goods_id);

  // 追加表单数据
  const appendFormData = params.appendFormData;
  Object.assign(formData, appendFormData);

  // 追加刷新商品sku数据
  const appendRefreshGoodsSkuData = params.appendRefreshGoodsSkuData || {};

  // 追加单规格数据
  const appendSingleGoodsData = params.appendSingleGoodsData;

  const getFormRules = params.getFormRules;

  const formRefArr: any = reactive({});

  const getFormRef = params.getFormRef;

  const verifyArr: any = reactive([]);

  const recyclerPriceConfig = ref<RecyclerPriceConfig | null>(null);

  nextTick(() => {
    let formRef = getFormRef();
    for (let key in formRef) {
      formRefArr[key] = formRef[key];
    }

    if (params.getVerify) {
      verifyArr.splice(0, verifyArr.length, ...params.getVerify());
    }
  });

  const editApi = params.editApi;
  const addApi = params.addApi;

  const activeName: any = ref("basic");
  const tabHandleClick = (tab: TabsPaneContext, event: Event) => {
    // console.log(tab, event)
  };

  // 商品类型
  const goodsType = reactive([]);

  // 切换商品类型
  const changeGoodsType = (data: any) => {
    router.push(data.path);
  };

  // 商品类型
  getGoodsType().then((res) => {
    const data = res.data;
    if (data) {
      for (const k in data) {
        goodsType.push(data[k]);
      }
    }
  });

  // 商品分类
  const goodsCategoryOptions = reactive([]);
  const goodsCategoryProps = {
    multiple: true,
  };

  /**
   * 将多维数组扁平化为一维数组
   * @param arr - 需要扁平化的数组
   * @returns 扁平化后的一维数组
   */
  const flattenArray = (arr: any[]): any[] => {
    return arr.reduce((flat, item) => {
      if (Array.isArray(item)) {
        return flat.concat(flattenArray(item));
      } else {
        return flat.concat(item);
      }
    }, []);
  };

  /**
   * 从分类树中查找指定ID的分类
   * @param categoryId - 要查找的分类ID
   * @param categories - 分类树
   * @returns 找到的分类对象或undefined
   */
  const findCategoryById = (
    categoryId: string | number,
    categories: any[]
  ): any => {
    for (const category of categories) {
      // 检查当前层级
      if (category.value === categoryId) {
        return category;
      }
      // 检查子分类
      if (category.children && category.children.length > 0) {
        const found = findCategoryById(categoryId, category.children);
        if (found) return found;
      }
    }
    return undefined;
  };

  /**
   * 处理分类变化，更新内存选项
   * @param value - 选中的分类值
   */
  const categoryHandleChange = (value: any) => {
    // 如果没有选择分类，清空内存选项并返回
    if (!value || value.length === 0) {
      memoryOptions.splice(0, memoryOptions.length);
      return;
    }

    // 将多维数组扁平化为一维数组
    const categoryIds = flattenArray(value);

    if (categoryIds.length === 0) {
      memoryOptions.splice(0, memoryOptions.length);
      return;
    }

    const lastNum = categoryIds[categoryIds.length - 1];
    // 通过  lastNum 获取对应的 .memory_group

    // 在分类options 中查找

    if (lastNum) {
      refreshGoodsMemory(lastNum);
    } else {
      memoryOptions.splice(0, memoryOptions.length);
    }
  };

  // 跳转到商品分类，添加分类
  const toGoodsCategoryEvent = () => {
    const url = router.resolve({
      path: "/phone_shop/goods/category",
    });
    window.open(url.href);
  };

  // 刷新商品分类
  const refreshGoodsCategory = (bool = false) => {
    getCategoryTree().then(async (res) => {
      const data = res.data;

      if (data) {
        const goodsCategoryTree: any = [];
        data.forEach((item: any) => {
          const children: any = [];
          if (item.child_list) {
            item.child_list.forEach((childItem: any) => {
              children.push({
                value: childItem.category_id,
                label: childItem.category_name,
                memory_group: childItem.memory_group,
              });
            });
          }
          goodsCategoryTree.push({
            value: item.category_id,
            label: item.category_name,
            memory_group: item.memory_group,
            children,
          });
        });
        goodsCategoryOptions.splice(
          0,
          goodsCategoryOptions.length,
          ...goodsCategoryTree
        );
        //
        if (bool) {
          ElMessage({
            message: t("refreshSuccess"),
            type: "success",
          });
        }
      }
    });
  };

  refreshGoodsCategory();

  // 品牌列表下拉框
  const brandOptions = reactive([]);

  // 跳转到商品品牌，添加品牌
  const toGoodsBrandEvent = () => {
    const url = router.resolve({
      path: "/phone_shop/goods/brand",
    });
    window.open(url.href);
  };

  // 商品品牌
  const refreshGoodsBrand = (bool = false) => {
    getBrandList({}).then((res) => {
      const data = res.data;
      if (data) {
        brandOptions.splice(0, brandOptions.length, ...data);
        if (bool) {
          ElMessage({
            message: t("refreshSuccess"),
            type: "success",
          });
        }
      }
    });
  };

  refreshGoodsBrand();
  // 获取回收商价格配置
  const _getRecyclerPriceConfig = () => {
    getRecyclerPriceConfigBySiteId().then((res) => {
      recyclerPriceConfig.value = res.data;
    });
  };
  _getRecyclerPriceConfig();
  // 海报列表下拉框
  const posterOptions = reactive([]);

  // 跳转到海报列表，添加海报
  const toPosterEvent = () => {
    const url = router.resolve({
      path: "/poster/list",
    });
    window.open(url.href);
  };

  // 商品海报
  const refreshGoodsPoster = (bool = false) => {
    getPosterList({
      type: "shop_goods",
    }).then((res) => {
      const data = res.data;
      if (data) {
        posterOptions.splice(0, posterOptions.length, ...data);
        if (bool) {
          ElMessage({
            message: t("refreshSuccess"),
            type: "success",
          });
        }
      }
    });
  };

  refreshGoodsPoster();

  // 标签组列表复选框
  const labelOptions = reactive([]);

  // 跳转到商品标签，添加标签
  const toGoodsLabelEvent = () => {
    const url = router.resolve({
      path: "/phone_shop/goods/label",
    });
    window.open(url.href);
  };

  // 商品标签
  const refreshGoodsLabel = () => {
    getLabelList({}).then((res) => {
      const data = res.data;
      if (data) {
        labelOptions.splice(0, labelOptions.length, ...data);
      }
    });
  };

  refreshGoodsLabel();

  // 商品内存列表复选框
  const memoryOptions = reactive([]);
  // 跳转到商品内存，添加内存
  const toGoodsMemoryEvent = () => {
    const url = router.resolve({
      path: "/phone_shop/goods/memory",
    });
    window.open(url.href);
  };

  // 刷新商品内存
  const refreshGoodsMemory = (param: any) => {
    // 如果param 为真 才调用接口

    getMemoryLists(param).then((res: any) => {
      const data = res.data;
      if (data) {
        memoryOptions.splice(0, memoryOptions.length, ...data);
      }
    });
  };

  // 商品服务列表复选框
  const serviceOptions = reactive([]);

  // 跳转到商品服务，添加服务
  const toGoodsServiceEvent = () => {
    const url = router.resolve({
      path: "/phone_shop/goods/service",
    });
    window.open(url.href);
  };

  // 商品服务
  const refreshGoodsService = () => {
    getServeList({}).then((res) => {
      const data = res.data;
      if (data) {
        serviceOptions.splice(0, serviceOptions.length, ...data);
      }
    });
  };

  refreshGoodsService();

  // 供应商列表下拉框
  const supplierOptions = reactive([]);

  // 跳转到供应商
  const toSupplierEvent = () => {
    const url = router.resolve({
      path: "/shop_supplier/supplier",
    });
    window.open(url.href);
  };

  // 供应商
  const refreshSupplier = () => {
    getSupplierList({}).then((res) => {
      const data = res.data;
      if (data) {
        supplierOptions.splice(0, supplierOptions.length, ...data);
      }
    });
  };

  const goodsSpecFormat: any = reactive([]); // 规格项/规格值
  const goodsSkuData: any = reactive({}); // 商品SKU规格数据
  const specData: any = reactive([]); // 商品规格值

  const activeGoodsCount: any = ref(0);

  const isDisabledPrice = () => {
    if (activeGoodsCount.value > 0) {
      return true;
    }
    return false;
  };

  const handleGoodsInit = (data: any) => {
    formData.addon_shop_supplier = data.addon_shop_supplier;
    if (
      formData.addon_shop_supplier &&
      formData.addon_shop_supplier.status == 1
    ) {
      refreshSupplier();
    }

    if (formData.goods_id && data.goods_info) {
      // 商品参与营销活动的数量
      activeGoodsCount.value = data.goods_info.active_goods_count;

      // 基础信息
      formData.goods_name = data.goods_info.goods_name;
      formData.sub_title = data.goods_info.sub_title;
      formData.goods_type = data.goods_info.goods_type;
      formData.goods_image = data.goods_info.goods_image;
      formData.goods_category = data.goods_info.goods_category;
      // 内存赋值
      formData.memory_ids = data.goods_info.memory_ids;
      formData.brand_id = data.goods_info.brand_id;
      formData.poster_id = data.goods_info.poster_id;
      formData.label_ids = data.goods_info.label_ids;
      formData.only_self = data.goods_info.only_self;
      formData.service_ids = data.goods_info.service_ids;
      formData.supplier_id = data.goods_info.supplier_id;
      formData.status = data.goods_info.status;
      formData.sort = data.goods_info.sort;
      formData.is_proxy = data.goods_info.is_proxy;

      /*************** 商品参数-start ****************/
      formData.attr_format = data.goods_info.attr_format
        ? JSON.parse(data.goods_info.attr_format)
        : [];
      formData.attr_id = data.goods_info.attr_id;

      editCallFn.value = true;
      attrChange(formData.attr_id || -1); //formData.attr_id为空，需要传入-1，便于attrChange方法调用
      /*************** 商品参数-end ****************/

      // 价格库存
      formData.spec_type = data.goods_info.spec_type;
      formData.stock = data.goods_info.stock;

      if (formData.spec_type == "single") {
        // 单规格
        const skuInfo = data.goods_info.sku_list[0];
        formData.price = skuInfo.price;
        formData.market_price = skuInfo.market_price;
        formData.cost_price = skuInfo.cost_price;
        formData.sku_no = skuInfo.sku_no;

        if (appendSingleGoodsData)
          Object.assign(formData, appendSingleGoodsData(skuInfo));
      } else if (formData.spec_type == "multi") {
        // 多规格
        const specList = data.goods_info.spec_list;
        specList.forEach((item: any) => {
          const values: any = [];
          item.spec_values = item.spec_values.split(",");
          item.spec_values.forEach((v: any) => {
            values.push({
              id: generateRandom(),
              spec_value_name: v,
            });
          });
          goodsSpecFormat.push({
            id: generateRandom(),
            spec_id: item.spec_id,
            goods_id: item.goods_id,
            spec_name: item.spec_name,
            values,
          });
        });

        refreshGoodsSkuData();

        const skuList = data.goods_info.sku_list;

        for (let key in goodsSkuData) {
          for (let i = 0; i < skuList.length; i++) {
            let item = skuList[i];
            if (
              goodsSkuData[key].spec_name ==
              item.sku_spec_format.replace(/,/g, " ")
            ) {
              goodsSkuData[key].sku_id = item.sku_id;
              goodsSkuData[key].sku_image = item.sku_image;
              goodsSkuData[key].price = item.price;
              goodsSkuData[key].market_price = item.market_price;
              goodsSkuData[key].cost_price = item.cost_price;

              for (let field in appendRefreshGoodsSkuData) {
                goodsSkuData[key][field] = item[field];
              }

              goodsSkuData[key].stock = item.stock;
              goodsSkuData[key].sku_id = item.sku_id;
              goodsSkuData[key].sku_no = item.sku_no;
              goodsSkuData[key].is_default = item.is_default;
              break;
            }
          }
        }

        nextTick(() => {
          refreshSkuTable();
          bindSpecValue();
        });
      }

      formData.member_discount = data.goods_info.member_discount;

      formData.unit = data.goods_info.unit;
      formData.virtual_sale_num = data.goods_info.virtual_sale_num;

      // 商品详情
      formData.goods_desc = data.goods_info.goods_desc;
    }
  };

  // 绑定拖拽规格值事件
  const bindSpecValue = () => {
    // 商品正在参与营销活动，禁止操作
    if (isDisabledPrice()) {
      return;
    }
    if (!getFormRef().specValueRef) return;

    for (let i = 0; i < getFormRef().specValueRef.length; i++) {
      const item = getFormRef().specValueRef[i];
      const sortable = Sortable.create(item, {
        group: "draggable-element-" + i,
        animation: 200,
        // 结束拖拽
        onEnd: (event) => {
          const temp = goodsSpecFormat[i].values[event.oldIndex!];
          goodsSpecFormat[i].values.splice(event.oldIndex!, 1);
          goodsSpecFormat[i].values.splice(event.newIndex!, 0, temp);

          nextTick(() => {
            sortable.sort(
              range(goodsSpecFormat[i].values.length).map((value) => {
                return value.toString();
              })
            );

            // 渲染商品规格数据、表格
            refreshGoodsSkuData();
            refreshSkuTable();
          });
        },
      });
    }
  };

  // 生成随机数
  const generateRandom = (len: number = 5) => {
    return Number(
      Math.random().toString().substr(3, len) + Date.now()
    ).toString(36);
  };

  // 添加规格项
  const addSpec = () => {
    // 商品正在参与营销活动，禁止操作
    if (isDisabledPrice()) {
      ElMessage({
        type: "warning",
        message: `${t("participateInActiveDisableTips")}`,
      });
      return;
    }
    if (goodsSpecFormat.length > 4) {
      ElMessage({
        type: "warning",
        message: `${t("maxAddSpecTips")}`,
      });
      return;
    }
    goodsSpecFormat.push({
      id: generateRandom(),
      spec_name: "",
      values: [
        {
          id: generateRandom(),
          spec_value_name: "",
        },
      ],
    });
  };

  // 删除规格项
  const deleteSpec = (index: number) => {
    // 商品正在参与营销活动，禁止操作
    if (isDisabledPrice()) {
      ElMessage({
        type: "warning",
        message: `${t("participateInActiveDisableTips")}`,
      });
      return;
    }
    goodsSpecFormat.splice(index, 1);
    // 渲染商品规格数据、表格、统计库存变化
    refreshGoodsSkuData();
    refreshSkuTable();
    specStockSum();
  };

  // 添加规格值
  const addSpecValue = (index: number) => {
    // 商品正在参与营销活动，禁止操作
    if (isDisabledPrice()) {
      ElMessage({
        type: "warning",
        message: `${t("participateInActiveDisableTips")}`,
      });
      return;
    }
    goodsSpecFormat[index].values.push({
      id: generateRandom(),
      spec_value_name: "",
    });
    bindSpecValue();
  };

  // 监听规格值变化
  const specValueNameInputListener = debounce((value) => {
    // 渲染商品规格数据、表格
    refreshGoodsSkuData();
    refreshSkuTable();
  });

  // 删除规格值
  const deleteSpecValue = (index: number, specIndex: number) => {
    // 商品正在参与营销活动，禁止操作
    if (isDisabledPrice()) {
      ElMessage({
        type: "warning",
        message: `${t("participateInActiveDisableTips")}`,
      });
      return;
    }
    goodsSpecFormat[index].values.splice(specIndex, 1);
    // 渲染商品规格数据、表格、统计库存变化
    refreshGoodsSkuData();
    refreshSkuTable();
    specStockSum();
  };

  // 设置默认规格
  const specValueIsDefaultChangeListener = (value: any, key: any) => {
    for (const k in goodsSkuData) {
      if (k == key) {
        goodsSkuData[k].is_default = value;
      } else {
        goodsSkuData[k].is_default = 0;
      }
    }
  };

  // 监听规格库存变化，统计总库存
  const specStockSum = debounce(() => {
    let stock = 0;
    for (const k in goodsSkuData) {
      if (goodsSkuData[k].stock) stock += parseInt(goodsSkuData[k].stock);
    }
    formData.stock = stock;
  });

  // 刷新商品规格数据
  const refreshGoodsSkuData = () => {
    const arr = goodsSpecFormat;
    const tempGoodsSkuData = cloneDeep(goodsSkuData); // 记录原始数据，后续用作对比
    let skuData: any = {};
    let tempIndex = 0;
    for (const spec of arr) {
      let item_prop_arr: any = {};
      if (Object.keys(skuData).length > 0) {
        for (const ele_2 in skuData) {
          for (let ele_3 of spec.values) {
            let sku_spec = cloneDeep(skuData[ele_2].sku_spec); // 防止对象引用
            sku_spec.push(ele_3);
            item_prop_arr["sku_" + tempIndex] = {
              spec_name: `${skuData[ele_2].spec_name} ${ele_3.spec_value_name}`,
              sku_spec,
              sku_image: "",
              price: "",
              market_price: "",
              cost_price: "",
              stock: "",
              sku_no: "",
              is_default: 0,
            };

            for (let key in appendRefreshGoodsSkuData) {
              item_prop_arr["sku_" + tempIndex][key] =
                appendRefreshGoodsSkuData[key].value;
            }
            tempIndex++;
          }
        }
      } else {
        for (let ele_1 of spec.values) {
          let spec_name = ele_1.spec_value_name;
          item_prop_arr["sku_" + tempIndex] = {
            spec_name: spec_name,
            sku_spec: [ele_1],
            sku_image: "",
            price: "",
            market_price: "",
            cost_price: "",
            stock: "",
            sku_no: "",
            is_default: 0,
          };
          for (let key in appendRefreshGoodsSkuData) {
            item_prop_arr["sku_" + tempIndex][key] =
              appendRefreshGoodsSkuData[key].value;
          }
          tempIndex++;
        }
      }

      skuData = Object.keys(item_prop_arr).length > 0 ? item_prop_arr : skuData;
    }

    // 比对已存在的规格项/值，并且赋值
    for (const tempKey in tempGoodsSkuData) {
      for (const key in skuData) {
        const count = matchSkuSpecCount(
          tempGoodsSkuData[tempKey].sku_spec,
          skuData[key].sku_spec
        );
        if (count === skuData[key].sku_spec.length) {
          // 匹配成功后，要同步最新的规格项名称、规格值集合
          const specName = skuData[key].spec_name;
          const skuSpec = skuData[key].sku_spec;
          Object.assign(skuData[key], tempGoodsSkuData[tempKey]);
          skuData[key].spec_name = specName;
          skuData[key].sku_spec = skuSpec;
          break;
        }
      }
    }

    for (const item in goodsSkuData) {
      delete goodsSkuData[item];
    }

    let firstSpec = "";

    for (const key in skuData) {
      if (firstSpec == "") {
        firstSpec = key;
        skuData[key].is_default = 1;
      } else {
        skuData[key].is_default = 0;
      }
      goodsSkuData[key] = skuData[key];
    }
  };

  // 匹配规格值
  const matchSkuSpecCount = (oVal: any, nVal: any) => {
    let count = 0; // 匹配次数，与规格值相等时为匹配成功
    for (let i = 0; i < oVal.length; i++) {
      for (let j = 0; j < nVal.length; j++) {
        if (oVal[i].id === nVal[j].id) {
          count++;
          break;
        }
      }
    }
    return count;
  };

  // 刷新商品规格表格
  const refreshSkuTable = () => {
    let length = 0;
    // 统计有效规格数量
    for (let i = 0; i < goodsSpecFormat.length; i++) {
      if (
        goodsSpecFormat[i].spec_name != "" &&
        goodsSpecFormat[i].values.length > 0
      ) {
        length++;
      }
    }

    let row = 1; // 跨行
    const tempSpecData = [];

    // 规格值单元格合并
    for (let i = length - 1; i >= 0; i--) {
      for (let k = 0; k < Object.keys(goodsSkuData).length; ) {
        if (goodsSpecFormat[i].values.length > 0) {
          for (let ele of goodsSpecFormat[i].values) {
            tempSpecData.push({
              index: k,
              colSpan: i,
              rowSpan: row,
              spec_value_name: ele.spec_value_name,
            });
            k = k + row;
          }
        } else {
          k++;
        }
      }
      row = row * goodsSpecFormat[i].values.length;
    }

    tempSpecData.reverse();
    specData.splice(0, specData.length, ...tempSpecData);
  };

  const batchOperation: any = reactive({
    spec: "", // 所选规格id，空为全部
    price: "", // 销售价
    market_price: "", // 划线价
    cost_price: "", // 成本价
    stock: "", // 库存
    sku_no: "", // 商品编码
  });

  var appendBatchOperation: any = {};
  for (let key in appendRefreshGoodsSkuData) {
    appendBatchOperation[key] = appendRefreshGoodsSkuData[key].value;
  }

  Object.assign(batchOperation, appendBatchOperation);

  // 批量设置确认
  const saveBatch = () => {
    // 验证输入内容
    if (
      batchOperation.price &&
      (isNaN(batchOperation.price) || !regExp.digit.test(batchOperation.price))
    ) {
      ElMessage({
        type: "warning",
        message: `${t("priceTips")}`,
      });
      return;
    }
    if (
      batchOperation.market_price &&
      (isNaN(batchOperation.market_price) ||
        !regExp.digit.test(batchOperation.market_price))
    ) {
      ElMessage({
        type: "warning",
        message: `${t("marketPriceTips")}`,
      });
      return;
    }
    if (
      batchOperation.cost_price &&
      (isNaN(batchOperation.cost_price) ||
        !regExp.digit.test(batchOperation.cost_price))
    ) {
      ElMessage({
        type: "warning",
        message: `${t("costPriceTips")}`,
      });
      return;
    }
    if (
      batchOperation.stock &&
      (isNaN(batchOperation.stock) || !regExp.number.test(batchOperation.stock))
    ) {
      ElMessage({
        type: "warning",
        message: `${t("stockTips")}`,
      });
      return;
    }

    for (let field in appendRefreshGoodsSkuData) {
      let reg = regExp[appendRefreshGoodsSkuData[field].regExp];
      let message = appendRefreshGoodsSkuData[field].message;

      if (
        batchOperation[field] &&
        (isNaN(batchOperation[field]) || !reg.test(batchOperation[field]))
      ) {
        ElMessage({
          type: "warning",
          message: message,
        });
        return;
      }
    }

    if (batchOperation.spec) {
      // 设置指定规格
      if (batchOperation.price)
        goodsSkuData[batchOperation.spec].price = batchOperation.price;
      if (batchOperation.market_price)
        goodsSkuData[batchOperation.spec].market_price =
          batchOperation.market_price;
      if (batchOperation.cost_price)
        goodsSkuData[batchOperation.spec].cost_price =
          batchOperation.cost_price;
      if (batchOperation.stock)
        goodsSkuData[batchOperation.spec].stock = batchOperation.stock;

      for (let field in appendRefreshGoodsSkuData) {
        if (batchOperation[field])
          goodsSkuData[batchOperation.spec][field] = batchOperation[field];
      }

      if (batchOperation.sku_no)
        goodsSkuData[batchOperation.spec].sku_no = batchOperation.sku_no;
    } else {
      // 设置全部规格
      for (const key in goodsSkuData) {
        if (batchOperation.price)
          goodsSkuData[key].price = batchOperation.price;
        if (batchOperation.market_price)
          goodsSkuData[key].market_price = batchOperation.market_price;
        if (batchOperation.cost_price)
          goodsSkuData[key].cost_price = batchOperation.cost_price;
        if (batchOperation.stock)
          goodsSkuData[key].stock = batchOperation.stock;

        for (let field in appendRefreshGoodsSkuData) {
          if (batchOperation[field])
            goodsSkuData[key][field] = batchOperation[field];
        }

        if (batchOperation.sku_no)
          goodsSkuData[key].sku_no = batchOperation.sku_no;
      }
    }

    // 保存完清空
    batchOperation.price = "";
    batchOperation.market_price = "";
    batchOperation.cost_price = "";
    batchOperation.stock = "";
    batchOperation.sku_no = "";

    for (let field in appendRefreshGoodsSkuData) {
      batchOperation[field] = "";
    }
  };

  // 正则表达式
  const regExp: any = {
    required: /[\S]+/,
    number: /^\d{0,10}$/,
    digit: /^\d{0,10}(.?\d{0,2})$/,
    special: /^\d{0,10}(.?\d{0,3})$/,
  };

  // 表单验证规则
  const formRules = computed(() => {
    let rules = {
      goods_name: [
        {
          required: true,
          trigger: "blur",
          validator: (rule: any, value: any, callback: any) => {
            if (value === "") {
              callback(new Error(t("goodsNamePlaceholder")));
            }
            if (value.length > 60) {
              callback(new Error(t("goodsNameMaxLengthTips")));
            } else {
              callback();
            }
          },
        },
      ],
      sub_title: [
        {
          trigger: "blur",
          validator: (rule: any, value: any, callback: any) => {
            if (value.length > 80) {
              callback(new Error(t("subTitleMaxLengthTips")));
            } else {
              callback();
            }
          },
        },
      ],
      goods_image: [
        {
          required: true,
          message: t("goodsImagePlaceholder"),
          trigger: "blur",
        },
      ],
      goods_category: [
        {
          required: true,
          message: t("goodsCategoryPlaceholder"),
          trigger: "blur",
        },
      ],
      sort: [
        {
          trigger: "blur",
          validator: (rule: any, value: any, callback: any) => {
            if (isNaN(value) || !regExp.number.test(value)) {
              callback(new Error(t("sortTips")));
            } else {
              callback();
            }
          },
        },
      ],
      // unit: [
      //     {required: true, message: t('unitPlaceholder'), trigger: 'blur'}
      // ],
      // 单规格
      price: [
        {
          trigger: "blur",
          validator: (rule: any, value: any, callback: any) => {
            if (formData.spec_type == "single") {
              if (value === "") {
                callback(new Error(t("pricePlaceholder")));
              } else if (isNaN(value) || !regExp.digit.test(value)) {
                callback(new Error(t("priceTips")));
              } else if (value < 0) {
                callback(new Error(t("priceNotZeroTips")));
              } else {
                callback();
              }
            } else {
              callback();
            }
          },
        },
      ],
      market_price: [
        {
          trigger: "blur",
          validator: (rule: any, value: any, callback: any) => {
            if (formData.spec_type == "single") {
              if (isNaN(value) || !regExp.digit.test(value)) {
                callback(new Error(t("marketPriceTips")));
              } else if (value < 0) {
                callback(new Error(t("marketPriceNotZeroTips")));
              } else {
                callback();
              }
            } else {
              callback();
            }
          },
        },
      ],
      cost_price: [
        {
          trigger: "blur",
          validator: (rule: any, value: any, callback: any) => {
            if (formData.spec_type == "single") {
              if (isNaN(value) || !regExp.digit.test(value)) {
                callback(new Error(t("costPriceTips")));
              } else if (value < 0) {
                callback(new Error(t("costPriceNotZeroTips")));
              } else {
                callback();
              }
            } else {
              callback();
            }
          },
        },
      ],
      stock: [
        {
          trigger: "blur",
          validator: (rule: any, value: any, callback: any) => {
            if (formData.spec_type == "single") {
              if (value === "") {
                callback(new Error(t("stockPlaceholder")));
              } else if (isNaN(value) || !regExp.number.test(value)) {
                callback(new Error(t("stockTips")));
              } else if (value < 0) {
                callback(new Error(t("stockNotZeroTips")));
              } else {
                callback();
              }
            } else {
              callback();
            }
          },
        },
      ],
      virtual_sale_num: [
        {
          trigger: "blur",
          validator: (rule: any, value: any, callback: any) => {
            if (formData.spec_type == "single") {
              if (isNaN(value) || !regExp.number.test(value)) {
                callback(new Error(t("virtualSaleNumTips")));
              } else if (value < 0) {
                callback(new Error(t("virtualSaleNumNotZeroTips")));
              } else {
                callback();
              }
            } else {
              callback();
            }
          },
        },
      ],
      // 多规格
      spec_type: [
        {
          trigger: "blur",
          validator: (rule: any, value: any, callback: any) => {
            if (formData.spec_type == "multi") {
              if (Object.keys(goodsSkuData).length == 0) {
                callback(new Error(t("pleaseEditSpecPlaceholder")));
              }
            }
            callback();
          },
        },
      ],
      goods_desc: [
        {
          required: true,
          trigger: ["blur", "change"],
          validator: (rule: any, value: any, callback: any) => {
            if (value === "") {
              callback(new Error(t("goodsDescPlaceholder")));
            } else if (value.length < 5 || value.length > 50000) {
              callback(new Error(t("goodsDescMaxTips")));
              return false;
            } else {
              callback();
            }
          },
        },
      ],
    };

    if (getFormRules) {
      Object.assign(rules, getFormRules(formData, regExp));
    }

    return rules;
  });

  // 多规格，销售价 验证规则
  const skuPriceRules = () => {
    return [
      {
        trigger: "blur",
        validator: (rule: any, value: any, callback: any) => {
          if (formData.spec_type == "multi") {
            if (value.length == 0) {
              callback(t("pricePlaceholder"));
            } else if (isNaN(value) || !regExp.digit.test(value)) {
              callback(t("priceTips"));
            } else if (value < 0) {
              callback(t("priceNotZeroTips"));
            } else {
              callback();
            }
          } else {
            callback();
          }
        },
      },
    ];
  };

  // 多规格，划线价 验证规则
  const skuMarketPriceRules = () => {
    return [
      {
        trigger: "blur",
        validator: (rule: any, value: any, callback: any) => {
          if (formData.spec_type == "multi") {
            if (isNaN(value) || !regExp.digit.test(value)) {
              callback(t("marketPriceTips"));
            } else if (value < 0) {
              callback(t("marketPriceNotZeroTips"));
            } else {
              callback();
            }
          } else {
            callback();
          }
        },
      },
    ];
  };

  // 多规格，成本价 验证规则
  const skuCostPriceRules = () => {
    return [
      {
        trigger: "blur",
        validator: (rule: any, value: any, callback: any) => {
          if (formData.spec_type == "multi") {
            if (isNaN(value) || !regExp.digit.test(value)) {
              callback(t("costPriceTips"));
            } else if (value < 0) {
              callback(t("costPriceNotZeroTips"));
            } else {
              callback();
            }
          } else {
            callback();
          }
        },
      },
    ];
  };

  // 多规格，库存 验证规则
  const skuStockRules = () => {
    return [
      {
        trigger: "blur",
        validator: (rule: any, value: any, callback: any) => {
          if (formData.spec_type == "multi") {
            if (value.length == 0) {
              callback(t("stockPlaceholder"));
            } else if (isNaN(value) || !regExp.number.test(value)) {
              callback(t("stockTips"));
            } else if (value < 0) {
              callback(t("stockNotZeroTips"));
            } else {
              callback();
            }
          } else {
            callback();
          }
        },
      },
    ];
  };

  const verify = (callback: any) => {
    let formRef = [
      {
        key: "basic",
        verify: false,
        ref: formRefArr.basicFormRef,
      },
      {
        key: "price_stock",
        verify: false,
        ref: formRefArr.priceStockFormRef,
      },
      {
        key: "price_stock",
        verify: false,
        ref: formRefArr.skuFormRef,
      },
    ];
    formRef = formRef.concat(verifyArr);

    // 调整验证顺序 -- 详情验证
    let obj = {
      key: "detail",
      verify: false,
      ref: formRefArr.detailFormRef,
    };
    formRef.push(obj);

    formRef.forEach((el: any, index) => {
      el.ref.validate((valid: any) => {
        el.verify = valid;
      });
    });

    if (formData.spec_type == "multi") {
      let specVerify = true;
      let repeatSpecNameArr: any = [];
      let repeatSpecValueNameArr: any = [];
      for (let i = 0; i < goodsSpecFormat.length; i++) {
        const spec = goodsSpecFormat[i];
        if (Test.require(spec.spec_name)) {
          specVerify = false;
          ElMessage({ type: "warning", message: `${t("specNameRequire")}` });
          break;
        }
        if (repeatSpecNameArr.indexOf(spec.spec_name) > -1) {
          specVerify = false;
          ElMessage({ type: "warning", message: `${t("specNameRepeat")}` });
          break;
        } else {
          repeatSpecNameArr.push(spec.spec_name);
        }

        if (spec.values.length) {
          for (let v = 0; v < spec.values.length; v++) {
            const value = spec.values[v];
            if (Test.require(value.spec_value_name)) {
              specVerify = false;
              ElMessage({
                type: "warning",
                message: `${t("specValueRequire")}`,
              });
              break;
            }

            if (repeatSpecValueNameArr.indexOf(value.spec_value_name) > -1) {
              specVerify = false;
              ElMessage({
                type: "warning",
                message: `${t("specValueNameRepeat")}`,
              });
              break;
            } else {
              repeatSpecValueNameArr.push(value.spec_value_name);
            }
          }
        } else {
          specVerify = false;
          ElMessage({ type: "warning", message: `${t("specValueRequire")}` });
        }

        if (!specVerify) break;
      }

      if (!specVerify) {
        activeName.value = "price_stock";
        return;
      }

      let isHasDefaultSpec = false; // 是否存在默认规格
      for (const k in goodsSkuData) {
        if (goodsSkuData[k].is_default) {
          isHasDefaultSpec = true;
        }
      }

      if (!isHasDefaultSpec) {
        activeName.value = "price_stock";
        ElMessage({ type: "warning", message: `${t("lackDefaultSpec")}` });
        return;
      }
    }

    setTimeout(() => {
      let verify = true;
      // 检测验证，并且定位tab页面
      for (let i = 0; i < formRef.length; i++) {
        if (formRef[i].verify == false) {
          activeName.value = formRef[i].key;
          verify = false;
          break;
        }
      }
      if (verify && callback) callback();
    }, 10);
  };

  // 保存数据
  const save = (callback: any = null) => {
    verify(() => {
      if (repeat.value) return;
      repeat.value = true;

      const api = formData.goods_id ? editApi : addApi;
      const data = cloneDeep(formData);

      if (data.spec_type == "multi") {
        data.stock = 0;
        for (const k in goodsSkuData) {
          if (goodsSkuData[k].stock)
            data.stock += parseInt(goodsSkuData[k].stock);
        }
      }

      const goodsCategory: any = [];
      data.goods_category.forEach((item: any) => {
        if (typeof item == "object") {
          item.forEach((second: any) => {
            if (goodsCategory.indexOf(second) == -1) {
              goodsCategory.push(second);
            }
          });
        } else {
          if (goodsCategory.indexOf(item) == -1) {
            goodsCategory.push(item);
          }
        }
      });

      data.goods_category = goodsCategory;
      data.goods_sku_data = goodsSkuData;
      data.goods_spec_format = goodsSpecFormat;

      /***** 商品参数-start ****/
      data.attr_format = [];
      let attrFormat: any = deepClone(attrTableData);
      attrFormat.forEach((item: any, index: any) => {
        if (
          (item.attr_value_name && item.select_child_val) ||
          item.attr_value_id > 0
        ) {
          let obj: any = {};
          obj.attr_value_id = item.attr_value_id;
          obj.attr_value_name = item.attr_value_name;
          obj.type = item.type;
          obj.sort = item.sort;
          obj.attr_child_value_id = item.select_child_name;
          obj.attr_child_value_name = item.select_child_val;
          obj.attr_child_value_color = item.select_child_color;

          data.attr_format.push(obj);
        }
      });
      data.attr_format.sort((a: any, b: any) => {
        return b.sort - a.sort;
      });
      data.attr_format = JSON.stringify(data.attr_format);
      /***** 商品参数-end ****/

      if (callback) {
        Object.assign(data, callback(data));
      }

      api(data)
        .then((res: any) => {
          repeat.value = false;
          router.push("/phone_shop/goods/list");
        })
        .catch(() => {
          repeat.value = false;
        });
    });
  };

  const back = () => {
    router.push("/phone_shop/goods/list");
  };

  const filterSpecial = (event: any) => {
    event.target.value = event.target.value.replace(
      /[^\u4e00-\u9fa5a-zA-Z0-9\s]/g,
      ""
    );
    event.target.value = event.target.value.replace(
      /[`~!@#$%^&*()_\-+=<>?:"{}|,.\/;'\\[\]·~！@#￥%……&*（）——\-+={}|《》？：“”【】、；‘’，。、]/g,
      ""
    );
  };

  const handleBlur = (e: any) => {
    formRefArr.detailFormRef.value?.validateField("goods_desc");
  };

  /******************** 商品参数-start ***************************/
  const attrOptions = reactive([]);
  const getAttrListFn = () => {
    getAttrList({}).then((res) => {
      attrOptions.splice(0, attrOptions.length, ...res.data);
    });
  };

  getAttrListFn();

  let attrLoad = false;
  const attrTableData: any = reactive([]);
  const editCallFn = ref(false); //用于编辑时，只调用一次的变量标识

  const attrChange = (attr_id: any = 0) => {
    if (attrLoad || !attr_id) return false; // !attr_id 防止多次进入
    attrLoad = true;

    let id = attr_id == -1 ? 0 : attr_id; // attr_id = -1 表示清空商品参数模版
    getAttrInfo(id).then((res) => {
      let data =
        Object.keys(res.data).length && res.data.attr_value_format
          ? JSON.parse(res.data.attr_value_format)
          : [];
      let temporaryData: any = deepClone(attrTableData);
      // 切换商品参数模版把之前的模版清除
      temporaryData = temporaryData.filter(
        (item: any) => item.attr_value_id <= 0
      );

      // 添加
      data.filter((item: any) => {
        item.select_child_name = item.type == "checkbox" ? [] : "";
        item.select_child_val = item.type == "checkbox" ? [] : "";
      });

      temporaryData = temporaryData.concat(data);
      attrTableData.splice(0, attrTableData.length, ...temporaryData);
      attrLoad = false;

      if (editCallFn.value) {
        let formAttrIdArray = formData.attr_format.map(
          (obj: any) => obj.attr_value_id
        );
        let temporaryAttrData: any = deepClone(attrTableData);

        temporaryAttrData = temporaryAttrData.filter(
          (item: any) => formAttrIdArray.indexOf(item.attr_value_id) > -1
        );

        formData.attr_format.forEach((item: any, index: any) => {
          temporaryAttrData.forEach(
            (attrItem: any, attrIndex: any, attrArray: any) => {
              if (attrItem.attr_value_id == item.attr_value_id) {
                attrArray[attrIndex].select_child_name =
                  item.attr_child_value_id;
                attrArray[attrIndex].select_child_val =
                  item.attr_child_value_name;
                attrArray[attrIndex].sort = item.sort;
                // 添加上颜色
                attrArray[attrIndex].select_child_color = item.color;
              }
            }
          );
        });
        let attrIdArray = temporaryAttrData.map(
          (obj: any) => obj.attr_value_id
        );
        formData.attr_format.forEach((item: any, index: any) => {
          if (
            attrIdArray.indexOf(item.attr_value_id) == -1 &&
            item.type == "text"
          ) {
            let obj: any = {};
            obj.attr_value_id = item.attr_value_id;
            obj.attr_value_name = item.attr_value_name;
            obj.sort = item.sort;
            obj.type = "text";
            obj.select_child_name = item.attr_child_value_id;
            obj.select_child_val = item.attr_child_value_name;
            temporaryAttrData.push(obj);
          }
        });

        temporaryAttrData.sort((a: any, b: any) => {
          return b.sort - a.sort;
        });
        console.log(temporaryAttrData);

        attrTableData.splice(0, attrTableData.length, ...temporaryAttrData);

        editCallFn.value = false;
      }
    });
  };

  // 添加商品参数
  const addAttr = () => {
    let obj: any = {
      attr_value_id: "",
      attr_value_name: "",
      child: {
        id: 1,
        name: "",
      },
      sort: "",
      type: "text",
      select_child_name: "",
      select_child_val: "",
      select_child_color: "",
    };
    obj.attr_value_id = -Math.floor(
      new Date().getSeconds() + Math.floor(new Date().getMilliseconds())
    );
    obj.sort = attrTableData.length + 1;
    attrTableData.push(obj);
  };

  // 删除商品参数
  const delAttr = (index: any) => {
    attrTableData.splice(index, 1);
  };

  // 商品参数单选监听
  const attrRadioChange = (index: any, data: any) => {
    attrTableData.forEach((item: any, index: any, array: any) => {
      if (item.type == "radio") {
        item.child.forEach((childItem: any, childIndex: any) => {
          if (childItem.id == data) {
            array[index].select_child_name = childItem.id;
            array[index].select_child_val = childItem.name;
            array[index].select_child_color = childItem.color;
          }
        });
      }
      console.log(item);

      return item;
    });
  };

  // 商品参数多选监听
  const attrCheckboxChange = (index: any, data: any) => {
    attrTableData.forEach((item: any, index: any, array: any) => {
      if (item.type == "checkbox") {
        array[index].select_child_val = [];
        item.child.forEach((childItem: any, childIndex: any) => {
          if (data.indexOf(childItem.id) > -1) {
            array[index].select_child_val.push({
              name: childItem.name,
              color: childItem.color || "#000",
            });
          }
        });
      }
    });
  };

  // 监听price变化，自动计算market_price
  watch(
    () => formData.market_price,
    (newPrice) => {
      if (!newPrice || !recyclerPriceConfig.value) return;
      const price = parseFloat(newPrice);
      // 先判断加价的类型 在根据类型进行计算
      const priceType = recyclerPriceConfig.value?.price_type;
      if (priceType == 1) {
        // 证明是通用型 直接 使用 member_markup 进行计算
        const markup = parseFloat(recyclerPriceConfig.value?.member_markup);
        // 如果markup 为假 则同行价等于零售价
        if (!markup) {
          formData.price = price.toFixed(2);
        } else {
          formData.price = (price + markup).toFixed(2);
        }
        return;
      }
      // 证明是区间型 需要根据价格区间进行计算

      const ranges = recyclerPriceConfig.value.price_ranges;

      // 查找匹配的价格区间
      const matchedRange = ranges.find((range: PriceRange) => {
        const minPrice = parseFloat(range.min_price);
        const maxPrice = parseFloat(range.max_price);
        return price >= minPrice && price <= maxPrice;
      });

      // 如果找到匹配的区间，计算market_price
      if (matchedRange) {
        const markup = parseFloat(matchedRange.member_markup);
        formData.price = (price + markup).toFixed(2);
      }
      // 如果找不到匹配的区间，则price等于market_price
      if (!matchedRange) {
        formData.price = price.toFixed(2);
      }
    },
    { immediate: true }
  );

  // 监听商品分类变化
  watchEffect(() => {
    if (formData.goods_category && formData.goods_category.length > 0) {
      console.log("商品分类发生变化:", formData.goods_category);
      categoryHandleChange(formData.goods_category);
    }
  });

  return {
    formData,

    activeName,
    tabHandleClick,

    goodsType,
    changeGoodsType,

    goodsCategoryOptions,
    goodsCategoryProps,
    categoryHandleChange,
    toGoodsCategoryEvent,
    refreshGoodsCategory,

    brandOptions,
    toGoodsBrandEvent,
    refreshGoodsBrand,

    posterOptions,
    toPosterEvent,
    refreshGoodsPoster,

    labelOptions,
    toGoodsLabelEvent,
    refreshGoodsLabel,

    memoryOptions,
    toGoodsMemoryEvent,
    refreshGoodsMemory,

    serviceOptions,
    toGoodsServiceEvent,
    refreshGoodsService,

    supplierOptions,
    toSupplierEvent,
    refreshSupplier,

    goodsSpecFormat,
    goodsSkuData,
    specData,

    generateRandom,

    isDisabledPrice,
    addSpec,
    deleteSpec,
    addSpecValue,
    specValueNameInputListener,
    deleteSpecValue,
    specValueIsDefaultChangeListener,
    specStockSum,

    batchOperation,
    saveBatch,

    regExp,

    formRules,
    skuPriceRules,
    skuMarketPriceRules,
    skuCostPriceRules,
    skuStockRules,

    handleGoodsInit,
    save,
    back,
    filterSpecial,
    handleBlur,

    attrOptions,
    attrChange,
    getAttrListFn,
    attrTableData,
    addAttr,
    delAttr,
    attrRadioChange,
    attrCheckboxChange,
  };
}
