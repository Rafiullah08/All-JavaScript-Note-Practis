// data types in javaScript

// premitive data type
1 - String;
2 - Number;
3 - Boolean;
4 - null;
5 - undefined;
6 - BigInt;
7 - Symbol;

/*
prefer not to use var 
because of issue in block scope and functional scope */

// non premetive data type
// 1 - Object;
// 2 - Array;
// 3; function

// Datatype conversion confusion
// conver into number
// 33 => 33
// "33asd" => NaN
//  true => 1
//  false => 0

// arthimetic operation
// addition
// sustraction
// multip and div
// modulus

// alert (3+3)  we are using node js not browser

// ecma standards

// datatypes in jv

let name = "jon";
let age = 22;
let isLogin = false;

// number range 2 to power 53 or 52
// BigInt jp number boht zyada hojaye to bigint use krte hain
// string
// Boolean => true ar false
// null => stadalone value representation of empty value (typeof null is object)
// undefined
// Symbol => unique

// Object

// datatype conversion

// let score = "123as"
// console.log(score)

// let valueNumber = Number(score) // => convert hojayega mgr iski value NaN hoga
// let score = Number (null)
// console.log(typeof score)

// let score = Number (true)
// console.log( score)

// let str = "asdd"
// let score = Number (str)
// console.log( typeof score)

// 1 => true
// 0 => false
// "" => false
// "sdd" => true

/// operations ///
// +,-,*,/,**(power), %(reminder)

// const power = 2**3 => 2*2*2
// console.log(power)

// convertion
// console.log("1" + 1)
// console.log(1 + "1")
// console.log("1" + "1")
// console.log("1" + 2 + 4)
// console.log(4 + 2 + "4")

// console.log(+true)
// console.log(+"")

// increment and decrement

// prefix and postfix

// let num = ++100

// let num2 = 100++ postfix

// comparison operotors

// console.log(null > 0)
// console.log(null == 0);
// console.log(null >= 0);

// console.log(undefined > 0);
// console.log(undefined == 0);
// console.log(undefined === 0);

// class 9

// data ko kis tarh se save kiya jata hai or kis tarh se usko access kiya jata hai
// is hisab se iske 2 types mai divide kiya hai
// premitive & non premiteve

// primitive 8 types;
// string number boolean null undefined symbol unique bigint

// non primitive / reference

// Array, objects, functions

// is javascript statically or dynamically typed
// JavaScript is a dynamic language and not static,
//  which means that variables can hold values of different
//   types during runtime. Unlike languages
//  such as Typescript or Java, you don't need
//  to declare the data type of a variable explicitly.

// javascript mai kbhi bhi hum language ko difine nhi krte hai isliye ye dynamic hai

// let id = Symbol('123')
// let anotherid = Symbol('123')
// console.log(id ,anotherid);

// let bigNumber = 687879898978879798789789n

// console.log(typeof bigNumber);

///// class 10 ///////
// Stack and Heap memory in javascript

// two type of memory
// stack (premitive)
// heap ( non-premitive)

// Primitive data types are immutable, meaning their values
//  cannot be changed once assigned. Non-primitive data
//  types are mutable and can be modified

// stack ke ander data ka copy milta hai
// heap ke ander data ka reference milta hai copy nhi original value milta hai

// let user = "jondoy"

// let userTwo = user
// userTwo = "sami"
// console.log(user);
// console.log(userTwo);

// let user = {
//     email : "jon@gmail.com",
//     id: 101,
// }

// let user2 = user
// user2.email = "sami@gmail.com"
// console.log(user);
// console.log(user2);

///////// class 11 ///////////
// Strings in Javascript

// string interpolation

let str1 = "jon";
let str2 = "doy";
// console.log(str1 + str2)
// console.log(`${str1}${str2}`);

// let user = new String('jondoy')
// console.log( user.toUpperCase());
// console.log( user.charAt(3));
// console.log( user.indexOf('d'));

let newstring = "     jon   ";

// console.log(newstring);
// console.log(newstring.trim()); // => space khatm krta hai string mai

let dataString = "sami";

// console.log(dataString.includes('samisdsd'));
// console.log(dataString.split(""));
let anotherData = dataString.split("");
let datajoin = anotherData.join("");
// console.log(anotherData);
// console.log(datajoin);

// class 12
// Number and Maths in Javascript

