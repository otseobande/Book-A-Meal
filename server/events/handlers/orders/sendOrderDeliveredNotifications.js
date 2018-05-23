import Notifier from '../../../utils/notifier';

/**
 * Sends notifications on order delivery
 * @param  {object} order - Sequelize model instance
 * @return {Promise}  Promise resolving with a boolean
 */
const sendOrderDeliveredNotifications = async (order) => {
  const meal = await order.getMeal();
  const customerNotifier = new Notifier({
    userId: order.userId,
    subject: 'Order delivered',
    info: `Your order for "${meal.title}" has been delivered successfully.`
  });

  await customerNotifier.notify();

  return true;
};

export default sendOrderDeliveredNotifications;
