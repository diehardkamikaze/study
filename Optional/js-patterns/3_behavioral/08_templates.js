class Employee {
    constructor(name, salary) {
        this.name = name
        this.salary = salary
    }
    responsibilities() {

    }

    work() {
        return this.name + ' make ' + this.responsibilities()
    }

    getPaid() {
        return this.name + ' have ' + this.salary
    }
}

class Developer extends Employee {
    constructor(name, salary) {
        super(name, salary);
    }

    responsibilities() {
        return 'programm developments'
    }
}


class Tester extends Employee {
    constructor(name, salary) {
        super(name, salary);
    }

    responsibilities() {
        return 'programm testing'
    }
}

const dev = new Developer('Alm', 99999999);

console.log(dev.responsibilities());
console.log(dev.work());
console.log(dev.getPaid());
const tester = new Tester('Tor', 9);
console.log(tester.responsibilities());
console.log(tester.work());
console.log(tester.getPaid());
