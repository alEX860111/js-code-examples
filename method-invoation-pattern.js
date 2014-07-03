// A function that is stored as a property of an object is called a method. 
// When a method is invoked via the object, 'this' is bound to that object.

var myObject = {
	value : 0,
	increment : function (inc) {
		return this.value += typeof inc === 'number' ? inc : 1;
	}
};

console.log(myObject.value);
console.log(myObject.increment());
console.log(myObject.increment(2));
console.log(myObject.increment('abc'));