// When a function is invoked not as a property of an object, 'this' is bound to the global object.

var myObject = {
	value: 1,
	doubleVal: function () {
		var that = this; //workaround to access the value from within the inner helper function
		var helper = function () {
			console.log(this.value); // logs 'undefined' as the global object does not have a property called value
			that.value = that.value + that.value; // the helper function has access to the object's value via the variable that
		};
		helper(); // invoke helper as a function
	}
}

myObject.doubleVal()
console.log(myObject.value);