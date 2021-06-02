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
}

class ComponentWithTemplate() {
  render() {
    return `<div>Component</div>`
  }
}

class HeaderComponent extends Component {
  onInit() { }
}

class FooterComponent extends Components {
  afterInit() { }
}

function renderComponents(component) {
  component.render();
}

class HOC extends Component {
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