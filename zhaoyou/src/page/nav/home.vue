<template>
  <div class="home">
  	<button class="fa fa-search find" @click="search()"></button>
    <div class="wrapper" ref="wrapper">
    	<div class="wrap">
    		<div class="swiper-container banner">
    			<div class="swiper-wrapper">
				  	<div class="swiper-slide" v-for="(banner,index) in banners" :key="index">
							<img :src="banner.img">
						</div>
					</div>
					<div class="swiper-pagination"></div>
				</div>
			  <div class="mpog">
			  	<div class="all_top">
				  	<h2><i></i>火爆新游</h2>
				  	<div class="list inset">
		          <div class="item" v-for="(i,index) in hotnewgame" :key="index">
		          	<div class="phonegameTop">
		          		<img :src="i.pic1"/>
		          		<img :src="i.pic2"/>
		          		<img :src="i.pic3"/>
		          	</div>
		          	<router-link class="phongame" :to="{name:'game', params:{id:i.id}}">
	          			<img :src="i.img" @load="refresh">
			            <h3>{{i.title}}</h3>
			            <span>{{i.type}}丨{{i.memory}}</span>
			            <p>{{i.text}}</p>
		          	</router-link>
		          	<span class="download">下载</span>
		          </div>
		        </div>
		        <h2><i></i>热门游戏</h2>
		        <div class="list inset">
		          <div class="item" v-for="i in homeArr">
		          	<router-link class="singlegame" :to="{name:'game', params:{id:i.id}}">
	          			<img :src="i.img" @load="refresh">
			            <h3>{{i.title}}</h3>
			            <span>{{i.type}}丨{{i.memory}}</span>
			            <p>{{i.text}}</p>
		          	</router-link>
		          	<span class="download download1">下载</span>
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
import Swiper from 'swiper';
import { mapState } from 'vuex';
export default {
  name: 'home',
  data(){
    return {
    	banners : [{
				img : './static/img/mrzh.jpg',
			},{
				img : './static/img/jdqs.jpg'
			},{
				img : '../static/img/dwrg.jpg'
			}],
    	hotnewgame : [{
				id : 0,
				pic1 : './static/img/mrzh_1.jpg',
				pic2 : './static/img/mrzh_2.jpg',
				pic3 : './static/img/mrzh_3.jpg',
				title : '明日之后',
				text : '病毒末世下的人类生存手游',
				type : '射击',
				memory : '1.40GB',
				img : './static/img/mrzh.png'
			}],
			isLoading : false,
			changeAddress : false
    }
  },
  methods : {
  	search (){
  		this.$router.push('/search');
  	},
  	initScroll (){
			this.scroll = new BScroll(this.$refs.wrapper,{
				click : true,
				pullUpLoad : {
					threshold : -30   // 负值是当上拉到超过低部 30px；正值是距离底部距离时，
				}
			})
		},
		loadData (){
			var arr = this.homeNews.splice(0,8);
			this.$store.commit('addHomeArr',arr);
		},
		refresh (){
			this.scroll.refresh();
		}
  },
  mounted (){
  	var _this = this;
    new Swiper('.banner',{
			loop : true,
			autoplay:true,
			pagination: {
				el: '.swiper-pagination',
			},
		});
		this.initScroll();
		this.loadData();
		var _this = this;
		this.scroll.on('pullingUp', (pos) => {
			if(this.homeNews.length){
				_this.isLoading = true;
				setTimeout(function(){
					_this.isLoading = false;
					var arr = _this.homeNews.splice(0,5);
					_this.$store.commit('addHomeArr',arr);
					_this.scroll.finishPullUp(); // 终止加载
					_this.scroll.refresh();
				},500)
			}
		})
  },
  computed : {
    ...mapState(['homeNews','homeArr']),
    swiper() {
	    return this.$refs.mySwiper.swiper
	  }
  }
}
</script>
<style lang="less">
	.home{
		.find{
			width: 1rem;
			height: 1rem;
			font-size: 18px;
			border-radius: 50%;
			border: none;
			background: rgba(0,0,0,0.2);
			position: absolute;
			top: 5px;
			right: 5px;
			z-index: 100;
			color: #FFFFFF;
		}
		.wrapper{
			width: 100%;
		  height:100%;
		  overflow:hidden;
		  .wrap{
		    height:100%;
		    width: 100%;
		    background: #EEEEEE;
	    	.swiper-slide{
		    	width: 100%;
		    	img{
		    		width: 100%;
		    	}
		    }
		    .mpog{
		    	background: #FFFFFF;
		    	.all_top{
		    		overflow:hidden;
		    		h2{
			    		border-bottom: 1px solid #f1f1f1;
					    border-top: 10px solid #f2f2f3;
			    		height: 50px;
					    color: #20202c;
					    font:bold 16px/50px "微软雅黑";
					    padding: 0 0.26rem;
			    		i{
				    		width: 4px;
						    height: 16px;
						    background: #0eacf6;
						    display: inline-block;
						    float: left;
						    margin-right: 8px;
						    margin-top: 17px;
				    	}
			    	}
			    	.list{
			    		padding: 0 0.26rem;
			    		overflow: hidden;
							.item{
						    padding: 8px 0;
						    overflow: hidden;
						    position: relative;
						    z-index: 0;
						    border-bottom: 1px solid #f1f1f1;
						    .phonegameTop{
						    		img{
						    			width: 90px;
						    			float: left;
						    			margin:0px 5px 10px 5px;
						    		}
						    	}
						    .phongame,.singlegame{
						    	display: inline-block;
						    	width: 230px;
					    		img{
							    	width: 70px;
								    height: 70px;
								    border-radius: 15px;
								    float: left;
								    margin-right: 10px;
							    }
							    h3{
							    	font-size: 16px;
								    color: #090909;
								    height: 25px;
								    line-height: 25px;
								    overflow: hidden;
							    }
							    span{
							    	display: block;
								    height: 25px;
								    line-height: 25px;
								    color: #787876;
								    overflow: hidden;
							    }
							    p{
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
			    		.download{
			    			display: block;
						    width: 58px;
						    height: 28px;
						    line-height: 28px;
						    font-size: 14px;
						    color: #FFFFFF;
						    overflow: hidden;
						    position: absolute;
						    right: 0;
						    top: 90px;
						    text-align: center;
						    border-radius: 3px;
						    background: #0eacf6;
			    		}
			    		.download1{
			    			top: 25px;
			    		}
			    	}
		    	}
		    }
		  }
		}
	}
</style>