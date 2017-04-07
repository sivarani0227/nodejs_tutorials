var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.get('/', function (req,res){
	var drinks = [
		{name : 'Bloody Mary' , drunkness : 3 },	
		{name : 'Marthin1' , drunkness : 13 },	
		{name : 'Scotch' , drunkness : 23 },	
	];

	var tagline = "Anyway Drinking is bad habit";

	res.render('pages/index' , {
		drinks: drinks,
		tagline : tagline
	});
});

app.get('/about', function (req, res ) {
	res.render('pages/about');
});

app.listen(8080);
console.log('8080 is the magic port');