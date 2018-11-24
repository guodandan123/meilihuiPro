<template>
	<div>
		<div id="zheme" v-for="data in datalist0">
			<a href="">
				<img :src="data.main_image" @click="handleClick(data.link_url)">
			</a>
			<div class="zheme_1">
				<h3>
					{{data.main_title}}
				</h3>
				<span>{{data.sub_title}}</span>
				<p>{{data.description}}</p>
			</div>
		</div>
		<ul id="imglist">
			<li v-for="data in datalist" :key="data.id">
				<img :src="data.categoryImgStr" >
			</li>
		</ul>

		<ul id="commodity"   v-infinite-scroll="loadMore"
							  infinite-scroll-disabled="loading"
							  infinite-scroll-distance="0"
							  infinite-scroll-immediate-check='false'>
			<li v-for="data in datalist2" :key="data.id">
				<div class="commodity_l">
					<a href="javascript:;"><img :src="data.imageUrl"></a>
					<p>{{data.discountText}}</p>
					<div>{{data.chineseName}}</div>
					<span>{{data.englishName}}</span>
				</div>
				<div class="commodity_r">
					
				</div>
			</li>
		</ul>
		
		
		<footer>
			<p>400 - 664 - 6698</p>
			<ul>
				<li>首页</li>
				<li>|</li>
				<li>客户端</li>
				<li>|</li>
				<li>登录</li>
				<li>|</li>
				<li>注册</li>
			</ul>
			<span>浙ICP备16004860号-1</span>
		</footer>
		
	</div>
</template>

<script>

  import axios from "axios"
  import Vue from 'vue'
  import MintUI from 'mint-ui'
  import 'mint-ui/lib/style.css'
  import { Indicator } from 'mint-ui';
  Vue.use(MintUI);


	export default {
		data () {
			return {
				datalist0:[],
				datalist:[],
				datalist2:[],
				loading:false,
				current:1,
				totalPages:3,
				
			}
		},
		methods:{
			handleClick(url){
					var logoid = url.split("/").slice(-1).join("")
					this.$router.push('/brand/'+logoid)
				},
				listClick(){
					this.$router.push('/list')
				},
				
			loadMore(){
				console.log('到底了')
				this.current++;
				if(this.current>this.totalPages){
					this.loading = true
					

					return;
				}

				
			}
		},
		mounted(){
			Indicator.open({
				text: '加载中...',
				spinnerType: 'fading-circle'
			});

			axios.get('/appapi/home/mktBannerApp/v3?silo_id=2013000100000000002&platform_code=PLATEFORM_H5').then((res)=>{
				console.log(res.data.banners);
				this.datalist0 = res.data.banners

			})
			axios.get('/appapi/cms/cmsDetail/v3?silo=2013000100000000002&ids=2121000100000000234&timestamp=1542782317055&summary=540bd74fe7de9a775386d13af8b4a3ea&platform_code=H5').then((res)=>{
				// console.log(res.data.resultList);
				this.datalist = res.data.resultList[0].data

			})


			axios.get('/appapi/silo/eventForH5?categoryId=men&pageIndex=1&timestamp=1542782316390&summary=e83433c2597124c16efb0e3f5a0a1f5b&platform_code=H5').then((res)=>{
				// console.log(res.data.eventList)
				this.datalist2 = res.data.eventList

				
			})

			axios.get(`/appapi/silo/eventForH5?categoryId=men&pageIndex=${this.current}&timestamp=1542885776859&summary=16c791a92cfc4a4d4a1ca804dee31cea&platform_code=H5`).then((res)=>{
					

					this.datalist2 = [...this.datalist2,...res.data.eventList]

					this.totalPages = res.data.totalPages
				})

			Promise.all([axios.get('/appapi/home/mktBannerApp/v3?silo_id=2013000100000000002&platform_code=PLATEFORM_H5'),axios.get('/appapi/cms/cmsDetail/v3?silo=2013000100000000002&ids=2121000100000000234&timestamp=1542782317055&summary=540bd74fe7de9a775386d13af8b4a3ea&platform_code=H5'),axios.get('/appapi/silo/eventForH5?categoryId=men&pageIndex=1&timestamp=1542782316390&summary=e83433c2597124c16efb0e3f5a0a1f5b&platform_code=H5'),axios.get(`/appapi/silo/eventForH5?categoryId=men&pageIndex=${this.current}&timestamp=1542885776859&summary=16c791a92cfc4a4d4a1ca804dee31cea&platform_code=H5`)]).then(res=>{
				
				Indicator.close();
			})

			
		}


	}	
</script>

<style scoped lang="scss">
	#zheme{}
	#zheme img{
		width:100%;
		height:100%;
	}
	.zheme_1{

		position: relative;
		text-align: center;
		bottom:160px;
		color:white;
	}
	.zheme_1 h3{
		font-size:26px;

	}
	.zheme_1 span{
		font-size: 14px;
	}
	.zheme_1 p{
		font-size:14px;
	}
	#imglist{
			margin-top: -70px;
			display: flex;
			flex:1;
			padding:0 10px;
		li{

			padding:0 5px;
			width:20%;
			img{
				width:100%;
			}
		}
	}
	#commodity{
		
		li{
			.commodity_l{
				display: flex;
				flex:1;
				position: relative;
				padding:3px 15px;
				p{
					color:white;
					position: absolute;
					top:180px;
					left:25px;
					font-size:12px;
				}
				div{
					color:white;
					position: absolute;
					top:160px;
					left:25px;
					font-size:14px;
				}
				span{color:white;position: absolute;top:140px;left:25px;font-size:14px;}
				img{
					width:100%;
				}
				
			}
			.commodity_r{
				width:50%;
			}
		}
	}
	footer{
		
		text-align: center;
		ul{
			margin-top: 10px;
			margin-left: 90px;
			overflow: hidden;
			li{
				color:#666;
				font-size: 10px;
				margin:0 5px;
				float:left;
			}
		}
		span{
				display: inline-block;
				color:#666;
				margin-top: 10px;
				font-size:10px;
				height:50px;
			}
	}
	#msg{
		text-align: center;
		height:18px;
	}
</style>