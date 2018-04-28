import chai from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { mockReq, mockRes } from 'sinon-express-mock';

import MenuController from '../../../controllers/menuController';
import Menus from '../../../dummy-models/menus';


chai.use(sinonChai);
chai.should();

const request = {
  body: {
    title: 'test menu',
    categories: [{
            title: "Benue style",
            mealIds: [1, 3]
        },
        {
            title: "Jacuzzi paruzi",
            mealIds: [2, 3]
        }
    ]
  },
  params:{
    date: "05-22-2018"
  }
};

const notFoundRequest = {
  body: {
    title: 'test menu',
    categories: [{
            title: "Benue style",
            mealIds: [1, 3]
        },
        {
            title: "Jacuzzi paruzi",
            mealIds: [2, 3]
        }
    ]
  },
  params:{
    date: "09-22-2018"
  }
};


const badBodyRequest = {
  body: {
    categories: [{
            title: "Benue style",
            mealIds: [1, 3]
        },
        {
            title: "Jacuzzi paruzi",
            mealIds: [2, 3]
        }
    ]
  },
   params:{
    date: "09-22-2018"
  }
}

const req = mockReq(request);
const res = mockRes();

describe('updateMenu method', () => {
  beforeEach(() => {
    MenuController.updateMeal(req, res);
  });

  it('should return 202 on success', () => {
		res.status.should.have.been.calledWith(202);
  });

  it('respond with json message on success', () => {
	  res.json.should.have.been.calledWith({ 
        status: "success",
        message: 'Menu updated successfully' 
      });
  });

  it('should update menu data', () => {
    const testMenu = Meals.find(menu => (new Date(menu.date)).getTime() 
                                          === (new Date(req.params.date)).getTime());
    testMeal.should.be.deep.equal({
      title: 'test menu',
      categories: [{
              title: "Benue style",
              mealIds: [1, 3]
          },
          {
              title: "Jacuzzi paruzi",
              mealIds: [2, 3]
          }
      ]
    });
  });

  const notFoundReq = mockReq(notFoundRequest);
  
  it('should return error 400 if request body is not constructed properly', () => {
    const badBodyReq = mockReq(badBodyRequest);
    MenuController.updateMeal(badBodyReq, res);
    res.status.should.have.been.calledWith(400);
  });

  it('should respond with err msg if request body is not constructed properly', () => {
    const badBodyReq = mockReq(badBodyRequest);
    MenuController.updateMeal(badBodyReq, res);
    res.status.should.have.been.calledWith(400);
  });

  it('should return error 404 if "id" is not found', function(){
    MenuController.updateMeal(notFoundReq, res);
    res.json.should.have.been.calledWith({
        status: 'error',
        message: 'Wrong parameters supplied',
      });
  });

  it('should respond with error message', function() {
    MenuController.updateMeal(notFoundReq, res);
    res.json.should.have.been.calledWith({
      status: "error",
      message: "Menu not found",
    })
  });

});