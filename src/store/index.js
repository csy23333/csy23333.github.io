import Vue from "vue";
import Vuex from "vuex";

//1.安装插件
Vue.use(Vuex);

//2.创建对象
const store = new Vuex.Store({
  state: {
    todo: ["吃饭", "玩游戏", "敲代码"],
    hadFinish: 0,
    all: 3,
    notFinish: 3,
  },
  mutations: {
    addTodo(state, item) {
      state.todo.push(item);
      state.all = state.todo.length;
      state.notFinish = state.todo.length;
    },
    deleteItem(state, [index, removeFinish]) {
      let flag = state.todo.splice(index, 1);
      for (let key in removeFinish) {
        if (flag == removeFinish[key]) {
          //遍历 removeFinish,如果被移除的 flag 在 removeFinish 中也有,就将该项删除,同时不能用全等, 原因如下注释
          // console.log(typeof flag);// 输出: object
          // console.log(typeof removeFinish[key]);// 输出: string
          removeFinish.splice(key, 1);
          state.hadFinish = state.hadFinish - 1;
        }
      }
      state.all = state.todo.length;
      state.notFinish = state.all - state.hadFinish;
    },
    changeCounter(state, todoDone) {
      state.hadFinish = todoDone.length;
      state.notFinish = state.all - state.hadFinish;
    },
  },
});

//3.导出 store 对象
export default store;
