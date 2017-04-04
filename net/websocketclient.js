var WebSocketClient = require('websocket').client;
var client = new WebSocketClient();

client.on ( 'connectFailed', function(error){
	console.log('fail');
});

client.on('connect', function(connection) {
	console.log('connected');

});

client.on('close', function() {
	console.log('closed');

});

client.on('message', function(message) {
	switch(message.type) {
		case 'utf8':
		console.log('from server: ' , message.utf8Data);
		break;
		default:
		   console.log(JSON.stringify(message));
		   break;
	}

});

connection.send('hello .... testing websocket from client');

client.connect('ws://localhost:8080/', )
