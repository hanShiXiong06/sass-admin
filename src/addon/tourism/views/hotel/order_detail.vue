<template>
    <div class="main-container">
        <div class="detail-head">
            <div class="left" @click="router.push({ path: '/tourism/order/hotel' })">
                <span class="iconfont iconxiangzuojiantou !text-xs"></span>
                <span class="ml-[1px]">{{ t('returnToPreviousPage') }}</span>
            </div>
            <span class="adorn">|</span>
            <span class="right">{{ pageName }}</span>
        </div>
        <el-form :model="formData" label-width="100px" ref="formRef" class="page-form" v-loading="loading">
            <el-card class="box-card !border-none relative" shadow="never" v-if="formData">
                <h3 class="panel-title">{{ t('orderInfo') }}</h3>
                <el-row class="row-bg" justify="space-between">
                    <el-col :span="6">
                        <el-form-item :label="t('orderNo')">
                            <div class="input-width">{{ formData.order_no }}</div>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item :label="t('createTime')">
                            <div class="input-width">{{ formData.create_time || '' }}</div>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item :label="t('orderFromName')">
                            <div class="input-width">{{ formData.order_from_name }}</div>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item :label="t('member')">
                            <div class="input-width">{{ formData.member.nickname }}</div>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item :label="t('mobile')">
                            <div class="input-width">{{ formData.mobile }}</div>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item :label="t('ip')">
                            <div class="input-width">{{ formData.ip }}</div>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item :label="t('orderStatus')">
                            <div class="input-width">{{ formData.order_status_info.name }}</div>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6" v-if="formData.pay_time">
                        <el-form-item :label="t('payTime')">
                            <div class="input-width">{{ formData.pay_time }}</div>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6" v-if="formData.pay_type_name">
                        <el-form-item :label="t('payTypeName')">
                            <div class="input-width">{{ formData.pay_type_name }}</div>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item :label="t('refundStatus')" v-if="formData.refund_status">
                            <div class="input-width">{{ formData.refund_status_name }}</div>
                        </el-form-item>
                    </el-col>
                </el-row>
                <h3 class="panel-title">{{ t('reserveInfo') }}</h3>
                <el-row class="row-bg">
                    <el-col :span="8">
                        <el-form-item :label="t('startDate')">
                            <div class="input-width">{{ formData.start_time }}</div>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item :label="t('endDate')">
                            <div class="input-width">{{ formData.end_time }}</div>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row class="row-bg">
                    <el-col :span="6" v-for="(item, index) in formData.buyer_info" :key="index">
                        <el-form-item :label="formData.buyer_info.length > 1 ? t('room') + (index + 1) : t('occupant')">
                            <div class="input-width">{{ item.name }}</div>
                        </el-form-item>
                    </el-col>
                </el-row>
                <h3 class="panel-title">{{ t('orderDetail') }}</h3>
                <el-table :data="formData.item" size="large">
                    <template #empty>
                        <span>{{ t('emptyData') }}</span>
                    </template>
                    <el-table-column :label="t('roomInfo')" min-width="200" align="left">
                        <template #default="{ row }">
                            <div class="flex">
                                <img class="w-[100px] max-h-[60px] mr-[10px]" v-if="row.goods_image" :src="img(row.goods_image)" />
                                <div>
                                    <p>{{ formData.hotel.hotel_name }}</p>
                                    <p class="text-sm text-gray-400">{{ row.goods_name }}</p>
                                </div>
                            </div>
                        </template>
                    </el-table-column>
                    <el-table-column :label="t('date')" min-width="100" align="center">
                        <template #default="{ row }">
                            {{ row.year }}-{{ row.month }}-{{ row.day }}
                        </template>
                    </el-table-column>
                    <el-table-column prop="goods_money" :label="t('roomMoney')" min-width="50" align="left" />
                    <el-table-column prop="num" :label="t('roomNum')" min-width="50" align="center" />
                </el-table>
                <div class="py-[12px] px-[16px] border-b border-color">
                    <div class="flex width-full justify-end">
                        <div class="text-base">{{ t('orderMoney') }}：</div>
                        <div class="text-base">{{ formData.order_money }}</div>
                    </div>
                    <div class="flex width-full justify-end mt-[5px]">
                        <div class="text-base">{{ t('payMoney') }}：</div>
                        <div class="text-base">{{ formData.pay_money }}</div>
                    </div>
                </div>
                <h3 class="mt-[50px] mb-[20px]">{{ t('operateLog') }}</h3>
                <div style="height: 300px">
                    <div class="flex" v-for="(items, index) in formData.order_log" :key="index">
                        <div class="mr-[20px] min-w-[71px]">
                            <div class="leading-[1] w-full text-[14px] w-[100px] flex justify-end">
                                {{ items.action_time.split(' ')[0] }}</div>
                            <div class="leading-[1] w-full text-[14px]  w-[100px] flex justify-end mt-[5px]">
                                {{ items.action_time.split(' ')[1] }}</div>
                        </div>
                        <div>
                            <div class="w-[16px] h-[16px] flex items-center bg-[#D1EBFF] border-[1px] border-[#0091FF] rounded-[999px]">
                                <div class="w-[8px] h-[8px] mx-auto bg-[#0091FF] rounded-[999px]"></div>
                            </div>
                            <div v-if="index + 1 != formData.order_log.length" class="w-[2px] h-[50px] bg-[#D1EBFF] mx-auto"></div>
                        </div>
                        <span class="leading-[1] ml-[20px] text-[14px]">{{ items.action }}</span>
                    </div>
                </div>
            </el-card>
        </el-form>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { t } from '@/lang'
import type { FormInstance } from 'element-plus'
import { getHotelOrderInfo } from '@/addon/tourism/api/tourism'
import { useRoute, useRouter } from 'vue-router'
import { img } from '@/utils/common'

const route = useRoute()
const router = useRouter()
const pageName = route.meta.title
const orderId: number = parseInt(route.query.order_id as string)
const loading = ref(true)

const formData: Record<string, any> | null = ref(null)

const setFormData = async (orderId: number = 0) => {
    loading.value = true
    formData.value = null
    await getHotelOrderInfo(orderId)
        .then(({ data }) => {
            formData.value = data
        })
        .catch(() => {

        })
    loading.value = false
}
if (orderId) setFormData(orderId)
else loading.value = false

const formRef = ref<FormInstance>()
</script>

<style lang="scss" scoped></style>
