var net = require('net');

var connection = new createConnection({
	port:8181, host:'127.0.0.1'},
	function(){
	console.log('connection succussfull');
	this.write('hellow .. i am murthy');
		
	}
	
});

connection.on('data', function(data) {
	console.log(data.toString());
})


connection.on('error', function(error) {
	console.log(error);
})

connection.on('end', function() {
	console.log('connection ended');
});