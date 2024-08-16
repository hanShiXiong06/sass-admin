<template>
  <div class="main-container">
    <el-card class="box-card !border-none" shadow="never">

      <div class="flex justify-between items-center">
        <span class="text-page-title">{{ pageName }}</span>
        <el-button type="primary" @click="addEvent">{{ t('addGoods') }}</el-button>
      </div>
      <el-card class="box-card !border-none my-[10px] table-search-wrap" shadow="never">
        <el-form :inline="true" :model="goodsTable.searchParam" ref="searchFormRef">
          <el-form-item :label="t('goodsName')" prop="goods_name">
            <el-input v-model.trim="goodsTable.searchParam.questions_desc" :placeholder="t('goodsNamePlaceholder')" maxlength="60" />
          </el-form-item>
          <el-form-item :label="t('科目分类')" prop="category_id">
            <el-cascader v-model="goodsTable.searchParam.category_id" :options="goodsCategoryOptions" :placeholder="t('goodsCategoryPlaceholder')" clearable :props="{ value: 'value', label: 'label', emitPath:false }"/>
          </el-form-item>
          <el-form-item :label="t('questions_type')" prop="questions_type">
            <el-select v-model="goodsTable.searchParam.questions_type" :placeholder="t('goodsTypePlaceholder')" clearable>
              <el-option v-for="item in questionsType" :key="item.type" :label="item.type_name" :value="item.questions_type" />
            </el-select>
          </el-form-item>



          <el-form-item>
            <el-button type="primary" @click="loadGoodsList()">{{ t('search') }}</el-button>
            <el-button @click="resetForm(searchFormRef)">{{ t('reset') }}</el-button>
          </el-form-item>
        </el-form>
      </el-card>

      <div class="mt-[10px]">



        <el-table :data="goodsTable.data" size="large" v-loading="goodsTable.loading" ref="goodsListTableRef" @sort-change="sortChange" @selection-change="handleSelectionChange">
          <template #empty>
            <span>{{ !goodsTable.loading ? t('emptyData') : '' }}</span>
          </template>
          <el-table-column type="selection" width="55" />
          <el-table-column prop="id" :label="t('id')" min-width="50"/>
          <el-table-column prop="questions_type" :label="t('题目类型')" min-width="100">
            <template #default="{ row }">
              <div>
              {{questionsType[row.questions_type-1].type_name}}
              </div>
            </template>

          </el-table-column>
          <el-table-column prop="questions_desc" :label="t('questions_desc')" min-width="300">

          </el-table-column>
          <el-table-column :label="t('questions_options')" min-width="300">
            <template #default="{ row }">
              <div v-if="!!(row.options)">
                <div v-for="(item, index) in row.options" :key="index"
                     :class="getClass(row.options, row.answer).includes(index) ? 'text-green-500' : ''">
                  {{ item.id }}. {{ item.value }}
                </div>
              </div>
              <div v-else>

                <el-icon class="text-green-500" v-if="+row.answer"><Check /></el-icon>
                <el-icon class="text-red-500" v-else><Close /></el-icon>

              </div>
            </template>
          </el-table-column>




          <el-table-column :label="t('operation')" fixed="right" align="right" min-width="120">
            <template #default="{ row }">
              <el-button type="primary" link @click="editEvent(row)">{{ t('edit') }}</el-button>


              <el-button type="primary" v-if="row.status == 1" link @click="statusChange(row, 0)">{{ t('statusActionOff') }}</el-button>

              <el-button type="primary" v-if="row.status != 1" link @click="deleteEvent(row.id)">{{ t('delete') }}</el-button>
            </template>
          </el-table-column>

        </el-table>
        <div class="mt-[16px] flex justify-end">
          <!-- <div class="flex items-center flex-1">
              <el-checkbox v-model="toggleCheckbox" size="large" class="px-[14px]" @change="toggleChange" :indeterminate="isIndeterminate" />
              <el-button @click="batchGoodsStatus(1)" size="small">{{ t('batchOnGoods') }}</el-button>
              <el-button @click="batchGoodsStatus(0)" size="small">{{ t('batchOffGoods') }}</el-button>
              <el-button @click="batchDeleteGoods" size="small">{{ t('batchDeleteGoods') }}</el-button>
          </div> -->

          <el-pagination v-model:current-page="goodsTable.page" v-model:page-size="goodsTable.limit"
                         layout="total, sizes, prev, pager, next, jumper" :total="goodsTable.total"
                         @size-change="loadGoodsList()" @current-change="loadGoodsList" />
        </div>

      </div>
      <question-edit ref="editQuestionDialog" @complete="loadCategoryList" />
    </el-card>

  </div>


</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { t } from '@/lang'
import { debounce, img, filterDigit } from '@/utils/common'
import { ElMessage, ElMessageBox, FormInstance } from 'element-plus'
import { useRoute, useRouter } from 'vue-router'
import { cloneDeep } from 'lodash-es'
import questionEdit from '@/addon/hsx_exam/views/question/components/question-edit.vue'

import { getQuestionsPageList, getCategoryTree, getQuestionTypes , deleteQuestions   } from '@/addon/hsx_exam/api/questions'


const router = useRouter()
const route = useRoute()
const pageName = route.meta.title
const repeat = ref(false)

const goodsTable = reactive({
  page: 1,
  limit: 10,
  total: 0,
  loading: true,
  data: [],
  searchParam: {
    questions_desc: '',
    category_id: [],
    questions_type: '',
    order: '',
    sort: ''
  }
})

const searchFormRef = ref<FormInstance>()


// 商品分类
const goodsCategoryOptions: any = reactive([])

