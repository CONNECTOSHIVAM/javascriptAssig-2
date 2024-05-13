const person1 = {
    firstname: "shivam",
    lastname: "kumar",
}
const person2 = {
    fullname: function (city, country) {
        console.log(`${this.firstname} ${this.lastname} lives in ${city} , ${country}`)
    }
}

person2.fullname.call(person1, " dumka ", "india")