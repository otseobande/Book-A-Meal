import { chai } from '../setup';
import notifications from '../../dummy-models/notifications';

describe('Dummy notifications data', () => {

  it('should have correct properties', () => {
    const notificationData = notifications.data[0];
    notificationData.should.have.property('id');
    notificationData.should.have.property('userId');
    notificationData.should.have.property('info');
    notificationData.should.have.property('isRead');
  });
});
