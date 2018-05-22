import { notification, user } from '../models';
import mailer from './mailer';

class Notifier{
	constructor ({userId, info, subject}) {
		this.userId = userId;
		this.info = info;
		this.subject = subject
	}

	async sendMail(){
		const userToNotify = await user.findOne({where: {id: this.userId}});
		const mailOptions = {
		    from: 'Book-A-Meal <no-reply@bookameal.com>',
		    to: userToNotify.email, 
		    subject: this.subject, 
		    text: `Hi ${userToNotify.fullName.split(' ')[0]},
		    ${this.info}`
		}
		mailer(mailOptions);
	}

	async saveToDb() {
		await notification.create({
			userId: this.userId,
			info: this.info
		})

		return this;
	}
}

export default Notifier;