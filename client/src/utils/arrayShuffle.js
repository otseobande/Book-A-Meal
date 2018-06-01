/**
 * shuffles an array
 * 
 * @param  {array} - ordered array 
 * @return {array} - shuffled array
 */
const arrayShuffle = (array) => array.sort(() => 0.5 - Math.random());

export default arrayShuffle;