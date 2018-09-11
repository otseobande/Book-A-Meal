import React from 'react';
import LoginFormContainer, { loginFormConfig } from '../../../../src/components/Auth/Login/LoginFormContainer';
import { Provider } from 'react-redux';

describe('LoginFormContainer component', () => {
  it('should render AuthForm', () => {
    const wrapper = mount(
      <Provider store={store}>
         <LoginFormContainer />
      </Provider>
    );

    expect(wrapper.find('AuthForm')).toHaveLength(1);
  });
  describe('loginFormConfig object', () => {
    describe('mapPropsToValues function', () => {
      it('should return and object with username and password', () => {
        expect(loginFormConfig.mapPropsToValues()).toEqual({
          username: '',
          password: ''
        });
      });
    });
    describe('handleSubmit function', () => {
      it('should call setSubmitting with true and then false', async () => {
        const setSubmitting = jest.fn();
        const props = {
          location: {},
          dispatch: () => Promise.resolve()
        };

        const { handleSubmit } = loginFormConfig;

        await handleSubmit({}, { setSubmitting, props });

        expect(setSubmitting).toHaveBeenNthCalledWith(1, true);
        expect(setSubmitting).toHaveBeenNthCalledWith(2, false);
      })
    })
  });
});