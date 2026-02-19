//Javascript is dynamically typed language

// #Primitive Data types
/*
All are call by value
String, Number, Boolean, Null, Undefined, symbol, Bigint
 */

const score = 100
const scorevalue = 12.45

const isLoggedIn = false

const temperature = null

let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id==anotherId);//false

const bigNum = 513416536343644n

//Reference Type(Non Primitive Data type)
/*
Arrays, Objects, Functions
 */

const heros =["shaktiman", "naagraj", "doga"]  

let myObj ={
    name: "isha",
    age: 20,
}

const myFunction = function(){
    console.log("Hello World");
    
}

console.log(typeof bigNum);
console.log(typeof temperature);
console.log(scorevalue);
console.log(typeof myFunction);//function object as return datatype


/*
Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object
 */
