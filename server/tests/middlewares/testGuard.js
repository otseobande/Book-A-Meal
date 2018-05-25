import {
  chai,
  sinon,
  mockReq,
  mockRes
} from '../setup';
import guard from '../../src/middlewares/guard';

const catererReq = mockReq({
  user: {
    role: 'caterer'
  }
});

const customerReq = mockReq({
  user: {
    role: 'customer'
  }
});

const adminReq = mockReq({
  user: {
    role: 'admin'
  }
});

const res = mockRes();

describe('guard middleware', () => {
  const next = sinon.spy();
  it('should throw an error if not string', () => {
    guard(489).should.throw();
  });
  it('should return a function', () => {
    guard().should.be.a('function');
  });
  it('should call next if role is right', () => {
    guard('customer')(customerReq, res, next);

    next.should.have.been.called;
  });

  it('admin should be able to access routes despite guard', () => {
    guard('customer')(adminReq, res, next);

    next.should.have.been.called;
  });

  it('should return error 403 if role is wrong', () => {
    guard('customer')(catererReq, res, next);

    res.status.should.have.been.calledWith(403);
    res.json.should.have.been.calledWith({
      status: 'error',
      message: "You don't have the right privileges to access this route."
    });
  });
});
