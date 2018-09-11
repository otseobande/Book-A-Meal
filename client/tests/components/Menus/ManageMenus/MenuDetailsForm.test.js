import React from 'react';
import MenuDetailsForm from '../../../../src/components/Menus/ManageMenus/MenuDetailsForm';

const props = {
  closeModal: jest.fn(),
  handleSave: jest.fn(),
  meals: [],
  date: '2018-09-11',
  categories: [{
    title: '',
    meals: []
  }]
}
describe('MenuDetailsForm component', () => {
  it('should match snapshot if menus array is empty', () => {
    const wrapper = shallow(
      <MenuDetailsForm {...props}/>
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('should match snapshot if menus array is not empty', () => {
    const wrapper = shallow(
      <MenuDetailsForm
        {...props}
        meals={[{
          id: 'test-id',
          title: 'party rice',
          price: 300,
          img: 'image.png'
        }]}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('should match snapshot if date is not given in prop', () => {
    const wrapper = shallow(
      <MenuDetailsForm
        {...props}
        date={undefined}
        meals={[{
          id: 'test-id',
          title: 'party rice',
          price: 300,
          img: 'image.png'
        }]}
      />
    );

    expect(wrapper).toMatchSnapshot();
  })

  describe('addCategory method', () => {
    it('should add category to state', () => {
      const wrapper = shallow(
        <MenuDetailsForm {...props}/>
      );

      wrapper.instance().addCategory();

      const { categories } = wrapper.instance().state;

      expect(categories).toEqual([{
        title: '',
        meals: []
      },
      {
        title: '',
        meals: []
      }])
    });
  });

  describe('handleDateChange method', () => {
    it('should update date in state', () => {
      const wrapper = shallow(
        <MenuDetailsForm {...props}/>
      );
      const event = {
        target: {
          value: '2018-10-29'
        }
      };

      wrapper.instance().handleDateChange(event);

      const { date } = wrapper.instance().state;

      expect(date).toEqual(event.target.value);
    });
  });

  describe('handleCategoryTitleChange method', () => {
    const wrapper = shallow(
      <MenuDetailsForm {...props}/>
    );

    const handleCategoryTitleChangeThunk = wrapper.instance().handleCategoryTitleChange(0);

    it('should return a function', () => {
      expect(typeof handleCategoryTitleChangeThunk).toBe('function');
    });

    it('should return a thunk that takes an event and updates category title in state', () => {
      const event = {
        target: {
          value: 'test title'
        }
      };
      handleCategoryTitleChangeThunk(event);

      const { categories } = wrapper.instance().state;

      expect(categories[0].title).toBe('test title')
    });
  });

  describe('toggleMealInCategory method', () => {
    const meals = [{
      id: '32ddewf'
    }, {
      id: 'da9f384'
    }]
    const wrapper = shallow(
      <MenuDetailsForm
        {...props}
      />
    );
    const toggleMealthunk = wrapper.instance().toggleMealInCategory(0);

    it('should return a function', () => {
      expect(typeof toggleMealthunk).toBe('function');
    });

    it('should add meal to category in state if not there already', () => {
      const meal = {
        id: '3e23edu'
      };

      toggleMealthunk(meal);

      const { categories } = wrapper.instance().state;

      expect(categories[0].meals).toContain(meal);
    });

    it('should remove meal from category in state if it exists already', () => {
      const meal = {
        id: '3e23edu'
      };

      toggleMealthunk(meal);

      const { categories } = wrapper.instance().state;

      expect(categories[0].meals).not.toContain(meal);
    });
  });

  describe('removeCategory method', () => {
    const wrapper = shallow(
      <MenuDetailsForm
        {...props}
      />
    );

    const removeCategoryThunk = wrapper.instance().removeCategory(0);

    it('should return a function', () => {
      expect(typeof removeCategoryThunk).toBe('function');
    });

    it('should remove category if returned thunk is called', () => {
      removeCategoryThunk();
      const { categories } = wrapper.instance().state;

      expect(categories).toEqual([]);
    });
  });

  describe('handleSave function', () => {
    it('should set state with error message if fields are not provided', async () => {
      const wrapper = shallow(
        <MenuDetailsForm
          {...props}
        />
      );

      await wrapper.instance().handleSave();
      const { date, categories, errors } = wrapper.instance().state;

      expect(errors).toEqual({"categories[0].meals": "Meals are required in categories"});
    });

    it('should call handleSave prop function with menu info', async () => {
      const wrapper = shallow(
        <MenuDetailsForm
          {...props}
          categories={[{
            title: 'test menu',
            meals: [{
              id: '3e23edu'
            }]
          }]}
        />
      );

      await wrapper.instance().handleSave();
      const { date } = wrapper.instance().state;

      expect(props.handleSave).toBeCalledWith({"categories": [{"meals": ["3e23edu"], "title": "test menu"}], date});
    });
  });
});