var request = require('supertest');
var app = require('./../index')();

describe('eider', function(){
	describe('success', function(){
		it('renders jade into html', function(done){
			request(app)
				.get('/test/fixtures/eider.html')
				.expect('Content-Type', /html/)
				.expect(/Hello/)
				.expect(200)
				.end(done);
		});
		it('renders less into css', function(done){
			request(app)
				.get('/test/fixtures/eider.css')
				.expect('Content-Type', /css/)
				.expect(/99px/)
				.expect(200)
				.end(done);
		});
		it('browserifies javascript', function(done){
			request(app)
				.get('/test/fixtures/eider.js')
				.expect('Content-Type', /javascript/)
				.expect(/MODULE_NOT_FOUND/)
				.expect(200)
				.end(done);
		});
		it('statically serves other assets', function(done){
			request(app)
				.get('/test/fixtures/pic.jpg')
				.expect('Content-Type', /image/)
				.expect(200)
				.end(done);
		});
		it('looks for index.jade when requested a directory', function(done){
			request(app)
				.get('/test/fixtures/sub/')
				.expect('Content-Type', /html/)
				.expect(200)
				.end(done);
		});
	});
	describe('error', function(){
		it('404s on missing files', function(done){
			request(app)
				.get('/test/fixtures/some/path/some.png')
				.expect(404)
				.end(done);
		});
		it('500s on invalid jade', function(done){
			request(app)
				.get('/test/fixtures/error.html')
				.expect(500)
				.end(done);
		});
		it('500s on invalid less', function(done){
			request(app)
				.get('/test/fixtures/error.css')
				.expect(500)
				.end(done);
		});
		it('500s on invalid js', function(done){
			request(app)
				.get('/test/fixtures/error.js')
				.expect(500)
				.end(done);
		});
	});
});
