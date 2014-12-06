
var path = require('path');

module.exports = {
	version:'0.0.1',
	session_secret:'session.wangyin.com',
	auth_cookie: 'cookies.wangyin.com',
	db:'mongodb://127.0.0.1/wangyin',
	host:'localhost',
	page_size:10,
	rss:{
		    title: '网银技术blog（Nodejs版）',
		    link: 'http://cnodejs.org',
		    language: 'zh-cn',
		    description: '网银技术blog（Nodejs版）',
		    //最多获取的RSS Item数量
		    max_rss_items: 50
	},
	upload_dir: path.join(__dirname, 'public', 'user_data')
};