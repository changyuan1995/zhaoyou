<template>
	<div class="people">
		<div class="header">
			<div class="headerPic">
				<i class="fa fa-user-circle" v-if="!isShowHeader"></i>
				<img :src="user.pic" v-if="isShowHeader">
			</div>
			<p v-if="isShowHeader">欢迎您</p>
			<span v-if="isShowHeader" @click="quit">退出</span>
			<p v-if="!isShowHeader"><router-link to="/center">登录</router-link> | <router-link to="/register">注册</router-link></p>
		</div>
		<div class="list select">
			<div class="item">
				<span>个人关注</span>
			</div>
			<div class="game">
				暂无
			</div>
			<div class="item">
				<span>浏览历史</span>
			</div>
			<div class="game">
				暂无
			</div>
		</div>
	</div>
</template>
<script>
	import { mapState } from 'vuex';
	export default {
		name : 'people',
		data (){
			return {
				isShowHeader : false,
				user : {
					pic : ''
				}
			}
		},
		methods : {
			quit (){
				localStorage.removeItem('user');
				this.isShowHeader = false
			}
		},
		mounted (){
			if(localStorage.user){
				this.isShowHeader = true
				this.user = JSON.parse(localStorage.user);
			}else{
				this.isShowHeader = false
			}
		}
	}
</script>
<style scoped lang="less">
	.header{
		text-align: center;
		background:#0EACF6;
		color:#fff;
		padding:0.64rem 0;

		.headerPic{
			width:1.6rem;
			height:1.6rem;
			border-radius: 50%;
			overflow:hidden;
			margin:0.16rem auto;
			i{
				font-size:1.6rem;
			}
			img{
				width:1.6rem;
				height:1.6rem;
				border-radius: 50%;
			}
		}
		a{
			color:#fff;
			margin:0 0.24rem;
		}
	}

	.list{
		margin: 0.24rem 0;
		background:#fff;
		padding: 0 0.32rem;
		
		.item{
			border-bottom:1px solid #eee;
			font-size:0.426667rem;
			line-height: 1.12rem;
			position:relative;
			
			i{
				height:100%;
				position:absolute;
				line-height: 1.12rem;
			}
			.left{
				color:#f96f1b;
				left:0rem;
			}

			.right{
				right:0;
			}

			span{
				padding-left: .8rem;
			}

			a{
				color:#333;
			}
		}
	}
	.select{ 
		.item{
			span{
				padding:0;
			}
		}
		.game{
			height: 2rem;
			font:0.5rem/2rem "微软雅黑";
			border-bottom:1px solid #eee;
		}
	}
</style>