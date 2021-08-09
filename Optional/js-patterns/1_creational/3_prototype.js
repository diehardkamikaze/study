const car = {
    wheels: 4,

    init() {
        console.log('У меня есть столько колес ' + this.wheels + ' мой владелец ' + this.owner);
    }
}

const carWithOwner = Object.create(car, { owner: {
     value: 'Дмитрий'
    }});

carWithOwner.init();