var net = require('net')

var server = net.createServer(function (connectionListner) {
	this.getConnections(function (err,count) {
		if(err){
			console.log("errpr getting connection");
		}
		else
		{
			connectionListner.write('connections to server :' + count + '\r\n');
		}
	});

	connectionListner.on('end', function() {
       console.log('disconnected');

	});

			connectionListner.write('Hellow socket from server \r\n');
					connectionListner.on('data', function(data) {
						console.log('message for you from client:' + data);
					});

					connectionListner.on('error', function(err) {
						console.log('server error' + err);
					});


});

server.listen(8181, function(){
	console.log('socket server is running on post 8181');
})