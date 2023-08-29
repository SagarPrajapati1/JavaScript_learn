function sayMyName() {
    console.log("S");
    console.log("A");
    console.log("G");
    console.log("A");
    console.log("R");
}

// sayMyName() 

// function addTwoNumbers(num1, num2) { // parameters(num1, num2)
//     console.log(num1+num2);
// }

// function addTwoNumbers(num1, num2) { // parameters(num1, num2)
//     return num1 + num2
    
// }

// addTwoNumbers(3, "4") // 34 // arguments(3, "4")
// addTwoNumbers(3, "a") // 3a
// addTwoNumbers(3, null) // 3

// const result = addTwoNumbers(3,5)

// // console.log("result :", result); // undefined

// function loginUserMessage(username = "sam") {
//     if(username === undefined) { // !username
//         console.log("Please enter a username");
//         return
//     }
//     return `${username}, just logged in`

// }

// console.log(loginUserMessage());
// function calculateCarPrice(num1) {
//     return num1;
// }
// console.log(calculateCarPrice(200));

// function calculateCarPrice(...num1) {
//     return num1;
// }
// function calculateCarPrice(val1, val2, ...num1) {
//     return num1;
// }

// console.log(calculateCarPrice(200, 400, 500, 600, 777));

const user = {
    username: "sagar",
    price: 199
}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username:"sam",
    price:200
})

const myNewArray = [200, 400, 500, 600, 777];
function returnSecondValue(getArray) {
    return getArray[1]
}

console.log(returnSecondValue([200, 300, 500]));