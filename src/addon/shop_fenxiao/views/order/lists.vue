<template>
    <div class="main-container">
        <el-card class="card !border-none" shadow="never">

            <div class="flex justify-between items-center">
                <span class="text-page-title">{{ pageName }}</span>
            </div>

            <el-card class="card my-[10px] !border-none table-search-wrap" shadow="never">
                <el-form :inline="true" :model="orderTable.searchParam" ref="searchFormRef">
                    <!-- <el-form-item :label="t('orderInfo')" prop='search_name'>
                        <el-input v-model.trim="orderTable.searchParam.search_name" />
                    </el-form-item> -->
                    <el-form-item :label="t('createTime')" prop="create_time">
                        <el-date-picker v-model="orderTable.searchParam.create_time" type="datetimerange"
                            value-format="YYYY-MM-DD HH:mm:ss" :start-placeholder="t('startDate')"
                            :end-placeholder="t('endDate')" />
                    </el-form-item>
                    <el-form-item :label="t('orderStatus')" prop="is_settlement">
                        <el-select v-model="orderTable.searchParam.is_settlement" :placeholder="t('orderStatusPlaceholder')" clearable>
                            <el-option label="已结算" :value="1" />
                            <el-option label="待结算" :value="0" />
                        </el-select>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="loadOrderList()">{{ t('search') }}</el-button>
                        <el-button @click="resetForm(searchFormRef)">{{ t('reset') }}</el-button>
                    </el-form-item>
                </el-form>
            </el-card>
            <div>
                <el-table size="large" class="table-top">
                    <el-table-column :label="t('orderGoods')" width="300" />
                    <el-table-column :label="t('goodsPriceNumber')" min-width="140" />
                    <el-table-column :label="t('refundStatus')" min-width="100" />
                    <el-table-column :label="t('goodsFenxiaoPriceNumber')" min-width="120" />
                    <el-table-column :label="t('buyInfo')" min-width="120" />
                    <el-table-column :label="t('fenxiaoLevel')" min-width="70" />
                    <el-table-column :label="t('fenxiaoName')" min-width="120" />
                    <el-table-column :label="t('calculateType')" min-width="130" />
                    <el-table-column :label="t('goodsFenxiaoPrice')" min-width="120" align="right" />
                    <el-table-column :label="t('orderStatus')" min-width="120" />
                    <el-table-column :label="t('operation')" fixed="right" align="right" min-width="120" />
                </el-table>
                <div class="table-body min-h-[150px]" v-loading="orderTable.loading">
                    <div v-if="!orderTable.loading">
                        <template v-if="orderTable.data.length">
                            <div v-for="(item, index) in orderTable.data" :key="index">
                                <div class="flex items-center justify-between h-[35px] mt-[10px] px-3 text-[12px] text-[#666] border-solid border-b-[1px] border-[var(--el-border-color)] bg-[var(--el-color-info-light-9)]">
                                    <div>
                                        <span>{{ t('orderNo') }}：{{ (item as any).order_no }}</span>
                                        <span class="ml-5">{{ t('createTime') }}：{{ (item as any).create_time }}</span>
                                        <!-- <span class="ml-5">{{ t('orderFrom') }}：{{ (item as any).order_form_name }}</span> -->
                                        <span class="ml-5" v-if="item.pay">{{ t('payType') }}：{{ (item as any).pay.type_name }}</span>
                                        <span class="ml-5">{{ t('countPrice') }}：￥{{ item.commission_fenxiao }}</span>
                                    </div>
                                </div>
                                <el-table :data="(item as any).goods_list" size="large" :show-header="false" :span-method="arraySpanMethod" ref="multipleTable">
                                    <el-table-column align="left" width="300">
                                        <template #default="{ row }">
                                            <div class="flex cursor-pointer">
                                                <div class="flex items-center min-w-[50px] mr-[10px]">
                                                    <img class="w-[50px] h-[50px]" v-if="row.goods_image_thumb_mid" :src="img(row.goods_image_thumb_mid)" alt="">
                                                    <img class="w-[50px] h-[50px]" v-else src="" alt="">
                                                </div>
                                                <div class="flex flex-col w-[308px]">
                                                    <p class="multi-hidden text-[14px]">{{ row.goods_name }}</p>
                                                    <span class="text-[12px] text-[#999]">{{ row.sku_name }}</span>
                                                </div>
                                            </div>
                                        </template>
                                    </el-table-column>
                                    <el-table-column min-width="140">
                                        <template #default="{ row }">
                                            <div class="flex flex-col">
                                                <span class="text-[13px]">￥{{ row.goods_money }}</span>
                                                <span class="text-[13px] mt-[5px]">{{ row.num }}{{ t('price') }}</span>
                                            </div>
                                        </template>
                                    </el-table-column>
                                    <el-table-column min-width="100">
                                        <template #default="{ row }">
                                            <span class="text-[13px]">{{row.status != 1 && row.status_name ? row.status_name : '--' }}</span>
                                        </template>
                                    </el-table-column>
                                    <el-table-column min-width="120">
                                        <template #default="{ row }">
                                            <span class="text-[13px]">￥{{ row.order_goods_money }}</span>
                                        </template>
                                    </el-table-column>
                                    <el-table-column min-width="120" class-name="border-0 border-l-[1px] border-solid border-[var(--el-table-border-color)]">
                                        <template #default>
                                            <div class="flex flex-col" v-if="item.shop_order.member">
                                                <span class="text-[12px] text-primary cursor-pointer" @click="memberEvent(item.shop_order.member.member_id)">{{ item.shop_order.member.nickname }}</span>
                                            </div>
                                        </template>
                                    </el-table-column>
                                    <el-table-column min-width="70" class-name="border-0 border-l-[1px] border-solid border-[var(--el-table-border-color)]">
                                        <template #default="{ row }">
                                            <span v-if="row.commission_level">{{ row.commission_level }}级</span>
                                            <span v-else>--</span>
                                        </template>
                                    </el-table-column>
                                    <el-table-column min-width="120">
                                        <template #default="{ row }">
                                            <template v-if="row.member.nickname">
                                                <span v-if="row.member.nickname" :title="row.member.nickname" class="multi-hidden text-primary cursor-pointer" @click="toFenxiaoDetail(row)">{{ row.member.nickname }}</span>
                                                <span v-else :title="row.member.nickname" class="multi-hidden text-primary cursor-pointer" @click="toFenxiaoDetail(row)">{{ row.member.username }}</span>
                                            </template>
                                            <span v-else>--</span>
                                        </template>
                                    </el-table-column>

                                    <el-table-column min-width="150">
                                        <template #default="{ row }">
                                            <span v-if="row.calculate_type">
                                                <span>{{ row.calculate_type_name }}</span>
                                                <span>：</span>
                                                <span>{{ row.calculate_type != 1 ? '￥' + row.commission : row.commission_rate + '%'}}</span>
                                            </span>
                                        </template>
                                    </el-table-column>
                                    <el-table-column min-width="120" align="right">
                                        <template #default="{ row }">
                                            <span v-if="row.commission">￥{{ row.commission || '0.00' }}</span>
                                        </template>
                                    </el-table-column>
                                    <el-table-column min-width="120" class-name="border-0 border-l-[1px] border-solid border-[var(--el-table-border-color)]">
                                        <template #default="{ row }">
                                            <span>{{ row.is_settlement ? '已结算' : '待结算' }}</span>
                                        </template>
                                    </el-table-column>
                                    <el-table-column align="right" min-width="120">
                                        <template #default="{ row }">
                                            <el-button type="primary" link @click="detailEvent(row)">{{ t('orderDetail') }}</el-button>
                                            <!-- <el-button type="primary" link>{{ t('editAddress') }}</el-button> -->
                                            <!-- <el-button type="primary" link  v-if="row.is_settlement != 1">{{t('settlement') }}</el-button> -->
                                        </template>
                                    </el-table-column>
                                </el-table>
                                <div v-if="item.shop_remark" class="text-[14px] h-[30px] leading-[30px] px-3 bg-[#fff0e5] text-[#ff7f5b]">
                                    <span class="mr-[5px]">{{ t('notes') }}：</span>
                                    <span>{{ item.shop_remark }}</span>
                                </div>
                            </div>
                        </template>
                        <el-empty v-else :image-size="1" :description="t('emptyData')" />
                    </div>
                </div>
                <div class="mt-[16px] flex justify-end">
                    <el-pagination v-model:current-page="orderTable.page" v-model:page-size="orderTable.limit"
                        layout="total, sizes, prev, pager, next, jumper" :total="orderTable.total"
                        @size-change="loadOrderList()" @current-change="loadOrderList" />
                </div>
            </div>
        </el-card>
    </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { t } from '@/lang'
