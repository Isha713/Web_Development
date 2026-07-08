//function declaration and definition
function sayMyName(){
    console.log("Isha");
}
//function call
sayMyName();


function printCounting(){
    for(let i=1;i<=10;i++){
        console.log(i);
    }
}
printCounting();


function printNumber(num){ //num is parameter
    console.log("Number :", num);
    
}
printNumber(50); //50 is argumnet


function getAverage(num1, num2){
    let avg = (num1 +num2)/2;
    console.log( "Average :" , avg);
}
getAverage(50,50);



//return functions
function getSum(a,b,c){
    let sum = a+b+c;
    return sum;
}
let ans = getSum(2,3,4);
console.log("Sum is :", ans);


function getMyName(firstName, lastName){
    let fullName = firstName + " " + lastName;
    return fullName;
}
let fullName = getMyName("Isha", "Saini");
console.log( "FullName :" , fullName);



// function Expression
// function getMultiplication(number1, number2){
//     return number1*number2;
// }
// let answer = getMultiplication(10,20);
// console.log(answer);


const getMultiplication = function (number1, number2){
    return number1*number2;
}
let answer = getMultiplication(2,20);
console.log(answer);


const square = function(num){
    return num**2;
}
console.log(square(5));


// function getExp(x,y){
//     let ans = x**y;
//     return ans;
// }
// console.log(getExp(2,10));

let getExp = function(x,y){
    return x**y;
}
console.log(getExp(2,10));



//Arrow functions
let getExp = (x,y) =>{
    return x**y;
}
console.log(getExp(2,10));
