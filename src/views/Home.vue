<template>
    <div class="btn-group">
<!--        <jy-button>默认按钮</jy-button>-->
<!--        <jy-button type="primary">默认按钮</jy-button>-->
        <jy-button type="success" @click="addCount">打开MessageBox</jy-button>
<!--        <jy-button type="warning">默认按钮</jy-button>-->
<!--        <jy-button type="info">默认按钮</jy-button>-->
        <jy-button type="danger" @click="openToast">打开Toast</jy-button>
        <jy-button type="warning" @click="showMask">打开mask</jy-button>
        <jy-button type="info" @click="openAlert">打开Alert</jy-button>
    </div>
    <div class="imgBox">
        <jy-image src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"></jy-image>
    </div>
    <div>
        <jy-input v-model="val" type="text"></jy-input>
    </div>
    <div style="display: flex">
        <jy-card title="标题文字" content-type="center" desc="描述文字" img-src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" ></jy-card>
        <jy-card title="标题文字1" content-type="around" desc="描述文字" img-src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" ></jy-card>
        <jy-card title="标题文字2" content-type="center" desc="描述文字" img-src="" ></jy-card>
    </div>
    <jy-mask v-model:show="show">
        <button @click="hideMask">关闭</button>
    </jy-mask>
<!--    <jy-msgbox></jy-msgbox>-->
<!--    <div>-->
<!--        <jy-button>默认按钮</jy-button>-->
<!--        <jy-button type="primary" plain>默认按钮</jy-button>-->
<!--        <jy-button type="success" plain>默认按钮</jy-button>-->
<!--        <jy-button type="warning" plain>默认按钮</jy-button>-->
<!--        <jy-button type="info" plain>默认按钮</jy-button>-->
<!--        <jy-button type="danger" plain>默认按钮</jy-button>-->
<!--    </div>-->
</template>

<script>
    // import JyButton from "../../packages/button/src/button";
    import { ref } from 'vue'
    import { Toast } from "../../packages/toast/src/Toast";
    // import JyImage from "../../packages/image/src/image";
    // import {Toast} from "../../packages/toast/src/Toast";
    import { MsgBox } from '../../packages/messageBox/src/index'
    // import JyInput from "../../packages/input/src/input";
    // import JyMask from "../../packages/mask/src/Mask";
    // import JyCard from "../../packages/card/src/card";
    import {Alert} from "../../packages/alert/src/alert";


    function doToast() {
        Toast({
            message: '提示消息',
            type: 'warning',
            time: 2
        })
    }

    function doAlert() {
        Alert({
            type: 'normal',
            message: 'alert提示',
            time: 3
        })
    }

    export default {
        name: "Home",
        // components: {JyCard, JyMask, JyInput, JyImage, JyButton},
        setup() {
            const count = ref(0)
            const val = ref('')
            const show = ref(false)
            const addCount = () => {
                count.value += 1
                //
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
            const getCount = () => {
                count.value -= 1
                console.log(count)
            }

            const showMask = () => {
                show.value = true
            }
            const hideMask = () => {
                show.value = false
            }

            const openToast = doToast

            const openAlert = doAlert

            return {
                count,
                addCount,
                getCount,
                val,
                showMask,
                hideMask,
                openToast,
                openAlert,
                show
            }
        },
    }
</script>
<style scoped lang="scss">
    .btn-group {
        margin-top: 80px;
    }
    .imgBox {
        width: 200px;
        height: 200px;
        overflow: hidden;
    }
</style>