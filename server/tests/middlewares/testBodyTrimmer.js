import {
  chai,
  sinon
} from '../setup';
import bodyTrimmer from '../../src/middlewares/bodyTrimmer';

const request = {
  body: {
    name: ' Otse Obande      '
  }
};

const next = sinon.spy();

describe('bodyTrimmer middleware', () => {
  beforeEach(() => {
    bodyTrimmer(request, {}, next);
  });

  it('should trim strings in req body', () => {
		 request.body.name.should.be.equal('Otse Obande');
  });

  it('should call next', () => {
    next.should.have.been.called;
  });
});
