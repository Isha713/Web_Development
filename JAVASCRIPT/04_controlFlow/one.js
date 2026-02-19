
// <, >, <=, >=, ==, !=, ===, !==
//!==(strictly inequality operator) ==> It checks if two values are not equal in either value or data type, returning true if they are different and false if they are the same in both aspects.
// 5 !== 5	==> false  
// 5 !== "5"	true
const Temperature = 20
if(Temperature !== 20){
    console.log("Summer");
}else{
    console.log("Winter");
}


const bal = 1000
if (bal < 500) {
    console.log("less than 500");
    
}else if(bal < 750){
    console.log("less than 750");
    
}else{
    console.log("less than 1200");
    
}


const userLoggedIn = true
const debitCard = true
const LoggedInFromGoogle = false
const LoggedInFromEmail = true
if(userLoggedIn && debitCard){
    console.log("allowed to buy courses");
}else{
    console.log("not allowed");
}

if(LoggedInFromEmail || LoggedInFromGoogle){
    console.log("User logged in");
    
}