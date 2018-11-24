<template>
	<div>
	
		<div class="topbar" >
		<div class="left">
				<span>
					<i  style="font-size:30px" class="iconfont icon-toleft" @click="go" ></i>
				</span>
		</div> 
		<div  class="title">
			<span >购物车</span> <!---->
		</div> 
		<div  class="right">
			
			    <span>
			    	<i style="font-size:25px "class="iconfont icon-gengduo"></i>
			    </span>
				
			</div> <!---->
		</div>
	
	<div  class="no-login">
		<div  data-spm="cart-nosign" class="empty">
			<p >登录后可同步购物袋中的商品~
				<a  href="/login" class="">立即登录</a>
		    </p>
	    </div>
	</div> <!----> 
	<!-- <div  class="cart-mask" style="display: none;">
		
	</div> -->

	
</div> 
</template>

<script>
	export default {
		data () {
			return {

			}
		},
		methods:{
			go:function(){
          this.$router.go(-1);//返回上一页
      }
		}

	}	
</script>

<style scoped lang="scss">
a{
	text-decoration: none;
}
    .topbar{
    width: 100%;
    height: 52px;
    line-height: 52px;
     .left{
      float:left;
	  width:55px;
	  text-align:center;
	  
	   height: 52px;


    }
    
    .title{
	float: left;
	width:55%;
	padding:0 9%; 
	}
	
   }
	.title span{
	   	  font-size: 18px;
	   	  font-weight: 700;
	   	  padding: 0 35%;
   	      height: 52px;
   	      overflow: hidden;
   	      line-height: 52px;
   	      text-align: center;
	   }
    .right{
		float:left;
		width:55px;
		text-align:center;
		
		 height: 52px;
		}
	.no-login{
		padding-top:50%;
	}	
	.empty {
    width: 100%;
    padding-top: 30px;
    
   
}
.empty p{
    text-align: center;
    color: #999;
    font-size: 16px;
}
 .empty a {
    border: 1px solid #000;
}
.empty p a{
    display: block;
    width: 100px;
    height: 40px;
    margin: 15px auto .826667rem;
    line-height:40px;
    color: #000;
    font-size: 16px;
    box-shadow: 1px 1px 0 0 #000, -1px -1px 0 0 #000;
}
</style>