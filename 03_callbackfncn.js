function one(name, callback) {
    console.log(`${name} is a great human`);
    callback();
}
function two() {
    console.log(`control in the Second block`);
}

one("shivam", two);