//objects
let obj = {
    name : "Isha",
    "full name": "Isha Saini", //apply "" when there is space between the keys
    age : "55",
    height : "5ft 1 in",
    greet : function(){
        console.log("Good Morning");
    }
};
console.log(obj);
console.log(typeof(obj));
obj.greet();




//shallow copy
let originalObj = {
    name: "Ajay",
    address : {city: "Delhi"}
};  

//1st method
// let shallowCopy = Object.assign({},originalObj);
// console.log(shallowCopy);

//2nd by using spread operator
let shallowCopy = {...originalObj};
console.log(shallowCopy);

//Change in original also change in shallow copy
// originalObj.address.city = "Mumbai";
// console.log(shallowCopy); 



//Deep copy
let deepcopy = JSON.parse(JSON.stringify(originalObj));
originalObj.address.city = "Mumbai";
console.log(deepcopy.address.city); 
console.log(shallowCopy.address.city);



//----------------ARRAYS---------------


//Using Array literals
let arr1 = [1,2,3,4];
console.log(arr1);

let arr2 = [1, "Isha" , 24.1, true];
console.log(arr2);
console.log(typeof(arr2));
console.log( "Length : " ,arr2.length);




//Using Array Constructor
let brr = new Array('isha',1 ,true);
console.log(brr);
console.log(typeof(brr));
console.log(brr[0]);


//Traversal
for(let i=0;i<brr.length;i++){
    console.log(brr[i]);
}

//Push -- Adds element in last
brr.push('Saini');
brr.push(10);
brr.push(20);
brr.push(30);
console.log(brr);


//Pop -- Removes the last element
brr.pop();
console.log(brr);


//Shift -- Removes the 1st elemenmt 
brr.shift();
console.log(brr);


//unshift -- Adds element in the leftmost side
brr.unshift('Isha');
console.log(brr);


//Slice -- Extracts a portion of the array
console.log(brr.slice(0,4));

//splice --To change array content i.e, insert, remove,replace
//Insertion by removal
brr.splice(1,2,'Togger');
console.log(brr);

//Insertion without removal
brr.splice(1,0,'Togger');
console.log(brr);



//Map
let array = [10,20,30,40];

let ansArray = array.map((number) =>{
    return number*number;
})
console.log(ansArray);

let nextArray = array.map((number) =>{
    return number+1;
})
console.log(nextArray);

array.map((number,index) =>{
    console.log(number);
    console.log(index);
    
    
})


//filter --To filter the array

let newArr = [10,100,20,21,30,31];
let evenArr = newArr.filter((number) =>{
    // if(number%2==0){
    //     return true;
    // }else{
    //     return false;
    // }

    return number%2==0;
});
console.log(evenArr);


let arrays =[1,2,'love', 'kunal',null];

let answers1= arrays.filter((value) =>{
    if(typeof(value) === 'string'){
        return true;
    }else{
        return false;
    }
});
console.log(answers1);

let answers2= arrays.filter((value) =>{
    if(typeof(value) === 'number'){
        return true;
    }else{
        return false;
    }
});
console.log(answers2);

//reduce --used to give a single output value
let redArr =[10,20,30,40];

let reduceAns = redArr.reduce((acc, curr) =>{
    return acc + curr;
},0);
console.log(reduceAns);



//sort

//For Numbers
let sortArray =[9,11,2,40,2];
sortArray.sort((a,b) => a-b);
console.log(sortArray);
sortArray.sort((a,b) => b-a);
console.log(sortArray);


//For Strings
let sortStrings = ["Apple", "Mango", "Banana", "Litchi"];
console.log(sortStrings.sort());
console.log(sortStrings.sort().reverse());


//For Objects
let students = [
    {name : "Isha" , age:20},
    {name : "Jeshika", age :18},
    {name : "Anushika", age: 19}
];
students.sort((a,b) => a.age -b.age);
console.log(students);
students.sort((a, b) => b.age - a.age);
console.log(students);


//indexof
console.log(sortArray.indexOf(11));


//find --used to find the first element of array that satisfies the condition
let findArr = [10,20,30,40,50];
let result = findArr.find((num) => num>25);
console.log(result);


let findObj = students.find((s) => s.name =="Isha");
console.log(findObj);
 

//Arrays with Functions
let lastArr = [10,20,30,40,50];

function getsum(lastArr){
    // let length = lastArr.length;
    let sum = 0;
    // for(let i = 0;i<length;i++){
    //     sum+=lastArr[i];
    // }
    lastArr.forEach((value) => {
        sum+=value;
    })        
    return sum;
}
let totalSum = getsum(lastArr);
console.log(totalSum);
