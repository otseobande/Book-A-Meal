import {
  chai,
  sinon,
  mockReq,
  mockRes
} from '../setup';
import handleErrors from '../../middlewares/handleErrors';

const res = mockRes();
const next = sinon.spy();
const validationError = {
  statusText: "Bad Request",
  errors: [
    {
      messages: []
    }
  ]
}

const error = {
  stack: 'stacktrace'
}
describe('handleErrors middleware', () => {
  it('return errors as response', () => {
    handleErrors(validationError, null, res, next, 'test');

		res.status.should.have.been.calledWith(400);
    res.json.should.have.been.calledWith({ 
      message: [], 
      status: 'error', 
    })
  });

  it('should send descriptive server errors in non-prod environment', () => {
    handleErrors(error, null, res, next,'test');

    res.status.should.have.been.calledWith(500);
    res.json.should.have.been.calledWith({
      status: 'error',
      message: error.stack
    })
  })

  it('should not send descriptive server errors in prod environment', () => {
    handleErrors(error, null, res, next, 'production');

    res.status.should.have.been.calledWith(500);
    res.json.should.have.been.calledWith({
      status: 'error',
      message: 'something went wrong'
    })
  })

  it('should return error 409 if a database conflict occurs', () => {
    const errorMock = {
      errors: [{
          path: 'meal',
          value: 1
        }
      ],
      name: 'SequelizeUniqueConstraintError',
    }
    handleErrors(errorMock, null, res, next, 'production');

    res.status.should.have.been.calledWith(409);
    res.json.should.have.been.calledWith({
      status: 'error',
      message: ['meal "1" already exists']
    })
  })
});