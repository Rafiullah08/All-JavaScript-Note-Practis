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

// 1 Global executaion  context
// is global ec ko this ka jo variable hai iske andr rk diya jata hai
// 2 function executaion  context

// 3 Eval executaion  context

// javascript code run in two phasis
// 1 memory creation phase => isme sirf memory alocation hota hai
// 2 execution phase

// javaScript ka code run hone ke bad all execution phase delete hojata hai

// csll stack me ifo last in out first ka concept chalta hain
 
// 1. global ex
// 2. memory alocation
// 3. eval ex

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

// for (let index = 0; index <+ 10; index++) {

//   for (let j = 1; j <= 5; j= j+ 2) {
//     console.log(j);
    
//   }
  
// }

// +++++++++++++++ class 28 ++++++++++++++
// While and do while loop in Javascript

// let index = 0
//  while (index <= 20) {
//   console.log(`value of index is ${index}`);
  
//   index = index + 10
//  }

// let index = 1
// do{
//   console.log(`value of index is ${index}`);
//   index++
// } while ( index <= 15)
 
// +++++++++++++++ class 29 +++++++++++++++++++++
// High Order Array loops 


// for in loop
// for of loop
// forEach loop

// const arr = [2,3,4,5,6,7,8,89,10]

// for (const arrNum of arr) {
//   console.log(arrNum);
  
// }

let str = "hello world"

for (const strValue of str) {
  //  console.log(strValue);
 
}

const map = new Map()
map.set("pak", "Pakistan")
map.set("ind", "India")
map.set("fr", "France")

// console.log(map);

// for (const [key,val] of map) {
//   console.log(val );
// }



// const myObj = {
//   name : "rafi",
//   age : 22,
//   id: 101,
//   isLogin : false
// }

// for (const key in myObj) {
// console.log(`key of myObj is ${key} and value is ${myObj[key]}`);
// }

const myArr = [2,34,56,67,77]

// myArr.forEach((items,index,arr)=>{
// console.log(items,index,arr);
// })

// function printMe(items) {
//   console.log(items);
  
// }

// myArr.forEach(printMe)

// ++++++++++++ class 30 +++++++++++++++
// High Order Array loops
// filter 
// map

// let arr = [1,3,4,6,6,7,8]

//  let filter = arr.filter((num)=> {
// return num <= 5
// })

// console.log(filter);

