<template>
	<div id="boss">
		<ul id="banner1">
			<li v-for="data in datalist">
				<img :src="data.main_image"  @click="handleClick(data.link_url)">
					<div class="banner_t">
						<p class="slogan_1">{{data.main_title}}</p>
						<p class="slogan_2">{{data.sub_title}}</p>
						<p class="slogan_3">{{data.description}}</p>
					</div>
			</li>
		</ul>
		<div id="bg">
			<ul>
				<li v-for="data in datalist1" >
					<img :src="data.categoryImgStr" alt="" id="b2">
				</li>
			</ul>
		</div>
		<div class="list">
			<ul v-infinite-scroll="loadMore"
							  infinite-scroll-disabled="loading"
							  infinite-scroll-distance="0"
							  infinite-scroll-immediate-check='false'>
				<li v-for="data in datalist2" :key="data.id">
					<a href="javascript:;">
						<img :src="data.imageUrl" alt="" >
					</a>
					<div class="image_t">
						<span :class="data.siloCategory=='海外'?'siloCategory':''">{{data.siloCategory=='海外'?'海外直发':''}}</span>
						<p>{{data.englishName}}</p>
						<p>{{data.chineseName}}</p>
						<p>{{data.discountText}}</p>
					</div>
				</li>
			</ul>
		</div>
		
	
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
				datalist:[],
				datalist1:[],
				datalist2:[],
				loading:false,
				current:1,
				totalPages:3
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
						axios.get(`/appapi/silo/eventForH5?categoryId=men&pageIndex=1&timestamp=1542782316390&summary=e83433c2597124c16efb0e3f5a0a1f5b&platform_code=H5`).then(res=>{
						console.log(res.data.eventList)
						this.datalist2 = res.data.eventList
						// this.datalist = res.data.data
					})
				}

				
			},
		mounted(){
			Indicator.open({
			  text: '加载中...',
			  spinnerType: 'fading-circle'
			});
			axios.get(`/appapi/home/mktBannerApp/v3?silo_id=2013000100000000002&platform_code=PLATEFORM_H5`).then(res=>{
				// console.log(res.data.banners)
				this.datalist = res.data.banners
				// this.datalist = res.data.data
			})
			axios.get(`/appapi/cms/cmsDetail/v3?silo=2013000100000000002&ids=2121000100000000234&timestamp=1542782317055&summary=540bd74fe7de9a775386d13af8b4a3ea&platform_code=H5`).then(res=>{
				// console.log(res.data.resultList[0].data)
				this.datalist1 = res.data.resultList[0].data
				// this.datalist = res.data.data
			})
			

			axios.get(`/appapi/silo/eventForH5?categoryId=men&pageIndex=${this.current}&timestamp=1542885776859&summary=16c791a92cfc4a4d4a1ca804dee31cea&platform_code=H5`).then((res)=>{
					

					this.datalist2 = [...this.datalist2,...res.data.eventList]

					this.totalPages = res.data.totalPages
				})

				Promise.all([axios.get('/appapi/home/mktBannerApp/v3?silo_id=2013000100000000002&platform_code=PLATEFORM_H5'),axios.get('/appapi/cms/cmsDetail/v3?silo=2013000100000000002&ids=2121000100000000234&timestamp=1542782317055&summary=540bd74fe7de9a775386d13af8b4a3ea&platform_code=H5'),axios.get('/appapi/silo/eventForH5?categoryId=men&pageIndex=1&timestamp=1542782316390&summary=e83433c2597124c16efb0e3f5a0a1f5b&platform_code=H5')]).then(res=>{
					Indicator.close();
					console.log('数据加载完成')
				})
		}

	}	
</script>

<style scoped lang="scss">
	ul{
		li{
			position:relative;
			img{
				width:100%;
			}
			.banner_t{
				width: 100%;
				position: absolute;
				bottom: 80px;
				text-align: center;
				.slogan_1{
					font-size: 28px;
					color: white;
					font-weight: 700;
				}
				.slogan_2{
					font-size: 16px;
					color: white;
					line-height: 24px;
				}
				.slogan_3{
					font-size: 16px;
					color: white;
					line-height: 24px;
				}
			}
		}
	}


	#b2{
		float:left;
		width:18%;
		padding:1%;
		
	}
	#bg{
		margin:0 2% 0 2%;
	}
	
	.list{
		padding: 10px 20px;
		ul{
			li{
				position: relative;
				img{
					width: 100%;
					padding: 5px 0;
				}
				.image_t{
					position: absolute;
					bottom: 10px;
					width: 100%;
					padding-left:10px;
					text-align: left;
					p{
						text-transform: uppercase;
						line-height: 24px;
						font-size: 16px;
						color: white;
						
					}
					.siloCategory{
							display: inline-block;
							height: 10px;
							padding: 5px;
							line-height: 10px;
							color: black;
							font-size: 14px;
							font-weight: 700;
							background-color:white;
							vertical-align: top;
						}
				}
			}
			
		}

		
	}
	
	
</style>