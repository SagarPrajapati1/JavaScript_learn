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

function addTwoNumbers(num1, num2) { // parameters(num1, num2)
    return num1 + num2
    
}

// addTwoNumbers(3, "4") // 34 // arguments(3, "4")
// addTwoNumbers(3, "a") // 3a
// addTwoNumbers(3, null) // 3

const result = addTwoNumbers(3,5)

// console.log("result :", result); // undefined

function loginUserMessage(username = "sam") {
    if(username === undefined) { // !username
        console.log("Please enter a username");
        return
    }
    return '${username}', 'just logged in'

}

console.log(loginUserMessage());