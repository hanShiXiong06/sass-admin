<template>
    <!--插件开发-->
    <div class="main-container">
        <el-card class="box-card !border-none" shadow="never">

            <div class="flex justify-between items-center">
                <span class="text-page-title">{{ pageName }}</span>
            </div>

            <el-tabs v-model="activeName" class="mt-[20px]">
                <el-tab-pane :label="t('developmentProcess')" name="developmentProcess">
                    <el-steps :active="5" direction="vertical">
                        <el-step>
                            <template #title>
                                <p class="text-[14px] font-[700]">
                                    {{ t("step1") }}
                                </p>
                            </template>
                            <template #description>
                                <span class="text-[#999]">{{ t("describe1") }}</span>
                                <div class="mt-[20px] mb-[40px] h-[32px]">
                                    <el-button type="primary" @click="router.push({ path: '/tools/addon_edit' })">{{t("btn1") }}</el-button>
                                </div>
                            </template>
                        </el-step>

                        <el-step>
                            <template #title>
                                <p class="text-[14px] font-[700]">
                                    {{ t("step2") }}
                                </p>
                            </template>
                            <template #description>
                                <span class="text-[#999]">{{ t("describe2") }}</span>
                                <div class="mt-[20px] mb-[40px] h-[32px]">
                                    <el-button type="primary" plain @click="activeName = 'pluginList'">{{t("btn2") }}</el-button>
                                </div>
                            </template>
                        </el-step>

                        <el-step>
                            <template #title>
                                <p class="text-[14px] font-[700]">
                                    {{ t("step3") }}
                                </p>
                            </template>
                            <template #description>
                                <span class="text-[#999]">{{ t("describe3") }}</span>
                                <div class="mt-[20px] mb-[40px] h-[32px]">
                                    <el-button type="primary" plain @click="linkEvent('https://www.kancloud.cn/niucloud/niucloud-admin-develop/3225439')">{{t("btn3") }}</el-button>
                                </div>
                            </template>
                        </el-step>

                        <el-step>
                            <template #title>
                                <p class="text-[14px] font-[700]">
                                    {{ t("step4") }}
                                </p>
                            </template>
                            <template #description>
                                <span class="text-[#999]">{{ t("describe4") }}</span>
                                <div class="mt-[20px] mb-[40px] h-[32px]">
                                    <el-button type="primary" plain @click="activeName = 'pluginList'">{{t("btn4") }}</el-button>
                                </div>
                            </template>
                        </el-step>

                        <el-step>
                            <template #title>
                                <p class="text-[14px] font-[700]">
                                    {{ t("step5") }}
                                </p>
                            </template>
                            <template #description>
                                <span class="text-[#999]">{{ t("describe5") }}</span>
                                <div class="mt-[20px] mb-[40px] h-[32px]">
                                    <el-button type="primary" plain @click="linkEvent('https://www.niucloud.com/app')">{{t("btn5") }}</el-button>
                                </div>
                            </template>
                        </el-step>
                    </el-steps>
                </el-tab-pane>

                <el-tab-pane :label="t('pluginList')" name="pluginList">

                    <el-card class="box-card !border-none mb-[10px] table-search-wrap" shadow="never">
                        <div class="flex justify-between">
                            <el-form :inline="true" :model="params" ref="searchFormRef">
                                <el-form-item :label="t('title')" prop="search">
                                    <el-input v-model.trim="params.search" :placeholder="t('titlePlaceholder')" />
                                </el-form-item>
                                <el-form-item>
                                    <el-button type="primary" @click="getAddonDevelopFn">{{ t('search') }}</el-button>
                                    <el-button @click="resetForm(searchFormRef)">{{ t('reset') }}</el-button>
                                </el-form-item>
                            </el-form>
                        </div>
                    </el-card>

                    <el-table :data="data" size="large" v-loading="loading" class="pt-[5px]">
                        <template #empty>
                            <span>{{ t('emptyData') }}</span>
                        </template>

                        <el-table-column :label="t('title')" align="left" min-width="320">
                            <template #default="{ row }">
                                <div class="flex items-center justify-between">
                                    <el-image v-if="row.icon" class="w-[45px] h-[45px]" :src="row.icon.indexOf('data:image') != -1 ? row.icon : img(row.icon)" fit="contain">
                                        <template #error>
                                            <img class="w-[45px] h-[45px]" src="@/app/assets/images/category_default.png" alt="">
                                        </template>
                                    </el-image>
                                    <img v-else class="w-[45px] h-[45px]" src="@/app/assets/images/category_default.png" alt="">
                                    <div class="flex-1 w-[236px] pl-[15px] truncate">
                                        {{ row.title }}
                                    </div>
                                </div>
                            </template>
                        </el-table-column>
                        <el-table-column prop="key" :label="t('key')" align="center" min-width="200" />
                        <el-table-column prop="type_name" :label="t('type')" align="center" min-width="200" />
                        <el-table-column prop="author" :label="t('author')" align="center" min-width="200" />
                        <el-table-column prop="version" :label="t('version')" align="center" min-width="200" />
                        <el-table-column :label="t('status')" align="center" min-width="200">
                            <template #default="{ row }">
                                {{ Object.keys(row.install_info).length ? '已安装' : '未安装' }}
                            </template>
                        </el-table-column>
                        <el-table-column :label="t('operation')" fixed="right" align="right" width="180" :show-overflow-tooltip="true">
                            <template #default="{ row }">
                                <el-button type="primary" link @click="editEvent(row.key)">{{ t('edit') }}</el-button>
                                <el-button v-if="Object.keys(row.install_info).length" type="primary" link @click="addonDevelopBuildFn(row)">{{ t('step4') }}</el-button>
                                <el-button v-if="!Object.keys(row.install_info).length" type="primary" link @click="deleteEvent(row.key)">{{ t('delete') }}</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                </el-tab-pane>
            </el-tabs>

        </el-card>
    </div>
