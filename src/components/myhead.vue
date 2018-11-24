<template>
	<myhead>
		<ul >
			<div class="left"  @click="handleClick()">
			 	<span class="login-btn">登陆</span>
			</div>
		 	<div class="search">     
			 	<span>
			 		<i style="font-size:20px;" class="iconfont icon-search"></i>
			 			{{dataobj}}
			 	</span>
		 	</div>
		 	<div class="right"  @click="shoppingcartClick()">
		 		<span><i style="font-size:24px" class="iconfont icon-bags"></i></span>
		 	</div>
	 	</ul>
	 </myhead>
</template>

<script>
	import axios from "axios"
	export default {
		data () {
			return {
				
				dataobj:{}
				
				
			}
		},
			methods:{
			handleClick(){
				this.$router.push('/login')
			},
			shoppingcartClick(){
				this.$router.push('/shoppingcart')
			}
		},
		mounted(){
			axios.get(`/appapi/search/searchDefault/v3`).then(res=>{
				// console.log(res.data.words)
				this.dataobj = res.data.words
				// this.datalist = res.data.data
			})

	}	
}
</script>

<style scoped lang="scss">
 myhead{
    width: 100%;
    height: 52px;
    line-height: 52px;
  	color: white;
    
    .left{
      float: left;
      width:52px;
    }
    .search{
	float: left;
	color:  #9E9E9E;
   	background-color: rgba(158, 158, 158, 0.15);
    padding:0 11%;
	margin-top:8px;
	line-height:36px;
    height:36px;
    width:50%;
	}
	.search span{
		font-size:14px;
     }
     .search span i{
		text-align: center;
		padding-right:10px;
		
     }
	}

	.right{
		float:right;
		width:50px;
		text-align:center;
		
	}

	.login-btn{
	
	padding:10px;
    line-height:36px;
   
    font-size:16px;
	}



</style>
<!-- http://www.mei.com/appapi/search/searchDefault/v3 -->