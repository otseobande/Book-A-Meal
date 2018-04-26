import chai from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { mockReq, mockRes } from 'sinon-express-mock';

import Controller from '../../../controllers/controller';
import MealController from '../../../controllers/mealController';
import Meals from '../../../dummy-models/meals';


chai.use(sinonChai);
chai.should();

const request = {
  body: {
    title: 'test meal',
    description: 'great meal',
    price: 500,
    img: 'image_link',
  },
  params:{
    mealId: 1
  }
};

const notFoundRequest = {
  body: {
    title: 'test meal',
    description: 'great meal',
    price: 500,
    img: 'image_link',
  },
  params:{
    mealId: 20
  }
}

const badParamRequest = {
  body: {
    title: 'test meal',
    description: 'great meal',
    img: 'image_link',
  },
  params: {
    mealId: 1
  }
}

const req = mockReq(request);
const res = mockRes();

describe('updateMeal method', () => {
  beforeEach(() => {
    MealController.updateMeal(req, res);
  });

  it('should return 202 on success', () => {
		res.status.should.have.been.calledWith(202);
  });

  it('respond with json message on success', () => {
	  res.json.should.have.been.calledWith({ 
        status: "success",
        message: 'Meal updated successfully' 
      });
  });

  it('should update meal data', () => {
    const testMeal = Meals.find(meal => meal.id === 1);
    testMeal.should.be.deep.equal({
      id: 1,
      title: 'test meal',
      description: 'great meal',
      price: 500,
      img: 'image_link',
      userId: 1
    });
  });

  const notFoundReq = mockReq(notFoundRequest);
  
  it('should return error 400 if request body is not constructed properly', () => {
    const badParamReq = mockReq(badParamRequest);
    MealController.updateMeal(badParamReq, res);
    res.status.should.have.been.calledWith(400);
  });

  it('should respond with err msg if request body is not constructed properly', () => {
    const badParamReq = mockReq(badParamRequest);
    MealController.updateMeal(badParamReq, res);
    res.status.should.have.been.calledWith(400);
  });

  it('should return error 404 if "id" is not found', function(){
    MealController.updateMeal(notFoundReq, res);
    res.json.should.have.been.calledWith({
        status: 'error',
        message: 'Parameters supplied incorrectly',
      });
  });

  it('should respond with error message', function() {
    MealController.updateMeal(notFoundReq, res);
    res.json.should.have.been.calledWith({
      status: "error",
      message: "Meal not found",
    })
  });

});