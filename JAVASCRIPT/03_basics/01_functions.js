function myName(){
    console.log("I");
    console.log("S");
    console.log("H");
    console.log("A");
}

myName()//myName =>reference; myName() => execution

function add(num1,num2){//parameters are passed
    console.log(num1+num2);
}
add()//NaN
const result = add(3,4)//arguments are passed
console.log("result: ",result);

add("isha","saini")
add("2",4)
add(3,null)


function sum(num1,num2){//parameters are passed
    let result = num1 + num2
    return result
}

const sumresult = sum(3,5)
console.log("Result : ", sumresult);


function loginUserMessage(username ="sam"){//for default write name here
    if(username === undefined){//(!username){
        console.log("Please enter username");
        return
    }
    return `${username} just logged in`
}
console.log(loginUserMessage("Isha"))
console.log(loginUserMessage(""))
console.log(loginUserMessage())



//... => rest operator or spread operator
function calculateCartPrice(...num1){
    return num1
}
console.log(calculateCartPrice(222,400,500));//gives only first item hence used rest operator which gives me the output as an array



//****************Important*****************/
function calculateCartPrice2(val1, val2, ...num1){
    return num1
}
console.log(calculateCartPrice2(222,400,500));//500 as 222 goes in val1 and 400 in val2


const user = {
    usernames: "isha",
    id : 200
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.usernames} and id is ${anyobject.id}`);
    
}
handleObject(user)
handleObject({
    usernames : "sam",
    id : 122
})

const newArray = [100,200,300,400,500,600]
function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(newArray));
console.log(returnSecondValue([10,20,30,40,50]));
