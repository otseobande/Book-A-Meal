/**
 * @jest-environment jsdom
 */

import animateWindowScrollBy from '../../src/utils/animateWindowScrollBy.js';

const speed = 10;
const delay = 20;

window.scrollBy = jest.fn();

describe('animateWindowScrollBy', () => {
  beforeEach(() => {
    jest.useFakeTimers();
    animateWindowScrollBy(speed, delay);
  });
  it('should call setTimeout', () => {
    expect(setTimeout).toHaveBeenCalledTimes(10);
  });
  it('should respect delay on each call', () => {
    for(let i = 0; i < 10; i+= 1){
      expect(setTimeout).toHaveBeenCalledWith(expect.any(Function), i * delay)
    }
  });
});