<template>
	<div>
		
	    <div class="head_nav">
				<p class="brand">1111</p>
				<p class="price">22222</p>
		</div>

	    <div class="brandinfo">
		  	<div class="pic">
		    	<img :src="brandlist.brandPageImage" >
		    	<div class="mask"></div>
		    	<div class="brandname">
		    		<h1>{{brandlist.brandName}}</h1>
		    		<a href="">+关注</a>
		    	</div>
		   	</div>
		   	<div class="total">
		   		<h2>在售商品{{seclist.onSaleTotal}}件 上新{{seclist.newTotal}}件</h2>
		   		
		   	</div>
		   	<div class="brandchange">
		   		<div class="brandtext">
		   			<div :class="isLong?'textcenter':'more'">
		   				<p>{{brandlist.brandStoryText}}</p>

		   				<span @click="isLong=!isLong ">{{isLong?'更多':'收起'}}</span>
		   			</div>
		   		</div>
		   	</div>
	    </div>

	    <div class="brandproducts">
	    	<div class=""></div>
	    </div>
	</div>
</template>

<script>
import axios from "axios"
	export default {
		data () {
			return {
				isLong :true,
				butchange:'更多',
				brandlist:{},
				seclist:{}
			}
		},
		
		methods:{
			womenClick(){
				this.$router.push('./detail/1234')
			}
			
		},
		mounted(){
			console.log(this.$route.params.logoid)
			axios.get(`/appapi/brand/viewCms/v3?logoId=${this.$route.params.logoid}`).then(res=>{
				// console.log(res.data.body.brandDetail)
				this.brandlist = res.data.body.brandDetail
				
				
			})
			axios.get(`/appapi/brand/product/hotNew/v3?logoId=${this.$route.params.logoid}`).then(res=>{
				console.log(res.data.body)
				this.seclist = res.data.body
				
				
			})
		}

	}	


</script>

<style scoped lang="scss">
	div{
		.head_nav{
			background: rgba(255,255,255,.8);
			position: fixed;
			width: 100%;
			top: 0;
			left: 0;
			z-index: 10;
			.brand{
				width: 100%;
				text-align: center;
				font-size: 16px;
				height: 25px;
				line-height: 25px;
			}
			.price{
				width: 100%;
				text-align: center;
				font-size: 12px;
				height: 25px;
				line-height: 25px;
				color: red;
			}
		}
		.brandinfo{
			.pic{
				position: relative;
				img{
					display: block;
					width:100%;
					

				}
				.mask{
					width:100%;
					height:100%;
					position: absolute;
					left:0;
					top:0;
					background: rgba(0,0,0,.3);
				}
				.brandname{
					width:100%;
					position: absolute;
					bottom:0;
					h1{
						text-align: center;
						color: white;
						margin-bottom: 30px;


					}
					a{	padding:7px 25px;
						font-size: 12px;
						background-color:black; 
						color: white;
						
					    position: absolute;
   						left: 38%;
   						bottom:-15px;

   						
						
					}
				}
			}
			.total{
				
				padding:30px 0;
				h2{
					color:#999;;
					text-align: center;
					font-size: 12px;
					font-weight: 200;

				}
			}
			.brandchange{
				.brandtext{
					padding:0 25px;
					.textcenter{
						height:150px;
						overflow: hidden;
						p{
							height:100px;
							overflow: hidden;
							font-size: 14px;
							color:#666;
							line-height: 26px;
							
						}
						span{
							width: 100%;
						    height:40px;
						    display: block;
						    line-height: 40px;
						    text-align: center;
						    color: #d88358;
						    font-size: 14px;
						    cursor: pointer;
						   

						}
					}
					.more{
						
						p{
							font-size: 14px;
							color:#666;
							line-height: 26px;
							
						}
						span{
							width: 100%;
						    height:40px;
						    display: block;
						    line-height: 40px;
						    text-align: center;
						    color: #d88358;
						    font-size: 14px;
						    cursor: pointer;

						}
					}
				}
			}
			
		}
	}
</style>