<template>
    <el-aside class="layout-aside dark w-auto">
        <el-scrollbar>
            <side class="hidden-xs-only slide" />
        </el-scrollbar>
        
    </el-aside>
</template>

<script lang="ts" setup>
import { watch, computed } from 'vue'
import { useRoute } from 'vue-router'
import side from './side.vue'
import useSystemStore from '@/stores/modules/system'

const systemStore = useSystemStore()
const dark = computed(() => {
    return systemStore.dark
})

const route = useRoute()
watch(route, () => {
    systemStore.$patch(state => {
        state.menuDrawer = false
    })
})
</script>

<style lang="scss">
.layout-aside {
    //--side-dark-color: #141414;
    //background-color: var(--side-dark-color, var(--el-bg-color));

    &.bright {
        // background-color: #F5F7F9;

        li {
            // background-color: #F5F7F9;

            &.is-active:not(.is-opened) {
                position: relative;
                color: #333;
                // background-color: #fff;

                &::after {
                    content: "";
                    position: absolute;
                    top: 0;
                    bottom: 0;
                    left: 0;
                    width: 2px;
                    //background-color: var(--el-menu-active-color);
                }
            }
        }
    }

    .slide {
        border-right: 1px solid var(--el-border-color-extra-light);
    }
}

.aside-drawer {
    .el-drawer__body {
        padding: 0px !important;
    }
}
</style>
