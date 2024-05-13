/* Apply method is also similler to the call method with a single difference  to it, which in
 the terms of how Argument are passed to the funtion. */
// In the apply method argument are passed in the array manner
const person1 = {
    firstname: "shivam",
    lastname: "kumar",
}
const person2 = {
    fullname: function (city, country) {
        console.log(`${this.firstname} ${this.lastname} lives in ${city}, ${country}`)
    }
}

person2.fullname.apply(person1, ["deoghar", "India"])   //argument are passed in array maner.