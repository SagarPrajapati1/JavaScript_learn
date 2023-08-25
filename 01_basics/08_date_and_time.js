// let myDate = new Date()
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());


// let myDate = new Date(2023,0,3)
// console.log(myDate.toDateString());

// let myCreatedDate = new Date(2023, 0, 25, 5, 3)
// console.log(myCreatedDate.toLocaleString());

let myCreatedDate = new Date("01-14-2022")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
console.log(Date.now()/1000); // => give decimal value 
console.log(Math.floor(Date.now()/1000)); // => Not give decimal value 

let newDate = new Date()
console.log(newDate.getDay());
console.log(newDate.getMonth());

newDate.toLocaleString('default', {
    weekday: "long",
})

