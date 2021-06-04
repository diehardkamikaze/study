/* // Liskov Substitution Principle

class Person {

}

class Member extends Person {
  access() {
    console.log('У тебя доступы есть');
  }
}

class Guest extends Person {
}


class Frontend extends Member {
  canCreateFrontend() {
  }
}

class Backend extends Member {
  canCreateBackend() {
  }
}

class PersonFromDiffCompany extends Guest {
  access() {
    throw new Error('u have no access!');
  }
}

function openSecretDoor(member) {
  member.access();
}

openSecretDoor(new Frontend());

openSecretDoor(new Backend());

// openSecretDoor(new PersonFromDiffCompany()); //here should be member */

class Component {
  isComponent = true;
}

class ComponentWithTemplate extends Component {
  render() {
    return `<div>Component</div>`
  }
}

class HigherOrderComponent extends Component {

}

class HeaderComponent extends ComponentWithTemplate {
  onInit() { }
}

class FooterComponent extends ComponentWithTemplate {
  afterInit() { }
}

function renderComponents(component) {
  component.render();
}

class HOC extends HigherOrderComponent {
  render() {
    throw new Error('Render is impossible here');
  }

  wrapComponent(components) {
    component.wrapped = true;
    return component;
  }
}

renderComponents(new HeaderComponent());

renderComponents(new FooterComponent());

renderComponents(new HOC());