<template>
    <el-container class="w-100 h-screen">
        <el-main class="flex p-0">
            <div class="one-menu w-[124px] h-screen px-[8px] bg-[#282c34]">
                <el-header class="logo-wrap">
                    <div class="logo flex items-center m-auto h-[64px]" v-if="!systemStore.menuIsCollapse">
                        <el-image style="width: 40px; height: 40px" :src="img(logoUrl)" fit="contain">
                            <template #error>
                                <div class="flex justify-center items-center w-full h-[40px]">
                                    <img class="max-w-[40px]" src="@/app/assets/images/icon-addon.png" alt=""  object-fit="contain">
                                </div>
                            </template>
                        </el-image>
                    </div>
                    <div class="logo flex items-center justify-center h-[64px]" v-else>
                        <i class="text-3xl iconfont iconyunkongjian"></i>
                    </div>
                </el-header>

                <el-scrollbar class="h-[calc( 100vh - 64px )]">
                    <el-menu :default-active="oneMenuActive" :router="true" class="aside-menu" :unique-opened="true" :collapse="systemStore.menuIsCollapse">
                        <template v-for="(item, index) in oneMenuData" :key="index">
                            <el-menu-item :index="item.original_name" @click="router.push({ name: item.name })" v-if="item.meta.show">
                                <div v-if="item.meta.icon" class="w-[16px] h-[16px] relative flex justify-center">
                                    <el-image class="w-[16px] h-[16px] rounded-[50%] overflow-hidden" :src="item.meta.icon" fit="fill" v-if="isUrl(item.meta.icon)"/>
                                    <icon :name="item.meta.icon" class="absolute top-[50%] -translate-y-[50%]" v-else />
                                </div>
                                <div v-else class="w-[16px] h-[16px]"></div>
                                <template #title>
                                    <div class="relative flex-1 w-0">
                                        <span class="ml-[10px] w-full truncate">{{ item.meta.short_title || item.meta.title }}</span>
                                    </div>
                                </template>
                            </el-menu-item>
                        </template>
                    </el-menu>
                    <div class="h-[48px]"></div>
                </el-scrollbar>
            </div>

            <el-scrollbar v-if="twoMenuData.length" class="two-menu w-[140px]">
                <div class="w-[140px] h-[64px] flex items-center justify-center text-[16px] border-b-[1px] border-solid border-[var(--el-border-color-lighter)]">
                    {{ route.matched[1].meta.title }}
                </div>

                <el-menu class="aside-menu" :default-active="route.name" :default-openeds="menuOption" :router="true" :collapse="systemStore.menuIsCollapse">
                    <menu-item v-for="(route, index) in twoMenuData" :routes="route" :key="index" />
                </el-menu>

                <div class="h-[48px]"></div>
            </el-scrollbar>
        </el-main>
    </el-container>
</template>

