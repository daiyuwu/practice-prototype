'use strict'
// https://medium.com/@peterchang_82818/javascripter-%E5%BF%85%E9%A0%88%E7%9F%A5%E9%81%93%E7%9A%84%E7%B9%BC%E6%89%BF%E5%9B%A0%E5%AD%90-prototype-prototype-proto-object-class-inheritace-nodejs-%E7%89%A9%E4%BB%B6-%E7%B9%BC%E6%89%BF-54102240a8b4
function Animal() {}
function Dog() {}
function Bichon() {}
function Foo() {}

Object.prototype.born = born();

Animal.born(Dog);

console.log(Dog.prototype);
console.log(Animal.prototype);

// var foo = new Foo();
// console.log(foo.__proto__);

// console.log(foo.__proto__ === Foo.prototype);
// console.log(foo.__proto__);
// console.log(Foo.prototype);
// console.log(Foo.prototype);



// Foo.prototype = new Bichon();

// var foo = new Foo();

// console.log(foo.__proto__);
// console.log(foo.__proto__.__proto__);

function born(constructor) {
    constructor.prototype = new this();
    constructor.prototype.constructor = constructor;
}