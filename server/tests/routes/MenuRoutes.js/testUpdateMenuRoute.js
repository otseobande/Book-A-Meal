import {
  chai,
  App,
  token
} from '../../setup';

describe('PUT /api/v1/menu/:date', function() {
  it('should return a success status 200', async function() {
    const res = await chai.request(App)
      .put('/api/v1/menu/2018-06-24')
      .set('Authorization',  `Bearer ${token}`)
      .send({
          title: 'test menu',
          categories: [{
            title: 'Benue style',
            mealIds: ['e20ac257-86cc-4a6f-a619-0249a201c475', 'ba8e1fd3-926f-44c9-a7b3-218aedab8c12']
          },
          { 
            title: 'Jacuzzi paruzi',
            mealIds: ['ba8e1fd3-926f-44c9-a7b3-218aedab8c12', 'fa56c9e7-e5f4-4086-b7e9-db581201b71f']
          }
        ]
      });

    res.should.have.status(200);
    res.body.should.deep.equal({
      status: 'success',
      message: 'Menu updated successfully'
    })
  });

  it('should return a success status 200 without categories', async function() {
    const res = await chai.request(App)
      .put('/api/v1/menu/2018-06-25')
      .set('Authorization',  `Bearer ${token}`)
      .send({
          title: 'test menu',
      });

    res.should.have.status(200);
    res.body.should.deep.equal({
      status: 'success',
      message: 'Menu updated successfully'
    })
  });

  it('should return an error 404 if not found', async function() {
    const res = await chai.request(App)
      .put('/api/v1/menu/2030-01-24')
      .set('Authorization',  `Bearer ${token}`)
      .send({
          title: 'test menu',
          categories: [{
            title: 'Benue style',
            mealIds: ['e20ac257-86cc-4a6f-a619-0249a201c475', 'ba8e1fd3-926f-44c9-a7b3-218aedab8c12']
          },
          { 
            title: 'Jacuzzi paruzi',
            mealIds: ['ba8e1fd3-926f-44c9-a7b3-218aedab8c12', 'fa56c9e7-e5f4-4086-b7e9-db581201b71f']
          }
        ]
      });

    res.should.have.status(404);
    res.body.should.deep.equal({
      status: 'error',
      message: 'Menu not found'
    })
  });
  it('should return an error 404 if not found without categories', async function() {
    const res = await chai.request(App)
      .put('/api/v1/menu/2050-01-24')
      .set('Authorization',  `Bearer ${token}`)
      .send({
          title: 'test menu',
      });

    res.should.have.status(404);
    res.body.should.deep.equal({
      status: 'error',
      message: 'Menu not found'
    })
  });
});