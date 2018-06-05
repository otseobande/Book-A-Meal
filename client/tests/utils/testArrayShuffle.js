import chai from 'chai';
import arrayShuffle from '../../src/utils/arrayShuffle';

chai.should();

describe('Array shuffle function', () => {
  it('should shuffle an array', () => {
    const arr = [1, 2, 3, 4];
    arrayShuffle(arr).should.not.be.equal([1, 2, 3, 4]);
  });
});
