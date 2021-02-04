<template>
    <h4>用法</h4>
    <jy-button style="display: block; margin-bottom: 20px" @click="alertNormal">点击触发通用提示</jy-button>
    <jy-button type="success" style="display: block; margin-bottom: 20px" @click="alertSuccess">点击触发成功提示</jy-button>
    <jy-button type="warning" style="display: block; margin-bottom: 20px" @click="alertWarning">点击触发警告提示</jy-button>
    <jy-button type="danger" style="display: block; margin-bottom: 20px" @click="alertDanger">点击触发危险提示</jy-button>
    <jy-button type="info" style="display: block; margin-bottom: 20px" @click="alertInfo">点击触发信息提示</jy-button>
</template>

<script>
    import { Alert } from "../../../packages/alert/src/alert";

    function doAlertNormal() {
        Alert({
            type: 'normal',
            message: '默认提示',
            time: 3
        })
    }
    function doAlertSuccess() {
        Alert({
            type: 'success',
            message: '成功提示',
            time: 3
        })
    }
    function doAlertDanger() {
        Alert({
            type: 'danger',
            message: '危险提示',
            time: 3
        })
    }
    function doAlertWarning() {
        Alert({
            type: 'warning',
            message: '警告提示',
            time: 3
        })
    }
    function doAlertInfo() {
        Alert({
            type: 'info',
            message: '信息提示',
            time: 3
        })
    }

    export default {
        name: "alert",
        setup() {
            const alertNormal = doAlertNormal
            const alertSuccess = doAlertSuccess
            const alertDanger = doAlertDanger
            const alertWarning = doAlertWarning
            const alertInfo = doAlertInfo
            return {
                alertNormal,
                alertSuccess,
                alertDanger,
                alertWarning,
                alertInfo
            }
        }
    }
</script>

<style scoped>

</style>