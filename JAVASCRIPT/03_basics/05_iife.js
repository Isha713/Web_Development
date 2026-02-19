// Immediately Invoked Function Expressions (IIFE)
//the global scope pollution creates problem sometimes, so to remove the pollution of the global scope declarations or the variables we use the IIFE

//named IIFE
(function chai(){
    console.log(`DB CONNECTED`);
})();// must apply a semicolon here to prevention from error
//chai()


//first() => shows function defenition and second() =>shows function execution

//unnamed IIFE
(  (name) =>  {
    console.log(`DB CONNECTED TWO ${name}`);
    
})('ISHA')