<template>
    <div class="main-container">
        <el-card class="box-card !border-none" shadow="never">

            <div class="flex justify-between items-center">
                <span class="text-page-title">{{ pageName }}</span>
            </div>

            <el-card class="box-card !border-none my-[10px] table-search-wrap" shadow="never">
                <el-form :inline="true" :model="refundTable.searchParam" ref="searchFormRef">
                    <el-form-item :label="t('refundNo')" prop="refund_no">
                        <el-input v-model="refundTable.searchParam.refund_no" :placeholder="t('refundNoPlaceholder')" />
                    </el-form-item>
                    <el-form-item :label="t('refundStatus')" prop="status">
                        <el-select v-model="refundTable.searchParam.status" clearable class="input-width">
                            <el-option :label="t('selectPlaceholder')" value="" />
                            <el-option :label="item.name" :value="key" v-for="(item, key) in orderStatus" :key="key" />
                        </el-select>
                    </el-form-item>
                    <el-form-item :label="t('createTime')" prop="create_time">
                        <el-date-picker v-model="refundTable.searchParam.create_time" type="datetimerange"
                            value-format="YYYY-MM-DD HH:mm:ss" :start-placeholder="t('startDate')"
                            :end-placeholder="t('endDate')" />
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="loadRefundList()">{{ t('search') }}</el-button>
                        <el-button @click="searchFormRef?.resetFields()">{{ t('reset') }}</el-button>
                    </el-form-item>
                </el-form>
            </el-card>

            <div class="mt-[10px]">
                <el-table :data="refundTable.data" size="large" v-loading="refundTable.loading">
                    <template #empty>
                        <span>{{ !refundTable.loading ? t('emptyData') : '' }}</span>
                    </template>

                    <el-table-column prop="refund_no" :label="t('refundNo')" align="left" min-width="300" :show-overflow-tooltip="true" />
                    <el-table-column :label="t('orderMoney')" min-width="100" align="right">
                        <template #default="{ row }">
                            {{ row.money }}
                        </template>
                    </el-table-column>
                    <el-table-column :show-overflow-tooltip="true" :label="t('memberInfo')" align="left" min-width="200">
                        <template #default="{ row }">
                            <div class="flex items-center cursor-pointer " @click="toMember(row.member.member_id)">
                                <img class="w-[50px] h-[50px] mr-[10px]" v-if="row.member.headimg" :src="img(row.member.headimg)" alt="">
                                <img class="w-[50px] h-[50px] mr-[10px] rounded-full" v-else src="@/app/assets/images/member_head.png" alt="">
                                <div class="flex flex flex-col">
                                    <span>{{ row.member.nickname || '' }}</span>
                                    <span>{{ row.member.mobile || '' }}</span>
                                </div>
                            </div>
                        </template>
                    </el-table-column>

                    <el-table-column :label="t('createTime')" min-width="180" align="center">
                        <template #default="{ row }">
                            {{ row.create_time || '' }}
                        </template>
                    </el-table-column>
                    <el-table-column prop="status_name" :label="t('refundStatus')" min-width="180" align="center"></el-table-column>

                    <el-table-column :label="t('operation')" fixed="right" align="right" width="250">
                        <template #default="{ row }">
                            <el-button type="primary" link @click="infoEvent(row)">{{ t('toOrder') }}</el-button>
                            <template v-if="row.status == 'wait_refund'">
                                <el-button type="primary" link @click="handleConfirm(row)">{{ t('confirmRefund') }}</el-button>
                                <el-button type="primary" link @click="handleRefuse(row)">{{ t('refuseRefund') }}</el-button>
                            </template>
                        </template>
                    </el-table-column>
                </el-table>
                <div class="mt-[16px] flex justify-end">
                    <el-pagination v-model:current-page="refundTable.page" v-model:page-size="refundTable.limit"
                        layout="total, sizes, prev, pager, next, jumper" :total="refundTable.total"
                        @size-change="loadRefundList()" @current-change="loadRefundList" />
                </div>
            </div>

        </el-card>
    </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { t } from '@/lang'
import { getRefundList, getRefundStatus, confirmRefund, refuseRefund } from '@/addon/vipcard/api/vipcard'
import { img } from '@/utils/common'
import { FormInstance, ElMessageBox } from 'element-plus'
import { useRouter, useRoute } from 'vue-router'
import { AnyObject } from '@/types/global'

const route = useRoute()
const router = useRouter()
const pageName = route.meta.title

const refundTable = reactive({
    page: 1,
    limit: 10,
    total: 0,
    loading: true,
    data: [],
    searchParam: {
        refund_no: '',
        status: '',
        create_time: []
    }
})

const searchFormRef = ref<FormInstance>()

/**
 * 获取退款记录列表
 */
const loadRefundList = (page: number = 1) => {
    refundTable.loading = true
    refundTable.page = page

    getRefundList({
        page: refundTable.page,
        limit: refundTable.limit,
        ...refundTable.searchParam
    }).then(res => {
        refundTable.loading = false
        refundTable.data = res.data.data
        refundTable.total = res.data.total
    }).catch(() => {
        refundTable.loading = false
    })
}
loadRefundList()

// 获取维权状态
const orderStatus = ref([])
const checkRefundStatus = () => {
    getRefundStatus().then(res => {
        orderStatus.value = res.data
    })
}
checkRefundStatus()

const infoEvent = (info: AnyObject) => {
    const routeUrl = router.resolve({
        path: '/vipcard/order/detail',
        query: { order_id: info.order_id }
    })
    window.open(routeUrl.href, '_blank')
}

const handleConfirm = (info: AnyObject) => {
    ElMessageBox.prompt(t('confirmRefundTips'), t('warning'), {
        message: `<div>
            <div><span>${t('orderPayMoney')}：${info.main_order.pay_money}</span></div>
        </div>`,
        dangerouslyUseHTMLString: true,
        confirmButtonText: t('confirm'),
        cancelButtonText: t('cancel'),
        inputErrorMessage: t('refundMoneyErrorMessage'),
        inputValue: info.main_order.pay_money,
        inputPlaceholder: t('refundMoneyPlaceholder'),
        inputPattern: /^\d+(\.\d+)?$/,
        inputType: 'input'
    }).then(({ value }) => {
        confirmRefund({ refund_id: info.refund_id, money: value })
            .then(() => {
                loadRefundList()
            })
            .catch()
    }).catch(() => {

    })
}

const handleRefuse = (info: AnyObject) => {
    ElMessageBox.prompt(t('refuseReason'), t('warning'), {
        confirmButtonText: t('confirm'),
        cancelButtonText: t('cancel'),
        inputErrorMessage: t('refuseReason'),
        inputPattern: /\S/,
        inputType: 'textarea'
    }).then(({ value }) => {
        refuseRefund({ refund_id: info.refund_id, refuse_reason: value })
            .then(() => {
                loadRefundList()
            })
            .catch()
    }).catch(() => {

    })
}
</script>

<style lang="scss" scoped></style>
