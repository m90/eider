var connect = require('connect');
var http = require('http');
var ecstatic = require('ecstatic');
var app = connect();

app.use(require('./middleware/jade'));
app.use(require('./middleware/less'));
app.use(require('./middleware/js'));

app.use(ecstatic({ root: __dirname }));

module.exports = function(port){
	http
		.createServer(app)
		.listen(port || 8080);
};