import { getOrderStatus, orderFinish, getOrderPayType, getOrderFrom } from '@/addon/shop/api/order'
import { getFenxiaoOrderList } from '@/addon/shop_fenxiao/api/order'
import { img } from '@/utils/common'
import { ElMessageBox, FormInstance } from 'element-plus'
import { useRouter, useRoute } from 'vue-router'
import { cloneDeep } from 'lodash-es'

const route = useRoute()
const router = useRouter()
const pageName = route.meta.title

const statusData = ref([])
const payTypeData = ref<any[]>([])
const orderFromData = ref([])
const setFormData = async () => {
    statusData.value = await (await getOrderStatus()).data
    payTypeData.value = await (await getOrderPayType()).data
    orderFromData.value = await (await getOrderFrom()).data
}
setFormData()
interface OrderTable {
    page: number
    limit: number
    total: number
    loading: boolean
    data: any[]
    searchParam: any
}
const orderTable = reactive<OrderTable>({
    page: 1,
    limit: 10,
    total: 0,
    loading: true,
    data: [],
    searchParam: {
        // search_name: '',
        is_settlement: '',
        create_time: [],
    }
})

const searchFormRef = ref<FormInstance>()

/**
 * 获取订单列表
 */
const loadOrderList = (page: number = 1) => {
    orderTable.loading = true
    orderTable.page = page

    getFenxiaoOrderList({
        page: orderTable.page,
        limit: orderTable.limit,
        ...orderTable.searchParam
    }).then((res: any) => {
        orderTable.loading = false
        orderTable.data = [];
        res.data.data.forEach((el: any) => {
            let rowspan = 0
            el.goods_list = []
            el.shop_order.order_goods.forEach((v: any,) => {
                rowspan += v.fenxiao_order_goods.length; //循环商品时累加计算单个订单的操作列需要合并的行数
                //循环组装商品及对应的分销信息，从上下级关系改为以分销数据为主同级数据
                v.fenxiao_order_goods.forEach((item: any, index: number) => {
                    let obj = cloneDeep(Object.assign(v, item)) //深拷贝数据防止出现其它数据出现联动变更
                    delete obj.fenxiao_order_goods
                    obj.goodsRowspan = index ? 0 : v.fenxiao_order_goods.length //每次在循环商品及对应分销信息时在同种商品的第一条记录该分销信息长度用于跨行合并商品信息
                    obj.rowspan = 0
                    el.goods_list.push(obj)

                })

            })
            el.goods_list[0].rowspan = rowspan; //单个订单的操作列需要合并的行数赋值到单个订单数组的第一条
            orderTable.data.push(el);
        });
        orderTable.total = res.data.total
    }).catch(() => {
        orderTable.loading = false
    })
}
loadOrderList()

