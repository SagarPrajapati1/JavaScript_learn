// global scope
const value1 = 10
let value2 = 20
var value3 = 30

if(true) {
    // block scope
    let value2 = 40
    var value3 = 49

}

// console.log(value1);
// console.log(value2);
// console.log(value3);

function one() {
    const username = "sagar"
    
    function two() {
        const website = "youtube"
        console.log(username);
    }

    // console.log(website); // error

    two()
}

// one()

if(true){
    const username = "hitesh"
    if(username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }

    // console.log(website); // error
}

// console.log(username); // error

// ********** interesting ************

console.log(addone(5));
function addone(num) {
    return num + 1
}




const addTwo = function(num) {
    return num + 2
}
addTwo(5)
