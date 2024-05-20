/* Q1. You are building an e-commerce website. Write a function that calculates the total price of a customer's
order. You're given an array of items, each with a price property. Use the forEach method to iterate through
the array and sum up the prices to get the total order amount.*/

//Given Array items list
// const orderList = [
//     { name: "laptop", price: 87000 },
//     { name: "mobile", price: 19000 },
//     { name: "mobile charger", price: 2700 },
//     { name: "laptop charger", price: 12000 }
// ];
// //funtion for calculate total price 
// function calculateTotalPrice(items) {
//     let total = 0;

//     items.forEach(item => {
//         total += item.price;
//     });
//     return total;
// }
// //call the funtions
// const totalPrice = calculateTotalPrice(orderList);
// console.log(`Total price of items list:- ${totalPrice}`);

/*Q2. In this challenge, your task is to create a function that generates a random number and prints it to the 
console every 2 seconds. The program should keep printing new random numbers indefinitely, with a 2-
second delay between each number */


// setInterval(() => {
//    //Generate arandom number between 0-6
//     const value = Math.floor(Math.random() * 7);
//     //print the value 
//     console.log(value);

// }, 2000)

/*Q3. You are given an array of expense objects representing monthly expenses. Each object has properties, 
amount and category. Use the map method to create a new array that includes the calculated tax for each 
expense. Assume a tax rate of 10% */

// //Data of the expense object
// let expense = [
//     { amount: 100, category: "Utilities" },
//     { amount: 200, category: "Groceries" },
//     { amount: 50, category: "Entertainment" }
// ]
// //Define Taxrate 
// const taxRate = 0.10;
// //Map are used to print new array  & calculate tax
// const expenseWithTax = expense.map((element) => {
//     let totalTax = 0;
//     totalTax += element.amount * taxRate;
//     return {
//         ...element,
//         totalTax: totalTax
//     };
// });
// //print the new array values
// console.log(expenseWithTax);

/* Q4. Using the same array of expense objects, use the filter method to create a new array that includes only 
the expenses related to the category "Groceries". */

// //Data of expance object
// let expense = [
//     { amount: 100, category: "Utilities" },
//     { amount: 200, category: "Groceries" },
//     { amount: 50, category: "Entertainment" }
// ]
// //filter functions are used to create new array with expance related to the category
// const geoceriesExpance = expense.filter((items) => {
//     return items.category === "Groceries";
// })
// //print the expance of given category
// console.log(geoceriesExpance);

/* Q5. Using the same array of expense objects, use the reduce method to calculate the total amount of all 
expenses */

// //Data of expance object
// let expense = [
//     { amount: 100, category: "Utilities" },
//     { amount: 200, category: "Groceries" },
//     { amount: 50, category: "Entertainment" }
// ]
// //used the reduce funtion for calculate total amount of expance
// const Amount = expense.reduce((tAmount, value) => {
//     tAmount += value.amount;
//     return tAmount;
// }, 0)//provide initail value to the accumulator{tAmount}
// //print the total expense
// console.log(`Total amount of all expense: ${Amount} `);



/* Q6. You have a list of expenses, each with an amount and a category. Now, create a function named 
categorizeExpense that, based on the expense amount, returns either "High Expense" if it's more than 100, or 
"Low Expense" otherwise. Afterward, use this function along with the map method to generate a new array 
called categorizedExpenses, where each element represents the category for the corresponding expense in 
the original list. Finally, print out the categorizedExpenses array */

/* // create a list of expense
let expense = [
      { amount: 100, category: "Utilities" },
      { amount: 200, category: "Groceries" },
      { amount: 50, category: "Entertainment" }
]
//Create a functions categoryizeExpense
function categoryizeExpense(expense) {
      return expense.amount > 100 ? "High expense" : "low expense";
}
// use the expense Methood to generate categoryizedExpense Array
const categorizedExpenses = expense.map(categoryizeExpense);
//call or invoke the array
console.log(categorizedExpenses); */

/* Q7. Consider an array of numbers named originalNumbers with the values [2, 5, 8, 10, 3]. Your task is to use 
the forEach method to iterate through each element in the array. During the iteration, double the value of 
each number. After completing the iteration, display the modified array */

//list of originalNumbers Arrays
/* const originalNumbers = [2, 5, 8, 10, 3];
//use forEach methood to iterate and modify each elements
originalNumbers.forEach((el, index, array) => {
      array[index] = el * 2
});
//print the modified Arrays
console.log(originalNumbers); */

/* Q8. Using the same array of numbers, use the forEach method to collect and store only the even numbers in a 
new array */

// create a Array list 
const originalNumbers1 = [2, 5, 8, 10, 3];
//create a new arrays for storing even values. 
const evenNumber = [];
//use the forEach functions for fetch the even Arrays.
originalNumbers1.forEach((el) => {
      if (el % 2 === 0) {
            evenNumber.push(el);
      }
});
//print the arrays values.
console.log(`even number list:- `, evenNumber); 