<template>
  <div id="app">
   	<transition :name="transitionName">
   		<router-view  class="main" />
    </transition>
    <div class="nav" v-if="$route.meta.show">
      <ul>
        <li v-for="nav in navs"><router-link :to="nav.link"><i class="fa" :class="nav.icon"></i>{{nav.title}}</router-link></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {	
  name: 'App',
  data (){
    return {
      navs : [{
        link : '/home',
        title : '首页',
        icon : 'fa-home'
      },{
        link : '/local',
        title : '分类',
        icon : 'fa-th-large'
      },{
        link : '/find',
        title : '发现',
        icon : 'fa-compass'
      },{
        link : '/people',
        title : '我的',
        icon : 'fa-address-card'
      }],
      transitionName:''
    }
  },
   watch: {//使用watch 监听$router的变化
    $route(to, from) {
      //如果to索引大于from索引,判断为前进状态,反之则为后退状态
      if(to.meta.index > from.meta.index){
        //设置动画名称
        this.transitionName = 'slide-left';
      }else{
        this.transitionName = 'slide-right';
      }
    }
  }
}
</script>

<style lang="less">
#app {
	width: 100%;
	height: 100%;
  display: flex;
  flex-direction: column;
  .main{
  	flex-grow: 1;
  	flex-direction: column;
  	display: flex;
  }
  .nav{
    width:100%;
    height:1.6444rem;
    position:absolute;
		bottom:0;
    border-top:0.026667rem solid #ddd;
    justify-content: space-around;
   	overflow:hidden;
		background:#fff;
    ul{
      display:flex;
      justify-content: space-around;
      text-align: center;
      margin-top:0.1000rem;
      a{
        color:#666666;
        display:flex;
        flex-direction: column;
				text-decoration: none;
        i{
          font-size:0.8rem;
          height: 20px;
          margin-bottom: 0.2rem;
        }
      }
      .router-link-active{
        color:red;
      }
    }
  }
}
.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
    will-change: transform;
    transition: all .3s;
    position: absolute;
    width:100%;
    left:0;
}
.slide-right-enter {
    transform: translateX(-100%);
}
.slide-right-leave-active {
    transform: translateX(100%);
}
.slide-left-enter {
    transform: translateX(100%);
}
.slide-left-leave-active {
    transform: translateX(-100%);
}
</style>
