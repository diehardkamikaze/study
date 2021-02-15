//null, undefined, boolean, number, string, object, symbol

console.log(typeof 0);
console.log(typeof true);
console.log(typeof 'Javascript');
console.log(typeof undefined);
console.log(typeof Math);
console.log(typeof {test: 13});
console.log(typeof Symbol('JS'));
console.log(typeof null); //неточность, null - отдельный тип данных
console.log(typeof function() {}); //опять неточность, function - Object
console.log(typeof NaN);
console.log('0/0 - ' +  0/0 + ' is ' + typeof(0/0));

//Приведение типов
let language = 'JavaScript'

if (language) {
	console.log('The best language is: ', language);
}

//falsy values:
// '', 0, null, undefined, NaN, false
console.log(Boolean(''));
console.log(Boolean('hello'));
console.log(Boolean(' '));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean([]));
console.log(Boolean({}));
console.log(Boolean(function () {}));

//Строки и числа
console.log(1 + '2');
console.log('' + 1 + 0);
console.log('' - 1 + 0);
console.log('3' * '8');
console.log(4 + 10 + 'px');
console.log('px: ' + 5 + 10);
console.log('42px' - 2);
console.log(null + 2);
console.log(undefined + 42);

// == vs ===
console.log(2 == '2');
console.log(2 === '2');
console.log(undefined == null);
console.log(undefined === null);
console.log('0' == false);
console.log('0' == 0);

// =========
console.log(false == '');
console.log(false == []);
console.log(false == {});
console.log('' == 0);
console.log('' == []);
console.log('' == {});
console.log(0 == []);
console.log(0 == {});
console.log(0 == null);

