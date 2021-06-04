class Typescript {
  version: string

  constructor(version: string) {
    this.version = version;
  }

  info(name: string) {
    return `{name: Typescript, vesion: ${this.version}`
  }
}

/*
class Car {
  readonly model: string;
  readonly numberOfWheels: number = 4;

  constructor(theModel : string) {
    this.model = theModel; 
  }
}
*/

//Car лаконичнее
class Car {
  readonly numbrOfWheels: number = 4;
  constructor(readonly model: string) { }
}

// ===========================

class Animal {
  protected voice: string = ''
  public color: string = 'black';
  private go() {
    console.log('Go' + this.voice);
  }
}


class Cat extends Animal {
  public setVoice(voice: string): void {
    this.voice = voice;
  }
}

const cat = new Cat();
cat.setVoice('AAAAAAAAaaaa');
console.log(cat.color);

//===============================

abstract class Component {
  abstract render(): void
  abstract info(): string
}

class AppComponent extends Component {
  render(): void {
    console.log('Comp')
  }
  info(): string {
    return 'aloha';
  }
}
