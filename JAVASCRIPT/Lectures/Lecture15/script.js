//------------ADD Event Listner-----------------
//By default applied in the Bubbling phase


//Optimal method
function changeText(){
    let fpara = document.getElementById("fpara");
    fpara.textContent = "Hello World"

}

let fpara = document.getElementById("fpara");

fpara.addEventListener("click", changeText);



//Second Method --Donot follow this

// let fpara = document.getElementById("fpara");
// fpara.addEventListener("click", function (){

//     let fpara = document.getElementById("fpara");
//     fpara.textContent = "Hello World"

// });




//---------REMOVE Event Listener-------------

function removeEvent(){
    let spara = document.getElementById("spara");
    spara.textContent = "How are you";
}

let spara = document.getElementById("spara");

// spara.addEventListener("click", removeEvent);

spara.removeEventListener("click",removeEvent );// The function passed inside the removeEventListener must be exactly same reference as passed in add




//-------Phases of an Event 
// 1. Capturing Phase
// 2. At target Phase
// 3. Bubbling Phase





//----------Event Object---------

//when i check it in the console after click it gives me event type as click
function changeThirdPara(event){
    console.log(event);
    
    let tpara = document.getElementById("tpara");
    tpara.textContent = "Good"

}

let tpara = document.getElementById("tpara");

tpara.addEventListener("click", changeThirdPara);



//Changes default behaviour of the anchor tag
let anchorElement = document.getElementById("fanchor");
function handleClick(event){
    event.preventDefault();
    anchorElement.textContent = "Click Done"
}
anchorElement.addEventListener("click",handleClick );




//-------------PREVENTING TOO MANY LISTENER--------------


//Wrong way of adding event listener to all the paras using 4 listeners

// let paras = document.querySelectorAll("#wrapper p");
// for(let i=0;i<paras.length;i++){
//     let para = paras[i];
//     para.addEventListener("click", function(){
//         alert("You have clicked on para " + (i+1));
//     })
// }


//ideally create a single instance of listener and maps all paras to it
//use target property
  
// let paras = document.querySelectorAll("#wrapper p");
// function alertPara(event){
//         alert("You have clicked on " + event.target.textContent );
// }
// for(let i=0;i<paras.length;i++){
//     let para = paras[i];
//     para.addEventListener("click", alertPara);
// }    



//Apply listener directly on the div

// let mydiv = document.getElementById("wrapper");
// document.addEventListener("click", alertPara);


//To check if alert is generated for the para and the div

function alertPara(event){
if(event.target.nodeName === "SPAN"){
        alert("You have clicked on " + event.target.textContent );
    }
}
let mydiv = document.getElementById("wrapper");
document.addEventListener("click", alertPara);