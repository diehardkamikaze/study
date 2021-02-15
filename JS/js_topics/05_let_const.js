/*
// Let

let a = 'Variable a';
let b = 'Variable b';

//block scope
{
	a = 'New Variable a';
	let b = 'Local Variable b';
	console.log('Scope a:', a);
	console.log('Scope b:', b);
	let c = 13;
}
console.log('a:', a);
console.log('b:', b);
console.log('c:', c); // error!

*/
//Const sugar under var
const PORT = 8080; //can't change primitive type
const array = ['Javascript', 'is', 'Awesome'];
array.push('!');
array[0] = 'JS';
console.log(array);
//array = ''; // error!

const obj = {};
obj.name = 'Avicenna';
obj.age = 26;
console.log(obj);

delete obj.name;

console.log(obj);

//obj = 13; //error!


