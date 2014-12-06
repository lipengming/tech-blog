var models = require('../model');
var Article = models.Article;

/**
 * 根据消息Id获取文章
 * Callback:
 * - err, 数据库错误
 * - message, 消息对象
 * @param {String} id 文章ID
 * @param {Function} callback 回调函数
 */
exports.getArticleById = function(id,callback){
	Article.findOne({_id:id},callback);
};

/**
 * 根据关键字，获取文章
 * Callback:
 * - err, 数据库异常
 * - users, 用户列表
 * @param {String} query 关键字
 * @param {Object} opt 选项
 * @param {Function} callback 回调函数
 */
exports.getArticlesByQuery = function (query, opt, callback) {
  Article.find(query,{}, opt, callback);
};

/**
 * 查找所有
 * Callback:
 * - err, 数据库异常
 * @param {Function} callback 回调函数
 */
exports.findAll = function(callback){
  Article.find({}, callback);
};

/**
 * 新增文章
 * Callback:
 * - err, 数据库异常
 * @param {String} title 标题
 * @param {String} desciption 简介
 * @param {String} content 内容
 * @param {String} author 作者
 * @param {String} author_email 作者邮箱
 * @param {Function} callback 回调函数
 */
exports.newAndSave = function (title,description,content,author,author_email,tags, callback) {
  var article = new Article();
  
  article.title=title;
  article.description=description;
  article.content=content;
  article.author=author;
  article.author_email=author_email; 
  article.tags=tags; 
  article.click_count=0;
  article.ask_count=0;
  
  article.save(callback);
};
