var person = {
	name: "illya",
	age: 23
};

var personJSON = JSON.stringify(person);
console.log(personJSON);

var personObject = JSON.parse(personJSON);

console.log(personObject.name);