// 查看分销商详情
const toFenxiaoDetail = (row:any) => {
    const routeUrl = router.resolve({
        path: '/shop_fenxiao/detail',
        query: { id: row.fenxiao_member_id }
    })
    window.open(routeUrl.href, '_blank')
}

// 合并表格行
const arraySpanMethod = ({
    row,
    column,
    rowIndex,
    columnIndex
}) => {

    if (columnIndex <= 2) {
        return [row.goodsRowspan, row.goodsRowspan ? 1 : 0]
    } else if (columnIndex == 3 || (columnIndex > 7 && columnIndex != 8)) {
        return [row.rowspan, row.rowspan ? 1 : 0]
    } else {
        return [1, 1]
    }
}

// 订单详情
const detailEvent = (data: any) => {
    const routeData = router.resolve('/shop/order/detail?order_id=' + data.order_id)
    window.open(routeData.href, '_blank')
}

const memberEvent = (id: number) => {
    const routeUrl = router.resolve({
        path: '/member/detail',
        query: { id }
    })
    window.open(routeUrl.href, '_blank')
}
// 订单完成
const finish = (data: any) => {
    ElMessageBox.confirm(t('orderFinishTips'), t('warning'),
        {
            confirmButtonText: t('confirm'),
            cancelButtonText: t('cancel'),
            type: 'warning'
        }
    ).then(() => {
        orderFinish(data.order_id).then(() => {
            loadOrderList()
        })
    })
}

const resetForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.resetFields()
    loadOrderList()
}
</script>

<style lang="scss" scoped>
    .table-top :deep(.el-table__body-wrapper) {
        display: none;
    }

    /* 多行超出隐藏 */
    .multi-hidden {
        word-break: break-all;
        text-overflow: ellipsis;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }
</style>
