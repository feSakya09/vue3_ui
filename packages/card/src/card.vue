<template>
    <section class="jy-card">
        <figure class="jy-card__image" :style="imgStyle" v-if="imgSrc" ></figure>
        <section class="jy-card__content" :class="contentType === 'around' ? 'around' : 'center'">
            <h3 class="jy-card__content_title">{{title}}</h3>
            <section class="jy-card__content_desc">{{desc}}</section>
        </section>
    </section>
</template>

<script>
    import { ref, computed} from 'vue'
    export default {
        name: "JyCard",
        props: {
            imgSrc: String,
            title: String,
            desc: String,
            contentType: {
                type: String,
                default: 'center'
            }
        },
        setup(props) {
            const imgStyle = computed(() => {
                const src = ref(props.imgSrc)
                return {
                    background: `url('${src.value}') no-repeat center/cover`
                }
            })
            return {
                imgStyle,
            }
        }
    }
</script>

<style scoped lang="scss">
.jy-card {
    width: 343px;
    height: 128px;
    border-radius: 12px;
    box-shadow:1px 0 15px #6D6D6D;
    display: flex;
    padding: 14px;
    box-sizing: border-box;
    margin: 0 auto;
    .jy-card__image {
        width:100px;
        height: 100px;
        /*margin-right: 16px;*/
        background: #8cc5ff;
        border-radius:5px;
        margin: 0 16px 0 0;
    }
    .jy-card__content {
        text-align: left;
        height: 100px;
        min-width:199px;
        display: flex;
        flex-direction: column;
        &.around {
            justify-content: space-between;
        }
        &.center {
            justify-content: center;
        }
        /*background-color: #42b983;*/
        .jy-card__content_title {
            width: 100%;
            font-size: 16px;
            font-family: PingFangSC-Medium, PingFang SC;
            font-weight: 500;
            color: #333333;
            max-height: 44px;
            line-height: 22px;
            text-overflow: -o-ellipsis-lastline;
            overflow: hidden;
            text-overflow: ellipsis;
            margin: 0;
            margin-bottom: 8px;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            line-clamp: 2;
            -webkit-box-orient: vertical;
        }
        .jy-card__content_desc {
            font-size: 14px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #999999;
            line-height: 20px;
        }
    }
}
</style>