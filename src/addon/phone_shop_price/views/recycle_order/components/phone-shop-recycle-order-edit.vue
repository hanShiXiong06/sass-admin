<template>
  <div class="phone-shop-recycle-order-edit">
    <el-form
      ref="formRef"
      :model="form"
      :rules="rules"
      label-width="100px"
    >
      <el-form-item label="会员名称" prop="member_name">
        <el-input v-model="form.member_name" placeholder="请输入会员名称" />
      </el-form-item>
      <el-form-item label="手机号" prop="phone">
        <el-input v-model="form.phone" placeholder="请输入手机号" />
      </el-form-item>
      <el-form-item label="总价" prop="total_price">
        <el-input-number
          v-model="form.total_price"
          :precision="2"
          :step="0.1"
          :min="0"
        />
      </el-form-item>
      <el-form-item label="状态" prop="status">
        <el-select v-model="form.status" placeholder="请选择状态">
          <el-option
            v-for="item in statusOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="handleSubmit">确定</el-button>
        <el-button @click="$emit('cancel')">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { ElMessage } from 'element-plus'
import type { FormInstance, FormRules } from 'element-plus'
import { getRecycleOrderDetail, addRecycleOrder, updateRecycleOrder } from '@/addon/phone_shop_price/api/phone_shop_recycle_order'

const props = defineProps({
  id: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['success', 'cancel'])

const formRef = ref<FormInstance>()
const form = ref({
  member_name: '',
  phone: '',
  total_price: 0,
  status: 1
})

const statusOptions = [
  { label: '待处理', value: 1 },
  { label: '处理中', value: 2 },
  { label: '已完成', value: 3 },
  { label: '已取消', value: 4 }
]

const rules: FormRules = {
  member_name: [
    { required: true, message: '请输入会员名称', trigger: 'blur' }
  ],
  phone: [
    { required: true, message: '请输入手机号', trigger: 'blur' },
    { pattern: /^1[3-9]\d{9}$/, message: '请输入正确的手机号', trigger: 'blur' }
  ],
  total_price: [
    { required: true, message: '请输入总价', trigger: 'blur' }
  ],
  status: [
    { required: true, message: '请选择状���', trigger: 'change' }
  ]
}

const getDetail = async () => {
  try {
    const res = await getRecycleOrderDetail(props.id)
    form.value = res.data
  } catch (error) {
    console.error(error)
  }
}

const handleSubmit = async () => {
  if (!formRef.value) return
  
  await formRef.value.validate(async (valid) => {
    if (valid) {
      try {
        if (props.id) {
          await updateRecycleOrder(props.id, form.value)
        } else {
          await addRecycleOrder(form.value)
        }
        ElMessage.success('保存成功')
        emit('success')
      } catch (error) {
        console.error(error)
      }
    }
  })
}

onMounted(() => {
  if (props.id) {
    getDetail()
  }
})
</script>

<style lang="scss" scoped>
.phone-shop-recycle-order-edit {
  padding: 20px;
}
</style> 