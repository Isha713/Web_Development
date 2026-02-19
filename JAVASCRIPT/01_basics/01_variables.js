const accountId = 122424
let accountEmail = "isha@gmail.com"
var accountPassword = "12354"
accountCity = "jaipur"   //not a good practice
let accountState;

// accountId = 2     const keyword cannot be changed
// Prefer not to use var due to issue in block scope and functional scope. Hence we only used let in it 
accountEmail = "hc@hc.com"
accountPassword = "45221"
accountCity = "Delhi"
console.log(accountId);
console.table([accountEmail,accountId,accountPassword,accountCity,accountState])