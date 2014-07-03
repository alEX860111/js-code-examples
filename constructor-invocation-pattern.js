// If a  function is invoked with the new prefix, a new object is created
// with a hidden link to the value of the function's prototype member
 // and 'this' is bound to the new object.
var Person = function (name) {
	this.name = name;
};

var tom = new Person('Tom');
var lisa = new Person('Lisa');

console.dir(tom);
console.dir(lisa);

// A function has a 'prototype' property. When you call a JavaScript constructor to create an object, 
// all the properties of the constructor's prototype are then made available to the new object.
// By assigning a property to the prototype, we can thus give all instances of Person a public method:
Person.prototype.sayHello = function () {
	return 'Hello, my name is ' + this.name;
};

console.log(tom.sayHello());
console.log(lisa.sayHello());

// DO NOT CALL A CONSTRUCTOR FUNCTION WITHOUT THE NEW PREFIX!