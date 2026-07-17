let firstPromise = new Promise((resolve, reject) => {
    console.log("Isha");
    // resolve(1001);//console shows pending without it
    // reject(new Error("Internal Server Error"));
    
});    



//asynchronous code
function sayHii(){
    console.log("Hii Gyzz");
    
}
setTimeout(sayHii,10000);


//Promise using Asynchronous code

let secondPromise = new Promise((resolve, reject) =>{
    setTimeout(function sayMyName(){
        console.log("My name is Isha");
        
    }, 10000);
});



//Use then() to perform a task after the fulfillment of promise or use a catch() in case of rejection

let promise1 = new Promise((resolve, reject)=>{
    let success = true;
    if(success){
        resolve("Promise Fufilled");
    }
    else{
        reject("Promise rejected");
    }
});
// promise1.then((message)=>{
//     console.log("Then's message is "+ message);
    
// }).catch((error) =>{
//     console.log("Error is" + error);
    
// })


//Multiple then can be applied 

//Promise Chaining
promise1.then((message) =>{
    console.log("First message is "+ message);
    return "Promise fulfillled second message";
}).then((message) =>{
    console.log("Second message is "+ message);
    return "Promise fulfillled third message";
}).then((message) =>{
    console.log("Third message is "+ message);
}).finally((message)=>{
    console.log("Finally block executed");
});


//Use promise.all() to execute multiple promises in parallel and wait for all of them to complete
let promise2 = new Promise((resolve, reject)=>{
    setTimeout(resolve,1000,"First");
})

let promise3 = new Promise((resolve, reject)=>{
    setTimeout(resolve,2000,"Second");
})

let promise4 = new Promise((resolve, reject)=>{
    setTimeout(resolve,4000,"Third");
})

Promise.all([promise2, promise3, promise4]).then((values)=>{
    console.log("All promises are fulfilled");
    console.log(values);
})
.catch((error)=>{
    console.log("Error is "+ error);
})