<template>
	<div class="find">
		<div class="header">
		  <h2>发现</h2>
		</div>
		<div class="wrapper">
			<div class="wrap">
				<div class="found">
					<ul>
						<li v-for="i in activity">
							<router-link class="activity" to="/activity">
								<img :src="i.img"/>
								<h3>{{i.type}}</h3>
								<span>{{i.intr}}</span>
								<i class="fa fa-chevron-right"></i>
							</router-link>
						</li>
					</ul>
				</div>
			</div>
			<transition name="tol">
				<router-view class="cate"></router-view>
			</transition>
		</div>
	</div>
</template>
<script>
import BScroll from 'better-scroll';
import { mapState } from 'vuex';
export default {
	name: 'find',
    data(){
        return{ 
        }
    },
    computed: {
			...mapState(['activity'])
		},
}
</script>
 
 
<style lang="less">
.find{
	.header{
		width: 100%;
		height: 1.2rem;
		text-align: center;
		flex-shrink:0;
		background: #0EACF6;
		h2{
			color: #FFFFFF;
			font:bold 20px/1.2rem kartika;
			margin: auto;
		}
	}
	.wrapper{
		width: 100%;
		height: 100%;
		display: flex;
		flex-grow: 1;
		background: #f5f5f5;
		overflow: hidden;
		.wrap {
			height: 90%;
			width: 100%;
			background: #FFFFFF;
			overflow: hidden;
			ul{
				width: 100%;
				li{
					width:90%;
					height: 50px;
					position: relative;
					padding:5px 5%;
					border-bottom: 1px solid #DDDDDD;
					img {
						width: 40px;
						height: 40px;
						border-radius: 5px;
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
						line-height: 14px;
						color: #787876;
						overflow: hidden;
					}
					i{
						height: 20px;
						line-height: 20px;
						color: #787876;
						position: absolute;
						top: 20px;
						right: 5px;
					}
				}
			}					
		}
	}
}
</style>