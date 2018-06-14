/* eslint-disable no-loop-func, no-undef */

/**
 *
 * @param {number} pixels - Number of pixels to scroll down by
 * @param {number} delay - The delay of the scroll
 * @returns {undefined}
 */
const animateWindowScrollBy = (pixels, delay) => {
  for (let i = 0; i < pixels; i += 1) {
    setTimeout(() => {
      window.scrollBy(0, i);
    }, delay * i);
  }
};

export default animateWindowScrollBy;

