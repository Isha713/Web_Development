const user = {
    username: "isha",
    price : 999,
    welcomeMessage : function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);//this refer to the current context hold by the variable
        
    }

}
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()
console.log(this);//gives {} in node whereas in the browser it gives undefined as in hitory there is only one method of executing the js using the browser i.e, the engine which executes the js is present only inside the browser then after so etime  it was removed browser and named it node,deno etc.. The global object of browser is the window object


function chai(){
    let usernames = "hitesh"
    console.log(this.usernames);//undefined
    
}

chai()

// const chaii = function (){
//     let usernamee = "isha"
//     console.log(this.usernamee);//undefined
    
// }
// chaii()


//arrow function
const chaii = () => {
    let usernamee = "isha"
    console.log(this.usernamee);//undefined
    console.log(this);
    
    
}
chaii()

//basic arrow function
// const addTwo = (num1,num2) => {
//     return num1 + num2
// }
// console.log(addTwo(3,4))


//implicit return
// const addTwo = (num1,num2) =>  num1 + num2

//*********if we use the {} then we must have to write the return otherwise if we use the () then return cannot be written****************

//const addTwo = (num1,num2) =>  num1 + num2

//const addTwo = (num1,num2) =>  {username : "isha"}//gives undefined as objects cannot be return in this way
const addTwo = (num1,num2) =>  ({username : "isha"})

console.log(addTwo(3,4))


