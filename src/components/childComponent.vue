<template>
  <div>
      <button v-on:click="click">haha</button>
  </div>
</template>

<script>
export default {
    methods:{
        click(){
            console.log('haha clicked');
            
            this.$emit('haha')
        }
    }
}
</script>

<style>

</style>