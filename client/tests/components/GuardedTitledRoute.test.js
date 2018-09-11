import React from 'react';
import GuardedTitledRoute from '../../src/components/GuardedTitledRoute';

const TestComp = () => (<div />);

const props = {
  component: TestComp,
  type: '',
  location: {
    pathname: '/test'
  },
  allow: 'guest',
  user: {
    role: 'guest'
  },
  loggedIn: false
}
describe('GuardedTitledRoute component', () => {
  it('should redirect if allow prop is not equal to user role and route is not for guests', () => {
    const wrapper = mount(
      <Provider store={store}>
        <MemoryRouter>
          <GuardedTitledRoute
            {...props}
            allow='caterer'
          />
        </MemoryRouter>
      </Provider>
    );

    expect(wrapper.find('Redirect')).toBeTruthy();
  });
});