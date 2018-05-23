import dedent from 'dedent';
import { user as User } from '../../../models';
import Notifier from '../../../utils/notifier';

/**
 * Sends notifications when menu is set for the day
 * @param  {object} order - Sequelize model instance
 * @return {Promise}  Promise resolving with a boolean
 */
const sendNotificationsForTodaysMenu = async (menu) => {
  const caterer = await menu.getCaterer();
  const { categories } = menu
  const categoryTitles = categories.map(category => category.title);
  const meals = categories.reduce((acc, category) => acc.concat(category.meals.map(meal => meal.title)), []);

  const users = await User.findAll({ where: { role: 'customer' } });

  users.forEach(async (user) => {
    const subject = 'New Order';
    const customerNotifier = new Notifier({
      userId: user.id,
      subject: `${caterer.fullName} has set the menu for the day`,
      info: `Menu for the day includes ${meals.join(', ')}. Visit Book-A-Meal to place an order.`
    });

    await customerNotifier.notify();
  });

  return true;
};

export default sendNotificationsForTodaysMenu;

