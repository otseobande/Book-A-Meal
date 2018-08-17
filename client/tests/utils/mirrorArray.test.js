import mirrorArray from '../../src/utils/mirrorArray.js';

describe('mirrorArray function', () => {
  it('should convert an array of strings to an object with array values as key and value', () => {
    const arr = ["food"];

    expect(mirrorArray(arr)).toEqual({ food: 'food' });
  })
})