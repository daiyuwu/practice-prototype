function person_function() {
    this.firstname = "TY";
    this.lastname = "W";
    this.address = Object.fakeNew(address_function);
}

function address_function() {
    this.country = "Taiwan";
    this.city = "Taipei";
    this.locate = "101";
}

Object.fakeNew = fakeNew;
Object.fakeNewPrototyoe = fakeNewPrototyoe;

var person_by_fake = Object.fakeNew(person_function);
console.log("person_by_fake");
console.log(person_by_fake);

var person_by_fake_prototype = Object.fakeNewPrototyoe(person_function);
console.log("person_by_fake_prototype");
console.log(person_by_fake_prototype);

function fakeNew(constructFun) {
    var obj = {};
    constructFun.call(obj);
    return obj;
}

function fakeNewPrototyoe(constructFun) {
    var obj = {};
    obj.constructor = constructFun;
    obj.constructor();
    return obj;
}
