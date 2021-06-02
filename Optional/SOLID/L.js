// Liskov Substitution Principle

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

// openSecretDoor(new PersonFromDiffCompany()); //here should be member