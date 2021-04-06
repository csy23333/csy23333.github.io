<template>
    <div id="app">
        <cbox> </cbox>
        <!-- <p>{{ cmovies }}</p> -->
    </div>
</template>

<script>
import Cbox from "@/components/todolist/Cbox.vue";
export default {
    name: "App",
    components: {
        Cbox,
    },
};
</script>

<style>
@import url("./assets/css/base.css");
</style>
