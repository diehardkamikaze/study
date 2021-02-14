const person = {
	surname: 'Stark',
	knows: function (what, name) {
		console.log(`Ты ${what} знаешь, ${name} ${this.surname}`);
	}
}

person.knows('кое-что', 'Sansa');
const john = {surname: 'Snow'};

person.knows.apply(john, ['ничего ты не', 'John']);
const bound = person.knows.bind(john, ...['ничего не', 'John']);
bound();
bound();


// ===============

function Person(name, age)
{
	this.name = name;
	this.age = age;

	console.log(this);
}
const Elena = new Person('Elena', 20);


// explicit binding

function logThis() {
	console.log(this);
}

const obj = {num: 42};

logThis.apply(obj);
logThis.call(obj);
logThis.bind(obj)();

// implicit binding

const animal = {
	legs: 4,
	logThis: function() {
		console.log(this.legs);
	}
}

animal.logThis();

function Cat(color) {
	this.color = color;
	console.log('This', this);
}

//arrow functions

function Cat(color) {
	this.color = color;
	console.log('This', this);
	(() => console.log('Arrow this', this))();
}


new Cat('black');

