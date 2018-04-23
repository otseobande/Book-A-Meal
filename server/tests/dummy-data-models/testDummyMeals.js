import chai from 'chai';
import meals from '../../dummy-models/meals';

chai.should();

describe("Dummy meals data", function(){
	it("should be an array", function(){
		meals.should.be.an('array');
	});
	it("should contain meal objects", function(){
		const testMeal = {
			id: 1,
			title: "Rice and stew",
			description: "Nigerian rice and stew",
			price: 300,
			img: "https://africa-public.food.jumia.com/dynamic/production/ng/images/products/80/80418_1465475724_ma.jpg"
		};

		meals[0].should.deep.equal(testMeal);
	});
});