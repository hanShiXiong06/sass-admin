<script setup lang="ts">
import { ref, defineEmits, onMounted, computed } from "vue";
import Sortable from 'sortablejs';
import {
  getCategoryList,
  addCategoryList,
  getList,
  addList,
  deleteList,
  updateList,
  deleteCategoryList
} from "@/addon/detail_form/api/index";
import { t } from "@/lang";

interface Attribute {
  title: string;
  options: { name: string }[];
  answer: string;
  sort: string;
}

interface QuestionOption {
  title: string;
  options: { name: string }[];
  answer: string;
}

interface Question {
  key: string;
  title: string;
  options: QuestionOption[];
}

interface FirstClass {
  key: string;
  title: string;
}

const FormData = ref({
  check: false,
  tips: '',
  appearance: [],
  feature: [],
  innerDrawer: false,
  innerDrawer1: false,
  currentKey: ''
});

const question = ref<Question[]>([
  {
    key: 'appearance',
    title: '外观质检',
    options: [{ title: '屏幕', options: [{ name: '无划痕' }, { name: '有划痕' }], answer: '' }]
  },
  {
    key: 'feature',
    title: '功能质检',
    options: [{ title: '屏幕', options: [{ name: '无划痕' }, { name: '有划痕' }], answer: '' }]
  }
]);

const filterQuestion = computed(() => {
  console.log(  optionsIndex.value  )
  return question.value.filter(item => item.key === FormData.value.currentKey);
});

const answerList = ref<string[]>([]);
const attributes = ref<Attribute>({
  title: '',
  options: [{ name: '' }, { name: '' }],
  answer: '',
  sort: ''
});

const firstClass = ref<FirstClass>({ key: '', title: '' });

const emit = defineEmits(['updateAnswers']);

const addCheckOption = (key: string) => {
  FormData.value.currentKey = key;
  FormData.value.innerDrawer = true;
};

const delCheckOption = async (key: string) => {
  await deleteCategoryList(key);
  await fetchList();
};

const delOptions = async (params: { id: number; key: string }) => {
  await deleteList(params.id);
  await fetchList();
};

const submitAnswers = () => {
  const answers = question.value.map(item => ({
    title: item.title,
    options: item.options.map(option => ({
      title: option.title,
      answer: option.answer,
      color: '#f00'
    }))
  }));

  emit('updateAnswers', answers);

  ElMessage.success('质检已完成');
  FormData.value.check = false;
  FormData.value.tips = '已完成质检';
};

onMounted(async () => {
  await fetchList();
});

const clear = () => {
  FormData.value.tips = '';
};

const handleClose = () => {
  FormData.value.innerDrawer = false;
};

const addOptions = () => {
  attributes.value.options.push({ name: '' });
};

const initAttr = () => {
  FormData.value.innerDrawer = false;
  attributes.value.title = '';
  attributes.value.options = [{ name: '' }, { name: '' }];
};

const submitOption = async (id?: number) => {
  const obj = { ...attributes.value, category_id: FormData.value.currentKey, id };
  obj.options = obj.options.map(item => item.name).toString();
  delete obj.answer;

  if (id) {
    await updateList(obj);
  } else {
    await addList(obj);
  }

  await fetchList();
  initAttr();
};

const addFirstClass = async () => {
  const obj = { ...firstClass.value, options: [{ name: '' }, { name: '' }] };
  await addCategoryList({ ...obj });
  await fetchList();
  FormData.value.innerDrawer1 = false;
};

const fetchList = async () => {
  const res = await getCategoryList();
  question.value = res.data;
};

const removeOptions = (index: number) => {
  attributes.value.options.splice(index, 1);
};

const onKeyAll = () => {
  question.value.forEach(item => {
    item.options.forEach(option => {
      option.answer = [option.options[0]];
    });
  });
};

const update_id = ref<number | null>(null);

const updateOptions = (item: any) => {
  update_id.value = item.id;
  FormData.value.innerDrawer = true;
  attributes.value.title = item.title;
  attributes.value.sort = item.sort;
  FormData.value.currentKey = item.category_id;
  attributes.value.options = item.options.map((option: string) => ({ name: option }));
};

const onKeyCancel = (key : any )=>{
  question.value[key].options.forEach(item => {
    item.answer = []
  })
}

const computedOptions = computed(() => {
  return question.value.map(item => ({
    title: item.title,
    id: item.key
  }));
});

const filteredOptions = computed(() => {
  // 根据用户选择的不同
  console.log(  optionsIndex )
  return optionsIndex
});

