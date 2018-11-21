<template>
	<div>
	Recommend
	推荐
	<ul>
			<li v-for="data in datalist">
			<img :src="data.main_image"  @click="handleClick()">
				<h3>hahah</h3>
			</li>
		</ul>
	</div>
</template>

<script>
import axios from "axios"
	export default {
		data () {
			return {
				datalist:[]
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
			axios.get(`/appapi/home/mktBannerApp/v3?silo_id=2013000100000000008&platform_code=PLATEFORM_H5`).then(res=>{
				console.log(res.data.banners)
				this.datalist = res.data.banners
				// this.datalist = res.data.data
			})
		}

	}	
</script>

<style scoped lang="scss">
	ul{
		li{
			img{
				width:100%;
			}
		}
	}
</style>