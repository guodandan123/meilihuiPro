<template>
	<div id="boss">
		<ul id="banner1">
			<li v-for="data in datalist">
				<img :src="data.main_image"  @click="handleClick()">
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
			<ul>
				<li v-for="data in datalist2"  >
					<img :src="data.imageUrl" alt="" >
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
	export default {
		data () {
			return {
				datalist:[],
				datalist1:[],
				datalist2:[]
			}
		},
		methods:{
				handleClick(){
					this.$router.push('/brand')
				},
				listClick(){
					this.$router.push('/list')
				}
			},
		mounted(){
			axios.get(`/appapi/home/mktBannerApp/v3?silo_id=2013000100000000011&platform_code=PLATEFORM_H5`).then(res=>{
				// console.log(res.data.banners)
				this.datalist = res.data.banners
				// this.datalist = res.data.data
			})
			axios.get(`/appapi/cms/cmsDetail/v3?silo=2013000100000000011&ids=2041000100000000206&timestamp=1542936026319&summary=42a93e406330f96f0e3a024f4f8737d9&platform_code=H5`).then(res=>{
				// console.log(res.data.resultList[0].data)
				this.datalist1 = res.data.resultList[0].data
				// this.datalist = res.data.data
			})
			axios.get(`/appapi/silo/eventForH5?categoryId=crossborder&pageIndex=1&timestamp=1542941690663&summary=b596ecfc5e46f2814e7a3c0efb098500&platform_code=H5`).then(res=>{
				console.log(res.data.eventList)
				this.datalist2 = res.data.eventList
				// this.datalist = res.data.data
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