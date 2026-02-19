const score = 400 //automatically defined as a number type
console.log(score);

//we can also explicitly cast the data type 
const balance = new Number(100.)
const bal = new Number(999)
console.log(bal);
console.log(balance);
console.log(balance.toString());
console.log(balance.toString().length);
console.log(balance.toFixed(2));//2 precision value

const newNum = 2113.1224
console.log(newNum.toPrecision(6));//returns string

const hundreds = 100000000
console.log(hundreds.toLocaleString());//______________('en-IN')_____________



//*******************************MAths*****************************/

console.log(Math);//math is a object in js
console.log(Math.abs(-9));
console.log(Math.round(40.3));
console.log(Math.ceil(40.3));
console.log(Math.floor(40.3));
console.log(Math.sqrt(9));
console.log(Math.pow(9,1));
console.log(Math.min(2,4,5,7));
console.log(Math.max(2,4,5,7));
console.log(Math.random());//default value always between 0 and 1
console.log((Math.floor(Math.random()*10) + 1));//values from 1 to 10

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1) + min ));