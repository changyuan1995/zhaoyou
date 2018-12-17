import Vue from 'vue'
import Router from 'vue-router'
import VueScroller from 'vue-scroller'

import home from '@/page/nav/home'
import local from '@/page/nav/local'
import find from '@/page/nav/find'

import search from '@/page/twolv/search'
import game from '@/page/twolv/game'
import activity from '@/page/twolv/activity'

import center from '@/page/my/center'
import register from '@/page/my/register'
import people from '@/page/my/people'

Vue.use(Router)
Vue.use(VueScroller)

var router = new Router({
	routes: [{
		path: '/home',  //主页
		name: 'home',
		component: home,
		meta :{
			index : 0,
			show : true
		}
	}, {
		path: '/local',  //分类页面
		name: 'local',
		component: local,
		meta :{
			index : 1,
			show : true
		}
	}, {
		path: '/find',  //发现页面
		name: 'find',
		component: find,
		meta :{
			index : 2,
			show : true
		}
	}, {
		path: '/center',  //登录
		name: 'center',
		component: center,
		meta :{
			index : 3,
			show : false
		}
	}, {
	    path: '/game/:id',  //具体软件
	    name: 'game',
	    component: game,
	    meta :{
	    	index : 3,
			show : false
		}
    }, {
	    path : '/search',  //搜索页面
		name : 'search',
		component : search,
		meta :{
			index : 3,
			show : false
		}
	}, {
	    path : '/activity',  //活动页面
		name : 'activity',
		component : activity,
		meta :{
			index : 3,
			show : false
		}
	}, {
	    path : '/register',  //注册页面
		name : 'register',
		component : register,
		meta :{
			index : 4,
			show : false
		}
	},  {
	    path : '/people',  //用户页面
		name : 'people',
		component : people,
		meta :{
			index : 3,
			show : true
		}
	}, {
		path: "*",  //默认显示主页
		redirect: '/home'
	}]
})

export default router;