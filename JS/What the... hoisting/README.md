# Что же такое «hoisting»?
Hoisting - поднятие, (глагол. hoist) поднимать, выкидывать. 

если вас удивлял тот факт, что вы можете вызывать функции до их декларации(объявления), то эта статья для вас.



Вкратце, вот что такое hoisting:

```javascript
console.log(hoistingVar);
// -> undefined
var hoistingVar = "I'm not here";

```

Но вот что происходит на самом деле:

```javascript
//Javascript переместит декларацию переменной в самый верх области видимости.
var hoistingVar;
console.log(hoistingVar)
// -> undefined
hoistingVar = "I'm not here";
```
Это нехило так сбивает столку, такого не должно быть!
Более того, тоже самое происходит и в функциональной области видимости: 

```javascript
function test(){
  return test;
  var test = "I'm not here";
}

console.log(test())
// -> undefined
```

## И С САМОЙ ФУНКЦИЕЙ ТОЖЕ!

Давайте переместим вызов console.log(test()) в самое начало, где функции test(), казалось бы, ещё даже не существует.

```javascript
console.log(test())

function test(){
  var test = "I should not be here";
  return test;
}

// -> "I should not be here"
```

Иии...ничего не изменилось. На самом деле JavaScript перемещает декларации функции в самый верх области видимости, что как бы позволяет вызывать функцию ещё
до её декларации. 


Но погодите: 
```javascript
console.log(test)
// -> undefined
var test = function test(){
   var test = "I'm not here";
   return test;
}
```
Почему undefined? Ведь всё правильно - вызываем функцию до её декларации!
Дело в том, что только непосредственно декларация (var test) перемещается вверх, а не инициализация.


## Ещё раз всё повторим
Есть N стульей. Declaration, function declaration blablabla и blablabla HOISTING blabla
Запомните и держите в уме одну важную вещь, JavaScript непреклонно сначала объявляет, а затем инициализирует наши переменные.


## А что насчёт let, const и воовсе записи без декларации?!

Попробуем проделать с let и const тоже самое:
```javascript
function test(){
    return confusing;
    let confusing = "Finally!";
}

console.log(test())
//-> ReferenceError: can't access lexical declaration `confusing' before         initialization
```
Значительно приятнее, да? Аналогично с const;


![hoisting](4jop4FB.gif)
**Let** и **const**, появившиеся с версии ES6
 
[Оригинал](https://dev.to/genta/what-the-hoisting-5f824jop4FB.gif)
