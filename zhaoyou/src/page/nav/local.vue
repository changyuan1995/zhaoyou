<template>
	<div class="container">
		<div class="swiper-container top-nav" ref="topNav">
			<div class="swiper-wrapper">
				<div class="swiper-slide" v-for="text in navData">{{text}}</div>
			</div>
		</div>
		<div class="swiper-container swiperMain" ref="swiperMain">
			<div class="swiper-wrapper">
			    <div class="swiper-slide" v-for="i in swiperSlide">
					<div class="wrapper" ref="wrapper">
						<div class="wrap" @load="refresh">
							<div class="item" v-for="list in i">
					          	<router-link class="singlegame" :to="{name:'game', params:{id:list.id}}">
				          			<img :src="list.img">
						            <h3>{{list.title}}</h3>
						            <span>{{list.type}}丨{{list.memory}}</span>
						            <p>{{list.text}}</p>
					          	</router-link>
					          	<span class="download">下载</span>
							</div>
						</div>
					</div>
			    </div>
		  	</div>
		</div>
	</div>
</template>
<script>
	import BScroll from 'better-scroll';
	import { mapState } from 'vuex';
	import Swiper from 'swiper';
	export default {
		name: 'local',
		data() {
			return {
				navData: ['火热推荐', '射击枪战', '动作闯关', '策略塔防', '角色扮演', '体育竞技', '卡牌对战', '儿童教育', '休闲娱乐', '冒险解迷', '竞速赛车'],
			}
		},
		methods: {
			refresh() {
				this.scroll.refresh();
			}
		},
		computed: {
			swiperSlide (){
				return this.$store.state.local
			}
		},
		mounted() {
			var topNav = new Swiper(this.$refs.topNav, {
				freeMode: true,
				slidesPerView: 5,
				watchSlidesVisibility: true
			})
			var swiperMain = new Swiper(this.$refs.swiperMain, {
				thumbs: {
					swiper: topNav,
					slideThumbActiveClass: 'cur'
				}
			})
		}
	}
</script>
<style lang="less">
	.container {
		.top-nav {
			width: 100%;
			height: 1.28rem;
			line-height: 1.28rem;
			background: #0EACF6;
			color: #ffffff;
			text-align: center;
			position: absolute;
			z-index: 2;
		}
		.cur {
			background: #007AFF;
			color: #FFFFFF;
		}
	.swiperMain{
		width: 100%;
		height: 100%;
	}
		.wrap {
			padding-top: 1.28rem;
			.item {
				margin: 8px 0;
				overflow: hidden;
				position: relative;
				border-bottom: 1px solid #f1f1f1;
				.singlegame {
					display: inline-block;
					width: 230px;
					img {
						width: 70px;
						height: 70px;
						border-radius: 15px;
						float: left;
						margin-right: 10px;
					}
					h3 {
						font-size: 16px;
						color: #090909;
						height: 25px;
						line-height: 25px;
						overflow: hidden;
					}
					span {
						display: block;
						height: 25px;
						line-height: 25px;
						color: #787876;
						overflow: hidden;
					}
					p {
						height: 20px;
						line-height: 20px;
						overflow: hidden;
						color: #787876;
						display: block;
						white-space: nowrap;
						text-overflow: ellipsis;
					}
				}
			}
			.download {
				display: block;
				width: 58px;
				height: 28px;
				line-height: 28px;
				font-size: 14px;
				color: #FFFFFF;
				overflow: hidden;
				position: absolute;
				left: 7.5rem;
				top: 0.5rem;
				text-align: center;
				border-radius: 3px;
				background: #0eacf6;
			}
		}
	}
</style>