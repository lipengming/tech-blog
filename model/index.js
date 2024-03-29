var mongoose = require('mongoose');
var config = require('../config');

mongoose.connect(config.db,
  {
    useNewUrlParser: true,
    useFindAndModify: false,
    retryWrites: true,
    w: "majority",
  },
 function (err) {
  if (err) {
    console.error('connect to %s error: ', config.db, err.message);
    process.exit(1);
  }
});

// models
require('./Article');
require('./Tag');
require('./User');


exports.Article = mongoose.model('Article');
exports.Tag = mongoose.model('Tag');
exports.User = mongoose.model('User');