const optionsIndex = ref(0)
const changeComputedOptionsIndex = (index: any) => {
  // 根据 不同的index.id 显示不同的项目


};

const activeRows = ref<any[]>([]);

</script>

<template>
  <el-form label-width="150px">
    <el-form-item :label="t('质检选项')">
      <el-radio-group v-model="FormData.check">
        <el-radio :label="0" @click="clear">不质检</el-radio>
        <el-radio :label="1">质检</el-radio>
      </el-radio-group>
      <div class="ml-[10px]">
        <span class="cursor-pointer text-success">{{ FormData.tips }}</span>
      </div>
    </el-form-item>
    <el-drawer v-model="FormData.check" title="质检" direction="rtl" size="80%">
      <template #header="{ close }">
        <h4>产品质检</h4>
        <el-button @click="onKeyAll">一键全选</el-button>
        <el-button @click="FormData.innerDrawer1 = true">添加质检大类</el-button>
        <el-button @click="submitAnswers">确认质检完成</el-button>
        <el-button type="danger" @click="close">
          <el-icon class="el-icon--left">
            <CircleCloseFilled />
          </el-icon>
          Close
        </el-button>
      </template>

      <el-button v-for="item in computedOptions" @click="changeComputedOptionsIndex(item)"> {{ item.title }} </el-button>

      {{filteredOptions}}
      <div v-if="FormData.check">
        <div class="question" v-for="(item, key) in question" :key="key">
          <el-card>
            <div>
              {{ question[key].title }}
              <el-button @click="addCheckOption(item.category_id)">添加质检项</el-button>
              <el-popconfirm title="确定要删除吗?" @confirm="delCheckOption(item.key)">
                <template #reference>
                  <el-button>删除{{ question[key].title }}类</el-button>
                </template>
              </el-popconfirm>
              <el-button @click="onKeyCancel(key)">一键取消</el-button>
            </div>
            <el-form-item v-for="opt in question[key].options" :key="opt.title">
              <template #label>
                <i class="order-0 iconfont icontuodong vues-rank mr-[8px]"></i>
                <text> {{ opt.title }}</text>
              </template>
              <div class="flex justify-between w-100">
                <el-checkbox-group v-model="opt.answer" :min="0" :max="1">
                  <el-checkbox :label="option" v-for="option in opt.options" :key="option">
                    {{ option }}
                  </el-checkbox>
                </el-checkbox-group>
                <div class="flex justify-between">
                  <el-button type="default" size="small" @click="updateOptions(opt)">修改</el-button>
                  <el-popconfirm title="确定要删除吗?" @confirm="delOptions({ key, id: opt.id })">
                    <template #reference>
                      <el-button type="danger" size="small">删除</el-button>
                    </template>
                  </el-popconfirm>
                </div>
              </div>
            </el-form-item>
          </el-card>
        </div>
        <el-drawer v-model="FormData.innerDrawer" title="添加质检项" :append-to-body="true" :before-close="handleClose" size="75%">
          <el-form-item :label="t('属性:')">
            <el-input v-model="attributes.title" style="width: 240px" placeholder="请输入属性" />
          </el-form-item>
          <el-form-item :label="t('选项:')">
            <el-input v-model="item.name" v-for="(item, index) in attributes.options" :key="index" style="width: 240px" placeholder="请输入参数值" />
            <el-button @click="addOptions">+</el-button>
            <el-button @click="removeOptions(attributes.options.length - 1)">移除末尾</el-button>
          </el-form-item>
          <el-form-item :label="t('排序:')">
            <el-input v-model="attributes.sort" style="width: 240px" placeholder="排序" />
          </el-form-item>
          <el-button @click="submitOption(update_id)">确认添加</el-button>
          <el-button @click="initAttr">取消</el-button>
        </el-drawer>
        <el-drawer v-model="FormData.innerDrawer1">
          <el-form-item :label="t('类名:')">
            <el-input v-model="firstClass.title" style="width: 240px" placeholder="Please input" />
          </el-form-item>
          <el-form-item :label="t('key:')">
            <el-input v-model="firstClass.key" style="width: 240px" placeholder="Please input" />
            <el-button @click="addFirstClass">+</el-button>
          </el-form-item>
        </el-drawer>
      </div>
    </el-drawer>
  </el-form>
</template>

<style scoped lang="scss">
.el-form-item {
  display: flex;
  width: 100%;

  .el-button {
    margin-left: 10px;
  }
}

.el-card:nth-child(1) {
  margin-top: 10px;
}

.el-card {
  margin-bottom: 10px;
}
.w-100 {
  width: 100%;
}
</style>
