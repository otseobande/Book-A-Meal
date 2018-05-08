import {
    chai,
    sinon,
    mockReq,
    mockRes,
    token
  } from '../setup';
import AuthController from '../../controllers/AuthController';

const next = sinon.spy();

describe('AuthController', () => {
    describe('login meht', () => {
        it('login method calls next function on err', () => {
            AuthController.login(null, null, next);
            next.should.have.been.called;
        })
    })
})