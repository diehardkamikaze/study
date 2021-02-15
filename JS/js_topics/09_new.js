function Cat(color, name) {
	this.color = color
	this.name = name
}

// const cat = new Cat('pink', 'Sobaka');
// console.log(cat);


//native New implementation
function myNew(constructor, ...args) {
	const obj = {};
	Object.setPrototypeOf(obj, constructor.prototype);
	return obj.constructor(...args) || obj;
	//return constructor.apply(obj, args) || obj;
}

const cat = myNew(Cat, 'black', 'KOWKA');
console.log(cat);





