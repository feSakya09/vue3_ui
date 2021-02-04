<template>
    <div class="homePage">
        <img class="jy-logo" src="../../assets/img/logo.jpeg" alt="">
        <h1>JyUI</h1>
        <p class="desc">鲸鱼培优定制化组件库</p>
        <jy-button type="primary">快速上手 →</jy-button>
        <div class="superiority">
            <div class="superiorityItem" v-for="(i, index) in superiorityList" :key="index">
                <h1>{{i.title}}</h1>
                <p>{{i.desc}}</p>
            </div>
        </div>
    </div>
</template>

<script>
    import { reactive } from 'vue'
    import JyButton from "../../../packages/button/src/button";
    export default {
        name: "HomePage",
        components: {JyButton},
        setup() {
            const superiorityList = reactive([
                {
                    title: '效率去重',
                    desc: '让重复编写代码的经历一去不复返，更多的关注业务和逻辑'
                },
                {
                    title: '性能提升',
                    desc: '让无用的第三方库加载不再出现，高度定制化按需加载'
                },
                {
                    title: '体验至上',
                    desc: '以每一个组件为中心进行迭代，颗粒化用户体验，将友好的体验做的极致'
                }
            ])

            return {
                superiorityList
            }
        }
    }
</script>

<style scoped lang="scss">
    .homePage {
        width: 1140px;
        margin: 0 auto;
        .jy-logo {
            width: 333px;
            height: 333px;
            display: block;
            margin: 0 auto;
        }
        .desc {
            font-size: 28px;
            text-align: center;
            border-bottom: none;
            margin: 10px auto;
            color: #6a8bad;
            font-weight: 300;
        }
        .superiority {
            display: flex;
            justify-content: space-between;
            border-top: 1px solid #dcdfe6;
            padding-top: 40px;
            margin-top: 20px;
            .superiorityItem {
                width: 327px;
                text-align: left;
                h1 {
                    font-size: 22px;
                    color: #3a5169;
                }
                p {
                    font-size: 16px;
                    color: #2c3e50
                }
            }
        }
    }
</style>