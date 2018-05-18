import {
    chai,
    App,
    token
} from '../../setup';

describe('POST /api/v1/menu', function() {
  it('should return a success status', async function() {
    try {
      const res = await chai.request(App)
        .post('/api/v1/menu')
        .set('Authorization',  `Bearer ${token}`)
        .send({
          title: 'test menu',
          date: '2020-05-09',
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
        
      res.should.have.status(201);
      res.body.should.be.deep.equal({
        status: 'success',
        message: 'Menu created successfully'
      });
    } catch (err) {
        throw err
    }
  });
   it('should not be able to create for a past date', async function() {
    try {
      const res = await chai.request(App)
        .post('/api/v1/menu')
        .set('Authorization',  `Bearer ${token}`)
        .send({
          title: 'test menu',
          date: '2016-05-09',
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
        
      res.should.have.status(400);
      res.body.should.be.deep.equal({
        status: 'error',
        message: 'You cannot set menu for a date in the past.'
      });
    } catch (err) {
        throw err
    }
  });
});