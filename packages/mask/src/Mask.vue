<template>
    <div v-if="show" ref="jyMask" @touchmove.prevent  class="jy-mask" >
        <slot></slot>
    </div>
</template>

<script>
    import {computed, toRef} from 'vue'
    export default {
        name: "JyMask",
        props: {
            show: {
                type: Boolean,
                required: true,
                default: false
            }
        },
        setup(props) {
            const closeMask = () => {
            }
            console.log(props.show);
            console.log(toRef(props.show));
            const toR = computed(() => {
                return toRef(props.show)
            })

            return {
                closeMask,
                toR,
            }
        }
    }
</script>

<style scoped lang="scss">
    .jy-mask {
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background-color: rgba(0,0,0,.7);
    }
</style>