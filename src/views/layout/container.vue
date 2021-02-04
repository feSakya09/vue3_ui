<template>
    <div class="container">
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "container"
    }
</script>

<style scoped lang="scss">
    .container {
        padding-top: 70px;
        display: flex;
        justify-content: space-between;
    }
</style>