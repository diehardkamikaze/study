const Lodash = require('./sync.js');

let _ = new Lodash();

describe('Lodash compact', () => {

  let array;

  beforeEach(() => {
    array = [false, 42, 0, '', true, null, 'Hola'];
  })


  test('should be defined', () => {
    expect(_.compact).toBeDefined();
    expect(_.compact).not.toBeUndefined();

  })

  test('should array be editable', () => {
    array.push('one', 'two');
    expect(array).toContain('one');
    expect(array).toContain('two');
  })

  test('should remove falsy values from array', () => {
    const res = [42, true, 'Hola'];
    expect(_.compact(array)).toEqual(res);
  })

  test('should not contain falsy values', () => {
    expect(_.compact(array)).not.toContain(false);
    expect(_.compact(array)).not.toContain('');
    expect(_.compact(array)).not.toContain(0);
    expect(_.compact(array)).not.toContain(null);

  })
})


describe('Lodash group by', () => {
  test('should be defined', () => {
    expect(_.groupBy).toBeDefined();
    expect(_.groupBy).not.toBeUndefined();
  })

  test('should group items by math.floor', () => {
    const array = [2.2, 2.4, 4.2, 3.1];
    const result = {
      2: [2.2, 2.4],
      4: [4.2],
      3: [3.1]
    }
    expect(_.groupBy(array, Math.floor)).toEqual(result);
  });


  test('should group items by length', () => {
    const array = ['one', 'two', 'three'];
    const result = {
      3: ['one', 'two'],
      5: ['three'],
    }
    expect(_.groupBy(array, 'length')).toEqual(result);
  });

  test('should not return array', () => {

    expect(_.groupBy([], Math.trunc)).not.toBeInstanceOf(Array);
  });

});