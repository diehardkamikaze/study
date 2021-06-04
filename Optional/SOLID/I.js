// Interface segregation principle

/* 
class Animal {
  constructor(name) {
    this.name = name;
  }

  walk() {
    console.log(`i believe ${this.name} can walk`);
  }

  swim() {
    console.log(`i believe ${this.name} can swim`);
  }

  fly() {
    console.log(`i believe ${this.name} can fly`);
  }
}

class Dog extends Animal {
  fly() {
    return null;
  }
}

class Eagle extends Animal {
  swim() {
    return null;
  }
}

class Whale extends Animal {
  walk() {
    return null;
  }
  fly() {
    return null;
  }
}


const rex = new Dog('Rex');
rex.walk();
rex.swim();
rex.fly();

const desert = new Eagle('Desert');
desert.fly();
desert.walk();

const pink = new Whale('Pink');
pink.swim();
pink.fly();
pink.walk(); */

class Animal {
  constructor(name) {
    this.name = name;
  }
}

const swimmer = {
  swim() {
    console.log(`i believe ${this.name} can swim`);
  }
}

const flier = {
  fly() {
    console.log(`i believe ${this.name} can fly`);
  }
}

const walker = {
  walk() {
    console.log(`i believe ${this.name} can walk`);
  }
}

class Dog extends Animal { }
class Whale extends Animal { }
class Eagle extends Animal { }


Object.assign(Dog.prototype, swimmer, walker);
Object.assign(Whale.prototype, swimmer);
Object.assign(Eagle.prototype, flier, walker);


const rex = new Dog('Rex');
rex.walk();
rex.swim();


const desert = new Eagle('Desert');
desert.fly();
desert.walk();

const pink = new Whale('Pink');
pink.swim();
