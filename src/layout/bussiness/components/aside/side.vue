<template>
    <el-container class="w-100 h-screen">
        <el-main class="p-0 flex">
            <div class="w-[64px] bg-[#282c34] h-screen one-menu">
                <el-header class="logo-wrap">
                    <div class="logo flex items-center m-auto h-[64px]" v-if="!systemStore.menuIsCollapse">
                        <el-image style="width: 40px; height: 40px" :src="img(logoUrl)" fit="contain">
                            <template #error>
                                <div class="flex justify-center items-center w-full h-[40px]"><img class="max-w-[40px]" src="@/app/assets/images/icon-addon.png" alt=""  object-fit="contain"></div>
                            </template>
                        </el-image>
                    </div>
                    <div class="logo flex items-center justify-center h-[64px]" v-else>
                        <i class="text-3xl iconfont iconyunkongjian"></i>
                    </div>
                </el-header>
                <el-scrollbar class="h-[calc( 100vh - 64px )]">
                    <el-menu :default-active="oneMenuActive" :router="true" class="aside-menu" :unique-opened="true">
                        <template v-for="(item, index) in oneMenuData" :key="index">
                            <el-menu-item :index="item.original_name" @click="router.push({ name: item.name })" v-if="item.meta.show">
                                <div v-if="item.meta.icon" class="w-[16px] h-[16px] relative flex justify-center">
                                    <icon :name="item.meta.icon" class="absolute top-[50%] -translate-y-[50%]" />
                                </div>
                                <template #title>
                                    <div class="relative">
                                        <span class="ml-[10px] text-[15px]">{{ item.meta.short_title || item.meta.title }}</span>
                                    </div>
                                </template>
                            </el-menu-item>
                        </template>
                    </el-menu>
                    <div class="h-[48px]"></div>
                </el-scrollbar>
            </div>
            <el-scrollbar v-if="twoMenuData.length" class="two-menu w-[190px]">
                <div class="w-[190px] h-[64px] flex items-center justify-center text-[16px] border-0 border-b-[1px] border-solid border-[#eee]">{{ route.matched[1].meta.title }}</div>
                <el-menu :default-active="route.name" :router="true" class="aside-menu" :collapse="systemStore.menuIsCollapse">
                    <menu-item v-for="(route, index) in twoMenuData" :routes="route" :key="index" />
                </el-menu>
                <div class="h-[48px]"></div>
            </el-scrollbar>
        </el-main>
    </el-container>
</template>

<script lang="ts" setup>
import { ref, watch,computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import useSystemStore from '@/stores/modules/system'
import useUserStore from '@/stores/modules/user'
import menuItem from './menu-item.vue'
import { img  } from '@/utils/common'
import { findFirstValidRoute } from '@/router/routers'

const systemStore = useSystemStore()
const userStore = useUserStore()
const route = useRoute()
const router = useRouter()
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
</script>

<style lang="scss">
.one-menu{
    .aside-menu:not(.el-menu--collapse) {
        background-color: transparent;
        .el-menu-item{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            margin: 5px;
            height: 54px;
            width: 54px;
            color: #b9b9bf;
            font-size: 14px;
            border-radius: 5px;
            line-height: 1;
            &>div{
                i{
                    position: static;
                    transform: inherit;
                }
                span{
                    display: block;
                    margin: 0;
                    margin-top: 5px;
                }
            }
            &:hover{
                background-color: transparent;
                color: var(--el-color-primary);
            }
            &.is-active{
                background-color: var(--el-color-primary) !important;
                color: #fff !important;
            }
            span{
                font-size: 14px;
                margin-left: 8px;
            }
        }
    }
    .el-menu{
        border: 0;
    }
    .el-scrollbar{
        height: calc(100vh - 65px);
    }
}
.two-menu{
    .aside-menu:not(.el-menu--collapse) {
        width: 190px;
        border: 0;
        padding-top: 10px;
        .el-menu-item{
            height: 40px;
            margin: 0 8px 2px;
            padding: 0 10px !important;
            border-radius: 2px;
            span{
                margin-left: 8px;
                font-size: 14px;
            }
            &.is-active{
                background-color:  #f3f3f3 !important;
                color: #333;
            }
            &:hover{
                background-color: transparent;
                color: var(--el-color-primary);
            }
        }
        .el-sub-menu{
            .el-sub-menu__title{
                margin: 0 8px 2px;
                height: 40px;
                padding-left: 8px;
                border-radius: 2px;
                span{
                    height: 40px;
                    display: flex;
                    align-items: center;
                    font-size: 14px;
                }
                &:hover{
                    background-color: transparent;
                    color: var(--el-color-primary);
                }
            }
            .el-menu-item{
                padding-left: 20px !important;
            }
        }
    }
}

.logo-wrap {
    padding: 0;
    display: flex;
    white-space: nowrap;
    align-items: center;

    .logo {
        height: 100%;
        box-sizing: border-box;
    }

    .logo-title {
        flex: 1;
        width: 0;
        text-overflow: ellipsis;
        overflow: hidden;
        font-size: var(--el-font-size-base);
    }
}
</style>
