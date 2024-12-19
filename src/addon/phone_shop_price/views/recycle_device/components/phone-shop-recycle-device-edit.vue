<template>
  <div class="phone-shop-recycle-device-edit">
    <el-form
      ref="formRef"
      :model="form"
      :rules="rules"
      label-width="100px"
    >
      <el-form-item label="设备名称" prop="name">
        <el-input v-model="form.name" placeholder="请输入设备名称" />
      </el-form-item>
      <el-form-item label="型号" prop="model">
        <el-input v-model="form.model" placeholder="请输入型号" />
      </el-form-item>
      <el-form-item label="价格" prop="price">
        <el-input-number
          v-model="form.price"
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
      <el-form-item label="描述" prop="description">
        <el-input
          v-model="form.description"
          type="textarea"
          :rows="3"
          placeholder="请输入描述"
        />
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
import { getRecycleDeviceDetail, addRecycleDevice, updateRecycleDevice } from '@/addon/phone_shop_price/api/phone_shop_recycle_order'

const props = defineProps({
  id: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['success', 'cancel'])

const formRef = ref<FormInstance>()
const form = ref({
  name: '',
  model: '',
  price: 0,
  status: 1,
  description: ''
})

const statusOptions = [
  { label: '启用', value: 1 },
  { label: '禁用', value: 0 }
]

const rules: FormRules = {
  name: [
    { required: true, message: '请输入设备名称', trigger: 'blur' }
  ],
  model: [
    { required: true, message: '请输入型号', trigger: 'blur' }
  ],
  price: [
    { required: true, message: '请输入价格', trigger: 'blur' }
  ],
  status: [
    { required: true, message: '请选择状态', trigger: 'change' }
  ]
}

const getDetail = async () => {
  try {
    const res = await getRecycleDeviceDetail(props.id)
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
          await updateRecycleDevice(props.id, form.value)
        } else {
          await addRecycleDevice(form.value)
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
.phone-shop-recycle-device-edit {
  padding: 20px;
}
</style> 