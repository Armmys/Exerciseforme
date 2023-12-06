/*function myFunction(value1, value2) {
    let x = value1
    let y = value2
    let z = x * y
    console.log(z)
}
myFunction(10, 2);*/

function changeBg() {
    document.body.style.backgroundColor = "red";
}
// changeBg();

// function cToF(celsius) {
//     var cTemp = celsius
//     var cToFahr = cTemp * 9 / 5 + 32;
//     var message = cTemp + "\xB0C is " +cToFahr + "\xB0F";
//     console.log(message)
// }

// cToF(30)

// function fToC(fahrenheit){
//     var fTemp = fahrenheit
//     var fToCel = (fTemp - 32) * 5 / 9;
//     var message = fTemp + "\xB0F is " + fToCel + "\xb0C"
//     console.log(message)
// }

// fToC(86)

//----------------------------------------------------------------------------

// สร้าง OBJ****

// const Person = {
//     firstName: "Pitichai",
//     lastName: "Limsuchalee",
//     eyeColor: "black",
//     fullName: function(){
//         return this.firstName + " " + this.lastName
//     }
// };

// console.log(Person)
// console.log(Person.fullName())

//----------------------------------------------------------------------------

// function displayDate(){
//     document.getElementById('demo').innerHTML = Date();
// }

//----------------------------------------------------------------------------

// var x = "Pitichai 'Arm' Limsuchalee"
// console.log(x)

//----------------------------------------------------------------------------

// Array Literal

// var myArr = ["BMW", "Ford", "Honda"];

// Array Constructor

// var myArr2 = new Array("BMW", "Ford", "Honda") แนะนำวิธีบนมากกว่า

// console.log(myArr[2])
// console.log(myArr2)

// มาที่การสร้าง method ของ array

// var fruits= ["Banana", "Apple", "Orange", "Mango"]
// // fruits.pop()
// // fruits.push("Kiwi")
// fruits.splice(2, 0, "Lemon", "Kiwi")
// console.log(fruits);

// var arr1 = ["value1", "value2", "value3", "value4", "value5"]
// var myNewArr= arr1.slice(1,3)
// console.log(myNewArr)
// console.log(arr1)

//----------------------------------------------------------------------------

//Data type in JS

// var myNum = 10;
// var myString = "Pitichai";
// var myTrue = true;
// var myFalse = false;
// var myNull = null;
// var myUndefined;
// var myObj = {};

// console.log(typeof myObj)

//----------------------------------------------------------------------------

// var cars = ["BMW", "Ford", "Honda"];

// for (var i = 0;i < cars.length; i++){
//     console.log(cars[i])
// }

// forin loop

// const Person = {
//     firstName: "Pitichai",
//     lastName: "Limsuchalee",
//     age: 20
// };
// for(var x in Person){
//     console.log(Person[x])
// }

// forof loop

// var cars = ["BMW", "Ford", "Honda"];

// for (var x of cars) {
//     console.log(x)
// }

// var myString = "JavaScript";

// var y;

// for (y of myString) {
//     console.log(y)
// }

//----------------------------------------------------------------------------

// Scope แล้วว

// function myFunc(){
//    myName = "arm"
// }

// myFunc()

// console.log(myName)

//----------------------------------------------------------------------------

//template string

// var myName = "Pitichai";

// console.log(`Hi my name is ${myName}`)

// function myNames(name){
//     console.log(`hi my name is ${name}`)
// }

// myNames("arm");

//----------------------------------------------------------------------------

// arrow function

// function expression

var hello = value => "haloooooo " + value;

console.log(hello("armmy"));

