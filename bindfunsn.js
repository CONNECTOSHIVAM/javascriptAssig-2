const person1 = {
    firstname: "shivam",
    lastname: "kumar",
}
const person2 = {
    fullname: function (city, country) {
        console.log(`${this.firstname} ${this.lastname} is lives in ${city} ${country}`)
    }
}

const bound = person2.fullname.bind(person1)
bound("dumka", "Bharat")
bound("deoghar", "India")