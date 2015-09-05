function createObject(o) {
	var F = function() {};
	F.prototype = o;
	return new F();
}

var person = {
	name: "Max"
};

console.log(person.name); // Max
console.log(person.hasOwnProperty("name")); // true

var anotherPerson = createObject(person);

anotherPerson.lastName = "Mustermann";
console.log(anotherPerson.name); // Max
console.log(anotherPerson.lastName); // Mustermann
console.log(anotherPerson.hasOwnProperty("name")); // false
console.log(anotherPerson.hasOwnProperty("lastName")); // true
