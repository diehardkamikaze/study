class Fetch {
  request(url) {
    // return fetch(url).then(response => response.json());
    return Promise.resolve('data from fetch');
  }
}

class LocalStorage {
  get() {
    const datafromLS = 'data from LS';
    return datafromLS;
  }
}

class FetchClient {
  constructor() {
    this.fetch = new Fetch();
  }

  clientGet() {
    return this.fetch.request('vk.com');
  }
}

class LocalStorageClient {
  constructor() {
    this.LocalStorage = new LocalStorage();
  }

  clientGet() {
    return this.LocalStorage.get();
  }
}

class Database {
  constructor(client) {
    //this.fetch = new Fetch();
    this.client = client;
  }
  getData() {
    // return this.fetch.request('blabla.com');
    return this.client.clientGet();
  }
}

const db = new Database(new LocalStorageClient());

console.log(db.getData());