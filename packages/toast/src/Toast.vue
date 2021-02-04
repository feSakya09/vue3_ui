<template>
    <transition name="jy-toast-pop">
        <div class="jy-toast" v-show="visible" :class="customClass" :style="{ 'padding': iconClass === '' ? '10px' : '20px' }">
            <i class="jy-toast-icon" :class="type" v-if="type !== '' || type !== 'default'"></i>
            <span class="jy-toast-text" v-if="type === '' || type === 'default'" :style="{ 'padding-top': iconClass === '' ? '0' : '10px' }">{{ message }}</span>
        </div>
    </transition>
</template>

<script>
    import {ref, computed, onMounted} from 'vue'

    const typeList = ['default', 'success', 'failed', 'warning']

    export default {
        name: "Toast",
        props: {
            iconClass: {
                type: String,
                default: ''
            },
            message: String,
            className: {
                type: String,
                default: ''
            },
            position: {
                type: String,
                default: 'middle'
            },
            type: {
                type: String,
                default: 'default',
                validator(type) {
                    if(!typeList.includes(type)){
                        throw Error(
                            '类型错误'
                        )
                    }
                }
            }
        },
        setup(props) {
            const visible = ref(true)

            const customClass = computed(() => {
                var classes = []
                switch (props.position) {
                    case 'top':
                        classes.push('jy-toast__isPositionTop')
                        break;
                    case 'bottom':
                        classes.push('jy-toast_isPositionBottom')
                        break;
                    default:
                        classes.push('jy-toast__isPotionMiddle')
                        break;
                }
                classes.push(props.className)

                classes.join(' ')
                return classes
            })
            onMounted(() => {

            })
            return {
                visible,
                customClass
            }
        }
    }
</script>