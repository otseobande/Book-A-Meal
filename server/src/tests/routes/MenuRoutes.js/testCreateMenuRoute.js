import {
  chai,
  App,
  adminToken,
  catererToken
} from '../../setup';

describe('POST /api/v1/menu', function() {
  it('should return a success status', async function() {
    const res = await chai.request(App)
      .post('/api/v1/menu')
      .set('Authorization',  `Bearer ${adminToken}`)
      .send({
        title: 'test menu',
        date: '2020-05-09',
        categories: [{
            title: 'Benue style',
            meals: ['e20ac257-86cc-4a6f-a619-0249a201c475', 'ba8e1fd3-926f-44c9-a7b3-218aedab8c12']
          },
          { 
            title: 'Jacuzzi paruzi',
            meals: ['ba8e1fd3-926f-44c9-a7b3-218aedab8c12', 'fa56c9e7-e5f4-4086-b7e9-db581201b71f']
          }
        ]
      });
      
    res.should.have.status(201);
    res.body.status.should.be.equal('success');
    res.body.message.should.be.equal('Menu created successfully');
    res.body.menu.should.be.an('object')
  });

   it('should create menu for today if date is not given', async function() {
    const res = await chai.request(App)
      .post('/api/v1/menu')
      .set('Authorization',  `Bearer ${catererToken}`)
      .send({
        title: 'test menu',
        categories: [{
            title: 'Benue style',
            meals: ['dd72bc9b-beb0-49c6-be7b-20106e8aa3d0']
          },
          { 
            title: 'Jacuzzi paruzi',
            meals: ['64c45c00-ed18-44b7-862a-f12d0481696c', 'df12bd22-3326-4929-9cd6-a3805db52ca5']
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
      .set('Authorization',  `Bearer ${adminToken}`)
      .send({
        title: 'test menu',
        date: '2020-05-09',
        categories: [{
            title: 'Benue style',
            meals: ['e20ac257-86cc-4a6f-a619-0249a201c475', 'ba8e1fd3-926f-44c9-a7b3-218aedab8c12']
          },
          { 
            title: 'Jacuzzi paruzi',
            meals: ['ba8e1fd3-926f-44c9-a7b3-218aedab8c12', 'fa56c9e7-e5f4-4086-b7e9-db581201b71f']
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
      .set('Authorization',  `Bearer ${adminToken}`)
      .send({
        title: 'test menu',
        date: '2016-05-09',
        categories: [{
            title: 'Benue style',
            meals: ['e20ac257-86cc-4a6f-a619-0249a201c475', 'ba8e1fd3-926f-44c9-a7b3-218aedab8c12']
          },
          { 
            title: 'Jacuzzi paruzi',
            meals: ['ba8e1fd3-926f-44c9-a7b3-218aedab8c12', 'fa56c9e7-e5f4-4086-b7e9-db581201b71f']
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