<template>
    <TabsWrapper/>
 </template>

<script>
    import TabsWrapper from "./TabsWrapper";
    import {FETCH_VARIANTS} from "../store/action-types";

    export default {
        name: "Run",
        components: {TabsWrapper},
        created() {
            this.$store.dispatch(FETCH_VARIANTS);
        },
    }
</script>

<style scoped>

</style>
