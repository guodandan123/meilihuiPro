<template>
	<div>
		<div class="head" v-if="datalist">
			<div class="head_nav">
				<p class="back" @click="returnhandleClick()"><i class="iconfont icon-toleft" style="font-size: 28px;font-weight: 900"></i></p>
				<p class="share"><i class="iconfont icon-gengduo" style="font-size: 28px;font-weight: 900;"></i></p>
				<p class="brand">{{datalist.brand}}</p>
				<p class="price">￥{{datalist.price}}</p>
			</div>
			
			<div class="swiper_pic">
			<div class="swiper-container">
				<div class="swiper-wrapper" >
					<div class="swiper-slide" v-for="data in looplist">
							<img :src="data.smallImgUrl">
					</div>
					<!-- 如果需要分页器 -->
			        <div class="swiper-pagination"></div>
			        
			        <!-- 如果需要导航按钮 -->
			        <!-- <div class="swiper-button-prev"></div> -->
			        <!-- <div class="swiper-button-next"></div> -->
			       
			        <!-- 如果需要滚动条 -->
			        <div class="swiper-scrollbar"></div>
				</div>
			</div>
			</div>

			<div class="information"  v-if="information">
				<p class="name">{{information.name}}</p>
				<del class="marketPrice">￥{{information.marketPrice}}</del>
				<p class="price1">￥{{information.price}}</p>
				
				<p class="discount" v-for="data in product_labels">{{data.label_text}}</p>

				<p class="warehouse_name">{{information.warehouse_name}}
					<span class="deliver_date">{{information.deliver_date}}</span>
				</p>
				
			</div>
			<div class="service">
				<p><span class="label">闪购</span><span class="buy">距离结束还有6小时6分6秒</span></p>
				<p v-for="data in ticketInfo"><span class="label">领券</span><span class="ticket">{{data.ruleInfo}}</span></p>
				<p><span class="label">服务</span><span v-for="data in service"><span class="ser">{{data.label_title}}</span></span></p>
			</div>

			<div class="productsData" >
				<h3>商品参数</h3>
				<p v-for="data in productsData"><span class="productsData_name">{{data.name}}</span><span class="productsData_value">{{data.value}}</span></p>
			</div>
			<div class="productsDetail">
				<h3>商品详情</h3>
				<div v-for="data in productsDetail">
					<img :src="data.bigImgUrl" alt="">
				</div>
				<p v-if="description"class="tip">{{description.message}}</p>
			</div>
			
			<div class="return">
				<h3>退货提示</h3>
				<p v-if="information" class="tip">{{information.returnNote}}</p>
			</div>

			<div class="burberry">
				<h3>BURBERRY</h3><!-- <span class="">品牌主页</span> -->
				<div class="brandchange">
					<div class="brandtext">
						<div :class="isLong?'textcenter':'more'">
							<p class="tip" v-if="information"><br><br><br><br><br>{{information.brand_story}}</p>
							<span @click="isLong=!isLong ">{{isLong?'MORE':''}}</span>
						</div>
					</div>
				</div>

			</div>

			<div class="abroad">
				<!-- <h3>海外直发小贴士</h3> -->
				<p v-if="information"><img :src="information.overseas_tip_url" alt=""></p>
				<p v-for="data in postSellUrls">
					<img :src="data" alt="">
				</p>

			</div>
			<div class="review">
				<h3 v-if="productReviews">用户评论（{{productReviews.totalCount}}）</h3>
				<p v-for="data in reviewsList">
					<span class="username">{{data.userName}}</span>
					<span :class="data.isVip?'isvip':'isnotvip'">{{data.isVip?'vip':''}}</span>
					<span class="review_text">{{data.review}}</span>

					<div v-for="data in productReviews_review" class="tip last">
						<span class="dateTime">
							{{data.dateTime}}
							<span v-for="data in reviewsList">{{data.color}}&nbsp;&nbsp;{{data.size}}</span>
						</span>
					</div>
					
				</p>
			</div>
		</div>
		<footer>
			<div class="left">
				<p class="bag"><i class="iconfont icon-bags" style="font-size: 28px;display: inline-block"></i>购物袋</p>
			</div>
			<div class="right">
				<p class="add">加入购物车</p>
				<p class="buy">立即购买</p>
			</div>
				
		</footer>
	</div>
