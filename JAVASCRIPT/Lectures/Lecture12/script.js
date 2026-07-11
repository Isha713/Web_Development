//Compile time error

//Syntax error
// console.log(1;



//Runtime error

//Reference error
// console.log(x);


try{
    console.log("Try block starts here");
    console.log(x);
    console.log("Try block ends here");
    
    //a
    //b
    //c
}
catch(err){
    //define what to do with the error
    //retry logic
    //fallback mechanism
    //custom error
    //logging
    console.log("I am inside catch block");
    console.log("Errroris here :", err);
    
}
finally{
    console.log("I will run Everytime");
    
}



//Custom error using throw
// try{
//     console.log(x);
    
// }
// catch(err){
//     throw new Error("First declare then prints");
// }

let errorCode = 100;
if(errorCode ==100){
    throw new Error("Invalid JSON");
}