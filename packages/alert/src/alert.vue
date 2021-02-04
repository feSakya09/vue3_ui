<template>
    <transition name="alert-fade">
        <div v-if="visible" class="jy-alert__container" :class="colorClassify">
            <div class="jy-alert__message">{{message}}</div>
        </div>
    </transition>
</template>

<script>
    import { computed, ref, onMounted , watch} from 'vue'
    const typeDict = ['normal', 'danger', 'success', 'warning', 'info']
    export default {
        name: "Alert",
        props: {
            type: {
                type: String,
                default: 'normal',
                validator(type) {
                    if(!typeDict.includes(type)){
                        throw Error(
                            '类型错误'
                        )
                    }
                }
            },
            message: String,
            time: {
                type: Number,
                default: 3
            }
        },
        setup(props) {
            const visible = ref(false)
            onMounted(() => {
                visible.value = true
            })

            const watchStatus = watch(() => visible.value, val => {
                if(val === true) {
                    setTimeout(() => {
                        visible.value = false
                        watchStatus()
                    }, props.time * 1000)
                }
            })

            const colorClassify = computed(() => [
                `jy-alert__container_${props.type}`
            ])
            return {
                visible,
                colorClassify,
                watchStatus
            }
        }
    }
</script>

<style scoped lang="scss">
.jy-alert__container {
    width: 100%;
    height: 40px;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    &.jy-alert__container_normal {
        background-color: #eef6fd;
        color: #409eff;
    }
    &.jy-alert__container_danger {
        background-color: #fef0f0;
        color: #f56c6c;
    }
    &.jy-alert__container_success {
        background-color: #f0f9eb;
        color: #67c23a;
    }
    &.jy-alert__container_warning {
        background-color:#fdf6ec;
        color: #e6a23c;
    }
    &.jy-alert__container_info {
        background-color: #f4f4f5;
        color: #909399;
    }
    .jy-alert__message {
        /*color: #ffffff;*/
    }
}
    .alert-fade-enter-active {
        animation: alertIn .3s;
    }
    .alert-fade-enter-active .alert-content-wrap {

    }
    .alert-fade-leave-active {
        animation: alertOut .3s;
    }

    @keyframes alertIn {
        0% {
            top: -40px;
        }
        100% {
            top: 0;
        }
    }
    @keyframes alertOut {
        0% {
            top: 0;
        }
        100% {
            top: -40px;
        }
    }
</style>