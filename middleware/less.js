var fs = require('fs');
var promisify = require('promisify-node');
var less = require('less');

var read = promisify(fs.readFile);
var stat = promisify(fs.stat);

module.exports = function(req, res, next){
	var pathname = req._parsedUrl.pathname;
	if (!/\.css$/.test(pathname)){
		next();
		return;
	}
	stat(process.cwd() + pathname.replace(/\.css$/, '.less')).then(function(stats){
		return read(process.cwd() + pathname.replace(/\.css/, '.less'));
	}).then(function(lessString){
		return less.render(lessString.toString());
	}).then(function(lessResult){
		return lessResult.css;
	}).then(function(css){
		res.setHeader('Content-Type', 'text/css');
		res.end(css);
	}, function(err){
		next(err && err.code === 'ENOENT' ? null : err);
	});
};
