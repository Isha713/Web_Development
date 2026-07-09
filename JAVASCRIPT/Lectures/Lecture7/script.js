//Variable hoisting
console.log(age); // gives undefined as only var age shifts to upwards

var age = 25;
console.log(age);

//Using let and const keyword
// console.log(height1); // gives error
let height1 = 6.1;
console.log(height1);
 
// console.log(height2); // gives error
const height2 = 5.1;
console.log(height2);



//Function Hoisting

//Plain function Hoisting
sayMyName("Saini")
function sayMyName(finalName){
    console.log(finalName);
    
}
sayMyName("Isha");

//Hoisting will not works in function expression
// sayHello(); //gives reference error
let sayHello = function(){
    console.log("Hello");
    
}



//Class hoisting not possible
// const Obj1 = new human(); //gives reference error
class human {

}
const Obj1 = new human();



//-----------Function AS First Class Citizens----------

//Function Assigned to Variable
let greet =function(){
    console.log("Good Morning");
    
}
greet();


//Pass function
function greetMe(sayGoodAfternoon, fullName){
    console.log("Hello", fullName);
    sayGoodAfternoon();
    
}
function sayGoodAfternoon(){
    console.log("Good Afternoon");
    
}

greetMe(sayGoodAfternoon,"Isha");


//Function returns Function
function solve(number){
    return function(number){
        return number*number;
    }
}
let ans = solve(5);
let finalAns = ans(10);
console.log(finalAns);


//Store Function in DataStructures
const array = [
    function(a,b){
        return a+b;
    },
    function(a,b){
        return a-b;
    },
    function(a,b){
        return a*b;
    }
];
let first = array[0];
let answer = first(5,10);
console.log(answer);
// let first = array[1];
// let answer = first(5,10);
// console.log(answer);
// let first = array[2];
// let answer = first(5,10);
// console.log(answer);


//Function as a Property in Object
let obj = {
    age : "25",
    date : "26",
    great : ()=>{
        console.log("Great");
        
    }
}
console.log(obj.date);
obj.great();

