<template>
	<div class="main-container">
		<el-card class="box-card !border-none" shadow="never">
			<div class="flex justify-between items-center mb-[5px]">
				<span class="text-page-title">{{ pageName }}</span>
			</div>
			<div>
				 <el-tag type="success">前端入口路径: /addon/seafox_pay/pages/maidan/index?merchant_id={{merchant_id}}&amount=</el-tag>
			</div>
			<!-- <el-card class="box-card !border-none table-search-wra base-bg !px-[35px]" shadow="never">
				<el-row class="flex">
					<el-col :span="12" class="min-w-[100px]">
						<el-statistic
							:value="maidanStatistics.maidan_money ? Number.parseFloat(maidanStatistics.maidan_money).toFixed(2) : '0.00'">
							<template #title>
								<div class="text-[14px] mb-[9px]">{{ t('totalMaidanMoney') }}</div>
							</template>
						</el-statistic>
					</el-col>
					<el-col :span="12" class="min-w-[100px]">
						<el-statistic
							:value="maidanStatistics.maidan_refund_money ? Number.parseFloat(maidanStatistics.maidan_refund_money).toFixed(2) : '0.00'">
							<template #title>
								<div class="text-[14px] mb-[9px]">{{ t('totalMaidanRefundMoney') }}</div>
							</template>
						</el-statistic>
					</el-col>

				</el-row>
			</el-card> -->

			<el-card class="box-card !border-none mb-[10px] table-search-wrap" shadow="never">
				<el-form :inline="true" :model="orderTableData.searchParam" ref="searchFormRef">
					<el-form-item :label="t('maidanNo')" prop="order_no">
						<el-input v-model="orderTableData.searchParam.order_no" :placeholder="t('maidanNoPlaceholder')" />
					</el-form-item>

					 <el-form-item :label="t('orderFromName')" prop="order_from">
						<el-select v-model="orderTableData.searchParam.order_from" clearable class="input-width">
							<el-option :label="t('selectPlaceholder')" value="" />
							<el-option :label="item" :value="key" v-for="(item, key) in channelList" :key="key" />
						</el-select>
					</el-form-item> 

					<el-form-item :label="t('orderStatus')" prop="order_status">
						<el-select v-model="orderTableData.searchParam.order_status" clearable class="input-width">
							<el-option :label="t('selectPlaceholder')" value="" />
							<el-option :label="item['name']" :value="item['status']" v-for="(item,index) in statusList" :key="index"/>
						</el-select>
					</el-form-item>

					<el-form-item :label="t('createTime')" prop="create_time">
						<el-date-picker v-model="orderTableData.searchParam.create_time" type="datetimerange"
							value-format="YYYY-MM-DD HH:mm:ss" :start-placeholder="t('startDate')"
							:end-placeholder="t('endDate')" />
					</el-form-item>

					<!-- <el-form-item :label="t('maidanMoney')">
						<div class="region-input">
							<el-form-item prop="start_money">
								<input type="text" :placeholder="t('startMoney')" v-model="orderTableData.searchParam.start_money">
							</el-form-item>
							<span class="separator">-</span>
							<el-form-item prop="end_money">
								<input type="text" :placeholder="t('endMoney')" v-model="orderTableData.searchParam.end_money">
							</el-form-item>
						</div>
					</el-form-item>

					<el-form-item :label="t('payTime')">
						<el-date-picker v-model="orderTableData.searchParam.pay_time" type="datetimerange"
							value-format="YYYY-MM-DD HH:mm:ss" :start-placeholder="t('startDate')"
							:end-placeholder="t('endDate')" />
					</el-form-item> -->

					<el-form-item>
						<el-button type="primary" @click="loadOrderList()">{{ t('search') }}</el-button>
						<el-button @click="searchFormRef?.resetFields()">{{ t('reset') }}</el-button>
					</el-form-item>
				</el-form>
			</el-card>

			<div class="mt-[16px]">
				<el-table :data="orderTableData.data" size="large" v-loading="orderTableData.loading">
					<template #empty>
						<span>{{ !orderTableData.loading ? t('emptyData') : '' }}</span>
					</template>

					<el-table-column :show-overflow-tooltip="true" :label="t('member')" align="left" min-width="140">
						<template #default="{ row }">
							<div class="flex items-center cursor-pointer " @click="toMember(row.member.member_id)">
								<img class="w-[50px] h-[50px] mr-[10px]" v-if="row.member.headimg" :src="img(row.member.headimg)" alt="">
                                <img class="w-[50px] h-[50px] rounded-full mr-[10px]" v-else src="@/app/assets/images/member_head.png" alt="">
								<div class="flex flex flex-col">
									<span>{{ row.member.nickname || '' }}</span>
									<span>{{ row.member.mobile || '' }}</span>
								</div>
							</div>
						</template>
					</el-table-column>

					<el-table-column prop="order_no" :show-overflow-tooltip="true" :label="t('maidanNo')" align="center" min-width="140" />

					<el-table-column prop="mer_name" :label="t('mer_name')" align="center" min-width="140" />
					<el-table-column prop="order_money" :label="t('maidanMoney')" align="center" min-width="140" />

					<el-table-column prop="order_from_name" :label="t('orderFromName')" align="center" min-width="140" />

					<el-table-column :label="t('orderStatus')" min-width="120" align="center">
						<template #default="{ row }">
							{{ row.order_status_info.name }}
						</template>
					</el-table-column>

					<el-table-column prop="pay_type_name" :label="t('payTypeName')" align="center" min-width="140" />

					<el-table-column :label="t('createTime')" min-width="180" align="center">
						<template #default="{ row }">
							{{ row.create_time || '' }}
						</template>
					</el-table-column>

					<el-table-column :label="t('payTime')" min-width="180" align="center">
						<template #default="{ row }">
							{{ row.pay_time || '' }}
						</template>
					</el-table-column>
					<!-- <el-table-column :label="t('operation')" fixed="right" align="right" width="130">
						<template #default="{ row }">
							<el-button type="primary" link @click="infoEvent(row)">{{ t('info') }}</el-button>

							<el-button
								v-if="[1, 10].includes(row.order_status_info.status) && row.is_enable_refund && row.refund_status == 0"
								type="primary" link @click="refundFn(row)">{{ t('refundBtn') }}
							</el-button>

							<template v-for="(item, index) in row.order_status_info.action" :key="index">
								<el-button type="primary" link  @click="orderEvent(row, item.class)">{{ item.name }}</el-button>
							</template>
						</template>
					</el-table-column> -->

				</el-table>
				<div class="mt-[16px] flex justify-end">
					<el-pagination v-model:current-page="orderTableData.page" v-model:page-size="orderTableData.limit"
						layout="total, sizes, prev, pager, next, jumper" :total="orderTableData.total"
						@size-change="loadOrderList()" @current-change="loadOrderList" />
				</div>
			</div>
		</el-card>

		<!-- 是否退款 -->
		<el-dialog v-model="refundShowDialog" :title="t('refundBtn')" width="500px" :destroy-on-close="true">
			<p>{{ t('refundContent') }}</p>
			<template #footer>
				<span class="dialog-footer">
					<el-button @click="refundShowDialog = false">{{ t('cancel') }}</el-button>
					<el-button type="primary" @click="confirmRefund" :loading="refundLoading">{{ t('confirm') }}</el-button>
				</span>
			</template>
		</el-dialog>
	</div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { t } from '@/lang'
