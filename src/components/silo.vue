<template>
	<div>
		<myhead></myhead>
		<navbar></navbar>
		<router-view></router-view>
		
		
		
	</div>
</template>

<script>
import myhead from "./myhead.vue"

import navbar from "./navbar.vue"
	export default {
		data () {
			return {

			}
		},
		methods:{
			
		},
		components:{
		    myhead,
		    navbar
  		}


	}	
</script>

<style scoped lang="scss">
	
</style>