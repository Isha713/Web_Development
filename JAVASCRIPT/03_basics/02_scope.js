//var c = 300
//global scope value is available everywhere but the local scope value is available only inside its {}
//{} is scope
let a = 300
if(true){
    let a = 10
    const b = 20
    var c = 30 //or c=30
    console.log("Inner : ", a);
}

console.log(a);
//console.log(b);
//console.log(c);//gives 30

//child function can excess the parent variable but parent doesnot
function one(){
    const user = "isha"

    function two(){
        const website ="youtube"
        console.log(user);
        
    }
    //console.log(website);
    
    two()
}
one()

if (true) {
    const username = "isha"
    if (username === "isha") {
        const website = "youtube"
        console.log(username + website);
        
    }
    //console.log(website);
}
//console.log(username);


//*******************INTERESTING********************/
console.log(add1(5))
function add1(num){
    return num + 1
}


//Sometime known as expression
//gives output
const add2 = function(num){
    return num + 2
}
console.log(add2(10))

//gives error as here function is accessed before initialization
// add3(10)
// const add3 = function(num){
//     return num + 2
// }
