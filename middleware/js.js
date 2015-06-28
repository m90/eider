var browserify = require('browserify-middleware');
var fs = require('fs');
var promisify = require('promisify-node');

var stat = promisify(fs.stat);

module.exports = function(req, res, next){
	var pathname = req._parsedUrl.pathname;
	var args = [].slice.call(arguments);
	if (!/\.js$/.test(pathname)){
		next();
		return;
	}
	stat(process.cwd() + pathname).then(function(stats){
		browserify(process.cwd() + pathname).apply(browserify, args);
	}, function(err){
		next();
	});
};
