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
  },
};


const req = mockReq(request);
const res = mockRes();

describe('getMeals method', () => {
  beforeEach(() => {
    MealController.getMeal(req, res);
  });

  it('should return 201 on success', () => {
		 res.status.should.have.been.calledWith(200);
  });


});