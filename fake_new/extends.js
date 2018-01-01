Object.prototype.fakeNew = fakeNew;
Object.prototype.fakeExtends = fakeExtends;

function fakeNew(constructFun) {
    var obj = {};
    constructFun.call(obj);
    obj.__proto__ = constructFun.prototype;
    return obj;
}

// function fakeExtends(constructFun, parentConstructFun) {
//     constructFun.prototype = new parentConstructFun();
//     constructFun.prototype.constructor = constructFun;
// }

function fakeExtends(parentConstructFun) {
    this.prototype = new parentConstructFun();
    this.prototype.constructor = this;
}

// function fakeExtends(parentConstructFun) {
//     var obj = {};
//     obj.__proto__ = parentConstructFun.prototype;
//     obj.constructor = this;
//     obj.constructor();
//     return obj;
// }

// Human.fakeExtends(Animal);
// var human = Object.fakeExtends(Human, Animal);

// console.log('human');
// console.log(human);

// var taiwanese = new Taiwanese();

// console.log('taiwanese');
// console.log(taiwanese);

// Human.prototype = new Animal();
// Human.prototype.constructor = Human;
// Human.prototype = Object.create(Animal.prototype);
// Human.prototype.constructor = Human;
// Taiwanese.prototype = new Human();
// Taiwanese.prototype.constructor  = Taiwanese;

// Object.fakeExtends(Taiwanese, Human);
Human.fakeExtends(Animal);
Taiwanese.fakeExtends(Human);

Human.prototype.hum = 'hum';

Animal.prototype.ani = 'ani';

Taiwanese.prototype.tai = 'tai';

// var ty = new Taiwanese();
var ty = Object.fakeNew(Taiwanese);

console.log(ty);

function Animal() {
}

function Human() {
}

function Taiwanese() {
    this.c = 't';
}