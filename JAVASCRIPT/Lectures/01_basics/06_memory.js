// Stack(All Primitive Datatypes)
//Always a copy is received

let myName = "IshaSaini"

let anotherName = myName
anotherName = "Isha"

console.log(myName);//IshaSaini
console.log(anotherName);// Isha



// Heap(All Non Primitive Datatypes)
//Always a reference of original value is received

let user1 = {
    email: "user@gmail.com",
    id: "uer1",
}

let user2 = user1
user2.email = "isha@gmail.com"
console.log(user1.email);
console.log(user2.email);