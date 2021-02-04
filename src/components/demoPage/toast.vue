<template>
    <div class="btnBox">
        <jy-button @click="openToastText">基础文字提示</jy-button>
    </div>
    <div class="btnBox">
        <jy-button @click="openToastSuccess" type="success">成功提示</jy-button>
    </div>
    <div class="btnBox">
        <jy-button @click="openToastFailed" type="danger">失败提示</jy-button>
    </div>
    <div class="btnBox">
        <jy-button @click="openToastWarn" type="warning">警告提示</jy-button>
    </div>
</template>

<script>
    import { Toast } from '../../../packages/toast/src/Toast'

    function doToastText() {
        Toast({
            message: '基础文字提示'
        })
    }
    function doToastSuccess() {
        Toast({
            type: 'success',
            time: 2
        })
    }
    function doToastFailed() {
        Toast({
            type: 'failed',
            time: 2
        })
    }
    function doToastWarn() {
        Toast({
            type: 'warning',
            time: 2
        })
    }

    export default {
        name: "toast",
        setup() {
            const openToastText = doToastText
            const openToastSuccess = doToastSuccess
            const openToastFailed = doToastFailed
            const openToastWarn = doToastWarn

            return {
                openToastText,
                openToastSuccess,
                openToastFailed,
                openToastWarn
            }
        }
    }
</script>

<style scoped lang="scss">
.btnBox {
    margin-bottom: 40px;
}
</style>