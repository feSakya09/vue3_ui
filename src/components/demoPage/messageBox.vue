<template>
    <jy-button @click="openMsgBox" type="info">打开消息弹窗</jy-button>
</template>

<script>
    import { MsgBox } from '../../../packages/messageBox/src/index'
    function doMessageBox() {
        MsgBox({
            title: '这里是标题',
            message: '内容显示',
            showCancelButton: true,
            showConfirmButton: true,
            confirmButtonText: '继续',
            cancelButtonText: '终止'
        }).then(() => {
            console.log('确定')
        }).catch(() => {
            console.log('取消')
        })
    }
    export default {
        name: "messageBox",
        setup() {
            const openMsgBox = doMessageBox

            return {
                openMsgBox
            }
        }
    }
</script>

<style scoped>

</style>