//Variable Scope

//Global Scope
var age = 15;

console.log(age);

{
    console.log(age);
    
}

if(true){
    console.log(age);
    
}
for(let i=0;i<2;i++){
    console.log(age);
    
}

function sayHello(){
    console.log("Hii", age);
    
}
sayHello();


//Function Scope
function sayNamaste(){
    var fullname = "Earth";
    console.log("Namaste" , fullname);
    
}
// console.log(fullname); -- gives reference error

sayNamaste();



//block Scope

//var is not block scoped so it can be used anywhere in the function or globally
{
    var height = 180;
}
console.log(height);


//let and const are block scoped so it can be used only in the block
{
    let weight = 70;
}
//console.log(weight); //gives reference error        
{
    const weight = 70;
}
//console.log(weight); //gives reference error






//-----------Temporal Dead Zone----------

//From line 68 to 71 there is a temporal dead zone i.e, we cannot access the marks value
console.log(marks);
console.log("Isha");
console.log("Saini");
let marks = 100;
console.log(marks);
