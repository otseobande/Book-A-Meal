import chai from 'chai';
import users from '../../dummy-models/users';

chai.should();

describe('Dummy users data', () => {

  it('should have correct properties', () => {
    const userData = users.data[0];
    userData.should.have.property('id');
    userData.should.have.property('name');
    userData.should.have.property('email');
    userData.should.have.property('password');
    userData.should.have.property('role');
  });
});
