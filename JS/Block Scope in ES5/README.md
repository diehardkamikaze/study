# Создание "блочной" области видимости в ES5

Здесь я коллекционирую. Пока насобирал две.

## На самом деле просто заметки.

### №1 Immediately-Invoked Function Expression ...:
```javascript
if(isPropName) {
	(function() {
	var message = 'THIS IS IIFE!';
	//...
	
	}());
}
console.log(message);
	// ReferenceError: message is not defined
```
### №2 С помощью try, catch:
```javascript
if(true) {
	try { 
		
		throw("ERROR!");
		
	}
	catch(excepTest) {
		//...
		excepTest = 'in Block Scope';
		console.log(excepTest);
		// -> "in Block Scope"
	
	}
}
	console.log(excepTest);
		// -> ReferenceError: excepTest is not defined
```
### №3:
...