import {
  chai,
  App,
  token
} from '../../setup';

describe('DELETE /api/v1/meals/:mealId', function() {
  it('should return a success status code and message', async function() {
    const res = await chai.request(App)
      .delete('/api/v1/meals/dd72bc9b-beb0-49c6-be7b-20106e8aa3d0')
      .set('Authorization',  `Bearer ${token}`)

    res.should.have.status(200)
    res.body.should.deep.equal({
      status: 'success',
      message: 'Meal deleted successfully'
    });
  })

  it('should return an error status code and message if not found', async function() {
    const res = await chai.request(App)
      .delete('/api/v1/meals/df12bd22-3326-4929-9cd6-a3805db52ca8')
      .set('Authorization',  `Bearer ${token}`)

    res.should.have.status(404);
    res.body.should.deep.equal({
      status: 'error',
      message: 'Meal not found'
    });
  })

})