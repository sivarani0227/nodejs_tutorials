process.stdin.setEncoding('utf8');
console.log (`type ur text and press end to terminate line (ctrl + c to stop)`);

process.stdin.on('readable', () => {
	var chunk = process.stdin.read();
	if(chunk !== null){
		process.stdout.write('You typed : ' + chunk);

	}
});