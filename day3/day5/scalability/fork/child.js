process.on('message' , function (msg) {
	console.log('Parent said' , msg);

	for(var i = 0; i < 1000000 ; i++) {
		var j = j + 30000;
	};

	process.send("process the request ... sent bulk mails to ");
	process.disconnect();
});