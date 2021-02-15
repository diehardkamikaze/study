// __proto__ //es6
// Object.getPrototypeOf() //es5

//prototype

function Cat(name, color) {
	this.name = name;
	this.color = color;
}

Cat.prototype.voice = function() {
	console.log(`Cat ${this.name} says myay`);
}

const cat = new Cat("Murzik", 'white');

cat.voice();
console.log(Cat.prototype);
console.log(cat);
console.log(cat.__proto === Cat.prototype);
console.log(cat.constructor);


//=====================================
function Person() {

}

Person.prototype.legs = 2;
Person.prototype.skin = 'white';

const person = new Person();
person.name = 'Vladilen';

console.log('skin' in person);
console.log(person.legs);
console.log(person.name);
console.log(person.hasOwnProperty('name'));
console.log(person.hasOwnProperty('skin'));

//Object.rceate()
var proto = {year: 2021}
const myYear = Object.create(proto);

console.log(myYear.year);
console.log(myYear.hasOwnProperty('year'));
console.log(myYear.__proto__ === proto);

proto.year = 2200;
console.log(myYear.year);

proto = {year: 999}
console.log(myYear.year);

