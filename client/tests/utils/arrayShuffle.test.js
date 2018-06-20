import arrayShuffle from '../../src/utils/arrayShuffle';

describe('Array shuffle function', () => {
  it('should shuffle an array', () => {
    const arr = [1, 2, 3, 4];
    expect(arrayShuffle(arr)).not.toEqual([1, 2, 3, 4]);
  });
});
