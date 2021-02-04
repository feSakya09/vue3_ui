<template>
    <img
        :src="src"
        :class="[
            imageClass
        ]"
        :style="imageStyle">
</template>

<script>
    import {computed, onMounted} from 'vue'
    // const modeType  = ['none', 'fill', 'cover', 'contain', 'scale-down']
    export default {
        name: "JyImage",
        props: {
            width: Number,
            height: Number,
            src: String,
            fit: String,
            zIndex: {
                type: Number,
                default: 1000
            },
            mode: {
                type: String,
            }
        },
        setup(props, ctx) {
            const imageClass = computed(() => [
                'jy-image__inner'
            ])
            const imageStyle = {
                height: props.height + 'px',
                width: props.width + 'px'
            }
            onMounted(() => {
                console.log(ctx)
            })
            return {
                imageClass,
                imageStyle
            }
        }
    }
</script>

<style scoped>

</style>