let users = [
  {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  },
  {
    "id": 2,
    "name": "Ervin Howell",
    "username": "Antonette",
    "email": "Shanna@melissa.tv",
    "address": {
      "street": "Victor Plains",
      "suite": "Suite 879",
      "city": "Wisokyburgh",
      "zipcode": "90566-7771",
      "geo": {
        "lat": "-43.9509",
        "lng": "-34.4618"
      }
    },
    "phone": "010-692-6593 x09125",
    "website": "anastasia.net",
    "company": {
      "name": "Deckow-Crist",
      "catchPhrase": "Proactive didactic contingency",
      "bs": "synergize scalable supply-chains"
    }
  },
  {
    "id": 3,
    "name": "Clementine Bauch",
    "username": "Samantha",
    "email": "Nathan@yesenia.net",
    "address": {
      "street": "Douglas Extension",
      "suite": "Suite 847",
      "city": "McKenziehaven",
      "zipcode": "59590-4157",
      "geo": {
        "lat": "-68.6102",
        "lng": "-47.0653"
      }
    },
    "phone": "1-463-123-4447",
    "website": "ramiro.info",
    "company": {
      "name": "Romaguera-Jacobson",
      "catchPhrase": "Face to face bifurcated interface",
      "bs": "e-enable strategic applications"
    }
  },
  {
    "id": 4,
    "name": "Patricia Lebsack",
    "username": "Karianne",
    "email": "Julianne.OConner@kory.org",
    "address": {
      "street": "Hoeger Mall",
      "suite": "Apt. 692",
      "city": "South Elvis",
      "zipcode": "53919-4257",
      "geo": {
        "lat": "29.4572",
        "lng": "-164.2990"
      }
    },
    "phone": "493-170-9623 x156",
    "website": "kale.biz",
    "company": {
      "name": "Robel-Corkery",
      "catchPhrase": "Multi-tiered zero tolerance productivity",
      "bs": "transition cutting-edge web services"
    }
  },
  {
    "id": 5,
    "name": "Chelsey Dietrich",
    "username": "Kamren",
    "email": "Lucio_Hettinger@annie.ca",
    "address": {
      "street": "Skiles Walks",
      "suite": "Suite 351",
      "city": "Roscoeview",
      "zipcode": "33263",
      "geo": {
        "lat": "-31.8129",
        "lng": "62.5342"
      }
    },
    "phone": "(254)954-1289",
    "website": "demarco.info",
    "company": {
      "name": "Keebler LLC",
      "catchPhrase": "User-centric fault-tolerant solution",
      "bs": "revolutionize end-to-end systems"
    }
  },
  {
    "id": 6,
    "name": "Mrs. Dennis Schulist",
    "username": "Leopoldo_Corkery",
    "email": "Karley_Dach@jasper.info",
    "address": {
      "street": "Norberto Crossing",
      "suite": "Apt. 950",
      "city": "South Christy",
      "zipcode": "23505-1337",
      "geo": {
        "lat": "-71.4197",
        "lng": "71.7478"
      }
    },
    "phone": "1-477-935-8478 x6430",
    "website": "ola.org",
    "company": {
      "name": "Considine-Lockman",
      "catchPhrase": "Synchronised bottom-line interface",
      "bs": "e-enable innovative applications"
    }
  },
  {
    "id": 7,
    "name": "Kurtis Weissnat",
    "username": "Elwyn.Skiles",
    "email": "Telly.Hoeger@billy.biz",
    "address": {
      "street": "Rex Trail",
      "suite": "Suite 280",
      "city": "Howemouth",
      "zipcode": "58804-1099",
      "geo": {
        "lat": "24.8918",
        "lng": "21.8984"
      }
    },
    "phone": "210.067.6132",
    "website": "elvis.io",
    "company": {
      "name": "Johns Group",
      "catchPhrase": "Configurable multimedia task-force",
      "bs": "generate enterprise e-tailers"
    }
  },
  {
    "id": 8,
    "name": "Nicholas Runolfsdottir V",
    "username": "Maxime_Nienow",
    "email": "Sherwood@rosamond.me",
    "address": {
      "street": "Ellsworth Summit",
      "suite": "Suite 729",
      "city": "Aliyaview",
      "zipcode": "45169",
      "geo": {
        "lat": "-14.3990",
        "lng": "-120.7677"
      }
    },
    "phone": "586.493.6943 x140",
    "website": "jacynthe.com",
    "company": {
      "name": "Abernathy Group",
      "catchPhrase": "Implemented secondary concept",
      "bs": "e-enable extensible e-tailers"
    }
  },
  {
    "id": 9,
    "name": "Glenna Reichert",
    "username": "Delphine",
    "email": "Chaim_McDermott@dana.io",
    "address": {
      "street": "Dayna Park",
      "suite": "Suite 449",
      "city": "Bartholomebury",
      "zipcode": "76495-3109",
      "geo": {
        "lat": "24.6463",
        "lng": "-168.8889"
      }
    },
    "phone": "(775)976-6794 x41206",
    "website": "conrad.com",
    "company": {
      "name": "Yost and Sons",
      "catchPhrase": "Switchable contextually-based project",
      "bs": "aggregate real-time technologies"
    }
  },
  {
    "id": 10,
    "name": "Clementina DuBuque",
    "username": "Moriah.Stanton",
    "email": "Rey.Padberg@karina.biz",
    "address": {
      "street": "Kattie Turnpike",
      "suite": "Suite 198",
      "city": "Lebsackbury",
      "zipcode": "31428-2261",
      "geo": {
        "lat": "-38.2386",
        "lng": "57.2232"
      }
    },
    "phone": "024-648-3804",
    "website": "ambrose.net",
    "company": {
      "name": "Hoeger LLC",
      "catchPhrase": "Centralized empowering task-force",
      "bs": "target end-to-end models"
    }
  }
]

// let filterData = users.filter((user)=>{
// return user.id > 9
// })
// console.log(filterData)

// let myNumbers = [7,8,9,10,7,4]
// let val = myNumbers.map((num)=>{
//   return num * 5
// })
// .map((num)=>{
//   return num + 5
// })
// .filter((num)=>{
//   return num >= 40
// })


// console.log(val)

// let myNumbers = [1,2,3,4,5,6]

// let redVal =myNumbers.reduce((accu, current)=>{
//   console.log(`accu value is ${accu} and current vaue is ${current}`)
  
//   return accu + current
// },0)
// console.log(redVal)

// const shoppingData = [
//   {
//     title: "jv",
//     price : 1299
//   },
//   {
//     title: "py",
//     price : 2999
//   },{
//     title: "js",
//     price : 4999
//   },{
//     title: "web and mob app",
//     price : 10999
//   },
// ]

// let totalToPay = shoppingData.reduce((accum,item)=>{

//   return accum + item.price
// },0)

// console.log(totalToPay)


// ++++++++++++++++++ class 36 ++++++++++++++++++++
// Events in Javascript

//type , timestamp, defaultPrevented
// target, toElement , srcElement, currentTarget
//clientX , clientY
// screenX , screenY , altKey, ctrlKey, shiftKey, keyCode
 // capturing and bubling
// bubling mean bootom to top
// capturing mean top to bootom

