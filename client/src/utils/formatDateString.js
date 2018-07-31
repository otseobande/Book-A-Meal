import format from 'date-fns/format';

/**
 * Abstracts date-fns format methods
 *
 * @param {String} dateString Unformatted date string
 * @returns {String} Formatted date string
 */
const formatDateString = dateString => format(
  new Date(dateString),
  'Mo MMM, YYYY'
);

export default formatDateString;
