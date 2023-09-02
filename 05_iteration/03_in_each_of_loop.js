// for of loop

const arr = [1, 2, 3,4, 5]

// for(const iterator of arr) {
//     console.log(iterator);
// }
for(const num of arr) {
    // console.log(num);
}

const greeting = "hello world!"

for(const greet of greeting) {
    // console.log(greet);
}

const map = new Map() 
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ':-', value);
}

const myObject = {
    'game1' : 'NFS',
    'game2' : 'Spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value); // object is not iteratable in this condition
// }


const coding = ["js", "ruby", "java", "python", "cpp"]


// coding.forEach(function (item) {
//     console.log(item);
// } )

// coding.forEach((val) => {
//     console.log(val);
// }) 

// function printMe(item) {
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach( (item, index, arr) => {
//     console.log(item, index, arr);
// } )

const myCoding = [
    {
        language: "javascript",
        languageFileName: "js"
    },
    {
        language: "java",
        languageFileName: "java"
    },
    {
        language: "python",
        languageFileName: "py"
    }
]

myCoding.forEach( (item) => {
    console.log(item.language);
} )

