<template>
    <div class="state">
        <span>已完成: </span>
        <span class="bold">{{ $store.state.hadFinish }}</span>
        <br />
        <span>全部: </span>
        <span class="bold">{{ $store.state.all }}</span>
        <br />
        <span>未完成: </span>
        <span class="bold">{{ $store.state.notFinish }}</span>
    </div>
</template>

<script>
export default {
    name: "Cfooter",
};
</script>

<style scoped>
.state {
    position: absolute;
    bottom: 0;
    left: 30px;
    /* border: 2px solid cyan; */
    font-size: 20px;
}
.bold {
    font-weight: bold;
}
</style>
