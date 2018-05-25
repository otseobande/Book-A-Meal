import dedent from 'dedent';
import { notification, user } from '../models';
import mailer from './mailer';

/**
 * @class Notifier
 */
class Notifier {
  /**
   * Notifier constructor
   * @param  {string} options.userId  - User Id to notify
   * @param  {string} options.info   - Notification body
   * @param  {string} options.subject - Notification subject
   * @return {undefined}
   */
  constructor({ userId, info, subject }) {
    this.userId = userId;
    this.info = info;
    this.subject = subject;
  }

  /**
   * Sends email to user
   * @return {Promise} - Promise resolving with a boolean
   */
  async sendMail() {
    const userToNotify = await user.findOne({ where: { id: this.userId } });
    const mailOptions = {
      from: 'Book-A-Meal <no-reply@bookameal.com>',
      to: userToNotify.email,
      subject: this.subject,
      text: dedent`Hi ${userToNotify.fullName.split(' ')[0]},
        ${this.info}`
    };
    mailer(mailOptions);

    return true;
  }

  /**
   * Saves notification to the db
   * @return {Promise} - Promise resolving with sequelize notification instance
   */
  saveToDb() {
    return notification.create({
      userId: this.userId,
      info: this.info
    });
  }

  /**
   * Abstracts the notification process
   * @return {Promise} - Promise resolving with a boolean
   */
  async notify() {
    await this.saveToDb();
    await this.sendMail();

    return true;
  }
}

export default Notifier;
