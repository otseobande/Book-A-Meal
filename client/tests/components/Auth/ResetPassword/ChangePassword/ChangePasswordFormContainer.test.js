import React from 'react';
import ChangePasswordFormContainer, { changePasswordFormConfig } from '../../../../../src/components/Auth/ResetPassword/ChangePassword/ChangePasswordFormContainer.js';

describe('ChangePasswordFormContainer component', () => {
  it('should mount successfully', () => {
    const wrapper = mount(
      <Provider store={store}>
         <ChangePasswordFormContainer />
      </Provider>
    );

    expect(wrapper.find('AuthForm')).toHaveLength(1);
  });
  describe('changePasswordFormConfig object', () => {
    describe('mapPropsToValues function', () => {
      it('should return and object with password and passwordConfirm', () => {
        expect(changePasswordFormConfig.mapPropsToValues()).toEqual({
          password: '',
          passwordConfirm: ''
        });
      });
    });
    describe('handleSubmit function', () => {
      it('should call setSubmitting with true and then false', async () => {
        const setSubmitting = jest.fn();
        const props = {
          pathname: 'resetpassword/asdfsdasfsf',
          dispatch: () => Promise.resolve()
        };

        const { handleSubmit } = changePasswordFormConfig;

        await handleSubmit({}, { setSubmitting, props });
        expect(setSubmitting).toHaveBeenNthCalledWith(1, true);
        expect(setSubmitting).toHaveBeenNthCalledWith(2, false);
      })
    })
  });
});