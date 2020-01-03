<template>
  <div class="inputBox shadow">
      <input type="text" v-model="newTodoItem" v-on:keyup.enter="addItem">
      <span class="addContainer" v-on:click="addItem">
          <i class="fas fa-plus addBtn"></i>
      </span>
  </div>
</template>

<script>
export default {
    data:function(){
        return {
            newTodoItem:''
        }
    },
    methods:{
        addItem : function(){
            this.$emit('addItem', this.newTodoItem);
            this.clearInput();
        },
        clearInput : function(){
            this.newTodoItem = '';
        }
    }
}
</script>

<style scoped>
input:focus{
    outline:none;
}

.inputBox{
    margin: 1rem;
    background: white;
    height: 50px;
    line-height: 50px;
    border-radius: 5px;
    display: block;
}

.inputBox input{
    width:85%;
    border-style: none;
    font-style: 0.9rem;
}

.addContainer{
    float: right;
    background : linear-gradient(to right, #6478FB, #8763FB);
    display: block;
    width: 3rem;
    border-radius: 0 5px 5px 0;
}

.addBtn{
    color : white;
    vertical-align: middle;
}

</style>