class Human{
    //properties
    age; //public by default
    #wt = 80; //private
    ht = 150;

    constructor(newAge, newHeight, newWeight){
        this.age = newAge;
        this.ht = newHeight;
        this.#wt = newWeight;
    }
    //behaviour
    #walking(){
        console.log("I can walk");
        
    }
    talking(){
        console.log("I can talk", this.#wt);
    }

    get fetchWt(){
        return this.#wt;
    }
    set modifyWt(val){
        this.#wt = val;
    }
}



let obj = new Human(50,200,100);
console.log(obj.age);
console.log(obj.ht);
console.log(obj.fetchWt);
// console.log(obj.#wt); // gives error


obj.talking(); 


// obj.walking(); //gives error


//---------------Default Parameters-------------------

function sayName(myName ="Alice"){
    console.log("My name is ", myName);
    
}

sayName("Isha");
sayName(); //gives undefined as we forget to put the value so in this case we can use the default value which we set first


function greet(firstGreet, secondGreet="Good Morning"){
    console.log(firstGreet ,", " ,secondGreet );
    
}
greet("Hii");


//Dependency of Parameters 
function sayFullName(firstName = "Tinni", lastName = firstName.toUpperCase()){
    console.log("My name is ", firstName, " ", lastName);
} 

sayFullName("Isha");
sayFullName();


//Oject as Default Parameter
// function solve(value = {newage : 15, newWeight: 90 }){
//     console.log("Hello", value);
    
// }
// solve();

//Arrays as Default Parameters
function solve(value = [10,"Isha"]){
    console.log("Hello", value);
    
}
solve();

//Null and Undefined
function solveValue(val = "Rahul"){
    console.log("HII", val);
    
}
solveValue(null); //prints null
solveValue(undefined); //prints Rahul


//Function as Default Parameters

function getAge(){
    return 190;
}

function utility(name = "Krisha",age = getAge()){
    console.log(name," ", age);
    
}
utility("Isha",10);
utility();