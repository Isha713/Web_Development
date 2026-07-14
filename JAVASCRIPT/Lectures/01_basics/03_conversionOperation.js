let score = 20
let age = "20abc"
let marks = null;
console.log(typeof score);
console.log(typeof(score));

console.log(typeof age);
console.log(typeof(age));

let valueInNumber = Number(age)
console.log(valueInNumber); //Not a Number

console.log(typeof marks);
let valueInNum = Number(marks)
console.log(valueInNum);

console.log(typeof valueInNumber);

//"33" => 33
//"33abc" => NaN
//true =>1; false => 0

let isLoggedIn =1
let booleanIsLOggedIn = Boolean(isLoggedIn)
console.log(booleanIsLOggedIn);

//1 =>true ; 0 => false
//"" => false
// hitesh => true

let a = 33
let stringa = String(a)
console.log(stringa);
console.log(typeof stringa);


//***************************OPERATIONS*******************************/

let value = 3
let negValue = -value
console.log(negValue);

//Basic Arithmetic operations
console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**3);
console.log((2/3).toFixed(2));
console.log(2%4);

//concatenation of string
let str1 = "Hello"
let str2 = " Isha"
let str3 = str1 +str2
console.log(str3);

//Complex Operations
console.log("1" + 2); //12
console.log(1 + "2"); //12
console.log(1 + 1 +"2"); //22
console.log("1" + 1 + 2); //112
console.log(1 + 2 + "3" + 1 + 1); //3311

//Donot do these operations
console.log(+true); //1
//console.log(true+); //error
console.log(+""); //0
let num1, num2, num3
num1 = num2 = num3 = 2 + 2

let gameCounter =100
gameCounter++
console.log(gameCounter);//101











