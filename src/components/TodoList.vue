<template>
  <div>
      <ul>
        <li class="shadow" v-for="(todoItem, index) in this.$store.state.todoItems" v-bind:key="todoItem.item">
          <span>
            <i class="far fa-calendar-check checkBtn" v-bind:class="{checkBtnCompleted : todoItem.completed}" v-on:click="toggleCheckBtn(todoItem, index)"></i>
          </span>
          <span v-bind:class="{textCompleted : todoItem.completed}">
            {{ todoItem.item }}
          </span>
          <span class="removeBtn" v-on:click="removeItem(todoItem, index)">
            <i class="fas fa-trash-alt " ></i>
          </span>
        </li>
      </ul>
  </div>
</template>

<script>
export default {
  data : function(){
    return {
    }
  },
  methods:{
    removeItem : function(todoItem, index){
      this.$store.commit('removeItem', {todoItem, index})
    },
    toggleCheckBtn : function(todoItem, index){
      this.$store.commit('toggleCheckBtn', {todoItem, index})
    }      

  },
}
</script>

<style scoped>
ul{
  list-style-type: none;
  padding-left: 0px;
  margin-top:0px;
  text-align: left;
}

li{
  display: flex;
  min-height: 50px;
  height: 50px;
  line-height: 50px;
  margin : 0.5rem 1rem;
  padding : 0 0.9rem;
  background:white;
  border-radius: 5px;
}

.checkBtn{
  line-height: 45px;
  color: #62acde;
  margin-right: 5px;
}

.checkBtnCompleted{
  color : #b3adad;
}

.textCompleted{
  text-decoration: line-through;
  color:#b3adad;
}

.removeBtn{
  margin-left: auto;
  color:#de4343;
}
</style>