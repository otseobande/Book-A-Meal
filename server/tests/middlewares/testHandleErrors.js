import chai from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { mockReq, mockRes } from 'sinon-express-mock';
import handleErrors from '../../middlewares/handleErrors';

chai.use(sinonChai);
chai.should();


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