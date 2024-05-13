function calc(operation, initialValue, numbers) {
    let total = initialValue;
    for (const number of numbers) {
        total = operation(total, number







        )
    }
    return total;
}
function sum(n1, n2) {
    return n1 + n2;
}
function multiply(n1, n2) {
    return n1 * n2;
}
console.log(calc(sum, 0, [6, 9, 8, 7, 65]));
console.log(calc(multiply, 1, [9, 6, 9, 7, 5]));

