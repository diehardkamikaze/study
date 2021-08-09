class MyMath {
    constructor(initiaValue = 0) {
        this.number = initiaValue
    }
    square() {
        return this.number ** 2
    }

    cub() {
        return this.number ** 3
    }
}

class Command {
    constructor(target) {
        this.target = target;
        this.commandsExecuted = [];
    }

    execute(command) {
        this.commandsExecuted.push(command)
        return this.target[command]();
    }

}


const x = new Command(new MyMath(2));
console.log(x.execute('square'));
console.log(x.execute('cub'));