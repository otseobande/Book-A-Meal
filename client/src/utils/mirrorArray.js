/**
 * Converts an array of strings to an object
 * with keys and values as the array values.
 * For example, it transforms this array `['sweet']` to this object `{ sweet: 'sweet'}`.
 *
 * @param {array} arr - Array of strings
 *
 * @returns {object} - mirrored object
 */
const mirrorArray = arr => arr.reduce((acc, value) => ({ ...acc, [value]: value }), {});

export default mirrorArray;

