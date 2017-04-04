"use strict";

// let data ='Learning node js training';


// function testES6() {
//     let num=100;
//     console.log("Value of num in test()" + num);
//     if(true){
//     	var m = 10;
//     	console.log("inner block begins")
//         let num = 200
//         const k = 10
//         console.log("Value of num" + num)
//     }


// console.log(m);
// console.log(k); 	
// }

// testES6()
// console.log(k)
// console.log("with let" + num)
// console.log(name)

// var sum=function(x,y){
// 	return x+y
// }
// let sum = (x,y) => {

// 	x = x + 10;
// 	y = 4 + 60;

// 	return x + y
// } 

// console.log(sum(20,4))

// let customer = "Siva"
// console.log(`<h1> hellow $customer </h1>`)

// 	function getCustomer(name){
// 		return name;
// 	}

// console.log("Hellow &{getCustomer('Siva')} ")
// 	var message  = `<h2 style='backfound-color:red'>  
// ${customer}   - Plese enter the passwork thid has to atleset 
// includeds capital letter </h2>`

// document.write(message)
// var name = "Siva"

// function log (msg){
// 	console.log("logged - " + msg)
// }

// module.exports = {
// 	name : 'siva',
// 	surname : 'kakumanu',
// 	getFullName: function (){
// 		log (name + ' accessed this module on ' + new Date());
// 		return `${this.name} ${this.surname}`
// 	}
// }

class Student {


	constructor (name, age){
		this.name=name;
		this._age=age;

	}

	ShowName (){
		return this.name;
	}

	AssignName(name){
		this.name = name;
	}

	set age(value) {
		this._age = value;
	}
	get age(){
		return this._age;
	}
}

class Person extends Student {
	constructor(name,age,citizen){
		super(name,age);
		this.citizen = citizen;

	}

  getCitizen(){
  	return this.citizen;
  }

  ShowName(){
  	return super.ShowName();
  }

}

var stud = new Student("Siva", 41)
var p = new Person("Prasad", 45, "Faculty");
stud.age=50;
console.log(stud.age);
console.log(p.ShowName());