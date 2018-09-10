import React from 'react';
import SignUpFormContainer, { signUpFormConfig } from '../../../../src/components/Auth/SignUp/SignUpFormContainer';
import { Provider } from 'react-redux';

describe('SignUpFormContainer component', () => {
  it('should render AuthForm component', () => {
    const wrapper = mount(
      <Provider store={store}>
         <SignUpFormContainer />
      </Provider>
    );

    expect(wrapper.find('AuthForm')).toBeTruthy();
  });
  describe('signupFormConfig object', () => {
    describe('mapPropsToValues function', () => {
      it('should return and object with username and password', () => {
        expect(signUpFormConfig.mapPropsToValues()).toEqual({
          fullName: '',
          username: '',
          email: '',
          role: '',
          password: '',
          passwordConfirm: ''
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

        const { handleSubmit } = signUpFormConfig;

        await handleSubmit({}, { setSubmitting, props });
        expect(setSubmitting).toHaveBeenNthCalledWith(1, true);
        expect(setSubmitting).toHaveBeenNthCalledWith(2, false);
      })
    })
  });
});