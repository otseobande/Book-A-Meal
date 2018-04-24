import chai from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { mockReq, mockRes } from 'sinon-express-mock';

import Controller from '../../../controllers/controller';
import MealController from '../../../controllers/mealController';


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
    mealId: 2
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
    id: 20
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

  const notFoundReq = mockReq(notFoundRequest);
  
  it('should return error 404 if "id" is not found', function(){
    MealController.updateMeal(notFoundRequest, res);
    res.status.should.have.been.calledWith(404)
  });

  it('should respond with error message', function() {
    MealController.updateMeal(notFoundRequest, res);
    res.json.should.have.been.calledWith({
      status: "error",
      message: "Meal not found",
    })
  });

});