import React from 'react';
import EditMealFormContainer, {editMealFormConfig} from '../../../../src/components/MealCard/EditMealModal/EditMealFormContainer';
import { Provider } from 'react-redux';

describe('EditMealFormContainer component', () => {
  it('should mount successfully', () => {
    const wrapper = mount(
      <Provider store={store}>
         <EditMealFormContainer />
      </Provider>
    );

    expect(wrapper.find('MealForm')).toHaveLength(1);
  });
  describe('editMealFormConfig object', () => {
    describe('mapPropsToValues function', () => {
      it('should return meal object', () => {
        const meal = {
          id: 'test-id',
          title: 'fish stew',
          description: 'sadfa',
          price: 500,
          img: 'picture.jpg'
        };

        const props = { meal }

        expect(editMealFormConfig.mapPropsToValues(props)).toEqual(meal);
      });
    });
    describe('handleSubmit function', () => {
      const setSubmitting = jest.fn();
      const props = {
        dispatch: () => Promise.resolve(),
        handleClose: jest.fn()
      };
      beforeAll(async () => {
        const { handleSubmit } = editMealFormConfig;

        await handleSubmit({}, { setSubmitting, props });
      });
      it('should call setSubmitting with true and then false', async () => {
        expect(setSubmitting).toHaveBeenNthCalledWith(1, true);
        expect(setSubmitting).toHaveBeenNthCalledWith(2, false);
      });

      it('should call handleClose prop function', () => {
        expect(props.handleClose).toBeCalled();
      })
    })
  });
});