var arr = require('./import');
var result = arr.reduce(function(prev, next){
	return prev + next;
}, 0);
console.log(result);
