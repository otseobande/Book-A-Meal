/*  eslint-disable arrow-body-style  */

/**
 * Wrapper around the toLocalString method on numbers
 *
 * @param {Number} num Number to localize
 * @param {String} country (Optional) country string
 *
 * @returns {String} localized string
 */
const localizeNum = (num, country) => {
  return num.toLocaleString(country, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
};

export default localizeNum;
