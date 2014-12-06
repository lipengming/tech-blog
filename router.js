var index = require('./routes/index');

module.exports = function(app){
	app.get("/index",index.index);
	app.get("/",index.index);
	app.get("/post",index.post);
	app.post("/article/post",index.doPost);

	app.get("/archives",index.archives);
	app.get("/detail/:id",index.detail);
	app.get("/about",index.about);
	app.get("/error",index.error);
	app.get("/tag/:tagName",index.tag);
	app.post("/search",index.search);

}