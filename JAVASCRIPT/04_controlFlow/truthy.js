//truthy value : when we assumed that a value inside string is correct
const userEmail = "ishasaini@gmail.com"
if(userEmail){
    console.log("Got user email");
}else{
    console.log("don't have user email");
}

const newUserEmail = ""
if(newUserEmail) {
    console.log("Got user email");
}
else {
    console.log("don't have user email");
}

const user = []
if(user) {
    console.log("Got user email");
}
else {
    console.log("don't have user email");
}


//____________falsy values_____________
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//___________truthy values______________
// "0", 'false', " ", [], {}, function(){}
 


if (newUserEmail.length === 0) {
    console.log("Array is empty");
    
}


const emptyObj = {}
if(Object.keys(emptyObj).length===0){
    console.log("Object is empty");
}



// false == 0  =>true
// false == '' =>true
// 0 == ''     =>true


//__________Nullish Coalescing Operator____________ (??): null undefined
//when we get result from the database then we get 2 values it can be null,undefined, or no response so due to this our all code structure can be disturbed  
let val1;
val1 = 5 ?? 10
let val2 = null ?? 10
const val3 = undefined ?? 15
const val4 = null ?? 10 ?? 15 //assigns the first value

console.log(val1); //5
console.log(val2); //10
console.log(val3); //undefined
console.log(val4); //10



//_____________Ternary Operator_____________
//condition ? true : false

const icePrice = 100
icePrice <=80 ? console.log("less than 80") : console.log("more than 80")

