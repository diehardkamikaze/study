function noop() { };

class MainPromise {
  constructor(exct) {
    this.queue = []; // chain queue 
    this.errorHandler = noop;
    this.finallyHandler = noop;

    try {
      exct.call(null, this.onResolve.bind(this), this.onReject.bind(this));
    }
    catch (e) {
      this.errorHandler(e);
    }
  }

  onResolve(data) {
    this.queue.forEach(callback => {
      data = callback(data);
    })
  }

  onReject(error) {
    this.errorHandler(error);
  }

  then(fn) {
    this.queue.push(fn);
    return this;
  }

  catch(fn) {
    this.errorHandler = fn;
    return this;
  }

  finally(fn) {
    this.queue.push(fn);
    return this;
  }
}

const promise2 = new MainPromise((resolve, reject) => {
  setTimeout(() => {
    resolve('Ryan');
  }, 150);

});

promise2.then((name) => { console.log('I wanna be like ', name) }).catch(err => console.log('Error:', error)).finally(() => console.log('Finally'));



module.exports = MainPromise;