import addMinutes from 'date-fns/add_minutes';
import isBefore from 'date-fns/is_before';

/**
 * Takes a creation date of an order and confirms if the
 * order is modifiable by returning a boolean
 *
 * @param {String} date Order creation date
 * @param {Number|String} modificationPeriod modificaition period in minutes
 *
 * @returns {Boolean} Modification status
 */
function orderIsModifiable(date, modificationPeriod = process.env.ORDER_MODIFICATION_PERIOD) {
  const dateWithPeriodAdded = addMinutes(new Date(date), modificationPeriod);

  return isBefore(new Date(), dateWithPeriodAdded);
}

export default orderIsModifiable;
