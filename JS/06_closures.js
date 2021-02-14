function sayHelloTo(name) {
	const message = 'Hello ' + name;
	return function() {
		console.log(message);
	}
}

const helloToBilly = sayHelloTo('Billy');
console.log(typeof(helloToBilly));
helloToBilly();

function createFrameworkManager() {
	const fw = ['Angular', 'React'];

	return {
		print: function() {
			console.log(fw.join(' '));
		},
		add: function(framework) {
			fw.push(framework);
		},
	};
}


const manager = createFrameworkManager();
console.log(typeof manager);
manager.print();
manager.add('Vue');
manager.print();

//setTimeout

const fib = [1, 2, 3, 5, 8, 13];

for (var i = 0; i < fib.length; i++) {
	(function(i) {
	setTimeout(function() {
		console.log(`fib[${i}] = ${fib[i]}`);
	}, 1500);
	})(i);
}//or just let

