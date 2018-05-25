import {
  chai,
  App,
  adminToken
} from '../../setup'

describe('GET /api/v1/meals/:mealId', () => {
  it('should return a success status 200', async () => {
    const res = await chai.request(App)
      .get('/api/v1/meals/64c45c00-ed18-44b7-862a-f12d0481696c')
      .set('Authorization',  `Bearer ${adminToken}`);
      
    res.should.have.status(200);
    res.body.meal.should.be.an('object');
  })

  it('should return status 404 if not found', async () => {
    const res = await chai.request(App)
      .get('/api/v1/meals/df12bd22-3326-4929-9cd6-a3805db52ca8')
      .set('Authorization',  `Bearer ${adminToken}`);

    res.should.have.status(404); 
  })
})