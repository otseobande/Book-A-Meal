import Notifier from '../../../helpers/notifier';

const sendOrderUpdatedNotifications = async (order) => {
	const meal = await order.getMeal();
	const customer = await order.getCustomer();
	const catererNotifier = new Notifier({
		userId: meal.userId,
		subject: 'Customer updated order',
		info: `Your customer ${customer.fullName} has updated his/her order. New order details are:
			- Meal: ${meal.title}
			- Quantity: ${order.quantity}
			- Delivery Address: ${order.deliveryAddress}
			- Phone Number: ${order.phoneNumber}
		`
	});

	await catererNotifier.notify();
};

export default sendOrderUpdatedNotifications;
