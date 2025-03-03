<template>
    <el-dialog v-model="showDialog" :title="t('aliSms')" width="580px" :destroy-on-close="true">
        <el-form :model="formData" label-width="140px" ref="formRef" :rules="formRules" class="page-form" v-loading="loading">
            <el-form-item :label="t('isUse')">
                <el-radio-group v-model="formData.is_use">
                    <el-radio :label="1">{{ t('startUsing') }}</el-radio>
                    <el-radio :label="0">{{ t('statusDeactivate') }}</el-radio>
                </el-radio-group>
            </el-form-item>

            <el-form-item :label="t('aliSign')" prop="sign">
                <el-input v-model.trim="formData.sign" :placeholder="t('aliSignPlaceholder')" class="input-width" show-word-limit clearable />
            </el-form-item>

            <el-form-item :label="t('aliAppKey')" prop="app_key">
                <el-input v-model.trim="formData.app_key" :placeholder="t('aliAppKeyPlaceholder')" class="input-width" clearable />
            </el-form-item>

            <el-form-item :label="t('aliSecretKey')" prop="secret_key">
                <el-input v-model.trim="formData.secret_key" :placeholder="t('aliSecretKeyPlaceholder')" class="input-width" clearable />
            </el-form-item>

        </el-form>

        <template #footer>
            <span class="dialog-footer">
                <el-button @click="showDialog = false">{{ t('cancel') }}</el-button>
                <el-button type="primary" :loading="loading" @click="confirm(formRef)">{{t('confirm')}}</el-button>
            </span>
        </template>
    </el-dialog>
</template>

<script lang="ts" setup>
import { ref, reactive, computed } from 'vue'
import { t } from '@/lang'
import type { FormInstance } from 'element-plus'
import { getSmsInfo, editSms } from '@/app/api/notice'

const showDialog = ref(false)
const loading = ref(true)

/**
 * 表单数据
 */
const initialFormData = {
    sms_type: '',
    sign: '',
    app_key: '',
    secret_key: '',
    is_use: ''
}
const formData: Record<string, any> = reactive({ ...initialFormData })

const formRef = ref<FormInstance>()

// 表单验证规则
const formRules = computed(() => {
    return {
        sign: [
            { required: true, message: t('aliSignPlaceholder'), trigger: 'blur' }
        ],
        app_key: [
            { required: true, message: t('aliAppKeyPlaceholder'), trigger: 'blur' }
        ],
        secret_key: [
            { required: true, message: t('aliSecretKeyPlaceholder'), trigger: 'blur' }
        ]
    }
})

const emit = defineEmits(['complete'])

/**
 * 确认
 * @param formEl
 */
const confirm = async (formEl: FormInstance | undefined) => {
    if (loading.value || !formEl) return

    await formEl.validate(async (valid) => {
        if (valid) {
            loading.value = true

            const data = formData

            editSms(data).then(res => {
                loading.value = false
                showDialog.value = false
                emit('complete')
            }).catch(() => {
                loading.value = false
                // showDialog.value = false
            })
        }
    })
}

const setFormData = async (row: any = null) => {
    loading.value = true
    Object.assign(formData, initialFormData)
    if (row) {
        const data = await (await getSmsInfo(row.sms_type)).data
        Object.keys(formData).forEach((key: string) => {
            if (data[key] != undefined) formData[key] = data[key]
            if (data.params[key] != undefined) formData[key] = data.params[key].value
        })
    }
    loading.value = false
}

defineExpose({
    showDialog,
    setFormData
})
</script>

<style lang="scss" scoped></style>
