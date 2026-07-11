//Dynamic nature of object
let srcObj ={
    age :12,
    wt : 50,
    ht:150
}
console.log(srcObj);

srcObj.color = "Pink";

console.log(srcObj);


//Object Clonning
console.log("OBJECT CLONNING");

//1. Using Spread Operator
console.log("1. USING SPREAD OPERATIOR");

let dest = {...srcObj};
console.log("src object : ",srcObj);
console.log("dest : ", dest);

console.log("Checking :");

srcObj.age = 50;
console.log("src object : ",srcObj);
console.log("dest : ", dest);



//2. Using Assign Method
console.log("USING ASSIGN METHOD");

let destination = Object.assign({}, srcObj);
console.log("Src :",srcObj);
console.log("destination :", destination);

console.log("Checking :");

srcObj.age = 101;
console.log("Src :",srcObj);
console.log("destination :", destination);


//Clone more than 1 object in the dest2
console.log("CLONNING MORE THAN 1 OBJECTS IN A SINGLE DESTINATION");

let src2 ={
    name : "Isha",
    class : "Btech"
}
let dest2 = Object.assign({},srcObj,src2);
console.log("dest2 :",dest2);


// 3. Using Iteration Method
console.log("3. USING ITERATION METHOD  ");

let dest3 = {};
for(let key in srcObj){
    let newKey = key;
    let newValue = srcObj[key];
    //insert new key and value in destination and create a clone
    dest3[newKey] = newValue;
}
console.log("Src : ",srcObj);
console.log("dest3 :",dest3);

console.log("Checking :");
srcObj.age=15;
console.log("Src : ",srcObj);
console.log("dest3 :",dest3);


