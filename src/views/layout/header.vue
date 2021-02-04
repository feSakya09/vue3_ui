<template>
    <header class="header">
        <div class="header-container">
            <div class="logo">
                <img src="../../assets/img/whaleIcon.png" alt="">
                <p>JyUI</p>
            </div>
            <ul class="nav">
                <li v-for="i in navList"
                    :key="i.key"
                    :class="{
                        navActive: activeKey === i.key
                    }"
                    class="navItem"
                    @click="changeNav(i)"
                >
                    {{i.navTitle}}
                </li>
            </ul>
        </div>
    </header>
</template>

<script>
    import {reactive, ref} from 'vue'
    import {useRouter} from 'vue-router'
    export default {
        name: "JyHeader",
        setup() {
            const navList = reactive([
                {
                    navTitle: '简述',
                    key: 0,
                    url: '/home'
                },
                {
                    navTitle: '安装',
                    key: 1,
                    url: '/install'
                },
                {
                    navTitle: 'M端组件',
                    key: 2,
                    url: '/mobile'
                },
                {
                    navTitle: '更新日志',
                    key: 3,
                    url: '/log'
                }
            ])
            const activeKey = ref(0)
            const router = useRouter()

            const changeNav = (item) => {
                activeKey.value = item.key
                router.push({
                    path: item.url
                })
            }

            return {
                navList,
                activeKey,
                changeNav
            }
        }
    }
</script>

<style scoped lang="scss">
    .header {
        height: 65px;
        background-color: #fff;
        top: 0;
        left: 0;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        width: 100%;
        z-index: 100;
        position: fixed;
        .header-container {
            width: 1140px;
            padding: 0;
            margin: 0 auto;
            height: 100%;
            box-sizing: border-box;
            display: flex;
            flex-direction: row;
            align-items: flex-end;
            justify-content: space-between;
            .logo {
                height: 100%;
                display: flex;
                align-items: center;
                img {
                    display: block;
                    width: 55px;
                    height: 44px;
                }
                p {
                    font-size: 30px;
                    color: #02B1FF;
                    margin-left: 5px;
                }
            }
            .nav {
                margin: 0;
                .navItem {
                    display: inline-block;
                    height: 58px;
                    padding: 0 20px;
                    line-height: 58px;
                    &.navActive {
                        color: #02B1FF;
                        border-bottom: 2px solid #02B1FF;
                    }
                }
            }
        }

    }
</style>