// let balance = 344
// console.log(balance);

// let newbalance = new Number(344)
// console.log(newbalance.toString());

////// toPrecision /////
//  The toPrecision() method formats a number to a specified length.
// let num = 23.156
// console.log(num.toPrecision(5));

// let num = Number.EPSILON
// console.log(num);

// +++++++++++++++ Maths ++++++++++++++

// let num = -14
// console.log(Math.abs(num));

let roundNum = 21.323;
// console.log(Math.round(roundNum));
// console.log(Math.ceil(roundNum));
// console.log(Math.floor(roundNum));

let num = Math.floor(Math.random() * 10 + 1);
// console.log(num);

// let otp ;

// for(var i= 1 ;i <=  4; i ++){
//     otp = Math.floor(Math.random()* 9 + 1)
// console.log(otp);

// }

// let arr = Math.min(3,1,4,5,6,7)
// console.log(arr);
// let arrMax = Math.max(3,1,4,5,6,7)
// console.log(arrMax);

// class 13
// Date and time in depth in javascript

// let date = new Date('2004,03,05').getTime()
// let today =  Date.now()

// let totalMill = today - date

// let agee = Math.floor(totalMill / 1000 / 60 /60 /24 / 365  )
// console.log(agee);

// let newdate = new Date().toLocaleString('default', {
//     weekday: "short",
//     day: "numeric",
//     year: "numeric"
// })
// console.log(newdate);

// ++++++++++++++++ class 14 +++++++++++++++++
// Array in Javascript

// let myArr = [2,4,6,7,8,9]

// myArr.shift()
// unshift add value in start of arr
// console.log(myArr);

// let arr = [2,3,4,5,6,7]
// let arrsplice = arr.splice(1,3)

// let newArr =  arr.slice(3,5)
// console.log(arr);
// // console.log(newArr);
// console.log(arrsplice);

//  +++++++++++++++++++ class 15 ++++++++++++++++
// Array part 2 in Javascript Hindi

// let arr = [3,4 ,5,6,7,8,8,9]
// arr.forEach((num)=>{
//     console.log(num);

// })

// let myArr = [23,45,56,67]
// myArr.slice(2,3)
// console.log(myArr);

// In JavaScript, the main difference between
//  slice and splice is that slice returns
// a new array while splice modifies the original array

// let arr = [1,2,3,4,["as","sd", "gf",[5,6,7]]]
// let newArr = arr.flat(Infinity)
// console.log(arr);
// console.log(newArr);

// let stdData= ["sami", "azhar", "fati", "naveed"]
// stdData.forEach((data)=>{
// console.log(`${data} khan`);

// })

// console.log(stdData);

// let myarr = [43,45,56,77,89,99]
// console.log(myarr[0]);

// let arr = [1,2,3,4,5]
// let anotherArr = [6,7,8,9]

// let concat = arr.concat(anotherArr)
// console.log(concat);

let a = {
  name: "john",
};

let b = a;
a.name = "Wick";
// console.log(a) // value: object
// console.log(b) // value: object

// a = {
//     name : "wick"
// }
//  b = {
// name : "wick"
// }

// let name1 = "rafi"
// let name2 = name1
// name1 = "sami"
// console.log(name1);
// console.log(name2);

// let user = {
//     name : "rafi"
// }

// let user2 = user
// user.name = "same"
// console.log(user2);

// non singletone Object
// let userObj = {
//     name : "sami"
// }

// singletone Object
// let newObj = new Object()
// newObj.name = "rafi"
// newObj.age = 22

// console.log(userObj);
// console.log(newObj);

// class 16
// Objects in depth in javascript

// singleton
//constructor

// singleton object
const obj = new Object();

// jp hum literal  Object create krte hai to usse  singleton nhi bnta hia
// or jp constructor se objet bnta hai to usse singleton bnta hia

// object literals

//  let mysym = Symbol("abcd")

// const jsUser = {
//     name : "jondoy",
//     email : "jon@gmail.com",
//     "full name" : "rafi ullah",
//     [mysym] : "ashash"
// }

// console.log(jsUser.name);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);

// jsUser.email = "jonchat@gmail.com"
// Object.freeze(jsUser)
// jsUser.email = "jonchat2@gmail.com"

// jsUser.greeting = function (){
//     console.log(`hello from javascript ${this.name}`);

