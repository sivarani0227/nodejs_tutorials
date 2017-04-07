const express = require('express');
const app =  express();
const port = 3000

app.use((request, response, next) => {
	console.log(request.headers)
	next();
})

app.use((request, response, next)=>{
	request.data = Math.random();
	next();
})

app.use((err, request, response , next) => {
	if(err){
		console.log('error occured');
		response.status(500).send('Something broken');
	}
})

app.get('/', (request, response) => {
	response.json ({ data : request.data})
})

app.get('/download', (request , response) => {
	console.log('file is download by client ')
	response.download('./Desert.jpg');
})

app.listen(port, (err) => {
	if(err){
		return console.log("something bad happend");

	}else{
		console.log("server is listening .....")
	}
})