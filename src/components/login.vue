<template>
	<div>
	<div class="login-mobile">
		<div class="back">
			<span>
			<i  style="font-size:35px" class="iconfont icon-close"@click="go"></i>
			</span>
		</div>
		<div class="login-form">
			<h1>登录/注册<span>注册即送2600元新人红包</span></h1>
			<p  class="error">&nbsp;</p>
			<div class="input-box">
			<div class="input-item">
				<label style="display: none"for="">手机号</label>
				<input type="text" placeholder="手机号" maxlength="11" name="mobile" class="">
				<span class="remove" data-spm-anchor-id="a2o1p.9079450.0.i1.fdea4cab09HI5w"><i style="font-size:.266667rem" class="iconfont icon-guanbi2fill"></i></span>
				<span class="switch">switch</span>
			</div>
			</div>
			<div class="action">
				<div class="submit">
					<div class="default">
						<span><i style="font-size: 35px" class="iconfont icon-toright"></i></span>
					</div>
				</div>
			</div>
			<div class="login-switch">
				<div>切换密码登录</div>
			</div>
		</div>
		<div class="login-joint">
			<p  class="items_login">
				<a href="https://oauth.m.taobao.com/authorize?response_type=code&amp;client_id=24541712&amp;redirect_uri=http://www.mei.com/logintaobao?type=login&amp;state=d8c9a3d6b16c1f2a55122a5e65ee049a&amp;view=wap" class="icon-logo">
					<span>
					<i style="font-size: 35px;color:black"class="iconfont icon-taobao"></i>
					</span>
					<em>绑定淘宝</em>
				</a> 
				<a id="alipayLogin" class="icon-logo2 logo-alipay" style="">
					<span>
					<i  style="font-size: 35px"class="iconfont icon-rectangle390"></i>
					</span>
				</a> <!----> 
				<a  href="https://api.weibo.com/oauth2/authorize?client_id=2399138537&amp;redirect_uri=http://www.mei.com/&amp;response_type=code" class="icon-logo logo-alipay">
					<span>
					<i style="font-size: 35px;color:black"class="iconfont icon-weibo"></i>
					</span>
				</a>
			</p>
		</div>
	</div>
	
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
                this.$router.go(-1);
            }
		}

	}	
</script>

<style scoped lang="scss">
	*{
		padding:0;
		margin:0;
	}
	a {
    text-decoration: none;
    
}

.login-form{
	padding-top:90px
}
.back{
    width: 66px;
    height: 66px;
    line-height:66px;
    float: right;
	text-align:center;
}
.login-form h1{
    padding-left: 30px;
    padding-bottom: 40px;
    color: #000;
    font-size: 20px;
     font-weight: 500;
}
.login-form h1 span {
    display: block;
    padding-top: 5px;
    color: #666;
    font-size: 16px;
}
p.error {
    height: .32rem;
    padding: 0 .933333rem 20px;
    color: #dd2828;
    font-size: .32rem;
}
.input-box {
    width: 350px;
    height:70px;
    margin: 0 auto 10px;
    box-shadow: -1px -1px 2px rgba(0,0,0,.15), 3px 2px 3px rgba(0,0,0,.05);
}
.input-item {
    width: 310px;
    height: 70px;
    margin: 0 auto;
    position: relative;
}
.input-item label {
    color: #666;
    font-size: .266667rem;
    position: absolute;
    left: 0;
    top: .613333rem;
}
.input-item input {
    width:260px;
    height:18px;
    padding: 26px 0;
    color: #ccc;
    font-size: 16px;
    border: none;
    background: transparent;
}
span.remove, span.switch {
    display: block;
    height: 1.6rem;
    float: left;
    text-indent: -1000em;
    position: absolute;
    top: 0;
    right: -.4rem;
}
.action {
    padding-bottom: 20px;
}
.submit {
    width: 350px;
    height: 70px;
    margin: 0 auto;
    box-shadow: 0 0.08rem 0.133333rem rgba(0,0,0,.15);
    
}
.default {
	width: 350px;
    height: 70px;
    line-height:70px;
    background: #ccc;
    
    display: flex;
   

}
.default  span{
	padding:0 45%;
}
.submit i {
   color:white;

}
.login-switch{
    padding-left: 32px;
    color: #666;
    font-size: 15px;
   
    
}
.login-joint {
    margin-top: 150px;
    padding-bottom: 30px;
}
.login-joint p{
    text-align: center;
}
.icon-logo{
   
    width: 38px;
    height: 10px;
    padding: 10px 24px 8px;
    position: relative;

}
.icon-logo2{
    border-left: 1px solid #eee;
    border-right: 1px solid #eee;
    width: 38px;
    height: 38px;
    padding: 10px 24px 8px;
    position: relative;

}
.icon-logo em {
    width: 70px;
    height: 24px;
    line-height:24px;
    margin-left: -40px;
    text-align: center;
    white-space: nowrap;
    color: #fff;
    font-size: 14px;
    background: rgba(0,0,0,.5);
    position: absolute;
    left: 50%;
    bottom:-40px;
}
</style>