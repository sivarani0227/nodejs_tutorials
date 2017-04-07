var cp = require('child_process');

var child = cp.fork(__dirname + '/child.js');

child.on('message', function (msg) {
	console.log ('Output from chiled' , msg);
})

child.send('send bulk mail to all');

child.on('error', function (err) {
	console.log (err.code);
})

child.on('close', function () {
	console.log ('Child process completed');
})