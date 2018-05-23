import nodemailer from 'nodemailer';
import { mail } from '../config';

/**
 * Mailer setup
 *
 * @param  {object} mailOptions - Mail message, to, etc
 * @return {undefined}
 */
const mailer = (mailOptions) => {
  const transporter = nodemailer.createTransport(mail.smtpConfig);

  transporter.sendMail(mailOptions);
};

export default mailer;
