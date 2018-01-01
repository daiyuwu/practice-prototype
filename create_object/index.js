var person = new Object();
person.firstname = "TY";
person.lastname = "W";
person.address = new Object();
person.address.country = "Taiwan";
person.address.city = "Taipei";
person.address.locate = "101";

console.log("person");
console.log(person);

var person_by_json = {
    firstname: "TY",
    lastname: "W",
    address: {
        country: "Taiwan",
        city: "taipei",
        locate: "101"
    }
}

console.log("person_by_json");
console.log(person_by_json);

function address_function() {
    this.country = "Taiwan";
    this.city = "Taipei";
    this.locate = "101";
}

function person_function() {
    this.firstname = "TY";
    this.lastname = "W";
    this.address = new address_function();
}

var person_by_function = new person_function();
console.log("person_by_funciton");
console.log(person_by_function);