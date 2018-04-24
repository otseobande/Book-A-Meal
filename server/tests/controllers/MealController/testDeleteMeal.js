import chai from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { mockReq, mockRes } from 'sinon-express-mock';

import Controller from '../../../controllers/controller';
import MealController from '../../../controllers/mealController';

chai.use(sinonChai);
chai.should();

const request = {
  params:{
    mealId: 2
  }
}

const badRequest = {
  params: {
    mealId: 20
  }
}
const req = mockReq(request);
const res = mockRes();

describe('deleteMeal method', () => {
  beforeEach(() => {
    MealController.deleteMeal(req, res);
  });

  it('should return 202 on success', () => {
		res.status.should.have.been.calledWith(202);
  });

  it('respond with json message on success', () => {
	  res.json.should.have.been.calledWith({ 
        status: "success",
        message: 'Meal deleted successfully' 
      });
  });

  const notFoundReq = mockReq(badRequest);
  
  it('should return error 404 if "id" is not found', function(){
    MealController.deleteMeal(notFoundReq, res);
    res.status.should.have.been.calledWith(404)
  });

  it('should respond with error message', function() {
    MealController.deleteMeal(notFoundReq, res);
    res.json.should.have.been.calledWith({
      status: "error",
      message: "Meal not found",
    })
  });

});