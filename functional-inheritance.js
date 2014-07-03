//define a function that produces a new mamal 
var mammal = function(spec) {
	var that = {};

	that.getName = function() {
		return spec.name;
	};

	that.says = function() {
		return spec.saying || '';
	};

	return that;
};