</template>

<script>
import axios from "axios";
import Swiper from "swiper";
import "swiper/dist/css/swiper.css";
import { Indicator } from 'mint-ui';
	export default {
		data () {
			return {
				datalist:null,
				looplist:[],
				information:null,
				newTagList:[],
				service:[],
				ticketInfo:[],
				productsData:[],
				productsDetail:[],
				description:null,
				postSellUrls:[],
				productReviews:null,
				productReviews_review:[],
				reviewsList:[],
				isLong :true
			}
		},
		methods:{
			returnhandleClick(){
				this.$router.back(-1)
			}
		},

		mounted(){
			Indicator.open({
			  text: '加载中...',
			  spinnerType: 'fading-circle'
			});
			

			axios.get(`/appapi/product/detail/v3?${this.$route.params.pid}&platform_code=H5&timestamp=1543039344697&summary=0b6c79ccdaf39b6d0fd39b55496162bc`).then(res=>{
				// console.log(res.data.infos.images)
				// console.log(res.data.infos)
				// console.log(res.data.infos.service_labels)
				// console.log(res.data.infos.newTagList)
				// this.datalist=res.data.infos;
				// console.log(res.data.infos)
				this.looplist=res.data.infos.images;
				this.datalist=res.data.infos;
				
				this.$nextTick(()=>{
					 new Swiper('.swiper-container',{
					       pagination: {
					         el: '.swiper-pagination',
					       },
					       loop: true, // 循环模式选项
					       autoplay: {
					           delay: 2500,
					           disableOnInteraction: false,
					       },
					       navigation: {
					         nextEl: '.swiper-button-next',
					         prevEl: '.swiper-button-prev',
					       },
					   });
				})
				Promise.all([axios.get("/appapi/product/colorgroupsize/v3?categoryId=2121005100000001556&productId=2041204199000392637&platform_code=H5&timestamp=1542849701217&summary=f86a4475ffcab99bc21d3275bfca2dcc"),axios.get("/appapi/product/detail/v3?categoryId=2121005100000001556&productId=2041204199000392637&platform_code=H5&timestamp=1542852300721&summary=2dc07120b1225b65e5684607b54833e8")]).then(res=>{
					Indicator.close();
					console.log('数据加载完成')
				})

				this.information=res.data.infos;
				this.product_labels=res.data.infos.product_labels;
				this.service=res.data.infos.service_labels;
				this.ticketInfo=res.data.infos.ticketInfo;
				this.productsData=res.data.infos.description.attributesList;
				this.productsDetail=res.data.infos.description.product_img1;
				this.description=res.data.infos.description;
				this.toLearnList=res.data.infos.brand_story;
				this.postSellUrls=res.data.infos.postSellUrls;
				this.productReviews=res.data.infos.productReviews;
				this.productReviews_review=res.data.infos.productReviews.reviews;
				this.reviewsList=res.data.infos.productReviews.reviewsList;
				// console.log(res.data.infos.description.attributesList)
				// console.log(res.data.infos.description.product_img1)
				// console.log(res.data.infos.description)
				// console.log(res.data.infos.productReviews.reviews)

			})
			
		},

		

		

	}	
</script>

