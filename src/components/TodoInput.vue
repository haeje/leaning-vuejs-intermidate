<template>
    <div class="inputBox shadow">
        <input type="text" v-model="newTodoItem" v-on:keyup.enter="addItem">
         <span class="addContainer" v-on:click="addItem">
             <i class="fas fa-plus addBtn"></i>
         </span>

         <modal v-if="showModal" @close="showModal = false">
            <h3 slot="header">경고</h3>
            <h3 slot="body">입력값이 없습니다. </h3>
            <div slot="footer">
                <h3 >할 일이 없으신가요??</h3>
                    <button class="modal-default-button" @click="showModal=false">
                    OK
                </button>

            </div>
        </modal>    
  </div>
</template>

<script>
import modal from "./common/modal.vue";
export default {
    data:function(){
        return {
            newTodoItem:'',
            showModal: false
        }
    },
    methods:{
        addItem : function(){
            if( this.newTodoItem !== ""){
                this.$store.commit('addNewTodo', this.newTodoItem);
                this.clearInput();
            }else{
                this.showModal = !this.showModal;
            }
        },
        clearInput : function(){
            this.newTodoItem = '';
        }
    },
    components : {
        modal : modal
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