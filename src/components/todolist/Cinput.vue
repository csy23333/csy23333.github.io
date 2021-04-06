<template>
    <div id="cinput">
        <input type="text" placeholder="Please Enter The Task" v-model="inputText" />
        <button @click="bClick">提交</button>
    </div>
</template>

<script>
export default {
    name: "Cinput",
    data() {
        return {
            inputText: "",
        };
    },
    methods: {
        bClick() {
            this.$store.commit("addTodo", this.inputText);
            this.inputText = "";
        },
    },
};
</script>

<style scoped>
#cinput {
    overflow: hidden;
    position: relative;
}
#cinput input {
    float: left;
    width: 425px;
    height: 39px;
    border-right: none;
    border: 2px solid skyblue;
    border-radius: 7px;
    font-size: 18px;
    text-indent: 1em;
    outline: none;
    /* color: red; */
}
input::placeholder {
    color: #ccc;
}
#cinput button {
    position: absolute;
    top: 0;
    right: 0;
    width: 70px;
    height: 39px;
    border-radius: 7px;
    border: 2px solid skyblue;
    font-size: 18px;

    /* border-color: skyblue; */
}
</style>
