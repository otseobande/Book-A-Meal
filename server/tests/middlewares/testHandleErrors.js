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
}

const error = {
  stack: 'stacktrace'
}
describe('handleErrors middleware', () => {
  it('return errors as response', () => {
    handleErrors(validationError, null, res, next, 'test');

		res.status.should.have.been.calledWith(400);
    res.json.should.have.been.calledWith({
      error: {
        statusText: "Bad Request",
      }
    })
  });

  it('should send descriptive server errors in non-prod environment', () => {
    handleErrors(error, null, res, next,'test');

    res.status.should.have.been.calledWith(500);
    res.json.should.have.been.calledWith({
      error: error.stack
    })
  })

  it('should not send descriptive server errors in prod environment', () => {
    handleErrors(error, null, res, next, 'production');

    res.status.should.have.been.calledWith(500);
    res.json.should.have.been.calledWith({
      error: 'something went wrong'
    })
  })
});