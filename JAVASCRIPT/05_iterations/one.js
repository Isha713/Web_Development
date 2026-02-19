// for

for (let index = 0; index < 10; index++) {
    const element = index;
    if(element == 5){
        console.log("5 is best number");
        
    }
    console.log(element);
    
}
// console.log(element); ==> not accessed here

//nested loops
for (let i = 0; i < 10; i++) {    
    console.log(`Outer loop value: ${i}`);
    
    for (let j = 0; j < 10; j++) {
        //console.log(`Inner loop value ${j} and inner loop ${i}`);   
        console.log(i + '*' + j + '=' + i*j);
        
    }
}
 let myArr = ["isha", "anshu", "lagan"]
 for (let i = 0; i < myArr.length; i++) {
    const element = myArr[i];
    console.log(element);
    
}


//___________break_____________
for (let i = 0; i < 10; i++) {
    if(i==3){
        console.log("Detected " + i);
        break;
    }
    console.log("value of i is " + i);
}


//__________continue_____________
for (let i = 0; i < 10; i++) {
    if(i==3){
        console.log("Detected " + i);
        continue;
    }
    console.log("value of i is " + i);
    
}