// 商品类型
const questionsType: any = reactive([])




// 初始化数据
const initData = () => {
  // 查询商品分类树结构
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
//
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
//
initData()

// 批量复选框
// const toggleCheckbox = ref()

// 复选框中间状态
// const isIndeterminate = ref(false)

// 监听批量复选框事件
// const toggleChange = (value: any) => {
//   isIndeterminate.value = false
//   goodsListTableRef.value.toggleAllSelection()
// }
//
// const goodsListTableRef = ref()

// 选中数据
// const multipleSelection: any = ref([])

// 监听表格单行选中
// const handleSelectionChange = (val: []) => {
//   multipleSelection.value = val
//
//   toggleCheckbox.value = false
//   if (multipleSelection.value.length > 0 && multipleSelection.value.length < goodsTable.data.length) {
//     isIndeterminate.value = true
//   } else {
//     isIndeterminate.value = false
//   }
//
//   if (multipleSelection.value.length == goodsTable.data.length) {
//     toggleCheckbox.value = true
//   }
// }




// 监听排序
// const sortChange = (event: any) => {
//   let sort = ''
//   if (event.order == 'ascending') {
//     sort = 'asc'
//   } else if (event.order == 'descending') {
//     sort = 'desc'
//   }
//   if (sort) {
//     goodsTable.searchParam.order = event.prop
//     goodsTable.searchParam.sort = sort
//   }
//   loadGoodsList()
// }

// 修改商品上下架状态
// const statusChange = (row: any, value: any) => {
//   if (value) {
//     editGoodsStatus({
//       goods_ids: row.goods_id,
//       status: value
//     }).then((res) => {
//       loadGoodsList()
//     })
//   } else {
//     ElMessageBox.confirm(t('statusChangeTips'), t('warning'),
//         {
//           confirmButtonText: t('confirm'),
//           cancelButtonText: t('cancel'),
//           type: 'warning'
//         }
//     ).then(() => {
//       editGoodsStatus({
//         goods_ids: row.goods_id,
//         status: value
//       }).then((res) => {
//         loadGoodsList()
//       })
//     })
//   }
// }
//
// // 批量设置上下架
// const batchGoodsStatus = (status: any) => {
//   if (multipleSelection.value.length == 0) {
//     ElMessage({
//       type: 'warning',
//       message: `${t('batchEmptySelectedGoodsTips')}`
//     })
//     return
//   }
//
//   const goodsIds: any = []
//   multipleSelection.value.forEach((item: any) => {
//     goodsIds.push(item.goods_id)
//   })
//
//   editGoodsStatus({
//     goods_ids: goodsIds,
//     status
//   }).then((res) => {
//     loadGoodsList()
//   })
// }



// // 修改排序号
// const sortInputListener = debounce((sort, row) => {
//   if (isNaN(sort) || !regExp.number.test(sort)) {
//     ElMessage({
//       type: 'warning',
//       message: `${t('sortTips')}`
//     })
//     return
//   }
//   if(sort>99999999){
//     row.sort = 99999999
//   }
//   editGoodsSort({
//     goods_id: row.goods_id,
//     sort
//   }).then((res) => {
//     // loadGoodsList();
//   })
// })

/**
 * 获取商品列表
 */
const loadGoodsList = (page: number = 1) => {

  goodsTable.loading = true
  goodsTable.page = page

  const searchData = cloneDeep(goodsTable.searchParam)

  getQuestionsPageList({
    page: goodsTable.page,
    limit: goodsTable.limit,
    ...searchData
  }).then(res => {
    goodsTable.loading = false
    goodsTable.data = res.data.data
    goodsTable.total = res.data.total
  }).catch(() => {
    goodsTable.loading = false
  })
}

loadGoodsList()

/**
 * 添加商品
 */

const editQuestionDialog: Record<string, any> | null = ref(null)
const addEvent = () => {
  editQuestionDialog.value.setFormData()
  editQuestionDialog.value.showDialog = true
}

/**
 * 编辑商品
 * @param data
 */
const editEvent = (data: any) => {
  editQuestionDialog.value.setFormData(data)
  editQuestionDialog.value.showDialog = true
}

// answerOption是判断 正确的选项的class类名


const getClass = (options, answer) => {
  if (typeof answer === 'string' && answer.length === 1) {
    // 单选题的情况
    return [options.findIndex(item => item.id === answer)];
  } else {
    // 多选题的情况，将答案以逗号分隔并转为数组
    const answers = answer.split(',');
    // 查找所有匹配的索引并返回数组
    return options.reduce((acc, item, index) => {
      if (answers.includes(item.id)) {
        acc.push(index);
      }
      return acc;
    }, []);
  }
};


// 删除商品
const deleteEvent = (id: number) => {
  ElMessageBox.confirm(t('goodsDeleteTips'), t('warning'),
      {
        confirmButtonText: t('confirm'),
        cancelButtonText: t('cancel'),
        type: 'warning'
      }
  ).then(() => {
    if (repeat.value) return
    repeat.value = true
    deleteQuestions({
     id
    }).then(() => {
      loadGoodsList()
      repeat.value = false
    }).catch(() => {
      repeat.value = false
    })
  })
}

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
  goodsTable.searchParam.start_price = ''
  goodsTable.searchParam.end_price = ''
  goodsTable.searchParam.start_sale_num = ''
  goodsTable.searchParam.end_sale_num = ''

  loadGoodsList()
}
</script>

<style lang="scss" scoped>
.price-wrap, .stock-wrap {
  &:hover {
    .icon-wrap {
      visibility: visible;
      color: var(--el-color-primary);
    }
  }
}
</style>
