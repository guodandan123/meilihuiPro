<template>
	<div>
	 	<!-- list
	    商品列表页 -->
	    <div class="head">
	    	<div class="head_nav">
	    		<p class="back" @click="returnhandleClick()"><i class="iconfont icon-toleft" style="font-size: 28px;font-weight: 900"></i></p>
	    		<p class="share"><i class="iconfont icon-gengduo" style="font-size: 28px;font-weight: 900;color:black;"></i></p>
	   			<p class="event" v-if="infomation">{{infomation.eventName}}</p>
	    	</div>
	    </div>
		<!-- <smallhead></smallhead>
		<smallnav></smallnav> -->
		<div class="container">
				<div class="nov">
					<ul>
						<li class="l1">人气</li>
						<li>折扣</li>
						<li>价格</li>
						<li>筛选</li>
					</ul>
				</div>
			    <div  class="commodity">
			    	<ul v-for="data in datalist">
			    	<li>
			    		<img :src="data.imageUrl" @click="handleClickToDetail(data.eventId,data.productId)">
			    		<div v-for="data in datalist1">
			    			<span class="recommend">{{data.tag}}</span>
			    		</div>
			    		<p class="e">{{data.brandName}}</p>
			    		<p class="c">{{data.productName}}</p>
			    		<div class="money">
			    			<span class="m_now">￥{{data.price}}</span>
			    			<span class="m_cost">￥{{data.marketPrice}}</span>
			    			<span class="discount">{{data.discount}}折</span>
			    		</div>
			   		</li>
			    	
			    </ul></div>
		</div>
		
	</div>
</template>

<script>
import axios from "axios"
import smallhead from "./smallhead.vue"

import smallnav from "./smallnav.vue"
	export default {
		data () {
			return {
				infomation:null,
				datalist:[],
				datalist1:[]
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
			}
		},
		mounted(){
			axios.get(`/appapi/event/product/v3?pageIndex=1&categoryId=${this.$route.params.ids}&key=&sort=&timestamp=1543145190085&summary=9c6a41b4b6db3f541ec5ebdb9c35f318&platform_code=H5`).then(res=>{
				console.log(res.data)
				this.infomation = res.data;
				this.datalist = res.data.products;
				this.datalist1 = res.data.products[0].tagListDto;
				// console.log(res.data.products[0].tagListDto)

				// this.datalist = res.data.data
			})
			
		},
		components:{
		    smallhead,
		    smallnav
  		}


	}	
</script>

<style scoped lang="scss">
div{
	.commodity{
		width:96%;
		margin:0 2%;
		
		ul{

			li{
				float:left;
				width:46%;
				margin:0 2%;
				img{
					width:100%;
				}
				.money{
					font-size:12px;
					height:16px;
					line-height:16px;
					.m_now{
						color:#dd2828;
						font-weight:700;
						padding-right:5px;
						
					}
					.m_cost{
						color:#ddd;
						text-decoration:line-through
					}
					.discount{
						float:right;
						color:#999;
					}
				}
				div{
					width:100%;
					.recommend{
						float:left;
						margin-right:4px;
						background: rgb(255, 255, 255); 
						color: rgb(0, 0, 0); 
						border: 1px solid rgb(0, 0, 0);
						font-size:12px;
						padding:1px;
					}
				}
				.e{
					clear:both;
					font-size:13px;
					font-weight:700;
					height:14px;
					line-height:14px;
					padding:1px;
				}
				.c{
					font-size:12px;
					letter-spacing:-1px;
					height:14px;
					line-height:14px;
					padding:1px;
				}
			}
		}
	}
	.head{
		.head_nav{
					background: rgba(255,255,255,.8);
					position: fixed;
					width: 100%;
					top: 0;
					left: 0;
					z-index: 10;
					.event{
						width: 100%;
						text-align: center;
						font-size: 16px;
						height: 50px;
						line-height: 50px;
						display: inline-block;
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
						right:0;
						width: 50px;
						height: 40px;
						color: black;
						text-align: center;
						padding: 10px 0 0 0;
					}
				}
	}
.container{
	margin-top: 45px;
}
	.nov{
		 margin-bottom:16px;
		ul{
			height:40px;
			li{
				float:left;
				width:25%;
				text-align:center;
				line-height:40px;
				font-size:14px;

			}
			.l1{
				font-weight:700;
			}
		}
	}
}
	
</style>