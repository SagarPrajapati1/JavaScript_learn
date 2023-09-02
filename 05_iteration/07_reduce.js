const myNums = [1, 2, 3, 4]

// const myTotal = myNums.reduce( function (acc, currVal) {

//     console.log(`acc: ${acc} and currval: ${currVal}`);
//     return acc + currVal
// }, 3)

// const myTotal = myNums.reduce( (acc, curr) => acc + curr, 0)
// console.log(myTotal);

const shoppingCart = [
    {
        itemname: "java course",
        price: 2999
    },
    {
        itemname: "python course",
        price: 1500
    },
    {
        itemname: "mobile course",
        price: 4999
    },
    {
        itemname: "data science course",
        price: 12999
    },
    {
        itemname: "js course",
        price: 999
    },
]


const priceToPay = shoppingCart.reduce( (acc, item) => acc + item.price, 0)

console.log(priceToPay);