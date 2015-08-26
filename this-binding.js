function foo(b, c) {
	console.log(this.a + b + c);
}

var a = 10;

var obj = {
	a: 100,
	foo: foo
};

var anotherObj = {
	a: 1000
};

// default binding (function invocation pattern)
foo(2, 3); // 15

// implicit binding (method invocation pattern)
obj.foo(2, 3) // 105

// explicit binding
foo.apply(anotherObj, [2, 3]); // 1005
foo.call(anotherObj, 2, 3); // 1005

var bar = foo.bind(anotherObj);
bar(2, 3); // 1005

// new binding (constructor invocation pattern)