<style scoped lang="scss">
	.head{
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
				display: inline-block;
			}
			.price{
				width: 100%;
				text-align: center;
				font-size: 12px;
				height: 25px;
				line-height: 25px;
				color: red;
			}
			.back{
				position: absolute;
				left: 0;
				width: 50px;
				height: 40px;
				color: black;
				/* text-align: center; */
				padding: 10px 0 0 0;
			}
			.share{
				position: absolute;
				right:20px;
				width: 50px;
				height: 40px;
				color: black;
				/* text-align: center; */
				padding: 10px 0 0 0;
			}
		}
		
		.swiper_pic{
			margin: 0 20px;
			border: 1px solid #ccc;
			text-align: center;
			box-shadow: darkgrey 3px 3px 10px 1px;
			img{
				width: 100%;
				display: block;
			}
		}
	}
	.information{
		margin:0px 20px; 
		.name{
			font-size: 18px;
			height: 24px;
			line-height: 24px;
			padding: 8px 0;
			text-transform: uppercase;
		}
		.marketPrice{
			display: block;
			font-size: 14px;
			color: #ccc;
		}
		.price1{
			font-weight: 600;
			color: #dd2828;
			float: left;
			/* display: inline-block; */
		}
		.discount{
			display: inline-block;
			border: 1px solid black;
			font-size: 12px;
			padding: 1px 3px;
			margin: 0 5px;
		}
		.warehouse_name{
			font-size: 14px;
			font-weight: 600;
			height: 28px;
			line-height: 28px;
			margin-top: 5px;
		}
		.deliver_date{
			font-size: 12px;
			color: #bbb;
			display: inline-block;
			margin-left: 10px;

		}
	}
	.service{
		margin:20px 20px; 
		h3{	
			display: inline-block;
			height: 48px;
			line-height: 48px;
		}
		.label{
			display: inline-block;
			margin-right: 10px;
			color: gray;
		}
		p{
			height: 52px;
			line-height: 52px;
			border: 1px solid #ddd;
			
			.buy{
				font-weight: 600;
			}
			.ticket{
				background: #e13232;
				font-size: 14px;
				color: white;
			}
			.ser{
				padding: 0 5px;
				border-right: 1px solid #ccc;
				white-space: nowrap;
				overflow: hidden;
			}
		}
		
	}

	.productsData{
		margin: 10px 20px;
		p{
			height: 32px;
			line-height: 32px;
			.productsData_name{
				color: gray;
				display: inline-block;
				width: 80px;
			}
			.productsData_value{
				text-align: left;
				margin-left: 50px;
			}
		}
	}
	.productsDetail,.return,.burberry,.review{
		margin: 10px 20px;
		h3{	
			display: inline-block;
			height: 48px;
			line-height: 48px;
		}
		img{
			width: 100%;
			display: block;
		}
		.isvip{
			width: 30px;
			height: 18px;
			line-height: 18px;
			text-align: center;
			background: black;
			color: gold;
			display: inline-block;
		}
		.review_text{
			display: block;
			height: 48px;
			line-height: 48px;
		}
		.dateTime{
			font-size: 12px;
			color: gray;
		}
		
	}
	.abroad{
		h3{	
			display: inline-block;
			height: 48px;
			line-height: 48px;
		}
		img{
			width: 100%;
			display: block;
		}
	}
	.tip{
			border-bottom: 1px solid #ccc;
			font-size: 12px;
			padding-bottom: 20px;
		}

	.last{
		margin-bottom: 100px;
	}
	footer{
		position: fixed;
		bottom: 0;
		width: 100%;
		.left{
			float: left;
			width: 20%;
			height: 50px;
			line-height: 50px;
			text-align: center;
			font-size: 12px;
			.bag{
				border: 1px solid #ccc;
				background: white;
			}
		}
		.right{
			float: left;
			width: 80%;
			height: 50px;
			line-height: 50px;
			text-align: center;


			.add{
				float: left;
				border: 1px solid #ccc;
				background: white;
				width: 49%;
				font-weight: 700;
			}
			.buy{
				float: left;
				border: 1px solid #ccc;
				background: white;
				width: 49%;
				color: red;
				font-weight: 700;
			}
		}
	}

				.brandchange{
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
						    color: black;
						    font-weight: 800;
						    font-size: 16px;
						    cursor: pointer;
						}
					}
					
			}
</style>