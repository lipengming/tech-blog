
var path = require('path');

module.exports = {
	version:'0.0.1',
	session_secret:'session.wangyin.com',
	auth_cookie: 'cookies.wangyin.com',
	db:'mongodb://baimo:baimo@ds061200.mongolab.com:61200/cubber',//mongodb://baimo:baimo@ds061200.mongolab.com:61200/cubber //mongodb://127.0.0.1/cubber
	host:'localhost',
	page_size:10,
	rss:{
		    title: '技术blog（Nodejs版）',
		    link: 'http://cnodejs.org',
		    language: 'zh-cn',
		    description: '技术blog（Nodejs版）',
		    //最多获取的RSS Item数量
		    max_rss_items: 50
	},
	upload_dir: path.join(__dirname, 'public', 'user_data')
};
