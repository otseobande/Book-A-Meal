import Notifier from '../../../utils/notifier';
import logger from '../../../utils/logger';

/**
 * Sends notifications on order delivery
 * @param  {object} order - Sequelize model instance
 * @return {Promise}  Promise resolving with a boolean
 */
const sendOrderDeliveredNotifications = async (order) => {
  try {
    const meal = await order.getMeal();
    const customerNotifier = new Notifier({
      userId: order.userId,
      subject: 'Order delivered',
      info: `Your order for "${meal.title}" has been delivered successfully.`
    });

    await customerNotifier.notify();

    return true;
  } catch (err) {
    logger.error(err.stack);
  }
};

export default sendOrderDeliveredNotifications;
