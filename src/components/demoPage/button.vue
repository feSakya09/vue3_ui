<template>
    <h4 class="title">按钮类型</h4>
    <div class="button-box">
        <jy-button class="btn" type="default">默认按钮</jy-button>
        <jy-button class="btn" type="primary">主要按钮</jy-button>
        <jy-button class="btn" type="success">成功按钮</jy-button>
        <jy-button class="btn" type="danger">危险按钮</jy-button>
        <jy-button class="btn" type="warning">警告按钮</jy-button>
        <jy-button class="btn" type="info">信息按钮</jy-button>
    </div>
</template>

<script>
    // import Scroll from '../../../packages/scroll/src/scroll'
    export default {
        name: "button",
        components: {
            // Scroll
        }
    }
</script>

<style scoped lang="scss">
    .title {
        text-align: left;
        font-size: 14px;
        font-weight: normal;
        color: #979595;
    }
    .button-box {
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        .btn {
            margin-bottom: 10px;
        }
    }
</style>