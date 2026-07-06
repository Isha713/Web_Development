// Global scoped
// var age = 25;
// if(true){
//     console.log(age);
// }



// function scoped
// function solve(){
//     var age = 25;
//     console.log(age);
// }
// console.log(age);
// solve();


//Reassignment is possible
// var x = 10;
// console.log(x);

// var x = 20;
// console.log(x);


//let is block scoped
// {
// let a = 10;
// // console.log(a);
// }
// console.log(a);


// redefiition is not possible 
// let a= 20;
// let a = 30;


// reassignment using let
// let a = 10;
// a = "isha";
// console.log(a);

// const a  =25;
// console.log(a);


// re assignment not possible
// a = 20;
// console.log(a);


// let marks = 20;
// marks = "Isha";
// marks = true;

// let marks;
// marks = null;
// marks = 12124444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444442222255555555;
// marks = null;
// console.log(marks);
// console.log(typeof(marks));


//uniqueness proof
const sym1 = Symbol("My identifier");
const sym2 = Symbol("My identifier");
// console.log("Symbol is" , sym1);
// console.log(typeof(sym1));
console.log(sym1 == sym2);

//used as object keys
const k1 = Symbol("Identifier for k1");
const k2 = Symbol("Identifier for k2");

myObj ={};
myObj[k1] = "Isha";
myObj[k2] =  "tisha"
console.log(myObj);
console.log(myObj[k1]);
console.log(myObj.k2); //cannot do this to get k2 value as it is same as myObj["k2"]





