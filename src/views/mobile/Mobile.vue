<template>
    <div class="mobilePage left">
        <el-menu
                default-active="0"
                class="el-menu-vertical">
            <div v-for="item in navList" :key="item.key">
                <el-menu-item @click="linkMenu(item)" class="menuStyle" align="left" :index="item.key">
                    <template #title>{{item.title}}</template>
                </el-menu-item>
            </div>
        </el-menu>
    </div>
    <div class="mobilePage center">center</div>
    <div class="mobilePage right">
        <iframe class="phoneBox" :src="compUrl" frameborder="0"></iframe>
    </div>
</template>

<script>
    import { ref, reactive } from 'vue'

    export default {
        name: "MobilePage",
        setup() {
            const navList = reactive([
                {
                    title: 'Button 按钮',
                    key: 0,
                    path: '/button'
                },
                {
                    title: 'Cell 单元格',
                    key: 1,
                    path: '/cell'
                },
                {
                    title: 'Alert 警告',
                    key: 2,
                    path: '/alert'
                },
                {
                    title: 'MessageBox 弹框',
                    key: 3,
                    path: '/messageBox'
                },
                {
                    title: 'Card 卡片',
                    key: 4,
                    path: '/card'
                },
                {
                    title: 'Toast 轻提示',
                    key: 5,
                    path: '/toast'
                },
                {
                    title: 'Input 输入框',
                    key: 6,
                    path: '/input'
                },
                {
                    title: 'Image 图片',
                    key: 7,
                    path: '/image'
                },
                {
                    title: 'Scroll 滚动',
                    key: 8,
                    path: '/scroll'
                },
            ])
            const compUrl = ref('/demoIndex/button')


            function linkMenu(item) {
                compUrl.value = '/demoIndex' + item.path
            }
            return {
                compUrl,
                navList,
                linkMenu,
            }
        }
    }
</script>

<style scoped lang="scss">
    .mobilePage {
        /*float: left;*/
        height: 100%;
        &.center {
            min-width: 500px;
        }
        &.right {
            /*float: right;*/
            width: 375px;
            height: 667px;
            border-radius: 20px;
            overflow: hidden;
            box-shadow: 0 8px 12px #ebedf0;
            /*background-color: #42b983;*/
            .phoneBox {
                background-color: #efefef;
                width: 100%;
                height: 100%;
                overflow: hidden;
            }
        }
        .el-menu-vertical {
            width: 200px;
            height: 100%;
            .menuStyle {
                text-align: left;
            }
        }
    }
</style>