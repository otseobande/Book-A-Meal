import {
  chai,
  App,
  adminToken
} from '../../setup';

describe('GET /api/v1/meals', () => {
  let res;
  before(async () => {
    res = await chai.request(App).get('/api/v1/meals')
      .set('Authorization', `Bearer ${adminToken}`);
  });
  it('should return a 200 status', () => {
    res.should.have.status(200);
  });
  it('should return a json response', () => {
    res.should.be.json;
  });
  it('should have a status property in response body that equals success', () => {
    res.body.should.have.property('status');
    res.body.status.should.equal('success');
  });
  it('should have a meals property in response body that is an array', () => {
    res.body.should.have.property('meals');
    res.body.meals.should.be.an('array');
  })
});
