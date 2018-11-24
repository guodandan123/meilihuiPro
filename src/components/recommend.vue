<template>
<div>
	<ul class="banner">
		<li v-for="data in datalist">
			<img :src="data.main_image"  @click="handleClick(data.link_url)">
			<div class="slogan">
				<p class="slogan_1">{{data.main_title}}</p>
				<p class="slogan_2">{{data.sub_title}}</p>
			</div>
		</li>
		
	</ul>
	<div v-if="picture" class="picture">
		<img :src="picture" alt="">
	</div>
	

	<div class="list">
		<div class="secpic">
			<img src="../../static/imgs/new.png" alt="">
		</div>
		<ul>
			<li v-for="data in datalist1">
				<img :src="data.imageUrl">
				<div class="info">
					<span :class="data.siloCategory=='海外'?'siloCategory':''">{{data.siloCategory=='海外'?'海外直发':''}}</span>
					<p>{{data.englishName}}</p>
					<p>{{data.chineseName}}</p>
					<p>{{data.discountText}}</p>
				</div>
				
			</li>
		</ul>
		<div class="secpic">
			<img src="../../static/imgs/hot.png" alt="">
		</div>
		<ul>
			<li v-for="data in datalist2">
				<img :src="data.imageUrl">
				<div class="info">
					<span :class="data.siloCategory=='海外'?'siloCategory':''">{{data.siloCategory=='海外'?'海外直发':''}}</span>
					<p>{{data.englishName}}</p>
					<p>{{data.chineseName}}</p>
					<p>{{data.discountText}}</p>
				</div>
			</li>
		</ul>
		<div class="secpic">
			<img src="../../static/imgs/more.png" alt="">
		</div>
		<div class="lastpic">
			<img src="../../static/imgs/brandActive.png" alt="">
			<img src="../../static/imgs/comingsoon.png" alt="">
		</div>
	</div>

	
	
</div>
</template>

<script>
import axios from "axios";
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import { Indicator } from 'mint-ui';
	export default {
		data () {
			isShow:true
			return {
				datalist:[],
				picture:null,
				datalist1:[],
				datalist2:[]
			}
		},
		methods:{
				handleClick(url){
					var logoid = url.split("/").slice(-1).join("")
					this.$router.push('/brand/'+logoid)
				},
				listClick(){
					this.$router.push('/list')
				}
			},
		mounted(){
			Indicator.open({
			  text: '加载中...',
				text:'数据加载中...',
				spinnerType:'fading-circle'
			});

			axios.get(`/appapi/home/mktBannerApp/v3?silo_id=2013000100000000008&platform_code=PLATEFORM_H5`).then(res=>{
				// console.log(res.data.banners)
				this.datalist = res.data.banners
			})

			axios.get(`/appapi/home/newZoneEntrance/v3?credential=`).then(res=>{
				// console.log(res)
				this.picture = res.data.img
			})

			axios.get(`/appapi/home/eventForH5?params=%7B%7D&timestamp=1542785006310&summary=d1a10f68ec4a98a46efc641a77c24a3b&platform_code=H5`).then(res=>{
				this.datalist1 = res.data.lists[0].events
				this.datalist2 = res.data.lists[1].events
			})
			Promise.all([axios.get(`/appapi/home/mktBannerApp/v3?silo_id=2013000100000000008&platform_code=PLATEFORM_H5`),axios.get(`/appapi/home/newZoneEntrance/v3?credential=`),axios.get(`/appapi/home/eventForH5?params=%7B%7D&timestamp=1542785006310&summary=d1a10f68ec4a98a46efc641a77c24a3b&platform_code=H5`)]).then(res=>{
					Indicator.close();
					console.log('数据加载完成')
				})

			
		}

	}	
</script>

<style scoped lang="scss">
div{
	ul.banner{
		position:relative;
		li{
			position:relative;
			img{
				width:100%;
			}
			.slogan{
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
			}
		}
	}

	.secpic{
		padding: 10px 20px 0 20px;
		img{
			width: 40%;
		}
	}
	.lastpic{
		img{
			width: 48%;
			padding: 10px 0;
		}
		img:first-of-type{
			float: left;
			padding:10px 5px; 
			
		}
	}
	.picture{
		img{
			width: 100%;
		}
		
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
				.info{
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
						font-weight: 500;
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
}





</style>