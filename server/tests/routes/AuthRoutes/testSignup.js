import {
    chai,
    App,
} from '../../setup'

describe('POST /api/v1/auth/signup', function() {
    it('should return a success status', async function() {
        try {
            const res = await chai.request(App)
                .post('/api/v1/auth/signup')
                .send({
                    username: 'cookie',
                    fullName: 'Sele Mege',
                    email: 'cookie@gmail.com',
                    password: 'bookameal',
                    role: 'customer',
                });

            res.should.have.status(201);
        } catch (err) {
            console.log(err.stack);
        }
    });


    it('malformed request should return error 400', async function() {
        try {
            const res = await chai.request(App)
                .post('/api/v1/auth/signup')
                .send({
                    username: 'dogo',
                    password: 'yaro',
                });

            res.should.have.status(400);
        } catch (err) {
           console.log(err.stack);
        }
    });

    it('should return 400 with message if username is taken', async function() {
        try{
          const res = await chai.request(App)
            .post('/api/v1/auth/signup')
            .send({
                    username: 'otseobande',
                    fullName: 'Sele Mege',
                    email: 'sfdele@gmail.com',
                    password: 'bookameal',
                    role: 'customer',
                });
            res.should.have.status(409);
            res.body.message[0].should.be.equal('username "otseobande" already exists')
        } catch(err) {
          console.log(err.stack);
        }
    })

    it('should return 400 with message if email is taken', async function() {
        try{
          const res = await chai.request(App)
            .post('/api/v1/auth/signup')
            .send({
                    username: 'otsande',
                    fullName: 'Sele Mege',
                    email: 'otseobande@gmail.com',
                    password: 'bookameal',
                    role: 'customer',
                });
            res.should.have.status(409);
            res.body.message[0].should.be.equal('email "otseobande@gmail.com" already exists')
        }catch(err){
          console.log(err.stack);
        }
    })

     it('should return 400 with message if role doesnt exist', async function() {
        try{
          const res = await chai.request(App)
            .post('/api/v1/auth/signup')
            .send({
                    username: 'otsade',
                    fullName: 'Sele Mege',
                    email: 'otseobae@gmail.com',
                    password: 'bookameal',
                    role: 'saler',
                });
            console.log(res.body);
            res.should.have.status(400);
            res.body.should.be.deep.equal({
              status: false,
              message: 'role does not exist'
            })

        }catch(err){
          console.log(err.stack);
        }
    })
});