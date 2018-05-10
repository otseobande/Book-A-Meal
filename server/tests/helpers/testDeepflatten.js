import deepFlatten from '../../helpers/deepflatten';
import Chai from 'chai';

Chai.should();

describe('Deep flatten', function() {
	it('takes an array as an argument', function() {
		(() => deepFlatten([])).should.not.throw();
		(() => deepFlatten()).should.throw(TypeError);
		(() => deepFlatten('3')).should.throw(TypeError);
		(() => deepFlatten(4)).should.throw(TypeError);
	});

	it('thorougly flattens a nested array', function() {
		const arr = [1,2,3,[4,5,[6,7],8],9];

		deepFlatten(arr).filter((item) => Array.isArray(item))
						.should.be.empty;

		deepFlatten(arr).should.be.deep.equal([1,2,3,4,5,6,7,8,9]);
	});


});