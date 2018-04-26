import chai from 'chai';
import Notifications from '../../dummy-models/notifications';

chai.should();

describe('Dummy notifications data', () => {
  it('should be an array', () => {
    Notifications.should.be.an('array');
  });

  it('should have correct keys', () => {
    const notification = Notifications[0];
    notification.should.have.keys('id','userId','info','isRead');
  });
});
