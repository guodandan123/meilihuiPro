<template>
  <div id="app">
    
  
      
   
    
    <router-view></router-view>
  </div>
</template>

<script>


import silo from "./components/silo.vue"

import brand from "./components/brand.vue"
export default {
  name: 'App',
  data(){
    return {
       isShow:true
    }
  },
  components:{

        silo,
        brand
      }
 
}
</script>

<style lang="scss">
    *{
      margin:0;
      padding:0;
      list-style: none;
      /* background:#ccc; */
      
    }

</style>
