 // -------------Operators-----------------

// arithmetic operator
a = 10;
b = 5;
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
console.log(a**b);
console.log(++a);



//assignment operator
a+=10;
b-=20;
console.log(a);
console.log(b);



//comparison operator
console.log(10>=5);
console.log(10==10);
console.log(10<=7);
console.log(5!=10);


//loose equality
console.log(5==5);
console.log(5=='5');

//strict equality
console.log(5===5);
console.log(5==='5');



//ternary operator
let age = 20;
console.log((age>18)? "can vote" : "cannot vote");

let driverAge = 18;
console.log((driverAge>=18)? "can drive" : "cannot drive");


//logical operator
let ans1 = (true && true && true);
console.log(ans1);
let ans2 = (true && false && true);
console.log(ans2);
let ans3 = (false || false || false);
console.log(ans3);
let ans4 = (false || true || false);
console.log(ans4);
console.log(false || 'Isha');
console.log(false || 7 || 11 || 10);  



// bitwise operator
console.log(2 & 5);
console.log(2 |  5);
console.log(2 ^ 5);
console.log(~(0));   //answer is negative number as its MSB is 1
console.log(5<<1);
console.log(5<<2);
console.log(10>>1);


  
// ------------Conditionals---------------
if(age>18){
    console.log('can Vote');
}
else{
    console.log('cannot vote');
}


let marks=90;
if(marks<33){
    console.log('fail');
    
}else if(marks<80){
    console.log('Excellent');
    
}
else{
    console.log('Outstanding');
    
}

let key = 3
switch (key) {
    case 1:console.log('A');
    break;
    case 2:console.log('B');
    break;
    case 3:console.log('C');
    break;
    case 4:console.log('D');
    break;
    case 5:console.log('E');
    break;
    case 6:console.log('F');
    break;
    default:console.log('G');
    
}