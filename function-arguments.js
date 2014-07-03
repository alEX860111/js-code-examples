// The bonus parameter 'arguments' gives a function access to all the arguments that were supplied with the invocation.
var sum = function () {
	var i, sum = 0;
	for (i = 0; i < arguments.length; i+=1) {
		sum += arguments[i];
	}
	return sum;
}

sum(1,2,10);