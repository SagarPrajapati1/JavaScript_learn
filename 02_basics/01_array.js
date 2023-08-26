// array 
// -> array is a object which contain coolection of multiple items. JS arrays are resizable. and can contain different type of the data items

// -> index is starting from 0(0-based indexing)
// -> array always do shallow copy -> means change are done in main array 
const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["shaktiman", "nagraj"]

const arr1 = new Array(1,2,3, "sagar")

// Array methods

// myArr.push(7) // push element in the end
// myArr.push(6) 
// myArr.pop() // pop element from the end

// myArr.unshift(9) // insert element in start of the array
// myArr.shift() // remove element from the start of the array

// console.log(myArr.includes(9)); // give the boolean answer

// console.log(myArr.indexOf(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join() // copy the array in newArr bind it and convert into the string primitives
// console.log(newArr);
// console.log(typeof newArr);
// console.log(myArr);

// slice, splice

console.log("A ", myArr);
const my1 = myArr.slice(1,3)

console.log(my1);
console.log("B ", myArr);


const my2 = myArr.splice(1, 3)
console.log(my2);
console.log("C ", myArr);
