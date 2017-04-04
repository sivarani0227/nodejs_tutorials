var fs = require("fs");
console.log('Goint to write some data ');
fs.writeFile('siva.txt', "Learning writing...." , function (err){
	if(err){
		return console.log(err);
	}
});

