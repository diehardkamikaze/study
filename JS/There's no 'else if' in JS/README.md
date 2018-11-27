# В JS нет «else if»
 
## Синтаксис - это вам не шутки

Да, вы не ослышались! В синтаксисе JavaScript нет конструкции **«else if»**.

Н-н-но, но ведь все мы её уже давно и успешно используем! Почему же она исправно работает?

Так обычно пишут код:

```javascript
function rate(language) {
    if (language === 'javascript'){
        console.log('Well...');
    }
    else if(language === 'python') {
        console.log('Better..');
    }
    else if(language === 'yoptascript') {
        console.log('Shut up and take my money!');
    }
    else console.log('it\'s not bad too!');
}

rate('python');
//-> "Better.."
```

Но вот что происходит на самом деле:

```javascript
function rate(language) {
    if (language === 'javascript') {
        console.log('Well...');
    }
    else {
        if(language === 'python') {
            console.log('Better..');
        }
        else { 
            if(language === 'yoptascript') {
            console.log('Shut up and take my money!');
            }
            else console.log('it\'s not bad too!');
        }
    }
}
rate('python');
//-> "Better.."
```

Управляющие конструкции «if else», «for», «while» и др. содержат фигурные скобки **{}**, внутри которых прописываются инструкции.
Однако, если инструкция всего одна, скобки можно просто опустить. 

Собственно, оператор «if else» как раз представляет из себя ровно одну инструкцию, поэтому вокруг него скобки не ставятся. И нам кажется, 
что мы используем такой удобный «else if».
В целом всегда рекомендуется использовать фигурные скобки, даже если инструкция одна, но в данном конкретном случае куда лаконичнее
смотрится **фальшивый «else if»**.

В конце-концов этого вовсе можно не знать, такого рода знания вряд ли повлияют на качество вашего кода.
Однако они могут открыть глаза на настолько же неявные, но намного более важные вещи, а также осознать всю прелесть JS.
  

 
[Оригинал](https://guides.github.com/features/mastering-markdown/)