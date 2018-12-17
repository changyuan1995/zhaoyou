<template>
	<div class="center">
		<div class="header">
			<button class="fa fa-angle-left back" @click="back"></button>
			<h3>登录</h3>
		</div>
		<div class="register">
			提示：如果你没有账号 <router-link to="/register">马上注册</i></router-link>
		</div>
		<div class="content">
			<div class="item user">
				<i class="fa fa-user"></i>
				<input type="text" placeholder="请输入账号" v-model="user">
			</div>
			<div class="item pass">
				<i class="fa fa-lock"></i>
				<input type="password" placeholder="请输入密码，区分大小写" v-model="pass">
				<router-link to="">忘记密码</router-link>
			</div>
		</div>
		<div class="bottom">
			<div class="warning">
				<p>
					<i class="fa fa-exclamation-circle"></i>
					<span>{{warningText}}</span>
				</p>
			</div>
			<button class="btn" @click="login">登录</button>
		</div>
		<div class="text">
			其他登录方式
		</div>
		<div class="top">
			<div class="icon">
				<i class="fa fa-qq"></i>
			</div>
			<div class="icon">
				<i class="fa fa-weixin"></i>
			</div>
			<div class="icon">
				<i class="fa fa-weibo"></i>
			</div>
		</div>
	</div>
</template>
<script>
	import { mapState } from 'vuex';
	export default {
		name : 'center',
		data (){
			return {
				user : '',
				pass : '',
				warningText : '',
				isShowWarning : false
			}
		},
		methods : {
			back(){
				this.$router.go(-1)
			},
			login(){
				this.$http({
					method: 'post',
					url: '/VueHandler/AdminLoginAndRegHandler?action=login',
					data: {
					    username: 'admin',
					    password: '123456'
					}
				}).then(function(res){
					console.log(res)
				})
				this.warningText = this.$store.getters.login({
					user : this.user,
					pass : this.pass
				});
				if(this.warningText == ''){
					this.isShowWarning = false;
					this.$router.push({ path: 'people' })
				}else{
					this.isShowWarning = true
				}
			}
		},
		computed: {
			
		},
		mounted(){
	    	
	    },
	}
</script>
<style lang="less">
.center{
	overflow: hidden;
	.header{
		width: 100%;
		height: 1.3rem;
		background: #0EACF6;
		flex-shrink:0;
		text-align: center;
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
			font-size: 18px;
			line-height: 1.3rem;
			color: #FFFFFF;
			background: #0EACF6;
		}
	}
	.top{
		text-align: center;
		color:#fff;
		padding:0.64rem;
		display:flex;
		justify-content: space-around;
		.icon{
				width:1.44rem;
				height:1.44rem;
				border-radius: 50%;
				background:#0EACF6;
				line-height: 1.44rem;
				font-size: 0.64rem;
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
			margin-bottom: 1.5rem;
		}
		.protocol{
			line-height: 1.12rem;

			a{
				color:#333;
			}
		}
	}
	.register{
		line-height: 1.12rem;

		a{
			color:#0EACF6;
		}
	}
	.text{
		background: #0EACF6;
		font: 0.48rem/1rem "微软雅黑";
		color:#FFFFFF;
		text-align: center;
	}
}
</style>