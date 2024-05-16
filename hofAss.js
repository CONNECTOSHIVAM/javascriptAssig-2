/* Q. You are building an e-commerce website. Write a function that calculates the total price of a customer's
order. You're given an array of items, each with a price property. Use the forEach method to iterate through
the array and sum up the prices to get the total order amount.*/

//Given Array items list
const orderList = [
    { name: "laptop", price: 87000 },
    { name: "mobile", price: 19000 },
    { name: "mobile charger", price: 2700 },
    { name: "laptop charger", price: 12000 }
];
//funtion for calculate total price 
function calculateTotalPrice(items) {
    let total = 0;

    items.forEach(item => {
        total += item.price;
    });
    return total;
}
//call the funtions
const totalPrice = calculateTotalPrice(orderList);
console.log(`Total price of items list:- ${totalPrice}`);