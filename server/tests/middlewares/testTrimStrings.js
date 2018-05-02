import chai from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import trimStrings from '../../middlewares/trimStrings';

chai.use(sinonChai);
chai.should();

const request = {
  body: {
    name: ' Otse Obande      ',
  },
};

var next = sinon.spy();

describe('trimStrings middleware', () => {
  beforeEach(() => {
    trimStrings(request, {}, next);
  })

  it('should trim strings in req body', () => {
		 request.body.name.should.be.equal('Otse Obande');
  });

  it('should call next', () => {
    next.should.have.been.called;
  })

});