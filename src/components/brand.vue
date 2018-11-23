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
	    	<div class="swiper-container">
	    		<h2>精选上新</h2>
			    <div class="swiper-wrapper">
			        <div class="swiper-slide" v-for="data in produncts">
			        	
			        		<img :src="data.fileUrl">
			        		<div class="imgmask"></div>
			        		<div class="price">
			        			<span>￥{{data.price}}</span>
			        			<span>￥{{data.marketPrice}}</span>
			        		</div>
			        	
			        </div> 
			    </div>

			   
			</div>
	    </div>

	    <div class="hotproducts">
	    	<div class="swiper-container">
	    		<h2>人气热销</h2>
			    <div class="swiper-wrapper">
			        <div class="swiper-slide" v-for="data in hot">
			        		<img :src="data.fileUrl">
			        		<div class="imgmask"></div>
			        		<div class="price">
			        			<span>￥{{data.price}}</span>
			        			<span>￥{{data.marketPrice}}</span>
			        		</div>
			        </div> 
			    </div> 
			</div>
	    </div>

	    <div class="relation">
	    	<h2>好货推荐</h2>
	    	<
			                      
	    	<div class="relation_nav_box">
	    		<div class="relation_nav swiper-container">
	    			 <div class="swiper-wrapper">
				        <div class="swiper-slide" v-for="data in rnav">
				        		<a href=""><span>{{data.categoryName}}</span></a>
				        </div> 
			    	</div> 
	    		</div>
	    	</div>
	    	<div class="eachblock">
	    		<ul>
	    			<li v-for="data in last">
	    				<img :src="data.fileUrl" alt="">
	    				<div class="miaoshu">
	    					<span></span>
	    					<span>{{data.brandName}}</span>
	    					<span>{{data.productName}}</span>
	    					<span></span>
	    					<div class="money">
	    						<span>￥{{data.marketPrice}}</span>
	    						<span>￥{{data.price}}</span>
	    						<span>{{data.discount}}折</span>
	    					</div>
	    				</div>
	    			</li>
	    		</ul>
	    	</div>
	    </div>


	</div>
</template>

<script>
import axios from "axios"
import Swiper from "swiper"
import "swiper/dist/css/swiper.css"
	export default {
		data () {
			return {
				isLong :true,
				butchange:'更多',
				brandlist:{},
				seclist:{},
				produncts:[],
				hot:[],
				rnav:[],
				last:[]
			}
		},
		
		methods:{
			womenClick(){
				this.$router.push('./detail/1234')
			}
			
		},
		mounted(){
			// console.log(this.$route.params.logoid)
			axios.get(`/appapi/brand/viewCms/v3?logoId=${this.$route.params.logoid}`).then(res=>{
				// console.log(res.data.body.brandDetail)
				this.brandlist = res.data.body.brandDetail
				
				
			})
			axios.get(`/appapi/brand/product/hotNew/v3?logoId=${this.$route.params.logoid}`).then(res=>{
				// console.log(res.data.body)
				this.seclist = res.data.body
				
				
			})
			axios.get(`/appapi/brand/product/hotNew/v3?logoId=${this.$route.params.logoid}`).then(res=>{
				// console.log(res.data.body.newProductTop10)
				this.produncts = res.data.body.newProductTop10
				this.$nextTick(()=>{
					 var swiper = new Swiper('.swiper-container', {
					      slidesPerView: 3,
					      spaceBetween: 30,
					      pagination: {
					        el: '.swiper-pagination',
					        clickable: true,
					      },
					    });

				})

				
				
			})
			axios.get(`/appapi/brand/product/hotNew/v3?logoId=${this.$route.params.logoid}`).then(res=>{
				// console.log(res.data.body.hotProductTop10)
				this.hot = res.data.body.hotProductTop10
				this.$nextTick(()=>{
					 var swiper = new Swiper('.swiper-container', {
					      slidesPerView: 3,
					      spaceBetween: 30,
					      pagination: {
					        el: '.swiper-pagination',
					        clickable: true,
					      },
					    });

				})
				
				
			})
			axios.get(`/appapi/brand/product/secCategoryProduct/v3?logoId=${this.$route.params.logoid}&pageIndex=1`).then(res=>{
				console.log(res.data.body.categoryProducts)
				this.rnav = res.data.body.categories
				this.last = res.data.body.categoryProducts

				this.$nextTick(()=>{
					 var swiper = new Swiper('.swiper-container', {
					      slidesPerView: 3,
					      spaceBetween: 30,
					      pagination: {
					        el: '.swiper-pagination',
					        clickable: true,
					      },
					    });

				})
				
				
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
						    padding-bottom: 15px;
						   

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
		.brandproducts{
			h2{
				font-size: 20px;
				text-indent: 20px;
				margin-bottom: 20px;
			}
			.swiper-slide{
				margin:0 15px;

				img{
					
					display: inline-block;
					width:135px;
					height:180px;
					
				}
				.imgmask{
					width:135px;
					height:180px;
					background-color: rgba(0,0,0,.04);
					
					position: absolute;
					top:0;
					z-index: 1;
				}
				.price{
					padding-left: 5px;
					span{

						font-size: 10px;
					}
					span:nth-of-type(2){
						color: #ccc;
						text-decoration:line-through;
					}
				}
				
			
			}
				
		}
		.hotproducts{
			h2{
				font-size: 20px;
				text-indent: 20px;
				margin-top:40px;
				margin-bottom: 20px;
			}
			.swiper-slide{
				margin:0 15px;

				img{
					
					display: inline-block;
					width:135px;
					height:180px;
					
				}
				.imgmask{
					width:135px;
					height:180px;
					background-color: rgba(0,0,0,.04);
					
					position: absolute;
					top:0;
					z-index: 1;
				}
				.price{
					padding-left: 10px;
					span{
						margin-right:5px;

						font-size: 10px;
					}
					span:nth-of-type(2){
						color: #ccc;
						text-decoration:line-through;
					}
				}
			
			
			}
				
		}
		.relation{
			width:100%;
			
			
			h2{

			}
			.relation_nav_box{
				padding-bottom: 15px;
				border-bottom: 1px solid #ccc;
				overflow: hidden;
				.relation_nav{
				
					.swiper-wrapper{
							/*width:80%;*/
						.swiper-slide{
							width:30%;
							a{
								span{

								}
							}
						}
					}
				}
			}
			.eachblock{
				
				ul{

					padding-top: 5px;
					
					li{
						margin-left: 15px;
						float: left;
						background: red;
						height:302px;
						img{
							width:165px;
							height:220px;
						}
						.miaoshu{
							width:165px;
							span{
								display: block;
							}
							.money{
								span{
									float: left;
								}
							}
						}
					}
				}
			}
		}
	}


</style>

	

 