import {
  chai,
  sinon
} from '../setup';
import trimStrings from '../../middlewares/trimStrings';

const request = {
  body: {
    name: ' Otse Obande      '
  }
};

const next = sinon.spy();

describe('trimStrings middleware', () => {
  beforeEach(() => {
    trimStrings(request, {}, next);
  });

  it('should trim strings in req body', () => {
		 request.body.name.should.be.equal('Otse Obande');
  });

  it('should call next', () => {
    next.should.have.been.called;
  });
});
