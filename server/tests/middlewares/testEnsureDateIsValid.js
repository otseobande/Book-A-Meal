import {
  chai,
  sinon,
  mockReq,
  mockRes
} from '../setup';
import { validateCreate } from '../../src/middlewares/validators/menu';

const [ensureDateIsValid] = validateCreate;

const badReq = mockReq({
  body: {
    date: 'asdfadfa'
  }
});

const goodReq = mockReq({
  body: {
    date: '2018-04-01'
  }
});

const res = mockRes();

describe('ensureDateIsValid middleware', () => {
  const next = sinon.spy();

  it('should return error message if date is invalid', () => {
    ensureDateIsValid(badReq, res, next);

    res.status.should.have.been.calledWith(400);
    res.json.should.have.been.calledWith({
      status: 'error',
      message: 'Date is invalid'
    });
  });

  it('should call next if date is valid', () => {
    ensureDateIsValid(goodReq, res, next);

    next.should.have.been.called;
  });
});
