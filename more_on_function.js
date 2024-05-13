// Q.) Call Method are use to other object or class property , It is most useful for borow funtion one object to others object
//In this methood this key word play most curious role.

// const person1 = {
//     firstname: "shivam",
//     lastname: " kumar",
// }

// const person2 = {
//     fullname: function () {
//         console.log(`${this.firstname}  ${this.lastname}`);
//     }
// }

//person2.fullname.call(person1);

//Q.) Call Methood are used with the argument

// const person1 = {
//     firstname: "shivam",
//     lastname: "kumar",
// }
// const person2 = {
//     fullname: function (city, country) {
//         console.log(`${this.firstname} ${this.lastname} lives at ${city} ${country}`);
//     }
// }

// person2.fullname.call(person1, "Dumka", "India");

//Q.) Apply Method are similer to the call methood But in this method pass argument with the Square bracket..

// const person1 = {
//     firstname: "shivam",
//     lastname: "kumar",
// }
// const person2 = {
//     fullname: function (city, country) {
//         console.log(`${this.firstname} ${this.lastname} lives in ${city} ${country}`);
//     }
// }

// person2.fullname.apply(person1, ["Deoghar", "India"]);


// Q[3]:- Bind Method are also similler to the call method are used for brrow a funtion form one object to tother object
// But bind method not call the funtion intantly like the call Method But Inatead it stores the funtion in the variable to which 
// We can invoke the funtion, when we want
//[In this Method "this" key word play essential role for invoke the funtion]

// We say about the bind methood in one line :- "We pass the Argument through the variable" 

// const person1 = {
//     firstname: "shivam",
//     lastname: "kumar",
// }
// const person2 = {
//     fullname: function (city, country) {
//         console.log(`${this.firstname} ${this.lastname} lives in ${city} ${country}`);
//     }
// }

// const bound = person2.fullname.bind(person1);
// bound('Dumka', 'India');
// bound('Deoghar', 'India');


// part - 2 [Maths funtions]
//MATHS PI FUNTION
// console.log(Math.PI);
// let r = 2;
// let circleArea = r * r * Math.PI;
// console.log(`Area of circle:- ${circleArea}`);


// [STRING PART]

// const name = 'sanskriti sanyam'

// console.log(name.at(-1));
// console.log(name.charAt(3));
// console.log(name.endsWith('kriti'));
// console.log(name.includes('a'));
// console.log(name.includes('z'));
// console.log(name.indexOf('k'));
// console.log(name.padEnd(1, "!"));
// console.log(name.padStart(9, "%"));
// console.log(name.repeat(3));
// console.log(name.replaceAll('sanyam', 'shivam'))
// console.log(name.search('shivam'));


// apna collage [Maths funtions]
// floor :- floor Methood are used for round off value to main integer value...
// console.log(Math.floor(5));
// console.log(Math.floor(4.9999));

//celi:- celi methood are used for roundoff the value acuurate closed to next integer value..
// console.log(Math.ceil(8.2));

//Math random funtion :- Math.random() methood are used for generate the random value...
// console.log(Math.random());
// console.log(Math.random());
// console.log(Math.random());
// console.log(Math.random()*6);

//generate Random integrs
// let i = 0;
// while (i < 7) {
//     let num = Math.random()

//     let num1 = (num * 10) + 1;

//     let num3 = Math.floor(num1)

//     console.log(num3);
//     i++;
// }

// let box = " hello";
// box = " change ";

// console.log(box.includes('g'));

// let date = new Date();
// console.log(date.getDate());
// console.log(date.getTime());

// we learn the set Methood  in javascript

// const setDemo = new Set();
// setDemo.add(1);
// setDemo.add(6);
// // setDemo.clear();
// // setDemo.delete(1);
// console.log(setDemo);
// console.log(setDemo.size);


// Create set form an arrays

// let arr = ["apple", "mango", "grapes", "banana"];
// let setDemo = new Set(arr);

// console.log(setDemo)

//create array from set

// const setData = new Set();
// setData.add(1);
// setData.add(2);
// setData.add(3);

// console.log(setData); // output - Set(3) { 1, 2, 3 }
// const arrSet = Array.from(setData);
// console.log(arrSet); // output [ 1, 2, 3 

//Map methood in javaScript

const days = new Map();
days.set("mon", "Monday");
days.set("tue", "Tuesday");
days.set("wed", "Wednesday");
console.log(days.keys());
console.log(days.values());

// console.log(days.size);

//forEach funtions
days.forEach(function (value, key) {
    console.log(`key:- ${key}  value:-${value}`)
})