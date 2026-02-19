//objects in js can be declared as literals or constructors

//singleton =>using constructors
// Object.create


//object literals
//**********How to print symbol in object keys***************/
//by using the square brackets
const mySym = Symbol("key1")
const JsUser ={
    name: "Isha",
    "fullName": "ISha Saini",
    mySym: "mykey1",//cannot use the symbol data type
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    Email: "ishasaini@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Mon","Tue","Wed"],
}
console.log(JsUser.Email);
console.log(JsUser["Email"]);
console.log(JsUser.fullName);
console.log(JsUser["fullName"]);
console.log(typeof JsUser.mySym);
console.log(JsUser[mySym]);

JsUser.Email = "isha@gmail.com"
//Object.freeze(JsUser)
JsUser.Email = "ishsa@gmail.com"
console.log(JsUser);

JsUser.greetings = function(){
    console.log("Hello");
}
JsUser.greetings2 = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greetings);//[Function (anonymous)] means function is not executed only reference comes
console.log(JsUser.greetings());
console.log(JsUser.greetings2());

