 class Subject {
    constructor() {
        this.observers = []
    }

    subscribe(observer) {
        this.observers.push(observer);
    }

    unsubscribe(observer) {
        this.observers = this.observers.filter(elem => elem !== elem)
    }

    fire(action) {
        this.observers.forEach((obs) => {
            obs.update(action);
        });
    }
 }

 class Observer {
    constructor(state) {
        this.state = state
        this.initialState = state
    }

    update(action) {
        switch(action.type) {
            case 'INCREMENT':
                this.state = ++this.state;
                break;
            case 'DECREMENT':
                this.state = --this.state;
                break;
            default: this.state = this.initialState
        }
    }
 }

 const stream = new Subject();

const obs1 = new Observer(1);
const obs2  = new Observer(42);

stream.subscribe(obs1);
stream.subscribe(obs2);

stream.fire({type: 'INCREMENT'});

console.log(obs1.state);
console.log(obs2.state);
