import home from './state-home.js';
import game from './state-game.js';
import local from './state-local.js';
import user from './state-user.js';
export default {
	//首页列表数据
	homeNews : home,
	homeArr : [],
	//分类列表数据
	local,
	//详细游戏页面数据
	game,
	//用户列表
	user,
	//页面切换
	transitionName : '',
	allgame :[{
		title : '明日之后',
		type : '射击',
		memory : '1.40GB',
		img : './static/img/mrzh.png'
	},{
		title : '明日之后',
		type : '射击',
		memory : '1.40GB',
		img : './static/img/mrzh.png'
	},{
		title : '明日之后',
		type : '射击',
		memory : '1.40GB',
		img : './static/img/mrzh.png'
	},{
		title : '明日之后',
		type : '射击',
		memory : '1.40GB',
		img : './static/img/mrzh.png'
	},{
		title : '明日之后',
		type : '射击',
		memory : '1.40GB',
		img : './static/img/mrzh.png'
	},{
		title : '明日之后',
		type : '射击',
		memory : '1.40GB',
		img : './static/img/mrzh.png'
	},{
		title : '明日之后',
		type : '射击',
		memory : '1.40GB',
		img : './static/img/mrzh.png'
	},{
		title : '明日之后',
		type : '射击',
		memory : '1.40GB',
		img : './static/img/mrzh.png'
	}],
	activity:[{
		img : './static/img/libao.png',
		type : '热门活动',
		intr : '各种活动，火爆来袭'
	}],
	book:[{
		img	: './static/img/mrzh.png',
		name : '明日之后'
	},{
		img : './static/img/wdsj.jpg',
		name : '我的世界'
	}],
	read:[{
		img	: './static/img/mrzh.png',
		name : '明日之后'
	},{
		img : './static/img/wdsj.jpg',
		name : '我的世界'
	}]
}