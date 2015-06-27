var connect = require('connect');
var http = require('http');
var ecstatic = require('ecstatic');
var chalk = require('chalk');

var app = connect();

app.use(require('./middleware/jade'));
app.use(require('./middleware/less'));
app.use(require('./middleware/js'));

app.use(ecstatic({ root: __dirname }));

module.exports = function(port){
	http
		.createServer(app)
		.listen(port || 8080);
	console.log(chalk.underline('QUAK, QUAK!'));
	console.log('Local eider running at port: ' + chalk.cyan(port || 8080));
};
