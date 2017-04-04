var fs = require("fs");
var http = require("http");



http.createServer(function(req,res){
	res.writeHead(200, {'Content-Type': 'image/png'});
	fs.createReadStream('Desert.jpg').pipe(res)
}).listen(3000)

