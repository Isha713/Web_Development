//const tinderUser = new Object()
const tinderUser = {}
tinderUser.id ="123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false
console.log(tinderUser);//gives empty object


//object inside object
const regularUser ={
    email: "some@gmail.com",
    fullname : {
        userfullname: {
            firstname: "Isha",
            lastname: "Saini",
        }
    }
}
console.log(regularUser.fullname);
console.log(regularUser.fullname.userfullname);
console.log(regularUser.fullname.userfullname.firstname);


//combined objects
const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}
//const obj3 = {obj1 , obj2}
//const obj3 = Object.assign({} ,obj1 , obj2)//assumes {} as target object and all other as source 

const obj3 = {...obj1, ...obj2}
console.log(obj3);

//when values comes from the database in form of array of objects
const users =[
    {
        id: 1,
        email: "h@gmail.com",
    },
    {
        id: 2,
        email: "hiii@gmail.com",
    },
    {
        id: 3,
        email: "hitesh@gmail.com",
    }
]
console.log(users[1].email);
console.log(tinderUser);

console.log(Object.keys(tinderUser));//gives array data type
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));//converts all key values as an array
console.log(tinderUser.hasOwnProperty('isLoggedIn'));
console.log(tinderUser.hasOwnProperty('isLogged'));



//*************concept of destructuring*************/

//object destructuring   using the {}
const course = {
    coursename: "JS in hinsi",
    price : "999",
    courseInstructor : "hitesh"
}
//course.courseInstructor
const {courseInstructor: Instructor, price} = course
//console.log(courseInstructor);
console.log(Instructor);
console.log(price);

//array desructuring   using []
const colors = ["red","green","pink"]
const[first,second,third] = colors;
console.log(first);
console.log(second);

//api in object form
// {
//     "name" : "isha",
//     "coursename" : "js in hindi",
//     "price" : "free",
// }

//api in array form
[
    {},
    {},
    {}
]