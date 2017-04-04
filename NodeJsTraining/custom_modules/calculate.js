var data ='Learning node js training';

var calculate = function (a ,b ) {
	console.log (data);
	return a + b + 10 * b;
}


var add = function (a,b){
	return a+b;
}

var perform  = function () {
	console.log("I am performing function in calculater module");

}
exports.calculate = calculate;
exports.add = add;
