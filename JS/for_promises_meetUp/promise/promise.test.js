const MainPromise = require('./promise');

describe('Main Promise ', () => {

  let executorSpy;
  let promise;

  const resultSuccess = 42;
  const errorResult = 'az esm owibka';

  beforeEach(() => {
    executorSpy = jest.fn((resolve) => { return setTimeout(() => resolve(resultSuccess), 150) });
    promise = new MainPromise(executorSpy);
  });

  test('should exists and to be typeof function', () => {
    expect(MainPromise).toBeDefined();
    expect(typeof MainPromise).toBe('function');
  })

  test('instance should have methods: then, catch, finally', () => {
    expect(promise.then).toBeDefined();
    expect(promise.catch).toBeDefined();
    expect(promise.finally).not.toBeUndefined();
  });

  test('should call executor function ', () => {
    expect(executorSpy).toHaveBeenCalled();

  })

  test('should get data in then block and chain them', () => {
    promise.then(num => num).then(num => num * 2)
      .then((res) => expect(res).toBe(resultSuccess * 2));
  })

  test('should catch error', () => {
    const errorExecutor = (_, reject) => setTimeout(() => { reject(errorResult) }, 150);
    const errorPromise = new MainPromise(errorExecutor);

    return new Promise((resolve) => {
      errorPromise.catch((error) => {
        expect(error).toBe(errorResult);
        resolve();
      })
    })
  })

  test('should call finally method', () => {
    const finallySpy = jest.fn(() => { });
    promise.finally(finallySpy).then(() => {
      expect(finallySpy).toHaveBeenCalled();
    })
  });

});