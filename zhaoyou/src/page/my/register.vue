<template>
	<div class="register">
		<div class="header">
			<button class="fa fa-angle-left back" @click="back"></button>
			<h3>注册</h3>
			<button class="right"></button>
		</div>
		<div class="top">
			<div class="warning">
				<p>
					<i class="fa fa-exclamation-circle"></i>
					<span>您输入的手机号格式不正确！</span>
				</p>
			</div>
		</div>
		<div class="content">
			<div class="item user">
				<i class="fa fa-user"></i>
				<input type="text" placeholder="请输入账号" v-model="username">
			</div>
			<div class="item phone">
				<i class="fa fa-phone"></i>
				<input type="text" placeholder="请输入手机号" v-model="phone">
			</div>
			<div class="item pass">
				<i class="fa fa-lock"></i>
				<input type="password" placeholder="请输入6-16位数字或字母密码" v-model="password">
			</div>
			<div class="item">
				<i class="fa fa-pencil-square-o"></i>
				<input type="text" class="input-identifying" placeholder="请输入验证码" v-model="vers">
			</div>
			<div class="identifying" @click="ver">
				发送验证码
			</div>
		</div>
		<div class="bottom">
			<div class="protocol">
				<input type="checkbox" id="check1">
				<label for="check1">已阅读并同意用户协议</label>
			</div>
			<button class="btn" @click="register">注册</button>
		</div>
	</div>
</template>
<script>
	import { mapState } from 'vuex';
	export default {
		name : 'my',
		data (){
			return {
				username : '',
				phone: '',
				password : '',
				vers :''
			}
		},
		
		methods : {
			back(){
				this.$router.go(-1)
			},
			register(){
				this.$http({
					method: 'post',
					url: '/VueHandler/AdminLoginAndRegHandler?action=add',
					data: {
					    username: this.username,
					    phone : this.phone,
					    password: this.password
					}
				}).then(function(res){
					console.log(res)
				})
			},
			ver(){
				this.$http({
					url: '/VueHandler/AdminLoginAndRegHandler?action=verification',
				}).then((res) =>{
					this.vers = res.data.data
				})
			}
		}
	}
</script>
<style lang="less">
.register{
	.header{
		width:100%;
		height:1.2rem;
		background:#0EACF6;
		color:#fff;
		text-align: center;
		line-height: 1.2rem;
		.back{
			width: 1rem;
			height: 1rem;
			margin: 5px;
			border: none;
			font-size: 18px;
			color: #FFFFFF;
			background: #0EACF6;
			position: absolute;
			top: 0;
			left: 0.1rem;
		}
		h3{
			font-family: '宋体';
			font-size:0.48rem;
		}
	}
	.top{
		padding:0 0.32rem;
		font-size:0.373333rem;
		.warning{
			color:#bc1717;
			height:0.96rem;
			line-height: 0.96rem;
			p{
				display:none;
			}
		}
	}
	.content{
		background:#fff;
		margin-bottom:0.48rem;
		position:relative;
		border-top:0.026667rem solid #ddd;
		.item{
			padding:0.32rem;
			position:relative;
			border-bottom:0.026667rem solid #ddd;
			i{
				font-size:0.48rem;
				margin-right:0.32rem;
				line-height: 1.2rem;
				position:absolute;
				top:0;
				left:0.32rem;
				color:#aaa;
			}
			input{
				padding: 0 10px;
				width:100%;
				border:none;
				font-size:0.48rem;
				padding-left:0.64rem;
			}
			input::-webkit-input-placeholder {
				color:#aaa;
			}
			a{
				color:#0EACF6;
				position:absolute;
				right:0.32rem;
				top:0;
				line-height: 1.2rem;
			}
		}
		.identifying{
			position:absolute;
			height:1.253333rem;
			top:38px;
			right:0;
			background:#0EACF6;
			color:#fff;
			line-height: 1.253333rem;
			width:2.4rem;
			text-align: center;
		}
	}
	.bottom{
		padding:0 0.32rem;
		font-size:0.373333rem;
		.warning{
			color:#bc1717;
			height:0.96rem;
			line-height: 0.96rem;
			p{
				display:none;
			}
		}
		.show {
			p{
				display:block;
			}
		}
		.btn{
				width:100%;
			border:none;
			background:#0EACF6;
			color:#fff;
			line-height: 0.96rem;
			font-size:0.48rem;
			border-radius: 0.08rem;
		}
		.protocol{
			line-height: 1.12rem;
			label{
				color:#333;
			}
		}
		.register{
			text-align: right;
			line-height: 1.12rem;
			a{
				color:#0EACF6;
			}
		}
	}
}
</style>