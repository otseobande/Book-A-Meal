import { notification } from '../../models';

const OrderCreated = async (order) => {
	const meal = await order.getMeal();
	const customerNotification = await notification.create({
		userId: order.userId,
		info: `Your order for "${meal.title}" was placed successfully and would be delivered within the next few minutes.`
	});
	const customer = await order.getCustomer();
	const catererNotification = await notification.create({
		userId: meal.userId,
		info: `An order for "${meal.title}" was just made. Order details are:
			- Quantity: ${order.quantity}
			- Delivery Address: ${order.deliveryAddress}
			- Phone Number: ${order.phoneNumber}
			- Customer Name: ${customer.fullName}
			- Customer Email: ${customer.email}
		`
	});
};

export default OrderCreated;
