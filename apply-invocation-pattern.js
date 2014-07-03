var add = function (a, b) {
	return a + b;
};

var array = [3, 4];
// The apply method takes two parameters, the first is the value that should be bound to this, the second is an array of parameters
var sum = add.apply(null, array);