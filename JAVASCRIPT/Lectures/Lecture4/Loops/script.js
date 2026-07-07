// for loop
for(let i=1;i<=10;i++){
    console.log(i);
    
}

for(let i = 10;i<=10 && i>=1;i--){
    console.log(i);
    
}

for(let i = 1;i<10;i++){
    if(i==5){
        break;
    }
    else{
        console.log(i);
    }
}
for(let i = 1;i<10;i++){
    if(i==5){
        continue;
    }
    else{
        console.log(i);
    }
    
}

let count = 0;
for (    ;     ;    ) {
    console.log(count);
    count++;               // This increases the count each time
    if (count == 2) {
        break;               // This stops the loop when count reaches 5
    }
}

//while loop
let n = 1;
while(n<=5){
    console.log("Isha");
    n++;
    
}


let i = 1;
while(i<5){
    if(i==3){
        break;
    }
    else{
        console.log(i);
        i++;  
    }
}

let number = 1;
while(number<5){
    if(number==3){
        continue;
    }
    else{
        console.log(number);
        number++;  
    }
}


// do while loop

let num = 1;
do{
    console.log("Hello");
    num++;
}while(num<=5);

