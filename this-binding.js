// default binding (function invocation pattern)

function foo() {
	console.log(this.a);
}

var a = 1;


foo(); // 1

// implicit binding (method invocation pattern)

function foo() {
	console.log(this.a);
}

var obj = {
	a: 2,
	foo: foo
};

obj.foo() // 2

// explicit binding
function foo(x, y) {
	console.log(this.a + x + y);
}

var obj = {
	a: 3
};

foo.apply(obj, [4, 5]); // 12
foo.call(obj, 4, 5); // 12

var bar = foo.bind(obj);
bar(4, 5); // 12


// new binding (constructor invocation pattern)
function Person(name) {
	this.name = name;
}

var joe = new Person("joe");

Person.prototype.greet = function() {
	console.log("hello from " + this.name);
};

joe.name // joe
joe.greet(); // hello from joe
joe.hasOwnProperty("name"); // true
joe.hasOwnProperty("greet"); // false
Object.getPrototypeOf(joe) === Person.prototype // true
Person.prototype.isPrototypeOf(joe) // true





