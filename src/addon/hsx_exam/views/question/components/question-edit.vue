<template>
  <el-dialog v-model="showDialog" :title="title" width="480" class="diy-dialog-wrap" :destroy-on-close="true">
    <el-form :model="formData" label-width="120px" ref="formRef" :rules="formRules" class="page-form" v-loading="loading">
      <el-form-item :label="t('question')" prop="question_desc">
        <el-input  type="textarea" v-model.trim="formData.question_desc" clearable :placeholder="t('questionPlaceholder')" class="input-width"  show-word-limit >
        </el-input>
      </el-form-item>
      <el-form-item :label="t('科目分类')" prop="category_id">
        <el-cascader v-model="formData.category_id" :options="goodsCategoryOptions" :placeholder="t('goodsCategoryPlaceholder')" clearable :props="{ value: 'value', label: 'label', emitPath:false }"/>
      </el-form-item>
      <el-form-item :label="t('questions_type')" prop="questions_type">
        <el-select v-model="formData.questions_type" :placeholder="t('goodsTypePlaceholder')" clearable>
          <el-option v-for="item in questionsType" :key="item.type" :label="item.type_name" :value="item.questions_type" />
        </el-select>
      </el-form-item>
      <el-form-item :label="t('options')" prop="options">
         <span  class="flex items-center"><el-input>  </el-input><el-icon><CircleClose /></el-icon></span>

      </el-form-item>

      <el-form-item :label="t('image')">
        <upload-image v-model="formData.image" />
      </el-form-item>

      <el-form-item :label="t('isShow')" prop="is_show">
        <el-switch v-model="formData.is_show" class="input-width" :active-value="1" :inactive-value="2" />
      </el-form-item>
    </el-form>

    <template #footer>
            <span class="dialog-footer">
                <el-button @click="showDialog = false">{{ t('cancel') }}</el-button>
                <el-button type="primary" :loading="loading" @click="confirm(formRef)">{{ t('confirm') }}</el-button>
            </span>
    </template>
  </el-dialog>
</template>

<script lang="ts" setup>
import { ref, reactive, computed } from 'vue'
import { t } from '@/lang'
import type { FormInstance } from 'element-plus'
import {
  addCategory,
  editCategory,
  getQuestionsInfo,
  getCategoryTree,
  getQuestionTypes
} from '@/addon/hsx_exam/api/questions'

const showDialog = ref(false)
const loading = ref(false)
const title = ref('')

/**
 * 表单数据
 */
const initialFormData = {
  category_id: '',
  category_name: '',
  image: '',
  pid: 0,
  is_show: 1,
  child_count: 0,
  // sort: 9999,
  level: 1
}
const formData: Record<string, any> = reactive({ ...initialFormData })

const formRef = ref<FormInstance>()

// 表单验证规则
const formRules = computed(() => {
  return {
    category_id: [
      { required: true, message: t('categoryIdPlaceholder'), trigger: 'blur' }
    ],
    category_name: [
      { required: true, message: t('categoryNamePlaceholder'), trigger: 'blur' }
    ],
    pid: [
      { required: true, message: t('pidPlaceholder'), trigger: 'change' }
    ]
  }
})

interface optionListType {
  category_id: number
  category_name: string
}
const optionList = ref<optionListType[]>([])
const emit = defineEmits(['complete'])

/**
 * 确认
 * @param formEl
 */
const confirm = async (formEl: FormInstance | undefined) => {
  if (loading.value || !formEl) return
  const save = formData.category_id ? editCategory : addCategory

  await formEl.validate(async (valid) => {
    if (valid) {
      loading.value = true

      const data = formData

      save(data).then(res => {
        loading.value = false
        showDialog.value = false
        emit('complete')
      }).catch(err => {
        loading.value = false
      })
    }
  })
}


// 商品类型
const questionsType: any = reactive([])


// 获取全部分类
const getCategoryAllFn = () => {
  // getCategoryList({
  //   level: 1
  // }).then(res => {
  //   optionList.value = res.data.filter((el: any) => el.category_id != formData.category_id)
  // })

  getCategoryTree().then((res) => {
    const data = res.data
    if (data) {
      const goodsCategoryTree: any = []
      data.forEach((item: any) => {
        const children: any = []
        if (item.child_list) {
          item.child_list.forEach((childItem: any) => {
            children.push({
              value: childItem.category_id,
              label: childItem.category_name
            })
          })
        }
        goodsCategoryTree.push({
          value: item.category_id,
          label: item.category_name,
          children
        })
      })
      goodsCategoryOptions.splice(0, goodsCategoryOptions.length, ...goodsCategoryTree)
    }
  })
  //   // 商品类型
  getQuestionTypes().then((res) => {
    const data = res.data.data
    if (data) {
      for (const k in data) {
        questionsType.push(data[k])
      }
    }
  })
}

const setFormData = async (row: any = null) => {
  Object.assign(formData, initialFormData)
  loading.value = true
  if (row) {
    title.value = t('updateQuestion')
    const data = await (await getQuestionsInfo(row.id)).data
    console.log(data)
    // if (data) {
    //   Object.keys(formData).forEach((key: string) => {
    //     if (data[key] != undefined) formData[key] = data[key]
    //   })
    // }
  } else {
    title.value = t('addQuestion')
  }
  getCategoryAllFn()
  loading.value = false
}



// 商品分类
const goodsCategoryOptions: any = reactive([])




defineExpose({
  showDialog,
  setFormData
})




</script>

<style lang="scss" scoped></style>
<style lang="scss">
.diy-dialog-wrap .el-form-item__label {
  height: auto !important;
}
</style>
