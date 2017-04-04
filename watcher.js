var fs = require("fs");
console.log('going to open a file');
fs.open('text.txt', 'r+', function (err, fd){
	if(err){
		return console.error(err);
	}
	console.log("File opned succusfully");
});

const watcher = fs.watch('test')
watcher.on('change', function(event,filename){
	console.log(`${event} on file ${filename}`)
})