import {
    getMaidanOrderStatusList,
    getMaidanOrderList,
    getMaidanStat
} from '@/addon/seafox_pay/api/maidan'
import { getChannelType } from '@/app/api/sys'
import { img } from '@/utils/common'
import { useRouter, useRoute } from 'vue-router'
import { AnyObject } from '@/types/global'
import type { FormInstance } from 'element-plus'

const route = useRoute()
const router = useRouter()
const pageName = route.meta.title
const memberId: number = parseInt(route.query.id as string || '0')

const merchant_id: number =  localStorage.getItem('seafoxpay_sid')

const channelList = ref([])
const setChannelList = async () => {
    channelList.value = await (await getChannelType()).data
}
setChannelList()

const orderTableData = reactive({
    page: 1,
    limit: 10,
    total: 0,
    loading: true,
    data: [],
    searchParam: {
        order_no: '',
        order_status: '',
        member_id: memberId,
        create_time: [],
        pay_time: [],
        order_from: '',
        start_money: '',
        end_money: '',
		merchant_id:merchant_id
    }
})

interface MaidanType {
	maidan_money?: string,
	maidan_refund_money?: string
}
const maidanStatistics = ref<MaidanType>({})
const checkMaidanInfo = () => {
    // getMaidanStat({
    //     member_id: memberId
    // }).then(res => {
    //     maidanStatistics.value = res.data
    // })
}
checkMaidanInfo()

const statusList = ref([])

const searchFormRef = ref<FormInstance>()

const setCategoryList = async () => {
    statusList.value = await (await getMaidanOrderStatusList()).data
}
setCategoryList()

const loadOrderList = (page: number = 1) => {
    orderTableData.loading = true
    orderTableData.page = page

    getMaidanOrderList({
        page: orderTableData.page,
        limit: orderTableData.limit,
        ...orderTableData.searchParam
    }).then(res => {
        orderTableData.loading = false
        orderTableData.data = res.data.data
        orderTableData.total = res.data.total
    }).catch(() => {
        orderTableData.loading = false
    })
}
loadOrderList()

/**
 * 订单详情
 * @param data
 */
const infoEvent = (data: any) => {
    router.push(`/maidan/order/detail?order_id=${data.order_id}`)
}

/**
 * 订单操作
 */
const orderEvent = (data: any, type: string) => {

}

/**
 * 退款操作
 */
const refundShowDialog = ref(false)
let refundData: AnyObject | null = null
const refundLoading = ref(false)

const refundFn = (data: AnyObject) => {
    refundShowDialog.value = true
    refundData = data
}

/**
 * 确认退款
 */
const confirmRefund = () => {
    if (refundLoading.value) return
    refundLoading.value = true

    maidanRefund(refundData?.order_id).then(res => {
        refundShowDialog.value = false
        refundLoading.value = false
		loadOrderList()
    }).catch(() => {
        refundLoading.value = false
    })
}

/**
 * 会员详情
 */
const toMember = (memberId: number) => {
    router.push(`/member/detail?id=${memberId}`)
}

</script>

<style lang="scss" scoped></style>
