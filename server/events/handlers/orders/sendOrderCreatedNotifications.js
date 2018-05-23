import dedent from 'dedent';
import Notifier from '../../../utils/notifier';

/**
 * Sends notifications on order creation
 * @param  {object} order - Sequelize model instance
 * @return {Promise}  Promise resolving with a boolean
 */
const sendOrderCreatedNotifications = async (order) => {
  const meal = await order.getMeal();
  const subject = 'New Order';
  const customerNotifier = new Notifier({
    userId: order.userId,
    subject,
    info: `Your order for "${meal.title}" was placed successfully and would be delivered within the next few minutes.`
  });

  await customerNotifier.notify();

  const customer = await order.getCustomer();
  const catererNotifier = new Notifier({
    userId: meal.userId,
    subject,
    info: dedent`
      An order for "${meal.title}" was just made. Order details are:
      - Quantity: ${order.quantity}
      - Delivery Address: ${order.deliveryAddress}
      - Phone Number: ${order.phoneNumber}
      - Customer Name: ${customer.fullName}
      - Customer Email: ${customer.email}
    `
  });

  await catererNotifier.notify();

  return true;
};

export default sendOrderCreatedNotifications;

