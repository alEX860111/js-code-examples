if (typeof Object.create !== 'function') {
	Object.create = function (o) {
		var F = function () {
			F.prototype = o;
			return new F();
		}
	}
}

var person = {
	name : "Max"
};
console.log('person');
console.dir(person);
console.log(person.hasOwnProperty('name'));

var augmentedPerson = Object.create(person);
augmentedPerson.lastName = 'Mustermann';
console.log('augmentedPerson');
console.dir(augmentedPerson);
console.log(augmentedPerson.name);
console.log(augmentedPerson.hasOwnProperty('name'));
console.log(augmentedPerson.hasOwnProperty('lastName'));