import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);


const ls = {
    fetch(){
        const todoItems = [];
        for (let i = 0; i < localStorage.length; i++) {
            if( localStorage.key(i) !== "loglevel:webpack-dev-server")
            todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
        }
        return todoItems;
    }
}
export const store = new Vuex.Store({
    state : {
        todoItems : ls.fetch(),
    },
    mutations : {
        addNewTodo(state, todoItem){
            const obj = { completed : false, item : todoItem };
            localStorage.setItem(todoItem, JSON.stringify(obj));
            state.todoItems.push(obj);
        }
    }
})