// let EventEmitter = require('events').EventEmitter
// a = new EventEmitter

// a.on('Inserted', () => console.log('record inserted'));

// e.emit('Inserted');

// const events= require('events'),  
// emmiter = new events.EventEmitter();

// let doATask =(status) => {
// 	if(status==='success') {
//   	     emmiter.emit('taskSuccess');
// 	}
// 	else if(status==='fail') {
//   	     emmiter.emit('taskFail');
// 	}
// 	emmiter.emit('taskComplete', 'complete', status);


// }

// emmiter.on('taskSuccess', () => {
// 	console.log('task success');
// });
// emmiter.on('taskFail', () => {
// 	console.log('task fail');
// });
// emmiter.on('taskComplete' , (type, status) =>  {
// 	console.log(`the task is ${type} with status ${status}`);
// });

// setTimeout(doATask, 2e3, 'success');
// setTimeout(doATask, 4e3, 'fail');

// console.log(process.env.os)

// console.log(1);

// setTimeout(()=> console.log('Hellow'), 5000)
// process.nextTick(function () { 
// console.log(3)
// });
// console.log(2);

var events= require('events'); 


function getEmitter(){
	var emmiter = new events.EventEmitter();
	process.nextTick(function() {
	 emmiter.emit('start');	
	});
	return emmiter;
	
}

var myEmitter = getEmitter();


myEmitter.on('start', () => {
console.log('started');

})
