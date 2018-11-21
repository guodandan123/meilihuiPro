<template>
	<div>
		<div class="fly">
			<myhead></myhead>
			<navbar></navbar>
		</div>
		
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
	.fly{
		position: fixed;
		z-index: 10;
	}
</style>