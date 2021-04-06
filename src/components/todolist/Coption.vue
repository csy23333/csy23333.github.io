<template>
    <div id="coption">
        <div v-for="(item, index) in $store.state.todo" class="coption">
            <input
                type="checkbox"
                v-model="todoDone"
                :value="$store.state.todo[index]"
                @change="changeTodo"
            />
            {{ item }}
            <button @click="removeItem(index)">Delete</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "Coption",
    components: {},
    data() {
        return {
            todoDone: [],
        };
    },

    methods: {
        removeItem(index) {
            this.$store.commit("deleteItem", [index, this.todoDone]);
        },
        changeTodo() {
            this.$store.commit("changeCounter", this.todoDone);
        },
    },
};
</script>

<style scoped>
#coption {
    margin-top: 30px;
    font-size: 20px;
    margin-bottom: 100px;
}
.coption {
    width: 100%;
    height: 40px;
    line-height: 40px;
    margin-bottom: 7px;
    border-bottom: 2px solid cyan;
}
.coption:hover {
    border: 2px solid skyblue;
    border-radius: 7px;
    background-color: pink;
}
input {
    width: 22px;
    height: 22px;
    float: left;
    margin: 7px 7px 0 7px;
}
button {
    float: right;
    margin-top: 3px;
    margin-right: 7px;
    width: 45px;
    height: 30px;
    /* border-radius: 7px; */
    background-color: #eef;
    border: 1px solid cyan;
}
</style>
