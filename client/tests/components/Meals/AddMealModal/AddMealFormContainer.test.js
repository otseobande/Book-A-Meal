import React from 'react';
import { Provider } from 'react-redux';
import AddMealFormContainer, { addMealFormConfig } from '../../../../src/components/Meals/AddMealModal/AddMealFormContainer';

describe('AddMealFormContainer component', () => {
  it('should render MealForm component', () => {
    const wrapper = mount(
      <Provider store={store}>
         <AddMealFormContainer />
      </Provider>
    );

    expect(wrapper.find('MealForm')).toBeTruthy();
  });
  describe('addMealFormConfig object', () => {
    describe('mapPropsToValues function', () => {
      it('should return and object with username and password', () => {
        expect(addMealFormConfig.mapPropsToValues()).toEqual({
          title: '',
          description: '',
          price: '',
          img: undefined
        });
      });
    });
    describe('handleSubmit function', () => {
      const props = {
        handleClose: jest.fn(),
        dispatch: () => Promise.resolve()
      };

      it('should call setSubmitting with true and then false', async () => {
        const setSubmitting = jest.fn();
        const { handleSubmit } = addMealFormConfig;
        await handleSubmit({}, { setSubmitting, props });

        expect(setSubmitting).toHaveBeenNthCalledWith(1, true);
        expect(setSubmitting).toHaveBeenNthCalledWith(2, false);
      });

      it('should call handleClose prop', async () => {
        const setSubmitting = jest.fn();
        const { handleSubmit } = addMealFormConfig;
        await handleSubmit({}, { setSubmitting, props });

        expect(props.handleClose).toBeCalled();
      })
    })
  });
});