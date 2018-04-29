import chai from 'chai';
import DummyModel from '../../dummy-models/DummyModel';
import assert from 'assert';

chai.should();
const dummyModel = new DummyModel([
											{
												name: 'test',
												description: 'wonderful test'
											}
								]);
describe('Test DummyModel', () => {
	it('should raise TypeError if constructor arg is not array', () =>{
		(() => new DummyModel(3)).should.throw(TypeError);
		(() => new DummyModel({})).should.throw(TypeError);
	});

	it('should be an instance of DummyModel', () => {
		dummyModel.should.be.an.instanceof(DummyModel);
	});

	it('should modify entries with timestamps', () => {
		dummyModel.data[0].should.have.property('createdAt');
		dummyModel.data[0].should.have.property('updatedAt');
	});

	it('should implement create Method', () => {
		dummyModel.create({
			name: 'test data 2',
			description: 'should create new entry'
		});

		const newEntry = dummyModel.data.find(m => m.name === 'test data 2');
		newEntry.should.be.an('object');
		newEntry.name.should.be.equal('test data 2');
	});

	it('should implement find method', () => {
		const foundEntry = dummyModel.find(m => m.name === 'test');
		foundEntry.should.not.be.undefined;
	});

	it('should implement filter method', () => {
		const foundEntry = dummyModel.filter(m => m.name === 'test');
		foundEntry.should.not.be.undefined;
	});

	describe('Update method', () => {
		it('should throw TypeError if first arg is not an obj', () => {
			(() => dummyModel.update('')).should.throw(TypeError);
		});

		it('implements the method accurately', () => {
			const updatedEntry = dummyModel.update({
				name: 'new test name',
			}, m => m.name === 'test');

			updatedEntry.should.be.an('object');
			updatedEntry.should.not.be.empty;
			updatedEntry.name.should.be.equal('new test name');
		})
	});

	it('should implement delete method', () => {
		const deleted = dummyModel.delete(m => m.name === 'test data 2');
		deleted.should.be.true;

		const deletedEntry = dummyModel.find(m => m.name === 'test data 2');
		assert.equal(deletedEntry, undefined);
	})
})