var app = require('express')();
var http = require('http').Server(app);
var session = require('express-session');
var express  = require('express');

app.use(session({
secret : 'test session',
resave : false,
saveUninitialized: true
}));


app.get('/setsession', function(req,res){

	sess=req.session;
	sess.sessdata = {};
	sess.sessdata.email = "sivarani0227@gmail.com"
	sess.sessdata.pass = "jesussavesus";
	var data = {
		"Data":""
	};
	data["Data"] = 'Session set succusfully';
	res.json(data);
});

http.listen(8080, function(){
	console.log("connected adn running")
})