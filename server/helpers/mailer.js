import nodemailer from 'nodemailer';
import { mail } from '../config';

const mailer = (mailOptions) => {
	let transporter = nodemailer.createTransport(mail.smtpConfig);

	transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
	});
}

export default mailer;
	// let mailOptions = {
	//     from: '"Fred Foo 👻" <foo@example.com>', // sender address
	//     to: 'bar@example.com, baz@example.com', // list of receivers
	//     subject: 'Hello ✔', // Subject line
	//     text: 'Hello world?', // plain text body
	//     html: '<b>Hello world?</b>' // html body
	// };