<template>
	<div>
		<section>
			 <div :class="onScroll()>200?'flychange':'fly'" style="background: rgba(255,255,255,.5);">
				<p class="back" @click="returnhandleClick()"><i class="iconfont icon-toleft" style="font-size: 28px;color:black;font-weight: 900"></i></p>
				<p class="share"><i class="iconfont icon-gengduo" style="font-size: 28px;color:black;font-weight: 900"></i></p>
			</div>
		</section>
	   

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
			        	
			        		<img :src="data.fileUrl"  >
			        		<div class="imgmask" @click="handleClickToDetail(data.eventId,data.productId)"></div>
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
			        		<div class="imgmask" @click="handleClickToDetail(data.eventId,data.productId)"></div>
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
	    				<img :src="data.fileUrl" alt=""  @click="handleClickToDetail(data.eventId,data.productId)">
	    				<div class="miaoshu">
	    					<span></span>
	    					<span class="englishName">{{data.brandName}}</span>
	    					<span class="des">{{data.productName}}</span>
	    					<span></span>
	    					<div class="money">
	    						<span class="price2">￥{{data.price}}</span>
	    						<del class="marketPrice">￥{{data.marketPrice}}</del>
	    						<span class="discount">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{data.discount}}折</span>
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
			
			handleClickToDetail(eventId,productId){
				var pid='categoryId='+eventId+'&productId='+productId
				this.$router.push('/detail/'+pid)
				console.log(eventId)
				console.log(pid)
			},
			returnhandleClick(){
				this.$router.back(-1)
			},
			onScroll(){
				 this.scrollTop = document.documentElement.scrollTop || document.body.scrollTop
				console.log(this.scrollTop)
				// console.log('aaaaaa')
				return this.scrollTop

			}

			
		},
		mounted(){
 			window.addEventListener('scroll', this.onScroll)

			// console.log(this.$route.params.logoid)
			axios.get(`/appapi/brand/viewCms/v3?logoId=${this.$route.params.logoid}`).then(res=>{
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
		section{
			position: relative;

				.fly{
					position: fixed;
					z-index:50;
					width:100%;
					color:white;
					top:0;
					height:50px;
					/* background: red; */
				}
				.flychange{
					background:blue;
					color:black;
					/* width:100%;
					height:100px;
					position:fixed;
					top:0px;
					z-index:50; */
				}
				.back{
					position: absolute;
					left: 0;
					/* width: 50px;
					height: 40px; */
					/* color: black; */
					padding: 10px 0 0 0;
				}
				.share{
					position: absolute;
					right:0;
				/* 	width: 50px;
					height: 40px;
					color: black;
					text-align: center; */
					padding: 10px 0 0 0;
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
				font-size: 20px;
				text-indent: 20px;
				margin-top:40px;
				margin-bottom: 20px;
			}
			.relation_nav_box{
				padding-bottom: 15px;
				margin-left: 20px;
				border-bottom: 1px solid #ccc;
				text-align: center;
				overflow: hidden;
				.relation_nav{
					
					.swiper-wrapper{
							/*width:80%;*/
						.swiper-slide{
							width:20%;
							a{
								text-decoration: none;
								color: black;
								cursor: pointer;
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
						height:302px;
						img{
							width:165px;
							height:220px;
						}
						.miaoshu{
							
							width:165px;
							.englishName{
								display: block;
								text-transform: uppercase;
								width: 100%;
								white-space: nowrap;
								text-overflow: ellipsis;
								overflow: hidden;
								font-size: 16px;
							}
							.des{
								display: block;
								text-transform: uppercase;
								width: 100%;
								white-space: nowrap;
								text-overflow: ellipsis;
								overflow: hidden;
								font-size: 14px;
							}
							.money{
									line-height: 20px;
									float: left;
									.marketPrice{
										display: inline-block;
										float: left;
										font-size: 10px;
										color: #ccc;
									}
									.price2{
										float: left;
										font-size: 10px;
										color: red;
									}
									.discount{
										position: absolute;
										font-size: 10px;
										color:gray;
									}
							}
						}
					}
				}
			}
		}
	}


</style>

	

 