import dedent from 'dedent';
import Notifier from '../../../utils/notifier';

/**
 * Sends notifications on order update
 * @param  {object} order - Sequelize model instance
 * @return {Promise}  Promise resolving with a boolean
 */
const sendOrderUpdatedNotifications = async (order) => {
  const meal = await order.getMeal();
  const customer = await order.getCustomer();
  const catererNotifier = new Notifier({
    userId: meal.userId,
    subject: 'Customer updated order',
    info: dedent`
      Your customer ${customer.fullName} has updated his/her order. Updated details are:
      - Meal: ${meal.title}
      - Quantity: ${order.quantity}
      - Delivery Address: ${order.deliveryAddress}
      - Phone Number: ${order.phoneNumber}
    `
  });

  await catererNotifier.notify();
};

export default sendOrderUpdatedNotifications;
