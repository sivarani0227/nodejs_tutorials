let fs = require('fs');
fs.open('siva.txt'), 'r', (err, handle) => {
	if(err){
		console.log(`ERROR: ${err.code} - ${err.message}`);
			return
	}
	let buf = new Buffer(100000)
}