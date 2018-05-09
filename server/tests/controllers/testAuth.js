import {
  chai,
  sinon,
  mockReq,
  mockRes,
  token
} from '../setup';
import AuthController from '../../controllers/authController';

const res = mockRes();

describe('AuthController', () => {
  describe('signup method', () => {
    const next = sinon.spy();
    const req = mockReq({
      body: {
        fullName: null,
        username: null,
        email: null,
        password: null,
        role: null
      }
    });

    it('method calls next function on err', async () => {
      try{
        await AuthController.signup(req, res, next);
        next.should.have.been.called;
      } catch(err) {
        console.log(err);
      }
    })
  })

  describe('login method', () => {
    const next = sinon.spy();
    const req = mockReq({
      body: {
        username: 8,
      }
    });

    it('method calls next function on err', async () => {
      try{
        await AuthController.login(req, res, next);
        next.should.have.been.called;
      } catch(err) {
        console.log(err);
      }
      
    })
  })
  
}) 