const name = "Isha"
const repoCount = 50

console.log(name + repoCount + " Value");//outdated

//Concatenate using backticks known as string interpolation
console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`);

const gameName = new String('isha-saini')//creates a string object not recommended

console.log(gameName[0]);
console.log(gameName.__proto__); //gives an object {}
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('i'));
 
//substring
const newString = gameName.substring(0,4)//substring doesnot use negative values
console.log(newString);

//slicing
const anotherString = gameName.slice(-8,4)
console.log(anotherString);

//trim
const newString1 = "   isha   "
console.log(newString1);
console.log(newString1.trim());//removes starting and end space
console.log(newString1.trimStart());
console.log(newString1.trimEnd());

//replace
const url = "https://isha.com/isha%20saini"
console.log(url.replace('%20', '_'))
console.log(url.includes('isha'));
console.log(url.includes('$'));


//convert array to string on some basis
console.log(gameName.split('-'));