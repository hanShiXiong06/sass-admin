<template>
  <el-form ref="formRef" :model="formData" :rules="formRules">
    <el-form-item label="" prop="discount" class="!mb-[10px]">
      <div>
        <div class="flex items-center">
          <el-checkbox v-model="formData.is_use" :true-label="1" :false-label="0" label="" size="large" />
          <span class="ml-[10px] el-form-item__label">霸王餐分销</span>
          <div class="w-[680px]" v-show="formData.is_use">
            <el-form-item label="分销方式" class="!mb-[10px]" prop="fenxiao_type">

              <el-radio-group v-model="formData.fenxiao_type">
                <el-radio :label="0">按比例</el-radio>
                <el-radio :label="1">按固定金额</el-radio>
              </el-radio-group>
            </el-form-item>

            <div v-if="formData.fenxiao_type == 0">
              <el-form-item label="一级分销" class="!mb-[20px]" prop="first_rate">
                <el-input style="width: 160px" v-model="formData.first_rate" placeholder="请输入一级分销比" clearable
                  class="w-[120px]" />
                <span class="ml-[5px] text-slate-400">单位%,一级将分佣{{ formData.first_rate }}%</span>
              </el-form-item>
              <el-form-item label="二级分销" class="!mb-[20px]" prop="second_rate">
                <el-input style="width: 160px" v-model="formData.second_rate" clearable placeholder="请输入二级分销比"
                  class="w-[120px]" />
                <span class="ml-[5px] text-slate-400">单位%,二级将分佣{{ formData.second_rate }}%</span>
              </el-form-item>
            </div>

            <div v-if="formData.fenxiao_type == 1">
              <el-form-item label="一级分销" class="!mb-[20px]" prop="first_commission">
                <el-input style="width: 160px" v-model="formData.first_commission" clearable placeholder="请输入一级分销金额"
                  class="w-[120px]" />
                <span class="ml-[5px] text-slate-400">将固定分佣{{ formData.first_commission }}给一级分销</span>
              </el-form-item>
              <el-form-item label="二级分销" class="!mb-[20px]" prop="second_commission">
                <el-input style="width: 160px" v-model="formData.second_commission" clearable placeholder="请输入二级分销金额"
                  class="w-[120px]" />
                <span class="ml-[5px] text-slate-400">将固定分佣{{ formData.second_commission }}给二级分销</span>
              </el-form-item>
            </div>
          </div>
        </div>
        <div class="text-sm text-gray-400 mb-[5px]">
          开启后将获得推广权限，将可以获取推广订单的返利，如不需开启二级分销，填写0即可;这里建议按照佣金比进行结算，不建议使用固定金额
        </div>
      </div>
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup>
import { computed, reactive, ref, watch } from "vue";
import { FormRules } from "element-plus";
import Test from "@/utils/test";

const props = defineProps({
  modelValue: {
    type: Object,
    default: () => {
      return {};
    },
  },
});
const emits = defineEmits(["update:modelValue"]);

const formData = ref({
  is_use: 0,
  fenxiao_type: 0,
  first_rate: 5,
  second_rate: 2,
  first_commission: "",
  second_commission: "",
});
const formRef = ref(null);

const formRules = reactive<FormRules>({

  first_rate: [
    {
      validator: (rule: any, value: any, callback: Function) => {
        if (formData.value.is_use) {
          if (Test.empty(formData.value.first_rate)) {
            callback("请输入一级佣金比例");
          }
          if (
            parseFloat(formData.value.first_rate) > 99.99
          ) {
            callback("佣金比例只能输入0~99.99之间的值");
          }
          if (formData.value.first_rate < 0) {
            callback("佣金比例不能小于0");
          }
          callback();
        } else {
          callback();
        }
      },
    },],
  second_rate: [
    {
      validator: (rule: any, value: any, callback: Function) => {
        if (formData.value.is_use) {
          if (Test.empty(formData.value.second_rate)) {
            callback("请输入二级佣金比例");
          }
          if (
            parseFloat(formData.value.second_rate) > 99.99
          ) {
            callback("佣金比例只能输入0~99.99之间的值");
          }
          if (formData.value.second_rate < 0) {
            callback("佣金比例不能小于0");
          }
          callback();
        } else {
          callback();
        }
      },
    },],
  first_commission: [
    {
      validator: (rule: any, value: any, callback: Function) => {
        if (formData.value.is_use) {
          if (Test.empty(formData.value.first_commission)) {
            callback("请输入一级佣金");
          }
          if (formData.value.first_commission < 0) {
            callback("佣金不能小于0");
          }
          callback();
        } else {
          callback();
        }
      },
    },],
  second_commission: [
    {
      validator: (rule: any, value: any, callback: Function) => {
        if (formData.value.is_use) {
          if (Test.empty(formData.value.second_commission)) {
            callback("请输入一级佣金");
          }
          if (formData.value.second_commission < 0) {
            callback("佣金不能小于0");
          }
          callback();
        } else {
          callback();
        }
      },
    },],
});

const value = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emits("update:modelValue", value);
  },
});

watch(
  () => value.value,
  (nval, oval) => {
    if ((!oval || !Object.keys(oval).length) && Object.keys(nval).length) {
      formData.value = value.value;
    }
  },
  { immediate: true }
);

watch(
  () => formData.value,
  () => {
    value.value = formData.value;
  },
  { deep: true }
);

const verify = async () => {
  let verify = true;
  await formRef.value?.validate((valid) => {
    verify = valid;
  });
  return verify;
};

defineExpose({
  verify,
});
</script>

<style lang="scss" scoped></style>
