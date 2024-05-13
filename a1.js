// alert("danger side");
// let firstName = prompt("Enter your name:- ");
// console.log(firstName);

//String methood 
// let name = "             shvangi ";
// console.log(name);

// let str = "shivam";

// console.log(str.toUpperCase());

// let msg = "I love coading";
// console.log(msg.replace("love", "like"));

//Arrays

// let name = ["shivam", "kumar", "sanskriti"];

// // name.push(2);
// // name.pop();
// // name.pop();
// // name.unshift("Gyan");
// // name.shift();
// console.log(name);

// Concat Maethood
// let name = ["shivam", "sanskriti"];
// let fruits = ["Mango", "banana"];

// let store = name.concat(fruits);

// console.log(store);
// console.log(store.reverse());

// let s = name.reverse();
// console.log(s);

// console.log(name.slice(0));
// let sh = name.splice(1, "love");
// console.log(sh);

//Splice Methood :- Splice Methood are used for Add , delete element form the any insex of Arrays
// let store = name.splice(0, 2, "Gyan", "lalu");
// console.log(store);
// console.log(name);

// function print(age, name) {
//     console.log(`${name} age is ${age}`);
// }

// print(19, "shivam");

// High order funtion:- High order funtions is funtions that can take others funtions as argument 
//or return funtions  as results.

// function one(two, n) {
//     for (let i = 0; i < n; i++) {
//         two();
//     }
// }

// let info = function () {
//     console.log("good morning!");
// }

// one(info, 7);

// Q. Return functions

// let odd = function (n) {
//     console.log(!(n % 2 == 0));
// }

// let even = function (n) {
//     console.log((n % 2 == 0));
// }
// odd(9);
// even(4);

//return functions

// function oddOrEvenFactory(request, n) {
//     if (request == "odd") {
//         let odd = function (n) {
//             console.log(!(n % 2 == 0));
//         }
//         return odd;
//     }
//     else if (request == "even") {
//         let even = function (n) {
//             console.log(n % 2 == 0);
//         }
//         return even;
//     }
//     else {
//         console.log("wrong request");
//     }
// }

// request = "odd";
// let func = oddOrEvenFactory(request);
// func();

//setTimeOut functions in javascript

// console.log("Radhe Radhe");

// setTimeout(() => {
//     console.log("welcome to sanyam");
// }, 4000);

// console.log("shivam kumar");

//Q. setInterval functions

// let id = setInterval(() => {
//     console.log("Hello world");
// }, 2000)
// clearInterval(id);


//For Each Methood in java Script

// let arr = [3, 5, 6, 7, 3, 2, 1];

// arr.forEach(function (a) {
//     console.log(a);
// })


// let arr2 = [2, 4, 8, 9, 6, 8, 7];

// arr2.forEach(function (el) {
//     console.log(el);
// })

// const number = [1, 4, 2, 6, 7, 8, 9];

// number.forEach(function (value, index, array) {
//     console.log(`index is :- ${index} | value is :- ${value} | arrays is :- ${array}`);
// })

//Q. map() funtions in js :- map funtions are used to  iterate over the  the element of an array and create a
//new array based onthe array results of applying a provide callback function to each elements.

// let arr = [1, 2, 3, 4, 5];

// const square = arr.map((el) => {
//     return el * el;
// })

// console.log(square);

// filter Methoods
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const even = arr.filter((el) => {
//     return el % 2 === 0;
// });

// console.log(even);

//forEach methood

// let arr = [1, 2, 3, 4, 5, 6];

// arr.forEach((el) => {
//     console.log(el);
// })

// const square = arr.map((a) => {
//     return a * a;
// })
// console.log(square);

// let even = arr.filter((el) => (el % 2 === 0));
// console.log(even);

//reduce methoods :- reduce methood are used to reduce element form the array to  find single vale form logical 
//calculations and conditions.

let arr = [1, 4, 7, 8, 4, 9, 7, 4, 5];

// const sum = arr.reduce((res, el) => {
//     return res + el;
// })


let sum = arr.reduce((res, el) => res > el)

console.log(sum);