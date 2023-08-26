const tinderUser = new Object() // singleton object
const tinderUserOne = {} // non-singleton object


tinderUserOne.id = "123abc"
tinderUserOne.name = "Sammy"
tinderUserOne.isLoggedIn = false

// console.log(tinderUserOne);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Sagar",
            lastname: "Prajapati"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {5: "a", 6: "b"}

//const obj3 = {obj1, obj2}

// const obj4 = Object.assign({}, obj1, obj2, obj3)
const obj4 = {...obj1, ...obj2, ...obj3}
// console.log(obj4);

const users = [
    {
        id:1,
        email: "sagar@google.com"
    },
    {
        id:2,
        email: "sagar@google.com"
    },
    {
        id:3,
        email: "sagar@google.com"
    },
    {
        id:4,
        email: "sagar@google.com"
    },
]

users[1]. email
// console.log(tinderUserOne);

// console.log(Object.keys(tinderUserOne));
// console.log(Object.values(tinderUserOne));
// console.log(Object.entries(tinderUserOne));
// console.log(tinderUserOne.hasOwnProperty('isLoggedIn'));
// console.log(tinderUserOne.hasOwnProperty('isLogged'));


const course = {
    coursename: "Js in Hindi",
    price: "999",
    courseInstructor: "Hitesh"
}

// course.courseInstructor
const {courseInstructor: instructor} = course // de structuring
console.log(instructor);

// const navbar = ({company}) => { // de structuring

// }
// navbar(company = "hitesh")

// {
//     "name": "hitesh",
//     "coursename": "js in Hindi",
//     "price": "free"
// } 

[
    {},
    {},
    {},
]