// }
// console.log(jsUser.greeting());
// jsUser.greeting()

// let objt1 = {
//     name : "jon",
//     age: 12,
//     id: 101
// }

// let objt2 = {
//     name2 : "same",
//     age2: 16,
//     idd: 102
// }

// let obj3 = Object.assign( {},objt1, objt2)
//target & source

// let obj3 = {...objt1, ...objt2}
// console.log(obj3);

// console.log(Object.keys(objt1));
// console.log(Object.values(objt1));

// console.log(Object.keys(objt1));

// class 18
// Object de-structure and JSON API intro

// let userData = {
//     fullName : "jon",
//     stdAge: 12,
//     id: 1001
// }

// let {fullName,stdAge,id} = userData
// console.log(userData);
// console.log(fullName);

// objects end

// class 19
// Functions and parameter in javascript
// A JavaScript function is a block of code designed to perform a particular task

// function addNumber(num1 ,num2 = "hjj"){
//     return num1 + num2
// }

//  let funData = addNumber(12, 22)
// console.log(funData);

// class 20
// Functions with objects and array in javascript

// rest operators

// function calculateCardPrice  (...num){
// console.log(num);

// }

// calculateCardPrice(23,34,56,78,56,78)

// const user = {
//     name : "jonDoe",
//     age : 23,
//     id: 1001
// }
// const user2 = {
//     name : "same",
//     age : 23,
//     id: 1001
// }

// function handleObj (...anyObj){
// console.log(`just login ${anyObj.name} and id is ${anyObj.id}`);

// }
// handleObj(user,user2)

// let arr = [200,300,400.567,67]
// let arr2 = [200,300,400.567,67]

// function handleArr(...getArr) {
//    let newarr = getArr
//    return newarr[1]
// //    console.log(newarr);

// }

// let arrdata = handleArr(arr,arr2)
// console.log(arrdata);

// ++++++++++++++++++ class 21 +++++++++++++++++
// Global and local scope in javascript

// if(true){
// var num1 = 30

// let num2 = 40

// const num3 = 50
// console.log( "local",num1,num2,num3);

// }

// console.log( "global",num1);

// let c = 299
// let d = 2089

// function add(){
// let result = c + d
// console.log(result);
// }
// add()

// if(true){
//    var  i = 34
// }
// i = 56
// console.log(i);

//  ++++ Scope in javaScript ++++
// Scope determines the accessibility of variables,
// objects, and functions from different parts of the code

// ++++++++++++++ class 22 ++++++++++++++++
// Scope level and mini hoisting in javascript

// function one() {
//   const userName = "jonDoe";

//   function two() {
//     const email = "jonDoe@gmail.com";
//     console.log(userName);
//   }
// // console.log(email);
// two();
// }

// one();

// function one(){
//     const name = "rafi"
//     const age = 22

//     function two() {
//         const name2 = "jon"
//     const age2 = 21

// function three() {
//     console.log(name, age);
//     console.log(name2, age2);
// }
// three()
//     }
// two()
// }
// one()

// if(true){
//     const userName = "rafi"

//     if(userName === "rafi"){
//         const username2 = "jondoy"
//         console.log(userName);
//     }
// }

// +++ interesting +++
// Hoisting

// console.log(addOne(6));

// function addOne(num) {
//     return num + 1
// }

// const addTwo = function(num){
// return num +10
// }

// console.log(addTwo(8));

// +++++++++++++ class 23 ++++++++++++++
// THIS and arrow function in javascript
// browser ke andr global object wo window object hai

// this current context ko refer krta hain

// const user = {
//     name : "rafiullah",
//     age : 22,
//     id: 1001,
//     welcomeMessage : function(){
//         console.log(`welcome ${this.name} into website`);

//         return this.id
//     }
// }
// console.log(user.welcomeMessage());
// console.log(this);

// function myFun(){
//     console.log(this);
// }
// myFun()

// explicit return
// const addTwo = (num1, num2)=> {
//     return num1 + num2
// }
// console.log(addTwo(12,23));
// let userObj = {
//     name : "rafi"
// }

// const myFun = ()=> ({name : "rafi",age: 23})
// console.log(myFun());

// const newFun = ()=> ({userName : "jonDoe"})
// console.log(newFun());

// implicit return
// const addNum = (num1,num2)=> (num1 + num2)
// console.log(addNum(24,23));

