<template>
  <div class="clearAllContainer">
      <span class="clearAllBtn" v-on:click="clearAll">Clear All</span>
      <child-component @haha="log" />

  </div>
</template>

<script>
import childComponent from './childComponent.vue'
export default {
  components:{
    childComponent
  },
  methods:{
    clearAll : function(){
      this.$store.commit('clearAll');
    },
    log(){
      console.log('event receive at todoFooter');
    }
  }
}
</script>

<style>
.clearAllContainer{
  width:8.5rem;
  height:50px;
  line-height: 50px;
  background-color:white;
  border-radius: 5px;
  margin: 0 auto;
}
.clearAllBtn{
  color: #e20303;
  display: block;
}
</style>