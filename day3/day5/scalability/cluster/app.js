var express = requrie("express");
var app = express();

app.get('/', function(req, res) {
	res.end("welcome tp cluster world with node js");
});

app.listen (3000, function(){
	console.log("Running at port 3000");
});