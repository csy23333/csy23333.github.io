<template>
    <div id="cbox">
        <cinput></cinput>
        <coption></coption>
        <cfooter></cfooter>
    </div>
</template>

<script>
import Cinput from "./Cinput.vue";
import Coption from "./Coption.vue";
import Cfooter from "./Cfooter.vue";
export default {
    name: "Cbox",
    components: {
        Cinput,
        Coption,
        Cfooter,
    },
};
</script>

<style scoped>
#cbox {
    position: relative;
    width: 500px;
    margin: 50px auto;
    border: 5px solid skyblue;
    border-radius: 7px;
    padding: 30px;
    background-color: #eff;
}
</style>
