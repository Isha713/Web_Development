//JS array operation creates shallow copies(copy whose properties share the same reference as the source object from which the copy was made)

//Different types of array declaration
const myArr = [0, 1, 2, 3, 4, 5, true, "isha"]

const arr = [0, 1, 2, 3, 4, 5]

const myHeroes = ["shaktiman", "naagraj"]

const myArr2 = new Array(1,2,3,4)

console.log(arr[0]);
console.log(arr[1]);


//Array methods
arr.push(6)
arr.push(888)
arr.pop() //removes the last value from array
console.log(arr);

arr.unshift(9) //add an element in the front it is time consuming
console.log(arr);
arr.shift()
console.log(arr);

console.log(arr.includes(9));
console.log(arr.indexOf(9));
console.log(arr.indexOf(3));


const newArr = arr.join()// it binds the array and converts it into string
console.log(arr);
console.log(newArr);

//*****************slice , splice***********************
console.log("Slice and Splice");

console.log("A" , arr);

const myn1 = arr.slice(1,3)
console.log(myn1);
console.log("B",arr);


const myn2 = arr.splice(1,3)
console.log("C",arr);
console.log(myn2);
//splice manipulates the original array but slice doesnot
