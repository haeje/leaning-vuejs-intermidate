<template>
  <div id="app">
    <todo-header/>
    <todo-input/>
    <todo-list v-on:removeItem="removeItemHandler" v-on:toggleCheck="toggleCheckHandler" />
    <todo-footer v-on:clearAll="clearAllHandler"/>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'

export default {
  data : function(){
    return {
      todoItems : []
    }
  },
  methods:{
    removeItemHandler(todoItem, index){
      localStorage.removeItem(todoItem.item);
      this.todoItems.splice(index, 1);
    },
    toggleCheckHandler : function(todoItem, index){
      this.todoItems[index].completed = !this.todoItems[index].completed
      localStorage.removeItem(todoItem.item);
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    },
    clearAllHandler : function(){
      localStorage.clear();
      this.todoItems = [];
    }
  },
  components: {
    TodoHeader, TodoInput, TodoList, TodoFooter
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

body{
  text-align: center;
  background-color: #f6f6f6;
  margin: 0 auto;
  display: block;
}

input {
  border-style: groove;
  width : 200px;
}

button{
  border-style: groove;
}

.shadow{
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
}
</style>
