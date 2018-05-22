import Notifier from '../../../helpers/notifier';

const sendOrderDeliveredNotifications = async (order) => {
	const meal = await order.getMeal();
	const customerNotifier = new Notifier({
		userId: order.userId,
		subject: 'Order delivered',
		info: `Your order for "${meal.title}" has been delivered successfully.`
	})

	await customerNotifier.notify();
};

export default sendOrderDeliveredNotifications;
