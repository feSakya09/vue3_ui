<template>
    <transition name="confirm-fade">
        <jy-mask :show="visible">
            <div class="jy-massageBox">
                <div class="jy-massageBox__header">{{title}}</div>
                <div class="jy-messageBox__body">
                    {{message}}
                </div>
                <div class="jy-message__footer">
                    <div v-if="showCancelButton" @click="clickFun('cancel')" class="jy-message__btn jy-message__cancel_btn">
                        {{cancelButtonText}}</div>
                    <div v-if="showConfirmButton" @click="clickFun('confirm')" class="jy-message__btn jy-message__confirm_btn">
                        {{confirmButtonText}}
                    </div>
                </div>
            </div>
        </jy-mask>
    </transition>
</template>

<script>
    import {ref, onMounted } from 'vue'
    import JyMask from "../../mask/src/Mask";

    export default {
        name: "JyMsgbox",
        components: {JyMask},
        props: {
            title: String,
            callBack: {},
            message: String,
            showConfirmButton: {
                type: Boolean,
                default: true
            },
            showCancelButton: {
                type: Boolean,
                default: true
            },
            confirmButtonText: {
                type: String,
                default: '确认'
            },
            cancelButtonText: {
                type: String,
                default: '取消'
            }
        },
        setup(props) {
            // const visible = ref(false)
            let visible = ref(false)
            console.log('state:', visible)
            const clickFun = action => {
                console.log(props)
                if (action === 'cancel') {
                    // 取消
                    doClose()
                    props.callBack.reject && props.callBack.reject(action)

                } else if (action === 'confirm') {
                    // 确定
                    doClose()
                    props.callBack.resolve && props.callBack.resolve(action)

                }
            }

            function doClose() {
                if(!visible.value) return
                visible.value = false
            }

            onMounted(() => {
                visible.value = true
            })
            // watch(() => visible.value, val => {
            //
            // })

            return {
                clickFun,
                visible
            }
        }
    }
</script>

<style scoped lang="scss">
    .jy-massageBox {
        width: 280px;
        background: white;
        /*position: absolute;*/
        user-select: none;
        margin: 0 auto;
        border-radius: 5px;
        .jy-massageBox__header {
            height: 48px;
            width: 100%;
            text-align: center;
            font-size: 20px;
            font-weight: 500;
            color: #333;
            padding-top: 20px;
            box-sizing: border-box;
        }
        .jy-messageBox__body {
            padding: 20px 15px 32px;
            text-align: center;
            font-size: 16px;
            color: #666;
            line-height: 1.5;
            border-bottom: 1px solid #eee;
        }
        .jy-message__footer {
            height: 62px;
            display: flex;
            .jy-message__btn {
                flex: 1;
                text-align: center;
                font-size: 16px;
                margin: 14px 0;
                padding: 6px 0;
                &.jy-message__confirm_btn {
                    color: #02b1ff;
                }
            }
        }
    }
    /* 进入和出去的动画 */
    .confirm-fade-enter-active {
        animation: opacity 0.3s;
    }
    .confirm-fade-enter-active .confirm-content-wrap {
        animation: scale 0.3s;
    }
    .confirm-fade-leave-active {
        animation: outOpacity 0.2s;
    }
    /* 进来的动画 */
    @keyframes opacity {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
    @keyframes scale {
        0% {
            transform: scale(0);
        }
        60% {
            transform: scale(1.1);
        }
        100% {
            transform: scale(1);
        }
    }

    /* 出去的动画 */
    @keyframes outOpacity {
        0% {
            opacity: 1;
        }
        100% {
            opacity: 0;
        }
    }
</style>