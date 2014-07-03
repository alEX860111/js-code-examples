// Create an anonymous function and assign it to the 'add' variable in an expression.
var add = function(a, b) {
	return a + b;
};
console.log(add(3, 1));

// Create a function named 'minus' by a function statement. Function statements are subject to hoisting.
function minus(a, b) {
	return a - b;
}
console.log(minus(3, 1));