<script lang="ts" setup>
import { ref, watch, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import useSystemStore from '@/stores/modules/system'
import useUserStore from '@/stores/modules/user'
import { img, isUrl } from '@/utils/common'
import { findFirstValidRoute } from '@/router/routers'
import menuItem from './menu-item.vue'
import { cloneDeep } from 'lodash-es'

const route = useRoute()
const router = useRouter()

const systemStore = useSystemStore()
const userStore = useUserStore()

const siteInfo = userStore.siteInfo
const routers = userStore.routers
const addonIndexRoute = userStore.addonIndexRoute

const oneMenuData = ref<Record<string, any>[]>([])
const twoMenuData = ref<Record<string, any>[]>([])
const addonRouters: Record<string, any> = {}
const logoUrl = computed(() => {
    return userStore.siteInfo.icon ? userStore.siteInfo.icon : systemStore.website.icon
})

routers.forEach(item => {
    item.original_name = item.name
    if (item.meta.addon == '') {
        if (item.meta.attr == '') {
            if (item.children && item.children.length) {
                item.name = findFirstValidRoute(item.children)
            }
            oneMenuData.value.push(item)
        }
    } else if (item.meta.addon != '' && siteInfo?.apps.length <= 1 && siteInfo?.apps[0].key == item.meta.addon) {
        if (item.children) {
            item.children.forEach((citem: Record<string, any>) => {
                citem.original_name = citem.name
                if (citem.children && citem.children.length) {
                    citem.name = findFirstValidRoute(citem.children)
                }
            })
            oneMenuData.value.unshift(...item.children)
        } else {
            oneMenuData.value.unshift(item)
        }
    } else {
        addonRouters[item.meta.addon] = item
    }
})

// 多应用时将应用插入菜单
if (siteInfo?.apps.length > 1) {
    const routers:Record<string, any>[] = []
    siteInfo?.apps.forEach((item: Record<string, any>) => {
        if (addonRouters[item.key]) {
            addonRouters[item.key].name = addonIndexRoute[item.key]
            routers.push(addonRouters[item.key])
        }
    })
    oneMenuData.value.unshift(...routers)
}

const oneMenuActive = ref(route.matched[1].name)

watch(route, () => {
    if (route.meta.attr != '') {
        oneMenuActive.value = route.matched[2].name
        twoMenuData.value = route.matched[1].children ?? []
    } else {
        // 多应用
        if (siteInfo?.apps.length > 1) {
            twoMenuData.value = route.matched[1].children
            oneMenuActive.value = route.matched[1].name
        } else {
            // 单应用
            const oneMenu = route.matched[1]
            if (oneMenu.meta.addon == '') {
                oneMenuActive.value = route.matched[1].name
                twoMenuData.value = route.matched[1].children ?? []
            } else {
                if (oneMenu.meta.addon == siteInfo?.apps[0].key) {
                    oneMenuActive.value = route.matched[2].name
                    twoMenuData.value = route.matched[2].children ?? []
                } else {
                    oneMenuActive.value = route.matched[1].name
                    twoMenuData.value = route.matched[1].children ?? []
                }
            }
        }
    }
}, { immediate: true })

// 让二级菜单默认展开
const menuOption = ref([])
watch(twoMenuData.value, () => {
    menuOption.value = [];
    if(twoMenuData.value && Object.values(twoMenuData.value).length){
        let data = cloneDeep(twoMenuData.value);
        for(let key in data){
            menuOption.value.push(data[key].name);
        }
    }
}, { immediate: true })
</script>

<style lang="scss">
.one-menu {

    .aside-menu:not(.el-menu--collapse) {
        background-color: transparent;

        .el-menu-item {
            font-size: 14px;
            height: 40px;
            margin-bottom: 4px;
            padding-left: 12px !important;
            color: rgba(255,255,255,.7);
            border-radius: 2px;

            &:hover {
                color: var(--el-color-primary);
                background-color: transparent;
            }

            &.is-active {
                color: #fff !important;
                background-color: var(--el-color-primary) !important;
            }

            span {
                margin-left: 8px;
                font-size: 14px;
            }
        }
    }

    .el-menu {
        border: 0;
    }

    .el-scrollbar {
        height: calc(100vh - 65px);
    }
}

.two-menu {

    .aside-menu:not(.el-menu--collapse) {
        width: 140px;
        padding-top: 16px;
        border: 0;

        .el-menu-item {
            height: 36px;
            margin: 0 8px 4px;
            padding: 0 8px !important;
            border-radius: 2px;

            span {
                margin-left: 8px;
                font-size: 14px;
            }

            &.is-active {
                background-color: var(--el-color-primary-light-9) !important;
            }

            &:hover {
                color: var(--el-color-primary);
                background-color: var(--el-color-primary-light-9) !important;
            }
        }

        .el-sub-menu {
            margin-bottom: 8px;

            .el-sub-menu__title {
                height: 36px;
                margin: 0 8px 4px;
                padding-left: 8px;
                border-radius: 2px;

                span {
                    font-size: 14px;
                    display: flex;
                    height: 36px;
                    align-items: center;
                }

                &:hover {
                    color: var(--el-color-primary);
                    background-color: var(--el-color-primary-light-9) !important;
                }
                .el-icon.el-sub-menu__icon-arrow {
                    right: 5px;
                }
            }

            .el-menu-item {
                padding-left: 20px !important;
            }
        }
    }
}

.logo-wrap {
    display: flex;
    padding: 0;
    white-space: nowrap;
    align-items: center;

    .logo {
        height: 100%;
        box-sizing: border-box;
    }
}
</style>
