import React from 'react';
import ResetPasswordFormContainer, { resetPasswordFormConfig } from '../../../../src/components/Auth/ResetPassword/ResetPasswordFormContainer';
import { Provider } from 'react-redux';

describe('ResetPasswordFormContainer component', () => {
  it('should render AuthForm', () => {
    const wrapper = mount(
      <Provider store={store}>
         <ResetPasswordFormContainer />
      </Provider>
    );

    expect(wrapper.find('AuthForm')).toHaveLength(1);
  });
  describe('resetPasswordFormConfig object', () => {
    describe('mapPropsToValues function', () => {
      it('should return and object with email', () => {
        expect(resetPasswordFormConfig.mapPropsToValues()).toEqual({
          email: '',
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

        const { handleSubmit } = resetPasswordFormConfig;

        await handleSubmit({}, { setSubmitting, props });
        expect(setSubmitting).toHaveBeenNthCalledWith(1, true);
        expect(setSubmitting).toHaveBeenNthCalledWith(2, false);
      })
    })
  });
});