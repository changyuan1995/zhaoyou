<template>
	<div class="activity">
		<div class="header">
			<button class="fa fa-chevron-left back" @click="back()"></button>
			<p>活动</p>
	    </div>
	   	<div class="wrapper">
	      	<div class="wrap">
	        	<div class="activ">
	        		<p>暂无活动</p>
	        	</div>
	      	</div>
	    </div>
	</div>
</template>
<script>
	import { mapState } from 'vuex';
	import BScroll from 'better-scroll';
	export default {
	  	name: 'activity',
	  	data(){
	    	return{
	    		
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
	.activity{
		.header{
			width: 100%;
			height: 1rem;
			padding: 5px;
			flex-shrink:0;
			background: #0EACF6;
			.back{
				float: left;
				width: 1rem;
				height: 1rem;
				border: none;
				font-size: 18px;
				color: #FFFFFF;
				background: #0EACF6;
			}
			p{
				float: left;
				width: 73%;
				text-align: center;
				color: #FFFFFF;
				font:bold 20px/30px kartika;
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
		    	.activ{
		    		p{
		    			text-align: center;
		    			padding-top: 4rem;
		    			font-size: 30px;
		    			color: #666666;
		    		}
		    	}
		    }
		}
	}
</style>