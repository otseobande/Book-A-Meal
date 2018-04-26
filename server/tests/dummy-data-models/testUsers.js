import chai from 'chai';
import Users from '../../dummy-models/users';

chai.should();

describe('Dummy users data', () => {
  it('should be an array', () => {
    Users.should.be.an('array');
  });

  it('should have correct keys', () => {
    const user = Users[0];
    user.should.have.keys('id','name','email','password','role');
  });
});
