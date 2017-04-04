var fs = require("fs");
console.log('Goint to write some data ');
var stream = fs.createReadStream(process.argv[2])
//var stream = fs.createReadStream('./resource.json')

stream.on('data', (chunk) => {
	console.log(chunk.toString())
	console.log(chunk)
});

stream.on ('error', (err) => console.log(err))

stream.on('end', () => {
	console.log('finished reading file');
	stream.close();
});