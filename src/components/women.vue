<template>
	<div>
		
		<ul class="gg">
			<li v-for="data in datalist">
			<img :src="data.main_image"  @click="handleClick(data.link_url)">
				<div class="text">
					<h3>{{data.main_title}}</h3>
					<p>{{data.sub_title}}</p>
					<p>{{data.description}}</p>
				</div>

				<div class="divtype ">
					<ul class="type ">
						<li v-for="data in typelist">
							<img :src="data.categoryImgStr"  @click="handleClick()">
						</li>
					</ul>
				</div>

			</li>
			
		</ul>
		
		<div class="womaneachlist">
			<ul class="each container">
				<li v-for="data in productsliat">
					<img :src="data.imageUrl"  @click="handleClick()">
					<div class="des">
						<p>{{data.englishName}}</p>
						<p>{{data.chineseName}}</p>
						<p>{{data.discountText}}</p>
					</div>
				</li>
			</ul>
		</div>
		<button @click="handleClick()">click女士跳品牌页</button>
		<button @click="listClick()">click女士产品列表页</button>
		




	</div>
</template>

<script>
import axios from "axios"

	export default {
		data () {
			return {
				num:0,
				datalist:[],
				typelist:[],
				productsliat:[]
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
			axios.get(`/appapi/home/mktBannerApp/v3?silo_id=2013000100000000001&platform_code=PLATEFORM_H5`).then(res=>{
			
				this.datalist = res.data.banners
				// this.datalist = res.data.data
			})
			axios.get(`/appapi/cms/cmsDetail/v3?silo=2013000100000000001&ids=2120000100000000276&timestamp=1542782036495&summary=bce294d29748872f729d3de0d98ee542&platform_code=H5`).then(res=>{
				
				// this.typelist = res.data.resultList
				// // this.datalist = res.data.data
				// console.log(this.typelist)

				this.typelist = res.data.resultList[0].data
				// console.log(this.typelist)

			})
			axios.get(`appapi/silo/eventForH5?categoryId=women&pageIndex=1&timestamp=1542791244604&summary=37a02a1b5631212473be66bc73addb8e&platform_code=H5`).then(res=>{
			
				this.productsliat = res.data.eventList
				console.log(res.data.eventList)
			})


		}
		


	}
	

</script>

<style scoped lang="scss">
div{
	.gg{position: relative;
		li{
			width:100%;
			position:  relative;
			img{
				width:100%;
				position: relative;
			}
			.text{
				width:100%;
				position: absolute;
				bottom:140px;
				left:0;
				color:white;
				

				
				h3{
					text-align: center;
					font-size:25px;
				}
				p{
					text-align: center;
					font-size: 14px;
				}
			}
			.divtype{
				width:100%;
				position: absolute;
				background: white;

				bottom:0;
				.type{
					margin:7px 15px;
					width:100%;
					
					li{
						width:15%;
						margin-right: 15px;
						float:left;
						img{
							width:100%;
							height:80px;

						}
					}
				}
			}
		}}
	
	.womaneachlist{
		padding-top:20px;
		.each{
			li{
				position: relative;
				padding-bottom: 10px;
				img{
					
					width:100%;
				}
				.des{

					position: absolute;
					left:0;
					bottom:15px;
					padding: 0 0 5px 10px;
					p{	margin-bottom: 2px;
						color: white;
						font-size: 12px;
						font-family: -apple-system,BlinkMacSystemFont,"'PingFang SC'",Helvetica Neue,Helvetica,Arial,sans-serif;
					}
					p:nth-of-type(1){
						font-size: 16px;
					}
					p:nth-of-type(2){
						font-size: 13px;
					}
					
				}
			}
		}
	}
			

}
	

.container{
	width:345px;
	margin:0 auto;
}




</style>