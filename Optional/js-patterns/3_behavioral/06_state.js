class Light {
    constructor(light) {
        this.light = light
    }
}

class RedLight extends Light {
    constructor() {
        super('red')
    }

    sign() {
        return 'stop';
    }
}


class YellowLight extends Light {
    constructor() {
        super('yellow')
    }

    sign() {
        return 'be ready!';
    }
}


class GreenLight extends Light {
    constructor() {
        super('green')
    }

    sign() {
        return 'go!';
    }
}

class TrafficLight {
    constructor() {
        this.states = [ new GreenLight(),
            new YellowLight(),
            new RedLight(),
        ]
        this.current = this.states[0]
    }

    change() {
        const total = this.states.length;
        let index = this.states.findIndex(light => light == this.current)
        this.current = this.states[(index + 1) % total]
    }
        sign() {
        return this.current.sign()
    }
}

const traffic = new TrafficLight();
console.log(traffic.sign())
traffic.change();

console.log(traffic.sign())
traffic.change();

console.log(traffic.sign())

traffic.change();

console.log(traffic.sign())