class OldCalc {
    operations(t1, t2, operation) {
        switch(operation) {
            case 'add': return t1 + t2
            case 'sub': return t1 - t2
            default: return NaN
        }
    }
}

class NewCalc {
    add(t1, t2) {
        return t1 + t2
    }
    sub(t1, t2) {
        return t1 - t2
    }
    mul(t1, t2) {
        return t1 * t2
    }
}

class CalcAdapter {
    constructor() {
        this.calc = new NewCalc();
    }

    operations(t1, t2, operation) {
        switch(operation) {
            case 'add': return this.calc.add(t1, t2)
            case 'sub': return this.calc.sub(t1, t2)
            default: return NaN
        }
    }
}

const calc = new OldCalc();
console.log(calc.operations(10, 5, 'add'))

const calcNew = new NewCalc();
console.log(calcNew.mul(5, 3));

const calcAdapter = new CalcAdapter();
console.log(calcAdapter.operations(25, 10, 'sub'));