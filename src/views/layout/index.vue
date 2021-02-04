<template>
    <layout-header></layout-header>
    <layout-container></layout-container>
</template>

<script>
    import LayoutHeader from './header'
    import LayoutContainer from './container'
    export default {
        name: "index",
        components: {
            LayoutHeader,
            LayoutContainer
        }
    }
</script>

<style scoped>

</style>