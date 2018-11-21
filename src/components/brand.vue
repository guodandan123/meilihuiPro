<template>
	<div>
		
	    brand
	    品牌页
	    <ul>
	    	<li @click="womenClick(data.id)" >跳转detial页</li>
	    </ul>
	    
	</div>
</template>

<script>
import axios from "axios"
	export default {
		data () {
			return {
				
			}
		},
		
		methods:{
			womenClick(){
				this.$router.push('./detail/1234')
			}
		}

	}	
</script>

<style scoped lang="scss">
	
</style>