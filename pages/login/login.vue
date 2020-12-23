<template>
	<view class="login">
		<view class="title">
			你好,欢迎使用
		</view>
		<view class="cu-form-group input_phone">
			<input v-model="phoneNum" maxlength="11" placeholder="请输入手机号码" type="number" name="input"></input>
		</view>
		<view class="cu-form-group input_code">
			<input v-model="smsCode" type="number" maxlength="6" placeholder="验证码" name="input"></input>
			<span class="c_53cac3" v-show="show" @tap="getSms()">获取验证码</span>
			<span class="c_53cac3" v-show="!show">{{ count }}'s</span>
		</view>
		<view class="agreement">登录即代表同意用户注册及<span @tap="JumpToagreement()" class="c_53cac3">《隐私协议》</span></view>
				<view class="padding flex flex-direction">
					<button @tap="login()" class="cu-btn bg-red margin-tb-sm lg">登录/注册</button>
				</view>
	</view>
</template>
<script>
	import { smsCode,LoginIn } from '../../utils/api.js'
	var checkMobile = require('../../utils/utils.js')
	export default {
		data() {
			return {
				phoneNum:'',
				smsCode:'',
				  show: true,
				   count: '',
				   timer: null,
			};
		},
		methods:{
			//点击跳转隐私协议
			JumpToagreement:function(){
				 uni.navigateTo({
				url: "/pages/agreement/agreement",
				animationType:'pop-in',
				});
			},
			//登录
		async login(){
			//登录验证
			let flag = checkMobile.checkMobile(this.phoneNum)
			if(this.phoneNum == ''){
							   uni.showToast({title: '手机号不能为空',icon: 'none'});
							    return false
			}
			if(!flag) {
							   uni.showToast({title: '手机号格式错误',icon: 'none'});
							   this.phoneNum = ""
							   return false
			}
			
				//登陆参数
				const data = {
					code:this.smsCode,
					phone:this.phoneNum,
				}
				let res =await LoginIn(data)
				if(res.data.code == 0){
					uni.setStorage({key: 'endTime',data: res.data.data.endTime});
					uni.setStorage({key: 'isVip',data: res.data.data.isVip});
					uni.setStorage({key: 'phone',data: res.data.data.phone});
					uni.setStorage({key: 'token',data: res.data.data.token});
					setTimeout(()=>{
						uni.redirectTo({
						url: "/pages/index/index",
						animationType:'pop-in',
						});
					},1000)
				}else{
					 uni.showToast({title: res.data.msg	,icon: 'none'});
				}
				console.log(res.data)
			},
			//获取验证码
		async getSms(){
			 let flag = checkMobile.checkMobile(this.phoneNum)
			 if(this.phoneNum == ''){
				   uni.showToast({title: '手机号不能为空',icon: 'none'});
				    return false
			 }
			 if(!flag) {
				   uni.showToast({title: '手机号格式错误',icon: 'none'});
				   this.phoneNum = ""
				   return false
			 }
			 this.getCode()
				const data = {
					phone:this.phoneNum,
					smsType:1
				}
			let res =await smsCode(data)
			console.log(res)
			if(res.data.code == 0){
				  uni.showToast({title: '发送成功',icon: 'none',duration: 2000});
			}else{
				 uni.showToast({title: res.data.msg,icon: 'none',duration: 3000});
				 this.phoneNum = ''
			}
			},
			//验证码倒计时
			  getCode:function(){
			     const TIME_COUNT = 60;
			     if (!this.timer) {
			       this.count = TIME_COUNT;
			       this.show = false;
			       this.timer = setInterval(() => {
			       if (this.count > 0 && this.count <= TIME_COUNT) {
			         this.count--;
			        } else {
			         this.show = true;
			         clearInterval(this.timer);
			         this.timer = null;
			        }
			       }, 1000)
			      }
			   }  
			},
		}
		
</script>

<style lang="less">
.login{
		padding: 30upx;
	
.title{
	margin-top: 20upx;
	font-size:38upx;
	font-weight: bold;
	text-indent: 30upx;
}
.input_phone{
	margin-top:40upx ;
	border-radius: 10upx;
}
.input_code{
	margin-top:20upx ;
	border-radius: 10upx;
}
.bg-green{
	background-color:#53CAC3;
}
.shadow[class*="-green"] {
    box-shadow: 3px 3px 4px rgba(83, 202, 195, 0.2);
}
.cu-btn{
	font-size: 28upx;
	padding: 10upx 10upx;
}
.agreement{
	margin-top: 30upx;
	text-align: center;
	color: #999;
	font-size: 28upx;
}
.uni-input-placeholder{
	color: #999;
}
.bg-red{
	background-color: #53CAC3;
}
}
</style>