</template>

<script lang="ts" setup>
import { reactive, toRefs, ref, onMounted } from 'vue'
import { t } from '@/lang'
import { getAddonDevelop, deleteAddonDevelop, addonDevelopBuild, addonDevelopDownload } from '@/app/api/tools'
import { img } from '@/utils/common'
import { ElMessageBox } from 'element-plus'
import { useRouter, useRoute } from 'vue-router'
import type { FormInstance } from 'element-plus'

const route = useRoute()
const router = useRouter()
const pageName = route.meta.title
const searchFormRef = ref(null)
const state = reactive({
    params: {
        // page: 1,
        // limit: 10,
        // total: 0,
        // title: '',
        search: ''
    },
    loading: false,
    data: [],
    activeName: 'developmentProcess',
    active: 0
})
const { params, loading, data, activeName, active } = toRefs(state)
onMounted(() => {
    if (window.addonActiveName) {
        state.activeName = window.addonActiveName + ''
        window.addonActiveName = null
    }
    getAddonDevelopFn()
})
const getAddonDevelopFn = () => {
    loading.value = true
    getAddonDevelop(state.params).then(res => {
        state.data = res.data
        loading.value = false
    }).catch(() => {
        loading.value = false
    })
}

const resetForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.resetFields()
    getAddonDevelopFn()
}
const editEvent = (key: any) => {
    router.push({ path: '/tools/addon_edit', query: { key } })
}
const linkEvent = (url: string) => {
    window.open(url, '_blank')
}
// 打包插件
const addonDevelopBuildFn = (data: any) => {
    loading.value = true
    addonDevelopBuild(data.key).then(res => {
        loading.value = false
        addonDevelopDownload(data.key).then(res => {
            ElMessageBox.alert(`插件打包成功，插件包所在位置：网站根目录${res.data}下请手动进行下载`, t('warning'))
        }).catch()
    }).catch(() => {
        loading.value = false
    })
}

/**
 * 删除
 */
const deleteEvent = (key: any) => {
    ElMessageBox.confirm(t('codeDeleteTips'), t('warning'),
        {
            confirmButtonText: t('confirm'),
            cancelButtonText: t('cancel'),
            type: 'warning'
        }
    ).then(() => {
        loading.value = true
        deleteAddonDevelop(key).then(() => {
            getAddonDevelopFn()
        }).catch(() => {
            loading.value = false
        })
    })
}
</script>

<style lang="scss" scoped></style>
