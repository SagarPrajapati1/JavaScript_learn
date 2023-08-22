// declaration of variables
const accountId = 11445;  // it can't be changed 
let accountEmail = "sagar@google.com"; 
var accountPassword = "12345";
accountCity = "Jaipur";
let accountState; // if variable is not initialized then it is 'undefined'
accountState = 5; // Now it is 'defined'

/*
    Prefer not to use var
    because of issue in block scope and functional scope
*/


// accountId = 2; // not allowed 
accountEmail = "sagar@sp.com";
accountPassword = "235";
accountCity = "Bengaluru";

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);