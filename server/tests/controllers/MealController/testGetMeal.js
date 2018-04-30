import chai from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { mockReq, mockRes } from 'sinon-express-mock';

import MealController from '../../../controllers/mealController';


chai.use(sinonChai);
chai.should();

const request = {
  body: {
  },
  params: {
  	mealId: 1
  }
};

const badRequest = {
	params: {
		mealId: 30
	}
}


const req = mockReq(request);
const badReq = mockReq(badRequest);
const res = mockRes();

describe('getMeals method', () => {
  
  it('should return 200 on success', () => {
  	MealController.getMeal(req,res);
		res.status.should.have.been.calledWith(200);
  });

  it('should return 404 and err msg if not found', () => {
  	MealController.getMeal(badReq, res);
		res.status.should.have.been.calledWith(404);
		res.json.should.have.been.calledWith({
			status: false,
			message: 'Meal not found',
		})
  });
});