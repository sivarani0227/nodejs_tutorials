var fs = require("fs");
console.log('Goint to write some data ');
var readerStream = fs.createReadStream(process.argv[2])
//var stream = fs.createReadStream('./resource.json')
var writestream = fs.createWriteStream(process.argv[3])

readerStream.pipe(writestream);
console.log('piping completed')