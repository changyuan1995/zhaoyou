<template>
	<div class="search">
		<div class="header">
			<button class="fa fa-chevron-left back" @click="back()"></button>
	      	<input type="text" placeholder="请输入关键字" v-model="val">
	      	<button class="fa fa-search sure" @click="search()"></button>
	    </div>
	   	<div class="wrapper">
	      	<div class="wrap">
	        	<div class="hot">
	        		<div class="hotTop">
	        			热门搜索
	        		</div>
	        		<ul>
	        			<li v-for="i in hotsearch">{{i.name}}</li>
	        		</ul>
	        	</div>
	        	<div class="history">
	        		<div class="histortTop">
	        			搜索历史
	        		</div>
	        		<ul>
	        			<li v-for="a in arr">{{a}}</li>
	        		</ul>
	        	</div>
	      	</div>
	    </div>
	</div>
</template>

<script>
import { mapState } from 'vuex';
import BScroll from 'better-scroll';
export default {
  	name: 'search',
  	data(){
    	return{
    		val : '',
    		arr : []
    	}
  	},
  	mounted(){
    	const scroll = new BScroll('.wrapper', {
				click: true
			})
    },
	methods : {
	  	back (){
	  		this.$router.go(-1);
	  	},
	  	search : function(){
	  		var result = this.arr.some((v,i) => {
	  			return v == this.val
	  		})
	  		if (!result){
	  			this.arr.push(this.val)
	  		}
	  	}
	},
	computed : {
	    ...mapState(['hotsearch'])
	},
}
</script>

<style lang="less">
.search{
	.header{
		width: 100%;
		height: 1.3rem;
		background: #0EACF6;
		border-bottom:0.026667rem solid #bbb;
  		display:flex;
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
		input{
			float: left;
			height: 0.87rem;
			margin: 5px;
			border-radius: 0.08rem;
			border:0.026667rem solid #bbb;
			width:70%;
			text-indent: 0.266667rem;
		}
		.sure{
			float: left;
			width: 1rem;
			height: 1rem;
			margin: 4px;
			background: #0EACF6;
			border: none;
			font-size: 20px;
			color: #FFFFFF;
		}
	}
	.wrapper{
		width: 100%;
		height:100%;
		display: flex;
		flex-grow: 1;
		overflow:hidden;
		.wrap{
	    	height:100%;
	    	width: 100%;
	    	background: #FFFFFF;
	    	.hot,.history{
	    		padding: 0 .32rem;
	    		.hotTop,.histortTop{
		    		padding: .4rem 0;
	    			font-size: .37334rem;
	    			color: #666;
		    	}
		    	li{
    				display: inline-block;
				    padding: 0 .26667rem;
				    margin: 0 .26667rem .26667rem 0;
				    line-height: .70667rem;
				    font-size: .32rem;
				    background: #BBBBBB;
				    color: #FFFFFF;
				    border-radius: .13333rem;
    			}
	    	}
	    }
	}
}
</style>