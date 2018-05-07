import {
  chai,
  sinon,
  mockReq,
  mockRes
} from '../setup';
import handleErrors from '../../middlewares/handleErrors';

const res = mockRes();
const next = sinon.spy();
const error = {
  test: 'validation error',
}

describe('handleErrors middleware', () => {
  it('return errors as response', () => {
    handleErrors(error, null, res, next, 'test');

		res.status.should.have.been.calledWith(400);
    res.json.should.have.been.calledWith({
      error: {
        test: 'validation error',
      }
    })
  });

  it('should send descriptive server errors in non-prod environment', () => {
    handleErrors({}, null, res, next,'test');

    res.status.should.have.been.calledWith(500);
    res.json.should.have.been.calledWith({
      error: {
        test: 'validation error',
      }
    })
  })

  it('should not send descriptive server errors in prod environment', () => {
    handleErrors({}, null, res, next, 'production');

    res.status.should.have.been.calledWith(500);
    res.json.should.have.been.calledWith({
      error: 'something went wrong'
    })
  })
});