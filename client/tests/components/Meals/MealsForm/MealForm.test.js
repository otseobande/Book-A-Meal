import React from 'react';
import MealForm from '../../../../src/components/Meals/MealForm/MealForm';

const props = {
  values: {
    img: undefined
  },
  touched: {},
  errors: {},
  isSubmitting: false,
  handleChange: jest.fn(),
  handleBlur: jest.fn(),
  handleSubmit: jest.fn(),
  handleClose: jest.fn(),
  setFieldValue: jest.fn()
}
describe('MealForm component', () => {
  it('should match snapshot if values.img is undefined', () => {
    const wrapper = shallow(
      <MealForm
        {...props}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });
  it('should match snapshot if values.img is not undefined', () => {
    const wrapper = shallow(
      <MealForm
        {...props}
        values={{ img: 'pic.jpg' }}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });

  describe('handleImageChange method', () => {
    const event = {
      currentTarget: {
        files: ['test-file']
      }
    };

    it('should call setFieldValue prop function with image file', () => {
      const wrapper = shallow(
        <MealForm
          {...props}
        />
      );

      wrapper.instance().handleImageChange(event);

      expect(props.setFieldValue).toHaveBeenCalledWith(
        'image',
        event.currentTarget.files[0]
      )
    })
  })
});