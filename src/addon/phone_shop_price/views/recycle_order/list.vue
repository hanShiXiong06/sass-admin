<template>
    <div class="recycle-order-list h-full">
        <el-card class="box-card !border-none h-full" shadow="never">
            <!-- 面包屑导航 -->
            <div class="mb-4">
                <el-breadcrumb separator="/">
                    <el-breadcrumb-item :to="{ path: '/phone_shop_price' }">手机回收</el-breadcrumb-item>
                    <el-breadcrumb-item>回收订单列表</el-breadcrumb-item>
                </el-breadcrumb>
            </div>

            <!-- 搜索表单 -->
            <el-form :inline="true" :model="searchForm" class="mb-4">
                <el-form-item label="订单编号">
                    <el-input v-model="searchForm.order_no" placeholder="请输入订单编号" clearable />
                </el-form-item>
                <el-form-item label="寄件人">
                    <el-input v-model="searchForm.send_username" placeholder="请输入寄件人" clearable />
                </el-form-item>
                <el-form-item label="联系电话">
                    <el-input v-model="searchForm.telphone" placeholder="请输入联系电话" clearable />
                </el-form-item>
                <el-form-item label="订单状态">
                    <el-select v-model="searchForm.status" placeholder="请选择状态" clearable>
                        <el-option label="待收货" :value="1" />
                        <el-option label="待质检" :value="2" />
                        <el-option label="质检中" :value="3" />
                        <el-option label="待确认" :value="4" />
                        <el-option label="待打款" :value="5" />
                        <el-option label="已完成" :value="6" />
                        <el-option label="待退货" :value="7" />
                        <el-option label="已寄出" :value="8" />
                        <el-option label="已关闭" :value="9" />
                    </el-select>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="getList(1)">搜索</el-button>
                    <el-button @click="resetSearch">重置</el-button>
                </el-form-item>
            </el-form>

            <!-- 表格区域 -->
            <div class="flex-1 overflow-auto">
                <el-table v-loading="loading" :data="list" style="width: 100%">
                    <!-- 展��行显示设备信息 -->
                    <el-table-column type="expand">
                        <template #default="{ row }">
                            <el-table :data="row.devices || []" border>
                                <el-table-column prop="imei" label="IMEI" width="180" />
                                <el-table-column prop="model" label="型号" width="120" />
                                <el-table-column prop="initial_price" label="预估价格" width="120">
                                    <template #default="{ row: device }">
                                        {{ device.initial_price || 0 }} 元
                                    </template>
                                </el-table-column>
                                <el-table-column prop="final_price" label="最终价格" width="120">
                                    <template #default="{ row: device }">
                                        {{ device.final_price || 0 }} 元
                                    </template>
                                </el-table-column>
                                <el-table-column prop="status" label="状态" width="120">
                                    <template #default="{ row: device }">
                                        <el-tag :type="getDeviceStatusType(device.status)">
                                            {{ getDeviceStatusText(device.status) }}
                                        </el-tag>
                                    </template>
                                </el-table-column>
                                <el-table-column prop="check_result" label="验机结果" min-width="200"
                                    show-overflow-tooltip />
                                <el-table-column label="操作" width="200" fixed="right">
                                    <template #default="{ row: device }">
                                        <div class="el-button-group">
                                            <button class="el-button el-button--primary el-button--link"
                                                @click="editDevice(device, row.id)">
                                                验机/定价
                                            </button>
                                            <button class="el-button el-button--danger el-button--link"
                                                @click="handleDeviceDelete(device)">
                                                删除
                                            </button>
                                        </div>
                                    </template>
                                </el-table-column>
                            </el-table>
                        </template>
                    </el-table-column>

                    <!-- 订单基本信息列 -->
                    <el-table-column prop="order_no" label="订单编号" min-width="180" show-overflow-tooltip />
                    <el-table-column prop="send_username" label="寄件人" width="120" />
                    <el-table-column prop="telphone" label="联系电话" width="120" />
                    <el-table-column label="设备统计" width="200">
                        <template #default="{ row }">
                            <el-tooltip effect="dark" placement="top" :content="`总数量: ${row.device_stats.total}
