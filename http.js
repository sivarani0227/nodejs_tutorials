var fs = require("fs");
var http = require("http");

var data = fs.readFileSync('text.txt')

http.createServer(function(req,res){
	res.end(data)
}).listen(3000)

console.log("http server running on localhost:3000")