if (typeof Function.prototype.curry !== 'function') {
	Function.prototype.curry = function() {
		var slice = Array.prototype.slice,
			args = slice.apply(arguments),
			that = this;
			return function() {
					return that.apply(null, args.concat(slice.apply(arguments)));
			};
	};
}

function add(x, y) {
	return x + y;
}

// Translate add into a function that take only a single argument.
var add1 = add.curry(1);
add1(7);