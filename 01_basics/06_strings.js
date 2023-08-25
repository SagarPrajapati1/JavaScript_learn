const name = "sagar"

const repoCount = 10

// console.log(name + repoCount + " value"); // -> sagar10 value
// console.log('Hello my name is ${name} and my repo is ${repoCount}');

const gameName = new String('sagar-sp') // string is object not an array it is stored in key:value pair

// console.log(gameName[0]);
// console.log(gameName.__proto__); // -> {}: object

// console.log(gameName.toUpperCase()); // don't change the original string that is in lowerCase only

// console.log(gameName.charAt(2)); 
// console.log(gameName.indexOf('g'));

const newString = gameName.substring(0,4); // can also use negative index
console.log(newString);

const anotherString = gameName.slice(-10, 4);
const anotherString2 = gameName.slice(1, 4);

// console.log(anotherString);
// console.log(anotherString2);

const myName = "       sagar     "
// console.log(myName);
// console.log(myName.trim()); // work ony on white spaces and line termination

const url = "https://sagar.com//sagar%20google"

url.replace('%20', '-')

// console.log(url);


// console.log(url.includes('apple')); // boolean output true/false

console.log(gameName.split('-'));