/* console.log(sum(1, 41));

function sum(a, b) {
	return a + b;
}

console.log(sum(1, 41));
*/

/*
//var i
console.log(i);
var i = 42;
console.log(i);
*/

//const и let не подвержены hoisting'y

console.log(num);
const num = 42; // or let:
console.log(num);

// Function Expression & Function Declaration
console.log(square(25));
function square(num) // function declaration
{
	return num ** 2;
}
console.log(square2(25)); // error!
var square2 = function(num) // function expression
{
	return num ** 2;
}


