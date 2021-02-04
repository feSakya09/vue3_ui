<template>
    <div ref="wrapper" class="bScroll">
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>

<script >
    import BScroll from "better-scroll";
    export default {
        name: 'JyScroll',
        props: {
            /**
             * 1 滚动的时候会派发scroll事件，会截流。
             * 2 滚动的时候实时派发scroll事件，不会截流。
             * 3 除了实时派发scroll事件，在swipe的情况下仍然能实时派发scroll事件
             */
            probeType: {
                type: Number,
                default: 1
            },
            /**
             * 点击列表是否派发click事件
             */
            click: {
                type: Boolean,
                default: true
            },
            /**
             * 是否开启横向滚动
             */
            scrollX: {
                type: Boolean,
                default: false
            },
            /**
             * 是否派发滚动事件
             */
            listenScroll: {
                type: Boolean,
                default: false
            },
            /**
             * 列表的数据
             */
            data: {
                type: Array,
                default: null
            },
            /**
             * 是否派发滚动到底部的事件，用于上拉加载
             */
            pullup: {
                type: Boolean,
                default: false
            },
            /**
             * 是否派发顶部下拉的事件，用于下拉刷新
             */
            pulldown: {
                type: Boolean,
                default: false
            },
            /**
             * 是否派发列表滚动开始的事件
             */
            beforeScroll: {
                type: Boolean,
                default: false
            },
            /**
             * 当数据更新后，刷新scroll的延时。
             */
            refreshDelay: {
                type: Number,
                default: 20
            }
        },
        data() {
            return {
                loading2: true,
                scroll: null,
                inPullUp: false,
                inPullDown: false,
                noDataShow: false,
                continuePullUp: true,
            };
        },

        mounted() {
            this.$nextTick(() => {
                this._initScroll()
            })
        },
        methods: {
            _initScroll() {
                if (!this.$refs.wrapper) {
                    return;
                }
                this.scroll = new BScroll(this.$refs.wrapper, {
                    click: true,
                    bounce: false,
                    startY: 0,
                    scrollX: this.scrollX,

                });

                // 是否派发滚动事件
                if (this.listenScroll) {
                    this.scroll.on('scroll', (pos) => {
                        this.$emit('scroll', pos)
                    })
                }

                // 是否派发滚动到底部事件，用于上拉加载
                if (this.pullup) {
                    this.scroll.on('scrollEnd', () => {
                        // 滚动到底部
                        if (this.scroll.y <= (this.scroll.maxScrollY + 50)) {
                            this.$emit('scrollToEnd')
                        }
                    })
                }

                // 是否派发顶部下拉事件，用于下拉刷新
                if (this.pulldown) {
                    this.scroll.on('scrollEnd', () => {
                        // 下拉动作
                        if (this.scroll.y >= -120) {
                            this.$emit('pulldown')
                        }
                    })
                }

                // 是否派发列表滚动开始的事件
                if (this.beforeScroll) {
                    this.scroll.on('beforeScrollStart', () => {
                        this.$emit('beforeScroll')
                    })
                }
            },
            disable() {
                // 代理better-scroll的disable方法
                this.scroll && this.scroll.disable()
            },
            enable() {
                // 代理better-scroll的enable方法
                this.scroll && this.scroll.enable()
            },
            refresh() {
                // 代理better-scroll的refresh方法
                this.scroll && this.scroll.refresh()
            },
            scrollTo() {
                // 代理better-scroll的scrollTo方法
                this.scroll && this.scroll.scrollTo.apply(this.scroll, arguments)
            },
            scrollToElement() {
                // 代理better-scroll的scrollToElement方法
                this.scroll && this.scroll.scrollToElement.apply(this.scroll, arguments)
            },
            finishPullUp() {
                this.scroll && this.scroll.finishPullUp();
            },
        },

        watch: {
            dataList() {
                this.$nextTick(() => {
                    this.refresh();
                });
            },
            noData() {
                this.beforePullUpWord = this.langInit(3);
                setTimeout(() => {
                    this.noDataShow = false;
                }, 500);
            },
        },
        components: {
        },
    };
</script>

<style lang="scss" scoped>
    /*@import "../../../assets/css/base.scss";*/
    .bScroll {
        position: absolute;
        left: 0;
        top: 0;
        overflow: hidden;
        width: 100%;
        height: 100%;
    }

    .list-content {
        position: relative;
        z-index: 10;
        // background: #fff;
    }

    .list-item {
        height: 60px;
        line-height: 60px;
        font-size: 18px;
        padding-left: 20px;
        border-bottom: 1px solid #e5e5e5;
    }

    .pulldown-wrapper {
        position: absolute;
        width: 100%;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: all;
    }

    .pullup-wrapper {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 16px 0;
    }

    .pullDown {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        margin: auto;
    }

    .pullDown-enter-active {
        transition: all 0.2s;
    }

    .pullDown-enter,
    .pullDown-leave-active {
        transform: translateY(-100%);
        transition: all 0.2s;
    }
    .loading_animation {
        animation: loding_animation 1s linear infinite;
    }
    @keyframes loding_animation {
        0% {
            transform: rotate(0deg);
        }

        100% {
            transform: rotate(360deg);
        }
    }
</style>