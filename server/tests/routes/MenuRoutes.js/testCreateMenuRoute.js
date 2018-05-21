import {
  chai,
  App,
  token
} from '../../setup';

describe('POST /api/v1/menu', function() {
  it('should return a success status', async function() {
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
    res.body.status.should.be.equal('success');
    res.body.message.should.be.equal('Menu created successfully');
    res.body.menu.should.be.an('object')
  });
  it('should return a conflict status if menu is already set for a day', async function() {
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
      
    res.should.have.status(409);
    res.body.status.should.be.equal('error');
    res.body.message.should.be.equal('You have already set the menu for this day, you can only set one menu per day.');
    res.body.menu.should.be.an('object');
  });
  
  it('should not be able to create for a past date', async function() {
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
  });
});