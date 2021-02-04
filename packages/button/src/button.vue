<template>
    <button
        class="jy-button"
        :class="[
            classify,
            {
                'is-plain': plain
            }
        ]">
        <slot></slot>
    </button>
</template>

<script>
    import { computed } from 'vue'
    const typeDict = ['default', 'primary', 'success', 'warning', 'info', 'danger']
    export default {
        name: "JyButton",
        props: {
            type: {
                type: String,
                default: 'default',
                validator(type) {
                    if(!typeDict.includes(type)){
                        throw Error(
                            '类型错误'
                        )
                    }
                }
            },
            plain: Boolean
        },
        setup(props) {
            const classify = computed(() => [
                'jy-btn',
                `jy-btn__${props.type}`,
            ])
            return {
                classify
            }
        }
    }
</script>