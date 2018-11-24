<template>
	<div>
		<!-- navbar -->
		<ul>
			<router-link to="/silo/recommend" tag="li" activeClass="active">推荐</router-link>
			<router-link to="/silo/crossborder" tag="li" activeClass="active">海外</router-link>
			<router-link to="/silo/women" tag="li" activeClass="active">女士</router-link>
			<router-link to="/silo/men" tag="li" activeClass="active">男士</router-link>
			<router-link to="/silo/cosmetics" tag="li" activeClass="active">美妆</router-link>		
				
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
			
		}

		
		
			
	

		

	}	
</script>

<style scoped lang="scss">
	div{
		ul{
			height: 32px;
			line-height: 32px;
			li{
				float:left;
				margin:5px;
			}
		}
	}
	.active{
		color: red;
		border-bottom: 2px solid red;
	}
	</style>