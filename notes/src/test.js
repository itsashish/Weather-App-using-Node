// //Built in modules
// const fs = require('fs')
// const check = require('./utility')
// const validator = require('validator')

// fs.writeFileSync('notes.txt' , 'Hello There!')

// //Custom Modules
// check();

// //Others module
// console.log(validator.isEmail('Mahesh@gmail.com'))

//JSON

// const obj = {
//     name: "Ahish",
//     address: "JP Nagar"
// }
// console.log(obj)
// console.log(JSON.stringify(obj))
// console.log(JSON.parse(JSON.stringify(obj)))

//Arrow functions

// const multiply = function (num) {
//     return num * 2
// }

// function multiply1(num) {
//     return num * 2
// }
// console.log(multiply(2))
// console.log(multiply1(2))

// const multiply2 = (num) => num * 2

// const Person = {
//     name: 'Ashish',
//     numbers: [1,2,3],
//     printNumbers() {
//         this.numbers.forEach((num) => console.log(num))
//     },
//     getName() {
//         return this.name
//     }
// }

// Person.printNumbers()

//Get two Users from database and sum two numbers

// const user1 = Users.readDBSync(1) //2 s
// console.log(user1)//1 ms
// const user2 = Users.readDBSync(2) //2 sec
// console.log(user2)//1 ms

// console.log(1+2) //1 sec
// //Total 5.2 sec



// const user3 = Users.readDBAsync(1, () => {
//     console.log(user1)
// }) // 0 - 2 sec

// const user4 = Users.readDBAsync(2, () =>{
//     console.log(user4)
// }) //0.1 ms - 2.1

// console.log(2+3) // .2 - 1 se c

// //Total 2.2 sec

// console.log('Hi Mahesh')

// setTimeout(() => {
//     console.log('I am Here!')
// },3000)

// setTimeout(() => {
//     console.log('I am Here now!')
// },0)

// console.log("Hi Ashish")

//Click event fetch data - 3 

// Data Load is happening -- 5 sec

//Click handler click the button - 1 ms

//CallBack Stack, Event Loop

        //Stack                         Event Queue
                                        // Callback()
                                        // CallBack2()


//Function Expressions
//  function multiply(a, b) {
//      return a * b
//  }

// multiply(2,3)

// const multiply1 = function (a,b) {
//     return a*b
// }

// multiply1(2,3)

// const multiply2 = function (a,b) {
//     return a*b
// }(2,3)

// console.log(multiply2)

//IIFEs
// (function (a,b) {
//     console.log(a)
// }(2,3));

//Hoisting - Initialization, assigning and execution
// var a = undefined
// function b() {
//     console.log("Hello")
// }
// b()
// console.log(a)
// var a = "Mahesh"
// b()
// console.log(a)

//Variable environments

// function a() {
//     var myVar;
//     console.log(myVar)
// }


// function b() {
//     var myVar = 1;
//     console.log(myVar)
//     a()
// }

// var myVar = 2;
// b()
// console.log(myVar)

// Scope chain
// function a() {
//     //var myVar = 1
//     function b() {
//         console.log(myVar)
//     }

//     b()
// }

// var myVar = 20
// a()
// console.log(myVar)

//closure
// function Greet(WhatToSay) {
//     return function() {
//         console.log(WhatToSay + ' ' + 'Mahesh')
//     }
// }

// var display = Greet('Hello')
// display()

// var funcs = [];
// // let's create 3 functions
// for (var i = 0; i < 3; i++) {
//   // and store them in funcs
//   funcs[i] = function() {
//     // each should log its value.
//     console.log("My value: " + i);
//   };
// }
// for (var j = 0; j < 3; j++) {
//   // and now let's run each one to see
//   funcs[j]();
// }

//Call, apply and Bind (Related to this)
// const person = {
//     fName:'Mahesh',
//     lName:'Biradar',
//     getFullName: function () {
//         return this.fName + ' ' + this.lName
//     }
// }

// const printName = function (a, b) {
//     console.log(this.getFullName())
//     console.log(a + ' ' +  b)
// }


// const printNameUpdated = printName.bind(person, 'a', 'b');
// printNameUpdated();

// printName.apply(person, ['c', 'd'])

// printName.call(person, 'e', 'f')

// //Function Borrowing

// const person2 = {
//     fName: 'Ashish',
//     lName: 'Singh'
// }

// const print = person.getFullName.bind(person2)
// console.log(print())

// //Function Currying

// const multiply  = function (a, b) {
//     return a*b
// }

// const myltiplyByTwo = multiply.bind(this, 2) 
// console.log(myltiplyByTwo(2))

//Functional Programming

let a = [1, 2, 3]
// var newArray = []

// function multiplyByTwo(){
//     for(var i=0; i < a.length; i++){
//         a[i] = a[i] * 2
//     }
//     return a
// }

function arithmatics(callback){
    var myArray = []
    for(var i=0; i < a.length; i++){
        myArray.push(callback(a[i]))
    }
    return myArray
}
// console.log(multiplyByTwo())

console.log(arithmatics(function(a){
    return a*2
}))

console.log(arithmatics(function(a){
    return a*10
}))



