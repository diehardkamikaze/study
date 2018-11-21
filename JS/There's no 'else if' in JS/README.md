#В JS нет «else if»

##Грамматика - это вам не шутка

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

Такс-такс-такс, что это тут у нас?



 
[Оригинал](https://guides.github.com/features/mastering-markdown/)