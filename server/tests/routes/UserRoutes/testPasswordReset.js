import { user } from '../../../src/models';
import {
  chai,
  App,
  resetToken
} from '../../setup';


describe('PUT /api/v1/users/reset_password', () => {
  it('should return a success status on password change', async () => {
    const currentUser = await user.find({
      where: {
        email: 'mealbooker@gmail.com'
      }
    });

    const updatedUser = await currentUser.updateAttributes({ resetToken });

    const res = await chai.request(App)
      .put('/api/v1/users/reset_password')
      .send({
        password: 'new_password',
        resetToken: updatedUser.resetToken
      });

    console.log({body: res.body})
    res.should.have.status(200);
    res.body.should.be.deep.equal({
      status: 'success',
      message: 'password reset successful'
    })
  });


  it('malformed request should return error 400', async () => {
    const res = await chai.request(App)
      .put('/api/v1/users/reset_password')
      .send({
        password: 'sdfiocn'
      });

    res.should.have.status(400);
  });
});
