// Q. create a arrow funtion and find the square

const square = (number) => number * number;
const square_number = square(8);
console.log(`square is:- ${square_number}`);

// Q. Form the given Array find value [min,max,median age,avarage age,...]

const arr = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

const sort = arr.sort();

const min = Math.min(...sort);
const max = Math.max(...sort);

console.log(`Smallest value in the given Array:- ${min}`);
console.log(`largest value in the given array:- ${max}`);

//....#median age

// arr.sort((a, b) => (a - b));
// const middleIndex = arr.length / 2;
// const median = (arr[middleIndex - 1] + arr[middleIndex]) / 2;

// console.log(`median age is :- ${median}`);

//....#Avarage age + #find the range of the above arrays + #compare (min-Avarage) & (max-avarage)


// const box = arr.reduce((res, el) => res + el);
// const avarage = box / arr.length;
// // console.log(`Avarage age :- ${avarage}`);

// arr.sort();

// const min = Math.min(...arr);
// const max = Math.max(...arr);
// // const range = max - min;
// // console.log(range);0000000000000000000000001.
// const minDifference = min - avarage;
// const maxDifference = max - avarage;

// console.log(`minDifference is :- ${minDifference}`);
// console.log(`maxDifference is :- ${maxDifference}`);

//Q. Create a map to store contact informations (name, age , Email and location)and implement a function to
//retrive contact details by name.

// //create a Map funtions to store contact informations
// const contactMap = new Map();

// //store the informations to the Map
// contactMap.set("shivam", { age: 21, email: "contacttoshivam1@gamil.com", locations: "Dumaka" });
// contactMap.set("sanskriti", { age: 19, email: "connecttosanskriti1@gmail.com", location: "india" });
// contactMap.set("sanyam", { age: 0, email: "connecttosanyam1@gmail.com", location: "Deoghar" });

// //create a funtions to retrive the contact details by calling the name
// function getContactDetails(name) {
//     return contactMap.get(name);
// }


// const contactName = "shivam";
// const contactDetails = getContactDetails(contactName);

// if (contactDetails) {
//     console.log(`contact details for ${contactName}:-`, contactDetails);
// }
// else {
//     console.log(`the user ${contactName} not found `);
// }

//Q. Create a two object person1 and person2 with properties name and age create a function "introduce" that prints 
// "hello, I am ${name} and i am ${age} years old." use the call methood to make person2 introduce itself using the 
//introduce funtions.

//Create a two object for store his data
// const person1 = {
//     name: "shivam",
//     age: 18,
// };
// const person2 = {
//     name: "sanskriti",
//     age: 18,
// };
// //crete a funtion for geting result of object
// function introduce() {
//     console.log(`Radhe radhe, I am ${this.name} and i am ${this.age} years old.`);
// }
// // call the function by using call Methood 
// introduce.call(person2);
// introduce.call(person1);

//Q. You are developing a program to manage a list of unique items.Write a javascript program that uses set to store 
// a collectins unique numbers. use the map object to associate each number its square. Finally print  both the unique 
// number and their corresponding square .

//crate a set to store unique numbers
// let uniqueNumbers = new Set();

// //Add unique numbers to the set
// uniqueNumbers.add(8);
// uniqueNumbers.add(6);
// uniqueNumbers.add(5);
// uniqueNumbers.add(9);
// uniqueNumbers.add(2);
// //Define a map to associate each number with square square
// let numberSquareMap = new Map();
// //populate the  Map with Square of the funtions
// uniqueNumbers.forEach((Number) => {
//     numberSquareMap.set( Number,Number * Number);
// })
// // console.log(square);
// console.log(`Unique number and their square:- `);
// numberSquareMap.forEach((Number, square) => {
//     console.log(`${Number}:-${square}`);
// })

//Q. Create a simple funtions displayinfo that takes two parameters (name and roll) and logs a message.
// function displayInfo(name, roll) {
//     console.log(`I am ${name} and i am ${roll} years old.`);
// }
// //#..use call to invoke displayInfo with specific Arguments
// displayInfo.call(null, "shivam", 21);
// //#..use applyto invoke the the displatInfo with argument passed as an arrays.
// displayInfo.apply(null, ["sanskriti", 19]);
// //#..create anothers funtions named greet that logs a greeting with this context.
// function greet() {
//     console.log(`radhe radhe ${this.name}`)
// }
// //#..use bind to create new functions boundgreet with the specific context and log the greeting
// const user = { name: "sanyam" };
// const boundGreet = greet.bind(user);
// boundGreet();

//Q. create an object named calculator with methoods Add, sub and multiply
const calculator = {
    add: function (a, b) {
        return a + b;
    },
    sub: function (a, b) {
        return a - b;
    },
    multiply: function (a, b) {
        return a * b;
    },
    calculate: function (operator, a, b) {
        if (operator === "add") {
            return this.add(a, b);
        }
        else if (operator === "sub") {
            return this.sub(a, b);
        }
        else if (operator === "multiply") {
            return this.multiply(a, b);
        }
        else {
            return console.log(`you entered wrong operator`);
        }
    }
}

const additionResult = calculator.calculate.call(calculator, "add", 8, 9);
console.log(`Addition result:- ${additionResult}`);

const mulResult = calculator.calculate.apply(calculator, ["multiply", 9, 7]);
console.log(`Multiplication result:- ${mulResult}`);
//Q...#Create another object named discountcalculator with a discount persentage property and a Methood apply discount
const discountCalculator = {
    discountPersentage: 10,
    applyDisscount: function (amount) {
        return amount - (amount * this.discountPersentage) / 100;
    },
};
//Q..#use bind to create a new function calculate discount that  is bound to the discount calculator object can be reused.
const calculateDiscount = discountCalculator.applyDisscount.bind(discountCalculator);
const discountResult = calculateDiscount(1000);
console.log(`Discounted Amount:- ${discountResult}`);