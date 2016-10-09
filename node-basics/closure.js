function createAdder(base){
	function add (number){
		return (base + number);
	}

	return add;
}

var addTen = createAdder(10);
console.log(addTen(2));
console.log(addTen(0));