//1st method of creation
let firstName = "Isha";
let lastName = 'Saini';
let fullName = "Isha Saini";

console.log(typeof(firstName));
console.log(typeof(lastName));
console.log(fullName);



//2nd method
let pet = `black dog`
let favtColor = `pink
blue
red`

console.log(pet);
console.log(favtColor);
console.log(`${pet} ${favtColor}`);



//3rd method
let myName = new String("Isha Saini");
console.log(myName);




// Operations on String


let op1 = "English ";
let op2 = "Hindi "
//concatention
let ans = op1 + op2;
// let ans = `${op1} ${op2}`;
console.log(ans);


//length
console.log(op1.length);


//Conversion to upper and lower case
console.log(ans.toUpperCase());
console.log(ans.toLowerCase());


//substring method
let str = "Hello World"
console.log(str.substring(5));
console.log(str.substring(2,5));


//Split method
let sentence1 = "Hello Gyzz, How are you all?";
let words = sentence1.split(" ");
console.log(words);

let sentence2 = "I love mango, \"banana\", apple";
let fruits = sentence2.split(",");
console.log(fruits);

console.log(fruits.join("-"));