待验机: ${row.device_stats.pending}
验机中: ${row.device_stats.checking}
已验机: ${row.device_stats.checked}
已完成: ${row.device_stats.completed}
已退货: ${row.device_stats.returned}
总金额: ¥${row.device_stats.total_amount}`">
                                <div class="device-stats">
                                    <div class="stats-row">
                                        <span class="stats-label">总数量:</span>
                                        <span class="stats-value">{{ row.device_stats.total }}</span>
                                    </div>
                                    <div class="stats-row">
                                        <span class="stats-label">总金额:</span>
                                        <span class="stats-value">¥{{ row.device_stats.total_amount }}</span>
                                    </div>
                                </div>
                            </el-tooltip>
                        </template>
                    </el-table-column>
                    <el-table-column prop="status" label="订单状态" width="120">
                        <template #default="{ row }">
                            <el-tag :type="getOrderStatusType(row.status)">
                                {{ getOrderStatusText(row.status) }}
                            </el-tag>
                        </template>
                    </el-table-column>
                    <el-table-column prop="create_at" label="创建时间" width="180">
                        <template #default="{ row }">
                            {{ formatTimestamp(row.create_at) }}
                        </template>
                    </el-table-column>
                    <el-table-column label="操作" width="180" fixed="right">
                        <template #default="{ row }">
                            <el-button-group>
                                <el-button type="primary" link @click="handleEdit(row)">
                                    修改状态
                                </el-button>
                                <el-button type="success" link @click="addDevice(row)">
                                    添加设备
                                </el-button>
                                <el-button type="danger" link @click="handleDelete(row)">
                                    删除
                                </el-button>
                                <el-button v-if="row.status == 4" type="success" link @click="viewPayment(row)">
                                    查看收款
                                </el-button>

                            </el-button-group>
                        </template>
                    </el-table-column>
                </el-table>
            </div>

            <!-- 分页 -->
            <div class="mt-4 flex justify-end">
                <el-pagination v-model:current-page="page" v-model:page-size="limit" :page-sizes="[10, 20, 50, 100]"
                    :total="total" layout="total, sizes, prev, pager, next, jumper" @size-change="handleSizeChange"
                    @current-change="handleCurrentChange" />
            </div>
        </el-card>

        <!-- 修改状态弹窗 -->
        <el-dialog v-model="editVisible" title="修改订单状态" width="400px" destroy-on-close>
            <el-form :model="editForm" label-width="100px">
                <el-form-item label="当前状态">
                    <el-tag :type="getOrderStatusType(editForm.currentStatus)">
                        {{ getOrderStatusText(editForm.currentStatus) }}
                    </el-tag>
                </el-form-item>
                <el-form-item label="目标状态">
                    <el-select v-model="editForm.status" placeholder="请选择状态">
                        <el-option v-for="status in getAvailableNextStatus(editForm.currentStatus)" :key="status"
                            :label="orderStatusMap[status]" :value="status" />
                    </el-select>
                </el-form-item>
            </el-form>
            <template #footer>
                <el-button @click="editVisible = false">取消</el-button>
                <el-button type="primary" @click="submitEdit" :disabled="!editForm.status">确定</el-button>
            </template>
        </el-dialog>

        <!-- 收款信息弹窗 -->
        <el-dialog v-model="paymentVisible" title="收款信息" width="500px" destroy-on-close>
            <el-form :model="paymentForm" label-width="100px">
                <el-form-item label="收款账号">
                    <el-input v-model="paymentForm.account" disabled />
                </el-form-item>
                <el-form-item label="收款方式">
                    <el-input v-model="paymentForm.pay_type" disabled />
                </el-form-item>
                <el-form-item label="收款金额">
                    <el-input v-model="paymentForm.amount" disabled>
                        <template #append>元</template>
                    </el-input>
                </el-form-item>
            </el-form>
            <template #footer>
                <el-button @click="paymentVisible = false">关闭</el-button>
            </template>
        </el-dialog>

        <!-- 设备编辑弹窗 -->
        <el-dialog v-model="deviceEditVisible" title="设备验机结果和定价" width="600px" destroy-on-close>
            <el-form :model="deviceEditForm" label-width="100px">
                <el-form-item label="IMEI">
                    <el-input v-model="deviceEditForm.imei" disabled />
                </el-form-item>
                <el-form-item label="型号">
                    <el-input v-model="deviceEditForm.model" />
                </el-form-item>
                <el-form-item label="当前状态">
                    <el-tag :type="getDeviceStatusType(deviceEditForm.currentStatus)">
                        {{ getDeviceStatusText(deviceEditForm.currentStatus) }}
                    </el-tag>
                </el-form-item>
                <el-form-item label="验机结果" v-if="deviceEditForm.currentStatus === 2">
                    <el-input v-model="deviceEditForm.check_result" type="textarea" :rows="3" placeholder="请输入验机结果" />
                </el-form-item>
                <el-form-item label="最终价格" v-if="deviceEditForm.currentStatus === 4">
                    <el-input v-model="deviceEditForm.final_price" type="number">
                        <template #append>元</template>
                    </el-input>
                </el-form-item>
                <el-form-item label="价格备注" v-if="deviceEditForm.currentStatus === 4">
                    <el-input v-model="deviceEditForm.price_remark" type="textarea" :rows="2" placeholder="请输入价格备注" />
                </el-form-item>
            </el-form>
            <template #footer>
                <el-button @click="deviceEditVisible = false">取消</el-button>
                <el-button type="primary" @click="submitDeviceEdit">确定</el-button>
            </template>
        </el-dialog>

        <!-- 添加设备弹窗 -->
        <el-dialog v-model="deviceAddVisible" title="添加设备" width="600px" destroy-on-close>
            <el-form :model="deviceAddForm" label-width="100px">
                <el-form-item label="IMEI" required>
                    <el-input v-model="deviceAddForm.imei" placeholder="请输入设备IMEI" />
                </el-form-item>
                <el-form-item label="型号" required>
                    <el-input v-model="deviceAddForm.model" placeholder="请输入设备型号" />
                </el-form-item>
                <el-form-item label="预估价格" required>
                    <el-input v-model="deviceAddForm.initial_price" type="number">
                        <template #append>元</template>
                    </el-input>
                </el-form-item>
                <el-form-item label="备注">
                    <el-input v-model="deviceAddForm.remark" type="textarea" :rows="2" placeholder="请输入备注" />
                </el-form-item>
            </el-form>
            <template #footer>
                <el-button @click="deviceAddVisible = false">取消</el-button>
                <el-button type="primary" @click="submitDeviceAdd">确定</el-button>
            </template>
        </el-dialog>
    </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import { getRecycleOrderList, deleteRecycleOrder, updateRecycleOrder, updateDeviceStatus, updateDeviceFinalPrice, addRecycleDevice, deleteRecycleDevice } from '@/addon/phone_shop_price/api/phone_shop_recycle_order'
import dayjs from 'dayjs'

// 接口定义
interface ApiResponse<T> {
    code: number
    data: T
    msg: string
}

interface OrderListResponse {
    total: number
    per_page: number
    current_page: number
    last_page: number
    data: Array<{
        id: number
        order_no: string
        send_username: string
        telphone: string
        status: string | number
        create_at: number
        devices: Array<{
            id: number
            imei: string
            model: string
            status: number
            initial_price: string
            final_price: string
            check_result: string | null
        }>
        device_stats: {
            total: number
            pending: number
            checking: number
            checked: number
            completed: number
            returned: number
            total_amount: number
        }
    }>
}

// 数据加载和分页
const loading = ref(false)
const list = ref<OrderListResponse['data']>([])
const page = ref(1)
const limit = ref(10)
const total = ref(0)

// 搜索表单
const searchForm = reactive({
    order_no: '',
    send_username: '',
    telphone: '',
    status: ''
} as { [key: string]: string })

// 订单状态映射
const orderStatusMap = {
    1: '待收货',
    2: '待质检',
    3: '质检中',
    4: '待确认',
    5: '待打款',
    6: '已完成',
    7: '待退货',
    8: '已寄出',
    9: '已关闭'
} as const

// 设备状态映射
const deviceStatusMap = {
    1: '待质检',
    2: '质检中',
    3: '质检完成',
    4: '待确认',
    5: '已完成',
    6: '退回'
} as const

// 编辑表单
const editVisible = ref(false)
const editForm = reactive({
    id: 0,
    status: 0,
    currentStatus: 0
})

// 收款信息相关
const paymentVisible = ref(false)
const paymentForm = reactive({
    account: '',
    pay_type: '',
    amount: 0
})

// 设备编辑相关
const deviceEditVisible = ref(false)
const deviceEditForm = reactive({
    id: 0,
    imei: '',
    model: '',
    check_result: '',
    final_price: 0,
    price_remark: '',
    order_id: 0,
    currentStatus: 0
})

// 添加设备相关
const deviceAddVisible = ref(false)
const deviceAddForm = reactive({
    order_id: 0,
    imei: '',
    model: '',
    initial_price: 0,
    remark: ''
})

// 获取列表数据
const getList = async (p = 1) => {
    loading.value = true
    page.value = p
    try {
        const res = await getRecycleOrderList({
            page: page.value,
            limit: limit.value,
            ...searchForm
        }) as unknown as ApiResponse<OrderListResponse>

        if (res.code === 1) {
            list.value = res.data.data || []
            total.value = res.data.total || 0
        }
    } catch (error) {
        console.error('获取列表失败:', error)
    } finally {
        loading.value = false
    }
}

// 重置搜索
const resetSearch = () => {
    Object.keys(searchForm).forEach(key => {
        searchForm[key as keyof typeof searchForm] = ''
    })
    getList(1)
}

// 分页处理
const handleSizeChange = (val: number) => {
    limit.value = val
    getList(1)
}

const handleCurrentChange = (val: number) => {
    getList(val)
}

// 获取订单状态文字
const getOrderStatusText = (status: number) => {
    return orderStatusMap[status as keyof typeof orderStatusMap] || '未知状态'
}

const getOrderStatusType = (status: number) => {
    const typeMap: Record<number, string> = {
        1: 'warning',   // 待收货
        2: 'info',      // 待质检
        3: 'primary',   // 质检中
        4: 'warning',   // 待确认
        5: 'success',   // 待打款
        6: 'success',   // 已完成
        7: 'danger',    // 待退货
        8: 'warning',   // 已寄出
        9: 'info'       // 已关闭
    }
    return typeMap[status] || 'info'
}

// 设备状态处理
const getDeviceStatusText = (status: number) => {
    return deviceStatusMap[status as keyof typeof deviceStatusMap] || '未知状态'
}

const getDeviceStatusType = (status: number) => {
    const typeMap: Record<number, string> = {
        1: 'warning',   // 待质检
        2: 'primary',   // 质检中
        3: 'success',   // 质检完成
        4: 'warning',   // 待确认
        5: 'success',   // 已完成
        6: 'danger'     // 退回
    }
    return typeMap[status] || 'info'
}

// 编辑状态
const handleEdit = (row: any) => {
    editForm.id = row.id
    editForm.status = Number(row.status)
    editForm.currentStatus = Number(row.status)
    editVisible.value = true
}

// 获取可选的下一个状态
const getAvailableNextStatus = (currentStatus: number) => {
    const statusFlow = {
        1: [2, 9],           // 待收货 -> 待质检/已关闭
        2: [3, 9],           // 待质检 -> 质检中/已关闭
        3: [4, 9],           // 质检中 -> 待确认/已关闭
        4: [5, 7, 9],        // 待确认 -> 待打款/待退货/已关闭
        5: [6, 9],           // 待打款 -> 已完成/已关闭
        6: [9],              // 已完成 -> 已关闭
        7: [8, 9],           // 待退货 -> 已寄出/已关闭
        8: [9],              // 已寄出 -> 已关闭
        9: []                // 已关闭 -> 无法更改
    }
    return statusFlow[currentStatus as keyof typeof statusFlow] || []
}

// 提交状态修改
const submitEdit = async () => {
    // 验证状态流转是否合法
    const availableStatus = getAvailableNextStatus(editForm.currentStatus)
    if (!availableStatus.includes(editForm.status)) {
        ElMessage.error('不允许的状态变更')
        return
    }

    try {
        const res = await updateRecycleOrder(String(editForm.id), {
            status: editForm.status,
            old_status: editForm.currentStatus
        }) as unknown as ApiResponse<any>
        if (res.code === 1) {
            ElMessage.success('状态更新成功')
            editVisible.value = false
            getList()
        }
    } catch (error) {
        console.error('更新状态失败:', error)
        ElMessage.error('状态更新失败')
    }
}

// 删除订单
const handleDelete = (row: any) => {
    ElMessageBox.confirm('确定要删除该订单吗？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
    }).then(async () => {
        try {
            const res = await deleteRecycleOrder(row.id) as unknown as ApiResponse<any>
            if (res.code === 1) {
                ElMessage.success('删除成功')
                getList()
            }
        } catch (error) {
            console.error('删除失败:', error)
            ElMessage.error('删除失败')
        }
    })
}

// 格式化时间戳
const formatTimestamp = (timestamp: number) => {
    return dayjs(timestamp * 1000).format('YYYY-MM-DD HH:mm:ss')
}

// 查看收款信息
const viewPayment = (row: any) => {
    paymentForm.account = row.account || ''
    paymentForm.pay_type = row.pay_type || ''
    paymentForm.amount = row.total_amount || 0
    paymentVisible.value = true
}

// 编辑设备信息
const editDevice = (device: any, order_id: number) => {
    deviceEditForm.order_id = order_id
    deviceEditForm.id = device.id
    deviceEditForm.imei = device.imei
    deviceEditForm.model = device.model
    deviceEditForm.check_result = device.check_result || ''
    deviceEditForm.final_price = device.final_price || device.initial_price || 0
    deviceEditForm.price_remark = device.price_remark || ''
    deviceEditForm.currentStatus = device.status
    deviceEditVisible.value = true
}

// 获取可选的下一个设备状态
const getAvailableNextDeviceStatus = (currentStatus: number) => {
    const statusFlow = {
        1: [2],              // 待质检 -> 质检中
        2: [3],              // 质检中 -> 质检完成
        3: [4],              // 质检完成 -> 待确认
        4: [5, 6],           // 待确认 -> 已完成/退回
        5: [],               // 已完成 -> 无法更改
        6: []                // 退回 -> 无法更改
    }
    return statusFlow[currentStatus as keyof typeof statusFlow] || []
}

// 提交设备编辑
const submitDeviceEdit = async () => {
    // 验证设备状态流转
    const nextStatus = deviceEditForm.currentStatus === 1 ? 2 : // 待质检 -> 质���中
        deviceEditForm.currentStatus === 2 ? 3 : // 质检中 -> 质检完成
            deviceEditForm.currentStatus === 3 ? 4 : // 质检完成 -> 待确认
                deviceEditForm.currentStatus === 4 ? (deviceEditForm.final_price > 0 ? 5 : 6) : // 待确认 -> 已完成/退回
                    deviceEditForm.currentStatus; // 其他状态保持不变

    try {
        // 更新设备状态
        await updateDeviceStatus(String(deviceEditForm.id), {
            order_id: deviceEditForm.order_id,
            status: nextStatus,
            model: deviceEditForm.model,
            check_result: deviceEditForm.check_result,
            final_price: deviceEditForm.final_price,
            price_remark: deviceEditForm.price_remark,
            should_update_order: true // 添加标记，告诉后端需要更新订单状态
        })

        ElMessage.success('更新成功')
        deviceEditVisible.value = false
        getList()
    } catch (error) {
        console.error('更新设备信息失败:', error)
        ElMessage.error('更新失败')
    }
}

// 添加设备
const addDevice = (row: any) => {
    deviceAddForm.order_id = row.id
    deviceAddForm.imei = ''
    deviceAddForm.model = ''
    deviceAddForm.initial_price = 0
    deviceAddForm.remark = ''
    deviceAddVisible.value = true
}

// 提交添加设备
const submitDeviceAdd = async () => {
    if (!deviceAddForm.imei) {
        ElMessage.warning('请输入设备IMEI')
        return
    }
    if (!deviceAddForm.model) {
        ElMessage.warning('请输入设备型号')
        return
    }
    if (!deviceAddForm.initial_price) {
        ElMessage.warning('请输入预估价格')
        return
    }

    try {
        const res = await addRecycleDevice({
            order_id: deviceAddForm.order_id,
            imei: deviceAddForm.imei,
            model: deviceAddForm.model,
            initial_price: deviceAddForm.initial_price,
            remark: deviceAddForm.remark,
            status: 1, // 默认待质检状态
            should_update_order: true // 添加标记，告诉后端需要更新订单状态
        }) as unknown as ApiResponse<any>

        if (res.code === 1) {
            ElMessage.success('添加成功')
            deviceAddVisible.value = false
            getList()
        } else {
            ElMessage.error(res.msg || '添加失败')
        }
    } catch (error) {
        console.error('添加设备失败:', error)
        ElMessage.error('添加失败')
    }
}

// 删除设备
const handleDeviceDelete = (device: any) => {
    ElMessageBox.confirm('确定要删除该设备吗？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
    }).then(async () => {
        try {
            const res = await deleteRecycleDevice(device.id) as unknown as ApiResponse<any>
            if (res.code === 1) {
                ElMessage.success('删除成功')
                getList()
            }
        } catch (error) {
            console.error('删除失败:', error)
            ElMessage.error('删除失败')
        }
    })
}

// 初始化
getList()
</script>

<style lang="scss" scoped>
.recycle-order-list {
    padding: 20px;
    height: 100vh;
    box-sizing: border-box;

    .el-card {
        height: calc(100vh - 40px); // 减去padding的高度
        display: flex;
        flex-direction: column;

        :deep(.el-card__body) {
            flex: 1;
            display: flex;
            flex-direction: column;
            overflow: hidden;
            padding: 20px;

            .el-table {
                flex: 1;
                overflow: hidden;

                :deep(.el-table__inner-wrapper) {
                    height: 100%;
                }

                :deep(.el-table__body-wrapper) {
                    overflow-y: auto;
                }
            }
        }
    }
}

.el-table {
    :deep(.el-table__expanded-cell) {
        padding: 20px !important;
    }
}

.el-button-group {
    .el-button {
        margin-left: 0 !important;
    }
}

.device-stats {
    padding: 4px 8px;

    .stats-row {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 2px 0;

        .stats-label {
            color: #666;
            font-size: 13px;
        }

        .stats-value {
            font-weight: 500;
            color: #409EFF;
        }
    }
}
</style>
