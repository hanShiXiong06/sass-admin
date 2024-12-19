<template>
  <div class="recycle-device-list">
    <el-card class="box-card">
      <div class="operation-btns">
        <el-button type="primary" @click="handleAdd">添加设备</el-button>
      </div>

      <el-table
        v-loading="loading"
        :data="list"
        style="width: 100%"
      >
        <el-table-column
          prop="name"
          label="设备名称"
          width="180"
        />
        <el-table-column
          prop="model"
          label="型号"
          width="180"
        />
        <el-table-column
          prop="price"
          label="价格"
        />
        <el-table-column
          prop="status_name"
          label="状态"
        />
        <el-table-column
          prop="create_time"
          label="创建时间"
        />
        <el-table-column label="操作" width="250">
          <template #default="scope">
            <el-button
              type="primary"
              link
              @click="handleEdit(scope.row)"
            >
              编辑
            </el-button>
            <el-button
              type="success"
              link
              @click="handlePrice(scope.row)"
            >
              修改价格
            </el-button>
            <el-button
              type="danger"
              link
              @click="handleDelete(scope.row)"
            >
              删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
      
      <el-pagination
        v-model:current-page="page"
        v-model:page-size="limit"
        :total="total"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </el-card>

    <!-- 编辑弹窗 -->
    <el-dialog
      v-model="editVisible"
      :title="currentId ? '编辑设备' : '添加设备'"
      width="500px"
    >
      <phone-shop-recycle-device-edit
        :id="currentId"
        @success="handleEditSuccess"
        @cancel="editVisible = false"
      />
    </el-dialog>

    <!-- 价格编辑弹窗 -->
    <el-dialog
      v-model="priceVisible"
      title="修改价格"
      width="400px"
    >
      <el-form
        ref="priceFormRef"
        :model="priceForm"
        label-width="80px"
      >
        <el-form-item label="价格" prop="price">
          <el-input-number
            v-model="priceForm.price"
            :precision="2"
            :step="0.1"
            :min="0"
          />
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="priceVisible = false">取消</el-button>
          <el-button type="primary" @click="handlePriceSubmit">
            确定
          </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import { getRecycleDeviceList, deleteRecycleDevice, updateRecycleDevicePrice } from '@/addon/phone_shop_price/api/phone_shop_recycle_order'
import PhoneShopRecycleDeviceEdit from './components/phone-shop-recycle-device-edit.vue'

const loading = ref(false)
const list = ref([])
const page = ref(1)
const limit = ref(10)
const total = ref(0)
const editVisible = ref(false)
const priceVisible = ref(false)
const currentId = ref('')
const priceForm = ref({
  price: 0,
  id: ''
})

const getList = async () => {
  loading.value = true
  try {
    const res = await getRecycleDeviceList({
      page: page.value,
      limit: limit.value
    })
    list.value = res.data.list
    total.value = res.data.count
  } catch (error) {
    console.error(error)
  }
  loading.value = false
}

const handleSizeChange = (val: number) => {
  limit.value = val
  getList()
}

const handleCurrentChange = (val: number) => {
  page.value = val
  getList()
}

const handleAdd = () => {
  currentId.value = ''
  editVisible.value = true
}

const handleEdit = (row: any) => {
  currentId.value = row.id
  editVisible.value = true
}

const handlePrice = (row: any) => {
  priceForm.value = {
    price: row.price,
    id: row.id
  }
  priceVisible.value = true
}

const handlePriceSubmit = async () => {
  try {
    await updateRecycleDevicePrice(priceForm.value.id, {
      price: priceForm.value.price
    })
    ElMessage.success('价格更新成功')
    priceVisible.value = false
    getList()
  } catch (error) {
    console.error(error)
  }
}

const handleDelete = (row: any) => {
  ElMessageBox.confirm('确定要删除该设备吗?', '提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning'
  }).then(async () => {
    try {
      await deleteRecycleDevice(row.id)
      ElMessage.success('删除成功')
      getList()
    } catch (error) {
      console.error(error)
    }
  })
}

const handleEditSuccess = () => {
  editVisible.value = false
  getList()
}

onMounted(() => {
  getList()
})
</script>

<style lang="scss" scoped>
.recycle-device-list {
  padding: 20px;

  .operation-btns {
    margin-bottom: 20px;
  }
}
</style> 