var jade = require('jade');
var fs = require('fs');
var path = require('path');

module.exports = function(req, res, next){
	var pathname = req._parsedUrl.pathname;
	fs.stat(process.cwd() + pathname, function(err, stats){
		var inferredTemplatefile = process.cwd();
		if (err && /\.html$/.test(pathname)){
			inferredTemplatefile += pathname.replace(/\.html$/, '.jade');
		} else if (err){
			next();
			return;
		} else if (stats.isDirectory()){
			inferredTemplatefile +=  path.join(pathname, 'index.jade');
		} else {
			next();
			return;
		}
		fs.stat(inferredTemplatefile, function(err, stats){
			var html;
			if (!err){
				try {
					html = jade.renderFile(inferredTemplatefile);
					res.setHeader('Content-Type', 'text/html');
					res.end(html);
				} catch (e){
					e.status = 500;
					next(e);
				}
			} else {
				next();
			}
		});
	});
};
