<template>
	<div>
		<div :class="onScroll()>0?'flychange':'fly'" >
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
				scrollTop:0
			}
		},
		methods:{
			onScroll(){
				 this.scrollTop = document.documentElement.scrollTop || document.body.scrollTop
				// console.log(this.scrollTop)
				return this.scrollTop

			},
			
		},
		
		components:{
		    myhead,
		    navbar
		    
  		},
  		mounted(){
 				window.addEventListener('scroll', this.onScroll)

  		}


	}	
</script>

<style scoped lang="scss">
	*{padding:0;margin:0;}
	div{
		position: relative;

		.fly{
			position: fixed;
			z-index:50;
			width:100%;
			color:white;
			top:0;
			height:100px;
		}
		.flychange{
			background:white;
			color:black;
			width:100%;
			height:100px;
			position:fixed;
			top:0px;
			z-index:50;

			.ichange{
				color: black;
			}
	}
}

</style>