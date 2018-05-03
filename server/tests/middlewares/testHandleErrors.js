import {
  chai,
  sinon,
  mockReq,
  mockRes
} from '../setup';
import handleErrors from '../../middlewares/handleErrors';

const res = mockRes();

describe('handleErrors middleware', () => {
  it('return errors as response', () => {
    const error = {
      test: 'validation error',
    }

    handleErrors(error, null, res);

		res.status.should.have.been.calledWith(400);
    res.json.should.have.been.calledWith({
      error: {
        test: 'validation error',
      }
    })
  });

  it('should send descriptive server errors in non-prod environment', () => {
    process.env.NODE_ENV = "test"

    handleErrors({}, null, res);

    res.status.should.have.been.calledWith(500);
    res.json.should.have.been.calledWith({
      error: {
        test: 'validation error',
      }
    })
  })

  it('should not send descriptive server errors in prod environment', () => {
    process.env.NODE_ENV = "production";

    handleErrors({}, null, res);

    res.status.should.have.been.calledWith(500);
    res.json.should.have.been.calledWith({
      error: 'something went wrong'
    })
  })

});