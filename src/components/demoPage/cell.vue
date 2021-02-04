<template>
    <h4>
        基础用法
    </h4>
    <jy-cell-group>
        <jy-cell title="标题" value="内容" :is-link="true"></jy-cell>
        <jy-cell title="标题" value="内容" desc="描述"></jy-cell>
    </jy-cell-group>
</template>

<script>
    export default {
        name: "cell",
    }
</script>

<style scoped>

</style>