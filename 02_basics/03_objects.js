// singleton 
//Object.create
// object literals


const mySym = Symbol("key1")

const JsUser = {
    name: "Sagar",
    "full name": "Sagar Prajapati",
    // mySym : "mykey1" // not a symbol
    [mySym]: "mykey1",
    age: 18,
    location: "Aligarh",
    email: "sagar@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Mondays", "Saturday"]

}

// console.log(JsUser.age);

// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);
// // console.log(JsUser[full name]); // not valid

// JsUser.email = "sagar@chatgpt.com"
// Object.freeze(JsUser)
// JsUser.email = "sagar@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function() {
    console.log('Hello JS Learner');
}
// JsUser.greetingOne = function() {
//     console.log('Hello JS Learner, ${this.name}');
// }



console.log(JsUser.greeting()); // funtion reference
// console.log(JsUser.greetingOne()); // funtion reference