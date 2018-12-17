<template>
	<div class="game">
		<div class="header">
			<button class="fa fa-chevron-left back" @click="back()"></button>
	   	</div>
	   	<div class="wrapper" ref="wrapper">
	   		<div class="wrap" v-for="i in wrapper">
		   		<div class="top">
		    		<router-link class="gametype" to="/local">{{i.type}}</router-link><span>/{{i.title}}</span>
		    	</div>
		    	<div class="jieshao">
		    		<img :src="i.img"/>
		    		<p>{{i.title}}</p>
		    		<ul>
		    			<li>游戏类型：{{i.type}}</li>
		    			<li>大小：{{i.memory}}</li>
		    			<li>语言：{{i.language}}</li>
		    			<li>更新：{{i.time}}</li>
		    		</ul>
		    		<div class="download">普通下载</div>
		    	</div>
		    	<div class="brief">
		    		<div class="briefn">简介</div>
		    		<div class="content">
		    			<p>{{i.text1}}</p>
		    			<h3>{{i.teamT}}</h3>
		    			<p>{{i.text2}}</p>
						<p>{{i.text3}}</p>
						<p>{{i.text4}}</p>
		    		</div>
		    	</div>
		    </div>
	   	</div>	
	</div>
</template>
<script>
import BScroll from 'better-scroll';
import { mapState } from 'vuex';
export default {
  	name: 'game',
  	data(){
    	return{}
  	},
  	methods : {
		back (){
			this.$router.go(-1);
		}
	},
	computed: {
		wrapper (){
			return this.$store.state.game
		}
	},
	mounted(){
    	const scroll = new BScroll(this.$refs.wrapper, {
				click: true
			})
    },
}
</script>	

<style lang="less">
.game{
	.header{
		width: 100%;
		height: 1.3rem;
		background: #0EACF6;
		flex-shrink:0;
		.back{
			float: left;
			width: 1rem;
			height: 1rem;
			margin: 5px;
			border: none;
			font-size: 18px;
			color: #FFFFFF;
			background: #0EACF6;
		}
	}
	.wrapper{
		width: 100%;
		height: 100%;
		display: flex;
		flex-grow: 1;
		overflow: hidden;
		.wrap{
		    height: 100%;
			width: 100%;
			background: #FFFFFF;
			overflow: hidden;
			.top{
				width: 100%;
				height: 1rem;
				padding-left: 10px;
				background: #FFFFFF;
				.gametype{
					font: 16px/30px castellar;
					color: #0088CC;
				}
				span{
					font: 16px/30px castellar;
				}
			}
			.jieshao{
				border-top: 1px solid #f5f5f5;
		   		overflow: hidden;
		    	position: relative;
		    	background: #FFFFFF;
		    	img{
		    		width: 80px;
				    height: 80px;
				    display: inline-block;
				    overflow: hidden;
				    padding: 20px 10px;
				    float: left;
				    border-radius: 15px;
		    	}
		    	p{
		    		padding-top: 20px;
				    font-size: 20px;
				    color: #1d1d1d;
				    height: 22px;
				    line-height: 22px;
				    overflow: hidden;
				    font-weight: normal;
				    padding-right: 10px;
		    	}
		    	ul{
		    		font-size: 12px;
				    color: #666;
				    padding-top: 10px;
				    padding-right: 5px;
				    overflow: hidden;
				    height: 44px;
				    li{
				    	width: 50%;
					    float: left;
					    line-height: 22px;
					    color: #4b494a;
				    }
		    	}
		    	.download{
		    		width: 94%;
		    		float: left;
		    		background: #21b6fb;
		    		height: 40px;
				    display: block;
				    border-radius: 5px;
				    font-size: 16px;
				    color: #fff;
				    line-height: 40px;
				    text-align: center;
				    margin: 0 3%;
				    margin-bottom: 10px;
		    	}
			}
			.brief{
				background: #fff;
			    margin-top: 8px;
			    .briefn{
			    	width: 100%;
				    height: 32px;
				    padding-left:10px ;
				    line-height: 32px;
		    		font-size: 16px;
		    		background: #21b6fb;
		    		color: #fff;
			    }
			    .content{
				    padding-top: 10px;
				    width: 96%;
				    margin: 0 auto;
				    p{
				    	font-size: 14px;
					    color: #666;
					    line-height: 25px;
				    }
				    h3{
				    	font-size: 16px;
					    color: #ff4141;
					    line-height: 20px;
					    height: 20px;
					    background: none;
					    padding: 10px 0;
				    }
			    }
			}
		}
	}
}

</style>