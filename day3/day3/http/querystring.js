var qs = require('querystring');

require('http').createServer(function (req,res) {
	if('/' == req.url){
		res.writeHead(200, {'Content-Type': 'text/html'})
		res.end ([
			'<form method="POST" action="/url">' 
			, '<ht1> My Form </h1>'
			, '<fieldset>'	
			, '<label> Personal Information </label>'
			, '<p> Enter your name </p>'
			, '<input type ="text" name="name">'
			,  '<p> <button> submit </button> </p>'
			, '</form>' 
			].join(''));
	}else if('/url' == req.url  && 'POST' == req.method) {
		var body = '';
		req.on('data', function (chunk) {
			body += chunk;
		});

		req.on('end', function () {
			res.writeHead(200, {'Content-Type': 'text/html'});
			res.end('<p> your name is <b>' + qs.parse(body).name + '</b></p>');
		});


	}else{
		res.writeHead(404);
		res.end('Not Found');
	}
}).listen(3001);