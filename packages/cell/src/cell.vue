<template>
    <div class="jy-cell">
        <div class="jy-cell__title">
            <span>{{title}}</span>
            <div class="jy-cell__desc">{{desc}}</div>
        </div>
        <div class="jy-cell__value">
            <span>{{value}}</span>
        </div>
        <i v-if="isLink" class="jy-cell__icon"></i>
    </div>
</template>

<script>
    export default {
        name: "JyCell",
        props: {
            title: String,
            value: String,
            desc: String,
            isLink: {
                type: Boolean,
                default: false
            }
        }
    }
</script>

<style scoped lang="scss">
    .jy-cell {
        padding: 10px 16px;
        display: flex;
        position: relative;
        align-items: center;
        &::after {
            content: ' ';
            position: absolute;
            box-sizing: border-box;
            pointer-events: none;
            right: 16px;
            bottom: 0;
            left: 16px;
            border-bottom: 1px solid #ebedf0;
            -webkit-transform: scaleY(0.5);
            transform: scaleY(0.5);
        }
        &:last-child {
            &::after {
                display: none;
            }
        }
        .jy-cell__title {
            color: #323233;
            font-size: 14px;
            flex: 1;
            text-align: left;
            .jy-cell__desc {
                margin-top: 4px;
                color: #969799;
                font-size: 12px;
            }
        }
        .jy-cell__value {
            overflow: hidden;
            color: #969799;
            font-size: 14px;
            text-align: right;
            flex: 1;
        }
        .jy-cell__icon {
            width: 16px;
            height: 16px;
            background: url("./img/arrow-right.png") no-repeat 100% 100%;
            background-position: center center;
        }
    }
</style>