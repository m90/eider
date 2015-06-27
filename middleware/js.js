var browserify = require('browserify-middleware');
var fs = require('fs');

module.exports = function(req, res, next){
	var pathname = req._parsedUrl.pathname;
	var args = [].slice.call(arguments);
	if (!/\.js$/.test(pathname)){
		next();
		return;
	}
	fs.stat(process.cwd() + pathname, function(err, stats){
		if (err){
			next();
		} else {
			browserify(process.cwd() + pathname).apply(browserify, args);
		}
	});
};
