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
    getters : {
        getTodoItems(state){
            return state.todoItems;
        }
    },
    mutations : {
        addNewTodo(state, todoItem){
            const obj = { completed : false, item : todoItem };
            localStorage.setItem(todoItem, JSON.stringify(obj));
            state.todoItems.push(obj);
        },
        removeItem(store, payload){
            localStorage.removeItem(payload.todoItem.item);
            store.todoItems.splice(payload.index, 1);
        },
        toggleCheckBtn(store, payload){
            store.todoItems[payload.index].completed = !store.todoItems[payload.index].completed
            localStorage.removeItem(payload.todoItem.item);
            localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
        },
        clearAll(store){
            localStorage.clear();
            store.todoItems = [];
        }
    }
})