// const btn = document.querySelector('button')
// btn.addEventListener('click', (e)=>{
//   console.log(e);
  
// },false)
// console.log(btn);

// ++++++++++++ class 37 ++++++++++++
//Async Javascript fundamentals

// javaScript => 
// 1 - synchronous
// 2 - single threaded
// these two are default javascript behaviour
// javascript is singlr threaded programing language that can be non-blocking
// because they have only one call stack

// blocking code vs non blocking code

/*blocking code :
block the prgram
read file sync*/

/* non blocking code :
dot not block excution
read file async */


// =============== web apis =================
// these all are not the part of javascript but these are part of browser
// setTimeout
// dom apis
// fetch
// localStorage
// consoel
// location



// +++++++++++++++++ class 38 ++++++++++++++
// 2 projects with Async JS

// project 1
// let startPrint;
// document.querySelector('#start').addEventListener('click', function(){
//   startPrint  = setInterval(function(){
//  console.log('hello world');

//   }, 1000)
// })

// document.querySelector('#stop').addEventListener('click', function(){
//   clearInterval(startPrint)
// })





// ============== project 3 ===============

// let insert = document.querySelector('#insert')

// window.addEventListener('keydown', function(e){
//   insert.innerHTML = `
//   <div  style="text-align: center;">
//   <table border="2px">
//     <tr>
//       <th>Key</th>
//       <th>KeyCode</th>
//       <th>Code</th>
//     </tr>
//     <tr>
//       <td>${e.key === ' '? 'space': e.key}</td>
//       <td>${e.keyCode}</td>
//       <td>${e.code}</td>
//     </tr>
    
//   </table>
//   </div>
//   ` 
// })


// +++++++++++++++++++ class 39 +++++++++++++++++
// API request and V8 engine


// +++++++++++++++++++ class 40 +++++++++++++++++
// Promise in javascript

// a promise is an object

 // Q or Blue Bird library
//  Promises ane se pehle async kam krne keliye ye do library use kiye jate the 

// Promise create krna or Promise ko use krna
 
// let promiseOne = new Promise((resolve,reject)=>{

//   if(resolve){
//     console.log('welcome');
    
//   } 
//   if(reject){
//     console.log('welcome kjfkdf');
    
//   }

// })
// console.log(promiseOne);


// let promiseTwo = new Promise((resolve,reject)=>{
//   let error = true
//   if(!error){
//     let username = "rafi"
//     resolve(username)
//   } else{
//     error = true
//     reject("errror")
//   }
// })

// .then((data)=>{
//   console.log(data);  
// })
// .catch((error)=>{
//   console.log(error);
  
// })


// data fetch with Promise

// const fetchData =  async ()=>{
//   try {
//   let data = await fetch('https://jsonplaceholder.typicode.com/users')
//   .then((res)=> res.json())
  
//   console.log(data); 
//   } catch (error) {
//     console.log(error, "sdsdh");
    
//   }
    
// }

// fetchData()

// +++++++++++++ class 41 ++++++++++++
// Now you know fetch in javascript


// ============= fetch ==========
// The Fetch API provides an interface for fetching resources (including across the network).
//  It is a more powerful and flexible replacement for XMLHttpRequest.

// 1 - task queue
// 2 - queueMicrotask- ye sirf fetch keliye bnta hai./ fetch se jo bhi kam hota hain wo 
// micro task queue ke andr ajata hain

// === AJAX ===
// async JAVASCRIPT AXML => UMBRELLA TERM - YE PEHLE USE HOTA THA JP HUM REQUEST
// XML KE ZARIYE SE KRTE THE


// FTCH KO HUM API SE DATA GET KRNE YA SEND KRNE KELIYE USE KRTE 
// HAI YE HUME RETURN MAI EK PROMISE RETURN KRTA HAI JISME RESOLVE 
// OR REJECT DONO HOTE HAI

// Description
// The fetch() method starts the process of fetching a resource from a server.
// The fetch() method returns a Promise that resolves to a Response object.


// +++++++++++++ class 42 +++++++++++
// Object Oriented in Javascript

// ### JAVASCRIPT AND CLASSES
// # OOP

// ISKA MTLB HAI K APKA CODE LIKNE KATRUCTURE KAISA HOTA HAI

// constructure function
// ye hme hr br ek naya instanse deta hai

// function User(username, userId, userLogin){

//   this.username = username;
//   this.userId = userId;
//   this.userLogin = userLogin

// return this
// }

// let userOne = new User("rafi", 1001, true)
// let userTwo =  User("same", 1002, false)

// console.log(userOne);
// console.log(userTwo);

// ## jaise hum (new) ka keyword use krte hai to hamare pass ek empty object 
// create hota hai jisko instance kaha jata hai
// let aa = new Promise()
// let ab = new Date()
// ## ye jo new ka keyword hai ye constructur function hai jiske madad se hum objects banate hai

