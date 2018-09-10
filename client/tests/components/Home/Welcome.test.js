import React from 'react';
import Welcome from '../../../src/components/Home/Welcome/Welcome';

describe('Welcome component', () => {
  const wrapper = mount(
    <Provider store={store}>
      <MemoryRouter>
        <Welcome />
      </MemoryRouter>
    </Provider>
  );

  const welcomeWrapper = wrapper.find('Welcome');

  beforeAll(() => {
    jest.useFakeTimers();
  });

  it('should match snapshot', () => {
    expect(welcomeWrapper).toMatchSnapshot();
  });

  describe('animateHungry method', () => {
    it('should call setTimeout to toggle classes on this.hungryElements', () => {
      const element = {
        classList: {
          toggle: jest.fn()
        }
      }

      welcomeWrapper.instance().animateHungry();

      const hungryElements = welcomeWrapper.instance().hungryElements;

      expect(setTimeout).toBeCalledWith(expect.any(Function), 250);
      expect(setTimeout).toHaveBeenCalledTimes(hungryElements.length);
    });
  });

  it('should call setInterval on component mount', () => {
    welcomeWrapper.instance().componentDidMount();

    expect(setInterval).toBeCalledWith(welcomeWrapper.instance().animateHungry, 2500);
  });

  it('should call clearInterval when component unmounts', () => {
    const animationInterval = welcomeWrapper.instance().animationInterval;
    welcomeWrapper.instance().componentWillUnmount();

    expect(clearInterval).toBeCalledWith(animationInterval);
  });
});