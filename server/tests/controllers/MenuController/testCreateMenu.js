import chai from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { mockReq, mockRes } from 'sinon-express-mock';

import menus from '../../../dummy-models/menus';
import MenuController from '../../../controllers/menuController';


chai.use(sinonChai);
chai.should();

const request = {
  body: {
    title: 'test menu',
    date: '20-10-2019',
    categories: [
      {
        title: "Benue style",
        mealIds: [1,3] 
      },
      {
        title: "Jacuzzi paruzi",
        mealIds: [2,3] 
      }  
    ]
  },
};

const badRequest = {
  body: {
    title: 'test menu',
    categories: [
      {
        title: "Benue style",
        mealIds: [1,3] 
      },
      {
        title: "Jacuzzi paruzi",
        mealIds: [2,3] 
      }  
    ]
  },
};

const req = mockReq(request);
const res = mockRes();

describe('createMenu method', () => {
  beforeEach(() => {
    MenuController.createMenu(req, res);
  });

  it('should return 201 on success', () => {
		 res.status.should.have.been.calledWith(201);
  });

  it('should add menu to the menu data', () => {
    const testMenu = menus.find(menu => menu.title === 'test menu');
    testMenu.should.not.be.empty;
  });

  it('respond with json message on success', () => {
	   res.json.should.have.been.calledWith({ 
            status: 'success',
            message: 'Menu created successfully' 
      });
  });

  it('should return error 400 if parameters are not fully given', () => {
    const badReq = mockReq(badRequest);
    MenuController.createMenu(badReq, res);
    res.status.should.have.been.calledWith(400);
  });

  it('sends an error message if parameters are not fully given', () => {
    const badReq = mockReq(badRequest);
    MenuController.createMenu(badReq, res);
    res.json.should.have.been.calledWith({
      status: 'error',
      message: 'Parameters supplied incorrectly',
    });
  });
});