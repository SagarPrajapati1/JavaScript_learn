// Stack => Primitive, Heap => Non-Primitive

let myYoutube = "Code with sagar" // stack memory pass the value not reference -> copy of the value is given to the anotherYoutube
// if we change in the anotherYoutube then myYoutube will not be affected

let anotherYoutube = myYoutube

anotherYoutube = "chaiAurCode"

console.log(myYoutube);
console.log(anotherYoutube);

let userOne = {
    email:  "sagar@google.com",
    upi: "sagar@ybl",
}
let userTwo = userOne // pass the reference the userTwo of userOne if we change in the userTwo data then it will affect to the userOne data because both variables are pointing to the same memory i.e => heap memory

userTwo.email = "codewithSagar@google.com"

// 
console.log(userOne.email);
console.log(userTwo.email);

// NOTE-> 1. All the 'Primitives' take the memory inside the stack and always pass the value not the reference to the another variable 
// NOTE -> 2. All the 'Non-Primitives' take the memory inside the heap and always pass the reference to the another variable 