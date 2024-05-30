<template>
    <div class="main-container rounded-[4px]">
        <el-card class="box-card !border-none" shadow="never">
            <div class="flex justify-between items-center">
                <span class="text-page-title">{{ pageName }}</span>
            </div>

            <div class="mt-[10px]">
                <el-table :data="addonList" size="large" v-loading="loading">
                    <template #empty>
                        <span>{{ !loading ? t('emptyData') : '' }}</span>
                    </template>

                    <el-table-column prop="title" :label="t('app')" min-width="120" >
                        <template #default="{ row }">
                            <div class="flex items-center">
                                <el-image class="w-[40px] h-[40px] rounded-md overflow-hidden" :src="row.icon" fit="contain">
                                    <template #error>
                                        <div class="flex items-center w-full h-full">
                                            <img class="w-full h-full" src="@/app/assets/images/icon-addon.png" alt="">
                                        </div>
                                    </template>
                                </el-image>
                                <div class="flex-1 ml-2 truncate">{{ row.title }}</div>
                            </div>
                        </template>
                    </el-table-column>

                    <el-table-column :label="t('operation')" align="right" fixed="right" width="100">
                        <template #default="{ row }">
                            <el-button type="primary" link @click="openSettingLayer(row.key)">{{ t('setting') }}</el-button>
                        </template>
                    </el-table-column>

                </el-table>
            </div>
        </el-card>
    </div>

    <el-dialog v-model="showDialog" :title="t('selectLayout')" width="50%" class="diy-dialog-wrap"
               :destroy-on-close="true">
        <div class="h-[50vh]">
            <el-scrollbar >
                <div class="flex flex-wrap">
                    <div class="w-[180px] h-[130px] border mr-[10px] mb-[10px] hover:border-primary cursor-pointer"
                         :class="{'border-primary': ((!layoutConfig[currAddon] && item.layout == 'default') || (layoutConfig[currAddon] == item.layout)) }"
                         @click="layoutConfig[currAddon] = item.layout"
                         v-for="item in systemLayout">
                        <img :src="assetImg(item.cover)" class="w-full h-full" />
                    </div>
                    <div class="w-[180px] h-[130px] border mr-[10px] mb-[10px] hover:border-primary cursor-pointer"
                         :class="{'border-primary': ((!layoutConfig[currAddon] && addonLayout.layout == 'default') || (layoutConfig[currAddon] == addonLayout.layout)) }"
                         @click="layoutConfig[currAddon] = addonLayout.layout"
                         v-if="addonLayout">
                        <img :src="assetImg(addonLayout.cover)" class="w-full h-full" />
                    </div>
                </div>
            </el-scrollbar>
        </div>
        <template #footer>
            <span class="dialog-footer">
                <el-button @click="showDialog = false">{{ t('cancel') }}</el-button>
                <el-button type="primary" :loading="loading" @click="confirm()">{{
                        t('confirm')
                    }}</el-button>
            </span>
        </template>
    </el-dialog>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { t } from '@/lang'
import { useRoute } from 'vue-router'
import { getInstalledAddonList } from '@/app/api/addon'
import { setLayout, getLayout } from '@/app/api/sys'
import { assetImg } from '@/utils/common'

const route = useRoute()
const pageName = route.meta.title
const loading = ref(true)
const layoutConfig = ref({})
const systemLayout = ref([])
const addonLayout = ref(null)
const addonList = ref([
    {
        title: t('manyApp'),
        key: 'system',
        icon: ''
    }
])

const layouts = import.meta.globEager('@/layout/**/layout.json')
for (const key in layouts) {
    const layout = layouts[key]
    systemLayout.value.push(layout.default)
}
const addonLayouts = import.meta.globEager('@/addon/**/layout/layout.json')

getInstalledAddonList().then(({ data }) => {
    Object.keys(data).forEach((key) => {
        const item = data[key]
        item.type == 'app' && addonList.value.push(item)
    })
    loading.value = false
}).catch()

const getLayoutConfig = () => {
    getLayout().then(({ data }) => {
        layoutConfig.value = data
    })
}
getLayoutConfig()

const currAddon = ref('')
const showDialog = ref(false)
const openSettingLayer = async (key: string) => {
    if (key != 'system') {
        addonLayout.value = null
        Object.keys(addonLayouts).forEach((path) => {
            path.indexOf(`/addon/${key}/`) != -1 && (addonLayout.value = addonLayouts[path].default)
        })
    }
    currAddon.value = key
    showDialog.value = true
}

const confirm = () => {
    setLayout({
        key: currAddon.value,
        value: layoutConfig.value[currAddon.value] ? layoutConfig.value[currAddon.value] : 'default'
    }).then(() => {
        showDialog.value = false
    })
}
</script>

<style lang="scss" scoped>
</style>
