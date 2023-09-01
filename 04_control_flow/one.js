// control statements

// <, >, <=, >=, ==, !=, ===, !==

// const temprature = 41;
// if(temprature === 40) {
//     console.log("less than 50");
// }
// else {
//     console.log("greater than 50");
// }
// this bleow statement is not under the if condition so it will always executed 
// console.log("greater than 50");

// const score = 200

// if(score > 100) {
//     let power = "fly"
//     console.log(`User power: ${power}`);
    
// }
// // outside the if block power is not available if we use let or const, and if we use var then it is available coz var have global scope
// console.log(`User power: ${power}`);

const balance = 1000
// if(balance > 500) console.log("tested");
// if(balance > 500) console.log("tested"),
// console.log("tested2"); // => this code is no readable nd not a goot practice

/******* Nested if else *********/

// if(balance < 500) {
//     console.log("less than");
// }
// else if(balance < 750) {
//     console.log("less than 750");
// } else if(balance < 900) {
//     console.log("less than 900");
// }
// else {
//     console.log("less than 1200");
// }

const userLoggedIn = true
const debitCard = true
if(userLoggedIn && debitCard) {
    console.log("Allow to buy courde");
}

const loggedInFromGoogle = false
const loggedInFromEmail = true

if (loggedInFromEmail || loggedInFromGoogle) {
    console.log("executed");
}