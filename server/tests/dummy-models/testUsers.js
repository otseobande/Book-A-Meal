import { chai } from '../setup';
import users from '../../dummy-models/users';

describe('Dummy users data', () => {

  it('should have correct properties', () => {
    const userData = users.data[0];
    userData.should.have.property('id');
    userData.should.have.property('fullName');
    userData.should.have.property('username');
    userData.should.have.property('email');
    userData.should.have.property('password');
    userData.should.have.property('role');
  });
});
