var fs = require("fs");

// console.log("Going to open file!");

// fs.open('package.json', 'r+', function (err , fd){
// 	if(err) {
// 		return console.error(err);
// 	}
//    console.log("File opned succussfully");

// });

// var data = fs.readFile('text.txt', function(err, data){
// 	if (err){
// 		return cosole.log(err);
// 	}
// 	return console.log("Asynchronus" + data.toString());
// });

var data = fs.readFileSync('text.txt');
console.log("synchronus" + data.toString());