// ++++++++++++++++= class 24 ++++++++++++++++++
// Immediately Invoked Function Expressions IIFE

// Avoid polluting the global namespace
// global scope k polution se problem hoti hai usko khatm krne keliye iife ka use krte hai
// global scope ke pollution ko hatanae keliye iife ka use krte hai
// function chai() {
//     console.log("hello");

// }

// chai()
// (
//     function chai(num1,...num2) {
//         console.log("hello");
//         console.log(num1 ,"and", num2);
//     }
// )(23,34,34,56,67,78);

// (()=>{
//     console.log(`db connected`);

// })()

// let newArr = [2,4,5,6,7,8,10]

// let newFun = (arr)=> {
// return arr.map((num)=>{
//     return num + 1
// })
// }

// console.log(newFun(newArr));

// let newObj = {
//     name : "rafi",
//     age: 22,
//     id: 1001
// }

// let newObj = {
//     name : "rafi",
//     age : 22,
//     id : 1001
// };

// ((obj)=>console.log(obj)
// )(newObj)

// let newFun = (obj)=> {

// console.log(obj);

// }
// newFun(newObj)

// ++++++++++++++++++ class 25 +++++++++++++++++
// How does javascript execute code + call stack

// javaScript executaion  context
// 1 Global EC
// is global ec ko this ka jo variable hai iske andr rk diya jata hai
// 2 function EC
// 3 Eval EC

// javascript code run in two phasis
// 1 memory creation phase => isme sirf memory alocation hota hai
// 2 execution phase

// csll stack ke and lifo last in out first ka concept chalta hain

// 1. global ec
// 2. memory alocation
// 3. eval ec

// +++++++++++++++ class 26 ++++++++++++++++
// Control flow in javascript

// let userLoggedIn = true;
// let userDebit = true;
// let userCountry = "pakistann";

// if(userLoggedIn && userDebit){
//     console.log("allow shopping");
// }else {
//     console.log("not allow to shopping");
// }

// if (userLoggedIn) {
//   if (userCountry === "pakistann") {
//     if (userDebit) {
//       console.log("user alow to shopping");
//     } else {
//       console.log("debit card require");
//     }
//   } else {
//     console.log("user is out of regin");
//   }
// } else {
//   console.log("user not allow to shopping");
// }


// let stdData = {
//     name :"jondoy",
//     age: 15,
//     id: 1001
// }

// if(stdData.name === "jondoy"){
//     if(stdData.age > 20){
// if(stdData.id){
//     console.log("allow in class");
    
// } else {
//     console.log("plz conform your id");
    
// }
//     } else {
//         console.log("this age person can not be allow");
        
//     }
// } else {
//     console.log("your data is not existing");
    
// }

// let month = "feb"

// switch (month) {
//     case "jan":
//         console.log("cold whether");
//         break;
//     case "feb":
//         console.log("month is feb");
        
// break
//     default:
//         console.log("no match month");
        
//         break;
// }

// falsy values
// false, 0, -0 , "", null, undefined, BigInt 0n,

// truthy values
// "0", 'false', [], " ", { }, function(){}

// check empty array

// let emptyArr = [2,3,4]

// if(emptyArr.length == 0){
//     console.log("arr is empty");
    
// }else {
//     console.log("arr is not empty");
    
// }

// check empty objects

// const emptyObj = {
//     name : ""
// }

// if(Object.keys(emptyObj).length == 0){
//     console.log("object is empty");
    
// } else {
//     console.log("object is not empty");
    
// }

// nullish coalescing operators (??) : null and undefined

// let userNum;
// userNum = 89 ?? 67
// console.log(userNum);

// // terniary operator

// condition ? true: false


// function one(num1,num2){
//     return num1 + num2
// }

// function two(){
//     return ""
// }

//  const result = one(23,45) ?? two()
//  console.log(result);
 

// +++++++++++++ class 27 ++++++++++++++
// For loop with break and continue

// for (let i = 0; i <= 10; i++) {
   
//     for (let j = 1; j < 10; j++) {
      
//         console.log(i + "x" + j + "=" + i * j);
           
//     }  
    
// }


// for (let index = 0; index < 20; index++) {
//     if(index == 10){
//         console.log(`detected 10 ${index * index}`); 
//         break  
//     }
//     console.log(index);
// }

 